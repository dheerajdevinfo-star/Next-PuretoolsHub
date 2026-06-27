import Link from "next/link"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import IncomeTaxCalculator from "@/components/ui/IncomeTaxCalculator"
import { taxConfig } from "@/lib/incomeTaxData"

const config = taxConfig["income-tax"]

export const metadata = {
  title: config.title,
  description: config.description,
  keywords: config.keywords,
}

const taxCards = [
  { slug: "old-vs-new-regime", emoji: "⚖️", key: "old-vs-new-regime" as const },
  { slug: "tds-calculator",    emoji: "🧾", key: "tds-calculator"    as const },
  { slug: "advance-tax",       emoji: "📅", key: "advance-tax"       as const },
  { slug: "tax-slab",          emoji: "📊", key: "tax-slab"          as const },
]

export default function IncomeTaxIndexPage() {
  const faqData = config.faqs.map(f => ({ question: f.q, answer: f.a }))
  const relatedToolsData = config.relatedTools.map(t => ({
    title: t.label, description: t.label, link: t.href,
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
          <IncomeTaxCalculator taxType="income-tax" />
        </div>
      </section>

      <section>
        <div className="max-width">
          <h2 className="subtitle">Aur tax calculators</h2>
          <div className="emi_index_grid">
            {taxCards.map(({ slug, emoji, key }) => {
              const c = taxConfig[key]
              return (
                <Link href={`/finance/income-tax/${slug}`} key={slug} className="emi_index_card">
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
          <Faq title={config.title} description={config.description} faqs={faqData} />
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