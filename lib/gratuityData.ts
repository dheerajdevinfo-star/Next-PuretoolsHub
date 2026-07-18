export type GratuityType =
  | "gratuity"
  | "gratuity-eligibility"
  | "gratuity-tax-calculator"
  | "gratuity-formula"

export const gratuityConfig = {

  "gratuity": {
    gratuityTypeKey: "gratuity" as GratuityType,
    title: "Gratuity Calculator",
    description: "Calculate your gratuity amount instantly based on your last drawn salary and years of service — completely free.",

    metaTitle: "Gratuity Calculator – Calculate Gratuity Amount Online Free",
    metaDescription: "Calculate your gratuity amount instantly with our free calculator. Find your exact gratuity based on last drawn salary and years of service as per the Payment of Gratuity Act.",

    defaultSalary: 50000,
    defaultYears: 10,
    defaultMonths: 0,
    content: [
      {
        heading: "How to Use the Gratuity Calculator",
        body: `<p>Calculating your gratuity amount takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>last drawn monthly salary</strong> — basic salary plus dearness allowance (DA).</li>
        <li>Enter your <strong>total years of service</strong> with the employer.</li>
        <li>Select whether your employer is <strong>covered under the Payment of Gratuity Act</strong> or not, since the formula differs slightly.</li>
        <li>Click <strong>Calculate</strong> to instantly see your total gratuity amount payable.</li>
      </ol>
      <p>The calculator applies the correct formula based on your employer's coverage status and rounds off the service years as per official gratuity rules.</p>`
      },
      {
        heading: "What is Gratuity?",
        body: `<p><strong>Gratuity</strong> is a lump sum payment made by an employer to an employee as a token of appreciation for the services rendered over a long period. It is governed by the <strong>Payment of Gratuity Act, 1972</strong> in India, which mandates gratuity payment to eligible employees upon retirement, resignation, termination, or death or disablement due to accident or illness.</p>
      <p>Gratuity is one of the key retirement benefits for salaried employees in India, alongside EPF and pension. It rewards long-term loyalty to an organization and provides financial support at the time of leaving employment.</p>`
      },
      {
        heading: "Gratuity Calculation Formula",
        body: `<p>The gratuity formula differs based on whether the employer is covered under the Payment of Gratuity Act:</p>
      <p><strong>For employers covered under the Act:</strong></p>
      <p class="formula">Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 26</p>
      <p><strong>For employers NOT covered under the Act:</strong></p>
      <p class="formula">Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 30</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>Last Drawn Salary</strong> = Basic salary + Dearness Allowance (DA)</li>
        <li><strong>15</strong> = Number of days of salary per year of service</li>
        <li><strong>26</strong> = Number of working days in a month (for Act-covered employers)</li>
        <li><strong>Years of Service</strong> = Total completed years, with any fraction above 6 months rounded up to the next year</li>
      </ul>
      <p>For example, if your last drawn basic salary is ₹50,000 and you have completed 10 years and 7 months of service (rounded up to 11 years) with an Act-covered employer, your gratuity would be:</p>
      <p>(₹50,000 × 15 × 11) ÷ 26 = <strong>₹3,17,307</strong></p>`
      },
      {
        heading: "Gratuity Eligibility Conditions",
        body: `<p>To be eligible for gratuity, an employee must meet the following conditions:</p>
      <ol>
        <li><strong>Minimum 5 years of continuous service</strong> — The employee must have completed at least 5 years of uninterrupted service with the same employer. This is the most critical eligibility condition.</li>
        <li><strong>Reason for leaving</strong> — Gratuity is payable upon retirement, resignation after 5 years, termination (not due to misconduct), or death or disablement (no minimum service required in these cases).</li>
        <li><strong>Employer coverage</strong> — The Payment of Gratuity Act applies to establishments with 10 or more employees. However, once covered, the Act continues to apply even if the employee count falls below 10.</li>
      </ol>
      <p>Note: The 5-year minimum service rule is waived in case of death or total disablement — gratuity is payable regardless of service duration in such cases.</p>`
      },
      {
        heading: "Gratuity Tax Treatment",
        body: `<p>Tax treatment of gratuity depends on the type of employee and the amount received:</p>
      <ul>
        <li><strong>Government employees</strong> — Entire gratuity received is fully exempt from income tax, with no upper limit.</li>
        <li><strong>Private sector employees covered under the Act</strong> — Gratuity is exempt up to the least of: actual gratuity received, ₹20 lakh (the statutory maximum), or the formula-calculated amount.</li>
        <li><strong>Private sector employees NOT covered under the Act</strong> — Gratuity is exempt up to the least of: actual gratuity received, ₹20 lakh, or half month's average salary for each completed year of service.</li>
      </ul>
      <p>Any gratuity received above the exempt limit is added to your income and taxed at your applicable slab rate for that financial year.</p>`
      },
      {
        heading: "Why Use Our Gratuity Calculator?",
        body: `<p>Our calculator helps you plan your retirement benefits by allowing you to:</p>
      <ul>
        <li>Get instant, accurate gratuity amount calculations</li>
        <li>Understand the correct formula applicable to your employer type</li>
        <li>Plan your financial goals with your expected gratuity corpus in mind</li>
        <li>Verify the gratuity amount your employer is liable to pay you</li>
      </ul>`
      }
    ],

    keywords: [
      "gratuity calculator",
      "gratuity calculator India",
      "gratuity amount calculator",
      "gratuity calculation formula",
      "gratuity calculator online free",
    ],

    faqs: [
      {
        q: "What is gratuity?",
        a: "Gratuity is a lump sum payment made by an employer to an employee as a reward for long-term service, governed by the Payment of Gratuity Act 1972 in India, payable upon retirement, resignation after 5 years, or death or disablement."
      },
      {
        q: "How is gratuity calculated?",
        a: "For Act-covered employers: Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 26. For non-covered employers: Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 30, where salary includes basic pay and DA."
      },
      {
        q: "What is the minimum service required for gratuity?",
        a: "An employee must complete a minimum of 5 years of continuous service with the same employer to be eligible for gratuity. This condition is waived in case of death or total disablement."
      },
      {
        q: "What is the maximum gratuity amount?",
        a: "The maximum gratuity payable under the Payment of Gratuity Act is ₹20 lakh. Any amount above this is at the employer's discretion and may attract different tax treatment."
      },
      {
        q: "Is gratuity taxable?",
        a: "Gratuity is tax-free up to ₹20 lakh for private sector employees covered under the Payment of Gratuity Act. Government employees receive full tax exemption on gratuity with no upper limit. Any amount above the exempt limit is taxable."
      },
    ],

    relatedTools: [
      { label: "Gratuity Eligibility Calculator", href: "/finance/gratuity/gratuity-eligibility", description: 'Check if you are eligible for gratuity' },
      { label: "Gratuity Tax Calculator", href: "/finance/gratuity/gratuity-tax-calculator", description: 'Calculate tax on your gratuity amount' },
      { label: "Gratuity Formula Calculator", href: "/finance/gratuity/gratuity-formula", description: "Understand and apply the gratuity formula" },
    ],
  },

  "gratuity-eligibility": {
    gratuityTypeKey: "gratuity-eligibility" as GratuityType,
    title: "Gratuity Eligibility Calculator",
    description: "Check instantly whether you are eligible for gratuity based on your years of service and employment conditions — completely free.",

    metaTitle: "Gratuity Eligibility Calculator – Check Gratuity Eligibility Free",
    metaDescription: "Check your gratuity eligibility instantly with our free calculator. Find out if you qualify for gratuity based on your years of service and employment conditions.",
    defaultSalary: 50000,
    defaultYears: 4,
    defaultMonths: 8,
    content: [
      {
        heading: "How to Use the Gratuity Eligibility Calculator",
        body: `<p>Checking your gratuity eligibility takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>date of joining</strong> with your current employer.</li>
        <li>Enter your <strong>date of leaving</strong> or expected last working day.</li>
        <li>Select the <strong>reason for leaving</strong> — resignation, retirement, termination, death, or disablement.</li>
        <li>Select whether your employer has <strong>10 or more employees</strong> (determining Act coverage).</li>
        <li>Click <strong>Calculate</strong> to instantly see whether you are eligible for gratuity, your total years of service, and the earliest date you became eligible.</li>
      </ol>
      <p>The calculator clearly explains your eligibility status and any conditions that may affect your gratuity entitlement.</p>`
      },
      {
        heading: "Who is Eligible for Gratuity?",
        body: `<p>An employee is eligible for gratuity if they meet the following conditions:</p>
      <ul>
        <li><strong>Completed 5 years of continuous service</strong> — The most fundamental eligibility requirement. The employee must have worked with the same employer for at least 5 uninterrupted years.</li>
        <li><strong>Leaving due to eligible reason</strong> — Gratuity is payable on retirement, resignation after 5 years, superannuation, termination (except for misconduct), or death or disablement.</li>
        <li><strong>Employer covered under the Act</strong> — The Payment of Gratuity Act applies to establishments with 10 or more employees at any point. Once covered, it continues even if employee count drops below 10.</li>
      </ul>
      <p>Even if an employer is not covered under the Act, they may still choose to pay gratuity voluntarily, using the applicable formula for non-covered employers.</p>`
      },
      {
        heading: "The 5-Year Continuous Service Rule Explained",
        body: `<p>The 5-year continuous service requirement is the most discussed eligibility condition for gratuity. Here are important nuances:</p>
      <ul>
        <li><strong>4 years and 240 days counts as 5 years</strong> — For employees working 6 days a week, if they have completed 4 years and 240 days of service, it is treated as 5 completed years for gratuity purposes, as confirmed by several court rulings.</li>
        <li><strong>4 years and 190 days counts as 5 years</strong> — For employees working 5 days a week, 4 years and 190 days of service is considered equivalent to 5 years.</li>
        <li><strong>Continuity is key</strong> — Breaks in service due to unauthorised absence, strike, or layoff may affect continuity. However, approved leaves, medical leave, and temporary layoffs generally do not break continuity.</li>
        <li><strong>Transfer between group companies</strong> — Service with related or group companies may be counted as continuous service for gratuity purposes, depending on the terms of employment.</li>
      </ul>`
      },
      {
        heading: "Gratuity Eligibility in Special Circumstances",
        body: `<p>The 5-year service requirement is waived in specific situations:</p>
      <ol>
        <li><strong>Death of employee</strong> — Gratuity is payable to the nominee or legal heir regardless of how many years the employee had served. Even if the employee had worked for just 1 year, the family receives gratuity.</li>
        <li><strong>Total disablement</strong> — If an employee becomes permanently and totally disabled due to an accident or illness, gratuity is payable regardless of service duration.</li>
        <li><strong>Termination by employer</strong> — If an employee is terminated for reasons other than proven misconduct, gratuity is payable even if the termination happens before 5 years of service in some interpretations.</li>
      </ol>`
      },
      {
        heading: "When Must the Employer Pay Gratuity?",
        body: `<p>Once gratuity is triggered, the employer has specific timelines to comply:</p>
      <ul>
        <li><strong>Within 30 days</strong> — The employer must pay the gratuity amount within 30 days of it becoming payable (i.e., from the last working day).</li>
        <li><strong>Interest on delayed payment</strong> — If the employer fails to pay within 30 days without valid reason, the employee is entitled to interest on the gratuity amount at the rate notified by the government.</li>
        <li><strong>Nomination</strong> — Employees should file a gratuity nomination (Form F) with their employer at the time of joining, specifying who should receive the gratuity in case of death.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Gratuity Eligibility Calculator?",
        body: `<p>Our calculator helps you understand your gratuity rights clearly by allowing you to:</p>
      <ul>
        <li>Instantly check your gratuity eligibility based on exact service duration</li>
        <li>Understand the 240-day rule and how it may make you eligible earlier than expected</li>
        <li>Know your eligibility in special circumstances like death or disablement</li>
        <li>Plan your resignation or retirement date to ensure gratuity eligibility</li>
      </ul>`
      }
    ],

    keywords: [
      "gratuity eligibility calculator",
      "gratuity eligibility check",
      "am I eligible for gratuity",
      "gratuity eligibility rules India",
      "gratuity eligibility after 5 years",
    ],

    faqs: [
      {
        q: "What is the minimum service required for gratuity eligibility?",
        a: "An employee must complete a minimum of 5 years of continuous service with the same employer to be eligible for gratuity. However, 4 years and 240 days is considered equivalent to 5 years for employees working 6 days a week."
      },
      {
        q: "Am I eligible for gratuity if I resign before 5 years?",
        a: "Generally, no. Gratuity requires a minimum of 5 years of continuous service. However, if you have completed 4 years and 240 days (for 6-day work week), you may be considered eligible under the 240-day rule."
      },
      {
        q: "Is gratuity payable on death before completing 5 years?",
        a: "Yes, in case of death or total disablement of an employee, gratuity is payable regardless of the years of service completed. The 5-year minimum service condition is fully waived in these circumstances."
      },
      {
        q: "Does gratuity apply to contract or temporary employees?",
        a: "Yes, gratuity applies to all employees — permanent, contract, or temporary — who have completed 5 years of continuous service with the same employer, as long as the employer is covered under the Payment of Gratuity Act."
      },
      {
        q: "What happens if my employer refuses to pay gratuity?",
        a: "If your employer refuses to pay eligible gratuity, you can file a complaint with the Controlling Authority under the Payment of Gratuity Act (usually the Labour Commissioner) within 90 days of the gratuity becoming due."
      },
    ],

    relatedTools: [
      { label: "Gratuity Calculator", href: "/finance/gratuity", description: 'Calculate your total gratuity amount' },
      { label: "Gratuity Tax Calculator", href: "/finance/gratuity/gratuity-tax-calculator", description: 'Calculate tax on your gratuity amount' },
      { label: "Gratuity Formula Calculator", href: "/finance/gratuity/gratuity-formula", description: "Understand and apply the gratuity formula" },
    ],
  },

  "gratuity-tax-calculator": {
    gratuityTypeKey: "gratuity-tax-calculator" as GratuityType,
    title: "Gratuity Tax Calculator",
    description: "Calculate the exact tax exemption and taxable portion of your gratuity amount based on your employment type and service years — completely free.",

    metaTitle: "Gratuity Tax Calculator – Calculate Tax on Gratuity Free",
    metaDescription: "Calculate the tax on your gratuity amount instantly with our free calculator. Find your exact tax exemption and taxable gratuity based on your employment type.",
    defaultSalary: 50000,
    defaultYears: 10,
    defaultMonths: 0,
    content: [
      {
        heading: "How to Use the Gratuity Tax Calculator",
        body: `<p>Calculating the tax on your gratuity takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>actual gratuity amount received</strong> from your employer.</li>
        <li>Select your <strong>employment type</strong> — government employee, private sector employee covered under the Act, or private sector employee not covered under the Act.</li>
        <li>Enter your <strong>last drawn monthly salary</strong> (basic + DA) and <strong>years of service</strong> for formula-based exemption calculation.</li>
        <li>Select your <strong>applicable income tax slab</strong> for the financial year.</li>
        <li>Click <strong>Calculate</strong> to instantly see the exempt portion, taxable gratuity, and the actual tax payable on the taxable amount.</li>
      </ol>
      <p>The calculator applies the correct exemption formula based on your employment type and determines the minimum exemption as prescribed under the Income Tax Act.</p>`
      },
      {
        heading: "Is Gratuity Taxable in India?",
        body: `<p>Gratuity received by an employee is <strong>partially or fully exempt from income tax</strong> in India under Section 10(10) of the Income Tax Act. The extent of exemption depends on the type of employee and the amount received:</p>
      <ul>
        <li><strong>Government employees</strong> — Entire gratuity is fully exempt from income tax with no upper limit.</li>
        <li><strong>Private sector employees covered under the Payment of Gratuity Act</strong> — Gratuity is exempt up to a specified limit, with any amount above being taxable.</li>
        <li><strong>Private sector employees NOT covered under the Act</strong> — A different formula applies for the exempt portion, generally resulting in lower exemption.</li>
      </ul>`
      },
      {
        heading: "Gratuity Tax Exemption Calculation",
        body: `<p>For private sector employees covered under the Payment of Gratuity Act, the tax-exempt gratuity is the <strong>least of the following three amounts</strong>:</p>
      <ul>
        <li><strong>Amount 1</strong> — Actual gratuity received</li>
        <li><strong>Amount 2</strong> — ₹20,00,000 (the statutory maximum exempt limit)</li>
        <li><strong>Amount 3</strong> — (Last drawn salary × 15 × Years of service) ÷ 26</li>
      </ul>
      <p class="formula">Tax Exempt Gratuity = Minimum of (Amount 1, Amount 2, Amount 3)</p>
      <p>For private sector employees NOT covered under the Act, Amount 3 is calculated differently:</p>
      <p class="formula">Amount 3 = (Average salary of last 10 months × 15 × Years of service) ÷ 30</p>
      <p>Any gratuity received above the exempt amount is added to your taxable income for that financial year and taxed at your applicable slab rate.</p>`
      },
      {
        heading: "Gratuity Tax Exemption Examples",
        body: `<p>Let us understand the tax calculation with two examples:</p>
      <p><strong>Example 1 — Covered under the Act:</strong></p>
      <ul>
        <li>Actual gratuity received = ₹12,00,000</li>
        <li>Last drawn salary (basic + DA) = ₹60,000 per month</li>
        <li>Years of service = 15 years</li>
        <li>Formula amount = (₹60,000 × 15 × 15) ÷ 26 = ₹5,19,230</li>
        <li>Exempt gratuity = Minimum of ₹12,00,000, ₹20,00,000, ₹5,19,230 = <strong>₹5,19,230</strong></li>
        <li>Taxable gratuity = ₹12,00,000 − ₹5,19,230 = <strong>₹6,80,770</strong></li>
      </ul>
      <p><strong>Example 2 — Government employee:</strong></p>
      <ul>
        <li>Actual gratuity received = ₹25,00,000</li>
        <li>Exempt gratuity = <strong>₹25,00,000 (fully exempt)</strong></li>
        <li>Taxable gratuity = <strong>Nil</strong></li>
      </ul>`
      },
      {
        heading: "How to Minimize Tax on Gratuity",
        body: `<ul>
        <li><strong>Understand your employment type</strong> — Government employees have unlimited exemption, so no planning is needed. Private sector employees should verify whether their employer is covered under the Act.</li>
        <li><strong>Check previous exemptions used</strong> — If you have received gratuity from a previous employer and claimed exemption, the total lifetime exemption across all employers is capped at ₹20 lakh.</li>
        <li><strong>Timing of receipt</strong> — If you receive gratuity in a year when your other income is lower (such as the year of retirement), the taxable portion may attract a lower slab rate.</li>
        <li><strong>Consult a tax advisor</strong> — For large gratuity amounts where significant tax may be applicable, consulting a chartered accountant can help identify the most tax-efficient approach.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Gratuity Tax Calculator?",
        body: `<p>Our calculator helps you understand your gratuity tax liability clearly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate calculation of exempt and taxable gratuity</li>
        <li>Apply the correct exemption formula based on your employment type</li>
        <li>Understand exactly how much tax you will pay on your gratuity</li>
        <li>Plan your finances better when expecting a large gratuity payment</li>
      </ul>`
      }
    ],

    keywords: [
      "gratuity tax calculator",
      "gratuity tax exemption calculator",
      "is gratuity taxable",
      "gratuity income tax calculator",
      "gratuity tax exemption limit India",
    ],

    faqs: [
      {
        q: "Is gratuity taxable in India?",
        a: "Gratuity is partially or fully exempt from income tax under Section 10(10). Government employees get full exemption. Private sector employees covered under the Gratuity Act are exempt up to ₹20 lakh or the formula amount, whichever is lower."
      },
      {
        q: "What is the maximum tax-free gratuity amount?",
        a: "The maximum tax-exempt gratuity for private sector employees is ₹20,00,000 (₹20 lakh). Government employees have no upper limit — their entire gratuity is tax-free."
      },
      {
        q: "How is the tax-exempt gratuity calculated for private sector employees?",
        a: "For Act-covered employees, the exempt amount is the minimum of actual gratuity received, ₹20 lakh, and (Last salary × 15 × Years of service) ÷ 26. Any amount above this minimum is taxable."
      },
      {
        q: "If I receive gratuity from multiple employers, is the exemption limit cumulative?",
        a: "Yes, the ₹20 lakh lifetime exemption limit for gratuity is cumulative across all employers. If you have already claimed exemption on gratuity from a previous employer, the remaining limit is reduced accordingly."
      },
      {
        q: "In which year is gratuity taxed?",
        a: "Gratuity is taxed in the financial year in which it is received. If a large gratuity makes your total income cross a higher slab in that year, the taxable portion is taxed at the higher rate."
      },
    ],

    relatedTools: [
      { label: "Gratuity Calculator", href: "/finance/gratuity", description: 'Calculate your total gratuity amount' },
      { label: "Gratuity Eligibility Calculator", href: "/finance/gratuity/gratuity-eligibility", description: 'Check if you are eligible for gratuity' },
      { label: "Income Tax Calculator", href: "/finance/income-tax", description: "Calculate your overall income tax liability" },
    ],
  },

  "gratuity-formula": {
    gratuityTypeKey: "gratuity-formula" as GratuityType,
    title: "Gratuity Formula Calculator",
    description: "Understand and apply the exact gratuity formula step by step with detailed examples for both covered and non-covered employers — completely free.",

    metaTitle: "Gratuity Formula Calculator – Calculate Gratuity Step by Step",
    metaDescription: "Understand and apply the gratuity formula instantly with our free calculator. Calculate gratuity step by step with detailed examples for covered and non-covered employers.",
    defaultSalary: 50000,
    defaultYears: 10,
    defaultMonths: 0,
    content: [
      {
        heading: "How to Use the Gratuity Formula Calculator",
        body: `<p>Applying the gratuity formula takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>last drawn monthly salary</strong> — basic salary plus dearness allowance (DA).</li>
        <li>Enter your <strong>total years of service</strong> with the employer.</li>
        <li>Select whether your employer is <strong>covered under the Payment of Gratuity Act</strong> or not.</li>
        <li>Click <strong>Calculate</strong> to instantly see the step-by-step gratuity calculation with all intermediate values clearly shown.</li>
      </ol>
      <p>The calculator displays the full formula breakdown — not just the final answer — so you can understand exactly how your gratuity is computed.</p>`
      },
      {
        heading: "The Two Gratuity Formulas Explained",
        body: `<p>There are two different formulas for calculating gratuity in India, depending on whether the employer is covered under the Payment of Gratuity Act:</p>
      <p><strong>Formula 1 — For employers covered under the Act:</strong></p>
      <p class="formula">Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 26</p>
      <p><strong>Formula 2 — For employers NOT covered under the Act:</strong></p>
      <p class="formula">Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 30</p>
      <p>The key difference is the denominator — 26 for Act-covered employers (representing working days in a month) and 30 for non-covered employers (representing calendar days). This makes gratuity slightly higher for employees of Act-covered employers.</p>`
      },
      {
        heading: "Understanding Each Component of the Gratuity Formula",
        body: `<p>Let's break down every element of the gratuity formula:</p>
      <ul>
        <li><strong>Last Drawn Salary</strong> — This includes only the basic salary and dearness allowance (DA). Other allowances like HRA, transport allowance, or special allowance are NOT included in the gratuity calculation.</li>
        <li><strong>15</strong> — Represents 15 days of salary per completed year of service, as mandated by the Payment of Gratuity Act.</li>
        <li><strong>Years of Service</strong> — Total completed years of service, with the following rounding rule: if the remaining months after completed years are more than 6, they are rounded up to the next year. If 6 months or less, they are ignored.</li>
        <li><strong>26</strong> — Represents the number of working days in a month (assuming 4 Sundays off), used for Act-covered employers.</li>
        <li><strong>30</strong> — Represents calendar days in a month, used for employers not covered under the Act.</li>
      </ul>`
      },
      {
        heading: "Gratuity Formula — Step-by-Step Examples",
        body: `<p><strong>Example 1 — Act-covered employer:</strong></p>
      <ul>
        <li>Basic salary + DA = ₹45,000 per month</li>
        <li>Total service = 12 years 8 months (rounded up to 13 years)</li>
        <li>Gratuity = (₹45,000 × 15 × 13) ÷ 26</li>
        <li>= ₹87,75,000 ÷ 26 = <strong>₹3,37,500</strong></li>
      </ul>
      <p><strong>Example 2 — Non-covered employer:</strong></p>
      <ul>
        <li>Basic salary + DA = ₹45,000 per month</li>
        <li>Total service = 12 years 8 months (rounded up to 13 years)</li>
        <li>Gratuity = (₹45,000 × 15 × 13) ÷ 30</li>
        <li>= ₹87,75,000 ÷ 30 = <strong>₹2,92,500</strong></li>
      </ul>
      <p><strong>Example 3 — Service rounding (less than 6 months ignored):</strong></p>
      <ul>
        <li>Basic salary + DA = ₹60,000 per month</li>
        <li>Total service = 8 years 4 months (4 months ignored, counted as 8 years)</li>
        <li>Gratuity = (₹60,000 × 15 × 8) ÷ 26 = <strong>₹2,76,923</strong></li>
      </ul>`
      },
      {
        heading: "Common Mistakes in Gratuity Calculation",
        body: `<p>These are the most frequent errors employees and employers make when calculating gratuity:</p>
      <ol>
        <li><strong>Including full salary instead of basic + DA</strong> — Only basic salary and DA are used in the formula. Including HRA, special allowance, or other components inflates the calculation incorrectly.</li>
        <li><strong>Wrong rounding of service years</strong> — Many people round up any remaining months to the next year. The correct rule is: only round up if remaining months exceed 6. If 6 months or less, they are dropped.</li>
        <li><strong>Using the wrong denominator</strong> — Using 26 for a non-covered employer or 30 for a covered employer changes the result significantly.</li>
        <li><strong>Ignoring the ₹20 lakh cap</strong> — The maximum gratuity payable under the Act is ₹20 lakh. Even if the formula gives a higher figure, the statutory cap applies for tax exemption purposes.</li>
        <li><strong>Not including DA in salary</strong> — Dearness Allowance must be added to basic salary for the gratuity formula. Excluding DA understates the gratuity entitlement.</li>
      </ol>`
      },
      {
        heading: "Why Use Our Gratuity Formula Calculator?",
        body: `<p>Our calculator helps you apply the gratuity formula correctly by allowing you to:</p>
      <ul>
        <li>Get an instant, step-by-step breakdown of the gratuity calculation</li>
        <li>Apply the correct formula based on your employer's Act coverage status</li>
        <li>Avoid common calculation mistakes that could result in under or over-claiming gratuity</li>
        <li>Verify the gratuity amount your employer is legally required to pay you</li>
      </ul>`
      }
    ],

    keywords: [
      "gratuity formula calculator",
      "gratuity calculation formula India",
      "gratuity formula with example",
      "gratuity formula for private employees",
      "gratuity formula 15 26 calculator",
    ],

    faqs: [
      {
        q: "What is the gratuity formula in India?",
        a: "For Act-covered employers: Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 26. For non-covered employers: Gratuity = (Last Drawn Salary × 15 × Years of Service) ÷ 30. Last drawn salary includes only basic salary and DA."
      },
      {
        q: "Why is 26 used in the gratuity formula?",
        a: "26 represents the number of working days in a month for Act-covered employers, assuming 4 Sundays are non-working days. It is used to calculate the daily wage rate for gratuity purposes."
      },
      {
        q: "Why is 30 used instead of 26 for non-covered employers?",
        a: "For employers not covered under the Payment of Gratuity Act, 30 calendar days are used as the monthly denominator instead of 26 working days, resulting in a slightly lower gratuity amount."
      },
      {
        q: "How are service years rounded for gratuity calculation?",
        a: "If remaining months after completed years are more than 6, they are rounded up to the next full year. If 6 months or less, they are dropped. For example, 10 years 7 months becomes 11 years, while 10 years 4 months stays as 10 years."
      },
      {
        q: "Does HRA count in the gratuity formula?",
        a: "No, HRA and other allowances like transport, special allowance, or medical allowance are not included in the gratuity formula. Only basic salary and dearness allowance (DA) are considered as the last drawn salary for gratuity calculation."
      },
    ],

    relatedTools: [
      { label: "Gratuity Calculator", href: "/finance/gratuity", description: 'Calculate your total gratuity amount' },
      { label: "Gratuity Eligibility Calculator", href: "/finance/gratuity/gratuity-eligibility", description: 'Check if you are eligible for gratuity' },
      { label: "Gratuity Tax Calculator", href: "/finance/gratuity/gratuity-tax-calculator", description: "Calculate tax on your gratuity amount" },
    ],
  },
}

export const slugToGratuityType: Record<string, GratuityType> = {
  "gratuity-eligibility": "gratuity-eligibility",
  "gratuity-tax-calculator": "gratuity-tax-calculator",
  "gratuity-formula": "gratuity-formula",
}

export const validGratuitySlugs = Object.keys(slugToGratuityType)