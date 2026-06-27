"use client"

import { useState, useEffect, useRef } from "react"
import { Copy, Download, Share2, SlidersHorizontal, Printer } from "lucide-react"
import './emi.css'
import { hraConfig, HraType } from "@/lib/hraData"

// ─── Helpers ─────────────────────────────────────────────────

function formatINR(amount: number): string {
  return "₹" + Math.round(amount).toLocaleString("en-IN")
}

// ─── HRA Formula ─────────────────────────────────────────────

function calcHRA(basic: number, hra: number, rent: number, isMetro: boolean) {
  const metroLimit    = basic * 0.50
  const nonMetroLimit = basic * 0.40
  const cityLimit     = isMetro ? metroLimit : nonMetroLimit
  const rentMinus10   = Math.max(0, rent * 12 - basic * 12 * 0.10)
  const actualHRA     = hra * 12

  const exemption  = Math.min(actualHRA, cityLimit * 12, rentMinus10)
  const taxableHRA = actualHRA - exemption

  return {
    actualHRA,
    exemption,
    taxableHRA,
    cityLimit:   cityLimit * 12,
    rentMinus10,
  }
}

function calcTaxBenefit(exemption: number) {
  const slab10 = exemption * 0.10 * 1.04
  const slab20 = exemption * 0.20 * 1.04
  const slab30 = exemption * 0.30 * 1.04
  return { slab10, slab20, slab30 }
}

// ─── Component ───────────────────────────────────────────────

type Props = { hraType: HraType }

export default function HRACalculator({ hraType }: Props) {
  const config = hraConfig[hraType]

  const [basic,    setBasic]    = useState(config.defaultBasic)
  const [hra,      setHra]      = useState(config.defaultHra)
  const [rent,     setRent]     = useState(config.defaultRent)
  const [isMetro,  setIsMetro]  = useState(true)

  // Rent receipt fields
  const [tenantName,   setTenantName]   = useState("")
  const [landlordName, setLandlordName] = useState("")
  const [address,      setAddress]      = useState("")
  const [month,        setMonth]        = useState("January 2025")
  const [payMode,      setPayMode]      = useState("Cash")

  const receiptRef = useRef<HTMLDivElement>(null)

  const [results, setResults] = useState({
    actualHRA:   0,
    exemption:   0,
    taxableHRA:  0,
    cityLimit:   0,
    rentMinus10: 0,
    slab10:      0,
    slab20:      0,
    slab30:      0,
  })

  useEffect(() => {
    const r  = calcHRA(basic, hra, rent, isMetro)
    const tb = calcTaxBenefit(r.exemption)
    setResults({ ...r, ...tb })
  }, [basic, hra, rent, isMetro])

  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLInputElement>(".emi_range")
    sliders.forEach(el => {
      const min = Number(el.min)
      const max = Number(el.max)
      const val = Number(el.value)
      const pct = ((val - min) / (max - min)) * 100
      el.style.background = `linear-gradient(to right, #1D9E75 ${pct}%, #E5E7EB ${pct}%)`
    })
  }, [basic, hra, rent])

  const exemptPct = results.actualHRA > 0
    ? Math.round((results.exemption / results.actualHRA) * 100)
    : 0
  const circumference = 2 * Math.PI * 30

  // Print receipt
  const handlePrint = () => {
    const content = receiptRef.current?.innerHTML
    if (!content) return
    const win = window.open("", "_blank")
    win?.document.write(`
      <html><head><title>Rent Receipt</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; }
        .receipt { border: 2px solid #000; padding: 30px; max-width: 600px; margin: auto; }
        h2 { text-align: center; text-decoration: underline; }
        .row { display: flex; justify-content: space-between; margin: 12px 0; }
        .stamp { border: 2px dashed #999; width: 100px; height: 60px; display: flex; align-items: center; justify-content: center; color: #999; font-size: 12px; margin-top: 20px; }
        .sign { margin-top: 40px; text-align: right; }
      </style></head>
      <body>${content}</body></html>
    `)
    win?.document.close()
    win?.print()
  }

  // ── Rent Receipt UI ──
  if (hraType === "rent-receipt") {
    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Receipt details bharein
          </h2>

          {[
            { label: "Tenant ka naam",    value: tenantName,   set: setTenantName,   placeholder: "Aapka naam" },
            { label: "Landlord ka naam",  value: landlordName, set: setLandlordName, placeholder: "Makan maalik ka naam" },
            { label: "Property address",  value: address,      set: setAddress,      placeholder: "Full address" },
          ].map(({ label, value, set, placeholder }) => (
            <div className="slider_group" key={label}>
              <span className="slider_label">{label}</span>
              <input
                type="text"
                value={value}
                onChange={e => set(e.target.value)}
                placeholder={placeholder}
                style={{
                  width: "100%", padding: "10px 14px",
                  border: "1px solid #E5E7EB", borderRadius: "8px",
                  fontSize: "14px", marginTop: "6px", outline: "none",
                }}
              />
            </div>
          ))}

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Monthly rent</span>
              <span className="slider_val">{formatINR(rent)}</span>
            </div>
            <input
              type="range" min={1000} max={200000} step={500}
              value={rent} onChange={e => setRent(Number(e.target.value))}
              className="emi_range"
            />
            <div className="range_hints"><span>₹1K</span><span>₹2 lakh</span></div>
          </div>

          <div className="slider_group">
            <span className="slider_label">Rent month</span>
            <input
              type="text" value={month}
              onChange={e => setMonth(e.target.value)}
              style={{
                width: "100%", padding: "10px 14px",
                border: "1px solid #E5E7EB", borderRadius: "8px",
                fontSize: "14px", marginTop: "6px", outline: "none",
              }}
            />
          </div>

          <div className="slider_group">
            <span className="slider_label">Payment mode</span>
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              {["Cash", "Cheque", "Online Transfer"].map(m => (
                <button key={m} onClick={() => setPayMode(m)}
                  style={{
                    padding: "6px 14px", borderRadius: "20px", cursor: "pointer",
                    border: `1px solid ${payMode === m ? "#1D9E75" : "#E5E7EB"}`,
                    background: payMode === m ? "#E1F5EE" : "white",
                    color: payMode === m ? "#0F6E56" : "#374151",
                    fontWeight: payMode === m ? "600" : "400", fontSize: "13px",
                  }}>{m}</button>
              ))}
            </div>
          </div>

          <button className="calc_btn" onClick={handlePrint}
            style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
            <Printer size={16} /> Print Receipt
          </button>

          <div className="sdc_flex_box">
            <button className="share_btn"><Share2 /> Share</button>
            <button className="download_pdf_btn"><Download /> Download PDF</button>
            <button className="copy_btn"><Copy /> Copy</button>
          </div>
        </div>

        {/* Receipt Preview */}
        <div className="emi_card">
          <h2 className="emi_card_title">Receipt preview</h2>
          <div ref={receiptRef} style={{
            border: "2px solid #000", padding: "24px", borderRadius: "4px",
            fontFamily: "Arial, sans-serif", fontSize: "14px",
          }}>
            <h2 style={{ textAlign: "center", textDecoration: "underline", marginBottom: "20px" }}>
              RENT RECEIPT
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span><strong>Period:</strong> {month}</span>
              <span><strong>Amount:</strong> {formatINR(rent)}</span>
            </div>
            <p style={{ margin: "10px 0" }}>
              Received with thanks from <strong>{tenantName || "___________"}</strong> a sum of{" "}
              <strong>{formatINR(rent)}</strong> by <strong>{payMode}</strong> towards rent for the
              residential accommodation situated at:
            </p>
            <p style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "4px", margin: "12px 0" }}>
              {address || "Property address here..."}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
              <div style={{
                border: "2px dashed #999", width: "100px", height: "60px",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#999", fontSize: "11px",
              }}>
                Revenue Stamp{payMode === "Cash" ? "" : " (N/A)"}
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ marginBottom: "30px" }}>Landlord Signature</p>
                <p><strong>{landlordName || "___________"}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── HRA / Exemption / Tax Benefit UI ──
  return (
    <div className="emi_wrapper">
      <div className="emi_card">
        <h2 className="emi_card_title">
          <SlidersHorizontal size={16} color="#1D9E75" />
          Salary details bharein
        </h2>

        {/* Basic salary */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Basic salary (monthly)</span>
            <span className="slider_val">{formatINR(basic)}</span>
          </div>
          <input type="range" min={5000} max={500000} step={1000}
            value={basic} onChange={e => setBasic(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>₹5K</span><span>₹5 lakh</span></div>
        </div>

        {/* HRA received */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">HRA received (monthly)</span>
            <span className="slider_val">{formatINR(hra)}</span>
          </div>
          <input type="range" min={1000} max={300000} step={500}
            value={hra} onChange={e => setHra(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>₹1K</span><span>₹3 lakh</span></div>
        </div>

        {/* Rent paid */}
        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Rent paid (monthly)</span>
            <span className="slider_val">{formatINR(rent)}</span>
          </div>
          <input type="range" min={1000} max={200000} step={500}
            value={rent} onChange={e => setRent(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>₹1K</span><span>₹2 lakh</span></div>
        </div>

        {/* Metro / Non-metro */}
        <div className="slider_group">
          <span className="slider_label">City type</span>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            {[
              { label: "🏙️ Metro (Delhi/Mumbai/Chennai/Kolkata)", val: true  },
              { label: "🏘️ Non-metro",                            val: false },
            ].map(({ label, val }) => (
              <button key={label} onClick={() => setIsMetro(val)}
                style={{
                  flex: 1, padding: "8px", borderRadius: "8px", cursor: "pointer",
                  border: `1px solid ${isMetro === val ? "#1D9E75" : "#E5E7EB"}`,
                  background: isMetro === val ? "#E1F5EE" : "white",
                  color: isMetro === val ? "#0F6E56" : "#374151",
                  fontWeight: isMetro === val ? "600" : "400", fontSize: "12px",
                }}>{label}</button>
            ))}
          </div>
        </div>

        <button className="calc_btn">Calculate HRA</button>

        <div className="sdc_flex_box">
          <button className="share_btn"><Share2 /> Share</button>
          <button className="download_pdf_btn"><Download /> Download PDF</button>
          <button className="copy_btn"><Copy /> Copy result</button>
        </div>
      </div>

      {/* Results */}
      <div className="emi_card">
        <h2 className="emi_card_title">Aapka result</h2>

        <div className="result_metrics">
          <div className="metric">
            <div className="metric_label">Annual HRA received</div>
            <div className="metric_value">{formatINR(results.actualHRA)}</div>
          </div>
          <div className="metric">
            <div className="metric_label">HRA exemption (tax-free)</div>
            <div className="metric_value" style={{ color: "#1D9E75" }}>
              {formatINR(results.exemption)}
            </div>
          </div>
          <div className="metric metric_accent">
            <div className="metric_label">Taxable HRA</div>
            <div className="metric_value metric_large">
              {formatINR(results.taxableHRA)}
            </div>
          </div>
          <div className="metric metric_full">
            <div className="metric_label">
              {isMetro ? "50%" : "40%"} of basic (annual)
            </div>
            <div className="metric_value">{formatINR(results.cityLimit)}</div>
          </div>
        </div>

        {/* Donut chart */}
        <div className="donut_row">
          <svg width="80" height="80" viewBox="0 0 80 80" style={{ flexShrink: 0 }}>
            <circle cx="40" cy="40" r="30" fill="none" stroke="#E1F5EE" strokeWidth="12" />
            <circle cx="40" cy="40" r="30" fill="none" stroke="#1D9E75" strokeWidth="12"
              strokeDasharray={`${(exemptPct / 100) * circumference} ${circumference}`}
              strokeDashoffset={circumference * 0.25}
              transform="rotate(-90 40 40)" />
            <text x="40" y="44" textAnchor="middle" fontSize="11" fontWeight="500" fill="#0F6E56">
              {exemptPct}%
            </text>
          </svg>
          <div className="legend">
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#1D9E75" }} />
              <span>Tax-free HRA</span>
              <span className="legend_val">{formatINR(results.exemption)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#FAEEDA", border: "1px solid #854F0B" }} />
              <span>Taxable HRA</span>
              <span className="legend_val">{formatINR(results.taxableHRA)}</span>
            </div>
          </div>
        </div>

        {/* Exemption breakdown table */}
        <table className="year_table">
          <thead>
            <tr>
              <th>Condition (minimum of 3)</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Actual HRA received</td>
              <td>{formatINR(results.actualHRA)}</td>
            </tr>
            <tr>
              <td>{isMetro ? "50%" : "40%"} of annual basic</td>
              <td>{formatINR(results.cityLimit)}</td>
            </tr>
            <tr>
              <td>Rent paid minus 10% of basic</td>
              <td>{formatINR(results.rentMinus10)}</td>
            </tr>
            <tr style={{ fontWeight: "600", background: "#F0FDF4" }}>
              <td>✅ HRA Exemption (minimum)</td>
              <td style={{ color: "#1D9E75" }}>{formatINR(results.exemption)}</td>
            </tr>
          </tbody>
        </table>

        {/* Tax benefit — show only for hra-tax-benefit */}
        {hraType === "hra-tax-benefit" && (
          <>
            <h3 style={{ marginTop: "20px", fontSize: "14px", color: "#374151" }}>
              Tax saving by slab:
            </h3>
            <table className="year_table">
              <thead>
                <tr><th>Tax Slab</th><th>Tax Saved (incl. 4% cess)</th></tr>
              </thead>
              <tbody>
                <tr><td>10% slab</td><td className="td_green">{formatINR(results.slab10)}</td></tr>
                <tr><td>20% slab</td><td className="td_green">{formatINR(results.slab20)}</td></tr>
                <tr><td>30% slab</td><td className="td_green">{formatINR(results.slab30)}</td></tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  )
}