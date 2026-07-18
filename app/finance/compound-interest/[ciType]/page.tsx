import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"
import CICalculator from "@/components/ui/CICalculator"
import { ciConfig, slugToCiType, validCiSlugs } from "@/lib/ciData"
import { generateCiSchema } from "@/lib/generateSchema"

// Folder is [ciType], so the params object key must be "ciType"
type Params = { ciType: string }

// Pre-build every valid sub-page (simple-interest, cagr, inflation)
// "compound-interest" is excluded since it has its own dedicated index page.
export function generateStaticParams() {
  return validCiSlugs
    .filter((slug) => slug !== "compound-interest")
    .map((slug) => ({ ciType: slug }))
}

function resolveConfig(slug: string) {
  const ciType = slugToCiType[slug]
  if (!ciType) return null
  return { ciType, config: ciConfig[ciType] }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { ciType: slug } = await params
  const resolved = resolveConfig(slug)
  if (!resolved) return {}

  const { config } = resolved

  return {
    title: config.metaTitle,
    description: config.metaDescription,
    keywords: config.keywords,
    alternates: {
      canonical: `https://puretoolshub.com/finance/compound-interest/${slug}`,
    },
  }
}

export default async function CISubPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { ciType: slug } = await params
  const resolved = resolveConfig(slug)

  if (!resolved) {
    notFound()
  }

  const { ciType, config } = resolved

  const faqData = config.faqs.map((f) => ({ question: f.q, answer: f.a }))
  const relatedToolsData = config.relatedTools.map((t) => ({
    title: t.label,
    description: t.description,
    link: t.href,
  }))

  const schemas = generateCiSchema(
    config,
    `https://puretoolshub.com/finance/compound-interest/${slug}`
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
          <CICalculator ciType={ciType} />
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
          <h2 className="hpme_faq_h2">FAQ's</h2>
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