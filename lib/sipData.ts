export type SipType = "sip" | "lumpsum" | "step-up" | "swp"

export const sipConfig = {

  // /finance/sip → main page
  sip: {
    sipTypeKey:      "sip" as SipType,
    title:           "SIP Calculator",
    description:     "SIP ke zariye apni monthly investment ka future value, total returns aur wealth gain instantly calculate karein — bilkul free.",
    keywords:        ["SIP calculator", "SIP calculator India", "mutual fund SIP calculator", "monthly SIP calculator", "SIP return calculator 2025"],
    defaultAmount:   5000,
    minAmount:       500,
    maxAmount:       1000000,
    step:            500,
    defaultRate:     12,
    minRate:         1,
    maxRate:         30,
    defaultTenure:   10,
    minTenure:       1,
    maxTenure:       40,
    amountLabel:     "Monthly investment",
    amountHints:     ["₹500", "₹10 lakh"],
    faqs: [
      { q: "SIP kya hota hai?",                    a: "SIP (Systematic Investment Plan) mein aap har mahine ek fixed amount mutual fund mein invest karte hain. Rupee cost averaging aur compounding se long term mein achha return milta hai." },
      { q: "SIP mein kitna return milta hai?",     a: "Historical data ke anusaar equity mutual funds mein SIP par 10–15% annual return milta hai. Calculator mein apna expected rate daalkar estimate dekh sakte hain." },
      { q: "SIP band kar sakte hain beech mein?",  a: "Haan, aap kabhi bhi SIP pause ya stop kar sakte hain. Invested amount locked nahi hota (ELSS ko chhodkar)." },
      { q: "Minimum SIP kitni hoti hai?",          a: "Zyaadatar mutual funds mein ₹500 per month se SIP shuru kar sakte hain." },
    ],
    relatedTools: [
      { label: "Lumpsum Calculator", href: "/finance/sip/lumpsum"  },
      { label: "Step-up SIP",        href: "/finance/sip/step-up"  },
      { label: "SWP Calculator",     href: "/finance/sip/swp"      },
    ],
  },

  // /finance/sip/lumpsum
  lumpsum: {
    sipTypeKey:      "lumpsum" as SipType,
    title:           "Lumpsum Calculator",
    description:     "Ek baar ki investment ka future value aur total returns instantly calculate karein.",
    keywords:        ["lumpsum calculator", "lumpsum investment calculator India", "one time investment calculator", "mutual fund lumpsum calculator"],
    defaultAmount:   100000,
    minAmount:       1000,
    maxAmount:       10000000,
    step:            1000,
    defaultRate:     12,
    minRate:         1,
    maxRate:         30,
    defaultTenure:   10,
    minTenure:       1,
    maxTenure:       40,
    amountLabel:     "Lumpsum amount",
    amountHints:     ["₹1K", "₹1 crore"],
    faqs: [
      { q: "Lumpsum aur SIP mein kya fark hai?",       a: "SIP mein aap monthly invest karte hain jabki lumpsum mein ek hi baar poori raqam invest hoti hai. Market sahi time pe ho to lumpsum zyada return deta hai." },
      { q: "Lumpsum investment ke liye sahi time kab?", a: "Market correction ya bear phase mein lumpsum invest karna faydемand hota hai kyunki units saste milte hain." },
      { q: "Lumpsum pe tax kaise lagta hai?",           a: "1 saal se zyada hold karne pe 10% LTCG tax lagta hai (₹1 lakh se upar ke gains pe). 1 saal se kam pe 15% STCG lagta hai." },
      { q: "Minimum lumpsum kitni hoti hai?",           a: "Zyaadatar funds mein ₹1,000 se lumpsum invest kar sakte hain." },
    ],
    relatedTools: [
      { label: "SIP Calculator",  href: "/finance/sip"          },
      { label: "Step-up SIP",     href: "/finance/sip/step-up"  },
      { label: "SWP Calculator",  href: "/finance/sip/swp"      },
    ],
  },

  // /finance/sip/step-up
  "step-up": {
    sipTypeKey:      "step-up" as SipType,
    title:           "Step-up SIP Calculator",
    description:     "Har saal SIP amount badhane par kitna zyada wealth banega — step-up SIP calculator se instantly dekhein.",
    keywords:        ["step up SIP calculator", "step up SIP calculator India", "increasing SIP calculator", "top up SIP calculator"],
    defaultAmount:   5000,
    minAmount:       500,
    maxAmount:       1000000,
    step:            500,
    defaultRate:     12,
    minRate:         1,
    maxRate:         30,
    defaultTenure:   10,
    minTenure:       1,
    maxTenure:       40,
    defaultStepUp:   10,   // % increase per year
    minStepUp:       1,
    maxStepUp:       50,
    amountLabel:     "Monthly SIP amount",
    amountHints:     ["₹500", "₹10 lakh"],
    faqs: [
      { q: "Step-up SIP kya hota hai?",              a: "Step-up SIP mein aap har saal apni SIP amount ek fixed percentage se badhate hain. Salary badhne ke saath investment bhi badhti hai jisse compounding ka fayda aur zyada milta hai." },
      { q: "Step-up SIP normal SIP se kitna better?", a: "10% annual step-up ke saath 20 saal mein normal SIP se 40–50% zyada corpus ban sakta hai." },
      { q: "Step-up SIP kaise set karein?",          a: "Zyaadatar AMCs aur apps (Groww, Zerodha Coin, Kuvera) mein step-up SIP directly set kar sakte hain." },
      { q: "Kitna step-up rakhna chahiye?",          a: "Generally 10% annual step-up ideal hota hai — salary hike ke saath align rehta hai." },
    ],
    relatedTools: [
      { label: "SIP Calculator",     href: "/finance/sip"          },
      { label: "Lumpsum Calculator", href: "/finance/sip/lumpsum"  },
      { label: "SWP Calculator",     href: "/finance/sip/swp"      },
    ],
  },

  // /finance/sip/swp
  swp: {
    sipTypeKey:      "swp" as SipType,
    title:           "SWP Calculator",
    description:     "Retirement ya regular income ke liye mutual fund se monthly withdrawal plan calculate karein.",
    keywords:        ["SWP calculator", "SWP calculator India", "systematic withdrawal plan calculator", "mutual fund withdrawal calculator"],
    defaultAmount:   1000000,  // corpus
    minAmount:       10000,
    maxAmount:       100000000,
    step:            10000,
    defaultRate:     12,
    minRate:         1,
    maxRate:         30,
    defaultTenure:   20,
    minTenure:       1,
    maxTenure:       40,
    defaultWithdrawal: 10000,  // monthly withdrawal
    amountLabel:     "Total corpus",
    amountHints:     ["₹10K", "₹10 crore"],
    faqs: [
      { q: "SWP kya hota hai?",               a: "SWP (Systematic Withdrawal Plan) mein aap apne mutual fund corpus se har mahine ek fixed amount withdraw karte hain — retirement income ki tarah." },
      { q: "SWP aur dividend mein kya fark?", a: "Dividend fund ke performance par depend karta hai. SWP mein aap khud amount aur frequency decide karte hain — zyada control rehta hai." },
      { q: "SWP pe tax lagta hai?",           a: "Har withdrawal pe capital gains tax lagta hai. 1 saal se zyada hold pe LTCG (10%), kam pe STCG (15%) lagta hai." },
      { q: "SWP ke liye minimum corpus?",     a: "Kam se kam ₹10–15 lakh corpus hona chahiye taaki withdrawal ke baad bhi fund grow karta rahe." },
    ],
    relatedTools: [
      { label: "SIP Calculator",     href: "/finance/sip"          },
      { label: "Lumpsum Calculator", href: "/finance/sip/lumpsum"  },
      { label: "Step-up SIP",        href: "/finance/sip/step-up"  },
    ],
  },
}

export const slugToSipType: Record<string, SipType> = {
  "lumpsum":  "lumpsum",
  "step-up":  "step-up",
  "swp":      "swp",
}

export const validSipSlugs = Object.keys(slugToSipType)