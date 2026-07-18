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
  minPrincipal: number;
  maxPrincipal: number;
  defaultPrincipal: number;
  stepPrincipal: number;

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
    description: "Calculate how your investment grows over time with the power of compound interest — completely free.",
    metaTitle: "Compound Interest Calculator – Calculate Returns Online Free",
    metaDescription: "Calculate compound interest on your investment instantly with our free calculator. See how your money grows with monthly, quarterly, or annual compounding.",

    keywords: [
      "compound interest calculator",
      "compound interest calculator online",
      "compound interest formula calculator",
      "monthly compound interest calculator",
      "compound interest calculator India",
      "CI calculator",
      "online compound interest calculator 2025",
    ],

    minPrincipal: 1000,
    maxPrincipal: 10000000,
    defaultPrincipal: 100000,
    stepPrincipal: 1000,

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
    description: "Calculate simple interest on your loan or investment instantly — completely free.",

    metaTitle: "Simple Interest Calculator – Calculate Interest Online Free",
    metaDescription: "Calculate simple interest on your loan or investment instantly with our free calculator. Get accurate interest amount and total payable in seconds.",

    keywords: [
      "simple interest calculator",
      "simple interest calculator online",
      "simple interest formula calculator",
      "simple interest calculator India",
      "simple interest vs compound interest",
    ],
    minPrincipal: 1000,
    maxPrincipal: 10000000,
    defaultPrincipal: 100000,
    stepPrincipal: 1000,

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
        heading: "How to Use the Simple Interest Calculator",
        body: `<p>Calculating simple interest takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>principal amount</strong> — the original sum of money borrowed or invested.</li>
        <li>Enter the <strong>annual interest rate</strong> applicable to your loan or investment.</li>
        <li>Select the <strong>time period</strong> in years.</li>
        <li>Click <strong>Calculate</strong> to instantly view your total interest and the final amount payable or receivable.</li>
      </ol>
      <p>The calculator gives you an instant breakdown without any manual calculation errors.</p>`
      },
      {
        heading: "What is Simple Interest?",
        body: `<p>Simple interest is the most basic method of calculating interest — it is computed only on the <strong>original principal amount</strong>, throughout the entire loan or investment period. Unlike compound interest, the interest earned or charged in previous periods does not get added to the principal for future calculations.</p>
      <p>This means the interest amount remains the same every year, resulting in a linear growth pattern rather than an exponential one.</p>`
      },
      {
        heading: "Simple Interest Formula",
        body: `<p>Simple interest is calculated using the following formula:</p>
      <p class="formula">SI = (P × R × T) / 100</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>SI</strong> = Simple interest</li>
        <li><strong>P</strong> = Principal amount</li>
        <li><strong>R</strong> = Annual interest rate (in percentage)</li>
        <li><strong>T</strong> = Time period in years</li>
      </ul>
      <p>For example, if you invest ₹1,00,000 at an annual interest rate of 8% for 5 years, the simple interest earned would be ₹40,000, making the total amount ₹1,40,000.</p>`
      },
      {
        heading: "Simple Interest vs Compound Interest",
        body: `<p>The key difference between the two lies in how interest accumulates over time:</p>
      <ul>
        <li><strong>Simple Interest</strong> — Calculated only on the principal amount. The interest earned each year remains constant.</li>
        <li><strong>Compound Interest</strong> — Calculated on the principal plus previously earned interest, resulting in interest-on-interest and exponential growth.</li>
      </ul>
      <p>Simple interest is commonly used for short-term loans, certain fixed deposits, and basic lending products, while compound interest is more common for long-term investments and savings accounts.</p>`
      },
      {
        heading: "Where is Simple Interest Commonly Used?",
        body: `<p>Simple interest is typically used in scenarios such as:</p>
      <ol>
        <li><strong>Short-term personal loans</strong> from certain lenders</li>
        <li><strong>Car loans</strong> in some cases, depending on the lender's terms</li>
        <li><strong>Certain fixed deposits</strong> that pay interest annually rather than compounding it</li>
        <li><strong>Basic savings calculations</strong> for quick, easy-to-understand interest estimates</li>
      </ol>`
      },
      {
        heading: "Why Use Our Simple Interest Calculator?",
        body: `<p>Our calculator helps you quickly understand your loan or investment by allowing you to:</p>
      <ul>
        <li>Get instant, error-free simple interest calculations</li>
        <li>Compare interest amounts across different principal values, rates, and tenures</li>
        <li>Understand exactly how much interest you'll pay or earn</li>
        <li>Make quick financial decisions without manual math</li>
      </ul>`
      }
    ],

    faqs: [
      {
        q: "What is simple interest?",
        a: "Simple interest is interest calculated only on the original principal amount throughout the loan or investment period. Unlike compound interest, it does not add previously earned interest back into the principal."
      },
      {
        q: "How is simple interest calculated?",
        a: "Simple interest is calculated using the formula SI = (P × R × T) / 100, where P is the principal amount, R is the annual interest rate, and T is the time period in years."
      },
      {
        q: "What is the difference between simple and compound interest?",
        a: "Simple interest is calculated only on the principal, resulting in constant interest each year. Compound interest is calculated on the principal plus accumulated interest, resulting in growing interest amounts over time."
      },
      {
        q: "Is simple interest better than compound interest?",
        a: "It depends on whether you are borrowing or investing. As a borrower, simple interest is usually better since you pay less over time. As an investor, compound interest is better since your returns grow faster."
      },
      {
        q: "Where is simple interest commonly used?",
        a: "Simple interest is commonly used for short-term loans, certain fixed deposits, and basic lending products where straightforward, predictable interest calculations are preferred."
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
    title: "CAGR Calculator",
    description: "Calculate the Compound Annual Growth Rate of your investment instantly — completely free.",
    metaTitle: "CAGR Calculator – Calculate Compound Annual Growth Rate Free",
    metaDescription: "Calculate CAGR (Compound Annual Growth Rate) instantly with our free calculator. Find your investment's annualized return in seconds.",

    keywords: [
      "CAGR calculator",
      "CAGR calculator online",
      "compound annual growth rate calculator",
      "CAGR formula calculator",
      "CAGR calculator India",
    ],

    minPrincipal: 1000,
    maxPrincipal: 10000000,
    defaultPrincipal: 100000,
    stepPrincipal: 1000,

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
        heading: "How to Use the CAGR Calculator",
        body: `<p>Calculating CAGR takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>initial investment value</strong> (the amount you started with).</li>
        <li>Enter the <strong>final investment value</strong> (the current or final amount).</li>
        <li>Select the <strong>investment duration</strong> in years.</li>
        <li>Click <strong>Calculate</strong> to instantly see your CAGR percentage.</li>
      </ol>
      <p>The calculator gives you an instant, accurate annualized growth rate — no manual calculation required.</p>`
      },
      {
        heading: "What is CAGR?",
        body: `<p><strong>CAGR (Compound Annual Growth Rate)</strong> is the average annual growth rate of an investment over a specified period, assuming the investment grows at a steady, compounded rate every year. It smooths out the year-to-year volatility of an investment's returns and gives you a single, easy-to-understand growth percentage.</p>
      <p>CAGR is widely used to compare the performance of different investments — such as mutual funds, stocks, or business revenue — over the same time period, even if their actual year-by-year returns fluctuated.</p>`
      },
      {
        heading: "CAGR Formula",
        body: `<p>CAGR is calculated using the following formula:</p>
      <p class="formula">CAGR = (Final Value / Initial Value)^(1/n) − 1</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>Final Value</strong> = The value of the investment at the end of the period</li>
        <li><strong>Initial Value</strong> = The value of the investment at the start of the period</li>
        <li><strong>n</strong> = Number of years</li>
      </ul>
      <p>For example, if you invested ₹1,00,000 and it grew to ₹2,00,000 over 5 years, your CAGR would be approximately 14.87%, meaning your investment grew at an average rate of 14.87% per year.</p>`
      },
      {
        heading: "CAGR vs Absolute Return",
        body: `<p>It's important not to confuse CAGR with absolute return:</p>
      <ul>
        <li><strong>Absolute Return</strong> — Simply the total percentage gain or loss over the entire investment period, without accounting for time.</li>
        <li><strong>CAGR</strong> — The annualized growth rate, which accounts for the time period and shows what your average yearly return would have been.</li>
      </ul>
      <p>For example, a 100% absolute return over 5 years sounds impressive, but the CAGR would be about 14.87% per year — a more realistic picture of annual performance. CAGR is especially useful for comparing investments held over different time periods.</p>`
      },
      {
        heading: "Why is CAGR Important for Investors?",
        body: `<p>CAGR is a valuable metric for several reasons:</p>
      <ol>
        <li><strong>Easy Comparison</strong> — It allows you to compare mutual funds, stocks, or other investments on a like-for-like annualized basis.</li>
        <li><strong>Smooths Volatility</strong> — It ignores year-to-year fluctuations and gives a single average growth figure.</li>
        <li><strong>Better Decision Making</strong> — Helps investors evaluate whether an investment's growth has been consistent with their financial goals.</li>
        <li><strong>Limitation to Note</strong> — CAGR assumes smooth, steady growth and does not reflect actual volatility or risk during the investment period.</li>
      </ol>`
      },
      {
        heading: "Why Use Our CAGR Calculator?",
        body: `<p>Our calculator helps you evaluate your investments smartly by allowing you to:</p>
      <ul>
        <li>Get instant, accurate CAGR calculations</li>
        <li>Compare the annualized performance of different investments</li>
        <li>Understand your real average yearly growth rate</li>
        <li>Make informed decisions when choosing between investment options</li>
      </ul>`
      }
    ],

    faqs: [
      {
        q: "What is CAGR?",
        a: "CAGR (Compound Annual Growth Rate) is the average annual growth rate of an investment over a specified period, assuming steady, compounded growth each year. It is widely used to compare investment performance."
      },
      {
        q: "How is CAGR calculated?",
        a: "CAGR is calculated using the formula CAGR = (Final Value / Initial Value)^(1/n) − 1, where n is the number of years of the investment period."
      },
      {
        q: "What is the difference between CAGR and absolute return?",
        a: "Absolute return is the total percentage gain over the entire period without considering time. CAGR is the annualized growth rate, which accounts for the time period and gives a more accurate picture of yearly performance."
      },
      {
        q: "Is a higher CAGR always better?",
        a: "Generally yes, a higher CAGR indicates better annualized growth. However, it's important to also consider the risk and volatility of the investment, since CAGR does not reflect fluctuations during the period."
      },
      {
        q: "Can CAGR be negative?",
        a: "Yes, if the final value of an investment is lower than the initial value, the CAGR will be negative, indicating that the investment has lost value over the period on an average annual basis."
      },
    ],
    relatedTools: [
      {
        label: "Compound Interest",
        href: "/finance/compound-interest",
        description: "Calculate compound interest on your investment",
      },
      {
        label: "Inflation Calculator",
        href: "/finance/compound-interest/inflation",
        description: "Calculate the impact of inflation on your money"
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
    description: "Calculate how inflation impacts the value of your money over time — completely free.",
    metaTitle: "Inflation Calculator – Calculate Future Value Online Free",
    metaDescription: "Calculate how inflation affects the value of your money over time with our free calculator. Find the future or real value of your savings instantly.",

    keywords: [
      "inflation calculator",
      "inflation calculator online",
      "inflation rate calculator",
      "future value calculator with inflation",
      "inflation calculator India",
    ],

    minPrincipal: 1000,
    maxPrincipal: 10000000,
    defaultPrincipal: 100000,
    stepPrincipal: 1000,

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
        heading: "How to Use the Inflation Calculator",
        body: `<p>Calculating the impact of inflation takes less than a minute:</p>
      <ol>
        <li>Enter the <strong>current amount</strong> you want to evaluate.</li>
        <li>Enter the <strong>expected inflation rate</strong> per year (historically, India's average inflation rate has been around 5% to 7%).</li>
        <li>Select the <strong>number of years</strong> you want to project into the future.</li>
        <li>Click <strong>Calculate</strong> to instantly see the future cost of goods or the reduced real value of your money.</li>
      </ol>
      <p>The calculator helps you understand exactly how much purchasing power your money will lose or how much more you'll need to maintain the same lifestyle.</p>`
      },
      {
        heading: "What is Inflation?",
        body: `<p>Inflation is the rate at which the general price level of goods and services rises over time, causing the <strong>purchasing power of money to fall</strong>. In simple terms, the same amount of money buys fewer goods and services as time passes.</p>
      <p>For example, an item that costs ₹100 today might cost ₹150 or more after 10 years if inflation continues at a steady rate. This is why it's important to factor inflation into your long-term financial planning, especially for goals like retirement or your child's education.</p>`
      },
      {
        heading: "Inflation Calculation Formula",
        body: `<p>The future value of money after accounting for inflation is calculated using the following formula:</p>
      <p class="formula">FV = PV × (1 + r)^n</p>
      <p><strong>Where:</strong></p>
      <ul>
        <li><strong>FV</strong> = Future value (the amount needed in the future)</li>
        <li><strong>PV</strong> = Present value (the current amount)</li>
        <li><strong>r</strong> = Annual inflation rate (in decimal form)</li>
        <li><strong>n</strong> = Number of years</li>
      </ul>
      <p>For example, if something costs ₹1,00,000 today and inflation averages 6% per year, the same item would cost approximately ₹1,79,085 after 10 years.</p>`
      },
      {
        heading: "Why Inflation Matters for Financial Planning",
        body: `<p>Ignoring inflation while planning your finances can lead to a significant shortfall in the future. Here's why it matters:</p>
      <ol>
        <li><strong>Retirement Planning</strong> — The amount you think is sufficient for retirement today may not be enough 20-30 years from now due to rising costs.</li>
        <li><strong>Savings vs Investment</strong> — Money kept idle in a savings account often grows slower than inflation, effectively losing value over time in real terms.</li>
        <li><strong>Goal-Based Planning</strong> — Education, marriage, or home-buying costs rise with inflation, so future targets should be adjusted accordingly.</li>
        <li><strong>Investment Returns</strong> — Your investment returns should ideally beat the inflation rate to generate real, meaningful wealth growth.</li>
      </ol>`
      },
      {
        heading: "How to Beat Inflation",
        body: `<ul>
        <li><strong>Invest in growth assets</strong> like equity mutual funds or stocks, which historically outpace inflation over the long term.</li>
        <li><strong>Avoid keeping large sums idle</strong> in low-interest savings accounts for long periods.</li>
        <li><strong>Review your financial goals periodically</strong> and adjust target amounts for inflation.</li>
        <li><strong>Diversify your investments</strong> across asset classes to balance risk while aiming for inflation-beating returns.</li>
      </ul>`
      },
      {
        heading: "Why Use Our Inflation Calculator?",
        body: `<p>Our calculator helps you plan your finances realistically by allowing you to:</p>
      <ul>
        <li>Get instant, accurate inflation-adjusted calculations</li>
        <li>Understand the real future cost of goods, services, or financial goals</li>
        <li>Plan more accurately for retirement, education, or other long-term goals</li>
        <li>Make informed investment decisions that account for the eroding effect of inflation</li>
      </ul>`
      }
    ],

    faqs: [
      {
        q: "What is inflation?",
        a: "Inflation is the rate at which the general price level of goods and services rises over time, reducing the purchasing power of money. The same amount buys fewer goods as time passes."
      },
      {
        q: "How is inflation calculated for future value?",
        a: "The future value adjusted for inflation is calculated using the formula FV = PV × (1 + r)^n, where PV is the present value, r is the annual inflation rate, and n is the number of years."
      },
      {
        q: "What is the average inflation rate in India?",
        a: "India's average inflation rate has historically ranged between 5% to 7% per year, though it can vary based on economic conditions, government policy, and global factors."
      },
      {
        q: "How does inflation affect my savings?",
        a: "If your savings grow at a rate lower than inflation, their real purchasing power decreases over time. This is why it's important to invest in assets that offer inflation-beating returns."
      },
      {
        q: "Why should I consider inflation while planning for retirement?",
        a: "The cost of living rises every year due to inflation. An amount that seems sufficient for retirement today may fall short 20-30 years later, making it essential to plan with inflation-adjusted targets."
      },
    ],

    relatedTools: [
      { label: "Compound Interest Calculator", href: "/finance/compound-interest", description: 'Calculate compound interest on your investment' },
      { label: "CAGR Calculator", href: "/finance/compound-interest/cagr", description: 'Calculate compound annual growth rate' },
      { label: "Simple Interest Calculator", href: "/finance/compound-interest/simple-interest", description: 'Calculate simple interest on your investment' },
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