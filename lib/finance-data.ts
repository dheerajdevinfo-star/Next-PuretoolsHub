// lib/finance-data.ts
// Single source of truth for every finance category + its sub-tools.
// Add a new category here and it automatically gets a listing page,
// SEO metadata, sitemap entry pattern, and breadcrumb — no repeated code.

export type FinanceTool = {
  slug: string;        // used in the URL: /finance/emi/home-loan
  title: string;       // H3 on the card + <title> base
  description: string; // short card description
  metaDescription: string; // longer, keyword-rich, for SEO <meta description>
};

export type FinanceCategory = {
  slug: string;              // /finance/emi
  title: string;             // H1 + nav label
  shortLabel: string;        // used in breadcrumbs / footer
  description: string;       // one-line summary shown under H1
  metaDescription: string;   // SEO meta description for the parent page
  keywords: string[];        // SEO keywords for this category
  icon: string;              // lucide-react icon name, resolved in the component
  tools: FinanceTool[];
};

export const financeCategories: FinanceCategory[] = [
  {
    slug: "emi",
    title: "EMI Calculators",
    shortLabel: "EMI",
    description:
      "Calculate your monthly loan installments for home, car, and personal loans instantly.",
    metaDescription:
      "Free EMI calculators for home loans, car loans, and personal loans. Get instant, accurate monthly installment breakdowns with interest and principal split.",
    keywords: ["EMI calculator", "loan EMI", "home loan EMI", "car loan EMI", "personal loan EMI"],
    icon: "Calculator",
    tools: [
      {
        slug: "home-loan",
        title: "Home Loan EMI Calculator",
        description: "Calculate your monthly home loan installment instantly.",
        metaDescription:
          "Calculate your home loan EMI instantly. See monthly installment, total interest, and full amortization breakdown for free.",
      },
      {
        slug: "car-loan",
        title: "Car Loan EMI Calculator",
        description: "Work out your car loan monthly EMI in seconds.",
        metaDescription:
          "Free car loan EMI calculator. Instantly calculate your monthly car loan installment, total interest payable, and repayment schedule.",
      },
      {
        slug: "personal-loan",
        title: "Personal Loan EMI Calculator",
        description: "Get your personal loan EMI breakdown instantly.",
        metaDescription:
          "Calculate your personal loan EMI online for free. Get monthly installment, interest cost, and repayment schedule instantly.",
      },
    ],
  },
  {
    slug: "sip",
    title: "SIP Calculators",
    shortLabel: "SIP",
    description:
      "Plan your mutual fund investments with SIP, lumpsum, step-up, and SWP calculators.",
    metaDescription:
      "Free SIP calculators to plan your mutual fund investments. Calculate SIP returns, lumpsum growth, step-up SIP, and SWP withdrawals instantly.",
    keywords: ["SIP calculator", "mutual fund calculator", "lumpsum calculator", "step-up SIP", "SWP calculator"],
    icon: "TrendingUp",
    tools: [
      {
        slug: "lumpsum",
        title: "Lumpsum Calculator",
        description: "Estimate returns on a one-time mutual fund investment.",
        metaDescription:
          "Free lumpsum investment calculator. Estimate future value of your one-time mutual fund investment based on expected returns and duration.",
      },
      {
        slug: "step-up",
        title: "Step-Up SIP Calculator",
        description: "Plan SIP returns with an annual investment increase.",
        metaDescription:
          "Calculate step-up SIP returns for free. See how increasing your SIP amount every year grows your mutual fund investment over time.",
      },
      {
        slug: "swp",
        title: "SWP Calculator",
        description: "Plan systematic withdrawals from your mutual fund corpus.",
        metaDescription:
          "Free SWP (Systematic Withdrawal Plan) calculator. Estimate how long your investment lasts with regular monthly withdrawals.",
      },
    ],
  },
  {
    slug: "fd",
    title: "FD Calculators",
    shortLabel: "FD",
    description:
      "Calculate fixed deposit maturity value, tax-saver FD, senior citizen FD, and RD returns.",
    metaDescription:
      "Free fixed deposit calculators. Calculate FD maturity amount, tax-saver FD returns, senior citizen FD rates, and recurring deposit growth instantly.",
    keywords: ["FD calculator", "fixed deposit calculator", "tax saver FD", "senior citizen FD", "RD calculator"],
    icon: "PiggyBank",
    tools: [
      {
        slug: "tax-saver-fd",
        title: "Tax Saver FD Calculator",
        description: "Calculate returns on your 5-year tax-saving FD.",
        metaDescription:
          "Free tax-saver FD calculator. Estimate maturity value of your 5-year tax-saving fixed deposit and applicable interest.",
      },
      {
        slug: "senior-citizen-fd",
        title: "Senior Citizen FD Calculator",
        description: "Calculate FD maturity with senior citizen interest rates.",
        metaDescription:
          "Calculate senior citizen FD returns for free. See maturity amount using the extra interest rate banks offer senior citizens.",
      },
      {
        slug: "recurring-deposit",
        title: "Recurring Deposit Calculator",
        description: "Calculate maturity value of your monthly RD.",
        metaDescription:
          "Free recurring deposit (RD) calculator. Calculate maturity amount and total interest earned on your monthly RD instantly.",
      },
    ],
  },
  {
    slug: "ppf",
    title: "PPF Calculators",
    shortLabel: "PPF",
    description:
      "Calculate PPF maturity, interest, withdrawal rules, and compare PPF with FD returns.",
    metaDescription:
      "Free PPF calculators. Calculate PPF maturity value, interest earned, withdrawal eligibility, extension rules, and compare PPF vs FD returns.",
    keywords: ["PPF calculator", "PPF interest calculator", "PPF withdrawal", "PPF vs FD", "PPF extension"],
    icon: "Landmark",
    tools: [
      {
        slug: "ppf-withdrawal",
        title: "PPF Withdrawal Calculator",
        description: "Check your PPF partial withdrawal eligibility and amount.",
        metaDescription:
          "Free PPF withdrawal calculator. Check how much you can withdraw from your PPF account and when you become eligible.",
      },
      {
        slug: "ppf-interest-calculator",
        title: "PPF Interest Calculator",
        description: "Calculate yearly interest earned on your PPF account.",
        metaDescription:
          "Calculate PPF interest for free. See year-by-year interest accumulation and maturity value of your PPF account.",
      },
      {
        slug: "ppf-vs-fd",
        title: "PPF vs FD Calculator",
        description: "Compare PPF and FD returns side by side.",
        metaDescription:
          "Free PPF vs FD comparison calculator. Compare returns, tax benefits, and maturity value between PPF and fixed deposits.",
      },
      {
        slug: "ppf-extension",
        title: "PPF Extension Calculator",
        description: "Calculate returns after extending your PPF account.",
        metaDescription:
          "Free PPF extension calculator. Estimate maturity value if you extend your PPF account beyond 15 years, with or without contributions.",
      },
    ],
  },
  {
    slug: "epf",
    title: "EPF Calculators",
    shortLabel: "EPF",
    description:
      "Check EPF balance, calculate interest, EPS pension, and withdrawal eligibility.",
    metaDescription:
      "Free EPF calculators. Check your EPF balance, calculate EPF interest, EPS pension amount, and withdrawal eligibility instantly.",
    keywords: ["EPF calculator", "EPF balance check", "EPF interest calculator", "EPS calculator", "EPF withdrawal"],
    icon: "Building2",
    tools: [
      {
        slug: "epf-withdrawal",
        title: "EPF Withdrawal Calculator",
        description: "Check your EPF withdrawal eligibility and amount.",
        metaDescription:
          "Free EPF withdrawal calculator. Check how much you can withdraw from your EPF account and applicable rules.",
      },
      {
        slug: "epf-balance-check",
        title: "EPF Balance Calculator",
        description: "Estimate your current EPF account balance.",
        metaDescription:
          "Free EPF balance calculator. Estimate your accumulated EPF balance based on salary, contributions, and years of service.",
      },
      {
        slug: "epf-interest-calculator",
        title: "EPF Interest Calculator",
        description: "Calculate yearly interest credited to your EPF account.",
        metaDescription:
          "Calculate EPF interest for free. See how much interest accumulates on your EPF balance each year.",
      },
      {
        slug: "eps-calculator",
        title: "EPS Calculator",
        description: "Estimate your monthly EPS pension amount.",
        metaDescription:
          "Free EPS (Employee Pension Scheme) calculator. Estimate your monthly pension amount based on service years and salary.",
      },
    ],
  },
  {
    slug: "gst",
    title: "GST Calculators",
    shortLabel: "GST",
    description:
      "Calculate GST amount, reverse GST, generate invoices, and look up HSN codes.",
    metaDescription:
      "Free GST calculators. Calculate GST amount, reverse GST from total price, generate GST invoices, and search HSN codes instantly.",
    keywords: ["GST calculator", "reverse GST calculator", "GST invoice", "HSN code lookup"],
    icon: "Receipt",
    tools: [
      {
        slug: "reverse-gst",
        title: "Reverse GST Calculator",
        description: "Calculate the base price by removing GST from a total.",
        metaDescription:
          "Free reverse GST calculator. Extract the original price and GST amount from a GST-inclusive total instantly.",
      },
      {
        slug: "gst-invoice",
        title: "GST Invoice Calculator",
        description: "Generate a GST-compliant invoice breakdown.",
        metaDescription:
          "Free GST invoice calculator. Generate a clear invoice breakdown with taxable value, CGST, SGST, and total amount.",
      },
      {
        slug: "hsn-code",
        title: "HSN Code Finder",
        description: "Look up HSN codes and applicable GST rates.",
        metaDescription:
          "Free HSN code finder. Search HSN codes for goods and services along with their applicable GST rate.",
      },
    ],
  },
  {
    slug: "hra",
    title: "HRA Calculators",
    shortLabel: "HRA",
    description:
      "Calculate HRA tax exemption, generate rent receipts, and check tax benefits.",
    metaDescription:
      "Free HRA calculators. Calculate your HRA tax exemption, generate rent receipts, and understand HRA tax benefits instantly.",
    keywords: ["HRA calculator", "HRA exemption calculator", "rent receipt generator", "HRA tax benefit"],
    icon: "Home",
    tools: [
      {
        slug: "hra-exemption",
        title: "HRA Exemption Calculator",
        description: "Calculate your HRA tax exemption amount instantly.",
        metaDescription:
          "Free HRA exemption calculator. Calculate your tax-exempt HRA amount based on salary, rent paid, and city of residence.",
      },
      {
        slug: "rent-receipt",
        title: "Rent Receipt Generator",
        description: "Generate a rent receipt for HRA tax claims.",
        metaDescription:
          "Free rent receipt generator for HRA claims. Create a printable rent receipt with landlord and tenant details instantly.",
      },
      {
        slug: "hra-tax-benefit",
        title: "HRA Tax Benefit Calculator",
        description: "See how much tax you save through HRA exemption.",
        metaDescription:
          "Calculate your HRA tax benefit for free. See the exact tax saving you get by claiming HRA exemption.",
      },
    ],
  },
  {
    slug: "income-tax",
    title: "Income Tax Calculators",
    shortLabel: "Income Tax",
    description:
      "Compare old vs new tax regime, calculate TDS, advance tax, and check your tax slab.",
    metaDescription:
      "Free income tax calculators. Compare old vs new tax regime, calculate TDS, advance tax liability, and find your applicable tax slab.",
    keywords: ["income tax calculator", "old vs new regime", "TDS calculator", "advance tax calculator", "tax slab"],
    icon: "FileText",
    tools: [
      {
        slug: "old-vs-new-regime",
        title: "Old vs New Tax Regime Calculator",
        description: "Compare your tax liability under both regimes.",
        metaDescription:
          "Free old vs new tax regime calculator. Compare your income tax liability under both regimes and pick the one that saves more.",
      },
      {
        slug: "tds-calculator",
        title: "TDS Calculator",
        description: "Calculate TDS deduction on your income.",
        metaDescription:
          "Free TDS calculator. Calculate the tax deducted at source on salary, interest, or other income instantly.",
      },
      {
        slug: "advance-tax",
        title: "Advance Tax Calculator",
        description: "Calculate your quarterly advance tax liability.",
        metaDescription:
          "Free advance tax calculator. Estimate your quarterly advance tax installments based on projected annual income.",
      },
      {
        slug: "tax-slab",
        title: "Tax Slab Calculator",
        description: "Check your applicable income tax slab and rate.",
        metaDescription:
          "Free tax slab calculator. Find your applicable income tax slab and rate under the current financial year rules.",
      },
    ],
  },
  {
    slug: "salary",
    title: "Salary Calculators",
    shortLabel: "Salary",
    description:
      "Convert CTC to in-hand salary, estimate salary hikes, and generate salary slips.",
    metaDescription:
      "Free salary calculators. Convert CTC to in-hand salary, calculate salary hike percentage, take-home pay, and generate salary slips.",
    keywords: ["CTC to in-hand calculator", "take home salary calculator", "salary hike calculator", "salary slip generator"],
    icon: "Wallet",
    tools: [
      {
        slug: "ctc-to-inhand",
        title: "CTC to In-Hand Salary Calculator",
        description: "Convert your CTC into monthly in-hand salary.",
        metaDescription:
          "Free CTC to in-hand salary calculator. Convert your annual CTC into monthly take-home pay after deductions.",
      },
      {
        slug: "salary-hike-calculator",
        title: "Salary Hike Calculator",
        description: "Calculate your new salary after a percentage hike.",
        metaDescription:
          "Free salary hike calculator. Calculate your new salary and hike amount based on percentage increase.",
      },
      {
        slug: "take-home-salary",
        title: "Take Home Salary Calculator",
        description: "Calculate your exact in-hand monthly salary.",
        metaDescription:
          "Free take-home salary calculator. Calculate your exact in-hand monthly salary after tax and deductions.",
      },
      {
        slug: "salary-slip",
        title: "Salary Slip Generator",
        description: "Generate a detailed monthly salary slip.",
        metaDescription:
          "Free salary slip generator. Create a detailed monthly salary slip with earnings, deductions, and net pay breakdown.",
      },
    ],
  },
  {
    slug: "gratuity",
    title: "Gratuity Calculators",
    shortLabel: "Gratuity",
    description:
      "Check gratuity eligibility, calculate tax on gratuity, and understand the gratuity formula.",
    metaDescription:
      "Free gratuity calculators. Check your gratuity eligibility, calculate tax-exempt gratuity amount, and understand the gratuity formula.",
    keywords: ["gratuity calculator", "gratuity eligibility", "gratuity tax calculator", "gratuity formula"],
    icon: "Award",
    tools: [
      {
        slug: "gratuity-eligibility",
        title: "Gratuity Eligibility Calculator",
        description: "Check if you're eligible to receive gratuity.",
        metaDescription:
          "Free gratuity eligibility calculator. Check if you qualify for gratuity based on your years of service.",
      },
      {
        slug: "gratuity-tax-calculator",
        title: "Gratuity Tax Calculator",
        description: "Calculate the tax-exempt portion of your gratuity.",
        metaDescription:
          "Free gratuity tax calculator. Calculate how much of your gratuity amount is tax-exempt under current rules.",
      },
      {
        slug: "gratuity-formula",
        title: "Gratuity Amount Calculator",
        description: "Calculate your total gratuity amount using the standard formula.",
        metaDescription:
          "Free gratuity amount calculator. Calculate your total gratuity payout using the standard last-drawn-salary formula.",
      },
    ],
  },
  {
    slug: "compound-interest",
    title: "Compound Interest Calculators",
    shortLabel: "Compound Interest",
    description:
      "Calculate compound interest, simple interest, CAGR, and inflation-adjusted value.",
    metaDescription:
      "Free compound interest calculators. Calculate compound interest, simple interest, CAGR, and inflation-adjusted future value instantly.",
    keywords: ["compound interest calculator", "simple interest calculator", "CAGR calculator", "inflation calculator"],
    icon: "Percent",
    tools: [
      {
        slug: "simple-interest",
        title: "Simple Interest Calculator",
        description: "Calculate simple interest on your principal amount.",
        metaDescription:
          "Free simple interest calculator. Calculate interest earned or payable on a principal amount over time instantly.",
      },
      {
        slug: "cagr",
        title: "CAGR Calculator",
        description: "Calculate the compound annual growth rate of an investment.",
        metaDescription:
          "Free CAGR calculator. Calculate the compound annual growth rate of your investment between two time periods.",
      },
      {
        slug: "inflation",
        title: "Inflation Calculator",
        description: "Calculate the inflation-adjusted value of money over time.",
        metaDescription:
          "Free inflation calculator. Calculate the real, inflation-adjusted value of money across any time period.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return financeCategories.find((c) => c.slug === slug);
}

export function getToolBySlug(categorySlug: string, toolSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  return category?.tools.find((t) => t.slug === toolSlug);
}