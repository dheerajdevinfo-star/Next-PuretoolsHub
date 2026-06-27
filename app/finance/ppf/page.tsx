import Link from "next/link"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import PPFCalculator from "@/components/ui/PPFCalculator"
import { ppfConfig } from "@/lib/ppfData"

const config = ppfConfig["ppf"]

export const metadata = {
  title: config.title,
  description: config.description,
  keywords: config.keywords,
}

const ppfCards = [
  { slug: "ppf-withdrawal",          emoji: "💸", key: "ppf-withdrawal"          as const },
  { slug: "ppf-interest-calculator", emoji: "📈", key: "ppf-interest-calculator" as const },
  { slug: "ppf-vs-fd",               emoji: "⚖️", key: "ppf-vs-fd"               as const },
  { slug: "ppf-extension",           emoji: "🔄", key: "ppf-extension"           as const },
]

export default function PPFIndexPage() {
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
          <PPFCalculator ppfType="ppf" />
        </div>
      </section>

      <section>
        <div className="max-width">
          <h2 className="subtitle">Aur PPF tools</h2>
          <div className="emi_index_grid">
            {ppfCards.map(({ slug, emoji, key }) => {
              const c = ppfConfig[key]
              return (
                <Link href={`/finance/ppf/${slug}`} key={slug} className="emi_index_card">
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