import Link from "next/link"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import SalaryCalculator from "@/components/ui/SalaryCalculator"
import { salaryConfig } from "@/lib/salaryData"

const config = salaryConfig["salary"]

export const metadata = {
  title: config.title,
  description: config.description,
  keywords: config.keywords,
}

const salaryCards = [
  { slug: "ctc-to-inhand",          emoji: "💰", key: "ctc-to-inhand"          as const },
  { slug: "salary-hike-calculator", emoji: "📈", key: "salary-hike-calculator" as const },
  { slug: "take-home-salary",       emoji: "🏠", key: "take-home-salary"       as const },
  { slug: "salary-slip",            emoji: "🧾", key: "salary-slip"            as const },
]

export default function SalaryIndexPage() {
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
          <SalaryCalculator salaryType="salary" />
        </div>
      </section>

      <section>
        <div className="max-width">
          <h2 className="subtitle">Aur salary tools</h2>
          <div className="emi_index_grid">
            {salaryCards.map(({ slug, emoji, key }) => {
              const c = salaryConfig[key]
              return (
                <Link href={`/finance/salary/${slug}`} key={slug} className="emi_index_card">
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