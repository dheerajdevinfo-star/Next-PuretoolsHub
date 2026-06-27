export type SalaryType =
  | "salary"
  | "ctc-to-inhand"
  | "salary-hike-calculator"
  | "take-home-salary"
  | "salary-slip"

export const salaryConfig = {

  "salary": {
    salaryTypeKey:  "salary" as SalaryType,
    title:          "Salary Calculator 2025 — CTC to In-hand",
    description:    "CTC se monthly in-hand salary instantly calculate karein — PF, gratuity, income tax, HRA aur sabhi deductions ke saath.",
    keywords:       ["salary calculator", "salary calculator India 2025", "CTC to in-hand salary calculator", "take home salary calculator", "salary breakup calculator India"],
    defaultCTC:     1200000,
    minCTC:         100000,
    maxCTC:         20000000,
    faqs: [
      { q: "CTC aur in-hand salary mein kya fark?",     a: "CTC (Cost to Company) mein employer ke sare kharch shamil hain — basic, HRA, PF, gratuity, allowances sab. In-hand sirf woh amount hai jo aapke bank mein aata hai tax aur PF katne ke baad." },
      { q: "In-hand salary kaise calculate karein?",     a: "In-hand = Basic + HRA + Allowances - Employee PF (12% of basic) - Income Tax (TDS) - Professional Tax. Calculator automatically ye sab calculate karta hai." },
      { q: "CTC ka kitna percent in-hand milta hai?",   a: "Generally CTC ka 70-80% in-hand milta hai. Zyada CTC hone par tax zyada lagta hai to percentage thoda kam ho sakta hai." },
      { q: "PF deduction mandatory hai?",               a: "₹15,000 tak basic salary par 12% PF mandatory hai. Upar ke liye employee opt-out kar sakta hai. Employer bhi 12% contribute karta hai jo CTC mein count hota hai." },
    ],
    relatedTools: [
      { label: "CTC to In-hand",      href: "/finance/salary/ctc-to-inhand"          },
      { label: "Salary Hike",         href: "/finance/salary/salary-hike-calculator" },
      { label: "Take Home Salary",    href: "/finance/salary/take-home-salary"       },
      { label: "Salary Slip",         href: "/finance/salary/salary-slip"            },
    ],
  },

  "ctc-to-inhand": {
    salaryTypeKey:  "ctc-to-inhand" as SalaryType,
    title:          "CTC to In-hand Salary Calculator 2025",
    description:    "Annual CTC se exact monthly in-hand salary calculate karein — PF, gratuity, tax aur sabhi deductions clearly dekhein.",
    keywords:       ["CTC to in-hand calculator", "CTC to in-hand salary calculator India", "CTC breakdown calculator", "annual CTC to monthly salary", "CTC calculator 2025"],
    defaultCTC:     1200000,
    minCTC:         100000,
    maxCTC:         20000000,
    faqs: [
      { q: "₹10 LPA CTC mein kitna in-hand milega?",   a: "₹10 LPA CTC par generally ₹65,000-72,000 monthly in-hand milta hai — exact amount tax regime, PF aur allowance structure par depend karta hai." },
      { q: "₹15 LPA mein kitna in-hand?",              a: "₹15 LPA par approximately ₹95,000-1,05,000 monthly in-hand milta hai new tax regime mein. Old regime mein deductions se thoda zyada ho sakta hai." },
      { q: "Gratuity CTC mein kaise count hoti?",      a: "Employer gratuity CTC mein include karta hai (basic × 4.81%) lekin ye amount 5 saal baad milti hai — har mahine nahi. Isliye actual in-hand mein ye nahi aata." },
      { q: "Variable pay CTC mein hota hai?",          a: "Haan, zyaadatar companies variable pay (bonus, incentive) CTC mein include karti hain. Ye performance par milta hai — guaranteed nahi hota." },
    ],
    relatedTools: [
      { label: "Salary Calculator",   href: "/finance/salary"                        },
      { label: "Take Home Salary",    href: "/finance/salary/take-home-salary"       },
      { label: "Income Tax",          href: "/finance/income-tax"                    },
    ],
  },

  "salary-hike-calculator": {
    salaryTypeKey:  "salary-hike-calculator" as SalaryType,
    title:          "Salary Hike Calculator 2025",
    description:    "Appraisal mein kitna hike mila — new salary, hike percentage aur monthly in-hand difference instantly calculate karein.",
    keywords:       ["salary hike calculator", "salary hike calculator India", "appraisal calculator", "salary increment calculator", "percentage hike calculator 2025"],
    defaultCTC:     1200000,
    minCTC:         100000,
    maxCTC:         20000000,
    faqs: [
      { q: "Average salary hike India mein kitna?",     a: "2025 mein India mein average salary hike 9-10% expected hai. IT sector mein 8-12%, BFSI mein 10-12%, startup mein variable hai." },
      { q: "Hike negotiate kaise karein?",              a: "Market rate research karein (Glassdoor, LinkedIn), apni achievements list karein, aur competing offer ho to leverage karein. 20-30% hike negotiate karna possible hai." },
      { q: "Percentage hike kaise calculate karein?",   a: "Hike % = ((New CTC - Old CTC) / Old CTC) × 100. ₹10L se ₹12L hone par hike = ((12-10)/10) × 100 = 20%." },
      { q: "In-hand mein kitna fark aayega?",           a: "Calculator mein old aur new CTC daalein — exact monthly in-hand difference dikha dega. Tax slab change hone par percentage se kam in-hand increase ho sakta hai." },
    ],
    relatedTools: [
      { label: "Salary Calculator",   href: "/finance/salary"                  },
      { label: "CTC to In-hand",      href: "/finance/salary/ctc-to-inhand"    },
      { label: "Income Tax",          href: "/finance/income-tax"              },
    ],
  },

  "take-home-salary": {
    salaryTypeKey:  "take-home-salary" as SalaryType,
    title:          "Take Home Salary Calculator 2025",
    description:    "Monthly take home salary calculate karein — gross salary se PF, TDS, professional tax aur sabhi deductions hatane ke baad.",
    keywords:       ["take home salary calculator", "take home salary calculator India", "net salary calculator", "monthly take home salary calculator", "salary after tax India 2025"],
    defaultCTC:     1200000,
    minCTC:         100000,
    maxCTC:         20000000,
    faqs: [
      { q: "Take home aur in-hand salary same hoti?",   a: "Haan, dono same hain — woh amount jo aapke bank account mein credit hota hai har mahine, saari deductions ke baad." },
      { q: "Professional tax kya hota hai?",            a: "Professional tax state government lagati hai — zyaadatar states mein ₹200/month (₹2,400/year) maximum hota hai. Kuch states mein bilkul nahi lagta." },
      { q: "Take home salary badhane ke tarike?",       a: "New tax regime choose karein, PF opt-out karein (high salary par), NPS contribution karein (additional ₹50K deduction old regime mein), HRA maximize karein." },
      { q: "Gross salary aur CTC mein fark?",           a: "CTC mein employer PF + gratuity + perks bhi shamil hote hain. Gross salary = CTC - employer PF - gratuity = total before-tax income jo salary slip mein hoti hai." },
    ],
    relatedTools: [
      { label: "CTC to In-hand",      href: "/finance/salary/ctc-to-inhand"          },
      { label: "Salary Hike",         href: "/finance/salary/salary-hike-calculator" },
      { label: "HRA Calculator",      href: "/finance/hra"                           },
    ],
  },

  "salary-slip": {
    salaryTypeKey:  "salary-slip" as SalaryType,
    title:          "Salary Slip Calculator & Generator",
    description:    "Professional salary slip instantly generate karein — earnings, deductions aur net pay clearly formatted, download ready.",
    keywords:       ["salary slip calculator", "salary slip generator India", "salary slip format", "payslip calculator India", "salary slip download 2025"],
    defaultCTC:     1200000,
    minCTC:         100000,
    maxCTC:         20000000,
    faqs: [
      { q: "Salary slip mein kya hona chahiye?",        a: "Employee details, company name, month/year, earnings (basic, HRA, allowances), deductions (PF, TDS, PT), gross salary, net salary — ye sab mandatory hain." },
      { q: "Salary slip kyun zaroori hai?",             a: "Loan application, visa, rent agreement, job change — sab jagah salary slip maangi jaati hai. 3-6 months ki salary slips usually chahiye hoti hain." },
      { q: "Digital salary slip valid hai?",            a: "Haan, digitally signed ya company portal se downloaded salary slip valid hoti hai. PDF format widely accepted hai." },
      { q: "Salary slip na mile to kya karein?",        a: "HR department se email par request karein. Agar company nahi deti to Labour Department mein complain kar sakte hain — ye legal right hai." },
    ],
    relatedTools: [
      { label: "Salary Calculator",   href: "/finance/salary"                        },
      { label: "CTC to In-hand",      href: "/finance/salary/ctc-to-inhand"          },
      { label: "HRA Calculator",      href: "/finance/hra"                           },
    ],
  },
}

export const slugToSalaryType: Record<string, SalaryType> = {
  "ctc-to-inhand":          "ctc-to-inhand",
  "salary-hike-calculator": "salary-hike-calculator",
  "take-home-salary":       "take-home-salary",
  "salary-slip":            "salary-slip",
}

export const validSalarySlugs = Object.keys(slugToSalaryType)