export type SalaryType =
  | "salary"
  | "ctc-to-inhand"
  | "salary-hike-calculator"
  | "take-home-salary"
  | "salary-slip"

export const salaryConfig = {

  "salary": {
    salaryTypeKey: "salary" as SalaryType,
    title: "Salary Calculator",
    description: "Calculate your in-hand salary from your CTC with a detailed breakup of all components — completely free.",
    metaTitle: "Salary Calculator – Calculate In-Hand Salary Online Free",
    metaDescription: "Calculate your in-hand salary from CTC instantly with our free calculator. Get a detailed breakup of basic, HRA, deductions, and net take-home pay.",
    defaultCTC: 1200000,
    minCTC: 100000,
    maxCTC: 20000000,
    content: [
      {
        heading: "How to Use the Salary Calculator",
        body: `<p>Calculating your in-hand salary takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>annual CTC (Cost to Company)</strong> as mentioned in your offer letter or appraisal.</li>
        <li>Enter applicable details such as <strong>bonus</strong>, <strong>HRA</strong>, and <strong>other allowances</strong>, if available separately.</li>
        <li>Select your <strong>city type</strong> (metro or non-metro), since this affects HRA exemption calculations.</li>
        <li>Click <strong>Calculate</strong> to instantly see your monthly and annual in-hand salary, along with a full breakup of deductions.</li>
      </ol>
      <p>The calculator accounts for components like EPF, professional tax, and income tax to give you an accurate take-home figure.</p>`
      },
      {
        heading: "What is CTC and In-Hand Salary?",
        body: `<p><strong>CTC (Cost to Company)</strong> is the total amount a company spends on an employee annually, including salary, bonuses, employer contributions to EPF, and other benefits. However, the CTC figure is not the same as what actually lands in your bank account each month.</p>
      <p><strong>In-hand salary</strong>, also called take-home salary, is the net amount you receive after deducting components like employee provident fund (EPF), professional tax, and income tax (TDS) from your gross salary. Understanding this difference is essential for accurate financial planning.</p>`
      },
      {
        heading: "Common Components of a Salary Structure",
        body: `<p>A typical salary structure in India includes the following components:</p>
      <ul>
        <li><strong>Basic Salary</strong> — Usually 40-50% of CTC, forming the base for calculating other components like HRA and PF.</li>
        <li><strong>HRA (House Rent Allowance)</strong> — Provided to employees for accommodation expenses, partially or fully tax-exempt based on conditions.</li>
        <li><strong>Special Allowance</strong> — A flexible component that balances the salary structure, fully taxable in most cases.</li>
        <li><strong>Employer's PF Contribution</strong> — A mandatory contribution (usually 12% of basic salary) made by the employer, included in CTC but not paid directly to the employee.</li>
        <li><strong>Bonus/Variable Pay</strong> — Performance-linked component, which may or may not be guaranteed.</li>
      </ul>`
      },
      {
        heading: "Common Deductions from Gross Salary",
        body: `<p>Several deductions reduce your gross salary to arrive at your final in-hand amount:</p>
      <ol>
        <li><strong>Employee PF Contribution</strong> — Typically 12% of basic salary, deducted and deposited into your EPF account.</li>
        <li><strong>Professional Tax</strong> — A small state-level tax, varying by state, usually a few hundred rupees per month.</li>
        <li><strong>Income Tax (TDS)</strong> — Deducted based on your applicable tax slab, calculated on your estimated annual taxable income.</li>
        <li><strong>Other Deductions</strong> — May include items like income tax recovery, loan EMIs (if applicable through salary), or insurance premiums.</li>
      </ol>`
      },
      {
        heading: "How CTC Differs From In-Hand Salary",
        body: `<p>It's common for new employees to be surprised that their in-hand salary is noticeably lower than their CTC. This happens because CTC includes components that don't reach your bank account directly, such as:</p>
      <ul>
        <li>The employer's contribution to your provident fund</li>
        <li>Gratuity provisions, which are only paid out after a minimum tenure</li>
        <li>Insurance premiums paid by the employer on your behalf</li>
        <li>Performance bonuses that may be conditional or paid only annually</li>
      </ul>
      <p>This is why it's important to calculate your actual in-hand salary rather than assuming it will be roughly equal to your CTC divided by 12.</p>`
      },
      {
        heading: "Why Use Our Salary Calculator?",
        body: `<p>Our calculator helps you understand your real earnings by allowing you to:</p>
      <ul>
        <li>Get an instant, accurate breakup of your salary structure</li>
        <li>Understand exactly how much you'll receive in-hand every month</li>
        <li>See the impact of deductions like PF, professional tax, and TDS clearly</li>
        <li>Plan your monthly budget and savings more realistically</li>
      </ul>`
      }
    ],

    keywords: [
      "salary calculator",
      "salary calculator India",
      "CTC calculator",
      "take home salary calculator",
      "in-hand salary calculator",
    ],

    faqs: [
      {
        q: "What is the difference between CTC and in-hand salary?",
        a: "CTC (Cost to Company) is the total amount a company spends on an employee annually, including benefits and employer contributions. In-hand salary is the net amount you actually receive after all deductions."
      },
      {
        q: "Why is my in-hand salary lower than my CTC?",
        a: "CTC includes components like employer's PF contribution, gratuity provisions, and insurance premiums that don't reach your bank account directly, along with deductions like employee PF, professional tax, and TDS."
      },
      {
        q: "How is in-hand salary calculated from CTC?",
        a: "In-hand salary is calculated by subtracting employee PF contribution, professional tax, and income tax (TDS) from your gross salary, which itself is derived from your CTC after removing employer contributions."
      },
      {
        q: "What percentage of CTC is usually basic salary?",
        a: "Basic salary typically constitutes 40% to 50% of the total CTC, though this can vary by company policy and is often structured to optimize tax efficiency for the employee."
      },
      {
        q: "Does HRA reduce my taxable income?",
        a: "Yes, HRA can be partially or fully exempt from tax under certain conditions, such as actually paying rent and meeting eligibility criteria, which reduces your taxable income and increases your effective in-hand salary."
      },
    ],

    relatedTools: [
      { label: "CTC to In-Hand Calculator", href: "/finance/salary/ctc-to-inhand", description: 'Convert your CTC to net take-home salary' },
      { label: "Take Home Salary Calculator", href: "/finance/salary/take-home-salary", description: 'Calculate your exact monthly take-home pay' },
      { label: "Salary Hike Calculator", href: "/finance/salary/salary-hike-calculator", description: "Calculate your new salary after a hike" },
    ],
  },

  "ctc-to-inhand": {
    salaryTypeKey: "ctc-to-inhand" as SalaryType,
    title: "CTC to In-Hand Salary Calculator",
    description: "Convert your annual CTC to monthly in-hand salary instantly, with a detailed breakup of all deductions — completely free.",
    metaTitle: "CTC to In-Hand Salary Calculator – Calculate Net Pay Free",
    metaDescription: "Convert your CTC to in-hand salary instantly with our free calculator. Get accurate monthly take-home pay after PF, professional tax, and TDS deductions.",
    defaultCTC: 1200000,
    minCTC: 100000,
    maxCTC: 20000000,
    content: [
      {
        heading: "How to Use the CTC to In-Hand Salary Calculator",
        body: `<p>Converting your CTC to in-hand salary takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>annual CTC</strong> as mentioned in your offer letter or salary revision letter.</li>
        <li>Enter your <strong>annual bonus or variable pay</strong> if it is included in your CTC.</li>
        <li>Select your <strong>city type</strong> — metro or non-metro — for accurate HRA exemption calculation.</li>
        <li>Click <strong>Calculate</strong> to instantly see your monthly gross salary, all deductions, and final in-hand take-home amount.</li>
      </ol>
      <p>The calculator provides a full salary breakup, showing exactly where each portion of your CTC goes.</p>`
      },
      {
        heading: "What is CTC?",
        body: `<p><strong>CTC (Cost to Company)</strong> is the total annual expenditure a company incurs for an employee. It includes not just the salary credited to your bank account, but also employer contributions, benefits, and provisions that are part of your overall employment package but may not be directly received as cash.</p>
      <p>Common components included in CTC are basic salary, HRA, special allowance, employer's PF contribution, gratuity provision, performance bonus, and any other benefits the company provides.</p>`
      },
      {
        heading: "How to Calculate In-Hand Salary from CTC",
        body: `<p>The step-by-step calculation to arrive at your in-hand salary from CTC:</p>
      <ol>
        <li><strong>Start with CTC</strong> — Your total annual cost to company.</li>
        <li><strong>Subtract employer's PF contribution</strong> — Usually 12% of basic salary, this is part of CTC but goes directly to your EPF account, not your bank.</li>
        <li><strong>Subtract gratuity provision</strong> — Usually 4.81% of basic salary, set aside by the employer but only paid out after 5 years of service.</li>
        <li><strong>This gives Gross Salary</strong> — The amount before employee-side deductions.</li>
        <li><strong>Subtract employee PF contribution</strong> — 12% of basic salary, deducted from your gross salary.</li>
        <li><strong>Subtract professional tax</strong> — A small state-level tax, usually ₹200-₹300 per month.</li>
        <li><strong>Subtract income tax (TDS)</strong> — Deducted based on your taxable income and applicable slab rates.</li>
        <li><strong>Result is In-Hand Salary</strong> — The net amount credited to your bank account every month.</li>
      </ol>`
      },
      {
        heading: "Why is In-Hand Salary Lower Than CTC?",
        body: `<p>Many employees are surprised to find their actual salary is significantly lower than their CTC. This happens because CTC includes several components that do not reach your bank account directly:</p>
      <ul>
        <li><strong>Employer's PF contribution</strong> — Goes into your EPF account, not your bank.</li>
        <li><strong>Gratuity provision</strong> — Only paid out after completing 5 years with the same employer.</li>
        <li><strong>Employer's health insurance premium</strong> — Paid by the company directly to the insurer.</li>
        <li><strong>Variable/performance bonus</strong> — May be paid annually or conditionally, not monthly.</li>
      </ul>
      <p>Additionally, deductions like employee PF, professional tax, and income tax TDS further reduce the amount you actually receive each month.</p>`
      },
      {
        heading: "Tips to Maximize Your In-Hand Salary",
        body: `<ul>
        <li><strong>Optimize your salary structure</strong> — Request your HR to structure your salary with more tax-efficient components like food coupons, LTA, or medical allowances, where applicable.</li>
        <li><strong>Claim HRA exemption</strong> — If you're paying rent, ensure your HRA component is structured correctly to maximize the tax exemption available.</li>
        <li><strong>Use Section 80C deductions</strong> — Investing in instruments like EPF, PPF, or ELSS under the old tax regime can reduce your taxable income and increase in-hand pay.</li>
        <li><strong>Choose the right tax regime</strong> — Compare your liability under both old and new regimes to minimize TDS deductions and maximize take-home pay.</li>
      </ul>`
      },
      {
        heading: "Why Use Our CTC to In-Hand Calculator?",
        body: `<p>Our calculator helps you understand your true earnings by allowing you to:</p>
      <ul>
        <li>Get instant, accurate conversion from CTC to monthly in-hand salary</li>
        <li>See a full breakup of all salary components and deductions</li>
        <li>Understand exactly how much you'll receive every month before accepting an offer</li>
        <li>Plan your monthly budget, EMIs, and savings more realistically</li>
      </ul>`
      }
    ],

    keywords: [
      "CTC to in-hand salary calculator",
      "CTC to take home salary calculator",
      "CTC to net salary calculator India",
      "in-hand salary from CTC calculator",
      "CTC breakup calculator",
    ],

    faqs: [
      {
        q: "How do I calculate in-hand salary from CTC?",
        a: "Subtract employer's PF contribution and gratuity provision from CTC to get gross salary. Then subtract employee PF contribution, professional tax, and income tax TDS from gross salary to arrive at in-hand salary."
      },
      {
        q: "What percentage of CTC is typically the in-hand salary?",
        a: "In-hand salary is generally around 70% to 80% of CTC, depending on the salary structure, applicable deductions, and income tax liability of the individual."
      },
      {
        q: "Is bonus included in CTC?",
        a: "Yes, performance bonuses or variable pay are usually included in CTC, but they may be paid annually or conditionally, meaning they do not form part of your regular monthly in-hand salary."
      },
      {
        q: "Does the city I live in affect my in-hand salary?",
        a: "Yes, employees in metro cities receive a higher HRA component, which qualifies for a larger tax exemption, effectively increasing their in-hand salary compared to those in non-metro cities."
      },
      {
        q: "Can I negotiate my salary structure to increase in-hand pay?",
        a: "Yes, you can request HR to restructure your salary to include more tax-exempt allowances like food coupons, LTA, or telephone reimbursements, which can legally reduce your taxable income and increase take-home pay."
      },
    ],

    relatedTools: [
      { label: "Salary Calculator", href: "/finance/salary", description: 'Calculate your overall salary breakup' },
      { label: "Take Home Salary Calculator", href: "/finance/salary/take-home-salary", description: 'Calculate your exact monthly take-home pay' },
      { label: "Income Tax Calculator", href: "/finance/income-tax", description: "Calculate your income tax liability" },
    ],
  },

  "salary-hike-calculator": {
    salaryTypeKey: "salary-hike-calculator" as SalaryType,
    title: "Salary Hike Calculator",
    description: "Calculate your new salary and increment amount after an appraisal or job change — completely free.",
    metaTitle: "Salary Hike Calculator – Calculate New Salary After Increment",
    metaDescription: "Calculate your new salary after a hike instantly with our free calculator. Find your increment amount and revised CTC based on hike percentage.",
    defaultCTC: 1200000,
    minCTC: 100000,
    maxCTC: 20000000,
    content: [
      {
        heading: "How to Use the Salary Hike Calculator",
        body: `<p>Calculating your new salary after a hike takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>current salary</strong> — either your annual CTC or monthly in-hand amount.</li>
        <li>Enter the <strong>hike percentage</strong> offered by your employer or expected from the new company.</li>
        <li>Click <strong>Calculate</strong> to instantly see your new salary, the exact increment amount, and the difference in monthly take-home pay.</li>
      </ol>
      <p>You can also reverse-calculate — enter your desired new salary to find out the hike percentage you need to ask for during negotiations.</p>`
      },
      {
        heading: "What is a Salary Hike?",
        body: `<p>A <strong>salary hike</strong>, also called a salary increment or raise, is the percentage increase applied to your current salary during your annual appraisal cycle or when switching to a new job. It is expressed as a percentage of your existing CTC or gross salary.</p>
      <p>Salary hikes are typically offered during annual performance reviews, promotions, or when accepting a new job offer. In India, average annual increments for salaried employees typically range from 8% to 15%, though this varies widely by industry, company performance, and individual contribution.</p>`
      },
      {
        heading: "Salary Hike Calculation Formula",
        body: `<p>Calculating your new salary after a hike is straightforward:</p>
      <p class="formula">New Salary = Current Salary × (1 + Hike Percentage / 100)</p>
      <p><strong>And to find the increment amount:</strong></p>
      <p class="formula">Increment Amount = New Salary − Current Salary</p>
      <p>For example, if your current CTC is ₹8,00,000 and you receive a 15% hike, your new CTC would be ₹9,20,000, with an annual increment of ₹1,20,000 — or ₹10,000 more per month.</p>`
      },
      {
        heading: "How to Calculate Hike Percentage From Two Salaries",
        body: `<p>If you want to calculate the hike percentage between your current and new salary offer, use this formula:</p>
      <p class="formula">Hike Percentage = [(New Salary − Current Salary) / Current Salary] × 100</p>
      <p>For example, if your current CTC is ₹6,00,000 and a new company is offering ₹8,40,000, your hike percentage would be 40%. This is useful when evaluating a job offer and comparing it against your expectations.</p>`
      },
      {
        heading: "Tips for Negotiating a Better Salary Hike",
        body: `<ul>
        <li><strong>Research market salary ranges</strong> for your role, experience level, and industry before entering negotiations.</li>
        <li><strong>Highlight your achievements</strong> with specific data points — projects delivered, revenue generated, or costs saved — to justify a higher increment.</li>
        <li><strong>Ask for a hike on your in-hand salary</strong> when switching jobs, not on CTC, to avoid inflated offers with large variable or benefit components.</li>
        <li><strong>Consider the full package</strong> — a slightly lower hike with better benefits, work-life balance, or growth opportunities may be more valuable long-term.</li>
        <li><strong>Know your walk-away number</strong> — decide in advance the minimum hike you'll accept before starting negotiations.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Salary Hike Calculator?",
        body: `<p>Our calculator helps you make confident salary decisions by allowing you to:</p>
      <ul>
        <li>Instantly calculate your new salary for any hike percentage</li>
        <li>Find the exact hike percentage between two salary figures</li>
        <li>Compare multiple offers side by side based on hike percentage and absolute amounts</li>
        <li>Prepare a data-backed counteroffer during appraisal or job negotiations</li>
      </ul>`
      }
    ],

    keywords: [
      "salary hike calculator",
      "salary increment calculator",
      "salary hike percentage calculator",
      "new salary after hike calculator",
      "salary raise calculator India",
    ],

    faqs: [
      {
        q: "How is salary hike percentage calculated?",
        a: "Salary hike percentage is calculated using the formula: Hike Percentage = [(New Salary − Current Salary) / Current Salary] × 100."
      },
      {
        q: "What is a good salary hike in India?",
        a: "In India, average annual increments typically range from 8% to 15% for salaried employees. A hike above 20% is generally considered strong, while switching jobs often yields hikes of 25% to 50% depending on the industry and role."
      },
      {
        q: "Should I calculate hike on CTC or in-hand salary?",
        a: "When switching jobs, it's better to calculate the hike on your in-hand salary rather than CTC, since CTC can include variable components that may not be realized monthly."
      },
      {
        q: "How do I calculate my new salary after a 20% hike?",
        a: "Multiply your current salary by 1.20. For example, if your current CTC is ₹10,00,000, a 20% hike gives a new CTC of ₹12,00,000."
      },
      {
        q: "Can I negotiate my salary hike during appraisal?",
        a: "Yes, salary hikes are negotiable in most companies. Backing your request with specific achievements, market data, and a clear justification significantly improves your chances of receiving a better increment."
      },
    ],

    relatedTools: [
      { label: "Salary Calculator", href: "/finance/salary", description: 'Calculate your overall salary breakup' },
      { label: "CTC to In-Hand Calculator", href: "/finance/salary/ctc-to-inhand", description: 'Convert your CTC to net take-home salary' },
      { label: "Take Home Salary Calculator", href: "/finance/salary/take-home-salary", description: "Calculate your exact monthly take-home pay" },
    ],
  },

  "take-home-salary": {
    salaryTypeKey: "take-home-salary" as SalaryType,
    title: "Take Home Salary Calculator",
    description: "Calculate your exact monthly take-home salary after all deductions instantly — completely free.",
    metaTitle: "Take Home Salary Calculator – Calculate Net Monthly Pay Free",
    metaDescription: "Calculate your exact monthly take-home salary instantly with our free calculator. Get accurate net pay after PF, professional tax, and income tax deductions.",
    defaultCTC: 1200000,
    minCTC: 100000,
    maxCTC: 20000000,
    content: [
      {
        heading: "How to Use the Take Home Salary Calculator",
        body: `<p>Calculating your take-home salary takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>annual CTC</strong> or <strong>monthly gross salary</strong>.</li>
        <li>Enter your <strong>basic salary</strong> if known, or let the calculator estimate it as a percentage of CTC.</li>
        <li>Enter any <strong>additional allowances or deductions</strong> applicable to your salary structure.</li>
        <li>Select your <strong>tax regime</strong> — old or new — for accurate TDS calculation.</li>
        <li>Click <strong>Calculate</strong> to instantly see your monthly take-home salary with a complete deduction breakdown.</li>
      </ol>
      <p>The calculator gives you a clear picture of your salary before and after all statutory and voluntary deductions.</p>`
      },
      {
        heading: "What is Take Home Salary?",
        body: `<p><strong>Take home salary</strong>, also known as net salary or in-hand salary, is the actual amount credited to your bank account every month after all deductions have been made from your gross salary. It is the most important figure for personal financial planning since it represents your real monthly income.</p>
      <p>Many employees focus on their CTC during job negotiations, but understanding your actual take-home pay is what truly matters for budgeting, EMI planning, and day-to-day expenses.</p>`
      },
      {
        heading: "Take Home Salary Calculation Formula",
        body: `<p>Take home salary is calculated using the following approach:</p>
      <p class="formula">Take Home Salary = Gross Salary − Total Deductions</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>Gross Salary</strong> = CTC − Employer's PF contribution − Gratuity provision</li>
        <li><strong>Total Deductions</strong> = Employee PF contribution + Professional tax + Income tax (TDS)</li>
      </ul>
      <p>For example, if your annual CTC is ₹10,00,000 and your total annual deductions come to ₹1,80,000, your annual take-home salary would be approximately ₹8,20,000, or around ₹68,333 per month.</p>`
      },
      {
        heading: "Difference Between Gross Salary and Take Home Salary",
        body: `<p>These two terms are often confused but represent very different figures:</p>
      <ul>
        <li><strong>Gross Salary</strong> — Your total salary before any deductions, including basic salary, HRA, special allowances, and other components. This is what appears on your payslip as earnings before deductions.</li>
        <li><strong>Take Home Salary</strong> — What remains after subtracting all deductions from gross salary, including employee PF, professional tax, and income tax TDS. This is the amount actually credited to your bank.</li>
      </ul>
      <p>The difference between gross salary and take-home salary can be significant, especially for higher income brackets where income tax deductions are substantial.</p>`
      },
      {
        heading: "Key Deductions That Reduce Your Take Home Salary",
        body: `<p>Understanding these deductions helps you plan better:</p>
      <ol>
        <li><strong>Employee PF Contribution</strong> — 12% of basic salary is deducted every month and deposited into your EPF account. While this reduces take-home pay, it builds a retirement corpus.</li>
        <li><strong>Professional Tax</strong> — A small state-level tax, typically ranging from ₹150 to ₹300 per month depending on your state.</li>
        <li><strong>Income Tax TDS</strong> — The largest deduction for most employees, calculated based on your estimated annual taxable income and applicable slab rates under the chosen tax regime.</li>
        <li><strong>Other Voluntary Deductions</strong> — Loan EMIs deducted via salary, voluntary PF contributions, or insurance premiums if opted through employer.</li>
      </ol>`
      },
      {
        heading: "Why Use Our Take Home Salary Calculator?",
        body: `<p>Our calculator helps you understand your real monthly income by allowing you to:</p>
      <ul>
        <li>Get instant, accurate take-home salary calculations</li>
        <li>See a complete month-wise deduction breakdown</li>
        <li>Compare take-home pay under old and new tax regimes</li>
        <li>Plan your monthly budget, savings, and EMIs based on your actual income</li>
      </ul>`
      }
    ],

    keywords: [
      "take home salary calculator",
      "take home salary calculator India",
      "net salary calculator",
      "monthly take home pay calculator",
      "net salary after tax India",
    ],

    faqs: [
      {
        q: "What is take home salary?",
        a: "Take home salary is the net amount credited to your bank account every month after all deductions — including employee PF, professional tax, and income tax TDS — have been subtracted from your gross salary."
      },
      {
        q: "How is take home salary calculated?",
        a: "Take home salary = Gross Salary − Total Deductions. Gross salary is derived from CTC after removing employer contributions, and deductions include employee PF, professional tax, and income tax TDS."
      },
      {
        q: "What is the difference between gross salary and take home salary?",
        a: "Gross salary is your total earnings before any deductions. Take home salary is what remains after subtracting all deductions like PF, professional tax, and income tax from gross salary."
      },
      {
        q: "How much of my gross salary will I actually receive?",
        a: "Typically, take home salary is around 75% to 85% of gross salary, depending on your income level, applicable deductions, and the tax regime you choose."
      },
      {
        q: "Can I increase my take home salary without a hike?",
        a: "Yes, by optimizing your salary structure with tax-efficient components like HRA, food coupons, and LTA, choosing the most beneficial tax regime, and claiming all eligible deductions under the old regime."
      },
    ],

    relatedTools: [
      { label: "Salary Calculator", href: "/finance/salary", description: 'Calculate your overall salary breakup' },
      { label: "CTC to In-Hand Calculator", href: "/finance/salary/ctc-to-inhand", description: 'Convert your CTC to net take-home salary' },
      { label: "Salary Hike Calculator", href: "/finance/salary/salary-hike-calculator", description: "Calculate your new salary after a hike" },
    ],
  },

  "salary-slip": {
    salaryTypeKey: "salary-slip" as SalaryType,
    title: "Salary Slip Calculator",
    description: "Calculate and understand every component of your monthly salary slip with a detailed earnings and deductions breakdown — completely free.",

    metaTitle: "Salary Slip Calculator – Generate & Understand Payslip Free",
    metaDescription: "Calculate and understand your salary slip instantly with our free tool. Get a detailed breakdown of all earnings and deductions on your monthly payslip.",
    defaultCTC: 1200000,
    minCTC: 100000,
    maxCTC: 20000000,
    content: [
      {
        heading: "How to Use the Salary Slip Calculator",
        body: `<p>Generating your salary slip breakdown takes less than a minute:</p>
      <ol>
        <li>Enter your <strong>annual CTC</strong> or <strong>monthly gross salary</strong>.</li>
        <li>Enter your <strong>basic salary</strong> if known separately, or let the calculator estimate it.</li>
        <li>Enter any <strong>allowances</strong> such as HRA, transport allowance, or special allowance.</li>
        <li>Enter applicable <strong>deductions</strong> like PF, professional tax, and income tax TDS.</li>
        <li>Click <strong>Calculate</strong> to instantly generate a detailed salary slip showing all earnings and deductions.</li>
      </ol>
      <p>The calculator gives you a complete payslip-style breakdown, exactly as it would appear on your official monthly salary slip.</p>`
      },
      {
        heading: "What is a Salary Slip?",
        body: `<p>A <strong>salary slip</strong>, also called a payslip, is an official document issued by an employer to an employee every month, detailing the complete breakdown of salary earned and deductions made during that pay period. It serves as proof of income and is required for several important purposes.</p>
      <p>A salary slip is typically required when applying for a loan or credit card, filing income tax returns, renting a property, applying for a visa, or switching jobs. Understanding every component on your salary slip helps you verify that your pay is calculated correctly and plan your finances more effectively.</p>`
      },
      {
        heading: "Key Earnings Components on a Salary Slip",
        body: `<p>The earnings section of a salary slip typically includes:</p>
      <ul>
        <li><strong>Basic Salary</strong> — The core component of salary, usually 40% to 50% of CTC. It is fully taxable and forms the base for calculating PF, gratuity, and HRA.</li>
        <li><strong>HRA (House Rent Allowance)</strong> — Provided for accommodation expenses, usually 40% to 50% of basic salary. Partially or fully exempt from tax if you pay rent.</li>
        <li><strong>Special Allowance</strong> — A flexible component used to balance the salary structure. Fully taxable in most cases.</li>
        <li><strong>Transport Allowance</strong> — Provided for commuting expenses. Tax treatment depends on applicable rules for the financial year.</li>
        <li><strong>Medical Allowance</strong> — Provided for medical expenses, with partial exemption available in some cases.</li>
        <li><strong>Performance Bonus</strong> — Variable pay linked to individual or company performance, usually paid monthly or annually.</li>
      </ul>`
      },
      {
        heading: "Key Deductions on a Salary Slip",
        body: `<p>The deductions section of a salary slip typically includes:</p>
      <ol>
        <li><strong>Employee PF Contribution</strong> — 12% of basic salary deducted monthly and deposited into your EPF account for retirement savings.</li>
        <li><strong>Professional Tax</strong> — A small state-levied tax, typically between ₹150 and ₹300 per month, varying by state.</li>
        <li><strong>Income Tax TDS</strong> — Deducted based on your estimated annual taxable income and applicable slab rates under your chosen tax regime.</li>
        <li><strong>ESI (Employee State Insurance)</strong> — Applicable for employees earning below a certain threshold, providing health and social security benefits.</li>
        <li><strong>Loan EMI Deductions</strong> — If you have taken a salary advance or employer loan, the EMI may be deducted directly from your salary.</li>
      </ol>`
      },
      {
        heading: "How to Read and Verify Your Salary Slip",
        body: `<p>When you receive your monthly salary slip, check the following to ensure accuracy:</p>
      <ul>
        <li><strong>Verify total earnings</strong> — Ensure all allowances and components match your offer letter or revised salary structure.</li>
        <li><strong>Check PF deduction</strong> — Should be exactly 12% of your basic salary. Any discrepancy should be raised with HR immediately.</li>
        <li><strong>Review TDS deduction</strong> — If TDS appears unusually high or low, cross-check with your income tax liability using a tax calculator.</li>
        <li><strong>Confirm net pay</strong> — The final in-hand amount should match what is credited to your bank account on salary day.</li>
        <li><strong>Save your payslips</strong> — Keep at least 12 months of salary slips for loan applications, ITR filing, and employment verification.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Salary Slip Calculator?",
        body: `<p>Our calculator helps you understand and verify your payslip by allowing you to:</p>
      <ul>
        <li>Generate an instant, accurate salary slip breakdown</li>
        <li>Understand exactly what each component on your payslip means</li>
        <li>Verify that your employer's calculations are correct</li>
        <li>Use your salary slip data for loan applications, tax filing, or financial planning</li>
      </ul>`
      }
    ],

    keywords: [
      "salary slip calculator",
      "salary slip format India",
      "payslip calculator online",
      "monthly salary slip generator",
      "salary slip components India",
    ],

    faqs: [
      {
        q: "What is a salary slip?",
        a: "A salary slip (or payslip) is an official monthly document issued by an employer detailing all earnings and deductions for that pay period, resulting in the final net salary credited to the employee's bank account."
      },
      {
        q: "What are the main components of a salary slip?",
        a: "A salary slip typically includes earnings like basic salary, HRA, special allowance, and transport allowance, as well as deductions like employee PF contribution, professional tax, and income tax TDS."
      },
      {
        q: "Why is my salary slip important?",
        a: "A salary slip is required for loan and credit card applications, income tax return filing, property rentals, visa applications, and employment verification when switching jobs."
      },
      {
        q: "How many months of salary slips are required for a home loan?",
        a: "Most banks and lenders require the last 3 to 6 months of salary slips when processing a home loan application, along with other income and identity documents."
      },
      {
        q: "Can I get a salary slip if my employer does not provide one?",
        a: "Yes, you can request your HR or payroll department to issue salary slips for any month. If unavailable, a bank statement showing salary credits along with a letter from the employer may be accepted as an alternative in some cases."
      },
    ],

    relatedTools: [
      { label: "Salary Calculator", href: "/finance/salary", description: 'Calculate your overall salary breakup' },
      { label: "CTC to In-Hand Calculator", href: "/finance/salary/ctc-to-inhand", description: 'Convert your CTC to net take-home salary' },
      { label: "Take Home Salary Calculator", href: "/finance/salary/take-home-salary", description: "Calculate your exact monthly take-home pay" },
    ],
  },
}

export const slugToSalaryType: Record<string, SalaryType> = {
  "ctc-to-inhand": "ctc-to-inhand",
  "salary-hike-calculator": "salary-hike-calculator",
  "take-home-salary": "take-home-salary",
  "salary-slip": "salary-slip",
}

export const validSalarySlugs = Object.keys(slugToSalaryType)