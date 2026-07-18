export type HraType = "hra" | "hra-exemption" | "rent-receipt" | "hra-tax-benefit"


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

export interface HraTypeConfig {
  // Basic Info
  hraTypeKey: HraType
  title: string
  description: string
  keywords: string[]

  // SEO
  metaTitle: string
  metaDescription: string

  // Calculator Defaults
  defaultBasic: number
  defaultHra: number
  defaultRent: number
  defaultCity: "metro" | "non-metro"

  // Article Content
  content: ContentSection[]

  // FAQs
  faqs: FAQ[]

  // Related Calculators
  relatedTools: RelatedTool[]
}

export const hraConfig: Record<HraType, HraTypeConfig> = {

  hra: {
    hraTypeKey: "hra" as HraType,
    title: "HRA Calculator",
    description: "Calculate your House Rent Allowance tax exemption instantly based on your salary, rent paid, and city — completely free.",
    metaTitle: "HRA Calculator – Calculate House Rent Allowance Exemption Free",
    metaDescription: "Calculate your HRA tax exemption instantly with our free calculator. Find the exact HRA amount exempt from tax based on your salary, rent, and city type.",
    defaultBasic: 50000,
    defaultHra: 20000,
    defaultRent: 15000,
    defaultCity: "metro",
    content: [
      {
        heading: "How to Use the HRA Calculator",
        body: `<p>Calculating your HRA exemption takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>basic salary</strong> per month.</li>
        <li>Enter the <strong>HRA received</strong> from your employer per month as part of your salary structure.</li>
        <li>Enter the <strong>actual rent paid</strong> per month for your accommodation.</li>
        <li>Select your <strong>city type</strong> — metro (Delhi, Mumbai, Chennai, Kolkata) or non-metro.</li>
        <li>Click <strong>Calculate</strong> to instantly see your HRA exemption amount and the taxable portion of HRA.</li>
      </ol>
      <p>The calculator applies all three conditions prescribed under Section 10(13A) and shows you the minimum value, which is your actual tax-exempt HRA amount.</p>`
      },
      {
        heading: "What is HRA?",
        body: `<p><strong>HRA (House Rent Allowance)</strong> is a component of your salary provided by your employer to help cover accommodation expenses. It is one of the most significant tax-saving components in a salary structure, as a portion or the entire HRA can be claimed as exempt from income tax under Section 10(13A) of the Income Tax Act, provided you are living in a rented accommodation.</p>
      <p>HRA exemption is only available under the <strong>old tax regime</strong>. If you have opted for the new tax regime, HRA exemption cannot be claimed, though you still receive HRA as part of your salary.</p>`
      },
      {
        heading: "HRA Exemption Calculation Formula",
        body: `<p>The HRA exemption is calculated as the <strong>minimum of the following three amounts</strong>:</p>
      <ul>
        <li><strong>Condition 1</strong> — Actual HRA received from employer</li>
        <li><strong>Condition 2</strong> — 50% of basic salary (for metro cities) or 40% of basic salary (for non-metro cities)</li>
        <li><strong>Condition 3</strong> — Actual rent paid minus 10% of basic salary</li>
      </ul>
      <p class="formula">HRA Exemption = Minimum of (Condition 1, Condition 2, Condition 3)</p>
      <p>For example, if your monthly basic salary is ₹30,000, HRA received is ₹15,000, rent paid is ₹12,000, and you live in a non-metro city:</p>
      <ul>
        <li>Condition 1 = ₹15,000</li>
        <li>Condition 2 = 40% of ₹30,000 = ₹12,000</li>
        <li>Condition 3 = ₹12,000 − 10% of ₹30,000 = ₹12,000 − ₹3,000 = ₹9,000</li>
        <li><strong>HRA Exemption = ₹9,000 per month</strong> (minimum of the three)</li>
      </ul>`
      },
      {
        heading: "Metro vs Non-Metro Cities for HRA",
        body: `<p>City classification significantly affects your HRA exemption calculation:</p>
      <ul>
        <li><strong>Metro Cities</strong> — Delhi, Mumbai, Chennai, and Kolkata are classified as metro cities for HRA purposes. Employees in these cities can claim up to 50% of basic salary as HRA exemption under Condition 2.</li>
        <li><strong>Non-Metro Cities</strong> — All other cities, including Bangalore, Hyderabad, Pune, and Ahmedabad, are classified as non-metro for HRA purposes. The limit under Condition 2 is 40% of basic salary.</li>
      </ul>
      <p>Note: The classification is based on the city where you actually reside and pay rent, not where your employer's office is located.</p>`
      },
      {
        heading: "Important Conditions for Claiming HRA Exemption",
        body: `<p>To be eligible to claim HRA exemption, you must meet the following conditions:</p>
      <ol>
        <li><strong>You must be a salaried employee</strong> receiving HRA as part of your salary structure — self-employed individuals cannot claim HRA exemption under Section 10(13A).</li>
        <li><strong>You must be living in rented accommodation</strong> — HRA exemption cannot be claimed if you are living in your own house.</li>
        <li><strong>You must actually pay rent</strong> — The rent must be genuinely paid, not just claimed on paper.</li>
        <li><strong>Rent receipts required above ₹1 lakh per year</strong> — If your annual rent exceeds ₹1,00,000, you must provide your landlord's PAN to your employer for HRA exemption.</li>
        <li><strong>Old tax regime only</strong> — HRA exemption is not available if you have opted for the new tax regime.</li>
      </ol>`
      },
      {
        heading: "Why Use Our HRA Calculator?",
        body: `<p>Our calculator helps you maximize your HRA tax savings by allowing you to:</p>
      <ul>
        <li>Get instant, accurate HRA exemption calculations applying all three conditions</li>
        <li>Understand exactly how much of your HRA is tax-exempt vs taxable</li>
        <li>Compare HRA exemption for different rent amounts to optimize your tax saving</li>
        <li>Plan your salary structure and rental arrangements more effectively</li>
      </ul>`
      }
    ],

    keywords: [
      "HRA calculator",
      "HRA exemption calculator",
      "house rent allowance calculator",
      "HRA tax exemption calculator",
      "HRA calculation formula India",
    ],

    faqs: [
      {
        q: "What is HRA exemption?",
        a: "HRA exemption is the portion of House Rent Allowance that is exempt from income tax under Section 10(13A), calculated as the minimum of three conditions based on actual HRA received, basic salary percentage, and rent paid."
      },
      {
        q: "How is HRA exemption calculated?",
        a: "HRA exemption is the minimum of: actual HRA received, 50% of basic salary for metro cities (40% for non-metro), and actual rent paid minus 10% of basic salary."
      },
      {
        q: "Can I claim HRA if I live in my own house?",
        a: "No, HRA exemption can only be claimed if you are living in rented accommodation and actually paying rent. If you own the house you live in, the entire HRA received is taxable."
      },
      {
        q: "Which cities are considered metro for HRA purposes?",
        a: "Only four cities are classified as metro for HRA calculation purposes — Delhi, Mumbai, Chennai, and Kolkata. All other cities, including Bangalore, Hyderabad, and Pune, are treated as non-metro."
      },
      {
        q: "Can I claim HRA under the new tax regime?",
        a: "No, HRA exemption under Section 10(13A) is only available under the old tax regime. If you have opted for the new tax regime, HRA received is fully taxable."
      },
    ],

    relatedTools: [
      { label: "HRA Exemption Calculator", href: "/finance/hra/hra-exemption", description: 'Calculate your exact HRA exemption amount' },
      { label: "HRA Tax Benefit Calculator", href: "/finance/hra/hra-tax-benefit", description: 'Calculate tax saved through HRA exemption' },
      { label: "Rent Receipt Generator", href: "/finance/hra/rent-receipt", description: "Generate rent receipts for HRA claims" },
    ],
  },

  "hra-exemption": {
    hraTypeKey: "hra-exemption" as HraType,
    title: "HRA Exemption Calculator",
    description: "Calculate the exact portion of your House Rent Allowance that is exempt from income tax instantly — completely free.",
    metaTitle: "HRA Exemption Calculator – Calculate Tax Exempt HRA Free",
    metaDescription: "Calculate your exact HRA exemption amount instantly with our free calculator. Find how much of your house rent allowance is exempt from income tax.",
    defaultBasic: 50000,
    defaultHra: 20000,
    defaultRent: 15000,
    defaultCity: "metro",
    content: [
      {
        heading: "How to Use the HRA Exemption Calculator",
        body: `<p>Calculating your exact HRA exemption takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>monthly basic salary</strong> as per your salary slip.</li>
        <li>Enter the <strong>monthly HRA received</strong> from your employer.</li>
        <li>Enter the <strong>actual monthly rent paid</strong> for your accommodation.</li>
        <li>Select your <strong>city type</strong> — metro (Delhi, Mumbai, Chennai, Kolkata) or non-metro.</li>
        <li>Click <strong>Calculate</strong> to instantly see your monthly and annual HRA exemption, taxable HRA, and net tax saving.</li>
      </ol>
      <p>The calculator automatically applies all three Section 10(13A) conditions and picks the minimum value as your exempt HRA amount.</p>`
      },
      {
        heading: "What is HRA Exemption Under Section 10(13A)?",
        body: `<p>Under <strong>Section 10(13A)</strong> of the Income Tax Act, salaried employees living in rented accommodation can claim a portion of their HRA as exempt from income tax. This exemption reduces your taxable income, directly lowering your tax liability for the financial year.</p>
      <p>The exemption is not a flat amount — it is calculated based on three specific conditions, and the <strong>lowest of the three</strong> becomes your actual exemption. This means your exemption depends on multiple factors including your basic salary, the HRA your employer provides, your actual rent paid, and the city you live in.</p>`
      },
      {
        heading: "Three Conditions for HRA Exemption",
        body: `<p>The HRA exemption is the minimum of these three amounts:</p>
      <ul>
        <li><strong>Condition 1: Actual HRA received</strong> — The total HRA component paid by your employer as part of your monthly salary.</li>
        <li><strong>Condition 2: 50%/40% of basic salary</strong> — 50% of your monthly basic salary if you live in a metro city (Delhi, Mumbai, Chennai, Kolkata), or 40% if you live in a non-metro city.</li>
        <li><strong>Condition 3: Rent paid minus 10% of basic salary</strong> — The amount by which your actual monthly rent exceeds 10% of your monthly basic salary.</li>
      </ul>
      <p class="formula">HRA Exemption = Minimum of (Condition 1, Condition 2, Condition 3)</p>
      <p>Any amount of HRA received above this minimum is added back to your taxable income and taxed at your applicable slab rate.</p>`
      },
      {
        heading: "Detailed HRA Exemption Example",
        body: `<p>Let's work through a detailed example for a salaried employee in Bangalore (non-metro):</p>
      <ul>
        <li>Monthly Basic Salary = ₹40,000</li>
        <li>Monthly HRA Received = ₹20,000</li>
        <li>Monthly Rent Paid = ₹18,000</li>
        <li>City = Non-metro</li>
      </ul>
      <p><strong>Condition 1:</strong> Actual HRA received = ₹20,000</p>
      <p><strong>Condition 2:</strong> 40% of ₹40,000 = ₹16,000</p>
      <p><strong>Condition 3:</strong> ₹18,000 − (10% of ₹40,000) = ₹18,000 − ₹4,000 = ₹14,000</p>
      <p><strong>HRA Exemption = ₹14,000 per month</strong> (minimum of the three conditions)</p>
      <p>Annual HRA exemption = ₹14,000 × 12 = <strong>₹1,68,000</strong>, reducing taxable income by this amount.</p>`
      },
      {
        heading: "How to Maximize Your HRA Exemption",
        body: `<p>Here are practical ways to maximize the HRA tax benefit:</p>
      <ol>
        <li><strong>Pay rent above 10% of basic salary</strong> — Condition 3 becomes zero if your rent is below 10% of basic salary, eliminating any exemption regardless of other conditions.</li>
        <li><strong>Negotiate a higher HRA component</strong> — Ask your HR to structure your salary with a higher HRA component, since the exemption is capped at the HRA received (Condition 1).</li>
        <li><strong>Maintain proper rent receipts</strong> — Keep monthly rent receipts and your rental agreement as documentation for your employer and income tax records.</li>
        <li><strong>Provide landlord PAN for high rent</strong> — If annual rent exceeds ₹1,00,000, submit your landlord's PAN to your employer to ensure the exemption is processed correctly.</li>
      </ol>`
      },
      {
        heading: "Why Use Our HRA Exemption Calculator?",
        body: `<p>Our calculator helps you accurately plan your HRA tax saving by allowing you to:</p>
      <ul>
        <li>Get instant, accurate HRA exemption calculations applying all three conditions automatically</li>
        <li>See exactly how much of your HRA is tax-exempt and how much is taxable</li>
        <li>Try different rent amounts to find the optimal rent level for maximum exemption</li>
        <li>Understand your annual tax saving from the HRA exemption clearly</li>
      </ul>`
      }
    ],

    keywords: [
      "HRA exemption calculator",
      "HRA exemption calculation",
      "section 10 13A HRA calculator",
      "HRA exemption amount calculator",
      "HRA tax exempt calculator India",
    ],

    faqs: [
      {
        q: "What is HRA exemption under Section 10(13A)?",
        a: "Section 10(13A) allows salaried employees living in rented accommodation to claim a portion of their HRA as exempt from income tax, calculated as the minimum of three specific conditions based on salary, HRA received, and rent paid."
      },
      {
        q: "What are the three conditions for HRA exemption?",
        a: "The HRA exemption is the minimum of: actual HRA received from employer, 50% of basic salary for metro cities or 40% for non-metro cities, and actual rent paid minus 10% of basic salary."
      },
      {
        q: "What if my rent is less than 10% of my basic salary?",
        a: "If your rent is less than 10% of your basic salary, Condition 3 becomes zero or negative, which means your HRA exemption would be nil regardless of the other two conditions."
      },
      {
        q: "Do I need to submit rent receipts to claim HRA exemption?",
        a: "Yes, you need to submit rent receipts to your employer for HRA exemption. If your annual rent exceeds ₹1,00,000, you must also provide your landlord's PAN card details."
      },
      {
        q: "Can I claim HRA exemption if I pay rent to my parents?",
        a: "Yes, you can claim HRA exemption if you pay rent to your parents, provided the arrangement is genuine, rent is actually paid, and your parents declare the rental income in their own tax returns."
      },
    ],

    relatedTools: [
      { label: "HRA Calculator", href: "/finance/hra", description: 'Calculate your overall HRA exemption' },
      { label: "HRA Tax Benefit Calculator", href: "/finance/hra/hra-tax-benefit", description: 'Calculate tax saved through HRA exemption' },
      { label: "Income Tax Calculator", href: "/finance/income-tax", description: "Calculate your overall income tax liability" },
    ],
  },

  "rent-receipt": {
    hraTypeKey: "rent-receipt" as HraType,
    title: "Rent Receipt Generator",
    description: "Generate properly formatted rent receipts for HRA tax exemption claims instantly — completely free.",
    metaTitle: "Rent Receipt Generator – Generate Rent Receipt Online Free",
    metaDescription: "Generate rent receipts for HRA tax exemption instantly with our free tool. Create properly formatted rent receipts accepted by employers and the income tax department.",

    defaultBasic: 50000,
    defaultHra: 20000,
    defaultRent: 15000,
    defaultCity: "metro",
    content: [
      {
        heading: "How to Use the Rent Receipt Generator",
        body: `<p>Generating your rent receipt takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>name</strong> as the tenant (as per your identity documents).</li>
        <li>Enter your <strong>landlord's name</strong> and <strong>rental property address</strong>.</li>
        <li>Enter the <strong>monthly rent amount</strong> paid.</li>
        <li>Select the <strong>month and year</strong> for which the receipt is being generated.</li>
        <li>Enter your <strong>landlord's PAN</strong> (mandatory if annual rent exceeds ₹1,00,000).</li>
        <li>Click <strong>Generate</strong> to instantly create a properly formatted, printable rent receipt.</li>
      </ol>
      <p>The generated receipt is formatted as per standard requirements accepted by most employers and is suitable for HRA exemption claims and income tax purposes.</p>`
      },
      {
        heading: "What is a Rent Receipt?",
        body: `<p>A <strong>rent receipt</strong> is a written acknowledgment issued by a landlord to a tenant confirming that rent has been received for a specific period. For salaried employees, rent receipts serve as the primary documentary evidence required to claim <strong>HRA (House Rent Allowance) tax exemption</strong> from their employer.</p>
      <p>Without valid rent receipts, employers cannot process HRA exemption in your salary TDS calculations, resulting in higher tax deductions from your monthly salary. Rent receipts are also important documentation for income tax return filing.</p>`
      },
      {
        heading: "What Should a Rent Receipt Include?",
        body: `<p>A valid rent receipt for HRA purposes must include the following details:</p>
      <ul>
        <li><strong>Tenant's name</strong> — Your full name as the person paying rent.</li>
        <li><strong>Landlord's name</strong> — Full name of the property owner receiving rent.</li>
        <li><strong>Rental property address</strong> — Complete address of the rented accommodation.</li>
        <li><strong>Rent amount</strong> — The exact monthly rent amount paid, in figures and words.</li>
        <li><strong>Payment period</strong> — The specific month and year for which rent is being paid.</li>
        <li><strong>Date of payment</strong> — The date on which rent was paid.</li>
        <li><strong>Landlord's signature</strong> — Original signature of the landlord on the receipt.</li>
        <li><strong>Revenue stamp</strong> — A revenue stamp of ₹1 is required if the rent amount exceeds ₹5,000 per month.</li>
        <li><strong>Landlord's PAN</strong> — Mandatory if total annual rent paid exceeds ₹1,00,000.</li>
      </ul>`
      },
      {
        heading: "When is Landlord PAN Mandatory?",
        body: `<p>Providing your landlord's PAN is mandatory in the following situations:</p>
      <ul>
        <li>If the <strong>total annual rent paid exceeds ₹1,00,000</strong> (i.e., more than approximately ₹8,333 per month), you must provide your landlord's PAN to your employer for HRA exemption processing.</li>
        <li>If your landlord <strong>does not have a PAN</strong>, you must obtain a declaration from them stating this, and submit it along with Form 60.</li>
      </ul>
      <p>Failure to provide the landlord's PAN when required can result in your employer denying the HRA exemption claim, making the full HRA received taxable in your hands.</p>`
      },
      {
        heading: "Important Tips for Rent Receipts",
        body: `<ul>
        <li><strong>Collect receipts every month</strong> — Generate and collect a separate receipt for each month's rent payment, not a single annual receipt.</li>
        <li><strong>Get landlord's original signature</strong> — A rent receipt without the landlord's physical signature may not be accepted by your employer or the income tax department.</li>
        <li><strong>Keep receipts safe</strong> — Store rent receipts for at least 6 years, as they may be required during income tax scrutiny or assessment.</li>
        <li><strong>Match with bank records</strong> — If possible, pay rent via bank transfer or cheque so your payment records can corroborate the rent receipts if questioned.</li>
        <li><strong>Revenue stamp for cash payments</strong> — Affix a ₹1 revenue stamp on receipts for cash rent payments above ₹5,000 per month.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Rent Receipt Generator?",
        body: `<p>Our generator helps you create compliant rent receipts quickly by allowing you to:</p>
      <ul>
        <li>Generate instant, properly formatted rent receipts for any month</li>
        <li>Include all mandatory fields required for HRA exemption claims</li>
        <li>Print or save receipts as PDF for submission to your employer</li>
        <li>Generate multiple receipts for different months quickly and easily</li>
      </ul>`
      }
    ],

    keywords: [
      "rent receipt generator",
      "rent receipt format India",
      "rent receipt for HRA",
      "online rent receipt generator free",
      "rent receipt PDF generator India",
    ],

    faqs: [
      {
        q: "Why do I need a rent receipt?",
        a: "Rent receipts are the primary proof required to claim HRA tax exemption from your employer. Without valid receipts, your employer cannot process the HRA exemption, resulting in higher TDS deductions from your salary."
      },
      {
        q: "Is landlord PAN mandatory on rent receipts?",
        a: "Yes, your landlord's PAN is mandatory if your total annual rent exceeds ₹1,00,000. Without it, your employer may not process the HRA exemption for rent above this threshold."
      },
      {
        q: "Do I need a separate rent receipt for each month?",
        a: "Yes, a separate rent receipt should be collected for each month's rent payment. A single annual receipt is generally not accepted by employers for monthly HRA exemption processing."
      },
      {
        q: "Is a revenue stamp required on rent receipts?",
        a: "Yes, a ₹1 revenue stamp is required on rent receipts for cash payments exceeding ₹5,000 per month. For payments made via bank transfer or cheque, a revenue stamp is not mandatory."
      },
      {
        q: "Can I claim HRA exemption without rent receipts?",
        a: "No, rent receipts are mandatory documentation for claiming HRA exemption. Without them, your employer cannot process the exemption, and the income tax department may disallow the claim during assessment."
      },
    ],

    relatedTools: [
      { label: "HRA Calculator", href: "/finance/hra", description: 'Calculate your HRA exemption amount' },
      { label: "HRA Exemption Calculator", href: "/finance/hra/hra-exemption", description: 'Calculate exact tax exempt HRA amount' },
      { label: "HRA Tax Benefit Calculator", href: "/finance/hra/hra-tax-benefit", description: "Calculate tax saved through HRA exemption" },
    ],
  },

  "hra-tax-benefit": {
    hraTypeKey: "hra-tax-benefit" as HraType,
    title: "HRA Tax Benefit Calculator",
    description: "Calculate the exact income tax saved through your HRA exemption based on your salary, rent paid, and tax slab — completely free.",

    metaTitle: "HRA Tax Benefit Calculator – Calculate Tax Saved on HRA Free",
    metaDescription: "Calculate the exact tax saved through your HRA exemption instantly with our free calculator. Find your annual tax benefit based on your salary, rent, and tax slab.",
    defaultBasic: 50000,
    defaultHra: 20000,
    defaultRent: 15000,
    defaultCity: "metro",
    content: [
      {
        heading: "How to Use the HRA Tax Benefit Calculator",
        body: `<p>Calculating your HRA tax benefit takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>monthly basic salary</strong>, <strong>HRA received</strong>, and <strong>rent paid</strong>.</li>
        <li>Select your <strong>city type</strong> — metro or non-metro.</li>
        <li>Select your <strong>income tax slab</strong> — 5%, 20%, or 30% — under the old tax regime.</li>
        <li>Click <strong>Calculate</strong> to instantly see your annual HRA exemption amount and the exact tax saved in rupees.</li>
      </ol>
      <p>The calculator shows both your HRA exemption amount and the actual rupee value of tax saved, giving you a clear picture of your real financial benefit.</p>`
      },
      {
        heading: "What is HRA Tax Benefit?",
        body: `<p>The <strong>HRA tax benefit</strong> is the actual reduction in your income tax liability that results from claiming HRA exemption under Section 10(13A). While the HRA exemption reduces your taxable income, the actual tax saving depends on your applicable income tax slab rate.</p>
      <p>For example, the same HRA exemption of ₹1,00,000 saves ₹5,000 in tax for someone in the 5% slab, ₹20,000 for someone in the 20% slab, and ₹31,200 for someone in the 30% slab (including cess). Understanding this distinction helps you evaluate the true financial value of your HRA component.</p>`
      },
      {
        heading: "How HRA Tax Benefit is Calculated",
        body: `<p>The HRA tax benefit calculation involves two steps:</p>
      <p><strong>Step 1 — Calculate HRA Exemption:</strong></p>
      <p class="formula">HRA Exemption = Minimum of (Actual HRA received, 50%/40% of Basic Salary, Rent paid − 10% of Basic Salary)</p>
      <p><strong>Step 2 — Calculate Tax Saved:</strong></p>
      <p class="formula">Tax Saved = HRA Exemption × Applicable Tax Slab Rate × 1.04 (including 4% health and education cess)</p>
      <p>For example, if your annual HRA exemption is ₹1,50,000 and you are in the 30% tax bracket:</p>
      <ul>
        <li>Tax saved = ₹1,50,000 × 30% = ₹45,000</li>
        <li>Add 4% cess = ₹45,000 × 1.04 = <strong>₹46,800 annual tax saving</strong></li>
      </ul>`
      },
      {
        heading: "HRA Tax Benefit Across Different Tax Slabs",
        body: `<p>To illustrate how the same HRA exemption delivers different tax savings across slabs, here is an example with ₹1,50,000 annual HRA exemption:</p>
      <ul>
        <li><strong>5% tax slab</strong> — Tax saved = ₹1,50,000 × 5% × 1.04 = <strong>₹7,800</strong></li>
        <li><strong>20% tax slab</strong> — Tax saved = ₹1,50,000 × 20% × 1.04 = <strong>₹31,200</strong></li>
        <li><strong>30% tax slab</strong> — Tax saved = ₹1,50,000 × 30% × 1.04 = <strong>₹46,800</strong></li>
      </ul>
      <p>This demonstrates why HRA is a particularly valuable tax-saving component for employees in higher income brackets — the same exemption saves significantly more tax as your income grows.</p>`
      },
      {
        heading: "Tips to Maximize Your HRA Tax Benefit",
        body: `<ul>
        <li><strong>Pay rent above 10% of basic salary</strong> — If your rent is below this threshold, Condition 3 becomes zero and your entire exemption is lost.</li>
        <li><strong>Negotiate higher HRA in salary structure</strong> — A higher HRA component gives more room for exemption, especially if you pay significant rent.</li>
        <li><strong>Consider the old tax regime</strong> — HRA exemption is only available under the old regime. If you pay substantial rent, the old regime may save you more tax overall.</li>
        <li><strong>Claim for all 12 months</strong> — Ensure you submit rent receipts for every month of the financial year to maximize your annual exemption.</li>
      </ul>`
      },
      {
        heading: "Why Use Our HRA Tax Benefit Calculator?",
        body: `<p>Our calculator helps you understand the true financial value of your HRA by allowing you to:</p>
      <ul>
        <li>Get instant, accurate calculation of tax saved through HRA exemption</li>
        <li>See the rupee value of your tax benefit, not just the exemption amount</li>
        <li>Compare tax savings across different rent levels and salary structures</li>
        <li>Make informed decisions about tax regime selection and salary structuring</li>
      </ul>`
      }
    ],

    keywords: [
      "HRA tax benefit calculator",
      "HRA tax saving calculator",
      "HRA income tax benefit",
      "how much tax saved on HRA",
      "HRA tax benefit calculation India",
    ],

    faqs: [
      {
        q: "What is the HRA tax benefit?",
        a: "The HRA tax benefit is the actual reduction in income tax liability resulting from claiming HRA exemption under Section 10(13A). The tax saved depends on both the exemption amount and your applicable income tax slab rate."
      },
      {
        q: "How much tax can I save through HRA?",
        a: "Tax savings from HRA depend on your exemption amount and slab rate. On a ₹1,50,000 annual exemption, you save ₹7,800 in the 5% slab, ₹31,200 in the 20% slab, and ₹46,800 in the 30% slab (including cess)."
      },
      {
        q: "Is HRA tax benefit available under the new tax regime?",
        a: "No, HRA exemption and its tax benefit are only available under the old tax regime. If you have opted for the new tax regime, the entire HRA received is taxable."
      },
      {
        q: "Can I claim both HRA exemption and home loan interest deduction?",
        a: "Yes, you can claim both HRA exemption and home loan interest deduction under Section 24(b) simultaneously, provided you are paying rent for your current residence while also servicing a home loan on a different property."
      },
      {
        q: "Does a higher rent always mean higher HRA tax benefit?",
        a: "Not necessarily. HRA exemption is capped at the minimum of three conditions, including the actual HRA received from your employer. Paying very high rent does not increase your exemption beyond the HRA component in your salary."
      },
    ],

    relatedTools: [
      { label: "HRA Calculator", href: "/finance/hra", description: 'Calculate your HRA exemption amount' },
      { label: "HRA Exemption Calculator", href: "/finance/hra/hra-exemption", description: 'Calculate exact tax exempt HRA amount' },
      { label: "Income Tax Calculator", href: "/finance/income-tax", description: "Calculate your overall income tax liability" },
    ],
  },
}

export const slugToHraType: Record<string, HraType> = {
  "hra-exemption": "hra-exemption",
  "rent-receipt": "rent-receipt",
  "hra-tax-benefit": "hra-tax-benefit",
}

export const validHraSlugs = Object.keys(slugToHraType)

