import GSTCalculator from "@/components/ui/GSTCalculator"
import { gstConfig, slugToGstType, validGstSlugs } from "@/lib/gstData"
import { notFound } from "next/navigation"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"

type Props = { params: Promise<{ gstType: string }> }

export async function generateMetadata({ params }: Props) {
  const { gstType } = await params
  const key = slugToGstType[gstType]
  const config = gstConfig[key]
  if (!config) return {}
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `https://puretoolhub.com/finance/gst/${gstType}`,
    },
  }
}

export function generateStaticParams() {
  return validGstSlugs.map(slug => ({ gstType: slug }))
}

export default async function GstPage({ params }: Props) {
  const { gstType } = await params
  if (!validGstSlugs.includes(gstType)) notFound()

  const key = slugToGstType[gstType]
  const config = gstConfig[key]

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
          <GSTCalculator gstType={key} />
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