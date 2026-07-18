import FDCalculator from "@/components/ui/FDCalculator"
import { fdConfig, slugToFdType, validFdSlugs } from "@/lib/fdData"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import { generateFdSchema } from "@/lib/generateSchema"

type Props = {
  params: Promise<{ fdType: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { fdType } = await params
  const key = slugToFdType[fdType]
  const config = key ? fdConfig[key] : undefined
  if (!config) return {}

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    keywords: config.keywords,
    alternates: {
      canonical: `https://puretoolshub.com/finance/fd/${fdType}`,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: `https://puretoolshub.com/finance/fd/${fdType}`,
    },
  }
}

export function generateStaticParams() {
  return validFdSlugs
    .filter((slug) => slug !== "fd")
    .map((slug) => ({ fdType: slug }))
}

export default async function FdPage({ params }: Props) {
  const { fdType } = await params
  if (!validFdSlugs.includes(fdType)) notFound()

  const key = slugToFdType[fdType]
  const config = fdConfig[key]

  const faqData = config.faqs.map((f) => ({ question: f.q, answer: f.a }))
  const relatedToolsData = config.relatedTools.map((t) => ({
    title: t.label,
    description: t.description,
    link: t.href,
  }))

  const schemas = generateFdSchema(
    config,
    `https://puretoolshub.com/finance/fd/${fdType}`
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
          <FDCalculator fdType={key} />
        </div>
      </section>

      {/* 👇 Dynamic content blocks — driven entirely by fdConfig */}
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