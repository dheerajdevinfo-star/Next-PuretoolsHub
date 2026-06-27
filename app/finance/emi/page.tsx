import { emiConfig } from "@/lib/emiData"
import { generateEmiSchema } from "@/lib/generateSchema"
import EMICalculator from "@/components/ui/EMICalculator"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"

const config = emiConfig["emi"]  // ✅ bas yahi line


export const metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  keywords: config.keywords,
  alternates: {
    canonical: "https://puretoolshub.com/finance/emi",
  },
}

export default function EMIIndexPage() {
  const faqData = config.faqs.map(f => ({ question: f.q, answer: f.a }))
  const relatedToolsData = config.relatedTools.map(t => ({
    title: t.label,
    description: t.label,
    link: t.href,
  }))

  const schemas = generateEmiSchema(config, "https://puretoolshub.com/finance/emi")

  return (
    <>

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
          <EMICalculator loanType="emi" />  {/* ✅ generic calculator */}
        </div>
      </section>

      {/* 👇 NEW — content section, calculator ke baad, FAQ se pehle */}
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