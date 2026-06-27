"use client"

import { useState, useEffect } from "react"
import { Copy, Download, Share2, SlidersHorizontal } from "lucide-react"
import './emi.css'
import { ciConfig, CiType } from "@/lib/ciData"

// ─── Helpers ─────────────────────────────────────────────────

function formatINR(amount: number): string {
  return "₹" + Math.round(amount).toLocaleString("en-IN")
}

const freqMap: Record<string, number> = {
  Monthly:       12,
  Quarterly:     4,
  "Half-yearly": 2,
  Yearly:        1,
}

// ─── Formulas ────────────────────────────────────────────────

function calcCI(principal: number, rate: number, tenure: number, freq: number) {
  const r = rate / 100 / freq
  const n = freq * tenure
  const maturity   = principal * Math.pow(1 + r, n)
  const interest   = maturity - principal
  const si         = principal * (rate / 100) * tenure
  return { maturity, interest, extra: interest - si }
}

function calcSI(principal: number, rate: number, tenure: number) {
  const interest = principal * (rate / 100) * tenure
  const maturity = principal + interest
  const ci       = principal * Math.pow(1 + rate / 100, tenure) - principal
  return { maturity, interest, extra: ci - interest }
}

function calcCAGR(beginValue: number, endValue: number, tenure: number) {
  const cagr       = (Math.pow(endValue / beginValue, 1 / tenure) - 1) * 100
  const absoluteR  = ((endValue - beginValue) / beginValue) * 100
  return { cagr, absoluteReturn: absoluteR, profit: endValue - beginValue }
}

function calcInflation(amount: number, rate: number, tenure: number) {
  const futureValue     = amount * Math.pow(1 + rate / 100, tenure)
  const purchasingPower = amount / Math.pow(1 + rate / 100, tenure)
  const loss            = amount - purchasingPower
  return { futureValue, purchasingPower, loss }
}

function calcYearlyData(
  ciType: CiType,
  principal: number,
  rate: number,
  tenure: number,
  freq: number,
  endValue: number
) {
  const checkYears = Array.from({ length: tenure }, (_, i) => i + 1)
    .filter(y => y === 1 || y === Math.ceil(tenure / 2) || y === tenure)

  return checkYears.map(year => {
    if (ciType === "simple-interest") {
      const { maturity, interest } = calcSI(principal, rate, year)
      return { year, col1: Math.round(principal), col2: Math.round(interest), col3: Math.round(maturity) }
    }
    if (ciType === "cagr") {
      const growthPerYear = (beginValue:number) => beginValue * Math.pow(1 + rate / 100, year)
      const val = growthPerYear(principal)
      return { year, col1: Math.round(principal), col2: Math.round(val - principal), col3: Math.round(val) }
    }
    if (ciType === "inflation") {
      const { futureValue, purchasingPower } = calcInflation(principal, rate, year)
      return { year, col1: Math.round(principal), col2: Math.round(futureValue), col3: Math.round(purchasingPower) }
    }
    // compound interest default
    const { maturity, interest } = calcCI(principal, rate, year, freq)
    return { year, col1: Math.round(principal), col2: Math.round(interest), col3: Math.round(maturity) }
  })
}

// Table headers per type
const tableHeaders: Record<CiType, [string, string, string]> = {
  "compound-interest": ["Principal", "CI Earned",       "Maturity"],
  "simple-interest":   ["Principal", "SI Earned",       "Total Amount"],
  "cagr":              ["Initial",   "Growth",          "Value"],
  "inflation":         ["Amount",    "Future Cost",     "Purchasing Power"],
}

// ─── Component ───────────────────────────────────────────────

type Props = { ciType: CiType }

export default function CICalculator({ ciType }: Props) {
  const config = ciConfig[ciType]

  const [principal, setPrincipal] = useState(config.defaultPrincipal)
  const [rate, setRate]           = useState(config.defaultRate || 10)
  const [tenure, setTenure]       = useState(config.defaultTenure)
  const [compFreq, setCompFreq]   = useState(config.compounding[0] || "Yearly")

  // CAGR specific
  const [endValue, setEndValue]   = useState(200000)

  const [results, setResults] = useState({
    primary:   0,
    secondary: 0,
    tertiary:  0,
  })

  // Calculate
  useEffect(() => {
    if (ciType === "simple-interest") {
      const { maturity, interest, extra } = calcSI(principal, rate, tenure)
      setResults({ primary: maturity, secondary: interest, tertiary: extra })
    } else if (ciType === "cagr") {
      const { cagr, absoluteReturn, profit } = calcCAGR(principal, endValue, tenure)
      setResults({ primary: cagr, secondary: absoluteReturn, tertiary: profit })
    } else if (ciType === "inflation") {
      const { futureValue, purchasingPower, loss } = calcInflation(principal, rate, tenure)
      setResults({ primary: futureValue, secondary: purchasingPower, tertiary: loss })
    } else {
      const { maturity, interest, extra } = calcCI(principal, rate, tenure, freqMap[compFreq] || 4)
      setResults({ primary: maturity, secondary: interest, tertiary: extra })
    }
  }, [principal, rate, tenure, compFreq, endValue, ciType])

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
  }, [principal, rate, tenure, endValue])

  const principalPct = results.primary > 0 && ciType !== "cagr"
    ? Math.round((principal / results.primary) * 100)
    : 0
  const circumference = 2 * Math.PI * 30
  const [h1, h2, h3] = tableHeaders[ciType]
  const yearRows = calcYearlyData(ciType, principal, rate, tenure, freqMap[compFreq] || 4, endValue)

  return (
    <div className="emi_wrapper">

      {/* ── Left card — Inputs ── */}
      <div className="emi_card">
        <h2 className="emi_card_title">
          <SlidersHorizontal size={16} color="#1D9E75" />
          Details bharein
        </h2>

        {/* Principal / Initial value */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">
              {ciType === "cagr" ? "Initial value" : ciType === "inflation" ? "Current amount" : "Principal amount"}
            </span>
            <span className="slider_val">{formatINR(principal)}</span>
          </div>
          <input
            type="range"
            min={config.minPrincipal}
            max={config.maxPrincipal}
            step={config.stepPrincipal}
            value={principal}
            onChange={e => setPrincipal(Number(e.target.value))}
            className="emi_range"
          />
          <div className="range_hints">
            <span>₹1K</span>
            <span>₹1 crore</span>
          </div>
        </div>

        {/* End value — only CAGR */}
        {ciType === "cagr" && (
          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Final value</span>
              <span className="slider_val">{formatINR(endValue)}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={10000000}
              step={1000}
              value={endValue}
              onChange={e => setEndValue(Number(e.target.value))}
              className="emi_range"
            />
            <div className="range_hints">
              <span>₹1K</span>
              <span>₹1 crore</span>
            </div>
          </div>
        )}

        {/* Rate — not shown for CAGR */}
        {ciType !== "cagr" && (
          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">
                {ciType === "inflation" ? "Inflation rate (p.a.)" : "Annual interest rate"}
              </span>
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
        )}

        {/* Tenure */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Time period</span>
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

        {/* Compounding — only CI */}
        {ciType === "compound-interest" && config.compounding.length > 0 && (
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

        {/* CAGR result */}
        {ciType === "cagr" ? (
          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Initial value</div>
              <div className="metric_value">{formatINR(principal)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">Total profit</div>
              <div className="metric_value" style={{ color: "#1D9E75" }}>
                {formatINR(results.tertiary)}
              </div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">CAGR</div>
              <div className="metric_value metric_large">
                {results.primary.toFixed(2)}%
              </div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">Absolute return</div>
              <div className="metric_value">{results.secondary.toFixed(1)}%</div>
            </div>
          </div>

        ) : ciType === "inflation" ? (
          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Current amount</div>
              <div className="metric_value">{formatINR(principal)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">Purchasing power loss</div>
              <div className="metric_value" style={{ color: "#854F0B" }}>
                -{formatINR(results.tertiary)}
              </div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Future cost</div>
              <div className="metric_value metric_large">
                {formatINR(results.primary)}
              </div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">
                Aaj ke ₹ ki {tenure} saal baad value
              </div>
              <div className="metric_value">{formatINR(results.secondary)}</div>
            </div>
          </div>

        ) : (
          // CI / SI result
          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Principal amount</div>
              <div className="metric_value">{formatINR(principal)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">
                {ciType === "simple-interest" ? "Simple interest" : "Compound interest"}
              </div>
              <div className="metric_value" style={{ color: "#1D9E75" }}>
                {formatINR(results.secondary)}
              </div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Total amount</div>
              <div className="metric_value metric_large">
                {formatINR(results.primary)}
              </div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">
                {ciType === "simple-interest"
                  ? "CI se kitna kam milega"
                  : "SI se kitna zyada milega"}
              </div>
              <div className="metric_value" style={{ color: "#185FA5" }}>
                {formatINR(results.tertiary)} extra
              </div>
            </div>
          </div>
        )}

        {/* Donut chart — not for CAGR */}
        {ciType !== "cagr" && (
          <div className="donut_row">
            <svg width="80" height="80" viewBox="0 0 80 80" style={{ flexShrink: 0 }}>
              <circle cx="40" cy="40" r="30" fill="none" stroke="#E1F5EE" strokeWidth="12" />
              <circle
                cx="40" cy="40" r="30" fill="none" stroke="#1D9E75" strokeWidth="12"
                strokeDasharray={`${(principalPct / 100) * circumference} ${circumference}`}
                strokeDashoffset={circumference * 0.25}
                transform="rotate(-90 40 40)"
              />
              <text x="40" y="44" textAnchor="middle" fontSize="11" fontWeight="500" fill="#0F6E56">
                {principalPct}%
              </text>
            </svg>
            <div className="legend">
              <div className="legend_item">
                <div className="legend_dot" style={{ background: "#1D9E75" }} />
                <span>{ciType === "inflation" ? "Current" : "Principal"}</span>
                <span className="legend_val">{formatINR(principal)}</span>
              </div>
              <div className="legend_item">
                <div className="legend_dot" style={{ background: "#FAEEDA", border: "1px solid #854F0B" }} />
                <span>{ciType === "inflation" ? "Inflation impact" : "Interest earned"}</span>
                <span className="legend_val">{formatINR(results.secondary)}</span>
              </div>
              <div className="legend_item">
                <div className="legend_dot" style={{ background: "#185FA5" }} />
                <span>{ciType === "inflation" ? "Future cost" : "Total amount"}</span>
                <span className="legend_val">{formatINR(results.primary)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Yearly table */}
        <table className="year_table">
          <thead>
            <tr>
              <th>Year</th>
              <th>{h1}</th>
              <th>{h2}</th>
              <th>{h3}</th>
            </tr>
          </thead>
          <tbody>
            {yearRows.map(row => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatINR(row.col1)}</td>
                <td className="td_green">{formatINR(row.col2)}</td>
                <td>{formatINR(row.col3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}