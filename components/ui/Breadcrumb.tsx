"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

// URL slug ko readable label mein convert karo
// "home-loan" → "Home Loan"
// "emi" → "EMI"  (special cases)
const specialLabels: Record<string, string> = {
    "emi": "EMI",
    "sip": "SIP",
    "fd": "FD",
    "ppf": "PPF",
    "nps": "NPS",
    "hra": "HRA",
    "home-loan": "Home Loan EMI Calculator",
    "car-loan": "Car Loan EMI Calculator",
    "personal-loan": "Personal Loan EMI Calculator",
    "income-tax": "Income Tax Calculator",
    "gratuity": "Gratuity Calculator",
    "finance": "Finance",
    "tax": "Tax",
    "health": "Health",
    "math": "Math",
    "calculators": "Calculators",
}

function slugToLabel(slug: string): string {
    // Pehle special cases check karo
    if (specialLabels[slug]) return specialLabels[slug]

    // Baaki ko capitalize karo — "home-loan" → "Home Loan"
    return slug
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}

export default function Breadcrumb() {
    const pathname = usePathname()

    // "/" ko split karo — empty strings hata do
    // "/finance/emi/home-loan" → ["finance", "emi", "home-loan"]
    const segments = pathname.split("/").filter(Boolean)

    // Har segment ke liye cumulative path banao
    // ["finance", "emi", "home-loan"]
    // → ["/finance", "/finance/emi", "/finance/emi/home-loan"]
    const crumbs = segments.map((segment, index) => ({
        label: slugToLabel(segment),
        href: "/" + segments.slice(0, index + 1).join("/"),
    }))

    return (
        <>
            {/* Schema markup — Google ke liye */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: "https://puretoolshub.com",
                            },
                            ...crumbs.map((crumb, index) => ({
                                "@type": "ListItem",
                                position: index + 2,
                                name: crumb.label,
                                item: `https://puretoolshub.com${crumb.href}`,
                            })),
                        ],
                    }),
                }}
            />
     
            <section className="breadcrumb_section">
                <div className="max-width">
                    <nav aria-label="Breadcrumb" className="breadcrumb_nav">
                        <ol className="breadcrumb_list">

                            {/* Home — hamesha pehla */}
                            <li className="breadcrumb_item">
                                <Link href="/" className="breadcrumb_link">
                                    <Home size={13} />
                                    <span>Home</span>
                                </Link>
                            </li>

                            {/* URL se generated items */}
                            {crumbs.map((crumb, index) => {
                                const isLast = index === crumbs.length - 1
                                return (
                                    <li key={crumb.href} className="breadcrumb_item">
                                        <ChevronRight size={13} className="breadcrumb_separator" />
                                        {isLast ? (
                                            <span className="breadcrumb_current">{crumb.label}</span>
                                        ) : (
                                            <Link href={crumb.href} className="breadcrumb_link">
                                                {crumb.label}
                                            </Link>
                                        )}
                                    </li>
                                )
                            })}

                        </ol>
                    </nav>
                </div>
            </section>
        </>
    )
}