"use client"

import { useState, useEffect } from "react"
import { Copy, Download, Share2, SlidersHorizontal } from "lucide-react"
import './emi.css'
import { emiConfig, LoanType } from "@/lib/emiData"



function formatINR(amount: number): string {
    return "₹" + Math.round(amount).toLocaleString("en-IN")
}


function formatINRDisplay(amount: number): string {
    return "₹" + Math.round(amount).toLocaleString("en-IN")
}

function calcEMI(principal: number, annualRate: number, tenureYears: number): number {
    const r = annualRate / 12 / 100
    const n = tenureYears * 12
    if (r === 0) return principal / n
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

function calcYearlyData(principal: number, annualRate: number, tenureYears: number, emi: number) {
    const r = annualRate / 12 / 100
    const n = tenureYears * 12
    const rows = []
    const checkYears = Array.from({ length: tenureYears }, (_, i) => i + 1)
        .filter(y => y === 1 || y === Math.ceil(tenureYears / 2) || y === tenureYears)

    for (const year of checkYears) {
        const monthsDone = year * 12
        const balance = principal *
            (Math.pow(1 + r, n) - Math.pow(1 + r, monthsDone)) /
            (Math.pow(1 + r, n) - 1)
        const principalPaid = principal - Math.max(0, balance)
        const interestPaid = emi * monthsDone - principalPaid
        rows.push({
            year,
            principalPaid: Math.round(principalPaid),
            interestPaid: Math.round(Math.max(0, interestPaid)),
            balance: Math.round(Math.max(0, balance)),
        })
    }
    return rows
}

// ─── Component ─────────────────────────────────────────────
type Props = { loanType: LoanType }

export default function EMICalculator({ loanType }: Props) {
    const config = emiConfig[loanType]

    const [amount, setAmount] = useState(config.defaultAmount)
    const [rate, setRate] = useState(config.defaultRate)
    const [tenure, setTenure] = useState(config.defaultTenure)
    const [results, setResults] = useState({ emi: 0, totalPayable: 0, totalInterest: 0 })

    // Effect 1 — Results calculate karo
    useEffect(() => {
        const emi = calcEMI(amount, rate, tenure)
        const totalPayable = emi * tenure * 12
        const totalInterest = totalPayable - amount
        setResults({ emi, totalPayable, totalInterest })
    }, [amount, rate, tenure])

    // Effect 2 — Slider fill update karo
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

    const principalPct = Math.round((amount / results.totalPayable) * 100) || 0
    const circumference = 2 * Math.PI * 30
    const yearRows = calcYearlyData(amount, rate, tenure, results.emi)

    return (
        <div className="emi_wrapper">

            {/* ── Left card — Inputs ── */}
            <div className="emi_card">
                <h2 className="emi_card_title">
                    <SlidersHorizontal size={16} color="#1D9E75" />
                    Loan details bharein
                </h2>

                {/* Loan amount */}
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
                        <span className="slider_label">Loan tenure</span>
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

                {/* Bank dropdown */}
                <div className="slider_group">
                    <span className="slider_label">Bank / lender</span>
                    <select
                        className="bank_select"
                        onChange={e => setRate(Number(e.target.value))}
                        value={rate}
                    >
                        {config.banks.map(b => (
                            <option key={b.name} value={b.rate}>
                                {b.name} — {b.rate}%
                            </option>
                        ))}
                        <option value={rate}>Custom rate</option>
                    </select>
                </div>

                {/* Button */}
                <button className="calc_btn">Calculate EMI</button>

                <div className="sdc_flex_box">
                    <button className="share_btn"><Share2 /> Share</button>
                    <button className="download_pdf_btn"><Download />Download PDF</button>
                    <button className="copy_btn"><Copy /> Copy result </button>
                </div>
            </div>

            {/* ── Right card — Results ── */}
            <div className="emi_card">
                <h2 className="emi_card_title">
                    Aapka result
                </h2>

                {/* Metric grid */}
                <div className="result_metrics">
                    <div className="metric">
                        <div className="metric_label">Principal amount</div>
                        <div className="metric_value">{formatINR(amount)}</div>
                    </div>
                    <div className="metric">
                        <div className="metric_label">Total interest</div>
                        <div className="metric_value" style={{ color: "#854F0B" }}>
                            {formatINR(results.totalInterest)}
                        </div>
                    </div>
                    <div className="metric metric_accent">
                        <div className="metric_label">Monthly EMI</div>
                        <div className="metric_value metric_large">
                            ₹{Math.round(results.emi).toLocaleString("en-IN")}
                        </div>
                    </div>
                    <div className="metric metric_full">
                        <div className="metric_label">Total amount payable</div>
                        <div className="metric_value">{formatINR(results.totalPayable)}</div>
                    </div>
                </div>

                {/* Donut chart */}
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
                            <span>Principal</span>
                            <span className="legend_val">{formatINR(amount)}</span>
                        </div>
                        <div className="legend_item">
                            <div className="legend_dot" style={{ background: "#FAEEDA", border: "1px solid #854F0B" }} />
                            <span>Interest</span>
                            <span className="legend_val">{formatINR(results.totalInterest)}</span>
                        </div>
                        <div className="legend_item">
                            <div className="legend_dot" style={{ background: "#185FA5" }} />
                            <span>Total payable</span>
                            <span className="legend_val">{formatINR(results.totalPayable)}</span>
                        </div>
                    </div>
                </div>

                {/* Year table */}
                <table className="year_table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Principal paid</th>
                            <th>Interest paid</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yearRows.map(row => (
                            <tr key={row.year}>
                                <td>{row.year}</td>
                                <td>{formatINR(row.principalPaid)}</td>
                                <td className="td_green">{formatINR(row.interestPaid)}</td>
                                <td>{formatINR(row.balance)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
