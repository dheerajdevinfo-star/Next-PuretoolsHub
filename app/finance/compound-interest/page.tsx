import Link from "next/link"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import CICalculator from "@/components/ui/CICalculator"
import { ciConfig } from "@/lib/ciData"
import { generateCiSchema } from "@/lib/generateSchema"

const config = ciConfig["compound-interest"]

export const metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  keywords: config.keywords,
  alternates: {
    canonical: "https://puretoolshub.com/finance/compound-interest",
  },
}

const ciCards = [
  { slug: "simple-interest", emoji: "📊", key: "simple-interest" as const },
  { slug: "cagr",            emoji: "📈", key: "cagr"            as const },
  { slug: "inflation",       emoji: "💸", key: "inflation"       as const },
]

export default function CIIndexPage() {
  const faqData = config.faqs.map(f => ({ question: f.q, answer: f.a }))
  const relatedToolsData = config.relatedTools.map(t => ({
    title: t.label,
    description: t.description,
    link: t.href,
  }))

  const schemas = generateCiSchema(config, "https://puretoolshub.com/finance/compound-interest")

  return (
    <>
      <Breadcrumb />

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="heding_section">
        <div className="max-width">
          <h1 className="heading">{config.title}</h1>
          <p className="pairagraph">{config.description}</p>
        </div>
      </section>

      <section>
        <div className="max-width">
          <CICalculator ciType="compound-interest" />
        </div>
      </section>

      <section>
        <div className="max-width">
          <h2 className="subtitle">Related calculators</h2>
          <div className="emi_index_grid">
            {ciCards.map(({ slug, emoji, key }) => {
              const c = ciConfig[key]
              return (
                <Link href={`/finance/compound-interest/${slug}`} key={slug} className="emi_index_card">
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

      {/* 👇 Dynamic content blocks — driven entirely by ciConfig */}
      <section className="calculator_content">
        <div className="max-width">
          {config.content.map((section, i) => (
            <div key={i} className="content_block">
              <h2>{section.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.body }} />
            </div>
          ))}
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
          <h2 className="subtitle">Aur calculators</h2>
          <RelatedTools tools={relatedToolsData} />
        </div>
      </section>
    </>
  )
}
