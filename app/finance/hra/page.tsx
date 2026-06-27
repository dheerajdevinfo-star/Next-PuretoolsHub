import Link from "next/link"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import HRACalculator from "@/components/ui/HRACalculator"
import { hraConfig } from "@/lib/hraData"

const config = hraConfig["hra"]

export const metadata = {
  title: config.title,
  description: config.description,
  keywords: config.keywords,
}

const hraCards = [
  { slug: "hra-exemption",   emoji: "🧾", key: "hra-exemption"   as const },
  { slug: "rent-receipt",    emoji: "🏠", key: "rent-receipt"    as const },
  { slug: "hra-tax-benefit", emoji: "💰", key: "hra-tax-benefit" as const },
]

export default function HRAIndexPage() {
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
          <HRACalculator hraType="hra" />
        </div>
      </section>

      <section>
        <div className="max-width">
          <h2 className="subtitle">Aur HRA tools</h2>
          <div className="emi_index_grid">
            {hraCards.map(({ slug, emoji, key }) => {
              const c = hraConfig[key]
              return (
                <Link href={`/finance/hra/${slug}`} key={slug} className="emi_index_card">
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