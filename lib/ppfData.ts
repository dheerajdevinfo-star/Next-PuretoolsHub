export type PpfType =
  | "ppf"
  | "ppf-withdrawal"
  | "ppf-interest-calculator"
  | "ppf-vs-fd"
  | "ppf-extension"

export const ppfConfig = {

  "ppf": {
    ppfTypeKey:      "ppf" as PpfType,
    title:           "PPF Calculator 2025 — Public Provident Fund",
    description:     "PPF maturity amount, total interest aur year-wise growth instantly calculate karein — 15 saal mein kitna corpus banega.",
    keywords:        ["PPF calculator", "PPF calculator India 2025", "public provident fund calculator", "PPF maturity calculator", "PPF return calculator", "SBI PPF calculator"],
    defaultAmount:   10000,
    minAmount:       500,
    maxAmount:       150000,
    defaultRate:     7.1,
    defaultTenure:   15,
    faqs: [
      { q: "PPF kya hota hai?",                      a: "PPF (Public Provident Fund) ek government backed long-term savings scheme hai jisme minimum ₹500 aur maximum ₹1.5 lakh annual invest kar sakte hain. 15 saal ki lock-in period hai aur EEE tax benefit milta hai." },
      { q: "PPF interest rate 2025 mein kitna?",     a: "Current PPF interest rate 7.1% per annum hai (Q1 FY 2025-26). Ye quarterly government review karta hai. Interest annually compound hota hai aur March 31 ko credit hota hai." },
      { q: "PPF mein maximum kitna invest kar sakte?", a: "Ek financial year mein maximum ₹1.5 lakh invest kar sakte hain — ek hi account mein. Minor ke account mein bhi parent ka limit same ₹1.5 lakh hi hota hai combined." },
      { q: "PPF tax benefit kya hai?",               a: "PPF EEE category mein hai — investment 80C mein deductible, interest tax-free, maturity tax-free. 30% tax slab mein ₹1.5 lakh invest karne par ₹46,800 tax bachta hai." },
    ],
    relatedTools: [
      { label: "PPF Withdrawal",        href: "/finance/ppf/ppf-withdrawal"          },
      { label: "PPF Interest",          href: "/finance/ppf/ppf-interest-calculator" },
      { label: "PPF vs FD",             href: "/finance/ppf/ppf-vs-fd"               },
      { label: "PPF Extension",         href: "/finance/ppf/ppf-extension"           },
    ],
  },

  "ppf-withdrawal": {
    ppfTypeKey:      "ppf-withdrawal" as PpfType,
    title:           "PPF Withdrawal Calculator 2025",
    description:     "PPF partial withdrawal eligibility aur amount instantly calculate karein — 7th year ke baad kitna nikaal sakte hain.",
    keywords:        ["PPF withdrawal calculator", "PPF withdrawal rules 2025", "PPF partial withdrawal calculator", "PPF premature withdrawal", "PPF withdrawal amount calculator"],
    defaultAmount:   10000,
    minAmount:       500,
    maxAmount:       150000,
    defaultRate:     7.1,
    defaultTenure:   15,
    faqs: [
      { q: "PPF se paise kab nikaal sakte hain?",    a: "Partial withdrawal 7th year ke baad allowed hai. Maximum 4th ya 5th year ke end balance ka 50% (whichever is lower) nikaal sakte hain ek financial year mein." },
      { q: "PPF premature closure possible hai?",    a: "5 saal ke baad serious illness, higher education ya NRI status par premature closure allowed hai — lekin 1% interest penalty lagti hai." },
      { q: "PPF withdrawal tax free hai?",           a: "Haan — PPF withdrawal poori tarah tax free hai, chahe partial ho ya full maturity withdrawal. EEE status ki wajah se koi tax nahi lagta." },
      { q: "Loan against PPF milta hai?",            a: "3rd se 6th year ke beech PPF balance par loan le sakte hain — maximum 25% of balance. Interest rate PPF rate + 1% hota hai. 36 months mein repay karna hota hai." },
    ],
    relatedTools: [
      { label: "PPF Calculator",        href: "/finance/ppf"                         },
      { label: "PPF Interest",          href: "/finance/ppf/ppf-interest-calculator" },
      { label: "PPF Extension",         href: "/finance/ppf/ppf-extension"           },
    ],
  },

  "ppf-interest-calculator": {
    ppfTypeKey:      "ppf-interest-calculator" as PpfType,
    title:           "PPF Interest Calculator 2025 — 7.1% Rate",
    description:     "PPF par year-wise interest aur compounding ka exact calculation instantly dekhein — 15 saal mein interest kitna banega.",
    keywords:        ["PPF interest calculator", "PPF interest rate calculator 2025", "PPF 7.1% calculator", "public provident fund interest calculator", "PPF annual interest calculator"],
    defaultAmount:   10000,
    minAmount:       500,
    maxAmount:       150000,
    defaultRate:     7.1,
    defaultTenure:   15,
    faqs: [
      { q: "PPF interest kaise calculate hota hai?",  a: "PPF interest monthly basis par calculate hota hai (5th aur last day ke beech minimum balance par) lekin credit annually March 31 ko hota hai. Isliye 5 tarikh se pehle invest karna better hai." },
      { q: "PPF mein 5 tarikh ka kya importance?",   a: "PPF interest us month milta hai jab 5 tarikh ko balance PPF mein ho. Agar 6 tarikh ko invest kiya to us month ka interest nahi milega — monthly ek month ka loss hota hai." },
      { q: "PPF interest rate history kya hai?",      a: "PPF rate 2000 mein 11% tha jo gradually kam hua. 2020 mein 7.1% hua jo abhi bhi same hai. Government quarterly review karta hai par recent saalon mein change nahi hua." },
      { q: "PPF par effective return kitna?",         a: "7.1% tax-free return effectively 10%+ taxable return ke barabar hai 30% slab mein. FD se zyada effective return milta hai kyunki FD interest taxable hota hai." },
    ],
    relatedTools: [
      { label: "PPF Calculator",    href: "/finance/ppf"               },
      { label: "PPF vs FD",         href: "/finance/ppf/ppf-vs-fd"     },
      { label: "FD Calculator",     href: "/finance/fd"                },
    ],
  },

  "ppf-vs-fd": {
    ppfTypeKey:      "ppf-vs-fd" as PpfType,
    title:           "PPF vs FD Calculator 2025 — Kaunsa Better?",
    description:     "PPF aur FD mein exact returns compare karein — tax benefit ke baad kaun zyada deta hai, apni tax slab ke hisaab se instantly dekhein.",
    keywords:        ["PPF vs FD calculator", "PPF vs FD comparison 2025", "PPF or FD which is better", "PPF vs fixed deposit calculator", "PPF vs FD returns calculator India"],
    defaultAmount:   10000,
    minAmount:       500,
    maxAmount:       150000,
    defaultRate:     7.1,
    defaultTenure:   15,
    faqs: [
      { q: "PPF vs FD — kaunsa better hai?",         a: "Long term (15+ saal) ke liye PPF better hai — tax-free returns aur 80C benefit. Short term ke liye FD flexible hai. 30% slab mein PPF ka effective return FD se 2-3% zyada hota hai." },
      { q: "PPF aur FD dono mein invest karein?",    a: "Haan — ₹1.5 lakh PPF mein (80C aur tax-free growth) aur baaki FD ya mutual funds mein lagayein. Diversification best approach hai." },
      { q: "FD par kitna tax lagta hai?",            a: "FD interest aapki income mein add hota hai aur tax slab ke hisaab se tax lagta hai. 30% slab mein 7% FD ka effective return sirf 4.9% reh jaata hai." },
      { q: "PPF mein liquidity problem hai?",        a: "Haan — PPF 15 saal lock-in hai. Emergency mein sirf partial withdrawal (7th year ke baad) ya loan (3rd-6th year) mil sakta hai. FD zyada liquid hai." },
    ],
    relatedTools: [
      { label: "PPF Calculator",    href: "/finance/ppf"               },
      { label: "FD Calculator",     href: "/finance/fd"                },
      { label: "PPF Interest",      href: "/finance/ppf/ppf-interest-calculator" },
    ],
  },

  "ppf-extension": {
    ppfTypeKey:      "ppf-extension" as PpfType,
    title:           "PPF Extension Calculator — 15 Saal Baad",
    description:     "PPF maturity ke baad 5-5 saal extension mein kitna zyada milega — with contribution aur without contribution dono options calculate karein.",
    keywords:        ["PPF extension calculator", "PPF extension after 15 years", "PPF block extension calculator", "PPF maturity extension 2025", "PPF 5 year extension calculator"],
    defaultAmount:   10000,
    minAmount:       500,
    maxAmount:       150000,
    defaultRate:     7.1,
    defaultTenure:   15,
    faqs: [
      { q: "PPF 15 saal ke baad kya karein?",        a: "3 options hain: (1) Poora nikaal lein, (2) Without contribution extend karein — balance par interest milta rahega, (3) With contribution extend karein — 5 saal ke blocks mein ₹1.5L/year invest kar sakte hain." },
      { q: "Extension ke liye kab apply karein?",    a: "Maturity se 1 saal pehle Form H submit karna hota hai. Agar kuch nahi kiya to automatically without contribution mode mein extend ho jaata hai." },
      { q: "Extension mein withdrawal allowed?",     a: "With contribution extension mein: ek withdrawal per year allowed hai (previous year end balance ka max 60%). Without contribution: koi restriction nahi." },
      { q: "Kitne extensions le sakte hain?",        a: "Jitne chahein utne 5-5 saal ke blocks mein extend kar sakte hain — koi limit nahi. Har block mein with ya without contribution choose kar sakte hain." },
    ],
    relatedTools: [
      { label: "PPF Calculator",    href: "/finance/ppf"                         },
      { label: "PPF Withdrawal",    href: "/finance/ppf/ppf-withdrawal"          },
      { label: "PPF Interest",      href: "/finance/ppf/ppf-interest-calculator" },
    ],
  },
}

export const slugToPpfType: Record<string, PpfType> = {
  "ppf-withdrawal":          "ppf-withdrawal",
  "ppf-interest-calculator": "ppf-interest-calculator",
  "ppf-vs-fd":               "ppf-vs-fd",
  "ppf-extension":           "ppf-extension",
}

export const validPpfSlugs = Object.keys(slugToPpfType)