"use client"

import { useState, useEffect } from "react"
import { Copy, Download, Share2, SlidersHorizontal } from "lucide-react"
import './emi.css'
import { gratuityConfig, GratuityType } from "@/lib/gratuityData"

// ─── Helpers ─────────────────────────────────────────────────

function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN")
}

// ─── Gratuity Formulas ───────────────────────────────────────

// Payment of Gratuity Act covered employees (26 days)
function calcGratuityCovered(salary: number, years: number, months: number) {
  const totalYears = months >= 6 ? Math.ceil(years + months / 12) : years
  return (salary * 15 * totalYears) / 26
}

// Non-covered employees (30 days)
function calcGratuityNonCovered(salary: number, years: number, months: number) {
  const totalYears = months >= 6 ? Math.ceil(years + months / 12) : years
  return (salary * 15 * totalYears) / 30
}

// Tax calculation
function calcGratuityTax(
  gratuity: number,
  salary: number,
  years: number,
  employeeType: "government" | "covered" | "non-covered",
  taxSlab: number
) {
  let taxFree = 0
  if (employeeType === "government") {
    taxFree = gratuity // fully exempt
  } else {
    const limit1 = 2000000 // ₹20 lakh
    const limit2 = (salary * 15 * years) / 26
    taxFree = Math.min(gratuity, limit1, limit2)
  }
  const taxable = Math.max(0, gratuity - taxFree)
  const tax     = taxable * taxSlab / 100 * 1.04 // with cess
  return { taxFree, taxable, tax }
}

// Eligibility check
function checkEligibility(years: number, months: number, empType: string) {
  const totalMonths = years * 12 + months
  if (empType === "death-disability") return { eligible: true, reason: "Death/disability par 5 saal ki zaroorat nahi" }
  if (totalMonths >= 60) return { eligible: true, reason: `${years} saal ${months} mahine — 5 saal poore ho gaye` }
  if (totalMonths >= 54) return { eligible: true, reason: `4 saal 6+ mahine — Supreme Court ruling ke anusaar eligible ho sakte hain` }
  const remaining = 60 - totalMonths
  return { eligible: false, reason: `${Math.floor(remaining / 12)} saal ${remaining % 12} mahine aur service chahiye` }
}

// ─── Component ───────────────────────────────────────────────

type Props = { gratuityType: GratuityType }

export default function GratuityCalculator({ gratuityType }: Props) {
  const config = gratuityConfig[gratuityType]

  const [salary,    setSalary]    = useState(config.defaultSalary)
  const [years,     setYears]     = useState(config.defaultYears)
  const [months,    setMonths]    = useState(config.defaultMonths)
  const [empType,   setEmpType]   = useState<"government" | "covered" | "non-covered">("covered")
  const [taxSlab,   setTaxSlab]   = useState(30)

  const [results, setResults] = useState({
    gratuity:      0,
    gratuityNC:    0, // non-covered
    taxFree:       0,
    taxable:       0,
    tax:           0,
    eligible:      false,
    eligibilityMsg: "",
    roundedYears:  0,
  })

  useEffect(() => {
    const g   = calcGratuityCovered(salary, years, months)
    const gNC = calcGratuityNonCovered(salary, years, months)
    const { taxFree, taxable, tax } = calcGratuityTax(g, salary, years, empType, taxSlab)
    const { eligible, reason } = checkEligibility(years, months, empType === "government" ? "government" : "private")
    const roundedYears = months >= 6 ? Math.ceil(years + months / 12) : years

    setResults({ gratuity: g, gratuityNC: gNC, taxFree, taxable, tax, eligible, eligibilityMsg: reason, roundedYears })
  }, [salary, years, months, empType, taxSlab])

  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLInputElement>(".emi_range")
    sliders.forEach(el => {
      const min = Number(el.min), max = Number(el.max), val = Number(el.value)
      const pct = ((val - min) / (max - min)) * 100
      el.style.background = `linear-gradient(to right, #1D9E75 ${pct}%, #E5E7EB ${pct}%)`
    })
  }, [salary, years, months])

  const gratuityAmt   = empType === "non-covered" ? results.gratuityNC : results.gratuity
  const taxFreePct    = gratuityAmt > 0 ? Math.round((results.taxFree / gratuityAmt) * 100) : 0
  const circumference = 2 * Math.PI * 30

  // ── Gratuity Formula page ──
  if (gratuityType === "gratuity-formula") {
    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Example calculate karein
          </h2>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Basic + DA salary (monthly)</span>
              <span className="slider_val">{formatINR(salary)}</span>
            </div>
            <input type="range" min={5000} max={500000} step={1000}
              value={salary} onChange={e => setSalary(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>₹5K</span><span>₹5 lakh</span></div>
          </div>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Years of service</span>
              <span className="slider_val">{years} years</span>
            </div>
            <input type="range" min={1} max={40} step={1}
              value={years} onChange={e => setYears(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>1 year</span><span>40 years</span></div>
          </div>

          <button className="calc_btn">Calculate</button>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">Formula breakdown</h2>

          {/* Covered formula */}
          <div style={{ marginBottom: "20px" }}>
            <div className="formula_box" style={{ marginBottom: "12px" }}>
              <h2>Covered Employees (Govt + Registered Companies)</h2>
              <h3>Gratuity = (Salary × 15 × Years) ÷ 26</h3>
            </div>
            <table className="year_table">
              <tbody>
                <tr><td>Last drawn salary (Basic + DA)</td><td>{formatINR(salary)}</td></tr>
                <tr><td>Service years (rounded)</td><td>{results.roundedYears} years</td></tr>
                <tr><td>Formula</td><td>{formatINR(salary)} × 15 × {results.roundedYears} ÷ 26</td></tr>
                <tr style={{ fontWeight: "600", background: "#F0FDF4" }}>
                  <td>✅ Gratuity amount</td>
                  <td style={{ color: "#1D9E75" }}>{formatINR(results.gratuity)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Non-covered formula */}
          <div>
            <div className="formula_box" style={{ marginBottom: "12px" }}>
              <h2>Non-Covered Employees</h2>
              <h3>Gratuity = (Salary × 15 × Years) ÷ 30</h3>
            </div>
            <table className="year_table">
              <tbody>
                <tr><td>Last drawn salary</td><td>{formatINR(salary)}</td></tr>
                <tr><td>Service years (rounded)</td><td>{results.roundedYears} years</td></tr>
                <tr><td>Formula</td><td>{formatINR(salary)} × 15 × {results.roundedYears} ÷ 30</td></tr>
                <tr style={{ fontWeight: "600", background: "#F0FDF4" }}>
                  <td>✅ Gratuity amount</td>
                  <td style={{ color: "#1D9E75" }}>{formatINR(results.gratuityNC)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "16px", padding: "12px", background: "#FEF3E2", borderRadius: "8px" }}>
            <p style={{ fontSize: "13px", color: "#92400E", fontWeight: "600" }}>
              ⚠️ Important notes:
            </p>
            <ul style={{ fontSize: "13px", color: "#92400E", marginTop: "8px", paddingLeft: "16px" }}>
              <li>Salary = Basic + DA only (HRA, bonus exclude)</li>
              <li>6+ mahine = pura saal maana jaata hai</li>
              <li>Maximum ₹20 lakh tax-free</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  // ── Eligibility page ──
  if (gratuityType === "gratuity-eligibility") {
    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Service details bharein
          </h2>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Years of service</span>
              <span className="slider_val">{years} years</span>
            </div>
            <input type="range" min={0} max={40} step={1}
              value={years} onChange={e => setYears(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>0</span><span>40 years</span></div>
          </div>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Additional months</span>
              <span className="slider_val">{months} months</span>
            </div>
            <input type="range" min={0} max={11} step={1}
              value={months} onChange={e => setMonths(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>0</span><span>11 months</span></div>
          </div>

          <div className="slider_group">
            <span className="slider_label">Employment type</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
              {[
                { val: "government",      label: "Government employee"            },
                { val: "covered",         label: "Private — Gratuity Act covered" },
                { val: "non-covered",     label: "Private — Non-covered"          },
                { val: "death-disability", label: "Death / Disability case"       },
              ].map(({ val, label }) => (
                <button key={val}
                  onClick={() => setEmpType(val as typeof empType)}
                  style={{
                    padding: "8px 14px", borderRadius: "8px", cursor: "pointer", textAlign: "left",
                    border: `1px solid ${empType === val ? "#1D9E75" : "#E5E7EB"}`,
                    background: empType === val ? "#E1F5EE" : "white",
                    color: empType === val ? "#0F6E56" : "#374151",
                    fontWeight: empType === val ? "600" : "400", fontSize: "13px",
                  }}>{label}</button>
              ))}
            </div>
          </div>

          <button className="calc_btn">Check Eligibility</button>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">Eligibility result</h2>

          <div style={{
            padding: "20px", borderRadius: "12px", textAlign: "center", marginBottom: "20px",
            background: results.eligible ? "#F0FDF4" : "#FEF2F2",
            border: `2px solid ${results.eligible ? "#1D9E75" : "#EF4444"}`,
          }}>
            <div style={{ fontSize: "48px", marginBottom: "8px" }}>
              {results.eligible ? "✅" : "❌"}
            </div>
            <h3 style={{ color: results.eligible ? "#0F6E56" : "#DC2626", margin: "0 0 8px" }}>
              {results.eligible ? "Aap eligible hain!" : "Abhi eligible nahi"}
            </h3>
            <p style={{ color: results.eligible ? "#166534" : "#991B1B", fontSize: "14px", margin: 0 }}>
              {results.eligibilityMsg}
            </p>
          </div>

          {results.eligible && (
            <>
              <div className="slider_group" style={{ marginTop: "8px" }}>
                <div className="slider_top">
                  <span className="slider_label">Last drawn salary (Basic + DA)</span>
                  <span className="slider_val">{formatINR(salary)}</span>
                </div>
                <input type="range" min={5000} max={500000} step={1000}
                  value={salary} onChange={e => setSalary(Number(e.target.value))}
                  className="emi_range" />
                <div className="range_hints"><span>₹5K</span><span>₹5L</span></div>
              </div>

              <div className="result_metrics" style={{ marginTop: "16px" }}>
                <div className="metric metric_accent">
                  <div className="metric_label">Estimated gratuity</div>
                  <div className="metric_value metric_large">{formatINR(gratuityAmt)}</div>
                </div>
                <div className="metric metric_full">
                  <div className="metric_label">
                    {gratuityAmt <= 2000000 ? "✅ Fully tax-free (under ₹20L limit)" : "⚠️ Partially taxable"}
                  </div>
                </div>
              </div>
            </>
          )}

          <table className="year_table" style={{ marginTop: "16px" }}>
            <thead><tr><th>Condition</th><th>Status</th></tr></thead>
            <tbody>
              <tr>
                <td>5 saal service</td>
                <td style={{ color: results.eligible ? "#1D9E75" : "#EF4444", fontWeight: "600" }}>
                  {years * 12 + months >= 60 ? "✅ Complete" : `❌ ${years}yr ${months}mo`}
                </td>
              </tr>
              <tr>
                <td>4.5+ saal (SC ruling)</td>
                <td style={{ color: years * 12 + months >= 54 ? "#1D9E75" : "#EF4444", fontWeight: "600" }}>
                  {years * 12 + months >= 54 ? "✅ Eligible" : "❌ Not yet"}
                </td>
              </tr>
              <tr>
                <td>Covered under Gratuity Act</td>
                <td style={{ color: empType !== "non-covered" ? "#1D9E75" : "#F59E0B", fontWeight: "600" }}>
                  {empType !== "non-covered" ? "✅ Yes" : "⚠️ Non-covered"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // ── Main Gratuity + Tax Calculator UI ──
  return (
    <div className="emi_wrapper">
      <div className="emi_card">
        <h2 className="emi_card_title">
          <SlidersHorizontal size={16} color="#1D9E75" />
          Service details bharein
        </h2>

        {/* Salary */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Last drawn salary (Basic + DA)</span>
            <span className="slider_val">{formatINR(salary)}</span>
          </div>
          <input type="range" min={5000} max={500000} step={1000}
            value={salary} onChange={e => setSalary(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>₹5K</span><span>₹5 lakh</span></div>
        </div>

        {/* Years */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Years of service</span>
            <span className="slider_val">{years} years</span>
          </div>
          <input type="range" min={1} max={40} step={1}
            value={years} onChange={e => setYears(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>1 year</span><span>40 years</span></div>
        </div>

        {/* Months */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Additional months</span>
            <span className="slider_val">{months} months</span>
          </div>
          <input type="range" min={0} max={11} step={1}
            value={months} onChange={e => setMonths(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>0</span><span>11 months</span></div>
        </div>

        {/* Employee type */}
        <div className="slider_group">
          <span className="slider_label">Employee type</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
            {[
              { val: "government",  label: "🏛️ Government employee"            },
              { val: "covered",     label: "🏢 Private — Gratuity Act covered" },
              { val: "non-covered", label: "🏪 Private — Non-covered"          },
            ].map(({ val, label }) => (
              <button key={val} onClick={() => setEmpType(val as typeof empType)}
                style={{
                  padding: "8px 14px", borderRadius: "8px", cursor: "pointer", textAlign: "left",
                  border: `1px solid ${empType === val ? "#1D9E75" : "#E5E7EB"}`,
                  background: empType === val ? "#E1F5EE" : "white",
                  color: empType === val ? "#0F6E56" : "#374151",
                  fontWeight: empType === val ? "600" : "400", fontSize: "13px",
                }}>{label}</button>
            ))}
          </div>
        </div>

        {/* Tax slab — only for tax calculator */}
        {gratuityType === "gratuity-tax-calculator" && (
          <div className="slider_group">
            <span className="slider_label">Your tax slab</span>
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              {[10, 20, 30].map(s => (
                <button key={s} onClick={() => setTaxSlab(s)}
                  style={{
                    flex: 1, padding: "8px", borderRadius: "8px", cursor: "pointer",
                    border: `1px solid ${taxSlab === s ? "#1D9E75" : "#E5E7EB"}`,
                    background: taxSlab === s ? "#E1F5EE" : "white",
                    color: taxSlab === s ? "#0F6E56" : "#374151",
                    fontWeight: taxSlab === s ? "600" : "400",
                  }}>{s}%</button>
              ))}
            </div>
          </div>
        )}

        <button className="calc_btn">Calculate Gratuity</button>
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
            <div className="metric_label">Last drawn salary</div>
            <div className="metric_value">{formatINR(salary)}</div>
          </div>
          <div className="metric">
            <div className="metric_label">Service years (rounded)</div>
            <div className="metric_value">{results.roundedYears} years</div>
          </div>
          <div className="metric metric_accent">
            <div className="metric_label">Gratuity amount</div>
            <div className="metric_value metric_large">{formatINR(gratuityAmt)}</div>
          </div>
          <div className="metric metric_full">
            <div className="metric_label">
              {gratuityAmt <= 2000000
                ? "✅ Fully tax-free (under ₹20L limit)"
                : `Tax-free: ${formatINR(results.taxFree)} | Taxable: ${formatINR(results.taxable)}`}
            </div>
          </div>
        </div>

        {/* Donut */}
        <div className="donut_row">
          <svg width="80" height="80" viewBox="0 0 80 80" style={{ flexShrink: 0 }}>
            <circle cx="40" cy="40" r="30" fill="none" stroke="#E1F5EE" strokeWidth="12" />
            <circle cx="40" cy="40" r="30" fill="none" stroke="#1D9E75" strokeWidth="12"
              strokeDasharray={`${(taxFreePct / 100) * circumference} ${circumference}`}
              strokeDashoffset={circumference * 0.25}
              transform="rotate(-90 40 40)" />
            <text x="40" y="44" textAnchor="middle" fontSize="11" fontWeight="500" fill="#0F6E56">
              {taxFreePct}%
            </text>
          </svg>
          <div className="legend">
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#1D9E75" }} />
              <span>Tax-free</span>
              <span className="legend_val">{formatINR(results.taxFree)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#FAEEDA", border: "1px solid #854F0B" }} />
              <span>Taxable</span>
              <span className="legend_val">{formatINR(results.taxable)}</span>
            </div>
          </div>
        </div>

        {/* Breakdown table */}
        <table className="year_table">
          <thead><tr><th>Component</th><th>Amount</th></tr></thead>
          <tbody>
            <tr><td>Basic + DA salary</td><td>{formatINR(salary)}</td></tr>
            <tr><td>Service years (rounded)</td><td>{results.roundedYears} years</td></tr>
            <tr><td>Formula ({empType === "non-covered" ? "÷30" : "÷26"})</td>
              <td>{formatINR(salary)} × 15 × {results.roundedYears} ÷ {empType === "non-covered" ? "30" : "26"}</td>
            </tr>
            <tr><td>Gross gratuity</td><td>{formatINR(gratuityAmt)}</td></tr>
            <tr><td>Tax-free exemption</td><td style={{ color: "#1D9E75" }}>{formatINR(results.taxFree)}</td></tr>
            <tr><td>Taxable gratuity</td><td style={{ color: results.taxable > 0 ? "#854F0B" : "#1D9E75" }}>{formatINR(results.taxable)}</td></tr>
            {gratuityType === "gratuity-tax-calculator" && results.taxable > 0 && (
              <tr style={{ fontWeight: "600", background: "#FEF2F2" }}>
                <td>Tax payable ({taxSlab}% + cess)</td>
                <td style={{ color: "#DC2626" }}>{formatINR(results.tax)}</td>
              </tr>
            )}
            <tr style={{ fontWeight: "600", background: "#F0FDF4" }}>
              <td>✅ Net gratuity (after tax)</td>
              <td style={{ color: "#1D9E75" }}>{formatINR(gratuityAmt - results.tax)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}