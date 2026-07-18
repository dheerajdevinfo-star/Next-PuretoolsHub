export type SipType = "sip" | "lumpsum" | "step-up" | "swp"
export interface ContentSection {
  heading: string
  body: string // HTML ya Markdown string
}

export interface FAQ {
  q: string
  a: string
}

export interface RelatedTool {
  label: string
  href: string
  description: string
}

export interface SipTypeConfig {
  // Basic Info
  sipTypeKey: SipType
  title: string
  description: string
  keywords: string[]

  // SEO
  metaTitle: string
  metaDescription: string

  // Amount Limits
  defaultAmount: number
  minAmount: number
  maxAmount: number
  step: number

  // Return Rate
  defaultRate: number
  minRate: number
  maxRate: number

  // Tenure
  defaultTenure: number
  minTenure: number
  maxTenure: number

  // UI Labels
  amountLabel: string
  amountHints: string[]

  // Step-Up SIP specific (only used by "step-up" type)
  defaultStepUp?: number // % increase per year
  minStepUp?: number
  maxStepUp?: number

  // SWP specific (only used by "swp" type)
  defaultWithdrawal?: number // monthly withdrawal amount

  // Article Content
  content: ContentSection[]

  // FAQs
  faqs: FAQ[]

  // Related Calculators
  relatedTools: RelatedTool[]
}

export const sipConfig: Record<SipType, SipTypeConfig> = {
  // /finance/sip → main page
  sip: {
    sipTypeKey: "sip" as SipType,
    title: "SIP Calculator",
    description: "Calculate the future value of your monthly mutual fund investment with the power of compounding — completely free.",
    metaTitle: "SIP Calculator – Calculate Mutual Fund Returns Online Free",
    metaDescription: "Calculate your SIP returns instantly with our free calculator. Find the future value of your monthly mutual fund investment in seconds.",
    defaultAmount: 5000,
    minAmount: 500,
    maxAmount: 1000000,
    step: 500,
    defaultRate: 12,
    minRate: 1,
    maxRate: 30,
    defaultTenure: 10,
    minTenure: 1,
    maxTenure: 40,
    amountLabel: "Monthly investment",
    amountHints: ["₹500", "₹10 lakh"],
    content: [
      {
        heading: "How to Use the SIP Calculator",
        body: `<p>Calculating your SIP returns takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>monthly investment amount</strong> you plan to invest via SIP.</li>
        <li>Enter the <strong>expected annual return rate</strong> based on the mutual fund category you're investing in.</li>
        <li>Select the <strong>investment duration</strong> in years.</li>
        <li>Click <strong>Calculate</strong> to instantly see your total invested amount, estimated returns, and final maturity value.</li>
      </ol>
      <p>The calculator also shows how much of your final corpus comes from your own contributions versus the wealth generated through compounding.</p>`
      },
      {
        heading: "What is SIP?",
        body: `<p><strong>SIP (Systematic Investment Plan)</strong> is a method of investing in mutual funds where you invest a fixed amount at regular intervals — usually monthly — instead of investing a large sum all at once. This approach helps you build wealth gradually while benefiting from rupee cost averaging and the power of compounding.</p>
      <p>SIP is popular among investors because it doesn't require timing the market, makes investing disciplined and habitual, and allows even small, regular amounts to grow into a substantial corpus over the long term.</p>`
      },
      {
        heading: "SIP Calculation Formula",
        body: `<p>The future value of a SIP investment is calculated using the following formula:</p>
      <p class="formula">FV = P × [(1 + i)^n − 1] / i × (1 + i)</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>FV</strong> = Future value of the investment</li>
        <li><strong>P</strong> = Monthly investment amount</li>
        <li><strong>i</strong> = Monthly rate of return (annual rate ÷ 12 ÷ 100)</li>
        <li><strong>n</strong> = Total number of monthly installments</li>
      </ul>
      <p>For example, if you invest ₹5,000 per month for 10 years at an expected annual return of 12%, your investment would grow to approximately ₹11,61,695, of which ₹6,00,000 is your own contribution and the rest is returns generated through compounding.</p>`
      },
      {
        heading: "Benefits of Investing Through SIP",
        body: `<p>SIP offers several advantages over lump sum investing:</p>
      <ol>
        <li><strong>Rupee Cost Averaging</strong> — Since you invest a fixed amount regularly, you buy more units when prices are low and fewer when prices are high, averaging out your purchase cost over time.</li>
        <li><strong>Power of Compounding</strong> — Returns earned are reinvested, generating further returns, which significantly boosts long-term wealth creation.</li>
        <li><strong>Disciplined Investing</strong> — Automating your investment removes the need to time the market and builds a consistent saving habit.</li>
        <li><strong>Flexibility</strong> — You can start with small amounts, increase your SIP over time, pause, or stop it without major penalties in most funds.</li>
      </ol>`
      },
      {
        heading: "SIP vs Lumpsum Investment",
        body: `<p>Both SIP and lumpsum have their place depending on your situation:</p>
      <ul>
        <li><strong>SIP</strong> — Better suited for salaried individuals investing from regular income, and for reducing the risk of investing a large amount at the wrong time.</li>
        <li><strong>Lumpsum</strong> — Better suited when you have a large sum available upfront and markets are at relatively lower valuations, allowing the full amount to benefit from long-term compounding.</li>
      </ul>
      <p>Many investors use a combination of both — investing a lumpsum when funds are available and continuing regular SIPs alongside for disciplined, ongoing investment.</p>`
      },
      {
        heading: "Why Use Our SIP Calculator?",
        body: `<p>Our calculator helps you plan your investments smartly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate projections of your SIP's future value</li>
        <li>Compare outcomes across different investment amounts, tenures, and expected returns</li>
        <li>Understand exactly how much of your corpus comes from returns versus your own contributions</li>
        <li>Set realistic, achievable financial goals before starting your investment</li>
      </ul>`
      }
    ],

    keywords: [
      "SIP calculator",
      "SIP calculator online",
      "mutual fund SIP calculator",
      "SIP return calculator",
      "SIP calculator India",
    ],

    faqs: [
      {
        q: "What is SIP?",
        a: "SIP (Systematic Investment Plan) is a method of investing a fixed amount in mutual funds at regular intervals, usually monthly, helping investors build wealth gradually through disciplined investing and compounding."
      },
      {
        q: "How is SIP return calculated?",
        a: "SIP returns are calculated using the formula FV = P × [(1 + i)^n − 1] / i × (1 + i), where P is the monthly investment, i is the monthly rate of return, and n is the number of installments."
      },
      {
        q: "Is SIP better than a lumpsum investment?",
        a: "SIP is generally better for regular income earners since it reduces market timing risk through rupee cost averaging. Lumpsum can work well when a large amount is available and markets are favorably valued."
      },
      {
        q: "What is a good expected return rate for SIP calculations?",
        a: "Equity mutual funds have historically delivered average annual returns of around 10% to 14% over the long term, though actual returns vary and are not guaranteed. It's wise to use a conservative estimate while planning."
      },
      {
        q: "Can I stop or pause my SIP anytime?",
        a: "Yes, most mutual funds allow you to pause, stop, or modify your SIP amount without significant penalties. However, stopping early may reduce the long-term compounding benefit of your investment."
      },
    ],

    relatedTools: [
      { label: "Lumpsum Calculator", href: "/finance/sip/lumpsum", description: 'Calculate returns on a one-time investment' },
      { label: "Step-Up SIP Calculator", href: "/finance/sip/step-up", description: 'Calculate returns with annually increasing SIP' },
      { label: "SWP Calculator", href: "/finance/sip/swp", description: "Calculate systematic withdrawal plan returns" },
    ],
  },

  // /finance/sip/lumpsum
  lumpsum: {
    sipTypeKey: "lumpsum" as SipType,
    title: "Lumpsum Calculator",
    description: "Calculate the future value of your one-time mutual fund investment instantly — completely free.",
    metaTitle: "Lumpsum Calculator – Calculate Mutual Fund Returns Free",
    metaDescription: "Calculate returns on your one-time mutual fund investment instantly with our free lumpsum calculator. Find the future value of your investment in seconds.",
    defaultAmount: 100000,
    minAmount: 1000,
    maxAmount: 10000000,
    step: 1000,
    defaultRate: 12,
    minRate: 1,
    maxRate: 30,
    defaultTenure: 10,
    minTenure: 1,
    maxTenure: 40,
    amountLabel: "Lumpsum amount",
    amountHints: ["₹1K", "₹1 crore"],
    content: [
      {
        heading: "How to Use the Lumpsum Calculator",
        body: `<p>Calculating your lumpsum investment returns takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>investment amount</strong> you plan to invest as a one-time sum.</li>
        <li>Enter the <strong>expected annual return rate</strong> based on the mutual fund category you're investing in.</li>
        <li>Select the <strong>investment duration</strong> in years.</li>
        <li>Click <strong>Calculate</strong> to instantly see your estimated returns and final maturity value.</li>
      </ol>
      <p>The calculator also shows how much of your final corpus comes from your original investment versus the wealth generated through compounding.</p>`
      },
      {
        heading: "What is a Lumpsum Investment?",
        body: `<p>A <strong>lumpsum investment</strong> is when you invest a large sum of money in a mutual fund or other instrument all at once, rather than spreading it out over time through regular installments like a SIP. This approach works best when you have a significant amount of surplus funds available immediately.</p>
      <p>Since the entire amount starts compounding from day one, lumpsum investments can generate strong returns over the long term, especially when invested during favorable market valuations.</p>`
      },
      {
        heading: "Lumpsum Calculation Formula",
        body: `<p>The future value of a lumpsum investment is calculated using the compound interest formula:</p>
      <p class="formula">FV = P × (1 + r)^n</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>FV</strong> = Future value of the investment</li>
        <li><strong>P</strong> = Principal lumpsum amount invested</li>
        <li><strong>r</strong> = Expected annual rate of return (in decimal form)</li>
        <li><strong>n</strong> = Investment duration in years</li>
      </ul>
      <p>For example, if you invest ₹5,00,000 as a lumpsum at an expected annual return of 12% for 10 years, your investment would grow to approximately ₹15,52,925.</p>`
      },
      {
        heading: "Lumpsum vs SIP — Which One Should You Choose?",
        body: `<p>Both investment methods have distinct advantages depending on your financial situation:</p>
      <ul>
        <li><strong>Lumpsum</strong> — Ideal when you have a large amount of surplus funds available, such as a bonus, inheritance, or maturity proceeds from another investment, and markets are at relatively reasonable valuations.</li>
        <li><strong>SIP</strong> — Better suited for investing from regular income, as it spreads investment risk over time through rupee cost averaging, reducing the impact of market volatility.</li>
      </ul>
      <p>Many experienced investors combine both strategies — investing available lumpsum amounts when opportunities arise, while continuing disciplined SIPs from their regular income.</p>`
      },
      {
        heading: "Factors That Affect Lumpsum Returns",
        body: `<p>Several factors influence how much your lumpsum investment grows:</p>
      <ol>
        <li><strong>Investment Amount</strong> — A higher initial investment results in proportionally higher absolute returns.</li>
        <li><strong>Expected Rate of Return</strong> — Even a small difference in annual return significantly impacts the final corpus over long periods.</li>
        <li><strong>Investment Duration</strong> — The longer the money stays invested, the greater the benefit of compounding.</li>
        <li><strong>Market Timing</strong> — Since the entire amount is invested at once, the market valuation at the time of investment can meaningfully affect short to medium-term returns.</li>
      </ol>`
      },
      {
        heading: "Why Use Our Lumpsum Calculator?",
        body: `<p>Our calculator helps you plan your investments smartly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate projections of your lumpsum investment's future value</li>
        <li>Compare outcomes across different investment amounts, tenures, and expected returns</li>
        <li>Understand exactly how much of your corpus comes from returns versus your original investment</li>
        <li>Make informed decisions about how to deploy a large sum of available funds</li>
      </ul>`
      }
    ],

    keywords: [
      "lumpsum calculator",
      "lumpsum investment calculator",
      "mutual fund lumpsum calculator",
      "lumpsum return calculator",
      "lumpsum calculator India",
    ],

    faqs: [
      {
        q: "What is a lumpsum investment?",
        a: "A lumpsum investment is when you invest a large sum of money in a mutual fund or other instrument all at once, rather than through regular installments like a SIP."
      },
      {
        q: "How is lumpsum return calculated?",
        a: "Lumpsum returns are calculated using the compound interest formula FV = P × (1 + r)^n, where P is the principal amount, r is the expected annual rate of return, and n is the investment duration in years."
      },
      {
        q: "Is lumpsum investment better than SIP?",
        a: "It depends on your situation. Lumpsum works well when you have surplus funds and markets are favorably valued. SIP is better for regular income earners since it reduces market timing risk."
      },
      {
        q: "What is a good expected return rate for lumpsum calculations?",
        a: "Equity mutual funds have historically delivered average annual returns of around 10% to 14% over the long term, though actual returns vary and are not guaranteed. A conservative estimate is recommended for planning."
      },
      {
        q: "Is lumpsum investment riskier than SIP?",
        a: "Lumpsum investment carries higher short-term market timing risk since the entire amount is invested at once. SIP spreads this risk over time through rupee cost averaging, making it comparatively less volatile."
      },
    ],

    relatedTools: [
      { label: "SIP Calculator", href: "/finance/sip", description: 'Calculate returns on your monthly SIP investment' },
      { label: "Step-Up SIP Calculator", href: "/finance/sip/step-up", description: 'Calculate returns with annually increasing SIP' },
      { label: "SWP Calculator", href: "/finance/sip/swp", description: "Calculate systematic withdrawal plan returns" },
    ],
  },

  // /finance/sip/step-up
  "step-up": {
    sipTypeKey: "step-up" as SipType,
    title: "Step-Up SIP Calculator",
    description: "Calculate the future value of your SIP when you increase your investment amount every year — completely free.",
    metaTitle: "Step-Up SIP Calculator – Calculate Increasing SIP Returns",
    metaDescription: "Calculate returns on your step-up SIP instantly with our free calculator. See how an annually increasing SIP boosts your mutual fund corpus.",
    defaultAmount: 5000,
    minAmount: 500,
    maxAmount: 1000000,
    step: 500,
    defaultRate: 12,
    minRate: 1,
    maxRate: 30,
    defaultTenure: 10,
    minTenure: 1,
    maxTenure: 40,
    defaultStepUp: 10,   // % increase per year
    minStepUp: 1,
    maxStepUp: 50,
    amountLabel: "Monthly SIP amount",
    amountHints: ["₹500", "₹10 lakh"],
    content: [
      {
        heading: "How to Use the Step-Up SIP Calculator",
        body: `<p>Calculating your step-up SIP returns takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>initial monthly SIP amount</strong> you plan to start with.</li>
        <li>Enter the <strong>annual step-up percentage</strong> by which you plan to increase your SIP each year.</li>
        <li>Enter the <strong>expected annual return rate</strong> based on the mutual fund category you're investing in.</li>
        <li>Select the <strong>investment duration</strong> in years.</li>
        <li>Click <strong>Calculate</strong> to instantly see your total invested amount, estimated returns, and final maturity value.</li>
      </ol>
      <p>The calculator shows how gradually increasing your SIP can significantly boost your final corpus compared to a fixed SIP amount.</p>`
      },
      {
        heading: "What is a Step-Up SIP?",
        body: `<p>A <strong>Step-Up SIP</strong> (also known as a Top-Up SIP) is a type of Systematic Investment Plan where you increase your monthly investment amount by a fixed percentage or amount every year, instead of keeping it constant throughout the investment period.</p>
      <p>This approach aligns your investments with your growing income over time — as your salary increases through annual raises or promotions, your SIP amount increases proportionally, allowing you to build a significantly larger corpus without straining your budget in the early years.</p>`
      },
      {
        heading: "Step-Up SIP Calculation Approach",
        body: `<p>Unlike a regular SIP with a fixed formula, a step-up SIP is calculated by applying the future value formula separately to each year's investment amount, since the SIP amount changes annually:</p>
      <p class="formula">FV = Σ [P₁ × (1 + i)^n − 1] / i × (1 + i)</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>P₁</strong> = SIP amount for each respective year (increasing annually by the step-up percentage)</li>
        <li><strong>i</strong> = Monthly rate of return</li>
        <li><strong>n</strong> = Remaining number of months for that year's installments to compound</li>
      </ul>
      <p>For example, if you start a SIP of ₹5,000 per month with a 10% annual step-up for 10 years at an expected 12% annual return, your investment would grow to approximately ₹15,78,000 — notably higher than a regular fixed SIP of the same starting amount, which would reach around ₹11,61,695.</p>`
      },
      {
        heading: "Step-Up SIP vs Regular SIP",
        body: `<p>Here's how the two approaches compare:</p>
      <ul>
        <li><strong>Regular SIP</strong> — The investment amount remains fixed throughout the tenure, which is simpler to plan but doesn't account for rising income or inflation over time.</li>
        <li><strong>Step-Up SIP</strong> — The investment amount increases annually, helping you invest more as your income grows, ultimately building a significantly larger corpus by the end of the tenure.</li>
      </ul>
      <p>While step-up SIP requires a bit more planning, it is particularly effective for long-term goals like retirement, where maximizing the final corpus matters more than keeping contributions constant.</p>`
      },
      {
        heading: "Benefits of Step-Up SIP",
        body: `<p>Choosing a step-up SIP over a regular one offers several advantages:</p>
      <ol>
        <li><strong>Higher Final Corpus</strong> — Even a modest annual increase compounds significantly over a long investment horizon.</li>
        <li><strong>Aligns With Income Growth</strong> — As your salary increases, your investments increase proportionally, without straining your monthly budget early on.</li>
        <li><strong>Inflation-Adjusted Investing</strong> — Increasing your SIP helps your investment growth keep pace with rising living costs over time.</li>
        <li><strong>Disciplined Wealth Building</strong> — Encourages you to consistently invest a larger portion of your growing income rather than spending the increase elsewhere.</li>
      </ol>`
      },
      {
        heading: "Why Use Our Step-Up SIP Calculator?",
        body: `<p>Our calculator helps you plan your growing investments smartly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate projections of your step-up SIP's future value</li>
        <li>Compare outcomes between a regular SIP and a step-up SIP for the same starting amount</li>
        <li>Understand exactly how much your annual increase contributes to your final corpus</li>
        <li>Plan a realistic step-up percentage based on your expected income growth</li>
      </ul>`
      }
    ],

    keywords: [
      "step up SIP calculator",
      "SIP step up calculator",
      "top up SIP calculator",
      "annual increase SIP calculator",
      "step up SIP calculator India",
    ],

    faqs: [
      {
        q: "What is a step-up SIP?",
        a: "A step-up SIP is a type of Systematic Investment Plan where you increase your monthly investment amount by a fixed percentage or amount every year, instead of keeping it constant throughout the tenure."
      },
      {
        q: "How is step-up SIP different from a regular SIP?",
        a: "A regular SIP keeps the investment amount fixed throughout the tenure, while a step-up SIP increases the amount annually, helping you invest more as your income grows and build a larger final corpus."
      },
      {
        q: "What is a good step-up percentage to choose?",
        a: "A step-up percentage of 10% per year is commonly used, as it roughly aligns with typical annual salary increments, but you can adjust it based on your own expected income growth."
      },
      {
        q: "Does step-up SIP guarantee higher returns than regular SIP?",
        a: "Step-up SIP results in a higher final corpus mainly because you invest more money over time, not because the rate of return is higher. Both follow the same market-linked returns, but step-up SIP contributes more capital."
      },
      {
        q: "Can I change my step-up percentage later?",
        a: "Most mutual funds allow you to modify, pause, or stop your step-up SIP instructions, though the exact flexibility depends on the fund house and the specific plan you've enrolled in."
      },
    ],

    relatedTools: [
      { label: "SIP Calculator", href: "/finance/sip", description: 'Calculate returns on your monthly SIP investment' },
      { label: "Lumpsum Calculator", href: "/finance/sip/lumpsum", description: 'Calculate returns on a one-time investment' },
      { label: "SWP Calculator", href: "/finance/sip/swp", description: "Calculate systematic withdrawal plan returns" },
    ],
  },

  // /finance/sip/swp
  swp: {
    sipTypeKey: "swp" as SipType,
    title: "SWP Calculator",
    description: "Calculate how long your investment lasts with regular monthly withdrawals — completely free.",
    metaTitle: "SWP Calculator – Calculate Systematic Withdrawal Plan Free",
    metaDescription: "Calculate your SWP returns instantly with our free calculator. Find how long your investment lasts with regular monthly withdrawals.",
    defaultAmount: 1000000,  // corpus
    minAmount: 10000,
    maxAmount: 100000000,
    step: 10000,
    defaultRate: 12,
    minRate: 1,
    maxRate: 30,
    defaultTenure: 20,
    minTenure: 1,
    maxTenure: 40,
    defaultWithdrawal: 10000,  // monthly withdrawal
    amountLabel: "Total corpus",
    amountHints: ["₹10K", "₹10 crore"],
    content: [
      {
        heading: "How to Use the SWP Calculator",
        body: `<p>Calculating your SWP takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>total investment amount</strong> you've already invested in a mutual fund.</li>
        <li>Enter the <strong>monthly withdrawal amount</strong> you wish to receive.</li>
        <li>Enter the <strong>expected annual rate of return</strong> on your remaining invested corpus.</li>
        <li>Select the <strong>withdrawal duration</strong> in years.</li>
        <li>Click <strong>Calculate</strong> to instantly see your remaining corpus, total withdrawals, and how long your investment will last.</li>
      </ol>
      <p>The calculator also shows whether your investment will be fully depleted or will continue growing despite regular withdrawals.</p>`
      },
      {
        heading: "What is SWP?",
        body: `<p><strong>SWP (Systematic Withdrawal Plan)</strong> is the opposite of a SIP — instead of investing a fixed amount regularly, you withdraw a fixed amount from your mutual fund investment at regular intervals, usually monthly. The remaining invested amount continues to grow based on market returns.</p>
      <p>SWP is commonly used by retirees and investors who want a steady monthly income stream from their accumulated corpus, while still keeping the remaining amount invested and potentially growing.</p>`
      },
      {
        heading: "How SWP Works",
        body: `<p>Each month, a fixed amount is redeemed from your mutual fund units and credited to your bank account. The remaining units continue to remain invested and are subject to market-linked returns. Over time, your corpus changes based on two opposing forces:</p>
      <ul>
        <li><strong>Withdrawals</strong> — Reduce your invested corpus every month.</li>
        <li><strong>Returns</strong> — Grow your remaining corpus based on the fund's performance.</li>
      </ul>
      <p>If your withdrawal rate is lower than your investment's growth rate, your corpus can actually continue growing even while you withdraw from it. If withdrawals exceed growth, the corpus will gradually deplete over time.</p>`
      },
      {
        heading: "SWP Calculation Approach",
        body: `<p>The remaining corpus after each withdrawal is calculated month by month using the following logic:</p>
      <p class="formula">Remaining Corpus = (Previous Corpus − Withdrawal) × (1 + monthly return rate)</p>
      <p>This calculation is repeated for each month over the withdrawal period to determine how the corpus changes over time, factoring in both the regular withdrawals and the returns generated on the remaining balance.</p>
      <p>For example, if you invest ₹20,00,000 and withdraw ₹15,000 per month at an expected annual return of 8%, your corpus could potentially last well beyond 20 years, with the remaining balance still growing due to returns outpacing withdrawals.</p>`
      },
      {
        heading: "Benefits of SWP",
        body: `<p>SWP offers several advantages, especially for retirees and income-focused investors:</p>
      <ol>
        <li><strong>Regular Income</strong> — Provides a predictable, steady monthly cash flow, similar to a pension.</li>
        <li><strong>Tax Efficiency</strong> — Withdrawals are typically more tax-efficient than dividend payouts, since only the gains portion of each withdrawal is taxed, not the entire amount.</li>
        <li><strong>Continued Growth Potential</strong> — Your remaining corpus stays invested and can continue to grow, unlike a fixed deposit where the entire amount is locked at a fixed rate.</li>
        <li><strong>Flexibility</strong> — You can adjust, pause, or stop your withdrawal amount based on your changing financial needs.</li>
      </ol>`
      },
      {
        heading: "Why Use Our SWP Calculator?",
        body: `<p>Our calculator helps you plan a sustainable withdrawal strategy by allowing you to:</p>
      <ul>
        <li>Get instant, accurate projections of how your corpus changes over time</li>
        <li>Find out exactly how long your investment will last at your chosen withdrawal rate</li>
        <li>Compare different withdrawal amounts to find a sustainable rate for your needs</li>
        <li>Plan a reliable income stream for retirement or other financial goals</li>
      </ul>`
      }
    ],

    keywords: [
      "SWP calculator",
      "systematic withdrawal plan calculator",
      "SWP mutual fund calculator",
      "monthly withdrawal calculator mutual fund",
      "SWP calculator India",
    ],

    faqs: [
      {
        q: "What is SWP?",
        a: "SWP (Systematic Withdrawal Plan) allows you to withdraw a fixed amount from your mutual fund investment at regular intervals, usually monthly, while the remaining corpus stays invested and continues to grow."
      },
      {
        q: "Can my SWP corpus last forever?",
        a: "Yes, if your withdrawal amount is lower than the returns generated by your remaining corpus, the investment can theoretically sustain withdrawals indefinitely, or even continue growing over time."
      },
      {
        q: "Is SWP better than fixed deposit interest for regular income?",
        a: "SWP can be more tax-efficient than FD interest, since only the gains portion of each withdrawal is taxed. SWP also offers potential for growth, though it carries market-linked risk unlike a fixed deposit."
      },
      {
        q: "What happens if my withdrawal rate is too high?",
        a: "If you withdraw more than your investment's growth rate can sustain, your corpus will gradually deplete and may run out before your intended withdrawal period ends."
      },
      {
        q: "Who should consider an SWP?",
        a: "SWP is ideal for retirees seeking a regular income stream, or anyone who has accumulated a lump sum and wants to convert it into structured periodic withdrawals while keeping the remaining amount invested."
      },
    ],

    relatedTools: [
      { label: "SIP Calculator", href: "/finance/sip", description: 'Calculate returns on your monthly SIP investment' },
      { label: "Lumpsum Calculator", href: "/finance/sip/lumpsum", description: 'Calculate returns on a one-time investment' },
      { label: "Step-Up SIP Calculator", href: "/finance/sip/step-up", description: "Calculate returns with annually increasing SIP" },
    ],
  },
}

export const slugToSipType: Record<string, SipType> = {
  "lumpsum": "lumpsum",
  "step-up": "step-up",
  "swp": "swp",
}

export const validSipSlugs = Object.keys(slugToSipType)