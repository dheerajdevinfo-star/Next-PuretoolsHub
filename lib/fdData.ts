export type FdType = "fd" | "tax-saver-fd" | "senior-citizen-fd" | "recurring-deposit"

export const fdConfig = {

  // /finance/fd → main page
  fd: {
    fdTypeKey:        "fd" as FdType,
    title:            "FD Calculator",
    description:      "Fixed deposit ka maturity amount, total interest aur returns instantly calculate karein — sabhi banks ke liye free.",
    keywords:         ["FD calculator", "FD calculator India", "fixed deposit calculator", "FD maturity calculator", "FD interest calculator 2025", "SBI FD calculator", "HDFC FD calculator"],
    defaultAmount:    100000,
    minAmount:        1000,
    maxAmount:        10000000,
    step:             1000,
    defaultRate:      7.0,
    minRate:          2,
    maxRate:          15,
    defaultTenure:    2,
    minTenure:        1,
    maxTenure:        10,
    amountLabel:      "FD amount",
    amountHints:      ["₹1K", "₹1 crore"],
    compounding:      ["Monthly", "Quarterly", "Half-yearly", "Yearly"],
    banks: [
      { name: "SBI",   rate: 7.00 },
      { name: "HDFC",  rate: 7.25 },
      { name: "ICICI", rate: 7.20 },
      { name: "Axis",  rate: 7.10 },
    ],
    faqs: [
      { q: "FD calculator kaise use karein?",         a: "Amount, interest rate aur tenure slider se set karein — maturity amount aur total interest automatically calculate ho jaata hai." },
      { q: "FD par kitna return milta hai?",          a: "2025 mein top banks 7–8% annual return de rahi hain. Senior citizens ko 0.25–0.50% extra milta hai." },
      { q: "FD mein compounding ka kya fark padta?",  a: "Monthly compounding mein quarterly se thoda zyada return milta hai kyunki interest zyada baar reinvest hota hai." },
      { q: "FD tod sakte hain beech mein?",           a: "Haan, lekin premature withdrawal pe 0.5–1% penalty lagti hai aur actual rate se kam interest milta hai." },
    ],
    relatedTools: [
      { label: "Tax Saver FD",       href: "/finance/fd/tax-saver-fd"        },
      { label: "Senior Citizen FD",  href: "/finance/fd/senior-citizen-fd"   },
      { label: "Recurring Deposit",  href: "/finance/fd/recurring-deposit"   },
    ],
  },

  // /finance/fd/tax-saver-fd
  "tax-saver-fd": {
    fdTypeKey:        "tax-saver-fd" as FdType,
    title:            "Tax Saver FD Calculator",
    description:      "80C ke under ₹1.5 lakh tak tax bachao — tax saver FD ka maturity amount aur tax benefit instantly calculate karein.",
    keywords:         ["tax saver FD calculator", "80C FD calculator", "tax saving FD calculator India", "5 year FD calculator", "tax saver fixed deposit calculator"],
    defaultAmount:    150000,
    minAmount:        1000,
    maxAmount:        150000,  // 80C max limit
    step:             1000,
    defaultRate:      7.0,
    minRate:          2,
    maxRate:          15,
    defaultTenure:    5,       // fixed 5 year lock-in
    minTenure:        5,
    maxTenure:        5,
    amountLabel:      "Investment amount (max ₹1.5L)",
    amountHints:      ["₹1K", "₹1.5 lakh"],
    compounding:      ["Quarterly", "Yearly"],
    banks: [
      { name: "SBI",   rate: 6.50 },
      { name: "HDFC",  rate: 7.00 },
      { name: "ICICI", rate: 7.00 },
      { name: "Axis",  rate: 7.00 },
    ],
    faqs: [
      { q: "Tax saver FD kya hoti hai?",              a: "Tax saver FD ek 5-saal ki fixed deposit hoti hai jisme ₹1.5 lakh tak ki investment par Income Tax Act Section 80C ke under tax deduction milti hai." },
      { q: "Tax saver FD tod sakte hain?",            a: "Nahi — tax saver FD mein 5 saal ka mandatory lock-in hota hai. Premature withdrawal allowed nahi hai." },
      { q: "Kitna tax bachega?",                      a: "Aapke tax slab ke hisaab se — 30% slab mein ₹1.5 lakh invest karne par ₹46,800 tak tax bachta hai." },
      { q: "Tax saver FD pe TDS lagta hai?",          a: "Haan, interest income ₹40,000 (senior citizens ke liye ₹50,000) se zyada hone par 10% TDS katta hai." },
    ],
    relatedTools: [
      { label: "FD Calculator",      href: "/finance/fd"                     },
      { label: "Senior Citizen FD",  href: "/finance/fd/senior-citizen-fd"   },
      { label: "SIP Calculator",     href: "/finance/sip"                    },
    ],
  },

  // /finance/fd/senior-citizen-fd
  "senior-citizen-fd": {
    fdTypeKey:        "senior-citizen-fd" as FdType,
    title:            "Senior Citizen FD Calculator",
    description:      "60+ umar ke liye special FD rates — senior citizen FD ka maturity amount aur extra interest benefit calculate karein.",
    keywords:         ["senior citizen FD calculator", "senior citizen fixed deposit calculator India", "SBI senior citizen FD calculator", "senior citizen FD interest rate 2025"],
    defaultAmount:    500000,
    minAmount:        1000,
    maxAmount:        10000000,
    step:             1000,
    defaultRate:      7.5,   // 0.5% extra typically
    minRate:          2,
    maxRate:          15,
    defaultTenure:    3,
    minTenure:        1,
    maxTenure:        10,
    amountLabel:      "FD amount",
    amountHints:      ["₹1K", "₹1 crore"],
    compounding:      ["Monthly", "Quarterly", "Half-yearly", "Yearly"],
    banks: [
      { name: "SBI",   rate: 7.50 },
      { name: "HDFC",  rate: 7.75 },
      { name: "ICICI", rate: 7.70 },
      { name: "Axis",  rate: 7.60 },
    ],
    faqs: [
      { q: "Senior citizen ko FD pe kitna extra milta hai?",  a: "Zyaadatar banks senior citizens (60+ age) ko regular FD rate se 0.25–0.50% extra interest deti hain." },
      { q: "Senior citizen FD pe TDS?",                       a: "₹50,000 se zyada annual interest hone par TDS lagta hai. Form 15H submit karke TDS se bachaa ja sakta hai agar income taxable nahi hai." },
      { q: "Best senior citizen FD rate 2025 mein?",          a: "Small finance banks jaise Unity SFB, Jana SFB 8.5–9% tak de rahi hain. Lekin inme DICGC insurance limit ₹5 lakh tak hai." },
      { q: "Senior citizen FD joint account mein ho sakti?",  a: "Haan, lekin senior citizen rate sirf tab milega jab primary account holder 60+ saal ka ho." },
    ],
    relatedTools: [
      { label: "FD Calculator",     href: "/finance/fd"                   },
      { label: "Tax Saver FD",      href: "/finance/fd/tax-saver-fd"      },
      { label: "Recurring Deposit", href: "/finance/fd/recurring-deposit" },
    ],
  },

  // /finance/fd/recurring-deposit
  "recurring-deposit": {
    fdTypeKey:        "recurring-deposit" as FdType,
    title:            "RD Calculator — Recurring Deposit",
    description:      "Har mahine thodi thodi bachat karo — recurring deposit ka maturity amount aur total interest instantly calculate karein.",
    keywords:         ["RD calculator", "recurring deposit calculator", "RD calculator India", "monthly deposit calculator", "SBI RD calculator", "post office RD calculator 2025"],
    defaultAmount:    5000,   // monthly deposit
    minAmount:        100,
    maxAmount:        500000,
    step:             100,
    defaultRate:      6.5,
    minRate:          2,
    maxRate:          15,
    defaultTenure:    3,
    minTenure:        1,
    maxTenure:        10,
    amountLabel:      "Monthly deposit",
    amountHints:      ["₹100", "₹5 lakh"],
    compounding:      ["Quarterly"],  // RD always quarterly
    banks: [
      { name: "SBI",          rate: 6.50 },
      { name: "Post Office",  rate: 6.70 },
      { name: "HDFC",         rate: 7.00 },
      { name: "ICICI",        rate: 6.90 },
    ],
    faqs: [
      { q: "RD aur FD mein kya fark hai?",      a: "FD mein ek baar poori raqam lagti hai jabki RD mein har mahine ek fixed amount deposit hota hai. RD chhoti savings ke liye better hai." },
      { q: "RD miss karein to kya hoga?",        a: "Late payment par penalty lagti hai — generally ₹1.50 per ₹100 per month. Kaafi baar miss karne par RD close bhi ho sakti hai." },
      { q: "Post Office RD safe hai?",           a: "Haan, Post Office RD government backed hai isliye 100% safe hai — bank FD se bhi zyada secure." },
      { q: "RD pe loan milta hai?",              a: "Haan, RD amount ke 80–90% tak loan mil sakta hai. Interest rate generally RD rate se 1–2% zyada hota hai." },
    ],
    relatedTools: [
      { label: "FD Calculator",     href: "/finance/fd"                   },
      { label: "Tax Saver FD",      href: "/finance/fd/tax-saver-fd"      },
      { label: "Senior Citizen FD", href: "/finance/fd/senior-citizen-fd" },
    ],
  },
}

export const slugToFdType: Record<string, FdType> = {
  "tax-saver-fd":       "tax-saver-fd",
  "senior-citizen-fd":  "senior-citizen-fd",
  "recurring-deposit":  "recurring-deposit",
}

export const validFdSlugs = Object.keys(slugToFdType)