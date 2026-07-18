export type PpfType =
  | "ppf"
  | "ppf-withdrawal"
  | "ppf-interest-calculator"
  | "ppf-vs-fd"
  | "ppf-extension"


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
 
export interface PpfTypeConfig {
  // Basic Info
  ppfTypeKey: PpfType
  title: string
  description: string
  keywords: string[]
 
  // SEO
  metaTitle: string
  metaDescription: string
 
  // Calculator Defaults
  defaultAmount: number
  minAmount: number
  maxAmount: number
  defaultRate: number
  defaultTenure: number
 
  // Article Content
  content: ContentSection[]
 
  // FAQs
  faqs: FAQ[]
 
  // Related Calculators
  relatedTools: RelatedTool[]
}


export const ppfConfig: Record<PpfType, PpfTypeConfig> = {

  "ppf": {
    ppfTypeKey: "ppf" as PpfType,
    title: "PPF Calculator",
    description: "Calculate your PPF maturity amount and total returns instantly — plan your tax-free long-term savings completely free.",
    metaTitle: "PPF Calculator – Calculate Public Provident Fund Returns Free",
    metaDescription: "Calculate your PPF maturity amount and total returns instantly with our free calculator. Plan your tax-free long-term savings with accurate PPF projections.",
    defaultAmount: 10000,
    minAmount: 500,
    maxAmount: 150000,
    defaultRate: 7.1,
    defaultTenure: 15,
    content: [
      {
        heading: "How to Use the PPF Calculator",
        body: `<p>Calculating your PPF returns takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>annual investment amount</strong> (minimum ₹500, maximum ₹1,50,000 per year).</li>
        <li>The <strong>current PPF interest rate</strong> is pre-filled, though you can adjust it if needed.</li>
        <li>Select your <strong>investment tenure</strong> — PPF has a mandatory lock-in of 15 years, extendable in 5-year blocks.</li>
        <li>Click <strong>Calculate</strong> to instantly see your total investment, interest earned, and maturity amount.</li>
      </ol>
      <p>The calculator also shows a year-by-year breakdown of how your PPF corpus grows over the investment period.</p>`
      },
      {
        heading: "What is PPF?",
        body: `<p><strong>PPF (Public Provident Fund)</strong> is a government-backed long-term savings scheme in India, offering guaranteed, tax-free returns. It is one of the most popular investment options among salaried and self-employed individuals due to its triple tax benefit — contributions are tax-deductible, returns are tax-free, and the maturity amount is also exempt from tax.</p>
      <p>PPF accounts can be opened at any post office or authorized bank branch. The scheme has a mandatory lock-in period of 15 years, making it ideal for long-term financial goals like retirement planning or children's education.</p>`
      },
      {
        heading: "PPF Interest Rate and Calculation",
        body: `<p>PPF interest is calculated on the <strong>minimum balance between the 5th and last day of each month</strong>. This means depositing your annual PPF contribution before the 5th of April every year maximizes the interest earned for that financial year.</p>
      <p class="formula">PPF Maturity Amount = P × [((1 + r)^n − 1) / r] × (1 + r)</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>P</strong> = Annual investment amount</li>
        <li><strong>r</strong> = Annual interest rate (in decimal form)</li>
        <li><strong>n</strong> = Number of years</li>
      </ul>
      <p>For example, if you invest ₹1,50,000 per year in PPF at 7.1% interest for 15 years, your total investment of ₹22,50,000 would grow to approximately ₹40,68,209 — a tax-free return of over ₹18 lakh.</p>`
      },
      {
        heading: "Key Features of PPF",
        body: `<p>PPF stands out from other investment options due to several unique features:</p>
      <ol>
        <li><strong>Triple Tax Benefit (EEE)</strong> — Contributions qualify for Section 80C deduction, interest earned is tax-free, and the maturity amount is fully exempt from tax.</li>
        <li><strong>Government Guarantee</strong> — Returns are guaranteed by the Government of India, making it one of the safest investment options available.</li>
        <li><strong>Loan Facility</strong> — You can take a loan against your PPF balance from the 3rd to 6th year of the account.</li>
        <li><strong>Partial Withdrawal</strong> — Partial withdrawals are allowed from the 7th year onwards, subject to conditions.</li>
        <li><strong>Extension Option</strong> — After the 15-year maturity, you can extend the account in 5-year blocks, with or without further contributions.</li>
      </ol>`
      },
      {
        heading: "PPF vs Other Tax-Saving Investments",
        body: `<p>When comparing PPF with other popular tax-saving options:</p>
      <ul>
        <li><strong>PPF vs ELSS</strong> — PPF offers guaranteed, tax-free returns with lower risk, while ELSS (Equity Linked Savings Scheme) offers potentially higher but market-linked returns with a shorter 3-year lock-in.</li>
        <li><strong>PPF vs FD</strong> — PPF offers tax-free returns and Section 80C benefits, while FD interest is fully taxable, making PPF more tax-efficient for most investors.</li>
        <li><strong>PPF vs NPS</strong> — PPF provides full tax-free maturity, while NPS has partial tax liability on withdrawal, though NPS offers additional deduction under Section 80CCD(1B).</li>
      </ul>`
      },
      {
        heading: "Why Use Our PPF Calculator?",
        body: `<p>Our calculator helps you plan your PPF investments smartly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate projections of your PPF maturity amount</li>
        <li>See a year-by-year breakdown of your growing corpus</li>
        <li>Compare returns for different annual investment amounts</li>
        <li>Plan your long-term savings goals with confidence</li>
      </ul>`
      }
    ],

    keywords: [
      "PPF calculator",
      "PPF calculator online",
      "public provident fund calculator",
      "PPF maturity calculator",
      "PPF interest rate calculator",
    ],

    faqs: [
      {
        q: "What is PPF?",
        a: "PPF (Public Provident Fund) is a government-backed long-term savings scheme offering guaranteed, tax-free returns with a 15-year lock-in period. It provides a triple tax benefit — deduction on contribution, tax-free interest, and tax-free maturity."
      },
      {
        q: "What is the current PPF interest rate?",
        a: "The PPF interest rate is set by the Government of India and revised quarterly. It has been 7.1% per annum in recent quarters, though it is subject to change based on government notifications."
      },
      {
        q: "What is the maximum amount I can invest in PPF per year?",
        a: "The maximum annual investment allowed in a PPF account is ₹1,50,000 per financial year, and the minimum is ₹500. Contributions above ₹1,50,000 do not earn interest and are not eligible for tax deduction."
      },
      {
        q: "Can I withdraw from my PPF account before 15 years?",
        a: "Partial withdrawals from PPF are allowed from the 7th financial year onwards, subject to conditions. Full premature closure is only permitted in specific circumstances such as serious illness or higher education needs, after 5 years."
      },
      {
        q: "What happens to my PPF account after 15 years?",
        a: "After the 15-year maturity period, you can withdraw the full amount, or extend the account in 5-year blocks — either with continued contributions or without (where the balance continues to earn interest)."
      },
    ],

    relatedTools: [
      { label: "PPF Withdrawal Calculator", href: "/finance/ppf/ppf-withdrawal", description: 'Calculate your PPF withdrawal amount' },
      { label: "PPF Interest Calculator", href: "/finance/ppf/ppf-interest-calculator", description: 'Calculate PPF interest earned year by year' },
      { label: "PPF vs FD Calculator", href: "/finance/ppf/ppf-vs-fd", description: "Compare PPF and FD returns side by side" },
    ],
  },

  "ppf-withdrawal": {
    ppfTypeKey: "ppf-withdrawal" as PpfType,
    title: "PPF Withdrawal Calculator",
    description: "Calculate how much you can withdraw from your PPF account based on your balance and tenure — completely free.",
    metaTitle: "PPF Withdrawal Calculator – Calculate Withdrawal Amount Free",
    metaDescription: "Calculate your PPF withdrawal amount instantly with our free calculator. Find out how much you can withdraw from your PPF account based on your balance and tenure.",
    defaultAmount: 10000,
    minAmount: 500,
    maxAmount: 150000,
    defaultRate: 7.1,
    defaultTenure: 15,
    content: [
      {
        heading: "How to Use the PPF Withdrawal Calculator",
        body: `<p>Calculating your PPF withdrawal amount takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>current PPF balance</strong> as shown in your passbook or account statement.</li>
        <li>Enter the <strong>financial year of account opening</strong> to determine your account's age and withdrawal eligibility.</li>
        <li>Select the <strong>type of withdrawal</strong> — partial withdrawal, premature closure, or full maturity withdrawal.</li>
        <li>Click <strong>Calculate</strong> to instantly see the maximum amount you can withdraw and any applicable conditions.</li>
      </ol>
      <p>The calculator clearly shows whether you are eligible for withdrawal and the exact amount you can claim based on PPF rules.</p>`
      },
      {
        heading: "PPF Withdrawal Rules",
        body: `<p>PPF withdrawal rules depend on the age of your account:</p>
      <ul>
        <li><strong>Before 5 years</strong> — No withdrawal or premature closure is allowed under normal circumstances. Premature closure is only permitted in exceptional cases like life-threatening illness or higher education, subject to a 1% interest penalty.</li>
        <li><strong>From 7th year onwards</strong> — Partial withdrawals are allowed once per financial year, up to 50% of the balance at the end of the 4th year preceding the withdrawal year, or the balance at the end of the immediately preceding year, whichever is lower.</li>
        <li><strong>After 15 years (Maturity)</strong> — You can withdraw the full maturity amount, completely tax-free, along with all accumulated interest.</li>
      </ul>`
      },
      {
        heading: "How PPF Partial Withdrawal is Calculated",
        body: `<p>The maximum partial withdrawal amount from PPF is calculated as follows:</p>
      <p class="formula">Max Withdrawal = 50% of Lower of (Balance at end of 4th preceding year OR Balance at end of immediately preceding year)</p>
      <p>For example, if you are withdrawing in FY 2025-26 (Year 10 of your account):</p>
      <ul>
        <li>Balance at end of FY 2021-22 (4th preceding year) = ₹4,00,000</li>
        <li>Balance at end of FY 2024-25 (immediately preceding year) = ₹6,50,000</li>
        <li>Lower of the two = ₹4,00,000</li>
        <li>Maximum withdrawal = 50% of ₹4,00,000 = <strong>₹2,00,000</strong></li>
      </ul>`
      },
      {
        heading: "Premature PPF Account Closure Rules",
        body: `<p>Premature closure of a PPF account before the 15-year maturity is only permitted after completion of 5 financial years from account opening, and only under specific conditions:</p>
      <ol>
        <li><strong>Life-threatening illness</strong> of the account holder, spouse, dependent children, or parents.</li>
        <li><strong>Higher education expenses</strong> of the account holder or dependent children.</li>
        <li><strong>Change in residency status</strong> — if the account holder becomes a non-resident Indian (NRI).</li>
      </ol>
      <p>In all premature closure cases, a <strong>1% interest penalty</strong> is applied — meaning the interest rate applicable to your account is reduced by 1% for all years preceding the closure.</p>`
      },
      {
        heading: "PPF Withdrawal at Maturity (After 15 Years)",
        body: `<p>At the end of the 15-year lock-in period, you have three options:</p>
      <ul>
        <li><strong>Full withdrawal</strong> — Withdraw the entire maturity amount, completely tax-free.</li>
        <li><strong>Extension without contribution</strong> — Extend the account without making further contributions. The existing balance continues to earn interest and can be withdrawn in one lump sum or partial amounts.</li>
        <li><strong>Extension with contribution</strong> — Extend in 5-year blocks with continued annual contributions, maintaining full PPF benefits including Section 80C deduction.</li>
      </ul>`
      },
      {
        heading: "Why Use Our PPF Withdrawal Calculator?",
        body: `<p>Our calculator helps you plan your PPF withdrawals smartly by allowing you to:</p>
      <ul>
        <li>Instantly check your withdrawal eligibility based on account age</li>
        <li>Calculate the exact maximum amount you can withdraw</li>
        <li>Understand premature closure penalties before making a decision</li>
        <li>Plan partial withdrawals to meet financial needs without depleting your corpus</li>
      </ul>`
      }
    ],

    keywords: [
      "PPF withdrawal calculator",
      "PPF partial withdrawal calculator",
      "PPF premature withdrawal calculator",
      "PPF withdrawal rules",
      "PPF withdrawal amount calculator",
    ],

    faqs: [
      {
        q: "When can I withdraw from my PPF account?",
        a: "Partial withdrawals from PPF are allowed from the 7th financial year of account opening, once per year. Full withdrawal is available at maturity after 15 years. Premature closure is only permitted after 5 years under specific conditions."
      },
      {
        q: "How much can I withdraw from PPF?",
        a: "You can withdraw up to 50% of the lower of your PPF balance at the end of the 4th preceding year or the immediately preceding year, once per financial year from the 7th year onwards."
      },
      {
        q: "Is PPF withdrawal taxable?",
        a: "No, PPF withdrawals are completely tax-free, including both the principal and the interest accumulated, making it one of the most tax-efficient long-term investment options available."
      },
      {
        q: "Can I close my PPF account before 15 years?",
        a: "Premature closure is only allowed after 5 years and only under specific conditions like life-threatening illness, higher education needs, or change of residency status, with a 1% interest penalty applied."
      },
      {
        q: "What happens if I do not withdraw my PPF at maturity?",
        a: "If you do not withdraw or give extension instructions at maturity, your PPF account automatically continues to earn interest without further contributions, and you can withdraw the amount at any time thereafter."
      },
    ],

    relatedTools: [
      { label: "PPF Calculator", href: "/finance/ppf", description: 'Calculate your PPF maturity amount' },
      { label: "PPF Interest Calculator", href: "/finance/ppf/ppf-interest-calculator", description: 'Calculate PPF interest earned year by year' },
      { label: "PPF vs FD Calculator", href: "/finance/ppf/ppf-vs-fd", description: "Compare PPF and FD returns side by side" },
    ],
  },

  "ppf-interest-calculator": {
    ppfTypeKey: "ppf-interest-calculator" as PpfType,
    title: "PPF Interest Calculator",
    description: "Calculate the interest earned on your PPF account year by year — understand exactly how your tax-free returns grow, completely free.",
    metaTitle: "PPF Interest Calculator – Calculate Yearly PPF Interest Free",
    metaDescription: "Calculate your PPF interest earned year by year instantly with our free calculator. Understand exactly how PPF interest is calculated on your balance.",

    defaultAmount: 10000,
    minAmount: 500,
    maxAmount: 150000,
    defaultRate: 7.1,
    defaultTenure: 15,
    content: [
      {
        heading: "How to Use the PPF Interest Calculator",
        body: `<p>Calculating your PPF interest takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>opening PPF balance</strong> at the start of the financial year.</li>
        <li>Enter your <strong>annual contribution</strong> for the year.</li>
        <li>The <strong>current PPF interest rate</strong> is pre-filled based on the latest government notification.</li>
        <li>Click <strong>Calculate</strong> to instantly see the interest earned for the year and your closing balance.</li>
      </ol>
      <p>You can also enter multiple years of contributions to see a complete year-by-year interest and balance breakdown over your entire PPF tenure.</p>`
      },
      {
        heading: "How is PPF Interest Calculated?",
        body: `<p>PPF interest is calculated using a specific method that makes the timing of your deposit important:</p>
      <ul>
        <li>Interest is calculated on the <strong>minimum balance between the 5th and last day of each month</strong>.</li>
        <li>This interest is <strong>credited to your account at the end of each financial year</strong> (31st March), not monthly.</li>
        <li>The credited interest then becomes part of your balance and earns further interest in subsequent years — this is the compounding effect of PPF.</li>
      </ul>
      <p>This calculation method means that if you deposit your annual contribution <strong>before the 5th of April</strong> each year, the entire amount qualifies for interest for that month. Depositing after the 5th means you lose one month's interest on your contribution.</p>`
      },
      {
        heading: "PPF Interest Calculation Formula",
        body: `<p>The interest earned in a financial year is calculated as:</p>
      <p class="formula">Annual Interest = Sum of (Monthly Minimum Balance × Monthly Interest Rate)</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>Monthly Minimum Balance</strong> = Lowest balance between 5th and last day of each month</li>
        <li><strong>Monthly Interest Rate</strong> = Annual PPF interest rate ÷ 12</li>
      </ul>
      <p>For example, if your PPF balance is ₹5,00,000 at the start of the year and you deposit ₹1,50,000 before 5th April, your total balance of ₹6,50,000 earns interest for all 12 months. At 7.1% per annum, the interest earned for that year would be approximately ₹46,150.</p>`
      },
      {
        heading: "Why Depositing Before 5th of the Month Matters",
        body: `<p>The timing of your PPF deposit has a direct impact on the interest you earn:</p>
      <ul>
        <li><strong>Deposit before 5th of the month</strong> — Your deposit qualifies for interest calculation for that entire month, since the minimum balance between the 5th and last day includes your new deposit.</li>
        <li><strong>Deposit after 5th of the month</strong> — Your deposit does not qualify for interest for that month, since the minimum balance on the 5th was calculated before your deposit arrived.</li>
      </ul>
      <p>Over 15 years, consistently depositing before the 5th of April (for annual contributions) can result in noticeably higher total interest earned compared to depositing later in the financial year.</p>`
      },
      {
        heading: "PPF Interest Rate History",
        body: `<p>The PPF interest rate is set by the Government of India and reviewed quarterly. Here is how the rate has changed in recent years:</p>
      <ul>
        <li><strong>FY 2020-21 onwards</strong> — 7.1% per annum</li>
        <li><strong>FY 2019-20</strong> — 7.9% per annum</li>
        <li><strong>FY 2018-19</strong> — 8.0% per annum</li>
        <li><strong>FY 2017-18</strong> — 7.6% to 7.9% per annum</li>
      </ul>
      <p>Note: Interest rates are subject to change with each quarterly review by the government. Always check the latest applicable rate before making contribution decisions.</p>`
      },
      {
        heading: "Why Use Our PPF Interest Calculator?",
        body: `<p>Our calculator helps you maximize your PPF returns by allowing you to:</p>
      <ul>
        <li>Get instant, accurate year-by-year interest calculations</li>
        <li>Understand how deposit timing affects your total interest earned</li>
        <li>Compare interest earned at different contribution amounts</li>
        <li>Plan your annual PPF deposits for maximum tax-free returns</li>
      </ul>`
      }
    ],

    keywords: [
      "PPF interest calculator",
      "PPF interest rate calculator",
      "PPF yearly interest calculator",
      "PPF interest calculation method",
      "PPF interest per year calculator",
    ],

    faqs: [
      {
        q: "How is PPF interest calculated?",
        a: "PPF interest is calculated on the minimum balance between the 5th and last day of each month, totalled for all 12 months, and credited to your account at the end of the financial year on 31st March."
      },
      {
        q: "When is PPF interest credited?",
        a: "PPF interest is credited once a year, at the end of the financial year on 31st March. Although calculated monthly, it is not paid out monthly — it gets added to your balance annually."
      },
      {
        q: "Why should I deposit in PPF before the 5th of the month?",
        a: "PPF interest is calculated on the minimum balance between the 5th and last day of each month. Depositing before the 5th ensures your deposit qualifies for interest for that month, maximizing your annual returns."
      },
      {
        q: "What is the current PPF interest rate?",
        a: "The current PPF interest rate is 7.1% per annum, as set by the Government of India. This rate is reviewed quarterly and is subject to change based on government notifications."
      },
      {
        q: "Is PPF interest taxable?",
        a: "No, PPF interest is completely tax-free under Section 10 of the Income Tax Act. This tax-free compounding makes PPF one of the most efficient long-term savings instruments available in India."
      },
    ],

    relatedTools: [
      { label: "PPF Calculator", href: "/finance/ppf", description: 'Calculate your PPF maturity amount' },
      { label: "PPF Withdrawal Calculator", href: "/finance/ppf/ppf-withdrawal", description: 'Calculate your PPF withdrawal amount' },
      { label: "PPF vs FD Calculator", href: "/finance/ppf/ppf-vs-fd", description: "Compare PPF and FD returns side by side" },
    ],
  },

  "ppf-vs-fd": {
    ppfTypeKey: "ppf-vs-fd" as PpfType,
    title: "PPF vs FD Calculator",
    description: "Compare PPF and Fixed Deposit returns side by side to find which gives you better post-tax returns — completely free.",
    metaTitle: "PPF vs FD Calculator – Compare Returns & Tax Benefits Free",
    metaDescription: "Compare PPF and FD returns instantly with our free calculator. Find out which investment gives you better post-tax returns based on your income and tax slab.",
    defaultAmount: 10000,
    minAmount: 500,
    maxAmount: 150000,
    defaultRate: 7.1,
    defaultTenure: 15,
    content: [
      {
        heading: "How to Use the PPF vs FD Calculator",
        body: `<p>Comparing PPF and FD returns takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>investment amount</strong> you want to compare across both options.</li>
        <li>Enter the <strong>PPF interest rate</strong> (currently 7.1% per annum) and your <strong>FD interest rate</strong> from your preferred bank.</li>
        <li>Select the <strong>investment tenure</strong> in years.</li>
        <li>Enter your <strong>income tax slab</strong> to calculate the post-tax FD returns accurately.</li>
        <li>Click <strong>Calculate</strong> to instantly see a side-by-side comparison of PPF and FD returns, including tax impact.</li>
      </ol>
      <p>The calculator clearly shows which option delivers better returns after accounting for tax on FD interest.</p>`
      },
      {
        heading: "PPF vs FD — Key Differences",
        body: `<p>PPF and Fixed Deposits are both popular savings instruments, but they differ significantly in several aspects:</p>
      <ul>
        <li><strong>Tax on Returns</strong> — PPF interest is completely tax-free. FD interest is fully taxable as per your income tax slab, with TDS deducted if annual interest exceeds ₹40,000 (₹50,000 for senior citizens).</li>
        <li><strong>Returns</strong> — PPF offers government-set rates (currently 7.1%), while FD rates vary by bank and tenure, typically ranging from 6% to 7.5% for regular citizens.</li>
        <li><strong>Lock-in Period</strong> — PPF has a mandatory 15-year lock-in, while FDs can be opened for tenures as short as 7 days to 10 years.</li>
        <li><strong>Liquidity</strong> — FDs offer more flexibility with premature withdrawal (subject to penalty). PPF allows partial withdrawals only from the 7th year.</li>
        <li><strong>Safety</strong> — Both are safe investments. PPF is backed by the Government of India, while FDs are insured by DICGC up to ₹5 lakh per depositor per bank.</li>
      </ul>`
      },
      {
        heading: "Why Post-Tax Returns Matter More Than Rate",
        body: `<p>Many investors make the mistake of comparing PPF and FD rates directly without accounting for tax. Here's why post-tax returns are what truly matters:</p>
      <ul>
        <li>A 7% FD for someone in the 30% tax bracket effectively earns only <strong>4.9% post-tax</strong>.</li>
        <li>PPF at 7.1% earns the full <strong>7.1% tax-free</strong> — effectively a much higher post-tax return.</li>
      </ul>
      <p>This means even if an FD offers a slightly higher nominal rate than PPF, PPF often delivers better post-tax returns for investors in higher tax brackets.</p>`
      },
      {
        heading: "When PPF is Better Than FD",
        body: `<p>PPF makes more sense than FD in the following situations:</p>
      <ol>
        <li><strong>You are in the 20% or 30% tax bracket</strong> — The tax-free nature of PPF makes its effective returns significantly higher than a taxable FD at a similar rate.</li>
        <li><strong>You are investing for long-term goals</strong> — PPF's 15-year tenure and compounding make it ideal for retirement or children's education planning.</li>
        <li><strong>You want Section 80C deduction</strong> — PPF contributions qualify for deduction under Section 80C, reducing your taxable income by up to ₹1.5 lakh per year.</li>
      </ol>`
      },
      {
        heading: "When FD is Better Than PPF",
        body: `<p>Fixed Deposits may be a better choice in these situations:</p>
      <ol>
        <li><strong>You need liquidity</strong> — FDs can be broken prematurely if needed, while PPF has strict withdrawal restrictions for the first 6 years.</li>
        <li><strong>You are in the 0% or 5% tax bracket</strong> — For low-income individuals, FD interest tax impact is minimal, and FDs offer more flexibility and sometimes higher rates.</li>
        <li><strong>Short-term investment horizon</strong> — If you need funds in less than 5 years, FDs are far more suitable given PPF's long lock-in period.</li>
        <li><strong>Senior citizens</strong> — Senior Citizen FDs offer higher rates (typically 0.5% more) and the interest income threshold for TDS is higher, making FDs attractive for this group.</li>
      </ol>`
      },
      {
        heading: "Why Use Our PPF vs FD Calculator?",
        body: `<p>Our calculator helps you make a confident investment decision by allowing you to:</p>
      <ul>
        <li>Get instant, accurate side-by-side comparison of PPF and FD returns</li>
        <li>See the real post-tax impact on FD returns based on your tax slab</li>
        <li>Understand which option gives you better effective returns for your situation</li>
        <li>Make an informed decision before committing your savings to either instrument</li>
      </ul>`
      }
    ],

    keywords: [
      "PPF vs FD calculator",
      "PPF vs fixed deposit comparison",
      "PPF or FD which is better",
      "PPF vs FD returns calculator",
      "PPF vs FD tax benefit",
    ],

    faqs: [
      {
        q: "Which is better — PPF or FD?",
        a: "For investors in higher tax brackets (20% or 30%), PPF is generally better due to its tax-free returns and Section 80C benefits. FD is better for short-term goals or investors who need more liquidity."
      },
      {
        q: "Is PPF interest really tax-free?",
        a: "Yes, PPF interest is completely tax-free under Section 10 of the Income Tax Act, along with the maturity amount and contributions qualifying for Section 80C deduction — a triple tax benefit."
      },
      {
        q: "What is the effective post-tax return on FD for someone in the 30% bracket?",
        a: "For someone in the 30% tax bracket, an FD offering 7% interest effectively earns only about 4.9% post-tax, making PPF at 7.1% significantly more attractive on an after-tax basis."
      },
      {
        q: "Can I invest in both PPF and FD simultaneously?",
        a: "Yes, you can invest in both PPF and FD simultaneously. Many investors use PPF for long-term tax-free compounding and FDs for short-to-medium term goals requiring more liquidity."
      },
      {
        q: "Is FD interest taxable even if I don't withdraw it?",
        a: "Yes, FD interest is taxable on an accrual basis every financial year, even if you opt for cumulative FDs where interest is paid only at maturity. You must include accrued interest in your annual income tax return."
      },
    ],

    relatedTools: [
      { label: "PPF Calculator", href: "/finance/ppf", description: 'Calculate your PPF maturity amount' },
      { label: "PPF Withdrawal Calculator", href: "/finance/ppf/ppf-withdrawal", description: 'Calculate your PPF withdrawal amount' },
      { label: "FD Calculator", href: "/finance/fd", description: "Calculate your fixed deposit returns" },
    ],
  },

  "ppf-extension": {
    ppfTypeKey: "ppf-extension" as PpfType,
    title: "PPF Extension Calculator",
    description: "Calculate your PPF returns after extending your account beyond the 15-year maturity period — completely free.",
    metaTitle: "PPF Extension Calculator – Calculate Returns After 15 Years",
    metaDescription: "Calculate your PPF returns after extending your account beyond 15 years with our free calculator. Compare extension with and without contributions instantly.",
    defaultAmount: 10000,
    minAmount: 500,
    maxAmount: 150000,
    defaultRate: 7.1,
    defaultTenure: 15,
    content: [
      {
        heading: "How to Use the PPF Extension Calculator",
        body: `<p>Calculating your PPF extension returns takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>PPF maturity amount</strong> at the end of 15 years.</li>
        <li>Select the <strong>extension type</strong> — with further contributions or without contributions.</li>
        <li>If extending with contributions, enter your <strong>planned annual contribution</strong> for the extension period.</li>
        <li>Select the <strong>extension period</strong> in 5-year blocks (5, 10, or 15 additional years).</li>
        <li>Click <strong>Calculate</strong> to instantly see your projected corpus at the end of the extension period.</li>
      </ol>
      <p>The calculator shows a year-by-year breakdown of how your PPF corpus continues to grow during the extension period.</p>`
      },
      {
        heading: "What is PPF Extension?",
        body: `<p>When your PPF account completes the mandatory 15-year lock-in period, you have the option to <strong>extend the account</strong> rather than withdrawing the maturity amount. Extension is done in blocks of 5 years, and you can extend multiple times — effectively keeping your PPF account active and earning tax-free returns indefinitely.</p>
      <p>PPF extension is particularly beneficial for investors who do not immediately need the maturity funds, since the balance continues to earn tax-free compound interest during the extension period.</p>`
      },
      {
        heading: "Two Types of PPF Extension",
        body: `<p>At maturity, you can choose between two extension options:</p>
      <ul>
        <li><strong>Extension with Contributions</strong> — You continue making annual contributions to your PPF account during the extension period, maintaining all PPF benefits including Section 80C deduction on new contributions and tax-free interest on the entire balance.</li>
        <li><strong>Extension without Contributions</strong> — You stop making new contributions but leave the existing maturity balance in the account. The balance continues to earn tax-free interest, and you can make one partial withdrawal per year without any restriction on amount during this period.</li>
      </ul>
      <p>Both options keep the entire balance and returns tax-free, making either choice significantly more beneficial than withdrawing and reinvesting in a taxable instrument.</p>`
      },
      {
        heading: "PPF Extension Rules",
        body: `<p>Key rules governing PPF account extension:</p>
      <ol>
        <li><strong>Application deadline</strong> — If you wish to extend with contributions, you must submit the extension application to your bank or post office within one year of the account's maturity date. Missing this deadline means the account automatically continues without contributions.</li>
        <li><strong>Extension block</strong> — Extensions are only available in 5-year blocks. You cannot extend for 3 or 7 years — it must be exactly 5 years at a time.</li>
        <li><strong>Withdrawals during extension with contributions</strong> — You can make one partial withdrawal per year, up to 60% of the balance at the start of each 5-year extension block.</li>
        <li><strong>Withdrawals during extension without contributions</strong> — You can withdraw any amount once per year, with no percentage restriction, providing greater flexibility.</li>
      </ol>`
      },
      {
        heading: "Should You Extend PPF or Withdraw at Maturity?",
        body: `<p>The decision depends on your financial goals and tax situation:</p>
      <ul>
        <li><strong>Extend if</strong> — You are in a higher tax bracket and don't need the funds immediately. The tax-free compounding during extension is hard to match with any alternative investment after accounting for tax.</li>
        <li><strong>Withdraw if</strong> — You have a specific financial goal requiring the funds, or you have identified a better investment opportunity that delivers higher post-tax returns than the current PPF rate.</li>
        <li><strong>Partial strategy</strong> — Withdraw a portion of the maturity amount for immediate needs and extend the remainder to continue earning tax-free returns on the balance.</li>
      </ul>`
      },
      {
        heading: "Why Use Our PPF Extension Calculator?",
        body: `<p>Our calculator helps you make the right decision at PPF maturity by allowing you to:</p>
      <ul>
        <li>Get instant projections of your PPF corpus after extension</li>
        <li>Compare returns from extension with and without contributions</li>
        <li>Understand the long-term benefit of keeping your PPF active versus withdrawing</li>
        <li>Plan the optimal withdrawal and extension strategy based on your financial goals</li>
      </ul>`
      }
    ],

    keywords: [
      "PPF extension calculator",
      "PPF account extension after 15 years",
      "PPF extension with contribution calculator",
      "PPF extension without contribution calculator",
      "PPF extension rules India",
    ],

    faqs: [
      {
        q: "Can I extend my PPF account after 15 years?",
        a: "Yes, you can extend your PPF account after the 15-year maturity in blocks of 5 years, either with continued annual contributions or without contributions, while the balance continues to earn tax-free interest."
      },
      {
        q: "What is the difference between PPF extension with and without contributions?",
        a: "Extension with contributions allows you to keep making annual deposits and claim Section 80C deductions, with limited partial withdrawal options. Extension without contributions stops new deposits but allows more flexible annual withdrawals from the balance."
      },
      {
        q: "How many times can I extend my PPF account?",
        a: "There is no limit on the number of times you can extend your PPF account. You can keep extending in 5-year blocks indefinitely, as long as you submit the required application within one year of each maturity date."
      },
      {
        q: "Is the interest earned during PPF extension taxable?",
        a: "No, the interest earned during the PPF extension period remains completely tax-free, just like during the original 15-year tenure. This is one of the key advantages of extending rather than withdrawing and reinvesting."
      },
      {
        q: "What happens if I miss the PPF extension application deadline?",
        a: "If you miss the one-year window to apply for extension with contributions, your account automatically continues as an extension without contributions. The balance still earns tax-free interest, but you cannot make new deposits."
      },
    ],

    relatedTools: [
      { label: "PPF Calculator", href: "/finance/ppf", description: 'Calculate your PPF maturity amount' },
      { label: "PPF Withdrawal Calculator", href: "/finance/ppf/ppf-withdrawal", description: 'Calculate your PPF withdrawal amount' },
      { label: "PPF Interest Calculator", href: "/finance/ppf/ppf-interest-calculator", description: "Calculate PPF interest earned year by year" },
    ],
  },
}

export const slugToPpfType: Record<string, PpfType> = {
  "ppf-withdrawal": "ppf-withdrawal",
  "ppf-interest-calculator": "ppf-interest-calculator",
  "ppf-vs-fd": "ppf-vs-fd",
  "ppf-extension": "ppf-extension",
}

export const validPpfSlugs = Object.keys(slugToPpfType)