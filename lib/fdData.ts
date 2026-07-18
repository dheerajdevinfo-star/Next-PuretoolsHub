export type FdType = "fd" | "tax-saver-fd" | "senior-citizen-fd" | "recurring-deposit"

export interface ContentSection {
  heading: string
  body: string // HTML ya Markdown string
}

export interface BankRate {
  name: string
  rate: number
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

export interface FdTypeConfig {
  // Basic Info
  fdTypeKey: FdType
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

  // Interest Rate
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

  // Compounding frequency options
  compounding: string[]

  // Bank Suggestions
  banks: BankRate[]

  // Article Content
  content: ContentSection[]

  // FAQs
  faqs: FAQ[]

  // Related Calculators
  relatedTools: RelatedTool[]
}

export const fdConfig: Record<FdType, FdTypeConfig> = {

  // /finance/fd → main page
  fd: {
    fdTypeKey: "fd" as FdType,
    title: "FD Calculator",
    description: "Calculate your fixed deposit maturity amount and total interest earned instantly — completely free.",
    metaTitle: "FD Calculator – Calculate Fixed Deposit Returns Online Free",
    metaDescription: "Calculate your fixed deposit maturity amount and interest earned instantly with our free FD calculator. Compare returns across different tenures and interest rates.",
    defaultAmount: 100000,
    minAmount: 1000,
    maxAmount: 10000000,
    step: 1000,
    defaultRate: 7.0,
    minRate: 2,
    maxRate: 15,
    defaultTenure: 2,
    minTenure: 1,
    maxTenure: 10,
    amountLabel: "FD amount",
    amountHints: ["₹1K", "₹1 crore"],
    compounding: ["Monthly", "Quarterly", "Half-yearly", "Yearly"],
    banks: [
      { name: "SBI", rate: 7.00 },
      { name: "HDFC", rate: 7.25 },
      { name: "ICICI", rate: 7.20 },
      { name: "Axis", rate: 7.10 },
    ],
    content: [
      {
        heading: "How to Use the FD Calculator",
        body: `<p>Calculating your FD returns takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>deposit amount</strong> (the principal amount you want to invest in the fixed deposit).</li>
        <li>Enter the <strong>interest rate</strong> offered by your bank for the chosen tenure.</li>
        <li>Select the <strong>investment tenure</strong> in years and months.</li>
        <li>Select the <strong>compounding frequency</strong> — monthly, quarterly, half-yearly, or annually.</li>
        <li>Click <strong>Calculate</strong> to instantly see your maturity amount, total interest earned, and effective annual yield.</li>
      </ol>
      <p>The calculator also shows a year-by-year breakdown of how your FD grows over the investment period.</p>`
      },
      {
        heading: "What is a Fixed Deposit?",
        body: `<p>A <strong>Fixed Deposit (FD)</strong> is one of the most popular and safest investment instruments in India, offered by banks and non-banking financial companies (NBFCs). You deposit a lump sum amount for a fixed tenure at a predetermined interest rate, and receive the principal along with accumulated interest at maturity.</p>
      <p>Unlike market-linked investments, FDs offer guaranteed returns regardless of market conditions, making them ideal for conservative investors or for parking funds needed in the short to medium term.</p>`
      },
      {
        heading: "FD Interest Calculation Formula",
        body: `<p>FD interest is calculated differently based on whether it is a simple interest or compound interest FD:</p>
      <p><strong>For Compound Interest FD (most common):</strong></p>
      <p class="formula">A = P × (1 + r/n)^(n×t)</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>A</strong> = Maturity amount</li>
        <li><strong>P</strong> = Principal deposit amount</li>
        <li><strong>r</strong> = Annual interest rate (in decimal)</li>
        <li><strong>n</strong> = Number of times interest is compounded per year</li>
        <li><strong>t</strong> = Tenure in years</li>
      </ul>
      <p>For example, if you deposit ₹5,00,000 at 7% per annum compounded quarterly for 3 years, your maturity amount would be approximately ₹6,16,245, with total interest earned of ₹1,16,245.</p>`
      },
      {
        heading: "Factors That Affect Your FD Returns",
        body: `<p>Several factors determine how much your FD will earn:</p>
      <ol>
        <li><strong>Principal Amount</strong> — A higher deposit amount results in proportionally higher absolute interest earnings.</li>
        <li><strong>Interest Rate</strong> — Rates vary by bank, tenure, and depositor category. Senior citizens typically receive 0.25% to 0.75% higher rates.</li>
        <li><strong>Tenure</strong> — Longer tenures often attract higher interest rates, though this varies by bank policy.</li>
        <li><strong>Compounding Frequency</strong> — More frequent compounding (monthly vs annually) results in slightly higher effective returns for the same nominal rate.</li>
        <li><strong>Tax on Interest</strong> — FD interest is fully taxable as per your income tax slab, which significantly impacts your effective post-tax returns.</li>
      </ol>`
      },
      {
        heading: "Types of Fixed Deposits",
        body: `<p>Banks offer several types of FDs to suit different investor needs:</p>
      <ul>
        <li><strong>Regular FD</strong> — Standard fixed deposit available to all individuals, with interest rates varying by tenure and bank.</li>
        <li><strong>Senior Citizen FD</strong> — Offers higher interest rates (typically 0.25% to 0.75% more) for depositors aged 60 and above.</li>
        <li><strong>Tax Saver FD</strong> — 5-year lock-in FD qualifying for Section 80C deduction up to ₹1.5 lakh, but with no premature withdrawal allowed.</li>
        <li><strong>Recurring Deposit (RD)</strong> — Allows monthly contributions instead of a lump sum, building a corpus gradually over time.</li>
        <li><strong>Flexi FD</strong> — Linked to your savings account, allowing automatic sweep of excess funds into FD while maintaining liquidity.</li>
      </ul>`
      },
      {
        heading: "Why Use Our FD Calculator?",
        body: `<p>Our calculator helps you plan your fixed deposit investments smartly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate FD maturity amount calculations</li>
        <li>Compare returns across different tenures and interest rates</li>
        <li>Understand the impact of compounding frequency on your returns</li>
        <li>Make informed decisions about where and how long to park your savings</li>
      </ul>`
      }
    ],

    keywords: [
      "FD calculator",
      "fixed deposit calculator",
      "FD calculator online India",
      "FD maturity calculator",
      "fixed deposit interest calculator",
    ],

    faqs: [
      {
        q: "What is a fixed deposit?",
        a: "A fixed deposit is a savings instrument offered by banks and NBFCs where you deposit a lump sum for a fixed tenure at a predetermined interest rate, earning guaranteed returns at maturity."
      },
      {
        q: "How is FD interest calculated?",
        a: "FD interest is typically calculated using the compound interest formula A = P × (1 + r/n)^(n×t), where P is the principal, r is the annual rate, n is compounding frequency, and t is tenure in years."
      },
      {
        q: "Is FD interest taxable?",
        a: "Yes, FD interest is fully taxable as per your applicable income tax slab. TDS is deducted by the bank if your annual FD interest exceeds ₹40,000 (₹50,000 for senior citizens)."
      },
      {
        q: "Can I break my FD before maturity?",
        a: "Yes, most FDs can be broken prematurely, but a penalty (typically 0.5% to 1% reduction in interest rate) is applied. Tax saver FDs are an exception and cannot be broken before the 5-year lock-in."
      },
      {
        q: "What is the maximum deposit insurance on FDs?",
        a: "FDs are insured by the Deposit Insurance and Credit Guarantee Corporation (DICGC) up to ₹5 lakh per depositor per bank, covering both principal and interest across all your accounts in that bank."
      },
    ],

    relatedTools: [
      { label: "Tax Saver FD Calculator", href: "/finance/fd/tax-saver-fd", description: 'Calculate returns on tax-saving fixed deposits' },
      { label: "Senior Citizen FD Calculator", href: "/finance/fd/senior-citizen-fd", description: 'Calculate FD returns for senior citizens' },
      { label: "Recurring Deposit Calculator", href: "/finance/fd/recurring-deposit", description: "Calculate your RD maturity amount" },
    ],
  },

  // /finance/fd/tax-saver-fd
  "tax-saver-fd": {
    fdTypeKey: "tax-saver-fd" as FdType,
    title: "Tax Saver FD Calculator",
    description: "Calculate your tax saver fixed deposit maturity amount and Section 80C tax savings instantly — completely free.",

    metaTitle: "Tax Saver FD Calculator – Calculate 80C FD Returns Free",
    metaDescription: "Calculate your tax saver fixed deposit returns instantly with our free calculator. Find maturity amount and tax savings on your 5-year tax saving FD.",
    defaultAmount: 150000,
    minAmount: 1000,
    maxAmount: 150000,  // 80C max limit
    step: 1000,
    defaultRate: 7.0,
    minRate: 2,
    maxRate: 15,
    defaultTenure: 5,       // fixed 5 year lock-in
    minTenure: 5,
    maxTenure: 5,
    amountLabel: "Investment amount (max ₹1.5L)",
    amountHints: ["₹1K", "₹1.5 lakh"],
    compounding: ["Quarterly", "Yearly"],
    banks: [
      { name: "SBI", rate: 6.50 },
      { name: "HDFC", rate: 7.00 },
      { name: "ICICI", rate: 7.00 },
      { name: "Axis", rate: 7.00 },
    ],
    content: [
      {
        heading: "How to Use the Tax Saver FD Calculator",
        body: `<p>Calculating your tax saver FD returns takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>deposit amount</strong> (maximum ₹1,50,000 qualifies for Section 80C deduction).</li>
        <li>Enter the <strong>interest rate</strong> offered by your bank for the 5-year tax saver FD.</li>
        <li>Select your <strong>income tax slab</strong> to calculate your actual tax savings from the Section 80C deduction.</li>
        <li>Click <strong>Calculate</strong> to instantly see your maturity amount, total interest earned, and effective tax saved.</li>
      </ol>
      <p>The calculator shows both gross and post-tax returns, giving you a realistic picture of your effective earnings.</p>`
      },
      {
        heading: "What is a Tax Saver FD?",
        body: `<p>A <strong>Tax Saver Fixed Deposit</strong> is a special type of bank fixed deposit with a mandatory 5-year lock-in period that qualifies for tax deduction under <strong>Section 80C</strong> of the Income Tax Act. Investments up to ₹1,50,000 per financial year in a tax saver FD are eligible for deduction from your taxable income, reducing your tax liability.</p>
      <p>Tax saver FDs are offered by most major banks and are one of the simplest Section 80C instruments available, requiring no market knowledge or ongoing management — making them popular among conservative, first-time, and senior citizen investors.</p>`
      },
      {
        heading: "Tax Saver FD Interest Calculation",
        body: `<p>Tax saver FD interest is calculated using the standard compound interest formula:</p>
      <p class="formula">A = P × (1 + r/n)^(n×t)</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>A</strong> = Maturity amount</li>
        <li><strong>P</strong> = Principal deposit amount</li>
        <li><strong>r</strong> = Annual interest rate (in decimal)</li>
        <li><strong>n</strong> = Compounding frequency per year</li>
        <li><strong>t</strong> = 5 years (fixed tenure)</li>
      </ul>
      <p>For example, if you invest ₹1,50,000 in a tax saver FD at 7% interest compounded quarterly, your maturity amount after 5 years would be approximately ₹2,12,372. If you are in the 30% tax bracket, you also save ₹46,800 in tax from the Section 80C deduction — making the effective return significantly higher.</p>`
      },
      {
        heading: "Key Features of Tax Saver FD",
        body: `<p>Tax saver FDs have several unique features that distinguish them from regular FDs:</p>
      <ol>
        <li><strong>Section 80C Benefit</strong> — Deposits up to ₹1,50,000 qualify for tax deduction, reducing your taxable income for the year.</li>
        <li><strong>5-Year Lock-in</strong> — Unlike regular FDs, tax saver FDs cannot be broken prematurely under any circumstances.</li>
        <li><strong>No Loan Against FD</strong> — You cannot take a loan against a tax saver FD during the lock-in period.</li>
        <li><strong>Taxable Interest</strong> — Despite the Section 80C benefit on the principal, the interest earned is fully taxable as per your applicable slab rate.</li>
        <li><strong>Joint Account Option</strong> — Tax saver FDs can be held jointly, but the Section 80C benefit is available only to the first holder.</li>
      </ol>`
      },
      {
        heading: "Tax Saver FD vs Other 80C Investments",
        body: `<p>When choosing between Section 80C options, here's how tax saver FD compares:</p>
      <ul>
        <li><strong>Tax Saver FD vs PPF</strong> — PPF offers tax-free returns with a longer 15-year tenure, while tax saver FD offers taxable returns with a shorter 5-year lock-in and guaranteed rates. PPF is generally more tax-efficient for higher bracket investors.</li>
        <li><strong>Tax Saver FD vs ELSS</strong> — ELSS has a shorter 3-year lock-in and potential for higher market-linked returns, while tax saver FD offers guaranteed returns with no market risk.</li>
        <li><strong>Tax Saver FD vs NSC</strong> — Both have similar structures, but NSC interest is reinvested and qualifies for 80C each year, while tax saver FD interest is paid out or compounded without additional 80C benefit.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Tax Saver FD Calculator?",
        body: `<p>Our calculator helps you evaluate your tax saver FD investment by allowing you to:</p>
      <ul>
        <li>Get instant, accurate maturity amount calculations</li>
        <li>See your actual tax savings based on your income slab</li>
        <li>Calculate your effective post-tax returns after accounting for interest taxation</li>
        <li>Compare tax saver FD returns with other Section 80C investment options</li>
      </ul>`
      }
    ],

    keywords: [
      "tax saver FD calculator",
      "tax saving fixed deposit calculator",
      "80C FD calculator",
      "5 year tax saver FD calculator",
      "tax saver FD interest rate calculator",
    ],

    faqs: [
      {
        q: "What is a tax saver FD?",
        a: "A tax saver FD is a fixed deposit with a mandatory 5-year lock-in that qualifies for Section 80C tax deduction on deposits up to ₹1,50,000 per financial year."
      },
      {
        q: "Is the interest on tax saver FD tax-free?",
        a: "No, only the principal investment qualifies for Section 80C deduction. The interest earned on a tax saver FD is fully taxable as per your applicable income tax slab rate."
      },
      {
        q: "Can I break a tax saver FD before 5 years?",
        a: "No, tax saver FDs cannot be broken prematurely under any circumstances. The 5-year lock-in is mandatory, and no loan can be taken against the deposit during this period."
      },
      {
        q: "How much tax can I save with a tax saver FD?",
        a: "Your tax savings depend on your slab rate. On a ₹1,50,000 investment, you save ₹7,500 in the 5% bracket, ₹30,000 in the 20% bracket, and ₹46,800 in the 30% bracket (including cess)."
      },
      {
        q: "Is tax saver FD better than PPF for tax saving?",
        a: "PPF is generally more tax-efficient since its returns are completely tax-free, while tax saver FD interest is taxable. However, tax saver FD has a shorter 5-year lock-in compared to PPF's 15 years, making it better for medium-term goals."
      },
    ],

    relatedTools: [
      { label: "FD Calculator", href: "/finance/fd", description: 'Calculate your fixed deposit returns' },
      { label: "Senior Citizen FD Calculator", href: "/finance/fd/senior-citizen-fd", description: 'Calculate FD returns for senior citizens' },
      { label: "PPF Calculator", href: "/finance/ppf", description: "Compare with PPF returns" },
    ],
  },

  // /finance/fd/senior-citizen-fd
  "senior-citizen-fd": {
    fdTypeKey: "senior-citizen-fd" as FdType,
    title: "Senior Citizen FD Calculator",
    description: "Calculate fixed deposit returns with the higher interest rates available exclusively for senior citizens — completely free.",

    metaTitle: "Senior Citizen FD Calculator – Calculate Higher FD Returns",
    metaDescription: "Calculate your senior citizen fixed deposit returns instantly with our free calculator. Find maturity amount with higher interest rates available for senior citizens.",
    defaultAmount: 500000,
    minAmount: 1000,
    maxAmount: 10000000,
    step: 1000,
    defaultRate: 7.5,   // 0.5% extra typically
    minRate: 2,
    maxRate: 15,
    defaultTenure: 3,
    minTenure: 1,
    maxTenure: 10,
    amountLabel: "FD amount",
    amountHints: ["₹1K", "₹1 crore"],
    compounding: ["Monthly", "Quarterly", "Half-yearly", "Yearly"],
    banks: [
      { name: "SBI", rate: 7.50 },
      { name: "HDFC", rate: 7.75 },
      { name: "ICICI", rate: 7.70 },
      { name: "Axis", rate: 7.60 },
    ],
    content: [
      {
        heading: "How to Use the Senior Citizen FD Calculator",
        body: `<p>Calculating your senior citizen FD returns takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>deposit amount</strong> — the principal you want to invest.</li>
        <li>Enter the <strong>senior citizen interest rate</strong> offered by your preferred bank (typically 0.25% to 0.75% higher than regular FD rates).</li>
        <li>Select your <strong>investment tenure</strong> in years and months.</li>
        <li>Select the <strong>compounding frequency</strong> — monthly, quarterly, half-yearly, or annually.</li>
        <li>Click <strong>Calculate</strong> to instantly see your maturity amount and total interest earned.</li>
      </ol>
      <p>The calculator also shows how much extra you earn compared to a regular FD, purely due to the higher senior citizen interest rate.</p>`
      },
      {
        heading: "What is a Senior Citizen FD?",
        body: `<p>A <strong>Senior Citizen Fixed Deposit</strong> is a special fixed deposit category offered by banks and NBFCs exclusively to individuals aged 60 years and above. The primary benefit is a <strong>higher interest rate</strong> — typically 0.25% to 0.75% per annum more than the regular FD rate — making it one of the most attractive low-risk investment options for retirees.</p>
      <p>Senior citizen FDs are particularly suitable for retired individuals who depend on interest income for their monthly expenses, since they offer guaranteed returns, capital protection, and regular interest payout options.</p>`
      },
      {
        heading: "Senior Citizen FD Interest Rate Advantage",
        body: `<p>The additional interest rate for senior citizens may seem small, but it makes a meaningful difference over time:</p>
      <p class="formula">Extra Interest = Principal × Additional Rate × Tenure</p>
      <p>For example, if a regular FD offers 7% and a senior citizen FD offers 7.5% on a deposit of ₹10,00,000 for 5 years:</p>
      <ul>
        <li><strong>Regular FD maturity</strong> — approximately ₹14,14,778</li>
        <li><strong>Senior Citizen FD maturity</strong> — approximately ₹14,35,629</li>
        <li><strong>Extra earnings</strong> — approximately ₹20,851 over 5 years</li>
      </ul>
      <p>Over longer tenures and larger deposit amounts, this difference becomes even more significant.</p>`
      },
      {
        heading: "Key Benefits of Senior Citizen FD",
        body: `<p>Senior citizen FDs offer several advantages tailored to retiree needs:</p>
      <ol>
        <li><strong>Higher Interest Rate</strong> — 0.25% to 0.75% additional rate over regular FD rates, varying by bank and tenure.</li>
        <li><strong>Regular Income Option</strong> — Monthly or quarterly interest payout option for steady income to meet living expenses.</li>
        <li><strong>Higher TDS Threshold</strong> — TDS on FD interest is deducted only if annual interest exceeds ₹50,000 for senior citizens, compared to ₹40,000 for regular depositors.</li>
        <li><strong>Section 80TTB Deduction</strong> — Senior citizens can claim deduction up to ₹50,000 on interest income from FDs under Section 80TTB, reducing their tax liability.</li>
        <li><strong>Capital Safety</strong> — Deposits are insured by DICGC up to ₹5 lakh per depositor per bank.</li>
      </ol>`
      },
      {
        heading: "Tax on Senior Citizen FD Interest",
        body: `<p>While senior citizen FDs offer a higher rate, the interest earned is taxable. Here's what senior citizens need to know:</p>
      <ul>
        <li><strong>TDS threshold</strong> — TDS is deducted only if annual FD interest from a single bank exceeds ₹50,000, giving senior citizens more breathing room than regular depositors.</li>
        <li><strong>Section 80TTB</strong> — Senior citizens can claim a deduction of up to ₹50,000 on total interest income from deposits under Section 80TTB, effectively making up to ₹50,000 of FD interest tax-free.</li>
        <li><strong>Form 15H</strong> — Senior citizens with total income below the taxable limit can submit Form 15H to their bank to avoid TDS deduction on FD interest.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Senior Citizen FD Calculator?",
        body: `<p>Our calculator helps senior citizens plan their savings smartly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate maturity amount calculations at senior citizen rates</li>
        <li>Compare returns across different tenures and banks</li>
        <li>Understand the extra earnings from the senior citizen rate advantage</li>
        <li>Plan a reliable income stream from FD interest payouts for retirement expenses</li>
      </ul>`
      }
    ],

    keywords: [
      "senior citizen FD calculator",
      "senior citizen fixed deposit calculator",
      "senior citizen FD interest rate calculator",
      "best FD for senior citizens",
      "senior citizen FD returns calculator",
    ],

    faqs: [
      {
        q: "What is the extra interest rate for senior citizens on FDs?",
        a: "Most banks offer senior citizens an additional 0.25% to 0.75% per annum over regular FD rates. The exact additional rate varies by bank and the chosen tenure."
      },
      {
        q: "Who qualifies for senior citizen FD rates?",
        a: "Individuals aged 60 years and above qualify for senior citizen FD rates at most banks. Some banks also offer super senior citizen rates for those aged 80 and above."
      },
      {
        q: "Is FD interest taxable for senior citizens?",
        a: "Yes, FD interest is taxable for senior citizens as per their applicable slab rate. However, they can claim a deduction of up to ₹50,000 on interest income under Section 80TTB, and submit Form 15H to avoid TDS if total income is below the taxable limit."
      },
      {
        q: "What is the TDS threshold for senior citizen FDs?",
        a: "TDS on FD interest for senior citizens is deducted only if the annual interest from a single bank exceeds ₹50,000, compared to ₹40,000 for regular depositors."
      },
      {
        q: "Can senior citizens break their FD before maturity?",
        a: "Yes, senior citizen FDs (except tax saver FDs) can be broken prematurely, usually with a penalty of 0.5% to 1% reduction in the applicable interest rate, depending on the bank's policy."
      },
    ],

    relatedTools: [
      { label: "FD Calculator", href: "/finance/fd", description: 'Calculate regular fixed deposit returns' },
      { label: "Tax Saver FD Calculator", href: "/finance/fd/tax-saver-fd", description: 'Calculate returns on tax-saving fixed deposits' },
      { label: "Recurring Deposit Calculator", href: "/finance/fd/recurring-deposit", description: "Calculate your RD maturity amount" },
    ],
  },

  // /finance/fd/recurring-deposit
  "recurring-deposit": {
    fdTypeKey: "recurring-deposit" as FdType,
    title: "Recurring Deposit Calculator",
    description: "Calculate your recurring deposit maturity amount and total interest earned on monthly contributions instantly — completely free.",

    metaTitle: "Recurring Deposit Calculator – Calculate RD Maturity Free",
    metaDescription: "Calculate your recurring deposit maturity amount and interest earned instantly with our free RD calculator. Find returns on your monthly RD investment in seconds.",
    defaultAmount: 5000,   // monthly deposit
    minAmount: 100,
    maxAmount: 500000,
    step: 100,
    defaultRate: 6.5,
    minRate: 2,
    maxRate: 15,
    defaultTenure: 3,
    minTenure: 1,
    maxTenure: 10,
    amountLabel: "Monthly deposit",
    amountHints: ["₹100", "₹5 lakh"],
    compounding: ["Quarterly"],  // RD always quarterly
    banks: [
      { name: "SBI", rate: 6.50 },
      { name: "Post Office", rate: 6.70 },
      { name: "HDFC", rate: 7.00 },
      { name: "ICICI", rate: 6.90 },
    ],
    content: [
      {
        heading: "How to Use the Recurring Deposit Calculator",
        body: `<p>Calculating your RD maturity amount takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>monthly deposit amount</strong> — the fixed amount you plan to invest every month.</li>
        <li>Enter the <strong>annual interest rate</strong> offered by your bank for the chosen RD tenure.</li>
        <li>Select the <strong>investment tenure</strong> in months or years.</li>
        <li>Click <strong>Calculate</strong> to instantly see your total deposited amount, interest earned, and final maturity amount.</li>
      </ol>
      <p>The calculator also shows a month-by-month breakdown of how your RD corpus grows over the investment period.</p>`
      },
      {
        heading: "What is a Recurring Deposit?",
        body: `<p>A <strong>Recurring Deposit (RD)</strong> is a savings instrument offered by banks and post offices where you deposit a fixed amount every month for a predetermined tenure, earning interest on your growing balance. At maturity, you receive the total deposited amount along with the accumulated interest.</p>
      <p>RDs combine the discipline of regular saving with the safety and guaranteed returns of a fixed deposit, making them ideal for salaried individuals who want to build a corpus gradually from their monthly income without investing a large lump sum upfront.</p>`
      },
      {
        heading: "Recurring Deposit Interest Calculation Formula",
        body: `<p>RD maturity amount is calculated using the following formula:</p>
      <p class="formula">M = R × [(1 + i)^n − 1] / (1 − (1 + i)^(-1/3))</p>
      <p><strong>A simpler approach used by most calculators:</strong></p>
      <ul>
        <li>Each monthly installment is treated as a separate deposit that earns compound interest for the remaining tenure.</li>
        <li>The first installment earns interest for the full tenure, the second for one month less, and so on.</li>
        <li>The maturity amount is the sum of all these individual installment maturity values.</li>
      </ul>
      <p>For example, if you deposit ₹5,000 per month for 3 years at 7% interest compounded quarterly, your total investment of ₹1,80,000 would grow to approximately ₹2,01,525, earning interest of around ₹21,525.</p>`
      },
      {
        heading: "Key Features of Recurring Deposit",
        body: `<p>RDs have several features that make them a popular savings choice:</p>
      <ol>
        <li><strong>Fixed Monthly Contribution</strong> — You commit to a fixed monthly deposit, building saving discipline over time.</li>
        <li><strong>Flexible Tenure</strong> — RDs are available for tenures ranging from 6 months to 10 years, depending on the bank.</li>
        <li><strong>Guaranteed Returns</strong> — Like FDs, RD returns are fixed and guaranteed, unaffected by market fluctuations.</li>
        <li><strong>Loan Against RD</strong> — Most banks allow you to take a loan of up to 80% to 90% of your RD balance, providing liquidity without breaking the deposit.</li>
        <li><strong>Premature Withdrawal</strong> — RDs can be closed before maturity, subject to a penalty similar to fixed deposits.</li>
      </ol>`
      },
      {
        heading: "RD vs SIP — Which is Better?",
        body: `<p>Both RD and SIP involve regular monthly investments, but they differ significantly:</p>
      <ul>
        <li><strong>Returns</strong> — RDs offer fixed, guaranteed returns (currently around 6% to 7.5%), while SIPs in equity mutual funds have historically delivered higher returns (10% to 14%) over the long term, though with market-linked risk.</li>
        <li><strong>Risk</strong> — RDs carry no market risk and offer capital protection. SIP returns depend on market performance and can fluctuate.</li>
        <li><strong>Tax</strong> — RD interest is fully taxable. SIP returns in equity funds held over one year are taxed at 10% LTCG (above ₹1 lakh), making SIPs more tax-efficient for long-term investors.</li>
        <li><strong>Ideal For</strong> — RDs are better for short-term goals and conservative investors. SIPs are better for long-term wealth creation and investors comfortable with market volatility.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Recurring Deposit Calculator?",
        body: `<p>Our calculator helps you plan your monthly savings smartly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate RD maturity amount calculations</li>
        <li>Compare returns across different monthly amounts, tenures, and interest rates</li>
        <li>Understand exactly how much interest your regular savings will earn</li>
        <li>Plan short to medium-term financial goals with confidence</li>
      </ul>`
      }
    ],

    keywords: [
      "recurring deposit calculator",
      "RD calculator online",
      "RD maturity calculator",
      "recurring deposit interest calculator",
      "RD calculator India",
    ],

    faqs: [
      {
        q: "What is a recurring deposit?",
        a: "A recurring deposit is a savings instrument where you deposit a fixed amount every month for a predetermined tenure, earning guaranteed interest on your growing balance and receiving the total amount plus interest at maturity."
      },
      {
        q: "How is RD maturity amount calculated?",
        a: "Each monthly installment earns compound interest for the remaining tenure. The maturity amount is the sum of all individual installment maturity values, calculated using quarterly compounding in most banks."
      },
      {
        q: "Is RD interest taxable?",
        a: "Yes, RD interest is fully taxable as per your applicable income tax slab. TDS is deducted by the bank if your annual interest from RD and FD combined exceeds ₹40,000 (₹50,000 for senior citizens)."
      },
      {
        q: "Can I withdraw my RD before maturity?",
        a: "Yes, most banks allow premature closure of RDs, usually with a penalty of 0.5% to 1% reduction in the applicable interest rate. Some banks may also have a minimum lock-in period before premature withdrawal is allowed."
      },
      {
        q: "What is the minimum monthly deposit for an RD?",
        a: "The minimum monthly deposit for an RD varies by bank, but most banks allow RDs starting from as low as ₹100 per month, making it accessible for investors at all income levels."
      },
    ],

    relatedTools: [
      { label: "FD Calculator", href: "/finance/fd", description: 'Calculate fixed deposit returns on lump sum' },
      { label: "Tax Saver FD Calculator", href: "/finance/fd/tax-saver-fd", description: 'Calculate returns on tax-saving fixed deposits' },
      { label: "SIP Calculator", href: "/finance/sip", description: "Compare with mutual fund SIP returns" },
    ],
  },
}

export const slugToFdType: Record<string, FdType> = {
  "fd": "fd",
  "tax-saver-fd": "tax-saver-fd",
  "senior-citizen-fd": "senior-citizen-fd",
  "recurring-deposit": "recurring-deposit",
}

export const validFdSlugs = Object.keys(slugToFdType)