import Link from "next/link"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import GSTCalculator from "@/components/ui/GSTCalculator"
import { gstConfig } from "@/lib/gstData"

const config = gstConfig["gst"]

export const metadata = {
  title: config.title,
  description: config.description,
  keywords: config.keywords,
}

const gstCards = [
  { slug: "reverse-gst",  emoji: "🔄", key: "reverse-gst"  as const },
  { slug: "gst-invoice",  emoji: "🧾", key: "gst-invoice"  as const },
  { slug: "hsn-code",     emoji: "🔍", key: "hsn-code"     as const },
]

export default function GSTIndexPage() {
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
          <GSTCalculator gstType="gst" />
        </div>
      </section>

      <section>
        <div className="max-width">
          <h2 className="subtitle">Aur GST tools</h2>
          <div className="emi_index_grid">
            {gstCards.map(({ slug, emoji, key }) => {
              const c = gstConfig[key]
              return (
                <Link href={`/finance/gst/${slug}`} key={slug} className="emi_index_card">
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