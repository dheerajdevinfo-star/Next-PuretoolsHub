import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer">
          <div className="max-width">
            <div className="footer_grid">
              <div className="footer_grid_child footer_about_grid">
                <Link href="/" className="header_logo">
                  <Image
                    src="/images/Black_logo.svg"
                    alt="PureToolHub Logo"
                    width={400}
                    height={400}
                    priority
                  />
                </Link>
                <p>Free online calculators and tools built for everyone — no cost, no signup, no hassle.</p>
              </div>
              <div className="footer_grid_child">
                <h4>Finance</h4>
                <ul>
                  <li><Link href="/finance/emi/home-loan">Home Loan EMI</Link></li>
                  <li><Link href="/finance/sip">SIP Calculator</Link></li>
                  <li><Link href="/finance/fd">FD Calculator</Link></li>
                  <li><Link href="/finance/ppf">PPF Calculator</Link></li>
                </ul>
              </div>

              <div className="footer_grid_child">
                <h4>Tax</h4>
                <ul>
                  <li><Link href="/finance/income-tax">Income Tax</Link></li>
                  <li><Link href="/finance/hra">HRA Calculator</Link></li>
                  <li><Link href="/finance/gratuity">Gratuity</Link></li>
                  <li><Link href="/finance/gst">GST Calculator</Link></li>
                </ul>
              </div>

              <div className="footer_grid_child">
                <h4>Company</h4>
                <ul>
                  <li><Link href="/about">About us</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/privacy-policy">Privacy policy</Link></li>
                  <li><Link href="/terms">Terms of use</Link></li>
                </ul>
              </div>

            </div>

            <div className="copyright">
              <span>© 2026 PureToolsHub · Made with ❤️ </span> <span>All tools are free to use </span>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer