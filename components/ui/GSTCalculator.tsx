"use client"

import { useState, useEffect } from "react"
import { Copy, Download, Share2, SlidersHorizontal, Plus, Trash2 } from "lucide-react"
import './emi.css'
import { gstConfig, GstType } from "@/lib/gstData"

// ─── Helpers ─────────────────────────────────────────────────

function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// ─── GST Formulas ────────────────────────────────────────────

function calcGST(amount: number, rate: number, isIntraState: boolean) {
  const gstAmount = amount * rate / 100
  const total     = amount + gstAmount
  const cgst      = isIntraState ? gstAmount / 2 : 0
  const sgst      = isIntraState ? gstAmount / 2 : 0
  const igst      = isIntraState ? 0 : gstAmount
  return { gstAmount, total, cgst, sgst, igst }
}

function calcReverseGST(totalAmount: number, rate: number, isIntraState: boolean) {
  const baseAmount = totalAmount / (1 + rate / 100)
  const gstAmount  = totalAmount - baseAmount
  const cgst       = isIntraState ? gstAmount / 2 : 0
  const sgst       = isIntraState ? gstAmount / 2 : 0
  const igst       = isIntraState ? 0 : gstAmount
  return { baseAmount, gstAmount, cgst, sgst, igst }
}

// Invoice item type
type InvoiceItem = {
  id:          number
  description: string
  qty:         number
  price:       number
  gstRate:     number
}

// HSN data — common products
const hsnData = [
  { hsn: "0101", description: "Live horses, asses, mules",       rate: 0  },
  { hsn: "0201", description: "Meat of bovine animals, fresh",   rate: 0  },
  { hsn: "0901", description: "Coffee",                          rate: 5  },
  { hsn: "1001", description: "Wheat and meslin",                rate: 0  },
  { hsn: "1101", description: "Wheat or meslin flour",           rate: 0  },
  { hsn: "2009", description: "Fruit juices",                    rate: 12 },
  { hsn: "2202", description: "Aerated water, soft drinks",      rate: 28 },
  { hsn: "3004", description: "Medicines / pharmaceuticals",     rate: 12 },
  { hsn: "3401", description: "Soap, detergent",                 rate: 18 },
  { hsn: "3923", description: "Plastic articles / packaging",    rate: 18 },
  { hsn: "4901", description: "Printed books, newspapers",       rate: 0  },
  { hsn: "6101", description: "Overcoats, jackets (men)",        rate: 5  },
  { hsn: "6109", description: "T-shirts, singlets",              rate: 5  },
  { hsn: "6403", description: "Footwear with leather",           rate: 18 },
  { hsn: "7113", description: "Jewellery of precious metal",     rate: 3  },
  { hsn: "8414", description: "Air pumps, fans, AC compressors", rate: 28 },
  { hsn: "8415", description: "Air conditioning machines",       rate: 28 },
  { hsn: "8517", description: "Telephone sets, smartphones",     rate: 18 },
  { hsn: "8703", description: "Motor cars / passenger vehicles", rate: 28 },
  { hsn: "8711", description: "Motorcycles, scooters",           rate: 28 },
  { hsn: "9403", description: "Furniture",                       rate: 18 },
  { hsn: "9503", description: "Toys",                            rate: 18 },
]

// ─── Component ───────────────────────────────────────────────

type Props = { gstType: GstType }

export default function GSTCalculator({ gstType }: Props) {
  const config      = gstConfig[gstType]
  const [amount, setAmount]         = useState(config.defaultAmount)
  const [gstRate, setGstRate]       = useState(config.defaultRate)
  const [isIntra, setIsIntra]       = useState(true)
  const [hsnSearch, setHsnSearch]   = useState("")
  const [hsnResults, setHsnResults] = useState(hsnData.slice(0, 6))

  // Invoice items state
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, description: "Product 1", qty: 1, price: 10000, gstRate: 18 },
  ])

  const [results, setResults] = useState({
    baseAmount:  0,
    gstAmount:   0,
    cgst:        0,
    sgst:        0,
    igst:        0,
    total:       0,
  })

  // Calculate
  useEffect(() => {
    if (gstType === "reverse-gst") {
      const r = calcReverseGST(amount, gstRate, isIntra)
      setResults({
        baseAmount: r.baseAmount,
        gstAmount:  r.gstAmount,
        cgst:       r.cgst,
        sgst:       r.sgst,
        igst:       r.igst,
        total:      amount,
      })
    } else {
      const r = calcGST(amount, gstRate, isIntra)
      setResults({
        baseAmount: amount,
        gstAmount:  r.gstAmount,
        cgst:       r.cgst,
        sgst:       r.sgst,
        igst:       r.igst,
        total:      r.total,
      })
    }
  }, [amount, gstRate, isIntra, gstType])

  // HSN search
  useEffect(() => {
    if (!hsnSearch) {
      setHsnResults(hsnData.slice(0, 6))
      return
    }
    const q = hsnSearch.toLowerCase()
    setHsnResults(
      hsnData.filter(h =>
        h.hsn.includes(q) || h.description.toLowerCase().includes(q)
      ).slice(0, 8)
    )
  }, [hsnSearch])

  // Invoice helpers
  const addItem = () => setItems(prev => [
    ...prev,
    { id: Date.now(), description: "", qty: 1, price: 0, gstRate: 18 }
  ])
  const removeItem = (id: number) => setItems(prev => prev.filter(i => i.id !== id))
  const updateItem = (id: number, field: keyof InvoiceItem, value: string | number) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, [field]: value } : i))

  const invoiceTotals = items.reduce((acc, item) => {
    const taxable = item.qty * item.price
    const gst     = taxable * item.gstRate / 100
    return {
      taxable: acc.taxable + taxable,
      gst:     acc.gst + gst,
      total:   acc.total + taxable + gst,
    }
  }, { taxable: 0, gst: 0, total: 0 })

  // GST / Reverse GST UI
  if (gstType === "gst" || gstType === "reverse-gst") {
    return (
      <div className="emi_wrapper">

        {/* ── Left card — Inputs ── */}
        <div className="emi_card">
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            {gstType === "reverse-gst" ? "GST inclusive amount bharein" : "Amount aur rate bharein"}
          </h2>

          {/* Amount */}
          <div className="slider_group">
            <div className="slider_top">
              <span className="slider_label">
                {gstType === "reverse-gst" ? "Total amount (GST inclusive)" : "Base amount (GST exclusive)"}
              </span>
              <span className="slider_val">{formatINR(amount)}</span>
            </div>
            <input
              type="range"
              min={config.minAmount}
              max={config.maxAmount}
              step={config.stepAmount}
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              className="emi_range"
            />
            <div className="range_hints">
              <span>₹1</span>
              <span>₹1 crore</span>
            </div>
          </div>

          {/* GST Rate buttons */}
          <div className="slider_group">
            <span className="slider_label">GST rate</span>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
              {config.gstRates.map(r => (
                <button
                  key={r}
                  onClick={() => setGstRate(r)}
                  style={{
                    padding:       "6px 14px",
                    borderRadius:  "20px",
                    border:        `1px solid ${gstRate === r ? "#1D9E75" : "#E5E7EB"}`,
                    background:    gstRate === r ? "#E1F5EE" : "white",
                    color:         gstRate === r ? "#0F6E56" : "#374151",
                    fontWeight:    gstRate === r ? "600" : "400",
                    cursor:        "pointer",
                    fontSize:      "14px",
                  }}
                >
                  {r}%
                </button>
              ))}
            </div>
          </div>

          {/* Intra / Inter state toggle */}
          <div className="slider_group">
            <span className="slider_label">Transaction type</span>
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              {["Intra-state (CGST+SGST)", "Inter-state (IGST)"].map((label, i) => (
                <button
                  key={label}
                  onClick={() => setIsIntra(i === 0)}
                  style={{
                    flex:         1,
                    padding:      "8px",
                    borderRadius: "8px",
                    border:       `1px solid ${(i === 0) === isIntra ? "#1D9E75" : "#E5E7EB"}`,
                    background:   (i === 0) === isIntra ? "#E1F5EE" : "white",
                    color:        (i === 0) === isIntra ? "#0F6E56" : "#374151",
                    cursor:       "pointer",
                    fontSize:     "13px",
                    fontWeight:   (i === 0) === isIntra ? "600" : "400",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button className="calc_btn">Calculate GST</button>

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
              <div className="metric_label">Base amount</div>
              <div className="metric_value">{formatINR(results.baseAmount)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">GST amount ({gstRate}%)</div>
              <div className="metric_value" style={{ color: "#1D9E75" }}>
                {formatINR(results.gstAmount)}
              </div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">
                {gstType === "reverse-gst" ? "Original price" : "Total payable"}
              </div>
              <div className="metric_value metric_large">
                {formatINR(gstType === "reverse-gst" ? results.baseAmount : results.total)}
              </div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">
                {isIntra ? "CGST + SGST breakdown" : "IGST"}
              </div>
              <div className="metric_value" style={{ fontSize: "14px" }}>
                {isIntra
                  ? `CGST: ${formatINR(results.cgst)}  +  SGST: ${formatINR(results.sgst)}`
                  : `IGST: ${formatINR(results.igst)}`}
              </div>
            </div>
          </div>

          {/* GST breakdown table */}
          <table className="year_table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base amount</td>
                <td>—</td>
                <td>{formatINR(results.baseAmount)}</td>
              </tr>
              {isIntra ? (
                <>
                  <tr>
                    <td>CGST</td>
                    <td>{gstRate / 2}%</td>
                    <td className="td_green">{formatINR(results.cgst)}</td>
                  </tr>
                  <tr>
                    <td>SGST</td>
                    <td>{gstRate / 2}%</td>
                    <td className="td_green">{formatINR(results.sgst)}</td>
                  </tr>
                </>
              ) : (
                <tr>
                  <td>IGST</td>
                  <td>{gstRate}%</td>
                  <td className="td_green">{formatINR(results.igst)}</td>
                </tr>
              )}
              <tr style={{ fontWeight: "600" }}>
                <td>Total</td>
                <td>—</td>
                <td>{formatINR(results.total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // GST Invoice UI
  if (gstType === "gst-invoice") {
    return (
      <div className="emi_wrapper">
        <div className="emi_card" style={{ gridColumn: "1 / -1" }}>
          <h2 className="emi_card_title">
            <SlidersHorizontal size={16} color="#1D9E75" />
            Invoice items add karein
          </h2>

          {/* Transaction type */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            {["Intra-state (CGST+SGST)", "Inter-state (IGST)"].map((label, i) => (
              <button
                key={label}
                onClick={() => setIsIntra(i === 0)}
                style={{
                  padding:      "8px 16px",
                  borderRadius: "8px",
                  border:       `1px solid ${(i === 0) === isIntra ? "#1D9E75" : "#E5E7EB"}`,
                  background:   (i === 0) === isIntra ? "#E1F5EE" : "white",
                  color:        (i === 0) === isIntra ? "#0F6E56" : "#374151",
                  cursor:       "pointer",
                  fontSize:     "13px",
                  fontWeight:   (i === 0) === isIntra ? "600" : "400",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Items table */}
          <div style={{ overflowX: "auto" }}>
            <table className="year_table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Qty</th>
                  <th>Price (₹)</th>
                  <th>GST %</th>
                  <th>GST Amt</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => {
                  const taxable = item.qty * item.price
                  const gst     = taxable * item.gstRate / 100
                  return (
                    <tr key={item.id}>
                      <td>
                        <input
                          type="text"
                          value={item.description}
                          onChange={e => updateItem(item.id, "description", e.target.value)}
                          placeholder="Item name"
                          style={{ border: "1px solid #E5E7EB", borderRadius: "6px", padding: "4px 8px", width: "120px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={item.qty}
                          onChange={e => updateItem(item.id, "qty", Number(e.target.value))}
                          min={1}
                          style={{ border: "1px solid #E5E7EB", borderRadius: "6px", padding: "4px 8px", width: "60px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={item.price}
                          onChange={e => updateItem(item.id, "price", Number(e.target.value))}
                          min={0}
                          style={{ border: "1px solid #E5E7EB", borderRadius: "6px", padding: "4px 8px", width: "90px" }}
                        />
                      </td>
                      <td>
                        <select
                          value={item.gstRate}
                          onChange={e => updateItem(item.id, "gstRate", Number(e.target.value))}
                          className="bank_select"
                          style={{ width: "70px" }}
                        >
                          {[0, 5, 12, 18, 28].map(r => (
                            <option key={r} value={r}>{r}%</option>
                          ))}
                        </select>
                      </td>
                      <td className="td_green">{formatINR(gst)}</td>
                      <td>{formatINR(taxable + gst)}</td>
                      <td>
                        <button onClick={() => removeItem(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#EF4444" }}>
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr style={{ fontWeight: "600", background: "#F9FAFB" }}>
                  <td colSpan={4}>Total</td>
                  <td className="td_green">{formatINR(invoiceTotals.gst)}</td>
                  <td>{formatINR(invoiceTotals.total)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <button
            onClick={addItem}
            style={{
              display:      "flex",
              alignItems:   "center",
              gap:          "6px",
              marginTop:    "12px",
              padding:      "8px 16px",
              border:       "1px dashed #1D9E75",
              borderRadius: "8px",
              background:   "transparent",
              color:        "#1D9E75",
              cursor:       "pointer",
              fontSize:     "14px",
            }}
          >
            <Plus size={16} /> Item add karein
          </button>

          {/* Summary */}
          <div className="result_metrics" style={{ marginTop: "24px" }}>
            <div className="metric">
              <div className="metric_label">Taxable amount</div>
              <div className="metric_value">{formatINR(invoiceTotals.taxable)}</div>
            </div>
            <div className="metric">
              <div className="metric_label">Total GST</div>
              <div className="metric_value" style={{ color: "#1D9E75" }}>{formatINR(invoiceTotals.gst)}</div>
            </div>
            <div className="metric metric_accent">
              <div className="metric_label">Total payable</div>
              <div className="metric_value metric_large">{formatINR(invoiceTotals.total)}</div>
            </div>
            <div className="metric metric_full">
              <div className="metric_label">
                {isIntra
                  ? `CGST: ${formatINR(invoiceTotals.gst / 2)}  +  SGST: ${formatINR(invoiceTotals.gst / 2)}`
                  : `IGST: ${formatINR(invoiceTotals.gst)}`}
              </div>
            </div>
          </div>

          <div className="sdc_flex_box" style={{ marginTop: "16px" }}>
            <button className="share_btn"><Share2 /> Share</button>
            <button className="download_pdf_btn"><Download /> Download PDF</button>
            <button className="copy_btn"><Copy /> Copy result</button>
          </div>
        </div>
      </div>
    )
  }

  // HSN Code finder UI
  return (
    <div className="emi_wrapper">
      <div className="emi_card">
        <h2 className="emi_card_title">
          <SlidersHorizontal size={16} color="#1D9E75" />
          Product search karein
        </h2>

        <div className="slider_group">
          <span className="slider_label">Product name ya HSN code likhein</span>
          <input
            type="text"
            value={hsnSearch}
            onChange={e => setHsnSearch(e.target.value)}
            placeholder="e.g. mobile, soap, medicine..."
            style={{
              width:        "100%",
              padding:      "10px 14px",
              border:       "1px solid #E5E7EB",
              borderRadius: "8px",
              fontSize:     "14px",
              marginTop:    "8px",
              outline:      "none",
            }}
          />
        </div>

        <div style={{ marginTop: "16px" }}>
          {hsnResults.map(item => (
            <div
              key={item.hsn}
              onClick={() => setGstRate(item.rate)}
              style={{
                display:       "flex",
                justifyContent:"space-between",
                alignItems:    "center",
                padding:       "10px 12px",
                borderRadius:  "8px",
                border:        "1px solid #E5E7EB",
                marginBottom:  "8px",
                cursor:        "pointer",
                background:    gstRate === item.rate ? "#E1F5EE" : "white",
              }}
            >
              <div>
                <span style={{ fontWeight: "600", fontSize: "13px", color: "#374151" }}>
                  HSN: {item.hsn}
                </span>
                <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#6B7280" }}>
                  {item.description}
                </p>
              </div>
              <span style={{
                padding:      "4px 10px",
                borderRadius: "12px",
                background:   item.rate === 0 ? "#F0FDF4" : "#FEF3E2",
                color:        item.rate === 0 ? "#166534" : "#92400E",
                fontSize:     "13px",
                fontWeight:   "600",
              }}>
                {item.rate}% GST
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="emi_card">
        <h2 className="emi_card_title">GST calculate karein</h2>

        <div className="slider_group">
          <div className="slider_top">
            <span className="slider_label">Amount</span>
            <span className="slider_val">{formatINR(amount)}</span>
          </div>
          <input
            type="range"
            min={100}
            max={1000000}
            step={100}
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className="emi_range"
          />
          <div className="range_hints"><span>₹100</span><span>₹10 lakh</span></div>
        </div>

        <div className="slider_group">
          <span className="slider_label">Selected GST rate: <strong>{gstRate}%</strong></span>
        </div>

        <div className="result_metrics" style={{ marginTop: "16px" }}>
          <div className="metric">
            <div className="metric_label">Base amount</div>
            <div className="metric_value">{formatINR(amount)}</div>
          </div>
          <div className="metric">
            <div className="metric_label">GST ({gstRate}%)</div>
            <div className="metric_value" style={{ color: "#1D9E75" }}>
              {formatINR(amount * gstRate / 100)}
            </div>
          </div>
          <div className="metric metric_accent">
            <div className="metric_label">Total payable</div>
            <div className="metric_value metric_large">
              {formatINR(amount + amount * gstRate / 100)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}