import Link from "next/link"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import FDCalculator from "@/components/ui/FDCalculator"
import { fdConfig } from "@/lib/fdData"

const config = fdConfig["fd"]

export const metadata = {
  title: config.title,
  description: config.description,
  keywords: config.keywords,
}

const fdCards = [
  { slug: "tax-saver-fd",      emoji: "🧾", key: "tax-saver-fd"      as const },
  { slug: "senior-citizen-fd", emoji: "👴", key: "senior-citizen-fd" as const },
  { slug: "recurring-deposit", emoji: "📅", key: "recurring-deposit" as const },
]

export default function FDIndexPage() {
  const faqData = config.faqs.map(f => ({ question: f.q, answer: f.a }))
  const relatedToolsData = config.relatedTools.map(t => ({
    title: t.label,
    description: t.label,
    link: t.href,
  }))

  return (
    <>
      <Breadcrumb />

      <section className="heding_section">
        <div className="max-width">
          <h1 className="heading">{config.title}</h1>
          <p className="pairagraph">{config.description}</p>
        </div>
      </section>

      <section>
        <div className="max-width">
          <FDCalculator fdType="fd" />
        </div>
      </section>

      <section>
        <div className="max-width">
          <h2 className="subtitle">Aur FD calculators</h2>
          <div className="emi_index_grid">
            {fdCards.map(({ slug, emoji, key }) => {
              const c = fdConfig[key]
              return (
                <Link href={`/finance/fd/${slug}`} key={slug} className="emi_index_card">
                  <span className="emi_index_emoji">{emoji}</span>
                  <h2 className="emi_index_title">{c.title}</h2>
                  <p className="emi_index_desc">{c.description}</p>
                  <span className="emi_index_cta">Calculate karein →</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="calculator_faq">
        <div className="max-width">
          <h2 className="hpme_faq_h2">Aksar puchhe jaane wale sawaal</h2>
          <Faq
            title={config.title}
            description={config.description}
            faqs={faqData}
          />
        </div>
      </section>

      <section className="related_tools">
        <div className="max-width">
          <h2 className="subtitle">Related calculators</h2>
          <RelatedTools tools={relatedToolsData} />
        </div>
      </section>
    </>
  )
}