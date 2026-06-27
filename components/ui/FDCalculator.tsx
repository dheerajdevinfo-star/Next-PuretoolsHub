"use client"

import { useState, useEffect } from "react"
import { Copy, Download, Share2, SlidersHorizontal } from "lucide-react"
import './emi.css'
import { fdConfig, FdType } from "@/lib/fdData"

// ─── Helpers ─────────────────────────────────────────────────

function formatINR(amount: number): string {
  return "₹" + Math.round(amount).toLocaleString("en-IN")
}

// ─── FD Formulas ─────────────────────────────────────────────

// Compounding frequency map
const freqMap: Record<string, number> = {
  Monthly:      12,
  Quarterly:    4,
  "Half-yearly": 2,
  Yearly:       1,
}

// Regular FD / Tax Saver FD / Senior Citizen FD
function calcFD(principal: number, annualRate: number, tenureYears: number, freq: number) {
  const r = annualRate / 100 / freq
  const n = freq * tenureYears
  const maturity = principal * Math.pow(1 + r, n)
  const interest = maturity - principal
  return { maturity, interest, invested: principal }
}

// RD — quarterly compounding (standard)
function calcRD(monthly: number, annualRate: number, tenureYears: number) {
  const r = annualRate / 400  // quarterly rate
  const n = tenureYears * 12
  let maturity = 0
  for (let i = 1; i <= n; i++) {
    const quartersLeft = (n - i + 1) / 3
    maturity += monthly * Math.pow(1 + r, quartersLeft)
  }
  const invested = monthly * n
  const interest = maturity - invested
  return { maturity, interest, invested }
}

// Yearly breakdown
function calcFDYearlyData(principal: number, annualRate: number, tenureYears: number, freq: number) {
  const checkYears = Array.from({ length: tenureYears }, (_, i) => i + 1)
    .filter(y => y === 1 || y === Math.ceil(tenureYears / 2) || y === tenureYears)

  return checkYears.map(year => {
    const { maturity, interest } = calcFD(principal, annualRate, year, freq)
    return {
      year,
      invested: Math.round(principal),
      interest: Math.round(interest),
      maturity: Math.round(maturity),
    }
  })
}

function calcRDYearlyData(monthly: number, annualRate: number, tenureYears: number) {
  const checkYears = Array.from({ length: tenureYears }, (_, i) => i + 1)
    .filter(y => y === 1 || y === Math.ceil(tenureYears / 2) || y === tenureYears)

  return checkYears.map(year => {
    const { maturity, interest, invested } = calcRD(monthly, annualRate, year)
    return {
      year,
      invested: Math.round(invested),
      interest: Math.round(interest),
      maturity: Math.round(maturity),
    }
  })
}

// ─── Component ───────────────────────────────────────────────

type Props = { fdType: FdType }

export default function FDCalculator({ fdType }: Props) {
  const config = fdConfig[fdType]
  const isRD = fdType === "recurring-deposit"

  const [amount, setAmount]     = useState(config.defaultAmount)
  const [rate, setRate]         = useState(config.defaultRate)
  const [tenure, setTenure]     = useState(config.defaultTenure)
  const [compFreq, setCompFreq] = useState(config.compounding[0])

  const [results, setResults] = useState({
    maturity: 0,
    interest: 0,
    invested: 0,
  })

  // Calculate
  useEffect(() => {
    if (isRD) {
      setResults(calcRD(amount, rate, tenure))
    } else {
      setResults(calcFD(amount, rate, tenure, freqMap[compFreq]))
    }
  }, [amount, rate, tenure, compFreq, isRD])

  // Slider fill
  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLInputElement>(".emi_range")
    sliders.forEach(el => {
      const min = Number(el.min)
      const max = Number(el.max)
      const val = Number(el.value)
      const pct = ((val - min) / (max - min)) * 100
      el.style.background = `linear-gradient(to right, #1D9E75 ${pct}%, #E5E7EB ${pct}%)`
    })
  }, [amount, rate, tenure])

  const investedPct = results.maturity > 0
    ? Math.round((results.invested / results.maturity) * 100)
    : 0
  const circumference = 2 * Math.PI * 30

  const yearRows = isRD
    ? calcRDYearlyData(amount, rate, tenure)
    : calcFDYearlyData(amount, rate, tenure, freqMap[compFreq])

  return (
    <div className="emi_wrapper">

      {/* ── Left card — Inputs ── */}
      <div className="emi_card">
        <h2 className="emi_card_title">
          <SlidersHorizontal size={16} color="#1D9E75" />
          {isRD ? "RD details bharein" : "FD details bharein"}
        </h2>

        {/* Amount */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">{config.amountLabel}</span>
            <span className="slider_val">{formatINR(amount)}</span>
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

        {/* Interest rate */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Interest rate (p.a.)</span>
            <span className="slider_val">{rate}%</span>
          </div>
          <input
            type="range"
            min={config.minRate}
            max={config.maxRate}
            step={0.1}
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
            className="emi_range"
          />
          <div className="range_hints">
            <span>{config.minRate}%</span>
            <span>{config.maxRate}%</span>
          </div>
        </div>

        {/* Tenure */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Tenure</span>
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
            disabled={fdType === "tax-saver-fd"}  // 5yr lock-in
          />
          <div className="range_hints">
            <span>{config.minTenure} year</span>
            <span>{config.maxTenure} years</span>
          </div>
          {fdType === "tax-saver-fd" && (
            <p style={{ fontSize: "12px", color: "#854F0B", marginTop: "4px" }}>
              ⚠️ Tax saver FD mein 5 saal ka lock-in fixed hota hai
            </p>
          )}
        </div>

        {/* Compounding frequency — not for RD */}
        {!isRD && (
          <div className="slider_group">
            <span className="slider_label">Compounding frequency</span>
            <select
              className="bank_select"
              value={compFreq}
              onChange={e => setCompFreq(e.target.value)}
            >
              {config.compounding.map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
        )}

        {/* Bank dropdown */}
        <div className="slider_group">
          <span className="slider_label">Bank / lender</span>
          <select
            className="bank_select"
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
          >
            {config.banks.map(b => (
              <option key={b.name} value={b.rate}>
                {b.name} — {b.rate}%
              </option>
            ))}
            <option value={rate}>Custom rate</option>
          </select>
        </div>

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

        <div className="result_metrics">
          <div className="metric">
            <div className="metric_label">
              {isRD ? "Total invested" : "Principal amount"}
            </div>
            <div className="metric_value">{formatINR(results.invested)}</div>
          </div>
          <div className="metric">
            <div className="metric_label">Total interest</div>
            <div className="metric_value" style={{ color: "#1D9E75" }}>
              {formatINR(results.interest)}
            </div>
          </div>
          <div className="metric metric_accent">
            <div className="metric_label">Maturity amount</div>
            <div className="metric_value metric_large">
              {formatINR(results.maturity)}
            </div>
          </div>
          <div className="metric metric_full">
            <div className="metric_label">Wealth gain</div>
            <div className="metric_value">
              {results.invested > 0
                ? `${((results.interest / results.invested) * 100).toFixed(1)}%`
                : "0%"}
            </div>
          </div>
        </div>

        {/* Donut chart */}
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
              <span>{isRD ? "Invested" : "Principal"}</span>
              <span className="legend_val">{formatINR(results.invested)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#FAEEDA", border: "1px solid #854F0B" }} />
              <span>Interest</span>
              <span className="legend_val">{formatINR(results.interest)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#185FA5" }} />
              <span>Maturity</span>
              <span className="legend_val">{formatINR(results.maturity)}</span>
            </div>
          </div>
        </div>

        {/* Yearly table */}
        <table className="year_table">
          <thead>
            <tr>
              <th>Year</th>
              <th>{isRD ? "Invested" : "Principal"}</th>
              <th>Interest</th>
              <th>Maturity</th>
            </tr>
          </thead>
          <tbody>
            {yearRows.map(row => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatINR(row.invested)}</td>
                <td className="td_green">{formatINR(row.interest)}</td>
                <td>{formatINR(row.maturity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}