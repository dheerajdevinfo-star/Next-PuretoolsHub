"use client"

import { useState, useEffect } from "react"
import { Copy, Download, Share2, SlidersHorizontal } from "lucide-react"
import './emi.css'
import { epfConfig, EpfType } from "@/lib/epfData"

// ─── Helpers ─────────────────────────────────────────────────

function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN")
}

// ─── EPF Formulas ─────────────────────────────────────────────

function calcEPF(
  monthlySalary: number,
  currentAge:    number,
  retireAge:     number,
  annualRate:    number,
  annualHike:    number = 5
) {
  const years         = retireAge - currentAge
  const monthlyRate   = annualRate / 12 / 100
  const empContrib    = monthlySalary * 0.12
  const empContribEPF = monthlySalary * 0.0367  // employer EPF only (3.67%)

  let balance         = 0
  let totalEmployee   = 0
  let totalEmployer   = 0
  let totalInterest   = 0
  let currentSalary   = monthlySalary
  const yearlyData: {
    year: number; salary: number; empContrib: number;
    empyrContrib: number; interest: number; balance: number
  }[] = []

  for (let y = 1; y <= years; y++) {
    const monthlyEmp  = currentSalary * 0.12
    const monthlyEmpr = currentSalary * 0.0367
    let yearInterest  = 0

    for (let m = 1; m <= 12; m++) {
      balance       += monthlyEmp + monthlyEmpr
      yearInterest  += balance * monthlyRate
    }

    balance        += yearInterest
    totalEmployee  += monthlyEmp * 12
    totalEmployer  += monthlyEmpr * 12
    totalInterest  += yearInterest

    if (y === 1 || y === Math.ceil(years / 2) || y === years) {
      yearlyData.push({
        year:        y,
        salary:      Math.round(currentSalary),
        empContrib:  Math.round(monthlyEmp * 12),
        empyrContrib: Math.round(monthlyEmpr * 12),
        interest:    Math.round(yearInterest),
        balance:     Math.round(balance),
      })
    }

    currentSalary = currentSalary * (1 + annualHike / 100)
  }

  return {
    maturityAmount: Math.round(balance),
    totalEmployee:  Math.round(totalEmployee),
    totalEmployer:  Math.round(totalEmployer),
    totalInterest:  Math.round(totalInterest),
    totalInvested:  Math.round(totalEmployee + totalEmployer),
    years,
    yearlyData,
  }
}

// EPS Pension formula
function calcEPS(salary: number, serviceYears: number) {
  const pensionableSalary  = Math.min(salary, 15000) // max ₹15,000
  const pension            = (pensionableSalary * serviceYears) / 70
  const minPension         = 1000
  return {
    monthlyPension: Math.max(Math.round(pension), minPension),
    pensionableSalary,
    annualPension:  Math.max(Math.round(pension), minPension) * 12,
  }
}

// Withdrawal calculation
function calcWithdrawal(
  balance: number,
  serviceYears: number,
  taxSlab: number
) {
  const isTaxFree  = serviceYears >= 5
  const taxAmount  = isTaxFree ? 0 : balance * taxSlab / 100 * 1.04
  const netAmount  = balance - taxAmount

  // Partial withdrawal limits
  const homeLoan   = balance * 0.90  // 90% for home
  const medical    = balance * 0.50  // 50% for medical
  const education  = balance * 0.50  // 50% for education

  return { isTaxFree, taxAmount, netAmount, homeLoan, medical, education }
}

// ─── Component ───────────────────────────────────────────────

type Props = { epfType: EpfType }

export default function EPFCalculator({ epfType }: Props) {
  const config = epfConfig[epfType]

  const [salary,       setSalary]       = useState(config.defaultSalary)
  const [currentAge,   setCurrentAge]   = useState(config.defaultAge)
  const [retireAge,    setRetireAge]    = useState(config.defaultRetire)
  const [rate,         setRate]         = useState(config.defaultRate)
  const [annualHike,   setAnnualHike]   = useState(5)
  const [serviceYears, setServiceYears] = useState(10)
  const [currentBalance, setCurrentBalance] = useState(500000)
  const [taxSlab,      setTaxSlab]      = useState(20)

  const [results, setResults] = useState(
    calcEPF(config.defaultSalary, config.defaultAge, config.defaultRetire, config.defaultRate)
  )
  const [epsResults, setEpsResults] = useState(
    calcEPS(config.defaultSalary, config.defaultRetire - config.defaultAge)
  )
  const [withdrawalResults, setWithdrawalResults] = useState(
    calcWithdrawal(500000, 10, 20)
  )

  useEffect(() => {
    const r  = calcEPF(salary, currentAge, retireAge, rate, annualHike)
    const ep = calcEPS(salary, retireAge - currentAge)
    const wr = calcWithdrawal(currentBalance, serviceYears, taxSlab)
    setResults(r)
    setEpsResults(ep)
    setWithdrawalResults(wr)
  }, [salary, currentAge, retireAge, rate, annualHike, serviceYears, currentBalance, taxSlab])

  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLInputElement>(".emi_range")
    sliders.forEach(el => {
      const min = Number(el.min), max = Number(el.max), val = Number(el.value)
      const pct = ((val - min) / (max - min)) * 100
      el.style.background = `linear-gradient(to right, #1D9E75 ${pct}%, #E5E7EB ${pct}%)`
    })
  }, [salary, currentAge, retireAge, rate, annualHike, serviceYears, currentBalance])

  const investedPct   = results.maturityAmount > 0
    ? Math.round((results.totalInvested / results.maturityAmount) * 100) : 0
  const circumference = 2 * Math.PI * 30

  // Shared salary slider
  const SalarySlider = () => (
    <div className="slider_group">
      <div className="slider_top">
        <span className="slider_label">Basic + DA salary (monthly)</span>
        <span className="slider_val">{formatINR(salary)}</span>
      </div>
      <input type="range" min={5000} max={200000} step={1000}
        value={salary} onChange={e => setSalary(Number(e.target.value))}
        className="emi_range" />
      <div className="range_hints"><span>₹5K</span><span>₹2 lakh</span></div>
    </div>
  )

  // ── EPF Balance Check UI ──
  if (epfType === "epf-balance-check") {
    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Balance estimate karein
          </h2>
          <SalarySlider />

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Current age</span>
              <span className="slider_val">{currentAge} years</span>
            </div>
            <input type="range" min={18} max={57} step={1}
              value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>18</span><span>57</span></div>
          </div>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Years of service</span>
              <span className="slider_val">{serviceYears} years</span>
            </div>
            <input type="range" min={1} max={35} step={1}
              value={serviceYears} onChange={e => setServiceYears(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>1</span><span>35</span></div>
          </div>

          <button className="calc_btn">Estimate Balance</button>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">Estimated balance</h2>

          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Employee contribution</div>
              <div className="metric_value">
                {formatINR(salary * 0.12 * serviceYears * 12)}
              </div>
            </div>
            <div className="metric">
              <div className="metric_label">Employer contribution (EPF)</div>
              <div className="metric_value">
                {formatINR(salary * 0.0367 * serviceYears * 12)}
              </div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Estimated EPF balance</div>
              <div className="metric_value metric_large">
                {formatINR(calcEPF(salary, currentAge, currentAge + serviceYears, rate).maturityAmount)}
              </div>
            </div>
          </div>

          {/* How to check balance */}
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ fontSize: "14px", fontWeight: "600", marginBottom: "12px" }}>
              Balance check karne ke 4 tarike:
            </h3>
            {[
              { icon: "🌐", method: "EPFO Portal",   desc: "epfindia.gov.in → Member Passbook",    highlight: true  },
              { icon: "📱", method: "UMANG App",      desc: "EPFO section → View Passbook",          highlight: false },
              { icon: "📞", method: "Missed Call",    desc: "011-22901406 par missed call",          highlight: false },
              { icon: "💬", method: "SMS",            desc: "EPFOHO UAN ENG → 7738299899",           highlight: false },
            ].map(({ icon, method, desc, highlight }) => (
              <div key={method} style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "10px 12px", borderRadius: "8px", marginBottom: "8px",
                background: highlight ? "#E1F5EE" : "#F9FAFB",
                border: `1px solid ${highlight ? "#1D9E75" : "#E5E7EB"}`,
              }}>
                <span style={{ fontSize: "20px" }}>{icon}</span>
                <div>
                  <p style={{ margin: 0, fontWeight: "600", fontSize: "13px" }}>{method}</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#6B7280" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── EPF Withdrawal UI ──
  if (epfType === "epf-withdrawal") {
    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Withdrawal details bharein
          </h2>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Current EPF balance</span>
              <span className="slider_val">{formatINR(currentBalance)}</span>
            </div>
            <input type="range" min={10000} max={10000000} step={10000}
              value={currentBalance} onChange={e => setCurrentBalance(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>₹10K</span><span>₹1 crore</span></div>
          </div>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Years of service</span>
              <span className="slider_val">{serviceYears} years</span>
            </div>
            <input type="range" min={1} max={35} step={1}
              value={serviceYears} onChange={e => setServiceYears(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>1 year</span><span>35 years</span></div>
          </div>

          {serviceYears < 5 && (
            <div className="slider_group">
              <span className="slider_label">Tax slab (for TDS)</span>
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

          <button className="calc_btn">Calculate Withdrawal</button>
          <div className="sdc_flex_box">
            <button className="share_btn"><Share2 /> Share</button>
            <button className="copy_btn"><Copy /> Copy</button>
          </div>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">Withdrawal result</h2>

          <div style={{
            padding: "16px", borderRadius: "12px", marginBottom: "16px", textAlign: "center",
            background: withdrawalResults.isTaxFree ? "#F0FDF4" : "#FEF2F2",
            border: `2px solid ${withdrawalResults.isTaxFree ? "#1D9E75" : "#EF4444"}`,
          }}>
            <div style={{ fontSize: "36px" }}>{withdrawalResults.isTaxFree ? "✅" : "⚠️"}</div>
            <p style={{ fontWeight: "700", color: withdrawalResults.isTaxFree ? "#0F6E56" : "#DC2626", margin: "8px 0 4px" }}>
              {withdrawalResults.isTaxFree ? "Tax-free withdrawal!" : `${serviceYears} saal — Taxable withdrawal`}
            </p>
            <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>
              {withdrawalResults.isTaxFree
                ? "5+ saal service — poori tarah tax-free"
                : "5 saal se kam service — TDS + tax lagega"}
            </p>
          </div>

          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">EPF balance</div>
              <div className="metric_value">{formatINR(currentBalance)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">Tax deduction</div>
              <div className="metric_value" style={{ color: "#DC2626" }}>
                -{formatINR(withdrawalResults.taxAmount)}
              </div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Net withdrawal amount</div>
              <div className="metric_value metric_large">
                {formatINR(withdrawalResults.netAmount)}
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "16px 0 8px" }}>
            Partial withdrawal limits:
          </h3>
          <table className="year_table">
            <thead>
              <tr><th>Purpose</th><th>Max Amount</th><th>Service Required</th></tr>
            </thead>
            <tbody>
              <tr><td>🏠 Home purchase/loan</td><td className="td_green">{formatINR(withdrawalResults.homeLoan)}</td><td>5 years</td></tr>
              <tr><td>🏥 Medical emergency</td><td className="td_green">{formatINR(withdrawalResults.medical)}</td><td>No minimum</td></tr>
              <tr><td>🎓 Education/Marriage</td><td className="td_green">{formatINR(withdrawalResults.education)}</td><td>7 years</td></tr>
              <tr><td>🏗️ Home renovation</td><td className="td_green">{formatINR(currentBalance * 0.12)}</td><td>5 years</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // ── EPS Calculator UI ──
  if (epfType === "eps-calculator") {
    const pensionYears = retireAge - currentAge
    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Pension details bharein
          </h2>

          <SalarySlider />

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Current age</span>
              <span className="slider_val">{currentAge} years</span>
            </div>
            <input type="range" min={18} max={57} step={1}
              value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>18</span><span>57</span></div>
          </div>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Retirement age</span>
              <span className="slider_val">{retireAge} years</span>
            </div>
            <input type="range" min={50} max={58} step={1}
              value={retireAge} onChange={e => setRetireAge(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>50</span><span>58</span></div>
          </div>

          <button className="calc_btn">Calculate Pension</button>
          <div className="sdc_flex_box">
            <button className="share_btn"><Share2 /> Share</button>
            <button className="copy_btn"><Copy /> Copy</button>
          </div>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">EPS pension result</h2>

          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Pensionable salary</div>
              <div className="metric_value">{formatINR(epsResults.pensionableSalary)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">Pensionable service</div>
              <div className="metric_value">{pensionYears} years</div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Monthly pension</div>
              <div className="metric_value metric_large">
                {formatINR(epsResults.monthlyPension)}
              </div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">Annual pension</div>
              <div className="metric_value">{formatINR(epsResults.annualPension)}</div>
            </div>
          </div>

          <div className="formula_box" style={{ marginTop: "16px" }}>
            <h2>EPS Pension Formula</h2>
            <h3>Pension = (Pensionable Salary × Service Years) ÷ 70</h3>
            <p className="pairagraph">
              = ({formatINR(epsResults.pensionableSalary)} × {pensionYears}) ÷ 70
              = {formatINR(epsResults.monthlyPension)}/month
            </p>
          </div>

          <table className="year_table" style={{ marginTop: "16px" }}>
            <thead><tr><th>Detail</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>Pensionable salary (max ₹15K)</td><td>{formatINR(epsResults.pensionableSalary)}</td></tr>
              <tr><td>Service years</td><td>{pensionYears} years</td></tr>
              <tr><td>Monthly pension</td><td className="td_green">{formatINR(epsResults.monthlyPension)}</td></tr>
              <tr><td>Annual pension</td><td className="td_green">{formatINR(epsResults.annualPension)}</td></tr>
              <tr><td>Minimum guaranteed pension</td><td>₹1,000/month</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // ── Main EPF + EPF Interest Calculator UI ──
  return (
    <div className="emi_wrapper">
      <div className="emi_card">
        <h2 className="emi_card_title">
          <SlidersHorizontal size={16} color="#1D9E75" />
          EPF details bharein
        </h2>

        <SalarySlider />

        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Current age</span>
            <span className="slider_val">{currentAge} years</span>
          </div>
          <input type="range" min={18} max={57} step={1}
            value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>18</span><span>57</span></div>
        </div>

        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Retirement age</span>
            <span className="slider_val">{retireAge} years</span>
          </div>
          <input type="range" min={50} max={58} step={1}
            value={retireAge} onChange={e => setRetireAge(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>50</span><span>58</span></div>
        </div>

        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">EPF interest rate</span>
            <span className="slider_val">{rate}%</span>
          </div>
          <input type="range" min={6} max={10} step={0.05}
            value={rate} onChange={e => setRate(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>6%</span><span>10%</span></div>
        </div>

        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Annual salary hike</span>
            <span className="slider_val">{annualHike}%</span>
          </div>
          <input type="range" min={0} max={20} step={1}
            value={annualHike} onChange={e => setAnnualHike(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>0%</span><span>20%</span></div>
        </div>

        <button className="calc_btn">Calculate EPF</button>
        <div className="sdc_flex_box">
          <button className="share_btn"><Share2 /> Share</button>
          <button className="download_pdf_btn"><Download /> Download PDF</button>
          <button className="copy_btn"><Copy /> Copy</button>
        </div>
      </div>

      {/* Results */}
      <div className="emi_card">
        <h2 className="emi_card_title">EPF maturity result</h2>

        <div className="result_metrics">
          <div className="metric">
            <div className="metric_label">Total invested (Emp + Empr)</div>
            <div className="metric_value">{formatINR(results.totalInvested)}</div>
          </div>
          <div className="metric">
            <div className="metric_label">Total interest earned</div>
            <div className="metric_value" style={{ color: "#1D9E75" }}>
              {formatINR(results.totalInterest)}
            </div>
          </div>
          <div className="metric metric_accent">
            <div className="metric_label">Maturity amount</div>
            <div className="metric_value metric_large">
              {formatINR(results.maturityAmount)}
            </div>
          </div>
          <div className="metric metric_full">
            <div className="metric_label">Investment period</div>
            <div className="metric_value">{results.years} years</div>
          </div>
        </div>

        {/* Donut */}
        <div className="donut_row">
          <svg width="80" height="80" viewBox="0 0 80 80" style={{ flexShrink: 0 }}>
            <circle cx="40" cy="40" r="30" fill="none" stroke="#E1F5EE" strokeWidth="12" />
            <circle cx="40" cy="40" r="30" fill="none" stroke="#1D9E75" strokeWidth="12"
              strokeDasharray={`${(investedPct / 100) * circumference} ${circumference}`}
              strokeDashoffset={circumference * 0.25}
              transform="rotate(-90 40 40)" />
            <text x="40" y="44" textAnchor="middle" fontSize="11" fontWeight="500" fill="#0F6E56">
              {investedPct}%
            </text>
          </svg>
          <div className="legend">
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#1D9E75" }} />
              <span>Employee PF</span>
              <span className="legend_val">{formatINR(results.totalEmployee)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#185FA5" }} />
              <span>Employer PF</span>
              <span className="legend_val">{formatINR(results.totalEmployer)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#FAEEDA", border: "1px solid #854F0B" }} />
              <span>Interest</span>
              <span className="legend_val">{formatINR(results.totalInterest)}</span>
            </div>
          </div>
        </div>

        {/* Yearly table */}
        <table className="year_table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Salary</th>
              <th>Interest</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {results.yearlyData.map(row => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatINR(row.salary)}</td>
                <td className="td_green">{formatINR(row.interest)}</td>
                <td>{formatINR(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}