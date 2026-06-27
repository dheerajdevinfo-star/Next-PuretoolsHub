"use client"

import { useState, useEffect } from "react"
import { Copy, Download, Share2, SlidersHorizontal } from "lucide-react"
import './emi.css'
import { ppfConfig, PpfType } from "@/lib/ppfData"

// ─── Helpers ─────────────────────────────────────────────────

function formatINR(n: number) {
  return "₹" + Math.round(n).toLocaleString("en-IN")
}

// ─── PPF Formulas ─────────────────────────────────────────────

function calcPPF(
  annualAmount: number,
  rate:         number,
  tenure:       number
) {
  const r = rate / 100
  let balance      = 0
  let totalInvested = 0
  const yearlyData: { year: number; invested: number; interest: number; balance: number }[] = []

  for (let y = 1; y <= tenure; y++) {
    balance       += annualAmount
    const interest = balance * r
    balance       += interest
    totalInvested += annualAmount

    yearlyData.push({
      year:     y,
      invested: Math.round(totalInvested),
      interest: Math.round(interest),
      balance:  Math.round(balance),
    })
  }

  return {
    maturityAmount: Math.round(balance),
    totalInvested:  Math.round(totalInvested),
    totalInterest:  Math.round(balance - totalInvested),
    yearlyData,
  }
}

// PPF withdrawal eligibility
function calcWithdrawal(yearlyData: ReturnType<typeof calcPPF>["yearlyData"], currentYear: number) {
  if (currentYear < 7) return { eligible: false, maxAmount: 0, reason: "7th year ke baad withdrawal possible hai" }
  const refBalance = Math.min(
    yearlyData[currentYear - 5]?.balance || 0,
    yearlyData[currentYear - 4]?.balance || 0
  )
  const maxAmount = Math.round(refBalance * 0.5)
  return { eligible: true, maxAmount, reason: `4th ya 5th year ke end balance ka 50%` }
}

// FD comparison
function calcFDReturns(amount: number, fdRate: number, tenure: number, taxSlab: number) {
  const annualInterest = amount * fdRate / 100
  const totalInterest  = annualInterest * tenure
  const taxOnInterest  = totalInterest * taxSlab / 100 * 1.04
  const netFDReturns   = amount * tenure + totalInterest - taxOnInterest
  const effectiveRate  = fdRate * (1 - taxSlab / 100)
  return { totalInterest, taxOnInterest, netFDReturns, effectiveRate }
}

// Extension calculation
function calcExtension(
  maturityBalance: number,
  rate:            number,
  blocks:          number,
  withContribution: boolean,
  annualAmount:    number
) {
  const years = blocks * 5
  let balance = maturityBalance
  let invested = 0
  const yearlyData: { year: number; added: number; interest: number; balance: number }[] = []

  for (let y = 1; y <= years; y++) {
    const contribution = withContribution ? annualAmount : 0
    balance   += contribution
    const int  = balance * rate / 100
    balance   += int
    invested  += contribution

    yearlyData.push({
      year:    y,
      added:   Math.round(contribution),
      interest: Math.round(int),
      balance: Math.round(balance),
    })
  }

  return {
    finalBalance:  Math.round(balance),
    extraGrowth:   Math.round(balance - maturityBalance),
    totalAdded:    Math.round(invested),
    yearlyData,
  }
}

// ─── Component ───────────────────────────────────────────────

type Props = { ppfType: PpfType }

export default function PPFCalculator({ ppfType }: Props) {
  const config = ppfConfig[ppfType]

  const [amount,     setAmount]     = useState(config.defaultAmount)
  const [rate,       setRate]       = useState(config.defaultRate)
  const [tenure,     setTenure]     = useState(config.defaultTenure)
  const [currentYear, setCurrentYear] = useState(8)
  const [fdRate,     setFdRate]     = useState(7.0)
  const [taxSlab,    setTaxSlab]    = useState(30)
  const [extBlocks,  setExtBlocks]  = useState(1)
  const [withContrib, setWithContrib] = useState(true)

  const [results, setResults] = useState(calcPPF(config.defaultAmount, config.defaultRate, config.defaultTenure))

  useEffect(() => {
    setResults(calcPPF(amount, rate, tenure))
  }, [amount, rate, tenure])

  useEffect(() => {
    const sliders = document.querySelectorAll<HTMLInputElement>(".emi_range")
    sliders.forEach(el => {
      const min = Number(el.min), max = Number(el.max), val = Number(el.value)
      const pct = ((val - min) / (max - min)) * 100
      el.style.background = `linear-gradient(to right, #1D9E75 ${pct}%, #E5E7EB ${pct}%)`
    })
  }, [amount, rate, tenure, currentYear, fdRate, extBlocks])

  const investedPct   = results.maturityAmount > 0
    ? Math.round((results.totalInvested / results.maturityAmount) * 100) : 0
  const circumference = 2 * Math.PI * 30

  // Shared sliders
  const AmountSlider = () => (
    <div className="slider_group">
      <div className="slider_top">
        <span className="slider_label">Annual investment</span>
        <span className="slider_val">{formatINR(amount)}</span>
      </div>
      <input type="range" min={500} max={150000} step={500}
        value={amount} onChange={e => setAmount(Number(e.target.value))}
        className="emi_range" />
      <div className="range_hints"><span>₹500</span><span>₹1.5 lakh</span></div>
    </div>
  )

  const RateSlider = () => (
    <div className="slider_group">
      <div className="slider_top">
        <span className="slider_label">PPF interest rate</span>
        <span className="slider_val">{rate}%</span>
      </div>
      <input type="range" min={6} max={9} step={0.05}
        value={rate} onChange={e => setRate(Number(e.target.value))}
        className="emi_range" />
      <div className="range_hints"><span>6%</span><span>9%</span></div>
    </div>
  )

  // ── PPF Withdrawal UI ──
  if (ppfType === "ppf-withdrawal") {
    const withdrawal = calcWithdrawal(results.yearlyData, currentYear)
    const loanAmount = results.yearlyData[2]
      ? Math.round(results.yearlyData[2].balance * 0.25) : 0

    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            PPF details bharein
          </h2>
          <AmountSlider />
          <RateSlider />

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Current PPF year</span>
              <span className="slider_val">Year {currentYear}</span>
            </div>
            <input type="range" min={1} max={15} step={1}
              value={currentYear} onChange={e => setCurrentYear(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>Year 1</span><span>Year 15</span></div>
          </div>

          <button className="calc_btn">Check Withdrawal</button>
          <div className="sdc_flex_box">
            <button className="share_btn"><Share2 /> Share</button>
            <button className="copy_btn"><Copy /> Copy</button>
          </div>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">Withdrawal result</h2>

          <div style={{
            padding: "16px", borderRadius: "12px", marginBottom: "16px", textAlign: "center",
            background: withdrawal.eligible ? "#F0FDF4" : "#FEF3E2",
            border: `2px solid ${withdrawal.eligible ? "#1D9E75" : "#F59E0B"}`,
          }}>
            <div style={{ fontSize: "36px" }}>{withdrawal.eligible ? "✅" : "⏳"}</div>
            <p style={{ fontWeight: "700", margin: "8px 0 4px",
              color: withdrawal.eligible ? "#0F6E56" : "#92400E" }}>
              {withdrawal.eligible ? "Withdrawal eligible!" : "Abhi eligible nahi"}
            </p>
            <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>
              {withdrawal.reason}
            </p>
          </div>

          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Current balance (Year {currentYear})</div>
              <div className="metric_value">
                {formatINR(results.yearlyData[currentYear - 1]?.balance || 0)}
              </div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Max withdrawal amount</div>
              <div className="metric_value metric_large">
                {withdrawal.eligible ? formatINR(withdrawal.maxAmount) : "—"}
              </div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">Loan available (Year 3-6)</div>
              <div className="metric_value">
                {currentYear >= 3 && currentYear <= 6 ? formatINR(loanAmount) : "—"}
              </div>
            </div>
          </div>

          <table className="year_table" style={{ marginTop: "16px" }}>
            <thead><tr><th>Year</th><th>Balance</th><th>Withdrawal Allowed</th></tr></thead>
            <tbody>
              {results.yearlyData.map(row => (
                <tr key={row.year}
                  style={{ background: row.year === currentYear ? "#E1F5EE" : "" }}>
                  <td>Year {row.year}</td>
                  <td>{formatINR(row.balance)}</td>
                  <td style={{ color: row.year >= 7 ? "#1D9E75" : "#6B7280" }}>
                    {row.year >= 7
                      ? formatINR(Math.round(
                          Math.min(
                            results.yearlyData[row.year - 5]?.balance || 0,
                            results.yearlyData[row.year - 4]?.balance || 0
                          ) * 0.5
                        ))
                      : row.year >= 3 ? `Loan: ${formatINR(Math.round(row.balance * 0.25))}` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // ── PPF vs FD UI ──
  if (ppfType === "ppf-vs-fd") {
    const ppfResults = calcPPF(amount, rate, tenure)
    const fdResults  = calcFDReturns(amount, fdRate, tenure, taxSlab)
    const ppfWins    = ppfResults.maturityAmount > (amount * tenure + fdResults.totalInterest - fdResults.taxOnInterest)

    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Comparison details bharein
          </h2>
          <AmountSlider />

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">PPF rate</span>
              <span className="slider_val">{rate}%</span>
            </div>
            <input type="range" min={6} max={9} step={0.05}
              value={rate} onChange={e => setRate(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>6%</span><span>9%</span></div>
          </div>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">FD rate</span>
              <span className="slider_val">{fdRate}%</span>
            </div>
            <input type="range" min={4} max={9} step={0.1}
              value={fdRate} onChange={e => setFdRate(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>4%</span><span>9%</span></div>
          </div>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Tenure</span>
              <span className="slider_val">{tenure} years</span>
            </div>
            <input type="range" min={5} max={30} step={1}
              value={tenure} onChange={e => setTenure(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>5 years</span><span>30 years</span></div>
          </div>

          <div className="slider_group">
            <span className="slider_label">Your tax slab</span>
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              {[0, 10, 20, 30].map(s => (
                <button key={s} onClick={() => setTaxSlab(s)}
                  style={{
                    flex: 1, padding: "8px", borderRadius: "8px", cursor: "pointer",
                    border: `1px solid ${taxSlab === s ? "#1D9E75" : "#E5E7EB"}`,
                    background: taxSlab === s ? "#E1F5EE" : "white",
                    color: taxSlab === s ? "#0F6E56" : "#374151",
                    fontWeight: taxSlab === s ? "600" : "400", fontSize: "13px",
                  }}>{s}%</button>
              ))}
            </div>
          </div>

          <button className="calc_btn">Compare</button>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">PPF vs FD comparison</h2>

          <div style={{
            padding: "16px", borderRadius: "12px", marginBottom: "16px", textAlign: "center",
            background: ppfWins ? "#F0FDF4" : "#EFF6FF",
            border: `2px solid ${ppfWins ? "#1D9E75" : "#3B82F6"}`,
          }}>
            <div style={{ fontSize: "36px" }}>{ppfWins ? "🏆 PPF" : "🏆 FD"}</div>
            <p style={{ fontWeight: "700", margin: "8px 0 4px",
              color: ppfWins ? "#0F6E56" : "#1D4ED8" }}>
              {ppfWins ? "PPF better hai!" : "FD better hai!"} ({taxSlab}% slab mein)
            </p>
            <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>
              {ppfWins
                ? `PPF se ${formatINR(ppfResults.maturityAmount - fdResults.netFDReturns)} zyada milega`
                : `FD se ${formatINR(fdResults.netFDReturns - ppfResults.maturityAmount)} zyada milega`}
            </p>
          </div>

          <table className="year_table">
            <thead>
              <tr><th>Metric</th><th>PPF</th><th>FD</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Interest rate</td>
                <td>{rate}% (tax-free)</td>
                <td>{fdRate}% (taxable)</td>
              </tr>
              <tr>
                <td>Effective rate (after tax)</td>
                <td style={{ color: "#1D9E75", fontWeight: "600" }}>{rate}%</td>
                <td style={{ color: "#854F0B" }}>{fdResults.effectiveRate.toFixed(2)}%</td>
              </tr>
              <tr>
                <td>Total invested</td>
                <td>{formatINR(amount * tenure)}</td>
                <td>{formatINR(amount * tenure)}</td>
              </tr>
              <tr>
                <td>Total interest</td>
                <td style={{ color: "#1D9E75" }}>{formatINR(ppfResults.totalInterest)}</td>
                <td>{formatINR(fdResults.totalInterest)}</td>
              </tr>
              <tr>
                <td>Tax paid</td>
                <td style={{ color: "#1D9E75" }}>₹0</td>
                <td style={{ color: "#DC2626" }}>{formatINR(fdResults.taxOnInterest)}</td>
              </tr>
              <tr style={{ fontWeight: "700" }}>
                <td>Net returns</td>
                <td style={{ color: "#1D9E75" }}>{formatINR(ppfResults.maturityAmount)}</td>
                <td style={{ color: "#185FA5" }}>{formatINR(fdResults.netFDReturns)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // ── PPF Extension UI ──
  if (ppfType === "ppf-extension") {
    const baseResults = calcPPF(amount, rate, 15)
    const extResults  = calcExtension(
      baseResults.maturityAmount, rate, extBlocks, withContrib, amount
    )

    return (
      <div className="emi_wrapper">
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Extension details bharein
          </h2>
          <AmountSlider />
          <RateSlider />

          <div className="slider_group">
            <span className="slider_label">Extension type</span>
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              {[
                { val: true,  label: "With contribution (₹1.5L/year)" },
                { val: false, label: "Without contribution"            },
              ].map(({ val, label }) => (
                <button key={label} onClick={() => setWithContrib(val)}
                  style={{
                    flex: 1, padding: "8px", borderRadius: "8px", cursor: "pointer",
                    border: `1px solid ${withContrib === val ? "#1D9E75" : "#E5E7EB"}`,
                    background: withContrib === val ? "#E1F5EE" : "white",
                    color: withContrib === val ? "#0F6E56" : "#374151",
                    fontWeight: withContrib === val ? "600" : "400", fontSize: "12px",
                  }}>{label}</button>
              ))}
            </div>
          </div>

          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">Extension blocks (5 years each)</span>
              <span className="slider_val">{extBlocks} block ({extBlocks * 5} years)</span>
            </div>
            <input type="range" min={1} max={5} step={1}
              value={extBlocks} onChange={e => setExtBlocks(Number(e.target.value))}
              className="emi_range" />
            <div className="range_hints"><span>1 block (5yr)</span><span>5 blocks (25yr)</span></div>
          </div>

          <button className="calc_btn">Calculate Extension</button>
          <div className="sdc_flex_box">
            <button className="share_btn"><Share2 /> Share</button>
            <button className="copy_btn"><Copy /> Copy</button>
          </div>
        </div>

        <div className="emi_card">
          <h2 className="emi_card_title">Extension result</h2>

          <div className="result_metrics">
            <div className="metric">
              <div className="metric_label">Maturity balance (15 years)</div>
              <div className="metric_value">{formatINR(baseResults.maturityAmount)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">Extra growth ({extBlocks * 5} years)</div>
              <div className="metric_value" style={{ color: "#1D9E75" }}>
                +{formatINR(extResults.extraGrowth)}
              </div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Final balance after extension</div>
              <div className="metric_value metric_large">
                {formatINR(extResults.finalBalance)}
              </div>
            </div>
            {withContrib && (
              <div className="metric metric_full">
                <div className="metric_label">Additional investment in extension</div>
                <div className="metric_value">{formatINR(extResults.totalAdded)}</div>
              </div>
            )}
          </div>

          <table className="year_table" style={{ marginTop: "16px" }}>
            <thead>
              <tr>
                <th>Extension Year</th>
                <th>{withContrib ? "Contribution" : "No Contribution"}</th>
                <th>Interest</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {extResults.yearlyData.map(row => (
                <tr key={row.year}>
                  <td>Year {row.year}</td>
                  <td>{withContrib ? formatINR(row.added) : "—"}</td>
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

  // ── Main PPF + Interest Calculator UI ──
  return (
    <div className="emi_wrapper">
      <div className="emi_card">
        <h2 className="emi_card_title">
          <SlidersHorizontal size={16} color="#1D9E75" />
          PPF details bharein
        </h2>

        <AmountSlider />
        <RateSlider />

        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Investment tenure</span>
            <span className="slider_val">{tenure} years</span>
          </div>
          <input type="range" min={15} max={50} step={1}
            value={tenure} onChange={e => setTenure(Number(e.target.value))}
            className="emi_range" />
          <div className="range_hints"><span>15 years (min)</span><span>50 years</span></div>
        </div>

        <button className="calc_btn">Calculate PPF</button>
        <div className="sdc_flex_box">
          <button className="share_btn"><Share2 /> Share</button>
          <button className="download_pdf_btn"><Download /> Download PDF</button>
          <button className="copy_btn"><Copy /> Copy</button>
        </div>
      </div>

      {/* Results */}
      <div className="emi_card">
        <h2 className="emi_card_title">PPF maturity result</h2>

        <div className="result_metrics">
          <div className="metric">
            <div className="metric_label">Total invested</div>
            <div className="metric_value">{formatINR(results.totalInvested)}</div>
          </div>
          <div className="metric">
            <div className="metric_label">Total interest (tax-free)</div>
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
            <div className="metric_label">80C tax saving (30% slab)</div>
            <div className="metric_value" style={{ color: "#185FA5" }}>
              {formatINR(Math.min(amount, 150000) * 0.30 * 1.04 * tenure)}
            </div>
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
              <span>Invested</span>
              <span className="legend_val">{formatINR(results.totalInvested)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#FAEEDA", border: "1px solid #854F0B" }} />
              <span>Interest</span>
              <span className="legend_val">{formatINR(results.totalInterest)}</span>
            </div>
            <div className="legend_item">
              <div className="legend_dot" style={{ background: "#185FA5" }} />
              <span>Maturity</span>
              <span className="legend_val">{formatINR(results.maturityAmount)}</span>
            </div>
          </div>
        </div>

        {/* Yearly table */}
        <table className="year_table">
          <thead>
            <tr><th>Year</th><th>Invested</th><th>Interest</th><th>Balance</th></tr>
          </thead>
          <tbody>
            {results.yearlyData
              .filter(r => r.year === 1 || r.year % 5 === 0 || r.year === tenure)
              .map(row => (
                <tr key={row.year}>
                  <td>Year {row.year}</td>
                  <td>{formatINR(row.invested)}</td>
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