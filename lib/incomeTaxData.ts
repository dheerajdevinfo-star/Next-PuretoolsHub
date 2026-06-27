export type TaxType = 
  | "income-tax" 
  | "old-vs-new-regime" 
  | "tds-calculator" 
  | "advance-tax" 
  | "tax-slab"

export const taxConfig = {

  "income-tax": {
    taxTypeKey:   "income-tax" as TaxType,
    title:        "Income Tax Calculator 2025-26",
    description:  "FY 2025-26 ke liye income tax instantly calculate karein — old aur new regime dono mein, deductions ke saath.",
    keywords:     ["income tax calculator", "income tax calculator India 2025", "income tax calculator FY 2025-26", "salary tax calculator India", "income tax online calculator"],
    faqs: [
      { q: "Income tax calculator kaise use karein?",     a: "Annual income, deductions (80C, HRA, etc.) aur regime choose karein — tax liability, effective rate aur monthly TDS automatically calculate ho jaata hai." },
      { q: "New tax regime mein kaun si deductions?",     a: "New regime mein standard deduction ₹75,000 milti hai (FY 2025-26). 80C, HRA, 80D jaisi deductions available nahi hain." },
      { q: "FY 2025-26 mein tax-free income limit?",      a: "New regime mein ₹12 lakh tak zero tax (rebate u/s 87A ke saath). Old regime mein ₹5 lakh tak zero tax." },
      { q: "Surcharge kab lagti hai?",                    a: "₹50 lakh se zyada income par surcharge lagti hai — 10% (₹50L-1Cr), 15% (₹1Cr-2Cr), 25% (₹2Cr-5Cr), 37% (₹5Cr+). New regime mein max 25% hai." },
    ],
    relatedTools: [
      { label: "Old vs New Regime",  href: "/finance/income-tax/old-vs-new-regime" },
      { label: "TDS Calculator",     href: "/finance/income-tax/tds-calculator"    },
      { label: "Advance Tax",        href: "/finance/income-tax/advance-tax"       },
      { label: "Tax Slab 2025-26",   href: "/finance/income-tax/tax-slab"          },
    ],
  },

  "old-vs-new-regime": {
    taxTypeKey:   "old-vs-new-regime" as TaxType,
    title:        "Old vs New Tax Regime Calculator 2025-26",
    description:  "Old aur new tax regime mein kaunsa better hai — apni salary aur deductions ke hisaab se exact tax difference instantly jaanein.",
    keywords:     ["old vs new tax regime calculator", "old vs new regime calculator 2025", "which tax regime is better", "old regime vs new regime India", "tax regime comparison calculator"],
    faqs: [
      { q: "Old ya new regime — kaunsa choose karein?",   a: "Agar aapki deductions (80C + HRA + 80D etc.) ₹3.75 lakh se zyada hain to old regime better hai. Kam deductions mein new regime faydемand hai." },
      { q: "Regime change kar sakte hain?",               a: "Salaried employees har saal regime change kar sakte hain. Business income wale ek baar new regime choose karne ke baad easily wapas nahi aa sakte." },
      { q: "New regime mein kya milta hai?",              a: "New regime mein lower tax rates hain aur ₹75,000 standard deduction milti hai. ₹12 lakh tak zero tax (87A rebate ke saath)." },
      { q: "Default regime kaunsi hai?",                  a: "FY 2024-25 se new tax regime default hai. Agar aap old regime choose karna chahte hain to explicitly opt-in karna hoga employer ko batake." },
    ],
    relatedTools: [
      { label: "Income Tax Calculator", href: "/finance/income-tax"                    },
      { label: "TDS Calculator",        href: "/finance/income-tax/tds-calculator"     },
      { label: "Tax Slab 2025-26",      href: "/finance/income-tax/tax-slab"           },
    ],
  },

  "tds-calculator": {
    taxTypeKey:   "tds-calculator" as TaxType,
    title:        "TDS Calculator 2025-26",
    description:  "Salary, FD interest, rent ya professional fees par TDS instantly calculate karein — section wise aur slab wise.",
    keywords:     ["TDS calculator", "TDS calculator India 2025", "TDS on salary calculator", "TDS on FD calculator", "TDS deduction calculator"],
    faqs: [
      { q: "TDS kya hota hai?",                          a: "TDS (Tax Deducted at Source) mein income milne se pehle hi tax kat jaata hai. Employer, bank ya payer responsible hota hai TDS katne ke liye." },
      { q: "TDS aur income tax mein fark?",              a: "TDS advance tax collection hai — income tax return file karte waqt TDS credit milta hai. Zyada TDS kata to refund, kam kata to additional tax bharna padta hai." },
      { q: "TDS kaise bachayein?",                       a: "Form 15G/15H submit karke (agar income taxable nahi), investment proofs employer ko deke, ya correct regime choose karke TDS kam kar sakte hain." },
      { q: "TDS certificate kab milta hai?",             a: "Employer April ke baad Form 16 deta hai. Banks TDS certificate (Form 16A) quarterly dete hain. TRACES portal se bhi download kar sakte hain." },
    ],
    relatedTools: [
      { label: "Income Tax Calculator", href: "/finance/income-tax"                    },
      { label: "Old vs New Regime",     href: "/finance/income-tax/old-vs-new-regime"  },
      { label: "Advance Tax",           href: "/finance/income-tax/advance-tax"        },
    ],
  },

  "advance-tax": {
    taxTypeKey:   "advance-tax" as TaxType,
    title:        "Advance Tax Calculator 2025-26",
    description:  "Freelancers, business owners aur investors ke liye advance tax installments instantly calculate karein — due dates ke saath.",
    keywords:     ["advance tax calculator", "advance tax calculator India 2025", "advance tax installment calculator", "advance tax due date 2025", "self assessment tax calculator"],
    faqs: [
      { q: "Advance tax kise bharna padta hai?",         a: "Agar annual tax liability ₹10,000 se zyada hai to advance tax bharna mandatory hai. Salary walo ka TDS katta hai to unhe advance tax kam bharna padta hai." },
      { q: "Advance tax due dates kya hain?",            a: "15 June — 15%, 15 September — 45%, 15 December — 75%, 15 March — 100% tax bharna hota hai. Salaried ke liye sirf 15 March relevant hai." },
      { q: "Advance tax na bharein to kya hoga?",        a: "Section 234B aur 234C ke under 1% per month interest lagta hai. Ye interest non-refundable hai isliye time par tax bharein." },
      { q: "Advance tax online kaise bharein?",          a: "Income Tax e-filing portal (incometax.gov.in) par Challan 280 se advance tax pay kar sakte hain — net banking ya debit card se." },
    ],
    relatedTools: [
      { label: "Income Tax Calculator", href: "/finance/income-tax"                   },
      { label: "TDS Calculator",        href: "/finance/income-tax/tds-calculator"    },
      { label: "Old vs New Regime",     href: "/finance/income-tax/old-vs-new-regime" },
    ],
  },

  "tax-slab": {
    taxTypeKey:   "tax-slab" as TaxType,
    title:        "Income Tax Slab 2025-26",
    description:  "FY 2025-26 ke liye income tax slabs — old aur new regime dono ke rates, surcharge aur cess ke saath dekhein.",
    keywords:     ["income tax slab 2025-26", "income tax slab India 2025", "new tax regime slab 2025", "old tax regime slab 2025", "tax slab rate FY 2025-26"],
    faqs: [
      { q: "New regime mein tax slab kya hai FY 2025-26?", a: "₹0-4L — 0%, ₹4-8L — 5%, ₹8-12L — 10%, ₹12-16L — 15%, ₹16-20L — 20%, ₹20-24L — 25%, ₹24L+ — 30%. ₹12L tak 87A rebate se zero tax." },
      { q: "Old regime mein tax slab kya hai?",             a: "₹0-2.5L — 0%, ₹2.5-5L — 5%, ₹5-10L — 20%, ₹10L+ — 30%. Senior citizens ke liye basic exemption ₹3L hai." },
      { q: "4% health & education cess kya hai?",           a: "Tax amount par 4% cess add hota hai — ye central aur state dono ke liye hota hai. Surcharge ke baad cess calculate hoti hai." },
      { q: "Senior citizen ke liye alag slab?",             a: "Old regime mein 60-80 umar ke liye ₹3L basic exemption, 80+ ke liye ₹5L. New regime mein sab ke liye same slab hai." },
    ],
    relatedTools: [
      { label: "Income Tax Calculator", href: "/finance/income-tax"                   },
      { label: "Old vs New Regime",     href: "/finance/income-tax/old-vs-new-regime" },
      { label: "TDS Calculator",        href: "/finance/income-tax/tds-calculator"    },
    ],
  },
}

export const slugToTaxType: Record<string, TaxType> = {
  "old-vs-new-regime": "old-vs-new-regime",
  "tds-calculator":    "tds-calculator",
  "advance-tax":       "advance-tax",
  "tax-slab":          "tax-slab",
}

export const validTaxSlugs = Object.keys(slugToTaxType)