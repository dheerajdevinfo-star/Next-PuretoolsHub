export default function TermsAndConditions() {
  return (
    <div style={{ maxWidth: "1340px", margin: "0 auto", padding: "40px 20px", fontFamily: "sans-serif", color: "#222", lineHeight: "1.7" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px" }}>Terms and Conditions</h1>
      <p style={{ color: "#666", marginBottom: "32px" }}>Last updated: June 20, 2026</p>

      <p>
        Welcome to <strong>PureToolsHub.com</strong>. By accessing or using our website and financial
        calculator tools, you agree to be bound by these Terms and Conditions. Please read them
        carefully before using the site.
      </p>

      <h2 style={h2}>1. Acceptance of Terms</h2>
      <p>
        By visiting or using this website, you confirm that you accept these Terms and Conditions and
        agree to comply with them. If you do not agree, please do not use our website.
      </p>

      <h2 style={h2}>2. About Our Tools</h2>
      <p>
        PureToolsHub provides free online financial calculators, including:
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
        All calculations are performed locally in your browser. We do not store any data you enter into
        our tools.
      </p>

      <h2 style={h2}>3. No Professional Advice</h2>
      <p>
        The results provided by our financial calculator tools are for{" "}
        <strong>general informational and educational purposes only</strong>. They do not constitute
        professional financial, tax, legal, or investment advice. Calculations are based on the values
        you enter and standard formulas; actual results from banks, financial institutions, or
        government bodies (such as EPFO) may vary.
      </p>
      <p>
        We make no guarantees about the accuracy, completeness, or reliability of the results. You
        should always verify figures with the relevant institution and consult a certified financial
        advisor or chartered accountant before making any financial, investment, or tax-related decision.
        Use of any calculator result is entirely at your own risk.
      </p>

      <h2 style={h2}>4. Use of Website</h2>
      <p>You agree not to:</p>
      <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
        <li>Use the site in any way that violates applicable laws or regulations</li>
        <li>Copy, reproduce, or redistribute our content or calculator logic without permission</li>
        <li>Attempt to hack, disrupt, or damage the website or its servers</li>
        <li>Use automated tools to scrape or crawl the website</li>
      </ul>

      <h2 style={h2}>5. Intellectual Property</h2>
      <p>
        All content on this website — including calculator tools, text, design, graphics, and logos —
        is the property of <strong>PureToolsHub</strong> unless otherwise stated. You may not use,
        copy, or distribute any content without our prior written permission.
      </p>

      <h2 style={h2}>6. Advertising</h2>
      <p>
        This website displays advertisements served by <strong>Google AdSense</strong> and other
        third-party ad networks. We are not responsible for the content of these advertisements.
        Clicking on ads may take you to third-party websites, and we are not liable for any outcome
        of those interactions.
      </p>

      <h2 style={h2}>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, <strong>PureToolsHub</strong> shall not be liable for
        any direct, indirect, incidental, or consequential damages — including financial loss — arising
        from your use of this website, its calculators, or any decision made based on calculator results.
      </p>

      <h2 style={h2}>8. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We have no control over the content of
        those sites and accept no responsibility for them or for any loss or damage that may arise from
        your use of them.
      </p>

      <h2 style={h2}>9. Privacy</h2>
      <p>
        Your use of this website is also governed by our{" "}
        <a href="/privacy-policy" style={{ color: "#0070f3" }}>Privacy Policy</a>, which is
        incorporated into these Terms and Conditions by reference.
      </p>

      <h2 style={h2}>10. Changes to Terms</h2>
      <p>
        We reserve the right to update or modify these Terms and Conditions at any time without prior
        notice. Changes will be effective immediately upon posting. Your continued use of the website
        after any changes constitutes your acceptance of the new terms.
      </p>

      <h2 style={h2}>11. Governing Law</h2>
      <p>
        These Terms and Conditions are governed by and construed in accordance with the laws of India.
        Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction
        of the courts of India.
      </p>

      <h2 style={h2}>12. Contact Us</h2>
      <p>
        If you have any questions about these Terms and Conditions, please contact us at:{" "}
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