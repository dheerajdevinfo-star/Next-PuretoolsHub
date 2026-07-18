"use client"

import { useState, useEffect } from "react"
import { Copy, Download, Share2, SlidersHorizontal } from "lucide-react"
import './emi.css' // same CSS reuse
import { sipConfig, SipType } from "@/lib/sipData"

// ─── Helpers ─────────────────────────────────────────────────

function formatINR(amount: number): string {
  return "₹" + Math.round(amount).toLocaleString("en-IN")
}

function formatINRDisplay(amount: number): string {
  return "₹" + Math.round(amount).toLocaleString("en-IN")
}

// ─── SIP Formulas ────────────────────────────────────────────

// Regular SIP future value
function calcSIP(monthly: number, annualRate: number, tenureYears: number) {
  const r = annualRate / 12 / 100
  const n = tenureYears * 12
  const futureValue = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
  const invested = monthly * n
  const returns = futureValue - invested
  return { futureValue, invested, returns }
}

// Lumpsum future value
function calcLumpsum(principal: number, annualRate: number, tenureYears: number) {
  const futureValue = principal * Math.pow(1 + annualRate / 100, tenureYears)
  const invested = principal
  const returns = futureValue - invested
  return { futureValue, invested, returns }
}

// Step-up SIP future value
function calcStepUp(monthly: number, annualRate: number, tenureYears: number, stepUpPct: number) {
  const r = annualRate / 12 / 100
  let futureValue = 0
  let invested = 0
  let currentSIP = monthly

  for (let year = 0; year < tenureYears; year++) {
    for (let month = 0; month < 12; month++) {
      const monthsLeft = (tenureYears - year) * 12 - month
      futureValue += currentSIP * Math.pow(1 + r, monthsLeft)
      invested += currentSIP
    }
    currentSIP = currentSIP * (1 + stepUpPct / 100)
  }

  const returns = futureValue - invested
  return { futureValue, invested, returns }
}

// SWP — months corpus will last
function calcSWP(corpus: number, annualRate: number, monthlyWithdrawal: number) {
  const r = annualRate / 12 / 100
  let balance = corpus
  let months = 0
  let totalWithdrawn = 0

  while (balance > 0 && months < 600) {
    balance = balance * (1 + r) - monthlyWithdrawal
    totalWithdrawn += monthlyWithdrawal
    months++
    if (balance < monthlyWithdrawal) break
  }

  return {
    months,
    years: Math.floor(months / 12),
    totalWithdrawn,
    remainingCorpus: Math.max(0, balance),
  }
}

// Yearly breakdown for SIP
function calcSIPYearlyData(monthly: number, annualRate: number, tenureYears: number) {
  const r = annualRate / 12 / 100
  const checkYears = Array.from({ length: tenureYears }, (_, i) => i + 1)
    .filter(y => y === 1 || y === Math.ceil(tenureYears / 2) || y === tenureYears)

  return checkYears.map(year => {
    const n = year * 12
    const futureValue = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
    const invested = monthly * n
    return {
      year,
      invested: Math.round(invested),
      returns: Math.round(futureValue - invested),
      futureValue: Math.round(futureValue),
    }
  })
}

// ─── Component ───────────────────────────────────────────────

type Props = { sipType: SipType }

export default function SIPCalculator({ sipType }: Props) {
  const config = sipConfig[sipType]

  const [amount, setAmount] = useState(config.defaultAmount)

  const [rate, setRate] = useState(config.defaultRate)
  const [tenure, setTenure] = useState(config.defaultTenure)


  // const [stepUp, setStepUp]   = useState(
  //   "defaultStepUp" in config ? config.defaultStepUp : 10
  // )
  // const [withdrawal, setWithdrawal] = useState(
  //   "defaultWithdrawal" in config ? config.defaultWithdrawal : 10000
  // )

  const [stepUp, setStepUp] = useState<number>(
    "defaultStepUp" in config ? (config.defaultStepUp ?? 10) : 10
  )
  const [withdrawal, setWithdrawal] = useState<number>(
    "defaultWithdrawal" in config ? (config.defaultWithdrawal ?? 10000) : 10000
  )

  const [results, setResults] = useState({
    futureValue: 0,
    invested: 0,
    returns: 0,
    // SWP specific
    months: 0,
    years: 0,
    totalWithdrawn: 0,
    remainingCorpus: 0,
  })

  // Calculate results
  useEffect(() => {
    if (sipType === "lumpsum") {
      const r = calcLumpsum(amount, rate, tenure)
      setResults(prev => ({ ...prev, ...r }))
    } else if (sipType === "step-up") {
      const r = calcStepUp(amount, rate, tenure, stepUp)
      setResults(prev => ({ ...prev, ...r }))
    } else if (sipType === "swp") {
      const r = calcSWP(amount, rate, withdrawal)
      setResults(prev => ({ ...prev, ...r }))
    } else {
      const r = calcSIP(amount, rate, tenure)
      setResults(prev => ({ ...prev, ...r }))
    }
  }, [amount, rate, tenure, stepUp, withdrawal, sipType])

  // Slider fill update
  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLInputElement>(".emi_range")
    sliders.forEach(el => {
      const min = Number(el.min)
      const max = Number(el.max)
      const val = Number(el.value)
      const pct = ((val - min) / (max - min)) * 100
      el.style.background = `linear-gradient(to right, #1D9E75 ${pct}%, #E5E7EB ${pct}%)`
    })
  }, [amount, rate, tenure, stepUp, withdrawal])

  // Chart %
  const investedPct = results.futureValue > 0
    ? Math.round((results.invested / results.futureValue) * 100)
    : 0
  const circumference = 2 * Math.PI * 30

  const yearRows = sipType !== "swp" && sipType !== "lumpsum"
    ? calcSIPYearlyData(amount, rate, tenure)
    : []

  return (
    <div className="emi_wrapper">

      {/* ── Left card — Inputs ── */}
      <div className="emi_card">
        <h2 className="emi_card_title">
          <SlidersHorizontal size={16} color="#1D9E75" />
          Investment details bharein
        </h2>

        {/* Amount */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">{config.amountLabel}</span>
            <span className="slider_val">{formatINRDisplay(amount)}</span>
          </div>
          <input
            type="range"
            min={config.minAmount}
            max={config.maxAmount}
            step={config.step}
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className="emi_range"
          />
          <div className="range_hints">
            <span>{config.amountHints[0]}</span>
            <span>{config.amountHints[1]}</span>
          </div>
        </div>

        {/* Monthly withdrawal — only SWP */}
        {sipType === "swp" && (
          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Monthly withdrawal</span>
              <span className="slider_val">{formatINRDisplay(withdrawal)}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={500000}
              step={1000}
              value={withdrawal}
              onChange={e => setWithdrawal(Number(e.target.value))}
              className="emi_range"
            />
            <div className="range_hints">
              <span>₹1,000</span>
              <span>₹5 lakh</span>
            </div>
          </div>
        )}

        {/* Step-up % — only step-up */}
        {sipType === "step-up" && (
          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Annual step-up</span>
              <span className="slider_val">{stepUp}%</span>
            </div>
            <input
              type="range"
              min={"minStepUp" in config ? config.minStepUp : 1}
              max={"maxStepUp" in config ? config.maxStepUp : 50}
              step={1}
              value={stepUp}
              onChange={e => setStepUp(Number(e.target.value))}
              className="emi_range"
            />
            <div className="range_hints">
              <span>1%</span>
              <span>50%</span>
            </div>
          </div>
        )}

        {/* Expected return rate */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Expected return (p.a.)</span>
            <span className="slider_val">{rate}%</span>
          </div>
          <input
            type="range"
            min={config.minRate}
            max={config.maxRate}
            step={0.5}
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
            className="emi_range"
          />
          <div className="range_hints">
            <span>{config.minRate}%</span>
            <span>{config.maxRate}%</span>
          </div>
        </div>

        {/* Tenure — not shown for SWP */}
        {sipType !== "swp" && (
          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Investment tenure</span>
              <span className="slider_val">{tenure} {tenure === 1 ? "year" : "years"}</span>
            </div>
            <input
              type="range"
              min={config.minTenure}
              max={config.maxTenure}
              step={1}
              value={tenure}
              onChange={e => setTenure(Number(e.target.value))}
              className="emi_range"
            />
            <div className="range_hints">
              <span>{config.minTenure} year</span>
              <span>{config.maxTenure} years</span>
            </div>
          </div>
        )}

        <button className="calc_btn">Calculate</button>

        <div className="sdc_flex_box">
          <button className="share_btn"><Share2 /> Share</button>
          <button className="download_pdf_btn"><Download /> Download PDF</button>
          <button className="copy_btn"><Copy /> Copy result</button>
        </div>
      </div>

      {/* ── Right card — Results ── */}
      <div className="emi_card">
        <h2 className="emi_card_title">Aapka result</h2>

        {/* SWP result */}
        {sipType === "swp" ? (
          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Total corpus</div>
              <div className="metric_value">{formatINR(amount)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">Monthly withdrawal</div>
              <div className="metric_value">{formatINR(withdrawal)}</div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Corpus chalega</div>
              <div className="metric_value metric_large">
                {results.years} years {results.months % 12} months
              </div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">Total withdrawn</div>
              <div className="metric_value">{formatINR(results.totalWithdrawn)}</div>
            </div>
          </div>
        ) : (
          // SIP / Lumpsum / Step-up result
          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Total invested</div>
              <div className="metric_value">{formatINR(results.invested)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">Total returns</div>
              <div className="metric_value" style={{ color: "#1D9E75" }}>
                {formatINR(results.returns)}
              </div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Future value</div>
              <div className="metric_value metric_large">
                {formatINR(results.futureValue)}
              </div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">Wealth gain</div>
              <div className="metric_value">
                {results.invested > 0
                  ? `${((results.returns / results.invested) * 100).toFixed(1)}%`
                  : "0%"}
              </div>
            </div>
          </div>
        )}

        {/* Donut chart — SIP/Lumpsum/Step-up only */}
        {sipType !== "swp" && (
          <div className="donut_row">
            <svg width="80" height="80" viewBox="0 0 80 80" style={{ flexShrink: 0 }}>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#E1F5EE" strokeWidth="12" />
              <circle
                cx="40" cy="40" r="30" fill="none" stroke="#1D9E75" strokeWidth="12"
                strokeDasharray={`${(investedPct / 100) * circumference} ${circumference}`}
                strokeDashoffset={circumference * 0.25}
                transform="rotate(-90 40 40)"
              />
              <text x="40" y="44" textAnchor="middle" fontSize="11" fontWeight="500" fill="#0F6E56">
                {investedPct}%
              </text>
            </svg>
            <div className="legend">
              <div className="legend_item">
                <div className="legend_dot" style={{ background: "#1D9E75" }} />
                <span>Invested</span>
                <span className="legend_val">{formatINR(results.invested)}</span>
              </div>
              <div className="legend_item">
                <div className="legend_dot" style={{ background: "#FAEEDA", border: "1px solid #854F0B" }} />
                <span>Returns</span>
                <span className="legend_val">{formatINR(results.returns)}</span>
              </div>
              <div className="legend_item">
                <div className="legend_dot" style={{ background: "#185FA5" }} />
                <span>Future value</span>
                <span className="legend_val">{formatINR(results.futureValue)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Yearly table — SIP / Step-up only */}
        {yearRows.length > 0 && (
          <table className="year_table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Invested</th>
                <th>Returns</th>
                <th>Future value</th>
              </tr>
            </thead>
            <tbody>
              {yearRows.map(row => (
                <tr key={row.year}>
                  <td>{row.year}</td>
                  <td>{formatINR(row.invested)}</td>
                  <td className="td_green">{formatINR(row.returns)}</td>
                  <td>{formatINR(row.futureValue)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  )
}