export type NavItem = {
  label: string
  href:  string
  children?: { label: string; href: string; badge?: string }[]
}

export const navLinks: NavItem[] = [
  {
    label: "Finance",
    href:  "/calculators",
    children: [
      { label: "Home Loan EMI",     href: "/calculators/emi/home-loan",       badge: "🔥" },
      { label: "Car Loan EMI",      href: "/calculators/emi/car-loan"         },
      { label: "Personal Loan EMI", href: "/calculators/emi/personal-loan"    },
      { label: "SIP Calculator",    href: "/calculators/sip",                 badge: "🔥" },
      { label: "FD Calculator",     href: "/calculators/fd"                   },
      { label: "PPF Calculator",    href: "/calculators/ppf"                  },
      { label: "NPS Calculator",    href: "/calculators/nps"                  },
      { label: "Gratuity",          href: "/calculators/gratuity"             },
    ],
  },
  {
    label: "Tax",
    href:  "/calculators/tax",
    children: [
      { label: "Income Tax",    href: "/calculators/tax/income-tax", badge: "🔥" },
      { label: "HRA Exemption", href: "/calculators/tax/hra"         },
    ],
  },
  {
    label: "About",
    href:  "/about",
  },
]