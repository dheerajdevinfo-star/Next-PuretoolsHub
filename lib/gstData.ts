export type GstType = "gst" | "reverse-gst" | "gst-invoice" | "hsn-code"

export const gstConfig = {

  gst: {
    gstTypeKey:   "gst" as GstType,
    title:        "GST Calculator",
    description:  "Kisi bhi product ya service par GST amount aur total price instantly calculate karein — CGST, SGST aur IGST ke saath.",
    keywords:     ["GST calculator", "GST calculator India", "GST amount calculator", "CGST SGST calculator", "GST inclusive exclusive calculator 2025"],
    gstRates:     [0, 5, 12, 18, 28],
    defaultRate:  18,
    defaultAmount: 10000,
    minAmount:    1,
    maxAmount:    10000000,
    stepAmount:   100,
    faqs: [
      { q: "GST calculator kaise use karein?",      a: "Amount enter karein, GST rate select karein (5%, 12%, 18%, 28%) aur 'exclusive' ya 'inclusive' choose karein — CGST, SGST, IGST aur total amount automatically calculate ho jaata hai." },
      { q: "GST exclusive aur inclusive mein fark?", a: "Exclusive mein GST amount ke upar add hota hai. Inclusive mein GST already total amount mein shamil hota hai — reverse calculation hoti hai." },
      { q: "CGST aur SGST kya hota hai?",           a: "Intra-state (same state) transactions mein GST do hisson mein baanta hai — CGST (Central) aur SGST (State), dono aadha-aadha. Inter-state mein sirf IGST lagta hai." },
      { q: "Kaun se products par 0% GST hai?",      a: "Fresh vegetables, fruits, milk, eggs, bread, salt jaise essential items par 0% GST hai. Educational services aur healthcare bhi exempt hain." },
    ],
    relatedTools: [
      { label: "Reverse GST",    href: "/finance/gst/reverse-gst"   },
      { label: "GST Invoice",    href: "/finance/gst/gst-invoice"   },
      { label: "HSN Code",       href: "/finance/gst/hsn-code"      },
    ],
  },

  "reverse-gst": {
    gstTypeKey:   "reverse-gst" as GstType,
    title:        "Reverse GST Calculator",
    description:  "GST inclusive price se original base price aur GST amount alag-alag instantly calculate karein.",
    keywords:     ["reverse GST calculator", "reverse GST calculator India", "GST inclusive price calculator", "GST remove calculator", "extract GST from price calculator"],
    gstRates:     [5, 12, 18, 28],
    defaultRate:  18,
    defaultAmount: 11800,
    minAmount:    1,
    maxAmount:    10000000,
    stepAmount:   100,
    faqs: [
      { q: "Reverse GST calculator kya hota hai?",   a: "Jab aapke paas GST inclusive price ho aur aap original base price jaanna chahte ho, tab reverse GST calculator use hota hai. Formula: Base Price = Total Price / (1 + GST%/100)." },
      { q: "Reverse GST formula kya hai?",           a: "Base Price = Total Price ÷ (1 + GST rate/100). Phir GST = Total Price - Base Price. Agar 18% GST aur ₹11,800 total hai to base = ₹10,000 aur GST = ₹1,800." },
      { q: "Reverse GST kab use karte hain?",        a: "Jab bill mein already GST included ho aur aap GST alag karna chahte ho — jaise retail purchase, restaurant bill, ya MRP tag par." },
      { q: "Reverse IGST kaise calculate karein?",   a: "Same formula — Base = Total / (1 + IGST%/100). Inter-state purchase mein IGST alag nahi hota, directly reverse formula use karo." },
    ],
    relatedTools: [
      { label: "GST Calculator",  href: "/finance/gst"             },
      { label: "GST Invoice",     href: "/finance/gst/gst-invoice" },
      { label: "HSN Code",        href: "/finance/gst/hsn-code"    },
    ],
  },

  "gst-invoice": {
    gstTypeKey:   "gst-invoice" as GstType,
    title:        "GST Invoice Calculator",
    description:  "Multiple items ke saath GST invoice instantly banao — CGST, SGST, IGST aur total payable amount ke saath.",
    keywords:     ["GST invoice calculator", "GST invoice generator India", "GST bill calculator", "GST invoice format calculator", "online GST invoice maker 2025"],
    gstRates:     [0, 5, 12, 18, 28],
    defaultRate:  18,
    defaultAmount: 10000,
    minAmount:    1,
    maxAmount:    10000000,
    stepAmount:   100,
    faqs: [
      { q: "GST invoice mein kya hona chahiye?",     a: "GSTIN, invoice number, date, buyer-seller details, HSN code, taxable value, CGST/SGST/IGST amount aur total payable — ye sab mandatory hai." },
      { q: "GST invoice kab banana padta hai?",      a: "₹200 se upar ke har B2B transaction mein GST invoice mandatory hai. B2C mein ₹50,000 se upar hone par detailed invoice zaroori hai." },
      { q: "Inter-state mein IGST ya CGST+SGST?",   a: "Inter-state (alag state) transactions mein sirf IGST lagta hai. Intra-state (same state) mein CGST + SGST dono lagta hai aadha-aadha." },
      { q: "E-invoice kab mandatory hai?",           a: "₹5 crore+ annual turnover wale businesses ke liye e-invoicing mandatory hai. IRP portal par generate karna padta hai." },
    ],
    relatedTools: [
      { label: "GST Calculator",   href: "/finance/gst"              },
      { label: "Reverse GST",      href: "/finance/gst/reverse-gst"  },
      { label: "HSN Code",         href: "/finance/gst/hsn-code"     },
    ],
  },

  "hsn-code": {
    gstTypeKey:   "hsn-code" as GstType,
    title:        "HSN Code & GST Rate Finder",
    description:  "Product ka HSN code search karein aur uska GST rate instantly jaanein — traders, sellers aur business owners ke liye.",
    keywords:     ["HSN code finder", "HSN code GST rate", "HSN code search India", "HSN code list 2025", "SAC code GST calculator"],
    gstRates:     [0, 5, 12, 18, 28],
    defaultRate:  18,
    defaultAmount: 10000,
    minAmount:    1,
    maxAmount:    10000000,
    stepAmount:   100,
    faqs: [
      { q: "HSN code kya hota hai?",                 a: "HSN (Harmonized System of Nomenclature) ek international coding system hai jo har product ko ek unique number deta hai. GST mein HSN code se product ka tax rate decide hota hai." },
      { q: "HSN code kitne digits ka hota hai?",     a: "Turnover ke hisaab se — ₹5 crore tak 4 digit, ₹5–50 crore ke liye 6 digit, aur ₹50 crore+ ke liye 8 digit HSN code mandatory hai." },
      { q: "SAC code kya hota hai?",                 a: "SAC (Service Accounting Code) services ke liye hota hai jabki HSN goods ke liye. Dono ka purpose same hai — GST rate identify karna." },
      { q: "HSN code galat daalne par kya hoga?",    a: "Wrong HSN code se GST notice aa sakta hai. GSTR-1 mein correction possible hai lekin penalty ka risk hota hai." },
    ],
    relatedTools: [
      { label: "GST Calculator",  href: "/finance/gst"              },
      { label: "Reverse GST",     href: "/finance/gst/reverse-gst"  },
      { label: "GST Invoice",     href: "/finance/gst/gst-invoice"  },
    ],
  },
}

export const slugToGstType: Record<string, GstType> = {
  "reverse-gst":  "reverse-gst",
  "gst-invoice":  "gst-invoice",
  "hsn-code":     "hsn-code",
}

export const validGstSlugs = Object.keys(slugToGstType)