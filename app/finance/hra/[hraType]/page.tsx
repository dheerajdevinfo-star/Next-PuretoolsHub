import HRACalculator from "@/components/ui/HRACalculator"
import { hraConfig, slugToHraType, validHraSlugs } from "@/lib/hraData"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import { generateHraSchema } from "@/lib/generateSchema"

type Props = { params: Promise<{ hraType: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hraType } = await params
  const key = slugToHraType[hraType]
  const config = key ? hraConfig[key] : undefined
  if (!config) return {}

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    keywords: config.keywords,
    alternates: {
      canonical: `https://puretoolshub.com/finance/hra/${hraType}`,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: `https://puretoolshub.com/finance/hra/${hraType}`,
    },
  }
}

export function generateStaticParams() {
  return validHraSlugs
    .filter((slug) => slug !== "hra")
    .map((slug) => ({ hraType: slug }))
}

export default async function HraPage({ params }: Props) {
  const { hraType } = await params
  if (!validHraSlugs.includes(hraType)) notFound()

  const key = slugToHraType[hraType]
  const config = hraConfig[key]

  const faqData = config.faqs.map((f) => ({ question: f.q, answer: f.a }))
  const relatedToolsData = config.relatedTools.map((t) => ({
    title: t.label,
    description: t.description,
    link: t.href,
  }))

  const schemas = generateHraSchema(
    config,
    `https://puretoolshub.com/finance/hra/${hraType}`
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
          <HRACalculator hraType={key} />
        </div>
      </section>

      {/* 👇 Dynamic content blocks — driven entirely by hraConfig */}
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