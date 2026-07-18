import Link from "next/link";
import type { CSSProperties } from "react";

export default function AboutUs() {
  return (
    <div style={page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .ptc-card:hover { border-color: #1F9C7E !important; transform: translateY(-2px); }
        @media (max-width: 760px) { .ptc-cards { grid-template-columns: 1fr !important; } .ptc-usp { grid-template-columns: 1fr !important; } }
      `}</style>

   

      {/* ===== HERO ===== */}
      <section style={hero}>
        <div style={heroEyebrow}>Why we built this</div>
        <h1 style={heroTitle}>
          Numbers shouldn't<br />need an app.
        </h1>
        <p style={heroSub}>
          PureToolsHub is a free hub of financial calculators that work the moment
          you open them. No sign-ups, no spreadsheets, no waiting — just your
          numbers and an instant answer.
        </p>
      </section>

      {/* ===== STORY LEDGER ===== */}
      <section style={storySection}>
        <div style={dashedRuleLight} />
        <div style={storyGrid}>
          <div style={storyLabel}>
            <span style={mono}>01 / ORIGIN</span>
          </div>
          <p style={storyText}>
            It started with a small frustration: checking a home loan EMI meant
            downloading an app, or digging through a bank's cluttered website
            just to find a basic calculator. We thought — this should take ten
            seconds, not ten minutes.
          </p>
        </div>
        <div style={dashedRuleLight} />
        <div style={storyGrid}>
          <div style={storyLabel}>
            <span style={mono}>02 / APPROACH</span>
          </div>
          <p style={storyText}>
            So we built PureToolsHub around one rule: every calculator must load
            instantly, run entirely in your browser, and never ask for your data.
            What you type stays with you — we don't see it, store it, or want it.
          </p>
        </div>
        <div style={dashedRuleLight} />
      </section>

      {/* ===== WHAT WE OFFER ===== */}
      <section style={offerSection}>
        <h2 style={sectionTitle}>What's on the shelf</h2>
        <p style={sectionSub}>
          Right now, we're focused entirely on getting Finance right.
        </p>

        <div className="ptc-cards" style={cardGrid}>
          {[
            ["EMI", "Home Loan · Car Loan · Personal Loan",'/finance/emi'],
            ["SIP & Investing", "SIP · Lumpsum · Step-Up SIP · SWP",'/finance/sip'],
            ["Deposits", "Fixed Deposit · RD · Tax-Saver & Senior Citizen FD", "/finance/fd"],
            ["PPF & EPF", "Interest · Balance · Withdrawal · EPS", "/finance/ppf"],
            ["Income Tax", "Tax Slab · TDS · Advance Tax · Old vs New Regime", "/finance/income-tax"],
            ["Salary & GST", "CTC to In-hand · HRA · Gratuity · GST","/finance/salary"],
          ].map(([title, desc, link], i) => (
            <div className="ptc-card" key={title} style={card}>
              <Link href={link}>
              <div style={cardNo}>{String(i + 1).padStart(2, "0")}</div>
              <div style={cardTitle}>{title}</div>
              <div style={cardDesc}>{desc}</div>
              </Link>
            </div>
          ))}
        </div>

        <div style={comingSoonNote}>
          <span style={mono}>{`> NEXT UP:`}</span> Health calculators are in the
          works. More categories are on the roadmap.
        </div>
      </section>

      {/* ===== USP STRIP ===== */}
      <section style={uspSection}>
        <div className="ptc-usp" style={uspGrid}>
          {[
            ["Instant", "Results calculate live as you type — no submit button waits."],
            ["Private", "Your inputs never leave your browser. Nothing is stored."],
            ["Free", "Every tool, every category — no paywalls, no limits."],
          ].map(([title, desc]) => (
            <div key={title}>
              <div style={uspTitle}>{title}</div>
              <div style={uspDesc}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DISCLAIMER ===== */}
      <section style={noteSection}>
        <div style={noteBox}>
          <span style={mono}>NOTE —</span>{" "}
          <span style={noteText}>
            Our calculators use standard financial formulas for informational
            purposes. Figures may vary slightly from your bank or financial
            institution. For major decisions, pair our tools with advice from a
            certified financial advisor or chartered accountant.
          </span>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section style={ctaSection}>
        <h2 style={ctaTitle}>Got a tool you wish existed?</h2>
        <p style={ctaSub}>Tell us. We're building this hub one calculator at a time.</p>
        <a href="mailto:support@puretoolshub.com" style={ctaBtn}>
          support@puretoolshub.com
        </a>
      </section>
    </div>
  );
}

/* ---------- Styles ---------- */

const page: CSSProperties = {
  background: "#0B2B24",
  minHeight: "100vh",
  fontFamily: "'Inter', sans-serif",
  color: "#F7F5EF",
};

const mono: CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "11px",
  letterSpacing: "0.5px",
  color: "#9FC9BC",
};



const hero: CSSProperties = {
  padding: "70px 28px 50px",
  maxWidth: "640px",
  margin: "0 auto",
  textAlign: "center",
};

const heroEyebrow: CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "12px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#1F9C7E",
  marginBottom: "18px",
};

const heroTitle: CSSProperties = {
  fontFamily: "'Fraunces', serif",
  fontWeight: 600,
  fontSize: "clamp(30px, 5.5vw, 48px)",
  lineHeight: 1.15,
  color: "#F7F5EF",
  margin: "0 0 18px",
};

const heroSub: CSSProperties = {
  fontSize: "15.5px",
  lineHeight: 1.7,
  color: "#C7DAD3",
  maxWidth: "480px",
  margin: "0 auto",
};

/* Story */
const storySection: CSSProperties = {
  maxWidth: "760px",
  margin: "0 auto",
  padding: "10px 28px 60px",
};

const dashedRuleLight: CSSProperties = {
  borderTop: "1px dashed rgba(247,245,239,0.25)",
};

const storyGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "140px 1fr",
  gap: "24px",
  padding: "26px 0",
  alignItems: "start",
};

const storyLabel: CSSProperties = {
  paddingTop: "2px",
};

const storyText: CSSProperties = {
  fontSize: "15.5px",
  lineHeight: 1.75,
  color: "#DCE9E3",
  margin: 0,
};

/* Offer */
const offerSection: CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "10px 28px 60px",
};

const sectionTitle: CSSProperties = {
  fontFamily: "'Fraunces', serif",
  fontWeight: 600,
  fontSize: "28px",
  color: "#F7F5EF",
  marginBottom: "8px",
};

const sectionSub: CSSProperties = {
  fontSize: "14.5px",
  color: "#9FC9BC",
  marginBottom: "30px",
};

const cardGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

const card: CSSProperties = {
  background: "#0E332B",
  border: "1px solid rgba(247,245,239,0.12)",
  borderRadius: "10px",
  padding: "22px 20px",
  transition: "border-color 0.2s, transform 0.2s",
};

const cardNo: CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "12px",
  color: "#1F9C7E",
  marginBottom: "10px",
};

const cardTitle: CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#F7F5EF",
  marginBottom: "6px",
};

const cardDesc: CSSProperties = {
  fontSize: "13px",
  color: "#9FC9BC",
  lineHeight: 1.5,
};

const comingSoonNote: CSSProperties = {
  marginTop: "26px",
  fontSize: "13.5px",
  color: "#C7DAD3",
};

/* USP */
const uspSection: CSSProperties = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "10px 28px 60px",
  borderTop: "1px solid rgba(247,245,239,0.12)",
  paddingTop: "50px",
};

const uspGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "30px",
};

const uspTitle: CSSProperties = {
  fontFamily: "'Fraunces', serif",
  fontSize: "20px",
  fontWeight: 600,
  color: "#7FE0BE",
  marginBottom: "8px",
};

const uspDesc: CSSProperties = {
  fontSize: "13.5px",
  color: "#C7DAD3",
  lineHeight: 1.6,
};

/* Note */
const noteSection: CSSProperties = {
  maxWidth: "760px",
  margin: "0 auto",
  padding: "10px 28px 60px",
};

const noteBox: CSSProperties = {
  background: "rgba(247,245,239,0.05)",
  border: "1px solid rgba(247,245,239,0.15)",
  borderRadius: "10px",
  padding: "18px 20px",
  fontSize: "13.5px",
  lineHeight: 1.7,
};

const noteText: CSSProperties = {
  color: "#C7DAD3",
};

/* CTA */
const ctaSection: CSSProperties = {
  maxWidth: "640px",
  margin: "0 auto",
  padding: "20px 28px 80px",
  textAlign: "center",
};

const ctaTitle: CSSProperties = {
  fontFamily: "'Fraunces', serif",
  fontWeight: 600,
  fontSize: "26px",
  color: "#F7F5EF",
  marginBottom: "10px",
};

const ctaSub: CSSProperties = {
  fontSize: "14.5px",
  color: "#C7DAD3",
  marginBottom: "22px",
};

const ctaBtn: CSSProperties = {
  display: "inline-block",
  background: "#1F9C7E",
  color: "#fff",
  fontWeight: 600,
  fontSize: "14.5px",
  padding: "12px 26px",
  borderRadius: "7px",
  textDecoration: "none",
};

