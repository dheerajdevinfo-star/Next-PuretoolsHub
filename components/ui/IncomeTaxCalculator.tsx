"use client"

import { useState, useEffect } from "react"
import { Copy, Download, Share2, SlidersHorizontal } from "lucide-react"
import './emi.css'
import { taxConfig, TaxType } from "@/lib/incomeTaxData"

// ─── Helpers ─────────────────────────────────────────────────

function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN")
}

// ─── Tax Calculation Logic ────────────────────────────────────

// New regime slabs FY 2025-26
function calcNewRegimeTax(income: number): number {
  const slabs = [
    { limit: 400000,  rate: 0   },
    { limit: 400000,  rate: 0.05},
    { limit: 400000,  rate: 0.10},
    { limit: 400000,  rate: 0.15},
    { limit: 400000,  rate: 0.20},
    { limit: 400000,  rate: 0.25},
    { limit: Infinity, rate: 0.30},
  ]
  let remaining = Math.max(0, income - 75000) // standard deduction
  let tax = 0
  let prev = 0
  for (const slab of slabs) {
    const taxable = Math.min(remaining, slab.limit)
    tax += taxable * slab.rate
    remaining -= taxable
    prev += slab.limit
    if (remaining <= 0) break
  }
  // 87A rebate — zero tax up to ₹12L
  if (income - 75000 <= 1200000) tax = 0
  return tax
}

// Old regime slabs
function calcOldRegimeTax(income: number, deductions: number): number {
  const taxableIncome = Math.max(0, income - deductions)
  let tax = 0
  if (taxableIncome <= 250000)       tax = 0
  else if (taxableIncome <= 500000)  tax = (taxableIncome - 250000) * 0.05
  else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20
  else                               tax = 112500 + (taxableIncome - 1000000) * 0.30
  // 87A rebate up to ₹5L
  if (taxableIncome <= 500000) tax = 0
  return tax
}

function addCess(tax: number) { return tax * 1.04 }

// TDS section rates
const tdsSections = [
  { section: "192 — Salary",              rate: "As per slab" },
  { section: "194A — FD Interest",        rate: "10%"         },
  { section: "194C — Contractor",         rate: "1% / 2%"     },
  { section: "194H — Commission",         rate: "5%"          },
  { section: "194I — Rent",               rate: "10% / 2%"    },
  { section: "194J — Professional fees",  rate: "10%"         },
  { section: "194B — Lottery winnings",   rate: "30%"         },
]

// Advance tax due dates
const advanceTaxDates = [
  { date: "15 June 2025",      pct: 15, label: "1st installment" },
  { date: "15 September 2025", pct: 45, label: "2nd installment" },
  { date: "15 December 2025",  pct: 75, label: "3rd installment" },
  { date: "15 March 2026",     pct: 100, label: "4th installment (final)" },
]

// New regime slabs for display
const newSlabs = [
  { range: "₹0 – ₹4 lakh",    rate: "0%",  tax: "Nil"     },
  { range: "₹4L – ₹8 lakh",   rate: "5%",  tax: "₹20,000" },
  { range: "₹8L – ₹12 lakh",  rate: "10%", tax: "₹40,000" },
  { range: "₹12L – ₹16 lakh", rate: "15%", tax: "₹60,000" },
  { range: "₹16L – ₹20 lakh", rate: "20%", tax: "₹80,000" },
  { range: "₹20L – ₹24 lakh", rate: "25%", tax: "₹1,00,000"},
  { range: "Above ₹24 lakh",  rate: "30%", tax: "—"        },
]

const oldSlabs = [
  { range: "₹0 – ₹2.5 lakh",   rate: "0%",  tax: "Nil"      },
  { range: "₹2.5L – ₹5 lakh",  rate: "5%",  tax: "₹12,500"  },
  { range: "₹5L – ₹10 lakh",   rate: "20%", tax: "₹1,00,000" },
  { range: "Above ₹10 lakh",   rate: "30%", tax: "—"         },
]

// ─── Component ───────────────────────────────────────────────

type Props = { taxType: TaxType }

export default function IncomeTaxCalculator({ taxType }: Props) {

  const [income,     setIncome]     = useState(1000000)
  const [regime,     setRegime]     = useState<"new" | "old">("new")
  const [sec80C,     setSec80C]     = useState(150000)
  const [hra,        setHra]        = useState(120000)
  const [sec80D,     setSec80D]     = useState(25000)
  const [otherDed,   setOtherDed]   = useState(0)
  const [tdsIncome,  setTdsIncome]  = useState(500000)
  const [tdsSection, setTdsSection] = useState("194A — FD Interest")

  const [results, setResults] = useState({
    newTax:        0,
    oldTax:        0,
    newTaxCess:    0,
    oldTaxCess:    0,
    savings:       0,
    betterRegime:  "new" as "new" | "old",
    monthlyTDS:    0,
    totalDeductions: 0,
    taxableIncome:   0,
  })

  useEffect(() => {
    const totalDed     = sec80C + hra + sec80D + otherDed + 50000 // 50K standard old
    const newTax       = calcNewRegimeTax(income)
    const oldTax       = calcOldRegimeTax(income, totalDed)
    const newTaxCess   = addCess(newTax)
    const oldTaxCess   = addCess(oldTax)
    const savings      = Math.abs(newTaxCess - oldTaxCess)
    const betterRegime = newTaxCess <= oldTaxCess ? "new" : "old"
    const monthlyTDS   = (regime === "new" ? newTaxCess : oldTaxCess) / 12
    const taxableIncome = regime === "new"
      ? Math.max(0, income - 75000)
      : Math.max(0, income - totalDed)

    setResults({ newTax, oldTax, newTaxCess, oldTaxCess, savings, betterRegime, monthlyTDS, totalDeductions: totalDed, taxableIncome })
  }, [income, sec80C, hra, sec80D, otherDed, regime])

  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLInputElement>(".emi_range")
    sliders.forEach(el => {
      const min = Number(el.min), max = Number(el.max), val = Number(el.value)
      const pct = ((val - min) / (max - min)) * 100
      el.style.background = `linear-gradient(to right, #1D9E75 ${pct}%, #E5E7EB ${pct}%)`
    })
  }, [income, sec80C, hra, sec80D, otherDed, tdsIncome])

  const currentTax    = regime === "new" ? results.newTaxCess : results.oldTaxCess
  const taxPct        = income > 0 ? Math.round((currentTax / income) * 100) : 0
  const circumference = 2 * Math.PI * 30

  // ── Tax Slab page ──
  if (taxType === "tax-slab") {
    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
             New Tax Regime — FY 2025-26
          </h2>
          <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "12px" }}>
            ₹12 lakh tak zero tax (87A rebate + ₹75K standard deduction)
          </p>
          <table className="year_table">
            <thead><tr><th>Income Range</th><th>Rate</th><th>Tax on slab</th></tr></thead>
            <tbody>
              {newSlabs.map(s => (
                <tr key={s.range}>
                  <td>{s.range}</td>
                  <td style={{ color: "#1D9E75", fontWeight: "600" }}>{s.rate}</td>
                  <td>{s.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "8px" }}>
            + 4% Health & Education Cess on tax amount
          </p>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">
             Old Tax Regime — FY 2025-26
          </h2>
          <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "12px" }}>
            ₹5 lakh tak zero tax (87A rebate). 80C, HRA, 80D deductions available.
          </p>
          <table className="year_table">
            <thead><tr><th>Income Range</th><th>Rate</th><th>Tax on slab</th></tr></thead>
            <tbody>
              {oldSlabs.map(s => (
                <tr key={s.range}>
                  <td>{s.range}</td>
                  <td style={{ color: "#185FA5", fontWeight: "600" }}>{s.rate}</td>
                  <td>{s.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "8px" }}>
            + 4% Health & Education Cess. Senior citizens: ₹3L basic exemption.
          </p>

          <div style={{ marginTop: "20px", padding: "12px", background: "#FEF3E2", borderRadius: "8px" }}>
            <p style={{ fontSize: "13px", fontWeight: "600", color: "#92400E" }}>Surcharge rates:</p>
            <table className="year_table" style={{ marginTop: "8px" }}>
              <thead><tr><th>Income</th><th>Surcharge</th></tr></thead>
              <tbody>
                <tr><td>₹50L – ₹1Cr</td><td>10%</td></tr>
                <tr><td>₹1Cr – ₹2Cr</td><td>15%</td></tr>
                <tr><td>₹2Cr – ₹5Cr</td><td>25%</td></tr>
                <tr><td>Above ₹5Cr</td><td>37% (old) / 25% (new)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  // ── TDS Calculator page ──
  if (taxType === "tds-calculator") {
    const tdsRate = tdsSection.includes("192") ? (income / 1200000) * 100
      : tdsSection.includes("194A") ? 10
      : tdsSection.includes("194C") ? 2
      : tdsSection.includes("194H") ? 5
      : tdsSection.includes("194I") ? 10
      : tdsSection.includes("194J") ? 10
      : 30
    const tdsAmount = tdsIncome * tdsRate / 100

    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            TDS details bharein
          </h2>

          <div className="slider_group">
            <span className="slider_label">TDS section</span>
            <select className="bank_select" value={tdsSection}
              onChange={e => setTdsSection(e.target.value)}>
              {tdsSections.map(s => (
                <option key={s.section} value={s.section}>
                  {s.section} ({s.rate})
                </option>
              ))}
            </select>
          </div>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Payment amount</span>
              <span className="slider_val">{formatINR(tdsIncome)}</span>
            </div>
            <input type="range" min={1000} max={10000000} step={1000}
              value={tdsIncome} onChange={e => setTdsIncome(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>₹1K</span><span>₹1 crore</span></div>
          </div>

          <button className="calc_btn">Calculate TDS</button>
          <div className="sdc_flex_box">
            <button className="share_btn"><Share2 /> Share</button>
            <button className="copy_btn"><Copy /> Copy</button>
          </div>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">TDS result</h2>
          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Gross payment</div>
              <div className="metric_value">{formatINR(tdsIncome)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">TDS rate</div>
              <div className="metric_value" style={{ color: "#854F0B" }}>{tdsRate}%</div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">TDS amount</div>
              <div className="metric_value metric_large">{formatINR(tdsAmount)}</div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">Net amount received</div>
              <div className="metric_value">{formatINR(tdsIncome - tdsAmount)}</div>
            </div>
          </div>

          <table className="year_table" style={{ marginTop: "16px" }}>
            <thead><tr><th>Section</th><th>Rate</th></tr></thead>
            <tbody>
              {tdsSections.map(s => (
                <tr key={s.section}
                  style={{ background: tdsSection === s.section ? "#E1F5EE" : "" }}>
                  <td>{s.section}</td>
                  <td className="td_green">{s.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // ── Advance Tax page ──
  if (taxType === "advance-tax") {
    const annualTax = regime === "new" ? results.newTaxCess : results.oldTaxCess
    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Income details bharein
          </h2>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Annual income</span>
              <span className="slider_val">{formatINR(income)}</span>
            </div>
            <input type="range" min={100000} max={10000000} step={10000}
              value={income} onChange={e => setIncome(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>₹1L</span><span>₹1 crore</span></div>
          </div>

          <div className="slider_group">
            <span className="slider_label">Tax regime</span>
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              {(["new", "old"] as const).map(r => (
                <button key={r} onClick={() => setRegime(r)}
                  style={{
                    flex: 1, padding: "8px", borderRadius: "8px", cursor: "pointer",
                    border: `1px solid ${regime === r ? "#1D9E75" : "#E5E7EB"}`,
                    background: regime === r ? "#E1F5EE" : "white",
                    color: regime === r ? "#0F6E56" : "#374151",
                    fontWeight: regime === r ? "600" : "400",
                  }}>
                  {r === "new" ? "New Regime" : "Old Regime"}
                </button>
              ))}
            </div>
          </div>

          <button className="calc_btn">Calculate Advance Tax</button>
          <div className="sdc_flex_box">
            <button className="share_btn"><Share2 /> Share</button>
            <button className="copy_btn"><Copy /> Copy</button>
          </div>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">Advance tax installments</h2>
          <div className="result_metrics">
            <div className="metric metric_full">
              <div className="metric_label">Annual tax liability (with cess)</div>
              <div className="metric_value metric_large">{formatINR(annualTax)}</div>
            </div>
          </div>
          <table className="year_table" style={{ marginTop: "16px" }}>
            <thead>
              <tr>
                <th>Due Date</th>
                <th>Installment</th>
                <th>Amount</th>
                <th>Cumulative</th>
              </tr>
            </thead>
            <tbody>
              {advanceTaxDates.map((d, i) => {
                const amt  = annualTax * d.pct / 100 - (i > 0 ? annualTax * advanceTaxDates[i-1].pct / 100 : 0)
                const cumulative = annualTax * d.pct / 100
                return (
                  <tr key={d.date}>
                    <td>{d.date}</td>
                    <td style={{ fontSize: "12px", color: "#6B7280" }}>{d.label}</td>
                    <td className="td_green">{formatINR(amt)}</td>
                    <td>{formatINR(cumulative)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "8px" }}>
             Advance tax na bharne par Section 234B/234C ke under 1% per month interest lagta hai.
          </p>
        </div>
      </div>
    )
  }

  // ── Income Tax / Old vs New Regime UI ──
  return (
    <div className="emi_wrapper">
      <div className="emi_card">
        <h2 className="emi_card_title">
          <SlidersHorizontal size={16} color="#1D9E75" />
          Income details bharein
        </h2>

        {/* Regime toggle */}
        <div className="slider_group">
          <span className="slider_label">Tax regime</span>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            {(["new", "old"] as const).map(r => (
              <button key={r} onClick={() => setRegime(r)}
                style={{
                  flex: 1, padding: "8px", borderRadius: "8px", cursor: "pointer",
                  border: `1px solid ${regime === r ? "#1D9E75" : "#E5E7EB"}`,
                  background: regime === r ? "#E1F5EE" : "white",
                  color: regime === r ? "#0F6E56" : "#374151",
                  fontWeight: regime === r ? "600" : "400",
                }}>
                {r === "new" ? " New Regime" : " Old Regime"}
              </button>
            ))}
          </div>
        </div>

        {/* Annual income */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Annual income (CTC)</span>
            <span className="slider_val">{formatINR(income)}</span>
          </div>
          <input type="range" min={100000} max={10000000} step={10000}
            value={income} onChange={e => setIncome(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>₹1L</span><span>₹1 crore</span></div>
        </div>

        {/* Deductions — only old regime */}
        {regime === "old" && (
          <>
            <div className="slider_group">
              <div className="slider_top">
                <span className="slider_label">80C deductions</span>
                <span className="slider_val">{formatINR(sec80C)}</span>
              </div>
              <input type="range" min={0} max={150000} step={5000}
                value={sec80C} onChange={e => setSec80C(Number(e.target.value))}
                className="emi_range" />
              <div className="range_hints"><span>₹0</span><span>₹1.5L (max)</span></div>
            </div>

            <div className="slider_group">
              <div className="slider_top">
                <span className="slider_label">HRA exemption</span>
                <span className="slider_val">{formatINR(hra)}</span>
              </div>
              <input type="range" min={0} max={600000} step={5000}
                value={hra} onChange={e => setHra(Number(e.target.value))}
                className="emi_range" />
              <div className="range_hints"><span>₹0</span><span>₹6L</span></div>
            </div>

            <div className="slider_group">
              <div className="slider_top">
                <span className="slider_label">80D (medical insurance)</span>
                <span className="slider_val">{formatINR(sec80D)}</span>
              </div>
              <input type="range" min={0} max={100000} step={5000}
                value={sec80D} onChange={e => setSec80D(Number(e.target.value))}
                className="emi_range" />
              <div className="range_hints"><span>₹0</span><span>₹1L</span></div>
            </div>

            <div className="slider_group">
              <div className="slider_top">
                <span className="slider_label">Other deductions</span>
                <span className="slider_val">{formatINR(otherDed)}</span>
              </div>
              <input type="range" min={0} max={500000} step={5000}
                value={otherDed} onChange={e => setOtherDed(Number(e.target.value))}
                className="emi_range" />
              <div className="range_hints"><span>₹0</span><span>₹5L</span></div>
            </div>
          </>
        )}

        <button className="calc_btn">Calculate Tax</button>
        <div className="sdc_flex_box">
          <button className="share_btn"><Share2 /> Share</button>
          <button className="download_pdf_btn"><Download /> Download PDF</button>
          <button className="copy_btn"><Copy /> Copy</button>
        </div>
      </div>

      {/* Results */}
      <div className="emi_card">
        <h2 className="emi_card_title">Aapka result</h2>

        <div className="result_metrics">
          <div className="metric">
            <div className="metric_label">Gross income</div>
            <div className="metric_value">{formatINR(income)}</div>
          </div>
          <div className="metric">
            <div className="metric_label">Taxable income</div>
            <div className="metric_value">{formatINR(results.taxableIncome)}</div>
          </div>
          <div className="metric metric_accent">
            <div className="metric_label">
              Tax payable ({regime === "new" ? "New" : "Old"} regime)
            </div>
            <div className="metric_value metric_large">
              {formatINR(currentTax)}
            </div>
          </div>
          <div className="metric metric_full">
            <div className="metric_label">Monthly TDS</div>
            <div className="metric_value">{formatINR(results.monthlyTDS)}</div>
          </div>
        </div>

        {/* Donut */}
        <div className="donut_row">
          <svg width="80" height="80" viewBox="0 0 80 80" style={{ flexShrink: 0 }}>
            <circle cx="40" cy="40" r="30" fill="none" stroke="#E1F5EE" strokeWidth="12" />
            <circle cx="40" cy="40" r="30" fill="none" stroke="#1D9E75" strokeWidth="12"
              strokeDasharray={`${((100 - taxPct) / 100) * circumference} ${circumference}`}
              strokeDashoffset={circumference * 0.25}
              transform="rotate(-90 40 40)" />
            <text x="40" y="44" textAnchor="middle" fontSize="11" fontWeight="500" fill="#0F6E56">
              {taxPct}%
            </text>
          </svg>
          <div className="legend">
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#1D9E75" }} />
              <span>In-hand income</span>
              <span className="legend_val">{formatINR(income - currentTax)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#FAEEDA", border: "1px solid #854F0B" }} />
              <span>Tax + cess</span>
              <span className="legend_val">{formatINR(currentTax)}</span>
            </div>
          </div>
        </div>

        {/* Old vs New comparison */}
        <table className="year_table">
          <thead>
            <tr><th>Comparison</th><th>New Regime</th><th>Old Regime</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Tax (before cess)</td>
              <td>{formatINR(results.newTax)}</td>
              <td>{formatINR(results.oldTax)}</td>
            </tr>
            <tr>
              <td>Tax + 4% cess</td>
              <td>{formatINR(results.newTaxCess)}</td>
              <td>{formatINR(results.oldTaxCess)}</td>
            </tr>
            <tr>
              <td>Monthly TDS</td>
              <td>{formatINR(results.newTaxCess / 12)}</td>
              <td>{formatINR(results.oldTaxCess / 12)}</td>
            </tr>
            <tr style={{ fontWeight: "600", background: "#F0FDF4" }}>
              <td> Better regime</td>
              <td colSpan={2} style={{ color: "#1D9E75", textAlign: "center" }}>
                {results.betterRegime === "new" ? "New Regime" : "Old Regime"}
                {" "}saves {formatINR(results.savings)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}