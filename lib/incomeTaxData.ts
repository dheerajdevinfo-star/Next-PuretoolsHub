export type TaxType =
  | "income-tax"
  | "old-vs-new-regime"
  | "tds-calculator"
  | "advance-tax"
  | "tax-slab"

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

export interface TaxTypeConfig {
  // Basic Info
  taxTypeKey: TaxType
  title: string
  description: string
  keywords: string[]

  // SEO
  metaTitle: string
  metaDescription: string

  // Article Content
  content: ContentSection[]

  // FAQs
  faqs: FAQ[]

  // Related Calculators
  relatedTools: RelatedTool[]
}

export const taxConfig: Record<TaxType, TaxTypeConfig> = {

  "income-tax": {
    taxTypeKey: "income-tax" as TaxType,
    title: "Income Tax Calculator",
    description: "Calculate your income tax liability instantly and compare the old vs new tax regime — completely free.",
    metaTitle: "Income Tax Calculator – Calculate Your Tax Online Free",
    metaDescription: "Calculate your income tax instantly with our free calculator. Compare old vs new tax regime and find your exact tax liability for FY 2025-26.",
    content: [
      {
        heading: "How to Use the Income Tax Calculator",
        body: `<p>Calculating your income tax takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>annual income</strong> from salary, business, or other sources.</li>
        <li>Enter applicable <strong>deductions</strong> such as Section 80C investments, HRA, or standard deduction.</li>
        <li>Select the <strong>tax regime</strong> you want to calculate under — old or new.</li>
        <li>Click <strong>Calculate</strong> to instantly see your tax liability, applicable slab rates, and take-home income.</li>
      </ol>
      <p>The calculator also lets you compare both regimes side by side, helping you choose the one that results in lower tax outgo.</p>`
      },
      {
        heading: "What is Income Tax?",
        body: `<p>Income tax is a <strong>direct tax</strong> levied by the Government of India on the income earned by individuals, businesses, and other entities during a financial year. The tax is calculated based on income slabs, with higher income attracting higher tax rates under a progressive taxation system.</p>
      <p>Every taxpayer must calculate their tax liability and file an Income Tax Return (ITR) before the due date, even if tax has already been deducted at source (TDS) by an employer or other payer.</p>`
      },
      {
        heading: "Old vs New Tax Regime",
        body: `<p>Taxpayers in India can choose between two tax regimes:</p>
      <ul>
        <li><strong>Old Tax Regime</strong> — Offers higher tax slabs but allows numerous deductions and exemptions, such as Section 80C, HRA, LTA, and home loan interest.</li>
        <li><strong>New Tax Regime</strong> — Offers lower tax slabs and rates but removes most deductions and exemptions, except for a few like the standard deduction.</li>
      </ul>
      <p>Which regime is better depends on how many deductions you can claim. Taxpayers with significant investments, HRA, or home loan interest often benefit more from the old regime, while those with fewer deductions often save more under the new regime.</p>`
      },
      {
        heading: "Income Tax Slabs (New Regime – FY 2025-26)",
        body: `<p>Under the new tax regime, income is taxed at the following slab rates:</p>
      <ul>
        <li>Up to ₹3,00,000 — Nil</li>
        <li>₹3,00,001 to ₹7,00,000 — 5%</li>
        <li>₹7,00,001 to ₹10,00,000 — 10%</li>
        <li>₹10,00,001 to ₹12,00,000 — 15%</li>
        <li>₹12,00,001 to ₹15,00,000 — 20%</li>
        <li>Above ₹15,00,000 — 30%</li>
      </ul>
      <p>Note: Tax slabs are subject to change with each Union Budget. Always verify the latest slabs on the official Income Tax Department website before filing your return.</p>`
      },
      {
        heading: "Factors That Affect Your Income Tax",
        body: `<p>Several factors determine your final tax liability:</p>
      <ol>
        <li><strong>Total Income</strong> — Higher income generally results in a higher tax liability due to progressive slab rates.</li>
        <li><strong>Deductions and Exemptions</strong> — Claiming eligible deductions under the old regime can significantly reduce taxable income.</li>
        <li><strong>Tax Regime Chosen</strong> — The old and new regimes can result in very different tax outcomes for the same income level.</li>
        <li><strong>Source of Income</strong> — Salary, business income, capital gains, and other income types may be taxed differently.</li>
      </ol>`
      },
      {
        heading: "Why Use Our Income Tax Calculator?",
        body: `<p>Our calculator helps you plan your taxes smartly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate tax liability calculations</li>
        <li>Compare your tax outgo under both old and new regimes</li>
        <li>Understand exactly which deductions can lower your tax burden</li>
        <li>Make informed decisions before filing your income tax return</li>
      </ul>`
      }
    ],

    keywords: [
      "income tax calculator",
      "income tax calculator India",
      "income tax calculator 2025-26",
      "online income tax calculator",
      "old vs new tax regime calculator",
    ],
    faqs: [
      {
        q: "How is income tax calculated in India?",
        a: "Income tax is calculated by applying slab-based tax rates to your total taxable income after subtracting eligible deductions and exemptions, based on the tax regime you choose."
      },
      {
        q: "What is the difference between the old and new tax regime?",
        a: "The old regime offers higher tax slabs but allows deductions like Section 80C and HRA. The new regime offers lower slabs but removes most deductions and exemptions."
      },
      {
        q: "Which tax regime should I choose?",
        a: "If you have significant deductions like home loan interest, HRA, or 80C investments, the old regime may be beneficial. If you have fewer deductions, the new regime often results in lower tax."
      },
      {
        q: "Is income up to ₹7 lakh tax-free under the new regime?",
        a: "Under the new regime, individuals with taxable income up to ₹7 lakh can claim a tax rebate under Section 87A, effectively making their tax liability nil, subject to prevailing rules."
      },
      {
        q: "Do I need to file an income tax return if TDS is already deducted?",
        a: "Yes, filing an ITR is mandatory if your income exceeds the basic exemption limit, even if TDS has already been deducted by your employer or other payer."
      },
    ],

    relatedTools: [
      { label: "Old vs New Regime Calculator", href: "/finance/income-tax/old-vs-new-regime", description: 'Compare tax liability under both regimes' },
      { label: "TDS Calculator", href: "/finance/income-tax/tds-calculator", description: 'Calculate TDS deduction on your income' },
      { label: "Tax Slab Calculator", href: "/finance/income-tax/tax-slab", description: "Check applicable income tax slabs" },
    ],
  },

  "old-vs-new-regime": {
    taxTypeKey: "old-vs-new-regime" as TaxType,
    title: "Old vs New Tax Regime Calculator",
    description: "Compare your tax liability under the old and new tax regimes instantly and find out which one saves you more — completely free.",

    metaTitle: "Old vs New Tax Regime Calculator – Compare & Save Free",
    metaDescription: "Compare old vs new tax regime instantly with our free calculator. Find out which regime saves you more tax based on your income and deductions.",

    content: [
      {
        heading: "How to Use the Old vs New Regime Calculator",
        body: `<p>Comparing both tax regimes takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>annual income</strong> from salary, business, or other sources.</li>
        <li>Enter your eligible <strong>deductions</strong> such as Section 80C, 80D, HRA, and home loan interest.</li>
        <li>Click <strong>Calculate</strong> to instantly see your tax liability under both the old and new regimes side by side.</li>
        <li>The calculator highlights which regime results in lower tax, along with the exact amount you save.</li>
      </ol>
      <p>This comparison helps you make an informed choice before selecting your tax regime for the financial year.</p>`
      },
      {
        heading: "What is the Difference Between Old and New Tax Regime?",
        body: `<p>India currently offers taxpayers a choice between two tax regimes:</p>
      <ul>
        <li><strong>Old Tax Regime</strong> — Has higher slab rates but allows numerous deductions and exemptions such as Section 80C (up to ₹1.5 lakh), HRA, LTA, Section 80D (health insurance), and home loan interest under Section 24(b).</li>
        <li><strong>New Tax Regime</strong> — Has lower slab rates but removes most deductions and exemptions, retaining only a few like the standard deduction and employer's NPS contribution.</li>
      </ul>
      <p>The right choice depends entirely on how much you can claim in deductions under the old regime compared to the tax savings offered by the new regime's lower rates.</p>`
      },
      {
        heading: "Side-by-Side Slab Comparison (FY 2025-26)",
        body: `<p>Here's how the slab structures differ between the two regimes for individuals below 60 years:</p>
      <ul>
        <li><strong>New Regime:</strong> Nil up to ₹3,00,000; 5% from ₹3,00,001–₹7,00,000; 10% from ₹7,00,001–₹10,00,000; 15% from ₹10,00,001–₹12,00,000; 20% from ₹12,00,001–₹15,00,000; 30% above ₹15,00,000.</li>
        <li><strong>Old Regime:</strong> Nil up to ₹2,50,000; 5% from ₹2,50,001–₹5,00,000; 20% from ₹5,00,001–₹10,00,000; 30% above ₹10,00,000.</li>
      </ul>
      <p>Note: Slab rates are revised periodically through the Union Budget. Always verify the latest figures on the official Income Tax Department website.</p>`
      },
      {
        heading: "Which Regime Should You Choose?",
        body: `<p>The right regime depends on your specific financial situation:</p>
      <ol>
        <li><strong>Choose the Old Regime if</strong> — You have significant deductions such as a home loan, high HRA claims, life insurance, ELSS investments, or health insurance premiums that together exceed roughly ₹3.5–4 lakh.</li>
        <li><strong>Choose the New Regime if</strong> — You have minimal deductions, prefer a simpler tax filing process, or your total eligible deductions are lower than the threshold where the old regime becomes beneficial.</li>
        <li><strong>Use a Comparison Tool</strong> — Since the break-even point depends on your exact income and deductions, it's best to calculate both and compare directly rather than assuming one is always better.</li>
      </ol>`
      },
      {
        heading: "Common Deductions Available Only in the Old Regime",
        body: `<ul>
        <li><strong>Section 80C</strong> — Investments in PPF, ELSS, EPF, life insurance premiums, etc. (up to ₹1.5 lakh)</li>
        <li><strong>Section 80D</strong> — Health insurance premiums for self and family</li>
        <li><strong>HRA Exemption</strong> — For salaried individuals living in rented accommodation</li>
        <li><strong>Home Loan Interest</strong> — Under Section 24(b), up to ₹2 lakh for self-occupied property</li>
        <li><strong>LTA</strong> — Leave Travel Allowance exemption for eligible travel expenses</li>
      </ul>`
      },
      {
        heading: "Why Use Our Old vs New Regime Calculator?",
        body: `<p>Our calculator helps you make a confident decision by allowing you to:</p>
      <ul>
        <li>Instantly compare your exact tax liability under both regimes</li>
        <li>See the precise amount you save by choosing one regime over the other</li>
        <li>Factor in your actual deductions rather than relying on generic advice</li>
        <li>Make an informed choice before declaring your regime to your employer or filing your return</li>
      </ul>`
      }
    ],

    keywords: [
      "old vs new tax regime calculator",
      "old vs new regime comparison",
      "which tax regime is better",
      "new tax regime vs old tax regime 2025",
      "tax regime comparison calculator",
    ],

    faqs: [
      {
        q: "What is the main difference between the old and new tax regime?",
        a: "The old regime has higher tax slabs but allows numerous deductions like Section 80C, HRA, and home loan interest. The new regime has lower slabs but removes most deductions and exemptions."
      },
      {
        q: "Which tax regime is better for salaried individuals?",
        a: "It depends on your deductions. If you claim significant deductions like HRA, 80C investments, or home loan interest, the old regime may be better. Otherwise, the new regime often results in lower tax."
      },
      {
        q: "Can I switch between old and new tax regime every year?",
        a: "Salaried individuals can choose their regime each financial year when filing their return. However, those with business income have restrictions on switching back and forth frequently."
      },
      {
        q: "Is the new tax regime the default option?",
        a: "Yes, the new tax regime is currently the default option. Taxpayers who wish to opt for the old regime need to explicitly choose it while filing their return or declaring it to their employer."
      },
      {
        q: "How much deduction do I need to make the old regime beneficial?",
        a: "Generally, if your total eligible deductions exceed approximately ₹3.5 to ₹4 lakh, the old regime tends to result in lower tax. The exact break-even point varies based on your income level."
      },
    ],

    relatedTools: [
      { label: "Income Tax Calculator", href: "/finance/income-tax", description: 'Calculate your overall income tax liability' },
      { label: "Tax Slab Calculator", href: "/finance/income-tax/tax-slab", description: 'Check applicable income tax slabs' },
      { label: "TDS Calculator", href: "/finance/income-tax/tds-calculator", description: "Calculate TDS deduction on your income" },
    ],
  },

  "tds-calculator": {
    taxTypeKey: "tds-calculator" as TaxType,
    title: "TDS Calculator",
    description: "Calculate the TDS (Tax Deducted at Source) applicable on your income instantly — completely free.",

    metaTitle: "TDS Calculator – Calculate Tax Deducted at Source Free",
    metaDescription: "Calculate TDS (Tax Deducted at Source) instantly with our free calculator. Find applicable TDS rate and deduction amount on salary, interest, or rent.",

    content: [
      {
        heading: "How to Use the TDS Calculator",
        body: `<p>Calculating TDS takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>payment amount</strong> on which TDS needs to be calculated (salary, interest, rent, or professional fees).</li>
        <li>Select the <strong>nature of payment</strong> to determine the applicable TDS section and rate.</li>
        <li>Enter the <strong>applicable TDS rate</strong>, if not auto-filled, based on the payment type.</li>
        <li>Click <strong>Calculate</strong> to instantly see the TDS amount and the net payment after deduction.</li>
      </ol>
      <p>The calculator helps both payers and recipients understand exactly how much tax will be deducted before the payment is made.</p>`
      },
      {
        heading: "What is TDS?",
        body: `<p><strong>TDS (Tax Deducted at Source)</strong> is a mechanism under the Income Tax Act where a certain percentage of tax is deducted by the payer at the time of making specified payments, such as salary, interest, rent, or professional fees. The deducted amount is then deposited with the government on behalf of the recipient.</p>
      <p>TDS ensures a steady flow of tax revenue to the government and reduces tax evasion, since tax is collected at the source of income itself rather than relying solely on the taxpayer to pay it later.</p>`
      },
      {
        heading: "TDS Calculation Formula",
        body: `<p>TDS is calculated using a simple percentage-based formula:</p>
      <p class="formula">TDS Amount = (Payment Amount × TDS Rate) / 100</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>Payment Amount</strong> = The gross amount being paid (salary, rent, interest, etc.)</li>
        <li><strong>TDS Rate</strong> = The percentage rate applicable based on the nature of payment, as prescribed under the Income Tax Act</li>
      </ul>
      <p>For example, if a company pays ₹50,000 as professional fees and the applicable TDS rate is 10%, the TDS deducted would be ₹5,000, and the net amount paid to the recipient would be ₹45,000.</p>`
      },
      {
        heading: "Common TDS Rates and Sections",
        body: `<p>Different types of payments attract different TDS sections and rates:</p>
      <ul>
        <li><strong>Section 192</strong> — TDS on salary, based on applicable income tax slab rates</li>
        <li><strong>Section 194A</strong> — TDS on interest other than securities (e.g., fixed deposits), typically 10%</li>
        <li><strong>Section 194I</strong> — TDS on rent, typically 10% for land/building and 2% for plant/machinery</li>
        <li><strong>Section 194J</strong> — TDS on professional or technical fees, typically 10%</li>
        <li><strong>Section 194C</strong> — TDS on payments to contractors, typically 1% to 2%</li>
      </ul>
      <p>Note: TDS rates and thresholds are subject to change with each Union Budget. Always verify the latest rates on the official Income Tax Department website.</p>`
      },
      {
        heading: "Can You Claim a Refund on Excess TDS?",
        body: `<p>Yes. If the TDS deducted is higher than your actual tax liability for the financial year, you can claim a refund by filing your Income Tax Return (ITR). The excess amount, along with applicable interest, is refunded by the Income Tax Department after processing your return.</p>
      <p>Similarly, if your total income is below the taxable limit, you can also submit Form 15G or 15H (for senior citizens) to certain payers to avoid TDS deduction altogether, where applicable.</p>`
      },
      {
        heading: "Why Use Our TDS Calculator?",
        body: `<p>Our calculator helps you understand TDS deductions clearly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate TDS amount calculations</li>
        <li>Understand the net amount you'll receive after deduction</li>
        <li>Compare TDS impact across different payment types and rates</li>
        <li>Plan your finances better, whether you're a payer or a recipient</li>
      </ul>`
      }
    ],

    keywords: [
      "TDS calculator",
      "TDS calculator online",
      "TDS calculator on salary",
      "TDS calculation formula",
      "TDS rate chart India",
    ],

    faqs: [
      {
        q: "What is TDS?",
        a: "TDS (Tax Deducted at Source) is a mechanism where a percentage of tax is deducted by the payer at the time of making specified payments like salary, rent, or interest, and deposited with the government on behalf of the recipient."
      },
      {
        q: "How is TDS calculated?",
        a: "TDS is calculated using the formula TDS Amount = (Payment Amount × TDS Rate) / 100, where the rate depends on the nature of the payment as prescribed under the Income Tax Act."
      },
      {
        q: "Can I get a refund if excess TDS is deducted?",
        a: "Yes, if the TDS deducted exceeds your actual tax liability, you can claim a refund by filing your Income Tax Return. The excess amount is refunded after the return is processed."
      },
      {
        q: "What is the TDS rate on salary?",
        a: "TDS on salary under Section 192 is not a fixed percentage — it is calculated based on your estimated annual income and the applicable income tax slab rates for the financial year."
      },
      {
        q: "How can I avoid TDS deduction if my income is below the taxable limit?",
        a: "You can submit Form 15G, or Form 15H if you are a senior citizen, to the relevant payer to declare that your income is below the taxable limit, which may help avoid TDS deduction on certain payments."
      },
    ],

    relatedTools: [
      { label: "Income Tax Calculator", href: "/finance/income-tax", description: 'Calculate your overall income tax liability' },
      { label: "Old vs New Regime Calculator", href: "/finance/income-tax/old-vs-new-regime", description: 'Compare tax liability under both regimes' },
      { label: "Advance Tax Calculator", href: "/finance/income-tax/advance-tax", description: "Calculate your advance tax installments" },
    ],
  },

  "advance-tax": {
    taxTypeKey: "advance-tax" as TaxType,
    title: "Advance Tax Calculator",
    description: "Calculate your advance tax liability and quarterly installments instantly — completely free.",

    metaTitle: "Advance Tax Calculator – Calculate Installments Online Free",
    metaDescription: "Calculate your advance tax liability instantly with our free calculator. Find quarterly installment amounts and avoid interest penalties under Section 234.",

    content: [
      {
        heading: "How to Use the Advance Tax Calculator",
        body: `<p>Calculating your advance tax takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>estimated total income</strong> for the financial year from all sources.</li>
        <li>Enter applicable <strong>deductions and TDS already deducted</strong>, if any.</li>
        <li>Click <strong>Calculate</strong> to instantly see your total tax liability and the quarterly advance tax installments due.</li>
      </ol>
      <p>The calculator breaks down your liability into the four standard installment percentages, helping you plan your payments well ahead of each due date.</p>`
      },
      {
        heading: "What is Advance Tax?",
        body: `<p><strong>Advance tax</strong> is income tax that is paid in installments throughout the financial year, instead of as a single lump sum at the end. It applies to taxpayers — including salaried individuals, freelancers, and businesses — whose estimated tax liability for the year exceeds ₹10,000 after accounting for TDS.</p>
      <p>The idea behind advance tax is to ensure a steady flow of tax revenue to the government, on a "pay as you earn" basis, rather than taxpayers settling their entire liability only at the time of filing their return.</p>`
      },
      {
        heading: "Advance Tax Payment Schedule",
        body: `<p>Advance tax is payable in four installments during the financial year, based on the following schedule:</p>
      <ul>
        <li><strong>On or before 15th June</strong> — 15% of total tax liability</li>
        <li><strong>On or before 15th September</strong> — 45% of total tax liability (cumulative)</li>
        <li><strong>On or before 15th December</strong> — 75% of total tax liability (cumulative)</li>
        <li><strong>On or before 15th March</strong> — 100% of total tax liability (cumulative)</li>
      </ul>
      <p>Note: Due dates and percentages are based on current Income Tax Department rules and may be revised. Always confirm the latest schedule before making payments.</p>`
      },
      {
        heading: "Who Needs to Pay Advance Tax?",
        body: `<p>Advance tax applies to a wide range of taxpayers, including:</p>
      <ol>
        <li><strong>Salaried individuals</strong> with significant additional income from sources like capital gains, rent, or interest, where TDS alone doesn't cover the full tax liability.</li>
        <li><strong>Freelancers and professionals</strong> whose income is not subject to regular TDS deduction.</li>
        <li><strong>Business owners</strong> whose estimated annual tax liability exceeds ₹10,000.</li>
        <li><strong>Senior citizens</strong> are generally exempt from paying advance tax, provided they do not have income from business or profession.</li>
      </ol>`
      },
      {
        heading: "Penalty for Not Paying Advance Tax on Time",
        body: `<p>If advance tax is not paid on time or is underpaid, interest is levied under the following sections of the Income Tax Act:</p>
      <ul>
        <li><strong>Section 234B</strong> — Interest for default in payment of advance tax, charged at 1% per month on the shortfall.</li>
        <li><strong>Section 234C</strong> — Interest for deferment of advance tax installments, charged at 1% per month on the amount not paid by each due date.</li>
      </ul>
      <p>To avoid this interest burden, it's important to estimate your income accurately and pay each installment on or before its due date.</p>`
      },
      {
        heading: "Why Use Our Advance Tax Calculator?",
        body: `<p>Our calculator helps you stay compliant and avoid penalties by allowing you to:</p>
      <ul>
        <li>Get instant, accurate advance tax liability calculations</li>
        <li>See the exact installment amount due at each quarterly deadline</li>
        <li>Plan your cash flow better throughout the financial year</li>
        <li>Avoid interest penalties under Sections 234B and 234C</li>
      </ul>`
      }
    ],

    keywords: [
      "advance tax calculator",
      "advance tax calculator online",
      "advance tax payment due dates",
      "advance tax calculation for individuals",
      "advance tax calculator India",
    ],

    faqs: [
      {
        q: "What is advance tax?",
        a: "Advance tax is income tax paid in installments throughout the financial year, rather than as a single payment at the end, applicable to taxpayers whose estimated tax liability exceeds ₹10,000 after TDS."
      },
      {
        q: "Who needs to pay advance tax?",
        a: "Salaried individuals with significant other income, freelancers, professionals, and business owners with an estimated tax liability above ₹10,000 are required to pay advance tax. Senior citizens without business income are generally exempt."
      },
      {
        q: "What are the due dates for advance tax payment?",
        a: "Advance tax is payable in four installments — 15% by 15th June, 45% by 15th September, 75% by 15th December, and 100% by 15th March of the financial year."
      },
      {
        q: "What happens if I don't pay advance tax on time?",
        a: "Interest is charged under Section 234B for default in payment and Section 234C for deferment of installments, both typically at 1% per month on the shortfall amount."
      },
      {
        q: "Are senior citizens required to pay advance tax?",
        a: "Senior citizens (60 years or above) are exempt from paying advance tax, provided they do not have income from business or profession."
      },
    ],

    relatedTools: [
      { label: "Income Tax Calculator", href: "/finance/income-tax", description: 'Calculate your overall income tax liability' },
      { label: "TDS Calculator", href: "/finance/income-tax/tds-calculator", description: 'Calculate TDS deduction on your income' },
      { label: "Tax Slab Calculator", href: "/finance/income-tax/tax-slab", description: "Check applicable income tax slabs" },
    ],
  },

  "tax-slab": {
    taxTypeKey: "tax-slab" as TaxType,
    title: "Income Tax Slab Calculator",
    description: "Check the latest income tax slab rates and calculate your tax liability instantly — completely free.",
    metaTitle: "Income Tax Slab Calculator – Check Latest Slabs Free",
    metaDescription: "Check the latest income tax slab rates and calculate your tax instantly with our free calculator. Compare old vs new regime slabs for FY 2025-26.",

    content: [
      {
        heading: "How to Use the Tax Slab Calculator",
        body: `<p>Checking your applicable tax slab takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>annual taxable income</strong> from all sources.</li>
        <li>Select the <strong>tax regime</strong> — old or new — you want to check the slab under.</li>
        <li>Select your <strong>age category</strong>, since senior and super senior citizens have different slabs under the old regime.</li>
        <li>Click <strong>Calculate</strong> to instantly see your applicable slab, tax rate, and total tax liability.</li>
      </ol>
      <p>The calculator also shows a slab-wise breakdown of how your income is taxed at each level.</p>`
      },
      {
        heading: "What are Income Tax Slabs?",
        body: `<p><strong>Income tax slabs</strong> are income ranges that determine the rate at which tax is applied under India's progressive taxation system. Instead of taxing your entire income at one flat rate, your income is divided into slabs, and each slab is taxed at a different rate — with higher income portions attracting higher rates.</p>
      <p>This means even high-income earners pay 0% tax on the initial exempt portion of their income, with tax rates increasing only on the income that falls into higher slabs.</p>`
      },
      {
        heading: "Income Tax Slabs – New Regime (FY 2025-26)",
        body: `<p>Under the new tax regime, the following slab rates apply to all individuals, regardless of age:</p>
      <ul>
        <li>Up to ₹3,00,000 — Nil</li>
        <li>₹3,00,001 to ₹7,00,000 — 5%</li>
        <li>₹7,00,001 to ₹10,00,000 — 10%</li>
        <li>₹10,00,001 to ₹12,00,000 — 15%</li>
        <li>₹12,00,001 to ₹15,00,000 — 20%</li>
        <li>Above ₹15,00,000 — 30%</li>
      </ul>
      <p>A tax rebate under Section 87A may bring the effective tax liability to nil for individuals with taxable income up to a specified threshold under this regime.</p>`
      },
      {
        heading: "Income Tax Slabs – Old Regime (FY 2025-26)",
        body: `<p>Under the old tax regime, slab rates vary slightly based on age category:</p>
      <ul>
        <li><strong>Individuals below 60 years:</strong> Up to ₹2,50,000 — Nil; ₹2,50,001–₹5,00,000 — 5%; ₹5,00,001–₹10,00,000 — 20%; Above ₹10,00,000 — 30%</li>
        <li><strong>Senior citizens (60–80 years):</strong> Up to ₹3,00,000 — Nil; ₹3,00,001–₹5,00,000 — 5%; ₹5,00,001–₹10,00,000 — 20%; Above ₹10,00,000 — 30%</li>
        <li><strong>Super senior citizens (80+ years):</strong> Up to ₹5,00,000 — Nil; ₹5,00,001–₹10,00,000 — 20%; Above ₹10,00,000 — 30%</li>
      </ul>
      <p>Note: Tax slabs are revised periodically through the Union Budget. Always verify the latest applicable slabs on the official Income Tax Department website before filing.</p>`
      },
      {
        heading: "How Slab-Based Taxation Works",
        body: `<p>Many taxpayers misunderstand how slabs apply — your entire income is <strong>not</strong> taxed at the highest slab rate you fall into. Instead, each portion of your income is taxed at the rate applicable to that specific slab.</p>
      <p>For example, under the new regime, if your taxable income is ₹8,00,000, you pay 0% on the first ₹3,00,000, 5% on the next ₹4,00,000, and 10% only on the remaining ₹1,00,000 — not 10% on the entire ₹8,00,000.</p>`
      },
      {
        heading: "Why Use Our Tax Slab Calculator?",
        body: `<p>Our calculator helps you understand your tax bracket clearly by allowing you to:</p>
      <ul>
        <li>Instantly check which slab your income falls into</li>
        <li>Compare slab-wise tax liability under old and new regimes</li>
        <li>Understand exactly how much tax applies at each income level</li>
        <li>Plan your investments and deductions more effectively before filing</li>
      </ul>`
      }
    ],

    keywords: [
      "income tax slab calculator",
      "tax slab 2025-26",
      "income tax slab rates India",
      "new tax regime slab calculator",
      "old tax regime slab rates",
    ],

    faqs: [
      {
        q: "What are income tax slabs?",
        a: "Income tax slabs are income ranges that determine the rate at which tax is applied under India's progressive taxation system. Different portions of income are taxed at different rates."
      },
      {
        q: "Is my entire income taxed at the highest slab rate?",
        a: "No, only the portion of income falling within a particular slab is taxed at that slab's rate. Lower portions of your income are taxed at lower rates, following a progressive structure."
      },
      {
        q: "Do tax slabs differ for senior citizens?",
        a: "Yes, under the old tax regime, senior citizens (60-80 years) and super senior citizens (80+ years) have a higher basic exemption limit compared to individuals below 60 years."
      },
      {
        q: "Are tax slabs the same under the old and new regime?",
        a: "No, the new regime has different and generally lower slab rates compared to the old regime, but it does not allow most deductions and exemptions available under the old regime."
      },
      {
        q: "How often do income tax slabs change?",
        a: "Income tax slabs are reviewed and potentially revised every year during the Union Budget announcement, so it's important to check the latest applicable rates each financial year."
      },
    ],

    relatedTools: [
      { label: "Income Tax Calculator", href: "/finance/income-tax", description: 'Calculate your overall income tax liability' },
      { label: "Old vs New Regime Calculator", href: "/finance/income-tax/old-vs-new-regime", description: 'Compare tax liability under both regimes' },
      { label: "TDS Calculator", href: "/finance/income-tax/tds-calculator", description: "Calculate TDS deduction on your income" },
    ],
  },
}

export const slugToTaxType: Record<string, TaxType> = {
  "old-vs-new-regime": "old-vs-new-regime",
  "tds-calculator": "tds-calculator",
  "advance-tax": "advance-tax",
  "tax-slab": "tax-slab",
}

export const validTaxSlugs = Object.keys(slugToTaxType)