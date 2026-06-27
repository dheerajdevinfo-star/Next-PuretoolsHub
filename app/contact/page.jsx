"use client";

import { useState } from "react";

export default function ContactUs() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact Form: ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
        window.location.href = `mailto:support@puretoolshub.com?subject=${subject}&body=${body}`;
        setSent(true);
    };

    return (
        <div style={page}>
            <style>{`
       
        .ptc-field:focus { outline: none; border-color: #1F9C7E !important; background: #fff !important; }
        .ptc-submit:hover { background: #16785f !important; }
        .ptc-perf { background-image: radial-gradient(circle, #0B2B24 3px, transparent 3px); background-size: 16px 16px; background-position: -8px center; }
        @media (max-width: 720px) { .ptc-grid { grid-template-columns: 1fr !important; } }
      `}</style>

            {/* ===== HERO ===== */}
            <section style={hero}>
                <div style={heroEyebrow}>Reach out</div>
                <h1 style={heroTitle}>
                    Tell us the number<br />that didn't add up.
                </h1>
                <p style={heroSub}>
                    A bug in a calculator, a tool you wish existed, or just a hello —
                    drop a line below and an actual person will read it.
                </p>
            </section>

            {/* ===== MAIN GRID ===== */}
            <div className="ptc-grid" style={grid}>
                {/* LEFT: INFO LEDGER */}
                <div style={ledger}>
                    <LedgerRow no="01" label="Email" value="support@puretoolshub.com" href="mailto:support@puretoolshub.com" />
                    <LedgerRow no="02" label="Website" value="puretoolshub.com" href="https://puretoolshub.com" />
                    <LedgerRow no="03" label="Response time" value="24–48 hours, weekdays" />
                    <LedgerRow no="04" label="Best for" value="Bug reports, feature requests, feedback" last />
                </div>

                {/* RIGHT: RECEIPT FORM */}
                <div style={receiptWrap}>
                    <div className="ptc-perf" style={perfTop} />
                    <form onSubmit={handleSubmit} style={receipt}>
                        <div style={receiptHead}>
                            <span style={mono}>MESSAGE SLIP</span>
                            <span style={mono}>NO. 0001</span>
                        </div>
                        <div style={dashedRule} />

                        <Field label="NAME" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                        <Field label="EMAIL" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                        <Field
                            label="MESSAGE"
                            name="message"
                            as="textarea"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What's on your mind?"
                        />

                        <div style={dashedRule} />

                        <button type="submit" className="ptc-submit" style={submitBtn}>
                            Send message →
                        </button>

                        {sent && (
                            <p style={confirmText}>
                                ✓ Opening your email client with this message ready to send.
                            </p>
                        )}
                    </form>
                    <div className="ptc-perf" style={perfBottom} />
                </div>
            </div>


        </div>
    );
}

/* ---------- Subcomponents ---------- */

function LedgerRow({ no, label, value, href, last }) {
    return (
        <div style={{ ...ledgerRow, borderBottom: last ? "none" : ledgerRow.borderBottom }}>
            <span style={ledgerNo}>{no}</span>
            <div>
                <div style={ledgerLabel}>{label}</div>
                {href ? (
                    <a href={href} style={ledgerValueLink}>{value}</a>
                ) : (
                    <div style={ledgerValue}>{value}</div>
                )}
            </div>
        </div>
    );
}

function Field({ label, name, value, onChange, placeholder, type = "text", as = "input" }) {
    const Tag = as;
    return (
        <div style={{ marginBottom: "18px" }}>
            <label style={fieldLabel}>{label}</label>
            <Tag
                className="ptc-field"
                name={name}
                type={as === "input" ? type : undefined}
                rows={as === "textarea" ? 4 : undefined}
                required
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={as === "textarea" ? { ...fieldInput, resize: "vertical" } : fieldInput}
            />
        </div>
    );
}

/* ---------- Styles ---------- */

const page = {
    background: "#0B2B24",
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
    color: "#F7F5EF",
};

const mono = {
    fontSize: "11px",
    letterSpacing: "0.5px",
    color: "#9FC9BC",
};

const headerStrip = {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 28px",
    borderBottom: "1px solid rgba(247,245,239,0.12)",
    flexWrap: "wrap",
    gap: "6px",
};

const hero = {
    padding: "70px 28px 56px",
    maxWidth: "640px",
    margin: "0 auto",
    textAlign: "center",
};

const heroEyebrow = {

    fontSize: "12px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#1F9C7E",
    marginBottom: "18px",
};

const heroTitle = {

    fontWeight: 600,
    fontSize: "clamp(30px, 5.5vw, 48px)",
    lineHeight: 1.15,
    color: "#F7F5EF",
    margin: "0 0 18px",
};

const heroSub = {
    fontSize: "15.5px",
    lineHeight: 1.7,
    color: "#C7DAD3",
    maxWidth: "460px",
    margin: "0 auto",
};

const grid = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "0 28px 90px",
    display: "grid",
    gridTemplateColumns: "0.85fr 1.15fr",
    gap: "48px",
    alignItems: "start",
};

/* Ledger (left column) */
const ledger = {
    borderTop: "1px solid rgba(247,245,239,0.15)",
};

const ledgerRow = {
    display: "flex",
    gap: "18px",
    padding: "22px 0",
    borderBottom: "1px solid rgba(247,245,239,0.15)",
};

const ledgerNo = {

    fontSize: "12px",
    color: "#1F9C7E",
    paddingTop: "2px",
    minWidth: "22px",
};

const ledgerLabel = {

    fontSize: "11px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#8FB6AA",
    marginBottom: "4px",
};

const ledgerValue = {
    fontSize: "15px",
    color: "#F7F5EF",
    fontWeight: 500,
};

const ledgerValueLink = {
    ...ledgerValue,
    color: "#7FE0BE",
    textDecoration: "none",
    borderBottom: "1px solid rgba(127,224,190,0.4)",
};

/* Receipt (right column) */
const receiptWrap = {
    filter: "drop-shadow(0 18px 40px rgba(0,0,0,0.35))",
};

const perfTop = {
    height: "10px",
    background: "#F7F5EF",
    borderRadius: "0 0 4px 4px",
};

const perfBottom = {
    height: "10px",
    background: "#F7F5EF",
    borderRadius: "4px 4px 0 0",
};

const receipt = {
    background: "#F7F5EF",
    color: "#0B2B24",
    padding: "30px 28px 26px",
};

const receiptHead = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
};

const dashedRule = {
    borderTop: "1px dashed #C7BFAE",
    margin: "18px 0",
};

const fieldLabel = {
    display: "block",

    fontSize: "11px",
    letterSpacing: "1px",
    color: "#6B6356",
    marginBottom: "6px",
};

const fieldInput = {
    width: "100%",
    padding: "10px 12px",
    fontSize: "14.5px",

    border: "1px solid #DAD3C2",
    background: "#FCFBF7",
    borderRadius: "6px",
    color: "#0B2B24",
    boxSizing: "border-box",
    transition: "border-color 0.15s, background 0.15s",
};

const submitBtn = {
    width: "100%",
    background: "#1F9C7E",
    color: "#fff",
    fontWeight: 600,
    fontSize: "14.5px",
    padding: "13px 0",
    border: "none",
    borderRadius: "7px",
    cursor: "pointer",
    transition: "background 0.15s",
};

const confirmText = {
    marginTop: "14px",
    fontSize: "12.5px",

    color: "#1F9C7E",
};

const footerStrip = {
    textAlign: "center",
    padding: "22px 0 30px",
    borderTop: "1px solid rgba(247,245,239,0.12)",
};