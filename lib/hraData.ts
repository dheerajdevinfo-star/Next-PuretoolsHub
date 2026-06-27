export type HraType = "hra" | "hra-exemption" | "rent-receipt" | "hra-tax-benefit"

export const hraConfig = {

  hra: {
    hraTypeKey:      "hra" as HraType,
    title:           "HRA Calculator",
    description:     "House Rent Allowance instantly calculate karein — kitna HRA tax-free hoga aur kitna taxable hoga, salary ke hisaab se jaanein.",
    keywords:        ["HRA calculator", "HRA calculator India", "house rent allowance calculator", "HRA exemption calculator", "HRA tax calculator 2025"],
    defaultBasic:    50000,
    defaultHra:      20000,
    defaultRent:     15000,
    defaultCity:     "metro",
    faqs: [
      { q: "HRA kya hota hai?",                    a: "HRA (House Rent Allowance) employer dwara diya jaane wala allowance hai jo employees ke rent ke liye hota hai. Iska kuch hissa Income Tax Act Section 10(13A) ke under tax-free hota hai." },
      { q: "HRA exemption kaise calculate hoti?",  a: "HRA exemption teen mein se minimum hota hai — (1) actual HRA received, (2) basic salary ka 50% metro/40% non-metro, (3) actual rent minus 10% of basic salary." },
      { q: "Metro cities kaun si hain HRA ke liye?", a: "Delhi, Mumbai, Chennai aur Kolkata — inhe metro cities maana jaata hai HRA calculation ke liye. Baaki sab non-metro hain jahan 40% basic salary limit lagti hai." },
      { q: "Ghar mein rehne par HRA milta hai?",   a: "Agar aap apne ghar mein rehte hain to HRA exemption nahi milti — poora HRA taxable ho jaata hai. Rent zaroori hai exemption ke liye." },
    ],
    relatedTools: [
      { label: "HRA Exemption",    href: "/finance/hra/hra-exemption"   },
      { label: "Rent Receipt",     href: "/finance/hra/rent-receipt"    },
      { label: "HRA Tax Benefit",  href: "/finance/hra/hra-tax-benefit" },
    ],
  },

  "hra-exemption": {
    hraTypeKey:      "hra-exemption" as HraType,
    title:           "HRA Exemption Calculator",
    description:     "Section 10(13A) ke under kitna HRA tax-free hoga — exact exemption amount aur taxable HRA instantly calculate karein.",
    keywords:        ["HRA exemption calculator", "HRA exemption calculator India", "section 10 13A calculator", "HRA tax exemption 2025", "HRA exempt amount calculator"],
    defaultBasic:    50000,
    defaultHra:      20000,
    defaultRent:     15000,
    defaultCity:     "metro",
    faqs: [
      { q: "HRA exemption ke liye kya conditions hain?", a: "Aapko rent actually pay karna chahiye, rent receipts honi chahiye, aur agar annual rent ₹1 lakh se zyada hai to landlord ka PAN zaroori hai." },
      { q: "Landlord PAN kab zaroori hai?",              a: "Agar annual rent ₹1,00,000 se zyada hai (yaani ₹8,334+ per month) to employer ko landlord ka PAN submit karna mandatory hai." },
      { q: "HRA exemption new tax regime mein milti?",   a: "Nahi — new tax regime (115BAC) mein HRA exemption available nahi hai. Sirf old tax regime mein Section 10(13A) benefit milta hai." },
      { q: "Self-employed ko HRA milta hai?",            a: "Nahi, HRA sirf salaried employees ke liye hai. Self-employed Section 80GG ke under rent deduction claim kar sakte hain." },
    ],
    relatedTools: [
      { label: "HRA Calculator",   href: "/finance/hra"                 },
      { label: "Rent Receipt",     href: "/finance/hra/rent-receipt"    },
      { label: "HRA Tax Benefit",  href: "/finance/hra/hra-tax-benefit" },
    ],
  },

  "rent-receipt": {
    hraTypeKey:      "rent-receipt" as HraType,
    title:           "Rent Receipt Generator",
    description:     "HRA claim ke liye printable rent receipt instantly banao — landlord details, stamp, aur correct format ke saath.",
    keywords:        ["rent receipt generator", "rent receipt format India", "rent receipt for HRA", "printable rent receipt India", "rent receipt download 2025"],
    defaultBasic:    50000,
    defaultHra:      20000,
    defaultRent:     15000,
    defaultCity:     "metro",
    faqs: [
      { q: "Rent receipt kyun zaroori hai?",         a: "HRA exemption claim karne ke liye employer ko rent receipts submit karni padti hain. Bina rent receipt ke HRA taxable ho jaata hai." },
      { q: "Rent receipt mein kya hona chahiye?",    a: "Tenant naam, landlord naam, property address, rent amount, rent period, payment mode, aur landlord signature/stamp zaroori hai." },
      { q: "Rent receipt par revenue stamp lagta?",  a: "₹5,000 se upar cash payment par ₹1 revenue stamp lagta hai. Online/cheque payment par stamp ki zaroorat nahi." },
      { q: "Fake rent receipt ka kya risk hai?",     a: "Fake rent receipt fraud maana jaata hai — Income Tax notice, penalty, aur prosecution ka risk hota hai. Sirf genuine receipts use karein." },
    ],
    relatedTools: [
      { label: "HRA Calculator",   href: "/finance/hra"                 },
      { label: "HRA Exemption",    href: "/finance/hra/hra-exemption"   },
      { label: "HRA Tax Benefit",  href: "/finance/hra/hra-tax-benefit" },
    ],
  },

  "hra-tax-benefit": {
    hraTypeKey:      "hra-tax-benefit" as HraType,
    title:           "HRA Tax Benefit Calculator",
    description:     "HRA se kitna income tax bachega — old vs new tax regime comparison ke saath exact tax saving instantly calculate karein.",
    keywords:        ["HRA tax benefit calculator", "HRA tax saving calculator India", "HRA income tax calculator", "old vs new regime HRA", "HRA deduction calculator 2025"],
    defaultBasic:    50000,
    defaultHra:      20000,
    defaultRent:     15000,
    defaultCity:     "metro",
    faqs: [
      { q: "HRA se kitna tax bachta hai?",           a: "Depends on tax slab — 30% slab mein ₹1 lakh HRA exemption se ₹31,200 (including cess) tax bachta hai. Calculator mein apni details daalkar exact amount jaanein." },
      { q: "Old vs new regime — kaunsa better?",     a: "Agar aapka HRA + other deductions zyada hain to old regime better hai. Agar deductions kam hain to new regime mein lower flat rates se faayda ho sakta hai." },
      { q: "HRA aur 80GG dono claim kar sakte?",     a: "Nahi — HRA (Section 10(13A)) aur 80GG mein se sirf ek claim kar sakte hain. Agar HRA salary mein hai to 80GG nahi milega." },
      { q: "FY 2025-26 mein HRA ke liye koi change?", a: "New tax regime mein HRA exempt nahi hai. Old regime mein Section 10(13A) calculation same hai — basic ka 50%/40%, actual HRA, rent minus 10% basic — minimum exemption hogi." },
    ],
    relatedTools: [
      { label: "HRA Calculator",  href: "/finance/hra"                },
      { label: "HRA Exemption",   href: "/finance/hra/hra-exemption"  },
      { label: "Rent Receipt",    href: "/finance/hra/rent-receipt"   },
    ],
  },
}

export const slugToHraType: Record<string, HraType> = {
  "hra-exemption":   "hra-exemption",
  "rent-receipt":    "rent-receipt",
  "hra-tax-benefit": "hra-tax-benefit",
}

export const validHraSlugs = Object.keys(slugToHraType)