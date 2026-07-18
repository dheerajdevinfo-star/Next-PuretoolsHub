import IncomeTaxCalculator from "@/components/ui/IncomeTaxCalculator"
import { taxConfig, slugToTaxType, validTaxSlugs } from "@/lib/incomeTaxData"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import { generateTaxSchema } from "@/lib/generateSchema"

type Props = { params: Promise<{ taxType: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { taxType } = await params
  const key = slugToTaxType[taxType]
  const config = key ? taxConfig[key] : undefined
  if (!config) return {}

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    keywords: config.keywords,
    alternates: {
      canonical: `https://puretoolshub.com/finance/income-tax/${taxType}`,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: `https://puretoolshub.com/finance/income-tax/${taxType}`,
    },
  }
}

export function generateStaticParams() {
  return validTaxSlugs.map((slug) => ({ taxType: slug }))
}

export default async function TaxPage({ params }: Props) {
  const { taxType } = await params
  if (!validTaxSlugs.includes(taxType)) notFound()

  const key = slugToTaxType[taxType]
  const config = taxConfig[key]

  const faqData = config.faqs.map((f) => ({ question: f.q, answer: f.a }))
  const relatedToolsData = config.relatedTools.map((t) => ({
    title: t.label,
    description: t.description,
    link: t.href,
  }))

  const schemas = generateTaxSchema(
    config,
    `https://puretoolshub.com/finance/income-tax/${taxType}`
  )

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
          <IncomeTaxCalculator taxType={key} />
        </div>
      </section>

      {/* 👇 Dynamic content blocks — driven entirely by taxConfig */}
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
          <h2 className="subtitle">Related calculators</h2>
          <RelatedTools tools={relatedToolsData} />
        </div>
      </section>
    </>
  )
}