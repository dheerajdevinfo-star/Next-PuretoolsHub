export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "40px 20px", fontFamily: "sans-serif", color: "#222", lineHeight: "1.7" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px" }}>Privacy Policy</h1>
      <p style={{ color: "#666", marginBottom: "32px" }}>Last updated: June 20, 2026</p>

      <p>
        Welcome to <strong>PureToolsHub.com</strong>. We provide free online
        financial calculator tools to help users with everyday financial calculations. This Privacy
        Policy explains how we handle information when you visit and use our website.
      </p>

      <h2 style={h2}>1. Information We Collect</h2>
      <p>
        We do <strong>not</strong> collect, store, or share any personal information from our visitors.
        We do not require registration, login, or any personal details to use our calculators.
      </p>
      <p>
        All values you enter into our financial calculators — such as loan amount, interest rate,
        tenure, salary, EPF balance, PPF contribution, GST amount, or any other input — are processed
        <strong> entirely within your browser</strong>. This data is never transmitted to, or stored on,
        our servers.
      </p>

      <h2 style={h2}>2. Our Financial Calculator Tools</h2>
      <p>
        PureToolsHub offers a range of free financial calculators, including but not limited to:
      </p>
      <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
        <li>EMI Calculators (Home Loan, Car Loan, Personal Loan)</li>
        <li>SIP, Lumpsum, Step-Up SIP, and SWP Calculators</li>
        <li>Compound Interest, Simple Interest, CAGR, and Inflation Calculators</li>
        <li>Fixed Deposit (FD), Recurring Deposit, Tax-Saver FD, and Senior Citizen FD Calculators</li>
        <li>PPF Calculators (Interest, Withdrawal, Extension, PPF vs FD)</li>
        <li>EPF and EPS Calculators (Balance, Withdrawal, Interest)</li>
        <li>Income Tax Calculators (Tax Slab, TDS, Advance Tax, Old vs New Regime)</li>
        <li>HRA, Gratuity, Salary, CTC, and GST Calculators</li>
      </ul>
      <p>
        The results provided by these tools are for <strong>general informational purposes only</strong> and
        should not be considered professional financial, tax, or investment advice. Always consult a
        certified financial advisor or chartered accountant before making any financial decisions.
      </p>

      <h2 style={h2}>3. Google AdSense</h2>
      <p>
        We use <strong>Google AdSense</strong> to display advertisements on our website. Google, as a
        third-party vendor, uses cookies to serve ads based on a user's prior visits to this website or
        other websites on the Internet.
      </p>
      <p>
        You may opt out of personalized advertising by visiting{" "}
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3" }}>
          Google Ads Settings
        </a>. We do not have access to or control over cookies placed by Google or its advertising partners.
      </p>

      <h2 style={h2}>4. Cookies</h2>
      <p>
        Our website itself does not set any cookies to track visitors. However, third-party advertisers
        like Google may place cookies on your browser to serve relevant ads. You can disable cookies
        through your browser settings at any time without affecting your ability to use our calculators.
      </p>

      <h2 style={h2}>5. Third-Party Links</h2>
      <p>
        Our website may contain links to other websites or resources. We are not responsible for the
        privacy practices or content of those external sites and encourage you to review their privacy
        policies separately.
      </p>

      <h2 style={h2}>6. Children's Privacy</h2>
      <p>
        This website is not intended for children under the age of 13. We do not knowingly collect any
        personal information from children.
      </p>

      <h2 style={h2}>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for
        legal reasons. Any changes will be posted on this page with an updated revision date. We
        recommend checking this page periodically.
      </p>

      <h2 style={h2}>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, feel free to contact us at:{" "}
        <a href="mailto:support@puretoolshub.com" style={{ color: "#0070f3" }}>support@puretoolshub.com</a>
      </p>

     </div>
  );
}

const h2 = {
  fontSize: "20px",
  fontWeight: "600",
  marginTop: "32px",
  marginBottom: "10px",
};