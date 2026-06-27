export type EpfType =
  | "epf"
  | "epf-withdrawal"
  | "epf-balance-check"
  | "epf-interest-calculator"
  | "eps-calculator"

export const epfConfig = {

  "epf": {
    epfTypeKey:     "epf" as EpfType,
    title:          "EPF Calculator 2025 — PF Balance & Returns",
    description:    "Employee Provident Fund ka maturity amount, total interest aur monthly contribution instantly calculate karein — retirement tak kitna corpus banega.",
    keywords:       ["EPF calculator", "EPF calculator India 2025", "PF calculator", "provident fund calculator", "EPF maturity calculator", "PF balance calculator"],
    defaultSalary:  50000,
    defaultAge:     25,
    defaultRetire:  58,
    defaultRate:    8.15,
    faqs: [
      { q: "EPF kya hota hai?",                      a: "EPF (Employee Provident Fund) ek mandatory retirement savings scheme hai jisme employee aur employer dono basic salary ka 12% contribute karte hain. EPFO (Employees' Provident Fund Organisation) isko manage karta hai." },
      { q: "EPF interest rate 2025 mein kitna?",     a: "FY 2024-25 ke liye EPF interest rate 8.15% hai. Ye EPFO board har saal decide karta hai — pichle kuch saalon mein 8.1%-8.65% ke beech raha hai." },
      { q: "EPF mein employer kitna contribute karta?", a: "Employer ka 12% contribution do hisson mein baanta hai — 8.33% EPS (Employee Pension Scheme) mein aur 3.67% EPF mein. Employee ka poora 12% EPF mein jaata hai." },
      { q: "EPF tax free hai?",                      a: "Haan — 5+ saal service ke baad EPF withdrawal poori tarah tax-free hai. Interest bhi tax-free hai. EEE (Exempt-Exempt-Exempt) category mein aata hai." },
    ],
    relatedTools: [
      { label: "EPF Withdrawal",        href: "/finance/epf/epf-withdrawal"          },
      { label: "EPF Balance Check",     href: "/finance/epf/epf-balance-check"       },
      { label: "EPF Interest",          href: "/finance/epf/epf-interest-calculator" },
      { label: "EPS Calculator",        href: "/finance/epf/eps-calculator"          },
    ],
  },

  "epf-withdrawal": {
    epfTypeKey:     "epf-withdrawal" as EpfType,
    title:          "EPF Withdrawal Calculator 2025",
    description:    "EPF withdrawal amount, tax liability aur eligibility instantly calculate karein — partial aur full withdrawal dono ke liye.",
    keywords:       ["EPF withdrawal calculator", "PF withdrawal calculator India", "EPF withdrawal rules 2025", "PF withdrawal tax calculator", "partial EPF withdrawal calculator"],
    defaultSalary:  50000,
    defaultAge:     35,
    defaultRetire:  58,
    defaultRate:    8.15,
    faqs: [
      { q: "EPF withdrawal ke liye eligible kab?",    a: "2 mahine se zyada unemployment par full withdrawal. Retirement (58 saal) par full withdrawal. Home loan, medical, education, marriage ke liye partial withdrawal rules alag hain." },
      { q: "EPF withdrawal par tax lagta hai?",       a: "5 saal se kam service par withdrawal taxable hai — TDS bhi katta hai. 5+ saal service par poori tarah tax-free hai. Form 15G submit karne par TDS nahi katega (agar taxable nahi)." },
      { q: "EPF withdrawal online kaise karein?",     a: "EPFO portal (epfindia.gov.in) ya UMANG app se online claim kar sakte hain. Aadhaar linked aur UAN activated hona chahiye. 7-10 working days mein settlement hota hai." },
      { q: "Partial withdrawal kitna mil sakta?",     a: "Home purchase: 36x monthly salary. Medical emergency: 6x monthly salary. Education/marriage: 50% of employee share. Har purpose ke liye service years ki condition alag hai." },
    ],
    relatedTools: [
      { label: "EPF Calculator",        href: "/finance/epf"                         },
      { label: "EPF Balance Check",     href: "/finance/epf/epf-balance-check"       },
      { label: "EPF Interest",          href: "/finance/epf/epf-interest-calculator" },
    ],
  },

  "epf-balance-check": {
    epfTypeKey:     "epf-balance-check" as EpfType,
    title:          "EPF Balance Check & Calculator 2025",
    description:    "Apna EPF balance estimate karein aur EPFO portal, UMANG app ya missed call se balance check karne ka tarika jaanein.",
    keywords:       ["EPF balance check", "PF balance check online", "EPF balance calculator", "how to check PF balance", "EPFO balance check 2025", "UAN balance check"],
    defaultSalary:  50000,
    defaultAge:     30,
    defaultRetire:  58,
    defaultRate:    8.15,
    faqs: [
      { q: "EPF balance kaise check karein?",         a: "4 tarike hain: (1) EPFO portal epfindia.gov.in, (2) UMANG app, (3) Missed call 011-22901406 par, (4) SMS — EPFOHO UAN ENG to 7738299899. UAN number zaroori hai." },
      { q: "UAN number kahan milega?",                a: "Salary slip par, employer se, ya EPFO portal par PF number se search karke. Ek baar UAN activate ho jaye to hamesha same rehta hai — naukri change karne par bhi." },
      { q: "Balance check mein employer contribution dikhai nahi?",  a: "Agar employer ne ECR file nahi ki to balance update nahi hoga. Complaint EPFO portal par ya EPFiGMS grievance portal par kar sakte hain." },
      { q: "Passbook kaise download karein?",         a: "EPFO member portal par login karke passbook download kar sakte hain. UAN aur password se login karein — last 6 months ki transactions dikhti hain." },
    ],
    relatedTools: [
      { label: "EPF Calculator",     href: "/finance/epf"                         },
      { label: "EPF Withdrawal",     href: "/finance/epf/epf-withdrawal"          },
      { label: "EPF Interest",       href: "/finance/epf/epf-interest-calculator" },
    ],
  },

  "epf-interest-calculator": {
    epfTypeKey:     "epf-interest-calculator" as EpfType,
    title:          "EPF Interest Calculator 2025 — 8.15% Rate",
    description:    "EPF par kitna interest milega — monthly compounding ke saath exact interest amount aur year-wise growth instantly calculate karein.",
    keywords:       ["EPF interest calculator", "PF interest calculator India", "EPF interest rate calculator 2025", "provident fund interest calculator", "EPF 8.15% calculator"],
    defaultSalary:  50000,
    defaultAge:     25,
    defaultRetire:  58,
    defaultRate:    8.15,
    faqs: [
      { q: "EPF interest kaise calculate hota hai?",  a: "EPF interest monthly running balance par calculate hota hai lekin credit saal ke end mein hota hai. Formula: Monthly rate = Annual rate / 12. Opening balance + contributions par interest milta hai." },
      { q: "EPF interest tax free hai?",              a: "Haan — EPF interest poori tarah tax free hai (upto contribution limit). Budget 2021 se ₹2.5 lakh se zyada annual contribution par interest taxable ho gaya hai." },
      { q: "EPF interest kab credit hota hai?",       a: "EPF interest March 31 ko financial year ke end mein credit hota hai. EPFO board rate declare karta hai — usually August-September mein announce hota hai." },
      { q: "Current EPF interest rate 2025?",         a: "FY 2024-25 ke liye EPF interest rate 8.15% hai. Ye FD (6-7%) se zyada hai aur poori tarah tax-free bhi hai — isliye EPF best debt investment maana jaata hai." },
    ],
    relatedTools: [
      { label: "EPF Calculator",    href: "/finance/epf"                   },
      { label: "EPF Withdrawal",    href: "/finance/epf/epf-withdrawal"    },
      { label: "FD Calculator",     href: "/finance/fd"                    },
    ],
  },

  "eps-calculator": {
    epfTypeKey:     "eps-calculator" as EpfType,
    title:          "EPS Calculator — Employee Pension Scheme 2025",
    description:    "Retirement par kitni monthly pension milegi — EPS (Employee Pension Scheme) pension amount instantly calculate karein service years ke hisaab se.",
    keywords:       ["EPS calculator", "employee pension scheme calculator", "EPS pension calculator India", "EPF pension calculator", "EPS 95 pension calculator 2025"],
    defaultSalary:  50000,
    defaultAge:     30,
    defaultRetire:  58,
    defaultRate:    8.15,
    faqs: [
      { q: "EPS kya hota hai?",                      a: "EPS (Employee Pension Scheme) EPFO ka pension scheme hai. Employer ke 12% contribution mein se 8.33% EPS mein jaata hai. 10+ saal service ke baad retirement par monthly pension milti hai." },
      { q: "EPS pension formula kya hai?",            a: "Monthly Pension = (Pensionable Salary × Pensionable Service) ÷ 70. Pensionable salary last 60 months ka average basic+DA (max ₹15,000) hota hai." },
      { q: "Minimum EPS pension kitni hai?",          a: "Minimum guaranteed pension ₹1,000 per month hai (Supreme Court order ke baad). Actual pension service years aur salary par depend karti hai." },
      { q: "EPS withdrawal possible hai?",            a: "10 saal se kam service par EPS withdrawal possible hai — 'scheme certificate' leke rakh sakte hain ya withdraw kar sakte hain. 10+ saal ke baad sirf pension milti hai, withdrawal nahi." },
    ],
    relatedTools: [
      { label: "EPF Calculator",    href: "/finance/epf"                         },
      { label: "EPF Withdrawal",    href: "/finance/epf/epf-withdrawal"          },
      { label: "Gratuity",          href: "/finance/gratuity"                    },
    ],
  },
}

export const slugToEpfType: Record<string, EpfType> = {
  "epf-withdrawal":          "epf-withdrawal",
  "epf-balance-check":       "epf-balance-check",
  "epf-interest-calculator": "epf-interest-calculator",
  "eps-calculator":          "eps-calculator",
}

export const validEpfSlugs = Object.keys(slugToEpfType)