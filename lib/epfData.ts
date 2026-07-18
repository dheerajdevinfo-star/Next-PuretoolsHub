export type EpfType =
  | "epf"
  | "epf-withdrawal"
  | "epf-balance-check"
  | "epf-interest-calculator"
  | "eps-calculator"


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

export interface EpfTypeConfig {
  // Basic Info
  epfTypeKey: EpfType
  title: string
  description: string
  keywords: string[]

  // SEO
  metaTitle: string
  metaDescription: string

  // Calculator Defaults
  defaultSalary: number
  defaultAge: number
  defaultRetire: number
  defaultRate: number

  // Article Content
  content: ContentSection[]

  // FAQs
  faqs: FAQ[]

  // Related Calculators
  relatedTools: RelatedTool[]
}

export const epfConfig: Record<EpfType, EpfTypeConfig> = {

  "epf": {
    epfTypeKey: "epf" as EpfType,
    title: "EPF Calculator",
    description: "Calculate your Employee Provident Fund maturity amount and total corpus at retirement instantly — completely free.",
    metaTitle: "EPF Calculator – Calculate Provident Fund Balance Online Free",
    metaDescription: "Calculate your EPF maturity amount and total returns instantly with our free calculator. Find your Employee Provident Fund balance at retirement accurately.",
    defaultSalary: 50000,
    defaultAge: 25,
    defaultRetire: 58,
    defaultRate: 8.15,
    content: [
      {
        heading: "How to Use the EPF Calculator",
        body: `<p>Calculating your EPF maturity amount takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>current age</strong> and <strong>retirement age</strong> to determine your remaining contribution period.</li>
        <li>Enter your <strong>current monthly basic salary</strong> plus dearness allowance (DA), since EPF contributions are calculated on this amount.</li>
        <li>Enter your <strong>expected annual salary increment</strong> percentage.</li>
        <li>The <strong>EPF contribution rate</strong> (12% each for employee and employer) and <strong>current interest rate</strong> are pre-filled.</li>
        <li>Click <strong>Calculate</strong> to instantly see your total EPF corpus at retirement, including both employee and employer contributions and accumulated interest.</li>
      </ol>
      <p>The calculator shows a year-by-year breakdown of how your EPF balance grows with salary increments and compounding interest.</p>`
      },
      {
        heading: "What is EPF?",
        body: `<p><strong>EPF (Employee Provident Fund)</strong> is a government-mandated retirement savings scheme administered by the <strong>Employees' Provident Fund Organisation (EPFO)</strong>. It requires both the employee and employer to contribute a fixed percentage of the employee's basic salary every month towards a provident fund account, which grows with interest and is available to the employee at retirement or under specific circumstances.</p>
      <p>EPF is one of the most significant long-term savings instruments for salaried employees in India, offering guaranteed, tax-efficient returns along with social security benefits through the Employee Pension Scheme (EPS) component.</p>`
      },
      {
        heading: "EPF Contribution Structure",
        body: `<p>EPF contributions are made by both the employee and employer:</p>
      <ul>
        <li><strong>Employee Contribution</strong> — 12% of basic salary + DA, deducted from the employee's salary every month and deposited into the EPF account.</li>
        <li><strong>Employer Contribution</strong> — Also 12% of basic salary + DA, contributed by the employer. However, this is split as follows:
          <ul>
            <li>3.67% goes into the <strong>EPF account</strong></li>
            <li>8.33% goes into the <strong>Employee Pension Scheme (EPS)</strong></li>
          </ul>
        </li>
      </ul>
      <p>For establishments with fewer than 20 employees or those in certain industries, the contribution rate may be 10% instead of 12%. Additionally, employees can voluntarily contribute more than 12% through the Voluntary Provident Fund (VPF) option.</p>`
      },
      {
        heading: "EPF Interest Rate and Calculation",
        body: `<p>EPF interest is calculated on the <strong>monthly running balance</strong> and credited to the account at the end of each financial year. The interest rate is declared annually by the EPFO and approved by the government.</p>
      <p class="formula">Monthly Interest = (Opening Balance + Monthly Contributions) × (Annual Rate ÷ 12 ÷ 100)</p>
      <p>The EPF interest rate has historically ranged between 8% to 8.65% per annum in recent years. For FY 2023-24, the rate was set at <strong>8.25% per annum</strong>. This rate is subject to annual revision by EPFO.</p>
      <p>Importantly, EPF interest is <strong>tax-free</strong> up to a contribution limit. Employee contributions above ₹2.5 lakh per year attract tax on the interest earned on the excess amount.</p>`
      },
      {
        heading: "Key Benefits of EPF",
        body: `<p>EPF offers several important benefits beyond just retirement savings:</p>
      <ol>
        <li><strong>Tax Benefits</strong> — Employee contributions qualify for Section 80C deduction up to ₹1.5 lakh per year. Interest earned and maturity amount are tax-free up to specified limits.</li>
        <li><strong>Employer Contribution</strong> — The employer's contribution is essentially free money added to your retirement corpus, with no cost to the employee.</li>
        <li><strong>Guaranteed Returns</strong> — EPF offers government-backed guaranteed returns, making it one of the safest long-term savings instruments available.</li>
        <li><strong>Partial Withdrawal</strong> — EPF allows partial withdrawals for specific purposes like home purchase, medical emergencies, or education after specified years of service.</li>
        <li><strong>Insurance Cover</strong> — EPFO provides life insurance cover under the Employees' Deposit Linked Insurance (EDLI) scheme at no additional cost to the employee.</li>
      </ol>`
      },
      {
        heading: "Why Use Our EPF Calculator?",
        body: `<p>Our calculator helps you plan your retirement corpus smartly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate EPF maturity amount projections</li>
        <li>See the impact of salary increments on your final EPF corpus</li>
        <li>Understand how long-term compounding grows your provident fund balance</li>
        <li>Plan additional voluntary contributions (VPF) to boost your retirement savings</li>
      </ul>`
      }
    ],

    keywords: [
      "EPF calculator",
      "EPF calculator online",
      "provident fund calculator",
      "EPF maturity calculator",
      "employee provident fund calculator India",
    ],

    faqs: [
      {
        q: "What is EPF?",
        a: "EPF (Employee Provident Fund) is a government-mandated retirement savings scheme where both employee and employer contribute 12% of basic salary monthly, growing with interest to build a retirement corpus."
      },
      {
        q: "What is the current EPF interest rate?",
        a: "The EPF interest rate for FY 2023-24 is 8.25% per annum, declared by EPFO and approved by the government. The rate is reviewed and announced annually."
      },
      {
        q: "How much does the employer contribute to EPF?",
        a: "The employer contributes 12% of the employee's basic salary, of which 3.67% goes into the EPF account and 8.33% goes into the Employee Pension Scheme (EPS)."
      },
      {
        q: "Can I withdraw my EPF before retirement?",
        a: "Yes, partial EPF withdrawals are allowed for specific purposes like home purchase, medical treatment, education, or marriage, subject to minimum years of service and other conditions."
      },
      {
        q: "Is EPF interest taxable?",
        a: "EPF interest is tax-free for employee contributions up to ₹2.5 lakh per year. Interest on contributions above this threshold is taxable as per your applicable income tax slab."
      },
    ],

    relatedTools: [
      { label: "EPF Withdrawal Calculator", href: "/finance/epf/epf-withdrawal", description: 'Calculate your EPF withdrawal amount' },
      { label: "EPF Interest Calculator", href: "/finance/epf/epf-interest-calculator", description: 'Calculate EPF interest earned on your balance' },
      { label: "EPF Balance Check", href: "/finance/epf/epf-balance-check", description: "Check and estimate your current EPF balance" },
    ],
  },

  "epf-withdrawal": {
    epfTypeKey: "epf-withdrawal" as EpfType,
    title: "EPF Withdrawal Calculator",
    description: "Calculate how much you can withdraw from your EPF account based on your balance, years of service, and reason for withdrawal — completely free.",

    metaTitle: "EPF Withdrawal Calculator – Calculate PF Withdrawal Amount Free",
    metaDescription: "Calculate your EPF withdrawal amount instantly with our free calculator. Find out how much you can withdraw from your provident fund based on your balance and reason.",
    defaultSalary: 50000,
    defaultAge: 35,
    defaultRetire: 58,
    defaultRate: 8.15,
    content: [
      {
        heading: "How to Use the EPF Withdrawal Calculator",
        body: `<p>Calculating your EPF withdrawal amount takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>current EPF balance</strong> as shown in your EPFO passbook or UAN portal.</li>
        <li>Enter your <strong>total years of service</strong> with EPF contributions.</li>
        <li>Select the <strong>reason for withdrawal</strong> — retirement, unemployment, home purchase, medical emergency, education, or marriage.</li>
        <li>Click <strong>Calculate</strong> to instantly see the maximum amount you can withdraw, applicable tax implications, and any conditions.</li>
      </ol>
      <p>The calculator clearly shows your withdrawal eligibility based on EPFO rules and the exact amount you can claim.</p>`
      },
      {
        heading: "Types of EPF Withdrawal",
        body: `<p>EPF withdrawal is categorized into two types:</p>
      <ul>
        <li><strong>Full Withdrawal</strong> — The entire EPF balance can be withdrawn only upon retirement (age 58), or after remaining unemployed for more than 2 months. In case of unemployment, 75% of the balance can be withdrawn after 1 month and the remaining 25% after 2 months of unemployment.</li>
        <li><strong>Partial Withdrawal</strong> — Allowed for specific purposes before retirement, subject to minimum service period and other conditions set by EPFO.</li>
      </ul>`
      },
      {
        heading: "EPF Partial Withdrawal Rules by Purpose",
        body: `<p>EPFO allows partial withdrawal for the following specific purposes:</p>
      <ul>
        <li><strong>Home Purchase or Construction</strong> — Up to 90% of EPF balance after 5 years of service, for purchase or construction of a house.</li>
        <li><strong>Home Loan Repayment</strong> — Up to 90% of EPF balance after 10 years of service, for repayment of an outstanding home loan.</li>
        <li><strong>Medical Emergency</strong> — Up to 6 months basic salary or employee's share with interest, whichever is lower, for treatment of serious illness of self or family members. No minimum service period required.</li>
        <li><strong>Education</strong> — Up to 50% of employee's share with interest, after 7 years of service, for higher education of self or children.</li>
        <li><strong>Marriage</strong> — Up to 50% of employee's share with interest, after 7 years of service, for marriage of self, sibling, or children.</li>
        <li><strong>Pre-retirement</strong> — Up to 90% of total EPF balance (including employer's share) one year before retirement at age 57.</li>
      </ul>`
      },
      {
        heading: "Tax on EPF Withdrawal",
        body: `<p>Tax treatment on EPF withdrawal depends on your years of continuous service:</p>
      <ul>
        <li><strong>After 5 or more years of continuous service</strong> — EPF withdrawal is completely tax-free, including both principal and interest.</li>
        <li><strong>Before 5 years of continuous service</strong> — The withdrawal amount is fully taxable as per your applicable income tax slab, and TDS is deducted at 10% if the amount exceeds ₹50,000 (provided PAN is submitted). Without PAN, TDS is deducted at 34.608%.</li>
        <li><strong>Transfer between employers</strong> — Transferring EPF from one employer to another does not count as withdrawal and does not attract tax, with the service period continuing uninterrupted.</li>
      </ul>`
      },
      {
        heading: "How to Apply for EPF Withdrawal",
        body: `<p>EPF withdrawal can be applied for through the following methods:</p>
      <ol>
        <li><strong>Online through UAN Portal</strong> — Log in to the EPFO member portal (member.epfindia.gov.in) with your UAN and password, go to Online Services, and submit Form 19 (full withdrawal) or Form 31 (partial withdrawal) online.</li>
        <li><strong>Through Employer</strong> — Submit the physical withdrawal form (Form 19, 10C, or 31) to your employer, who will attest and forward it to the EPFO office.</li>
        <li><strong>Directly to EPFO</strong> — If the employer is not cooperating or has closed down, you can submit the form directly to the EPFO regional office with appropriate documentation.</li>
      </ol>
      <p>Online withdrawal is typically processed within 15 to 20 working days, while offline applications may take longer.</p>`
      },
      {
        heading: "Why Use Our EPF Withdrawal Calculator?",
        body: `<p>Our calculator helps you plan your EPF withdrawal smartly by allowing you to:</p>
      <ul>
        <li>Instantly check your withdrawal eligibility based on service years and reason</li>
        <li>Calculate the exact maximum amount you can withdraw</li>
        <li>Understand the tax implications before submitting your withdrawal claim</li>
        <li>Decide between partial and full withdrawal based on your financial needs</li>
      </ul>`
      }
    ],

    keywords: [
      "EPF withdrawal calculator",
      "PF withdrawal calculator",
      "EPF partial withdrawal calculator",
      "EPF withdrawal amount calculator",
      "EPF withdrawal rules India",
    ],

    faqs: [
      {
        q: "When can I withdraw my full EPF balance?",
        a: "You can withdraw your full EPF balance upon retirement at age 58, or after remaining unemployed for more than 2 months. In case of unemployment, 75% can be withdrawn after 1 month and the remaining 25% after 2 months."
      },
      {
        q: "Is EPF withdrawal taxable?",
        a: "EPF withdrawal after 5 or more years of continuous service is completely tax-free. Withdrawal before 5 years is taxable as per your applicable slab, with TDS deducted at 10% on amounts exceeding ₹50,000."
      },
      {
        q: "How much EPF can I withdraw for a home loan?",
        a: "You can withdraw up to 90% of your EPF balance after 10 years of service for repayment of an outstanding home loan on a property registered in your name or jointly with your spouse."
      },
      {
        q: "Can I withdraw EPF while still employed?",
        a: "Yes, partial EPF withdrawals are allowed for specific purposes like home purchase, medical emergency, education, or marriage while still employed, subject to minimum service periods and EPFO conditions."
      },
      {
        q: "How long does EPF withdrawal take?",
        a: "Online EPF withdrawal claims submitted through the UAN portal are typically processed within 15 to 20 working days. The amount is credited directly to your bank account linked with your UAN."
      },
    ],

    relatedTools: [
      { label: "EPF Calculator", href: "/finance/epf", description: 'Calculate your EPF maturity amount' },
      { label: "EPF Interest Calculator", href: "/finance/epf/epf-interest-calculator", description: 'Calculate EPF interest earned on your balance' },
      { label: "EPF Balance Check", href: "/finance/epf/epf-balance-check", description: "Check and estimate your current EPF balance" },
    ],
  },

  "epf-balance-check": {
    epfTypeKey: "epf-balance-check" as EpfType,
    title: "EPF Balance Check",
    description: "Check and estimate your current EPF balance instantly, and learn all the ways to check your provident fund balance online — completely free.",
    metaTitle: "EPF Balance Check – Check & Calculate PF Balance Online Free",
    metaDescription: "Check and calculate your EPF balance instantly with our free tool. Find your estimated provident fund balance and learn all ways to check your PF balance online.",
    defaultSalary: 50000,
    defaultAge: 30,
    defaultRetire: 58,
    defaultRate: 8.15,
    content: [
      {
        heading: "How to Use the EPF Balance Calculator",
        body: `<p>Estimating your current EPF balance takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>monthly basic salary</strong> at the time of joining and your <strong>current monthly basic salary</strong>.</li>
        <li>Enter your <strong>total years of EPF contribution</strong>.</li>
        <li>Enter your <strong>average annual salary increment</strong> percentage over the period.</li>
        <li>The <strong>EPF contribution rate</strong> (12%) and <strong>current interest rate</strong> (8.25%) are pre-filled.</li>
        <li>Click <strong>Calculate</strong> to instantly see your estimated current EPF balance, including both employee and employer contributions with accumulated interest.</li>
      </ol>
      <p>Note: This calculator provides an estimate based on your inputs. For your exact balance, check directly through the official EPFO portal or app using your UAN.</p>`
      },
      {
        heading: "What is EPF Balance?",
        body: `<p>Your <strong>EPF balance</strong> is the total amount accumulated in your Employee Provident Fund account, comprising your own monthly contributions (12% of basic salary), your employer's contributions (3.67% of basic salary, with 8.33% going to EPS), and the interest earned on the total balance at the rate declared annually by EPFO.</p>
      <p>Your EPF balance grows every month with new contributions and earns compound interest credited annually. Tracking your EPF balance regularly helps you plan your retirement corpus and identify any discrepancies in employer contributions.</p>`
      },
      {
        heading: "Ways to Check Your EPF Balance Online",
        body: `<p>EPFO provides multiple convenient ways to check your EPF balance:</p>
      <ol>
        <li><strong>EPFO Member Portal (UAN Portal)</strong> — Visit member.epfindia.gov.in, log in with your UAN and password, and check your passbook for the complete transaction history and current balance.</li>
        <li><strong>UMANG App</strong> — Download the UMANG app, search for EPFO services, and view your EPF passbook and balance using your UAN.</li>
        <li><strong>SMS</strong> — Send an SMS "EPFOHO UAN ENG" to 7738299899 from your registered mobile number to receive your EPF balance details via SMS.</li>
        <li><strong>Missed Call</strong> — Give a missed call to 011-22901406 from your registered mobile number to receive an SMS with your EPF balance.</li>
        <li><strong>EPF Passbook</strong> — Log in to passbook.epfindia.gov.in with your UAN to view and download your complete EPF passbook.</li>
      </ol>`
      },
      {
        heading: "How to Activate Your UAN",
        body: `<p>To check your EPF balance online, you need an active UAN (Universal Account Number). Here's how to activate it:</p>
      <ol>
        <li>Visit the UAN member portal at <strong>unifiedportal-mem.epfindia.gov.in</strong>.</li>
        <li>Click on <strong>Activate UAN</strong> on the homepage.</li>
        <li>Enter your <strong>UAN, Aadhaar or PAN or Member ID</strong>, date of birth, mobile number, and captcha.</li>
        <li>Click <strong>Get Authorization Pin</strong> — an OTP will be sent to your registered mobile number.</li>
        <li>Enter the OTP and set a new password to activate your UAN account.</li>
      </ol>
      <p>Your UAN is provided by your employer and remains the same across all jobs throughout your career. You can find your UAN on your salary slip or by asking your HR department.</p>`
      },
      {
        heading: "Why Should You Check Your EPF Balance Regularly?",
        body: `<p>Regularly monitoring your EPF balance is important for several reasons:</p>
      <ul>
        <li><strong>Verify employer contributions</strong> — Ensure your employer is depositing your EPF contributions on time every month, as delayed deposits can reduce your interest earnings.</li>
        <li><strong>Track retirement corpus growth</strong> — Monitor how your retirement savings are growing year over year.</li>
        <li><strong>Identify discrepancies</strong> — Catch any errors in contributions or interest credits early and raise them with your employer or EPFO for correction.</li>
        <li><strong>Plan withdrawals</strong> — Know your available balance before applying for partial withdrawals for home purchase, medical needs, or other purposes.</li>
      </ul>`
      },
      {
        heading: "Why Use Our EPF Balance Calculator?",
        body: `<p>Our calculator helps you estimate and plan your EPF savings by allowing you to:</p>
      <ul>
        <li>Get an instant estimate of your current EPF balance based on contributions and interest</li>
        <li>Understand how your balance has grown through compounding over the years</li>
        <li>Plan additional VPF contributions to boost your retirement corpus</li>
        <li>Cross-check your estimated balance against your official EPFO passbook</li>
      </ul>`
      }
    ],

    keywords: [
      "EPF balance check",
      "EPF balance check online",
      "PF balance check",
      "EPF balance calculator",
      "EPF balance check by UAN",
    ],

    faqs: [
      {
        q: "How can I check my EPF balance online?",
        a: "You can check your EPF balance through the EPFO member portal (member.epfindia.gov.in), UMANG app, by sending SMS 'EPFOHO UAN ENG' to 7738299899, or by giving a missed call to 011-22901406 from your registered mobile number."
      },
      {
        q: "What is UAN and why do I need it to check EPF balance?",
        a: "UAN (Universal Account Number) is a 12-digit number allotted to every EPF member by EPFO. It is required to access the EPFO member portal and check your EPF balance, passbook, and other account details online."
      },
      {
        q: "How often is EPF interest credited to my account?",
        a: "EPF interest is calculated monthly on the running balance but credited to your account once a year at the end of the financial year on 31st March."
      },
      {
        q: "What should I do if my EPF balance is not updated?",
        a: "If your EPF balance is not updated, first check with your employer to confirm contributions are being deposited. If the employer is depositing but the balance is not reflecting, raise a grievance on the EPFO Grievance Portal (epfigms.gov.in)."
      },
      {
        q: "Can I check EPF balance without UAN?",
        a: "Checking EPF balance without UAN is difficult through online methods. You would need to contact your employer or visit the nearest EPFO regional office with your member ID and identity documents to get your balance details."
      },
    ],

    relatedTools: [
      { label: "EPF Calculator", href: "/finance/epf", description: 'Calculate your EPF maturity amount at retirement' },
      { label: "EPF Withdrawal Calculator", href: "/finance/epf/epf-withdrawal", description: 'Calculate your EPF withdrawal amount' },
      { label: "EPF Interest Calculator", href: "/finance/epf/epf-interest-calculator", description: "Calculate EPF interest earned on your balance" },
    ],
  },

  "epf-interest-calculator": {
    epfTypeKey: "epf-interest-calculator" as EpfType,
    title: "EPF Interest Calculator",
    description: "Calculate the interest earned on your EPF balance month by month and understand exactly how your provident fund grows — completely free.",
    metaTitle: "EPF Interest Calculator – Calculate PF Interest Earned Free",
    metaDescription: "Calculate EPF interest earned on your provident fund balance instantly with our free calculator. Understand exactly how EPF interest is calculated month by month.",
    defaultSalary: 50000,
    defaultAge: 25,
    defaultRetire: 58,
    defaultRate: 8.15,
    content: [
      {
        heading: "How to Use the EPF Interest Calculator",
        body: `<p>Calculating your EPF interest takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>opening EPF balance</strong> at the start of the financial year.</li>
        <li>Enter your <strong>monthly basic salary</strong> to calculate monthly contributions.</li>
        <li>The <strong>EPF contribution rate</strong> (12% employee + 3.67% employer into EPF) and <strong>current interest rate</strong> (8.25% per annum) are pre-filled.</li>
        <li>Click <strong>Calculate</strong> to instantly see the month-by-month interest earned and your closing EPF balance at year end.</li>
      </ol>
      <p>The calculator shows exactly how EPF interest accumulates on both your opening balance and each month's fresh contributions throughout the financial year.</p>`
      },
      {
        heading: "How EPF Interest is Calculated",
        body: `<p>EPF interest calculation follows a specific method that many members are unaware of:</p>
      <ul>
        <li>Interest is calculated on the <strong>monthly running balance</strong> — the total EPF balance at the end of each month after new contributions are added.</li>
        <li>The monthly interest is calculated as: <strong>Monthly Balance × (Annual Rate ÷ 12 ÷ 100)</strong></li>
        <li>This monthly interest is <strong>not credited monthly</strong> — it is accumulated throughout the year and credited to your account as a lump sum at the end of the financial year on 31st March.</li>
        <li>Once credited, the interest becomes part of your balance and earns further interest in subsequent years — this is the compounding effect of EPF.</li>
      </ul>`
      },
      {
        heading: "EPF Interest Calculation Formula",
        body: `<p>The EPF interest for a financial year is calculated as:</p>
      <p class="formula">Monthly Interest = Monthly Running Balance × (Annual Rate ÷ 12 ÷ 100)</p>
      <p class="formula">Annual Interest Credited = Sum of Monthly Interest for all 12 months</p>
      <p><strong>Example:</strong></p>
      <ul>
        <li>Opening balance (April 1) = ₹5,00,000</li>
        <li>Monthly EPF contribution (employee + employer into EPF) = ₹3,600 (12% + 3.67% of ₹20,000 basic)</li>
        <li>Annual interest rate = 8.25%</li>
        <li>Monthly interest rate = 8.25% ÷ 12 = 0.6875%</li>
        <li>April interest = ₹5,03,600 × 0.6875% = ₹3,462</li>
        <li>May interest = ₹5,07,200 × 0.6875% = ₹3,487</li>
        <li>And so on for all 12 months...</li>
      </ul>
      <p>The total of all monthly interest amounts is credited to your account on 31st March as your annual EPF interest.</p>`
      },
      {
        heading: "EPF Interest Rate History",
        body: `<p>The EPF interest rate is declared annually by EPFO and approved by the government. Here is the recent interest rate history:</p>
      <ul>
        <li><strong>FY 2023-24</strong> — 8.25% per annum</li>
        <li><strong>FY 2022-23</strong> — 8.15% per annum</li>
        <li><strong>FY 2021-22</strong> — 8.10% per annum (lowest in 4 decades)</li>
        <li><strong>FY 2020-21</strong> — 8.50% per annum</li>
        <li><strong>FY 2019-20</strong> — 8.50% per annum</li>
        <li><strong>FY 2018-19</strong> — 8.65% per annum</li>
      </ul>
      <p>Note: EPF interest rates are subject to annual revision by EPFO. Always verify the latest applicable rate on the official EPFO website before making financial decisions.</p>`
      },
      {
        heading: "Is EPF Interest Taxable?",
        body: `<p>EPF interest tax rules were revised in the Union Budget 2021:</p>
      <ul>
        <li><strong>Employee contributions up to ₹2.5 lakh per year</strong> — Interest earned on this portion remains completely tax-free.</li>
        <li><strong>Employee contributions above ₹2.5 lakh per year</strong> — Interest earned on the excess contribution is taxable as per your applicable income tax slab from FY 2021-22 onwards.</li>
        <li><strong>Employer contributions</strong> — The employer's contribution to EPF (3.67% of basic salary) and the interest on it remain tax-free for the employee.</li>
      </ul>
      <p>For most salaried employees with basic salary below approximately ₹1.74 lakh per month, the 12% employee contribution stays within the ₹2.5 lakh annual limit, keeping their EPF interest fully tax-free.</p>`
      },
      {
        heading: "Why Use Our EPF Interest Calculator?",
        body: `<p>Our calculator helps you understand your EPF growth clearly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate month-by-month EPF interest calculations</li>
        <li>Understand exactly how your EPF balance grows through compounding interest</li>
        <li>See the impact of salary increments on your annual interest earnings</li>
        <li>Plan voluntary PF contributions to maximize your tax-free interest income</li>
      </ul>`
      }
    ],

    keywords: [
      "EPF interest calculator",
      "PF interest calculator",
      "EPF interest rate calculator",
      "provident fund interest calculator",
      "EPF interest calculation formula India",
    ],

    faqs: [
      {
        q: "How is EPF interest calculated?",
        a: "EPF interest is calculated on the monthly running balance using the formula: Monthly Balance × (Annual Rate ÷ 12 ÷ 100). The total monthly interest for all 12 months is accumulated and credited to your account at the end of the financial year."
      },
      {
        q: "When is EPF interest credited?",
        a: "EPF interest is credited once a year at the end of the financial year on 31st March. Although calculated monthly, it is not paid out monthly but added as a lump sum to your balance annually."
      },
      {
        q: "What is the current EPF interest rate?",
        a: "The current EPF interest rate for FY 2023-24 is 8.25% per annum, declared by EPFO and approved by the Ministry of Finance. The rate is reviewed and announced annually."
      },
      {
        q: "Is EPF interest taxable?",
        a: "EPF interest is tax-free on employee contributions up to ₹2.5 lakh per year. Interest on employee contributions above ₹2.5 lakh annually is taxable as per applicable income tax slab rates from FY 2021-22 onwards."
      },
      {
        q: "Why did my EPF interest not get credited on time?",
        a: "EPF interest is typically credited by 31st March but may sometimes be delayed by EPFO due to administrative reasons or pending employer contribution deposits. If interest is not credited even after April, raise a grievance on the EPFO Grievance Portal."
      },
    ],

    relatedTools: [
      { label: "EPF Calculator", href: "/finance/epf", description: 'Calculate your EPF maturity amount at retirement' },
      { label: "EPF Withdrawal Calculator", href: "/finance/epf/epf-withdrawal", description: 'Calculate your EPF withdrawal amount' },
      { label: "EPS Calculator", href: "/finance/epf/eps-calculator", description: "Calculate your Employee Pension Scheme amount" },
    ],
  },

  "eps-calculator": {
    epfTypeKey: "eps-calculator" as EpfType,
    title: "EPS Calculator",
    description: "Calculate your Employee Pension Scheme monthly pension amount at retirement based on your salary and years of service — completely free.",
    metaTitle: "EPS Calculator – Calculate Employee Pension Scheme Amount Free",
    metaDescription: "Calculate your EPS (Employee Pension Scheme) pension amount instantly with our free calculator. Find your monthly pension at retirement based on salary and service.",
    defaultSalary: 50000,
    defaultAge: 30,
    defaultRetire: 58,
    defaultRate: 8.15,
    content: [
      {
        heading: "How to Use the EPS Calculator",
        body: `<p>Calculating your EPS pension amount takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>pensionable salary</strong> — the average monthly salary (basic + DA) for the last 60 months before retirement, capped at ₹15,000.</li>
        <li>Enter your <strong>total pensionable service</strong> in years (the number of years you have contributed to EPS).</li>
        <li>Click <strong>Calculate</strong> to instantly see your estimated monthly EPS pension amount at retirement.</li>
      </ol>
      <p>The calculator applies the official EPS pension formula prescribed by EPFO to give you an accurate pension estimate.</p>`
      },
      {
        heading: "What is EPS?",
        body: `<p><strong>EPS (Employee Pension Scheme)</strong> is a pension scheme under EPFO that provides a monthly pension to employees after retirement, along with pension benefits to their family in case of the employee's death or disability. It was introduced in 1995 and covers all EPF members.</p>
      <p>Unlike the EPF account where you receive a lump sum at retirement, EPS provides a <strong>regular monthly pension for life</strong> after you reach the age of 58, making it an important component of retirement income planning for salaried employees.</p>`
      },
      {
        heading: "EPS Pension Calculation Formula",
        body: `<p>The monthly EPS pension is calculated using the following official formula:</p>
      <p class="formula">Monthly Pension = (Pensionable Salary × Pensionable Service) ÷ 70</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>Pensionable Salary</strong> = Average monthly salary (basic + DA) for the last 60 months before retirement, subject to a maximum of ₹15,000 per month</li>
        <li><strong>Pensionable Service</strong> = Total years of EPS contribution, with a bonus of 2 years added if the member has completed 20 or more years of service</li>
      </ul>
      <p>For example, if your pensionable salary is ₹15,000 and you have 25 years of service (with 2-year bonus = 27 years), your monthly pension would be:</p>
      <p>(₹15,000 × 27) ÷ 70 = <strong>₹5,785 per month</strong></p>`
      },
      {
        heading: "EPS Contribution Structure",
        body: `<p>EPS contributions come entirely from the employer's share, not the employee:</p>
      <ul>
        <li>The employer contributes 12% of the employee's basic salary + DA to EPFO.</li>
        <li>Of this 12%, <strong>8.33%</strong> goes into the EPS account (capped at ₹1,250 per month, based on ₹15,000 salary cap).</li>
        <li>The remaining <strong>3.67%</strong> goes into the EPF account.</li>
        <li>The government also contributes <strong>1.16% of basic salary</strong> towards EPS for eligible employees.</li>
      </ul>
      <p>Employees do not make any direct contribution to EPS — the entire pension corpus is funded by the employer's and government's contributions.</p>`
      },
      {
        heading: "Key EPS Rules and Eligibility",
        body: `<p>Important rules governing EPS pension eligibility:</p>
      <ol>
        <li><strong>Minimum service for pension</strong> — You must have completed at least 10 years of eligible service to receive a monthly pension from EPS at retirement.</li>
        <li><strong>Retirement age</strong> — The standard pension begins at age 58. Early pension can be drawn from age 50, but it is reduced by 4% for each year before 58.</li>
        <li><strong>Service bonus</strong> — If you have completed 20 or more years of pensionable service, 2 additional years are added to your service period for pension calculation.</li>
        <li><strong>Maximum pension</strong> — The maximum monthly pension under EPS is capped based on the ₹15,000 salary limit, resulting in a maximum pension of approximately ₹7,500 per month under the standard formula.</li>
        <li><strong>Withdrawal before 10 years</strong> — If you leave employment before completing 10 years of service, you can withdraw your EPS corpus as a lump sum instead of receiving a monthly pension.</li>
      </ol>`
      },
      {
        heading: "Why Use Our EPS Calculator?",
        body: `<p>Our calculator helps you plan your retirement income by allowing you to:</p>
      <ul>
        <li>Get instant, accurate EPS pension estimates based on the official formula</li>
        <li>Understand how additional years of service impact your monthly pension</li>
        <li>Plan your retirement income by combining EPS pension with EPF corpus and other savings</li>
        <li>Make informed decisions about early retirement vs continuing service for higher pension</li>
      </ul>`
      }
    ],

    keywords: [
      "EPS calculator",
      "employee pension scheme calculator",
      "EPS pension calculator",
      "EPF pension calculator",
      "EPS pension amount calculator India",
    ],

    faqs: [
      {
        q: "What is EPS pension?",
        a: "EPS (Employee Pension Scheme) is a pension scheme under EPFO that provides a regular monthly pension for life to eligible employees after retirement at age 58, along with family pension benefits in case of death or disability."
      },
      {
        q: "How is EPS pension calculated?",
        a: "EPS monthly pension is calculated using the formula: (Pensionable Salary × Pensionable Service) ÷ 70, where pensionable salary is capped at ₹15,000 and service above 20 years gets a 2-year bonus."
      },
      {
        q: "What is the minimum service required for EPS pension?",
        a: "A minimum of 10 years of eligible EPS service is required to receive a monthly pension at retirement. If you leave employment before 10 years, you can withdraw your EPS corpus as a lump sum."
      },
      {
        q: "What is the maximum EPS pension I can receive?",
        a: "The maximum monthly EPS pension under the standard formula is approximately ₹7,500 per month, based on the ₹15,000 pensionable salary cap and maximum service with 2-year bonus."
      },
      {
        q: "Can I withdraw my EPS amount before retirement?",
        a: "Yes, if you leave employment before completing 10 years of eligible service, you can withdraw your EPS corpus as a lump sum using Form 10C. Once you have completed 10 or more years, only a monthly pension is available at retirement — withdrawal is not permitted."
      },
    ],

    relatedTools: [
      { label: "EPF Calculator", href: "/finance/epf", description: 'Calculate your EPF maturity amount at retirement' },
      { label: "EPF Withdrawal Calculator", href: "/finance/epf/epf-withdrawal", description: 'Calculate your EPF withdrawal amount' },
      { label: "EPF Interest Calculator", href: "/finance/epf/epf-interest-calculator", description: "Calculate EPF interest earned on your balance" },
    ],
  },
}

export const slugToEpfType: Record<string, EpfType> = {
  "epf-withdrawal": "epf-withdrawal",
  "epf-balance-check": "epf-balance-check",
  "epf-interest-calculator": "epf-interest-calculator",
  "eps-calculator": "eps-calculator",
}

export const validEpfSlugs = Object.keys(slugToEpfType)