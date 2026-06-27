export type LoanType = "home" | "car" | "personal" | "emi"


export interface ContentSection {
  heading: string;
  body: string; // HTML ya Markdown string
}

export interface BankRate {
  name: string;
  rate: number;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface RelatedTool {
  label: string;
  href: string;
  description: string;
}

export interface EmiTypeConfig {
  // Basic Info
  loanTypeKey: LoanType;
  title: string;
  description: string;
  keywords: string[];

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Loan Limits
  minAmount: number;
  maxAmount: number;
  defaultAmount: number;
  step: number;

  // Interest Rate
  minRate: number;
  maxRate: number;
  defaultRate: number;

  // Tenure
  minTenure: number;
  maxTenure: number;
  defaultTenure: number;

  // UI Labels
  amountLabel: string;
  amountHints: string[];

  // Bank Suggestions
  banks: BankRate[];

  // Article Content
  content: ContentSection[];

  // FAQs
  faqs: FAQ[];

  // Related Calculators
  relatedTools: RelatedTool[];
}


export const emiConfig: Record<LoanType, EmiTypeConfig> = {
  emi: {
    loanTypeKey: "emi" as LoanType,
    metaTitle: "EMI Calculator Online – Calculate Loan EMI Free",
    metaDescription: "Calculate EMI for home loan, car loan, or personal loan instantly with our free EMI calculator. Get monthly installment, interest breakdown & repayment schedule.",
    title: "EMI Calculator",
    description: "Planning to take a loan? Use our free EMI Calculator to instantly find out your monthly installment, total interest payable, and complete repayment schedule — whether it's a home loan, car loan, or personal loan. Simply enter your loan amount, interest rate, and tenure to get accurate results in seconds.",
    keywords: [
      "EMI calculator",
      "EMI calculator India",
      "loan EMI calculator",
      "monthly EMI calculator",
      "online EMI calculator",
      "EMI calculator 2025",
    ],
    content: [
      {
        heading: "How to Use the EMI Calculator",
        body: `<p><strong>Calculating your EMI takes less than a minute:</strong></p>
               <ol>
                  <li>Enter the **loan amount** you wish to borrow.</li>
                  <li>Enter the **interest rate** offered by your bank or lender (this varies based on loan type — typically 8% to 12% for secured loans and higher for unsecured loans).</li>
                  <li>Select your **loan tenure** in years.</li>
               <ol>
               <p>The calculator also generates a detailed breakdown showing how much of each EMI goes towards principal and interest over the loan's life.</p>`
      },
      {
        heading: "What is EMI?",
        body: `<p>EMI, or **Equated Monthly Installment**, is the fixed amount you pay every month to your lender until your loan is fully repaid. Each EMI consists of two components — the principal amount and the interest charged on the outstanding loan balance.</p>
               <p class="formula">In the early months of a loan, a larger portion of your EMI goes towards interest. As the tenure progresses, the principal component increases while the interest component gradually decreases.</p>`
      },
      {
        heading: "EMI Formula",
        body: `<p><strong>The EMI for any loan is calculated using the standard formula:</strong></p>
               <p><strong>EMI = P × r × (1+r)^n / [(1+r)^n - 1]</strong></p>
               <p>Where:</p>
            <ol>
              <li><strong>P</strong> = Principal loan amount</li>
              <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
              <li><strong>n</strong> = Loan tenure in months</li>
            </ol>
            <p>For example, if you take a loan of ₹10,00,000 at 10% interest for a 5-year tenure, your monthly EMI would be approximately ₹21,247, and the total interest paid over the tenure would be around ₹2,74,820.</p>`
      },
      {
        heading: "Which Loan Type Should You Calculate?",
        body: `<p>This calculator works for any type of loan, but if you want results specific to your loan category, we recommend using our dedicated calculators:</p>
          <ol>
            <li><strong>Home Loan EMI Calculator </strong> for loans up to 30 years tenure with lower interest rates</li>
            <li><strong>Car Loan EMI Calculator </strong> for new or used vehicle financing with shorter tenures</li>
            <li><strong>Personal Loan EMI Calculator </strong> for unsecured loans with quicker approval and shorter tenures </li> 
          </ol>
          <p>Each calculator is pre-configured with typical interest rates and tenure ranges for that loan type, giving you more relevant results.</p>`
      },
      {
        heading: "Factors That Affect Your EMI",
        body: `<p>Hamara EMI calculator use karne se aap:</p>
    <ol>
      <li><strong> Loan Amount </strong> A higher loan amount directly increases your EMI.</li>
      <li><strong>Interest Rate </strong> Even a small difference in interest rate can significantly impact your total interest outgo, especially over a long tenure.</li>
      <li><strong> Loan Tenure </strong> A longer tenure reduces your monthly EMI but increases the total interest paid. A shorter tenure means a higher EMI but lower overall interest cost.</li>
      <li><strong> Credit Score </strong> Borrowers with a higher credit score (750+) typically get better interest rates, which directly reduces the EMI burden.</li>
      <li><strong>Type of Loan </strong> Secured loans (home, car) generally have lower interest rates than unsecured loans (personal loans), which affects the EMI amount.</li>
    </ol>`
      },
      {
        heading: "Tips to Manage Your EMI Better",
        body: `
        <ol>
            <li><strong>Borrow only what you need </strong> a higher loan amount means a higher EMI burden.</li>
            <li><strong>Compare interest rates </strong> across multiple lenders before finalizing your loan.</li>
            <li><strong>Choose tenure wisely </strong> balance between an affordable monthly EMI and minimizing total interest cost.</li>
            <li><strong>Make prepayments </strong> whenever you have surplus funds, to reduce the outstanding principal and total interest.</li>
            <li><strong>Maintain a good credit score </strong> to qualify for better interest rates on future loans.</li>
        </ol>`
      },
      {
        heading: "Why Use Our EMI Calculator?",
        body: `
        <p>Our calculator is designed to give you instant, accurate results without any manual calculation errors. It helps you:</p>
        <ol>
            <li>Plan your monthly budget before applying for any loan</li>
            <li> Compare EMIs across different loan amounts, interest rates, and tenures</li>
            <li> Understand the complete repayment schedule</li>
            <li>Make an informed financial decision before committing to a loan</li>
        </ol>`
      }
    ],
    minAmount: 10000,
    maxAmount: 10000000,
    defaultAmount: 1000000,
    step: 10000,
    minRate: 1,
    maxRate: 36,
    defaultRate: 10.0,
    minTenure: 1,
    maxTenure: 30,
    defaultTenure: 5,
    amountLabel: "Loan amount",
    amountHints: ["₹10K", "₹1 crore"],
    banks: [
      { name: "SBI", rate: 9.00 },
      { name: "HDFC", rate: 9.20 },
      { name: "ICICI", rate: 10.80 },
      { name: "Axis", rate: 11.25 },
    ],
    faqs: [
      {
        q: "What is EMI?",
        a: "EMI (Equated Monthly Installment) is the fixed monthly amount you pay to your bank or lender to repay a loan. It includes both the principal amount and the interest charged on the outstanding balance."
      },
      {
        q: "How is EMI calculated?",
        a: "EMI is calculated using the formula EMI = P × r × (1+r)^n / [(1+r)^n - 1], where P is the principal, r is the monthly interest rate, and n is the loan tenure in months."
      },
      {
        q: "Can I reduce my EMI?",
        a: "Yes, you can reduce your EMI by opting for a longer tenure, making a prepayment to reduce the principal, or negotiating a lower interest rate with your lender."
      },
      {
        q: "Is it good to prepay a loan?",
        a: "Yes, prepaying a loan reduces the outstanding principal and saves significantly on total interest. For floating-rate loans, RBI guidelines ensure no prepayment penalty is charged."
      },
      {
        q: "Does loan type affect EMI?",
        a: "Yes, secured loans like home and car loans generally have lower interest rates than unsecured loans like personal loans, which results in a lower EMI for the same amount and tenure."
      }
    ],
    relatedTools: [
      { label: "Home Loan EMI", href: "/finance/emi/home-loan", description: "Calculate your home loan EMI instantly." },
      { label: "Car Loan EMI", href: "/finance/emi/car-loan", description: "Calculate car loan monthly installments." },
      { label: "Personal Loan EMI", href: "/finance/emi/personal-loan", description: "Estimate personal loan EMI and interest." },
    ],
  },

  home: {
    loanTypeKey: "home" as LoanType,
    metaTitle: "Home Loan EMI Calculator – Calculate Monthly EMI Online",
    metaDescription: "Calculate your home loan EMI instantly with our free online calculator. Get accurate monthly installment, total interest & loan amortization schedule.",
    content: [
      {
        heading: "How to Use the Home Loan EMI Calculator",
        body: `<p>Using this calculator is simple and takes less than a minute:</p>
         <ol>
            <li>Enter your **loan amount** (the principal amount you wish to borrow from the bank).</li>
            <li>Enter the **interest rate** offered by your lender (currently most banks offer rates between 8% to 9.5% per annum).</li>
            <li>Select your **loan tenure** in years (typically ranges from 10 to 30 years for home loans).</li>
            <li>Click on **Calculate** to instantly view your monthly EMI, total interest payable, and total payment amount.</li>
         </ol>
         <p>The calculator also generates a detailed amortization schedule showing how much of each EMI goes towards principal and interest over the loan tenure.</p>`
      },
      {
        heading: "What is Home Loan EMI?",
        body: "<p>EMI stands for **Equated Monthly Installment** — a fixed amount you pay to your bank or financial institution every month until your home loan is fully repaid. Each EMI consists of two components: the principal amount and the interest charged on the outstanding loan balance.</p><p>In the initial years of your loan, a larger portion of your EMI goes towards interest. As the tenure progresses, the principal component increases while the interest component decreases.</p>"
      },
      {
        heading: "Home Loan EMI Formula",
        body: `<p>The EMI is calculated using the following mathematical formula:</p>
        <p class="formula">EMI = P × r × (1+r)^n / [(1+r)^n - 1]</p>
        <p><strong>Where:</strong></p>
        <ul>
          <li><strong>P</strong> = Principal loan amount</li>
          <li><strong>r</strong> = Monthly interest rate (annual rate divided by 12, then divided by 100)</li>
          <li><strong>n</strong> = Loan tenure in months</li>
        </ul>
        <p>For example, if you take a home loan of ₹30,00,000 at an interest rate of 8.5% for a tenure of 20 years, your monthly EMI would be approximately ₹26,035, and the total interest payable over 20 years would be around ₹32,48,400.</p>`,
      },
      {
        heading: "Factors That Affect Your Home Loan EMI",
        body: `
        <p>Several factors influence the EMI amount you'll need to pay:</p>
        <ol>
        <li>Loan Amount** — A higher loan amount directly increases your EMI. It's important to borrow only what you genuinely need.</li>
        <li>Interest Rate** — Even a small difference in interest rate (e.g., 8% vs 8.5%) can significantly impact your total interest outgo over a long tenure.</li>
        <li>Loan Tenure** — A longer tenure reduces your monthly EMI but increases the total interest paid over the loan's life. A shorter tenure means higher EMI but lower overall interest.</li>
        <li>Credit Score** — Borrowers with a higher credit score (750+) usually get better interest rates, which directly reduces the EMI burden.</li>
        <li>Type of Interest Rate** — Fixed-rate loans keep your EMI constant, while floating-rate loans can fluctuate based on changes in the repo rate set by the RBI.</li>
        </ol>`
      },
      {
        heading: "Tips to Reduce Your Home Loan EMI Burden",
        body: `
        <ul>
        <li>Make a larger down payment** to reduce the principal loan amount.</li>
        <li>Opt for prepayment** whenever you have surplus funds — this reduces the outstanding principal and overall interest.</li>
        <li>Compare interest rates** across multiple banks before finalizing your lender.</li>
        <li>Consider a balance transfer** if another bank offers a significantly lower interest rate on your outstanding loan.</li>
        <li>Choose tenure wisely** — balance between affordable monthly EMI and minimizing total interest cost.</li>
        </ul>`,
      },
      {
        heading: "Why Use Our Home Loan EMI Calculator?",
        body: `
        <p>Our calculator is designed to give you instant, accurate results without any manual calculation errors. It helps you:</p>
        <ul>
        <li> Plan your monthly budget before applying for a home loan</li>
        <li>Compare EMIs across different loan amounts, tenures, and interest rates</li>
        <li>Understand the complete amortization schedule</li>
        <li>Make an informed decision before committing to a long-term financial obligation</li>
        </ul>`,
      }
    ],
    keywords: [
      "home loan EMI calculator",
      "home loan EMI calculator India",
      "SBI home loan EMI calculator",
      "HDFC home loan EMI calculator",
      "housing loan EMI calculator",
      "ghar ka loan EMI calculator",
    ],
    title: "Home Loan EMI Calculator",
    description: "Planning to buy your dream home? Use our free Home Loan EMI Calculator to instantly calculate your monthly installment, total interest payable, and complete loan repayment schedule. Whether you're applying for a home loan of ₹20 lakh or ₹1 crore, this tool gives you accurate results in seconds.",
    minAmount: 100000,
    maxAmount: 10000000,
    defaultAmount: 5000000,
    step: 50000,
    minRate: 6,
    maxRate: 20,
    defaultRate: 8.5,
    minTenure: 1,
    maxTenure: 30,
    defaultTenure: 20,
    amountLabel: "Loan amount",
    amountHints: ["₹1 lakh", "₹1 crore"],
    banks: [
      { name: "SBI", rate: 8.50 },
      { name: "HDFC", rate: 8.70 },
      { name: "ICICI", rate: 8.75 },
      { name: "Axis", rate: 8.80 },
    ],
    faqs: [
      {
        q: "How is home loan EMI calculated?",
        a: "Home loan EMI is calculated using the formula EMI = P × r × (1+r)^n / [(1+r)^n - 1], where P is the principal, r is the monthly interest rate, and n is the total number of monthly installments."
      },
      {
        q: "What is the EMI for a home loan of 30 lakh?",
        a: "At an 8.5% interest rate for a 20-year tenure, the EMI for a ₹30 lakh home loan would be approximately ₹26,035 per month. The exact amount depends on the interest rate and tenure you select."
      },
      {
        q: "Can I reduce my home loan EMI?",
        a: "Yes, you can reduce your EMI through prepayment, opting for a longer tenure, negotiating a lower interest rate, or transferring your loan balance to a lender offering better terms."
      },
      {
        q: "Is home loan EMI fixed or does it change?",
        a: "With a fixed interest rate, your EMI stays the same throughout the tenure. With a floating rate, your EMI may change if the lender revises rates based on RBI's monetary policy."
      },
      {
        q: "What documents are required for a home loan?",
        a: "Typically required documents include identity proof, address proof, income proof (salary slips or ITR), bank statements, and property documents."
      }
    ],
    relatedTools: [
      { label: "Car Loan EMI", href: "/finance/emi/car-loan", description: 'Car loan EMI nikaalein', },
      { label: "Personal Loan EMI", href: "/finance/emi/personal-loan", description: 'Personal loan compare karein' },
      { label: "SIP Calculator", href: "/finance/sip", description: 'Investments plan karein' },
    ],
  },

  car: {
    loanTypeKey: "car" as LoanType,
    title: "Car Loan EMI Calculator",
    description: "Calculate your car loan EMI, total interest, and repayment schedule instantly — completely free.",
    metaTitle: "Car Loan EMI Calculator – Calculate Monthly Car EMI Online",
    metaDescription: "Calculate your car loan EMI instantly with our free calculator. Check monthly installment, total interest payable & repayment schedule for any car loan.",
    content: [
      {
        heading: "How to Use the Car Loan EMI Calculator",
        body: `<p>Calculating your car loan EMI takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>car loan amount</strong> (the amount you need to borrow after your down payment).</li>
        <li>Enter the <strong>interest rate</strong> offered by your bank or NBFC (typically ranges from 8% to 12% per annum for car loans).</li>
        <li>Select your <strong>loan tenure</strong> in years (usually between 1 to 7 years for car loans).</li>
        <li>Click <strong>Calculate</strong> to instantly see your monthly EMI, total interest payable, and total repayment amount.</li>
      </ol>
      <p>The calculator also shows you a month-by-month breakdown of how much goes towards principal and interest throughout the tenure.</p>`
      },
      {
        heading: "What is Car Loan EMI?",
        body: `<p>EMI, or <strong>Equated Monthly Installment</strong>, is the fixed monthly amount you pay to repay your car loan over a chosen period. Each EMI is split into two parts — principal repayment and interest charged on the outstanding loan amount.</p>
      <p>Unlike home loans, car loans generally have a shorter tenure, which means the interest component, while still front-loaded, reduces faster relative to the principal in the overall repayment journey.</p>`
      },
      {
        heading: "Car Loan EMI Formula",
        body: `<p>The EMI for a car loan is calculated using the standard loan formula:</p>
      <p class="formula">EMI = P × r × (1+r)^n / [(1+r)^n - 1]</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>P</strong> = Principal loan amount (car price minus down payment)</li>
        <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
        <li><strong>n</strong> = Loan tenure in months</li>
      </ul>
      <p>For example, if you take a car loan of ₹8,00,000 at 9% interest for a 5-year tenure, your monthly EMI would be approximately ₹16,609, and the total interest paid over the tenure would be around ₹1,96,540.</p>`
      },
      {
        heading: "Factors That Affect Your Car Loan EMI",
        body: `<p>Several factors influence the EMI amount you'll need to pay:</p>
      <ol>
        <li><strong>Loan Amount</strong> — The higher the loan amount (lower your down payment), the higher your EMI will be.</li>
        <li><strong>Down Payment</strong> — Paying a larger down payment upfront reduces your loan amount, directly lowering your monthly EMI.</li>
        <li><strong>Interest Rate</strong> — Car loan interest rates vary between banks and NBFCs. Even a 0.5% to 1% difference can change your EMI noticeably over the loan tenure.</li>
        <li><strong>Loan Tenure</strong> — A shorter tenure means higher EMI but lower total interest. A longer tenure reduces EMI but increases the overall interest cost.</li>
        <li><strong>New vs Used Car</strong> — Interest rates for used car loans are typically 1-3% higher than new car loans, which affects the EMI amount.</li>
        <li><strong>Credit Score</strong> — A credit score above 750 usually qualifies you for the best interest rates available, reducing your EMI burden.</li>
      </ol>`
      },
      {
        heading: "Tips to Reduce Your Car Loan EMI",
        body: `<ul>
        <li><strong>Increase your down payment</strong> to reduce the loan principal as much as possible.</li>
        <li><strong>Compare interest rates</strong> across multiple banks and NBFCs before finalizing.</li>
        <li><strong>Choose a shorter tenure</strong> if your monthly budget allows, to save significantly on total interest.</li>
        <li><strong>Maintain a good credit score</strong> to negotiate better interest rates with lenders.</li>
        <li><strong>Avoid add-on charges</strong> like processing fees or insurance bundled unnecessarily into the loan amount.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Car Loan EMI Calculator?",
        body: `<p>Our calculator helps you plan your car purchase smartly by allowing you to:</p>
      <ul>
        <li>Get instant, error-free EMI calculations</li>
        <li>Compare EMIs across different loan amounts, interest rates, and tenures</li>
        <li>Understand the full repayment schedule before signing the loan agreement</li>
        <li>Decide the ideal down payment and tenure combination for your budget</li>
      </ul>`
      }
    ],

    keywords: [
      "car loan EMI calculator",
      "car loan EMI calculator India",
      "auto loan EMI calculator",
      "vehicle loan calculator",
      "SBI car loan EMI calculator",
      "HDFC car loan EMI calculator",
    ],
    minAmount: 50000,
    maxAmount: 5000000,
    defaultAmount: 800000,
    step: 10000,
    minRate: 7,
    maxRate: 20,
    defaultRate: 9.0,
    minTenure: 1,
    maxTenure: 7,
    defaultTenure: 5,
    amountLabel: "Car loan amount",
    amountHints: ["₹50K", "₹50 lakh"],
    banks: [
      { name: "SBI", rate: 9.00 },
      { name: "HDFC", rate: 9.20 },
      { name: "ICICI", rate: 9.25 },
      { name: "Axis", rate: 9.30 },
    ],
    faqs: [
      {
        q: "How is car loan EMI calculated?",
        a: "Car loan EMI is calculated using the formula EMI = P × r × (1+r)^n / [(1+r)^n - 1], where P is the loan amount, r is the monthly interest rate, and n is the number of monthly installments. Simply adjust the sliders above and your EMI will update automatically."
      },
      {
        q: "What is the minimum CIBIL score required for a car loan?",
        a: "Most banks and NBFCs prefer a CIBIL score of 700 or above to approve a car loan at favorable interest rates."
      },
      {
        q: "Is a loan cheaper for a new car or a used car?",
        a: "New car loans typically have lower interest rates (8% to 10%), while used car loans usually carry higher rates (12% to 16%) due to higher perceived risk."
      },
      {
        q: "What is a good down payment for a car loan?",
        a: "A down payment of 15% to 20% of the car's on-road price is generally recommended. A higher down payment reduces both your loan amount and your monthly EMI."
      },
      {
        q: "Can I prepay my car loan?",
        a: "Yes, most lenders allow car loan prepayment, though some may charge a penalty on fixed-rate loans. Always check your loan agreement for specific terms."
      },
    ],
    relatedTools: [
      { label: "Home Loan EMI", href: "/finance/emi/home-loan", description: 'Calculate your home loan EMI instantly' },
      { label: "Personal Loan EMI", href: "/finance/emi/personal-loan", description: 'Estimate personal loan EMI and interest' },
      { label: "EMI Calculator", href: "/finance/emi", description: 'Calculate EMI for any type of loan' },
    ],
  },

  personal: {
    loanTypeKey: "personal" as LoanType,
    title: "Personal Loan EMI Calculator",
    description: "Calculate your personal loan EMI instantly — plan your collateral-free loan with ease.",

    metaTitle: "Personal Loan EMI Calculator – Calculate Monthly EMI Online",
    metaDescription: "Calculate your personal loan EMI instantly with our free calculator. Check monthly installment, total interest payable & repayment schedule.",
    content: [
      {
        heading: "How to Use the Personal Loan EMI Calculator",
        body: `<p>Calculating your personal loan EMI takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>loan amount</strong> you wish to borrow.</li>
        <li>Enter the <strong>interest rate</strong> offered by your bank or NBFC (typically ranges from 10% to 24% per annum for personal loans).</li>
        <li>Select your <strong>loan tenure</strong> in years (usually between 1 to 5 years for personal loans).</li>
        <li>Click <strong>Calculate</strong> to instantly view your monthly EMI, total interest payable, and total repayment amount.</li>
      </ol>
      <p>The calculator also generates a detailed breakdown showing how much of each EMI goes towards principal and interest over the loan tenure.</p>`
      },
      {
        heading: "What is a Personal Loan EMI?",
        body: `<p>A personal loan is an <strong>unsecured loan</strong> — meaning you don't need to pledge any collateral or asset to get it. Because of this, personal loans usually carry higher interest rates compared to secured loans like home or car loans.</p>
      <p>Your EMI consists of two parts — principal and interest. Since personal loans have shorter tenures, the interest component, although front-loaded, gets paid off relatively quickly compared to longer-tenure loans.</p>`
      },
      {
        heading: "Personal Loan EMI Formula",
        body: `<p>The EMI for a personal loan is calculated using the standard loan formula:</p>
      <p class="formula">EMI = P × r × (1+r)^n / [(1+r)^n - 1]</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>P</strong> = Principal loan amount</li>
        <li><strong>r</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
        <li><strong>n</strong> = Loan tenure in months</li>
      </ul>
      <p>For example, if you take a personal loan of ₹5,00,000 at 12% interest for a 3-year tenure, your monthly EMI would be approximately ₹16,607, and the total interest paid over the tenure would be around ₹97,852.</p>`
      },
      {
        heading: "Factors That Affect Your Personal Loan EMI",
        body: `<p>Several factors influence the EMI amount you'll need to pay:</p>
      <ol>
        <li><strong>Loan Amount</strong> — A higher loan amount directly increases your EMI.</li>
        <li><strong>Interest Rate</strong> — Since personal loans are unsecured, interest rates are higher and even a small difference can significantly impact your EMI.</li>
        <li><strong>Loan Tenure</strong> — A shorter tenure means higher EMI but lower total interest. A longer tenure reduces EMI but increases overall interest cost.</li>
        <li><strong>Credit Score</strong> — A credit score above 750 usually qualifies you for better interest rates, directly reducing your EMI burden.</li>
        <li><strong>Income and Employment Type</strong> — Salaried individuals with stable income often get better rates than self-employed applicants, depending on the lender's policy.</li>
      </ol>`
      },
      {
        heading: "Tips to Reduce Your Personal Loan EMI",
        body: `<ul>
        <li><strong>Compare interest rates</strong> across multiple banks and NBFCs before finalizing.</li>
        <li><strong>Choose a shorter tenure</strong> if your monthly budget allows, to save significantly on total interest.</li>
        <li><strong>Maintain a good credit score</strong> to negotiate better interest rates with lenders.</li>
        <li><strong>Avoid multiple loan applications</strong> in a short period, as it can lower your credit score and result in a higher interest rate.</li>
        <li><strong>Make prepayments</strong> whenever you have surplus funds to reduce your outstanding principal and total interest.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Personal Loan EMI Calculator?",
        body: `<p>Our calculator helps you plan your finances smartly by allowing you to:</p>
      <ul>
        <li>Get instant, error-free EMI calculations</li>
        <li>Compare EMIs across different loan amounts, interest rates, and tenures</li>
        <li>Understand the full repayment schedule before applying for a loan</li>
        <li>Make an informed decision about how much you can comfortably borrow</li>
      </ul>`
      }
    ],

    keywords: [
      "personal loan EMI calculator",
      "personal loan calculator India",
      "instant loan EMI calculator",
      "unsecured loan calculator",
      "SBI personal loan EMI calculator",
    ],
    minAmount: 10000,
    maxAmount: 5000000,
    defaultAmount: 500000,
    step: 5000,
    minRate: 8,
    maxRate: 36,
    defaultRate: 12.0,
    minTenure: 1,
    maxTenure: 5,
    defaultTenure: 3,
    amountLabel: "Loan amount",
    amountHints: ["₹10K", "₹50 lakh"],
    banks: [
      { name: "SBI", rate: 11.00 },
      { name: "HDFC", rate: 10.50 },
      { name: "ICICI", rate: 10.80 },
      { name: "Axis", rate: 11.25 },
    ],
    faqs: [
      {
        q: "How quickly can I get a personal loan?",
        a: "Digital banks and NBFCs can approve and disburse a personal loan within 24 to 48 hours, provided your documents and credit profile meet their criteria."
      },
      {
        q: "What documents are required for a personal loan?",
        a: "Typically required documents include Aadhaar, PAN, salary slips for the last 3 months, bank statements for the last 6 months, and address proof."
      },
      {
        q: "Can I prepay my personal loan?",
        a: "Yes, but most banks only allow prepayment after 6 to 12 EMIs have been paid, and may charge a prepayment penalty of 2% to 5% of the outstanding amount."
      },
      {
        q: "How is personal loan EMI calculated?",
        a: "Personal loan EMI is calculated using the formula EMI = P × r × (1+r)^n / [(1+r)^n - 1], where P is the loan amount, r is the monthly interest rate, and n is the number of monthly installments."
      },
      {
        q: "Why are personal loan interest rates higher than home loans?",
        a: "Personal loans are unsecured, meaning no collateral is pledged. This higher risk for the lender results in higher interest rates compared to secured loans like home or car loans."
      },
    ],
    relatedTools: [
      { label: "Home Loan EMI", href: "/finance/emi/home-loan", description: 'Calculate your home loan EMI instantly' },
      { label: "Car Loan EMI", href: "/finance/emi/car-loan", description: 'Calculate car loan monthly installments' },
      { label: "EMI Calculator", href: "/finance/emi", description: 'Calculate EMI for any type of loan' },
    ],
  },
}

// Slug to loanType mapping — page.tsx mein use hoga
export const slugToLoanType: Record<string, LoanType> = {
  "home-loan": "home",
  "car-loan": "car",
  "personal-loan": "personal",
}

// Valid slugs — generateStaticParams mein use hoga
export const validEmiSlugs = Object.keys(slugToLoanType)