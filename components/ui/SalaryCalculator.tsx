"use client"

import { useState, useEffect, useRef } from "react"
import { Copy, Download, Share2, SlidersHorizontal, Printer } from "lucide-react"
import './emi.css'
import { salaryConfig, SalaryType } from "@/lib/salaryData"

// ─── Helpers ─────────────────────────────────────────────────

function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN")
}

// ─── Salary Breakup Logic ─────────────────────────────────────

function calcSalaryBreakup(annualCTC: number, regime: "new" | "old", pfOptOut: boolean) {
  // Standard breakup percentages
  const basic          = annualCTC * 0.40
  const hra            = basic * 0.50        // 50% of basic (metro)
  const specialAllow   = annualCTC * 0.10
  const lta            = annualCTC * 0.05
  const medicalAllow   = annualCTC * 0.025
  const employerPF     = basic * 0.12        // employer PF (in CTC)
  const gratuity       = basic * 0.0481      // 4.81% of basic

  const grossSalary    = basic + hra + specialAllow + lta + medicalAllow
  const employeePF     = pfOptOut ? 0 : Math.min(basic * 0.12, 21600) // max ₹1800/month
  const professionalTax = 2400 // ₹200/month

  // Taxable income
  const standardDed    = regime === "new" ? 75000 : 50000
  const hraExemption   = regime === "old" ? Math.min(hra, basic * 0.50) : 0
  const pfDed          = regime === "old" ? Math.min(employeePF, 150000) : 0
  const taxableIncome  = Math.max(0, annualCTC - employerPF - gratuity - standardDed - hraExemption - pfDed)

  // Tax calculation
  let annualTax = 0
  if (regime === "new") {
    if (taxableIncome <= 400000)       annualTax = 0
    else if (taxableIncome <= 800000)  annualTax = (taxableIncome - 400000) * 0.05
    else if (taxableIncome <= 1200000) annualTax = 20000 + (taxableIncome - 800000) * 0.10
    else if (taxableIncome <= 1600000) annualTax = 60000 + (taxableIncome - 1200000) * 0.15
    else if (taxableIncome <= 2000000) annualTax = 120000 + (taxableIncome - 1600000) * 0.20
    else if (taxableIncome <= 2400000) annualTax = 200000 + (taxableIncome - 2000000) * 0.25
    else                               annualTax = 300000 + (taxableIncome - 2400000) * 0.30
    if (taxableIncome <= 1200000) annualTax = 0 // 87A rebate
  } else {
    if (taxableIncome <= 250000)       annualTax = 0
    else if (taxableIncome <= 500000)  annualTax = (taxableIncome - 250000) * 0.05
    else if (taxableIncome <= 1000000) annualTax = 12500 + (taxableIncome - 500000) * 0.20
    else                               annualTax = 112500 + (taxableIncome - 1000000) * 0.30
    if (taxableIncome <= 500000) annualTax = 0
  }

  const annualTaxWithCess = annualTax * 1.04
  const monthlyTDS        = annualTaxWithCess / 12
  const monthlyPF         = employeePF / 12
  const monthlyPT         = professionalTax / 12

  const monthlyInHand     = grossSalary / 12 - monthlyTDS - monthlyPF - monthlyPT

  return {
    // Annual
    annualCTC, basic, hra, specialAllow, lta, medicalAllow,
    employerPF, gratuity, grossSalary,
    // Deductions
    employeePF, professionalTax, annualTaxWithCess,
    // Monthly
    monthlyBasic:     basic / 12,
    monthlyHRA:       hra / 12,
    monthlySpecial:   specialAllow / 12,
    monthlyLTA:       lta / 12,
    monthlyMedical:   medicalAllow / 12,
    monthlyGross:     grossSalary / 12,
    monthlyTDS,
    monthlyPF,
    monthlyPT,
    monthlyInHand,
    // Tax info
    taxableIncome,
    effectiveRate:    annualCTC > 0 ? (annualTaxWithCess / annualCTC) * 100 : 0,
  }
}

// ─── Component ───────────────────────────────────────────────

type Props = { salaryType: SalaryType }

export default function SalaryCalculator({ salaryType }: Props) {
  const config = salaryConfig[salaryType]

  const [ctc,        setCtc]        = useState(config.defaultCTC)
  const [oldCtc,     setOldCtc]     = useState(1000000)
  const [hikeRate,   setHikeRate]   = useState(15)
  const [regime,     setRegime]     = useState<"new" | "old">("new")
  const [pfOptOut,   setPfOptOut]   = useState(false)

  // Salary slip fields
  const [empName,    setEmpName]    = useState("")
  const [empId,      setEmpId]      = useState("")
  const [company,    setCompany]    = useState("")
  const [department, setDepartment] = useState("")
  const [slipMonth,  setSlipMonth]  = useState("June 2025")
  const [designation, setDesignation] = useState("")

  const slipRef = useRef<HTMLDivElement>(null)

  const [results, setResults]    = useState(calcSalaryBreakup(config.defaultCTC, "new", false))
  const [newResults, setNewResults] = useState(calcSalaryBreakup(config.defaultCTC, "new", false))

  useEffect(() => {
    const newCTC = salaryType === "salary-hike-calculator"
      ? oldCtc * (1 + hikeRate / 100)
      : ctc
    setResults(calcSalaryBreakup(ctc, regime, pfOptOut))
    setNewResults(calcSalaryBreakup(newCTC, regime, pfOptOut))
  }, [ctc, oldCtc, hikeRate, regime, pfOptOut, salaryType])

  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLInputElement>(".emi_range")
    sliders.forEach(el => {
      const min = Number(el.min), max = Number(el.max), val = Number(el.value)
      const pct = ((val - min) / (max - min)) * 100
      el.style.background = `linear-gradient(to right, #1D9E75 ${pct}%, #E5E7EB ${pct}%)`
    })
  }, [ctc, oldCtc, hikeRate])

  const inHandPct     = results.monthlyGross > 0
    ? Math.round((results.monthlyInHand / results.monthlyGross) * 100) : 0
  const circumference = 2 * Math.PI * 30

  const handlePrint = () => {
    const content = slipRef.current?.innerHTML
    if (!content) return
    const win = window.open("", "_blank")
    win?.document.write(`
      <html><head><title>Salary Slip</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; font-size: 13px; }
        table { width: 100%; border-collapse: collapse; }
        td, th { border: 1px solid #ddd; padding: 8px; }
        th { background: #f3f4f6; }
        .header { background: #1D9E75; color: white; padding: 16px; margin-bottom: 16px; }
        .section { margin-bottom: 16px; }
        .total-row { font-weight: bold; background: #f9fafb; }
        .net-pay { background: #E1F5EE; font-size: 16px; font-weight: bold; padding: 12px; text-align: center; margin-top: 16px; }
      </style></head>
      <body>${content}</body></html>
    `)
    win?.document.close()
    win?.print()
  }

  // ── Salary Slip UI ──
  if (salaryType === "salary-slip") {
    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Employee details bharein
          </h2>

          {[
            { label: "Company name",  value: company,     set: setCompany,     ph: "ABC Pvt Ltd"     },
            { label: "Employee name", value: empName,     set: setEmpName,     ph: "Rahul Sharma"    },
            { label: "Employee ID",   value: empId,       set: setEmpId,       ph: "EMP001"          },
            { label: "Designation",   value: designation, set: setDesignation, ph: "Software Engineer"},
            { label: "Department",    value: department,  set: setDepartment,  ph: "Engineering"     },
            { label: "Salary month",  value: slipMonth,   set: setSlipMonth,   ph: "June 2025"       },
          ].map(({ label, value, set, ph }) => (
            <div className="slider_group" key={label}>
              <span className="slider_label">{label}</span>
              <input type="text" value={value} onChange={e => set(e.target.value)}
                placeholder={ph}
                style={{
                  width: "100%", padding: "10px 14px", marginTop: "6px",
                  border: "1px solid #E5E7EB", borderRadius: "8px",
                  fontSize: "14px", outline: "none",
                }} />
            </div>
          ))}

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Annual CTC</span>
              <span className="slider_val">{formatINR(ctc)}</span>
            </div>
            <input type="range" min={100000} max={20000000} step={50000}
              value={ctc} onChange={e => setCtc(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>₹1L</span><span>₹2 crore</span></div>
          </div>

          <button className="calc_btn" onClick={handlePrint}
            style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
            <Printer size={16} /> Print Salary Slip
          </button>

          <div className="sdc_flex_box">
            <button className="share_btn"><Share2 /> Share</button>
            <button className="download_pdf_btn"><Download /> Download</button>
            <button className="copy_btn"><Copy /> Copy</button>
          </div>
        </div>

        {/* Salary Slip Preview */}
        <div className="emi_card">
          <h2 className="emi_card_title">Salary slip preview</h2>
          <div ref={slipRef}>
            <div className="header" style={{ background: "#1D9E75", color: "white", padding: "16px", marginBottom: "16px", borderRadius: "8px" }}>
              <h2 style={{ margin: "0 0 4px", fontSize: "18px" }}>{company || "Company Name"}</h2>
              <p style={{ margin: 0, fontSize: "13px", opacity: 0.9 }}>Salary Slip — {slipMonth}</p>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", marginBottom: "16px" }}>
              <tbody>
                {[
                  ["Employee Name", empName || "—",     "Employee ID",  empId || "—"],
                  ["Designation",   designation || "—", "Department",   department || "—"],
                  ["Salary Month",  slipMonth,          "Working Days", "26"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ddd", padding: "6px 8px", background: "#f9fafb", fontWeight: "600", width: "25%" }}>{row[0]}</td>
                    <td style={{ border: "1px solid #ddd", padding: "6px 8px", width: "25%" }}>{row[1]}</td>
                    <td style={{ border: "1px solid #ddd", padding: "6px 8px", background: "#f9fafb", fontWeight: "600", width: "25%" }}>{row[2]}</td>
                    <td style={{ border: "1px solid #ddd", padding: "6px 8px", width: "25%" }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f3f4f6", textAlign: "left" }}>Earnings</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f3f4f6", textAlign: "right" }}>Amount</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f3f4f6", textAlign: "left" }}>Deductions</th>
                  <th style={{ border: "1px solid #ddd", padding: "8px", background: "#f3f4f6", textAlign: "right" }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Basic Salary",       results.monthlyBasic,   "PF (Employee 12%)",  results.monthlyPF],
                  ["HRA",               results.monthlyHRA,     "Income Tax (TDS)",   results.monthlyTDS],
                  ["Special Allowance", results.monthlySpecial, "Professional Tax",   results.monthlyPT],
                  ["LTA",               results.monthlyLTA,     "",                   0],
                  ["Medical Allowance", results.monthlyMedical, "",                   0],
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ddd", padding: "6px 8px" }}>{row[0]}</td>
                    <td style={{ border: "1px solid #ddd", padding: "6px 8px", textAlign: "right" }}>{row[0] ? formatINR(row[1] as number) : ""}</td>
                    <td style={{ border: "1px solid #ddd", padding: "6px 8px" }}>{row[2]}</td>
                    <td style={{ border: "1px solid #ddd", padding: "6px 8px", textAlign: "right" }}>{row[2] ? formatINR(row[3] as number) : ""}</td>
                  </tr>
                ))}
                <tr style={{ fontWeight: "600", background: "#f9fafb" }}>
                  <td style={{ border: "1px solid #ddd", padding: "6px 8px" }}>Gross Earnings</td>
                  <td style={{ border: "1px solid #ddd", padding: "6px 8px", textAlign: "right" }}>{formatINR(results.monthlyGross)}</td>
                  <td style={{ border: "1px solid #ddd", padding: "6px 8px" }}>Total Deductions</td>
                  <td style={{ border: "1px solid #ddd", padding: "6px 8px", textAlign: "right" }}>{formatINR(results.monthlyPF + results.monthlyTDS + results.monthlyPT)}</td>
                </tr>
              </tbody>
            </table>

            <div style={{ background: "#E1F5EE", padding: "12px", textAlign: "center", marginTop: "12px", borderRadius: "8px", fontWeight: "700", fontSize: "16px", color: "#0F6E56" }}>
              Net Pay: {formatINR(results.monthlyInHand)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Salary Hike UI ──
  if (salaryType === "salary-hike-calculator") {
    const newCTC      = oldCtc * (1 + hikeRate / 100)
    const hikeDiff    = newResults.monthlyInHand - results.monthlyInHand

    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Hike details bharein
          </h2>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Current CTC (annual)</span>
              <span className="slider_val">{formatINR(oldCtc)}</span>
            </div>
            <input type="range" min={100000} max={20000000} step={50000}
              value={oldCtc} onChange={e => setOldCtc(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>₹1L</span><span>₹2 crore</span></div>
          </div>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Hike percentage</span>
              <span className="slider_val">{hikeRate}%</span>
            </div>
            <input type="range" min={1} max={100} step={1}
              value={hikeRate} onChange={e => setHikeRate(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>1%</span><span>100%</span></div>
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

          <button className="calc_btn">Calculate Hike</button>
          <div className="sdc_flex_box">
            <button className="share_btn"><Share2 /> Share</button>
            <button className="copy_btn"><Copy /> Copy</button>
          </div>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">Hike result</h2>

          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Current CTC</div>
              <div className="metric_value">{formatINR(oldCtc)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">New CTC ({hikeRate}% hike)</div>
              <div className="metric_value" style={{ color: "#1D9E75" }}>{formatINR(newCTC)}</div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Monthly in-hand increase</div>
              <div className="metric_value metric_large">+{formatINR(hikeDiff)}</div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">Annual increase</div>
              <div className="metric_value">{formatINR(hikeDiff * 12)}</div>
            </div>
          </div>

          <table className="year_table" style={{ marginTop: "16px" }}>
            <thead>
              <tr><th>Component</th><th>Current</th><th>After Hike</th><th>Difference</th></tr>
            </thead>
            <tbody>
              {[
                ["Annual CTC",         oldCtc,                      newCTC,                         newCTC - oldCtc],
                ["Monthly Gross",      results.monthlyGross,        newResults.monthlyGross,        newResults.monthlyGross - results.monthlyGross],
                ["Monthly TDS",        results.monthlyTDS,          newResults.monthlyTDS,          newResults.monthlyTDS - results.monthlyTDS],
                ["Monthly In-hand",    results.monthlyInHand,       newResults.monthlyInHand,       hikeDiff],
              ].map(([label, curr, after, diff]) => (
                <tr key={label as string}>
                  <td>{label}</td>
                  <td>{formatINR(curr as number)}</td>
                  <td style={{ color: "#1D9E75" }}>{formatINR(after as number)}</td>
                  <td style={{ color: (diff as number) > 0 ? "#1D9E75" : "#EF4444" }}>
                    +{formatINR(diff as number)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // ── Main Salary / CTC to In-hand / Take Home UI ──
  return (
    <div className="emi_wrapper">
      <div className="emi_card">
        <h2 className="emi_card_title">
          <SlidersHorizontal size={16} color="#1D9E75" />
          Salary details bharein
        </h2>

        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Annual CTC</span>
            <span className="slider_val">{formatINR(ctc)}</span>
          </div>
          <input type="range" min={100000} max={20000000} step={50000}
            value={ctc} onChange={e => setCtc(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>₹1L</span><span>₹2 crore</span></div>
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
                {r === "new" ? "🆕 New Regime" : "📋 Old Regime"}
              </button>
            ))}
          </div>
        </div>

        <div className="slider_group">
          <span className="slider_label">PF contribution</span>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            {[
              { label: "PF opted in (12%)",  val: false },
              { label: "PF opted out",       val: true  },
            ].map(({ label, val }) => (
              <button key={label} onClick={() => setPfOptOut(val)}
                style={{
                  flex: 1, padding: "8px", borderRadius: "8px", cursor: "pointer",
                  border: `1px solid ${pfOptOut === val ? "#1D9E75" : "#E5E7EB"}`,
                  background: pfOptOut === val ? "#E1F5EE" : "white",
                  color: pfOptOut === val ? "#0F6E56" : "#374151",
                  fontWeight: pfOptOut === val ? "600" : "400", fontSize: "13px",
                }}>{label}</button>
            ))}
          </div>
        </div>

        <button className="calc_btn">Calculate Salary</button>
        <div className="sdc_flex_box">
          <button className="share_btn"><Share2 /> Share</button>
          <button className="download_pdf_btn"><Download /> Download PDF</button>
          <button className="copy_btn"><Copy /> Copy</button>
        </div>
      </div>

      {/* Results */}
      <div className="emi_card">
        <h2 className="emi_card_title">Aapka salary breakup</h2>

        <div className="result_metrics">
          <div className="metric">
            <div className="metric_label">Monthly gross salary</div>
            <div className="metric_value">{formatINR(results.monthlyGross)}</div>
          </div>
          <div className="metric">
            <div className="metric_label">Total deductions</div>
            <div className="metric_value" style={{ color: "#854F0B" }}>
              {formatINR(results.monthlyPF + results.monthlyTDS + results.monthlyPT)}
            </div>
          </div>
          <div className="metric metric_accent">
            <div className="metric_label">Monthly in-hand</div>
            <div className="metric_value metric_large">{formatINR(results.monthlyInHand)}</div>
          </div>
          <div className="metric metric_full">
            <div className="metric_label">Effective tax rate</div>
            <div className="metric_value">{results.effectiveRate.toFixed(1)}%</div>
          </div>
        </div>

        {/* Donut */}
        <div className="donut_row">
          <svg width="80" height="80" viewBox="0 0 80 80" style={{ flexShrink: 0 }}>
            <circle cx="40" cy="40" r="30" fill="none" stroke="#E1F5EE" strokeWidth="12" />
            <circle cx="40" cy="40" r="30" fill="none" stroke="#1D9E75" strokeWidth="12"
              strokeDasharray={`${(inHandPct / 100) * circumference} ${circumference}`}
              strokeDashoffset={circumference * 0.25}
              transform="rotate(-90 40 40)" />
            <text x="40" y="44" textAnchor="middle" fontSize="11" fontWeight="500" fill="#0F6E56">
              {inHandPct}%
            </text>
          </svg>
          <div className="legend">
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#1D9E75" }} />
              <span>In-hand</span>
              <span className="legend_val">{formatINR(results.monthlyInHand)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#FAEEDA", border: "1px solid #854F0B" }} />
              <span>Tax (TDS)</span>
              <span className="legend_val">{formatINR(results.monthlyTDS)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#185FA5" }} />
              <span>PF + PT</span>
              <span className="legend_val">{formatINR(results.monthlyPF + results.monthlyPT)}</span>
            </div>
          </div>
        </div>

        {/* Full breakup table */}
        <table className="year_table">
          <thead>
            <tr><th>Component</th><th>Monthly</th><th>Annual</th></tr>
          </thead>
          <tbody>
            <tr style={{ background: "#F0FDF4" }}>
              <td colSpan={3} style={{ fontWeight: "600", color: "#1D9E75" }}>📈 Earnings</td>
            </tr>
            {[
              ["Basic Salary",        results.monthlyBasic,   results.basic],
              ["HRA",                results.monthlyHRA,     results.hra],
              ["Special Allowance",  results.monthlySpecial, results.specialAllow],
              ["LTA",                results.monthlyLTA,     results.lta],
              ["Medical Allowance",  results.monthlyMedical, results.medicalAllow],
            ].map(([label, monthly, annual]) => (
              <tr key={label as string}>
                <td>{label}</td>
                <td>{formatINR(monthly as number)}</td>
                <td>{formatINR(annual as number)}</td>
              </tr>
            ))}
            <tr style={{ fontWeight: "600" }}>
              <td>Gross Salary</td>
              <td>{formatINR(results.monthlyGross)}</td>
              <td>{formatINR(results.grossSalary)}</td>
            </tr>
            <tr style={{ background: "#FEF2F2" }}>
              <td colSpan={3} style={{ fontWeight: "600", color: "#DC2626" }}>📉 Deductions</td>
            </tr>
            {[
              ["Employee PF (12%)",  results.monthlyPF,  results.employeePF],
              ["Income Tax (TDS)",   results.monthlyTDS, results.annualTaxWithCess],
              ["Professional Tax",   results.monthlyPT,  results.professionalTax],
            ].map(([label, monthly, annual]) => (
              <tr key={label as string}>
                <td>{label}</td>
                <td style={{ color: "#DC2626" }}>{formatINR(monthly as number)}</td>
                <td style={{ color: "#DC2626" }}>{formatINR(annual as number)}</td>
              </tr>
            ))}
            <tr style={{ fontWeight: "700", background: "#E1F5EE" }}>
              <td>✅ Net In-hand</td>
              <td style={{ color: "#0F6E56" }}>{formatINR(results.monthlyInHand)}</td>
              <td style={{ color: "#0F6E56" }}>{formatINR(results.monthlyInHand * 12)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}