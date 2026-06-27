export type CiType = "compound-interest" | "simple-interest" | "cagr" | "inflation";

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
  loanTypeKey: CiType;
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

  // Compounding frequency options (used by CICalculator dropdown)
  compounding: string[];

  // Bank Suggestions
  banks: BankRate[];

  // Article Content
  content: ContentSection[];

  // FAQs
  faqs: FAQ[];

  // Related Calculators
  relatedTools: RelatedTool[];
}

export const ciConfig: Record<CiType, EmiTypeConfig> = {
  "compound-interest": {
    loanTypeKey: "compound-interest",
    title: "Compound Interest Calculator",
    description:
      "Calculate how your investment grows over time with the power of compound interest — completely free.",

    metaTitle: "Compound Interest Calculator – Calculate Returns Online Free",
    metaDescription:
      "Calculate compound interest on your investment instantly with our free calculator. See how your money grows with monthly, quarterly, or annual compounding.",

    keywords: [
      "compound interest calculator",
      "compound interest calculator online",
      "compound interest formula calculator",
      "monthly compound interest calculator",
      "compound interest calculator India",
      "CI calculator",
      "online compound interest calculator 2025",
    ],

    minAmount: 1000,
    maxAmount: 10000000,
    defaultAmount: 100000,
    step: 1000,

    minRate: 1,
    maxRate: 30,
    defaultRate: 10,

    minTenure: 1,
    maxTenure: 30,
    defaultTenure: 5,

    amountLabel: "Principal Amount",
    amountHints: [],

    compounding: ["Monthly", "Quarterly", "Half-yearly", "Yearly"],

    banks: [
      { name: "SBI", rate: 6.5 },
      { name: "HDFC Bank", rate: 7 },
      { name: "ICICI Bank", rate: 7 },
    ],

    content: [
      {
        heading: "How to Use the Compound Interest Calculator",
        body: `<p>Calculating compound interest takes less than a minute:</p>
        <ol>
          <li>Enter the <strong>principal amount</strong> you want to invest.</li>
          <li>Enter the <strong>annual interest rate</strong> offered by your bank or investment.</li>
          <li>Select the <strong>investment tenure</strong> in years.</li>
          <li>Choose the <strong>compounding frequency</strong> — annually, semi-annually, quarterly, or monthly.</li>
          <li>Click <strong>Calculate</strong> to instantly see your maturity amount and total interest earned.</li>
        </ol>
        <p>The calculator also shows a year-by-year breakdown of how your investment grows over time.</p>`,
      },
      {
        heading: "What is Compound Interest?",
        body: `<p>Compound interest is the interest calculated not just on your original principal, but also on the <strong>accumulated interest</strong> from previous periods. This means your money grows faster over time compared to simple interest, where interest is calculated only on the principal amount.</p>
        <p>The more frequently interest is compounded — monthly instead of annually, for example — the faster your investment grows, since interest starts earning interest sooner.</p>`,
      },
      {
        heading: "Compound Interest Formula",
        body: `<p>Compound interest is calculated using the following formula:</p>
        <p class="formula">A = P (1 + r/n)^(n×t)</p>
        <p><strong>Where:</strong></p>
        <ul>
          <li><strong>A</strong> = Final amount (principal + interest)</li>
          <li><strong>P</strong> = Principal amount</li>
          <li><strong>r</strong> = Annual interest rate (in decimal form)</li>
          <li><strong>n</strong> = Number of times interest is compounded per year</li>
          <li><strong>t</strong> = Time period in years</li>
        </ul>
        <p>For example, if you invest ₹1,00,000 at an annual interest rate of 8%, compounded annually, for 10 years, your investment would grow to approximately ₹2,15,892.</p>`,
      },
      {
        heading: "Compound Interest vs Simple Interest",
        body: `<p>The key difference between compound and simple interest lies in how interest is calculated:</p>
        <ul>
          <li><strong>Simple Interest</strong> — Calculated only on the original principal amount throughout the investment period. Growth is linear.</li>
          <li><strong>Compound Interest</strong> — Calculated on the principal plus any interest already earned. Growth is exponential, especially over longer periods.</li>
        </ul>
        <p>Over short tenures, the difference between the two is small. But over 10, 20, or 30 years, compound interest can result in significantly higher returns — this is often referred to as the "power of compounding."</p>`,
      },
      {
        heading: "Factors That Affect Compound Interest Returns",
        body: `<p>Several factors determine how much your investment will grow:</p>
        <ol>
          <li><strong>Principal Amount</strong> — A higher initial investment results in higher absolute returns.</li>
          <li><strong>Interest Rate</strong> — Even a small difference in rate compounds significantly over long periods.</li>
          <li><strong>Tenure</strong> — The longer you stay invested, the more pronounced the compounding effect becomes.</li>
          <li><strong>Compounding Frequency</strong> — Monthly or quarterly compounding yields slightly higher returns than annual compounding, for the same interest rate.</li>
        </ol>`,
      },
      {
        heading: "Why Use Our Compound Interest Calculator?",
        body: `<p>Our calculator helps you plan your investments smartly by allowing you to:</p>
        <ul>
          <li>Get instant, accurate compound interest calculations</li>
          <li>Compare returns across different tenures and compounding frequencies</li>
          <li>Understand exactly how much your investment will grow over time</li>
          <li>Make informed decisions about where and how long to invest</li>
        </ul>`,
      },
    ],

    faqs: [
      {
        q: "What is compound interest?",
        a: "Compound interest is interest calculated on both the principal amount and the accumulated interest from previous periods. This causes your investment to grow faster than with simple interest.",
      },
      {
        q: "How is compound interest calculated?",
        a: "Compound interest is calculated using the formula A = P (1 + r/n)^(n×t), where P is the principal, r is the annual interest rate, n is the compounding frequency per year, and t is the time in years.",
      },
      {
        q: "What is the difference between compound and simple interest?",
        a: "Simple interest is calculated only on the principal amount, resulting in linear growth. Compound interest is calculated on the principal plus accumulated interest, resulting in exponential growth over time.",
      },
      {
        q: "Does compounding frequency matter?",
        a: "Yes, more frequent compounding (monthly or quarterly) results in slightly higher returns compared to annual compounding, for the same interest rate, because interest starts earning interest sooner.",
      },
      {
        q: "Which is better for long-term investment — compound or simple interest?",
        a: "Compound interest is significantly better for long-term investments because the growth is exponential. The longer the investment period, the greater the advantage of compounding.",
      },
    ],

    relatedTools: [
      {
        label: "Simple Interest Calculator",
        href: "/finance/compound-interest/simple-interest",
        description: "Calculate simple interest on your investment",
      },
      {
        label: "CAGR Calculator",
        href: "/finance/compound-interest/cagr",
        description: "Calculate compound annual growth rate",
      },
      {
        label: "Inflation Calculator",
        href: "/finance/compound-interest/inflation",
        description: "Calculate the impact of inflation on your money",
      },
    ],
  },

  "simple-interest": {
    loanTypeKey: "simple-interest",
    title: "Simple Interest Calculator",
    description:
      "Loan ya investment par simple interest aur total amount instantly calculate karein — SI formula ke saath step-by-step.",

    metaTitle: "Simple Interest Calculator – Calculate SI Online Free",
    metaDescription:
      "Calculate simple interest on your loan or investment instantly with our free calculator using the SI formula.",

    keywords: [
      "simple interest calculator",
      "simple interest calculator India",
      "SI calculator",
      "simple interest formula calculator",
      "simple interest vs compound interest",
    ],

    minAmount: 1000,
    maxAmount: 10000000,
    defaultAmount: 100000,
    step: 1000,

    minRate: 1,
    maxRate: 30,
    defaultRate: 10,

    minTenure: 1,
    maxTenure: 30,
    defaultTenure: 5,

    amountLabel: "Principal Amount",
    amountHints: [],

    compounding: [],

    banks: [
      { name: "SBI", rate: 6.5 },
      { name: "HDFC Bank", rate: 7 },
      { name: "ICICI Bank", rate: 7 },
    ],

    content: [
      {
        heading: "Simple Interest Kya Hai?",
        body: `<p>Simple interest sirf principal amount par calculate hota hai, har period mein same amount ka interest milta hai. Yeh compound interest se alag hai, jisme interest par bhi interest milta hai.</p>`,
      },
      {
        heading: "Simple Interest Formula",
        body: `<p>SI = P × R × T / 100</p>
        <p>Jahan P = Principal, R = Annual Rate, T = Time in years. Total amount = P + SI.</p>`,
      },
    ],

    faqs: [
      {
        q: "Simple interest kya hota hai?",
        a: "Simple interest sirf original principal par calculate hota hai — har saal same amount ka interest milta hai. SI = P × R × T / 100.",
      },
      {
        q: "SI aur CI mein kya fark hai?",
        a: "SI mein sirf principal par interest milta hai. CI mein principal + pichle interest par bhi interest milta hai, isliye CI zyada hota hai.",
      },
      {
        q: "Simple interest kahan use hota hai?",
        a: "Short term loans, car loans, aur kuch personal loans mein simple interest method use hota hai.",
      },
      {
        q: "Simple interest ka formula kya hai?",
        a: "SI = P × R × T / 100. Jahan P = principal, R = annual rate, T = time in years. Total amount = P + SI.",
      },
    ],

    relatedTools: [
      {
        label: "Compound Interest",
        href: "/finance/compound-interest",
        description: "Calculate compound interest on your investment",
      },
      {
        label: "CAGR Calculator",
        href: "/finance/compound-interest/cagr",
        description: "Calculate compound annual growth rate",
      },
      {
        label: "EMI Calculator",
        href: "/finance/emi",
        description: "Calculate your loan EMI",
      },
    ],
  },

  cagr: {
    loanTypeKey: "cagr",
    title: "CAGR Calculator — Compound Annual Growth Rate",
    description:
      "Investment ka CAGR instantly calculate karein — mutual funds, stocks aur business growth ka accurate annual return jaanein.",

    metaTitle: "CAGR Calculator – Compound Annual Growth Rate Online Free",
    metaDescription:
      "Calculate CAGR (Compound Annual Growth Rate) instantly for your mutual funds, stocks, or business investments with our free calculator.",

    keywords: [
      "CAGR calculator",
      "CAGR calculator India",
      "compound annual growth rate calculator",
      "mutual fund CAGR calculator",
      "investment return calculator",
    ],

    minAmount: 1000,
    maxAmount: 10000000,
    defaultAmount: 100000,
    step: 1000,

    minRate: 0, // CAGR calculated from values
    maxRate: 100,
    defaultRate: 0,

    minTenure: 1,
    maxTenure: 30,
    defaultTenure: 5,

    amountLabel: "Beginning Value",
    amountHints: [],

    compounding: [],

    banks: [],

    content: [
      {
        heading: "CAGR Kya Hai?",
        body: `<p>CAGR (Compound Annual Growth Rate) batata hai ki aapki investment har saal average kitne % se badhi. Ye fluctuating returns ko ek smooth annual rate mein convert karta hai.</p>`,
      },
      {
        heading: "CAGR Formula",
        body: `<p class="formula">CAGR = (Ending Value / Beginning Value)^(1/n) − 1</p>
        <p>Jahan n = number of years. Calculator automatically ye calculate karta hai.</p>`,
      },
    ],

    faqs: [
      {
        q: "CAGR kya hota hai?",
        a: "CAGR (Compound Annual Growth Rate) batata hai ki aapki investment har saal average kitne % se badhi. Ye fluctuating returns ko ek smooth annual rate mein convert karta hai.",
      },
      {
        q: "CAGR formula kya hai?",
        a: "CAGR = (Ending Value / Beginning Value)^(1/n) - 1. Jahan n = number of years. Calculator automatically ye calculate karta hai.",
      },
      {
        q: "Good CAGR kitna hota hai?",
        a: "Equity mutual funds ke liye 12–15% CAGR achha maana jaata hai. Fixed deposits 6–8% CAGR deti hain. Index funds historically 12% CAGR dete hain.",
      },
      {
        q: "CAGR aur absolute return mein fark?",
        a: "Absolute return sirf total % gain batata hai. CAGR per year ka average gain batata hai — investment comparison ke liye CAGR zyada useful hai.",
      },
    ],

    relatedTools: [
      {
        label: "Compound Interest",
        href: "/finance/compound-interest",
        description: "Calculate compound interest on your investment",
      },
      {
        label: "SIP Calculator",
        href: "/finance/sip",
        description: "Calculate SIP returns",
      },
      {
        label: "Lumpsum Calculator",
        href: "/finance/sip/lumpsum",
        description: "Calculate lumpsum investment returns",
      },
    ],
  },

  inflation: {
    loanTypeKey: "inflation",
    title: "Inflation Calculator",
    description:
      "Mehngai ka asar calculate karein — aaj ke ₹1 lakh ki 10–20 saal baad kitni value hogi, instantly jaanein.",

    metaTitle: "Inflation Calculator – Future Value & Purchasing Power Online Free",
    metaDescription:
      "Calculate the impact of inflation on your money instantly with our free calculator. See the future value of today's amount.",

    keywords: [
      "inflation calculator",
      "inflation calculator India",
      "purchasing power calculator",
      "inflation rate calculator India 2025",
      "future value inflation calculator",
    ],

    minAmount: 1000,
    maxAmount: 10000000,
    defaultAmount: 100000,
    step: 1000,

    minRate: 1,
    maxRate: 20,
    defaultRate: 6, // India avg inflation ~6%

    minTenure: 1,
    maxTenure: 30,
    defaultTenure: 10,

    amountLabel: "Current Amount",
    amountHints: [],

    compounding: ["Yearly"],

    banks: [],

    content: [
      {
        heading: "Inflation Calculator Kaise Use Karein?",
        body: `<p>Current amount, expected inflation rate aur time period set karein — calculator batayega ki aaj ki raqam future mein kitne ki barabar hogi.</p>`,
      },
      {
        heading: "Retirement Planning Mein Inflation",
        body: `<p>Agar aaj ₹50,000/month kharcha hai to 6% inflation par 20 saal baad ₹1.6 lakh/month chahiye hoga. Isliye retirement corpus mein inflation factor zaroori hai.</p>`,
      },
    ],

    faqs: [
      {
        q: "Inflation calculator kaise use karein?",
        a: "Current amount, expected inflation rate aur time period set karein — calculator batayega ki aaj ki raqam future mein kitne ki barabar hogi.",
      },
      {
        q: "India mein average inflation rate kitna?",
        a: "India mein historically average CPI inflation 5–7% rahi hai. RBI ka target 4% (+/- 2%) hai.",
      },
      {
        q: "Inflation se paisa bachane ka tarika?",
        a: "Equity mutual funds, real estate, aur gold inflation se upar return dete hain historically. FD aksar inflation beat nahi kar paati.",
      },
      {
        q: "Retirement planning mein inflation?",
        a: "Agar aaj ₹50,000/month kharcha hai to 6% inflation par 20 saal baad ₹1.6 lakh/month chahiye hoga. Isliye retirement corpus mein inflation factor zaroori hai.",
      },
    ],

    relatedTools: [
      {
        label: "Compound Interest",
        href: "/finance/compound-interest",
        description: "Calculate compound interest on your investment",
      },
      {
        label: "SIP Calculator",
        href: "/finance/sip",
        description: "Calculate SIP returns",
      },
      {
        label: "FD Calculator",
        href: "/finance/fd",
        description: "Calculate fixed deposit returns",
      },
    ],
  },
};

export const slugToCiType: Record<string, CiType> = {
  "compound-interest": "compound-interest",
  "simple-interest": "simple-interest",
  cagr: "cagr",
  inflation: "inflation",
};

export const validCiSlugs = Object.keys(slugToCiType);