export type GratuityType = 
  | "gratuity"
  | "gratuity-eligibility"
  | "gratuity-tax-calculator"
  | "gratuity-formula"

export const gratuityConfig = {

  "gratuity": {
    gratuityTypeKey:  "gratuity" as GratuityType,
    title:            "Gratuity Calculator 2025",
    description:      "Last drawn salary aur service years ke basis pe gratuity amount instantly calculate karein — government aur private sector dono ke liye.",
    keywords:         ["gratuity calculator", "gratuity calculator India", "gratuity calculation formula", "gratuity calculator 2025", "gratuity amount calculator"],
    defaultSalary:    50000,
    defaultYears:     10,
    defaultMonths:    0,
    faqs: [
      { q: "Gratuity kya hoti hai?",                  a: "Gratuity employer dwara employee ko long service ke liye di jaane wali ek-time payment hai. Payment of Gratuity Act 1972 ke under 5+ saal service ke baad milti hai." },
      { q: "Gratuity formula kya hai?",               a: "Gratuity = (Last drawn salary × 15 × Years of service) ÷ 26. Yahan salary mein basic + DA shamil hai aur 26 working days per month maane jaate hain." },
      { q: "Gratuity kitne saal mein milti hai?",     a: "Minimum 5 saal continuous service ke baad gratuity milne ka haq banta hai. 5 saal se kam service par gratuity nahi milti (death/disability ko chhodkar)." },
      { q: "Maximum gratuity kitni hoti hai?",        a: "Government employees ke liye ₹20 lakh maximum gratuity hai. Private sector ke liye bhi ₹20 lakh tax-free limit hai — upar income tax lagta hai." },
    ],
    relatedTools: [
      { label: "Gratuity Eligibility",    href: "/finance/gratuity/gratuity-eligibility"    },
      { label: "Gratuity Tax",            href: "/finance/gratuity/gratuity-tax-calculator"  },
      { label: "Gratuity Formula",        href: "/finance/gratuity/gratuity-formula"         },
    ],
  },

  "gratuity-eligibility": {
    gratuityTypeKey:  "gratuity-eligibility" as GratuityType,
    title:            "Gratuity Eligibility Calculator",
    description:      "Kya aap gratuity ke eligible hain — service years, employment type aur conditions check karein instantly.",
    keywords:         ["gratuity eligibility calculator", "gratuity eligibility India", "am I eligible for gratuity", "gratuity 5 year rule", "gratuity eligibility check 2025"],
    defaultSalary:    50000,
    defaultYears:     4,
    defaultMonths:    8,
    faqs: [
      { q: "4 saal 8 mahine mein gratuity milti hai?",   a: "Haan — Supreme Court ne maana hai ki 4 saal 240+ din (8+ mahine) service ko 5 saal maan sakte hain. Lekin ye company policy aur court interpretation par depend karta hai." },
      { q: "Contract employee ko gratuity milti?",        a: "Agar contract employee 5+ saal ek hi employer ke paas kaam kare to Payment of Gratuity Act ke under eligible ho sakta hai." },
      { q: "Resignation par gratuity milti hai?",         a: "Haan — 5+ saal service ke baad resignation par bhi gratuity milni chahiye. Sirf misconduct par termination mein employer deduct kar sakta hai." },
      { q: "Part-time employee gratuity ke eligible?",    a: "Part-time employees ke liye eligibility complex hai — agar regular payroll par hain to eligible ho sakte hain, lekin courts ka alag-alag interpretation hai." },
    ],
    relatedTools: [
      { label: "Gratuity Calculator",  href: "/finance/gratuity"                          },
      { label: "Gratuity Tax",         href: "/finance/gratuity/gratuity-tax-calculator"  },
      { label: "Gratuity Formula",     href: "/finance/gratuity/gratuity-formula"         },
    ],
  },

  "gratuity-tax-calculator": {
    gratuityTypeKey:  "gratuity-tax-calculator" as GratuityType,
    title:            "Gratuity Tax Calculator 2025",
    description:      "Gratuity par kitna income tax lagega — government vs private sector, tax-free limit aur exact taxable amount instantly calculate karein.",
    keywords:         ["gratuity tax calculator", "gratuity tax calculator India", "gratuity taxable amount calculator", "gratuity income tax 2025", "gratuity tax exemption calculator"],
    defaultSalary:    50000,
    defaultYears:     10,
    defaultMonths:    0,
    faqs: [
      { q: "Gratuity par tax lagta hai?",                a: "Government employees ki gratuity poori tax-free hoti hai. Private sector mein ₹20 lakh tak tax-free hai — upar taxable income mein add hota hai." },
      { q: "Private sector mein gratuity tax kaise?",    a: "Teen mein se minimum tax-free: (1) actual gratuity, (2) ₹20 lakh, (3) 15 × last salary × years ÷ 26. Baaki taxable." },
      { q: "Gratuity tax kab bharna padta hai?",         a: "Jis saal gratuity receive hui us saal ki ITR mein declare karna padta hai. Taxable portion aapki income mein add hota hai." },
      { q: "Gratuity tax bachane ka tarika?",            a: "Government job mein jaane par poori gratuity tax-free. Private sector mein ₹20 lakh se kam hone par koi tax nahi. NPS contribution se overall tax burden kam ho sakta hai." },
    ],
    relatedTools: [
      { label: "Gratuity Calculator",    href: "/finance/gratuity"                       },
      { label: "Gratuity Eligibility",   href: "/finance/gratuity/gratuity-eligibility"  },
      { label: "Income Tax Calculator",  href: "/finance/income-tax"                     },
    ],
  },

  "gratuity-formula": {
    gratuityTypeKey:  "gratuity-formula" as GratuityType,
    title:            "Gratuity Formula & Calculation Guide",
    description:      "Gratuity formula step-by-step samjhein — government, private covered aur non-covered employees ke liye alag-alag calculation instantly dekhein.",
    keywords:         ["gratuity formula", "gratuity formula India", "gratuity calculation formula", "how to calculate gratuity", "gratuity formula with example 2025"],
    defaultSalary:    50000,
    defaultYears:     10,
    defaultMonths:    0,
    faqs: [
      { q: "Government aur private gratuity formula alag?",  a: "Government employees: (Last salary × 15 × years) ÷ 26. Non-covered private: (Last salary × 15 × years) ÷ 30. Formula same hai, sirf divisor alag hai." },
      { q: "Gratuity mein salary ka matlab kya?",            a: "Gratuity calculation mein Basic + DA (Dearness Allowance) hi salary maani jaati hai. HRA, bonus, overtime — ye sab exclude hote hain." },
      { q: "Aadhe saal se zyada ho to kya?",                 a: "6 mahine ya usase zyada service ko pura saal maana jaata hai gratuity calculation mein. 4 saal 7 mahine = 5 saal, 6 saal 3 mahine = 6 saal." },
      { q: "Gratuity formula example kya hai?",              a: "₹50,000 basic salary, 10 saal service: Gratuity = (50,000 × 15 × 10) ÷ 26 = ₹2,88,462. Is amount par ₹20 lakh se kam hone ki wajah se koi tax nahi." },
    ],
    relatedTools: [
      { label: "Gratuity Calculator",   href: "/finance/gratuity"                          },
      { label: "Gratuity Eligibility",  href: "/finance/gratuity/gratuity-eligibility"     },
      { label: "Gratuity Tax",          href: "/finance/gratuity/gratuity-tax-calculator"  },
    ],
  },
}

export const slugToGratuityType: Record<string, GratuityType> = {
  "gratuity-eligibility":    "gratuity-eligibility",
  "gratuity-tax-calculator": "gratuity-tax-calculator",
  "gratuity-formula":        "gratuity-formula",
}

export const validGratuitySlugs = Object.keys(slugToGratuityType)