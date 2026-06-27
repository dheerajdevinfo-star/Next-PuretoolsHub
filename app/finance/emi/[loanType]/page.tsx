import EMICalculator from "@/components/ui/EMICalculator"
import { emiConfig, slugToLoanType, validEmiSlugs } from "@/lib/emiData"
import { generateEmiSchema } from "@/lib/generateSchema"
import { notFound } from "next/navigation"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Faq from "@/components/ui/Faq"
import RelatedTools from "@/components/ui/RelatedTools"

type Props = {
  params: Promise<{ loanType: string }>
}

export async function generateMetadata({ params }: Props) {
  const { loanType } = await params
  const key = slugToLoanType[loanType]
  const config = emiConfig[key]
  if (!config) return {}

  const url = `https://puretoolshub.com/finance/emi/${loanType}`

  return {
    title: config.metaTitle,                
    description: config.metaDescription,    
    keywords: config.keywords,
    alternates: {
      canonical: url,                         
    },
    openGraph: {
      title: config.metaTitle,              
      description: config.metaDescription,  
      url: url,                               
    },
  }
}

export function generateStaticParams() {
  return validEmiSlugs.map(slug => ({ loanType: slug }))
}

export default async function Page({ params }: Props) {
  const { loanType } = await params
  if (!validEmiSlugs.includes(loanType)) notFound()

  const key = slugToLoanType[loanType]
  const config = emiConfig[key]
  const url = `https://puretoolshub.com/finance/emi/${loanType}`


  const emiSchemas = generateEmiSchema(config, url)
  const allSchemas = [...emiSchemas]

  const faqData = config.faqs.map(faq => ({
    question: faq.q,
    answer: faq.a,
  }))

  const relatedToolsData = config.relatedTools.map(tool => ({
    title: tool.label,
    description: tool.description,
    link: tool.href,
  }))

  return (
    <>
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Breadcrumb />

      <section className="heding_section">
        <div className="max-width">
          <h1 className="heading">{config.title}</h1>
          <p className="pairagraph">{config.description}</p>
        </div>
      </section>

      <section>
        <div className="max-width">
          <EMICalculator loanType={key} />
        </div>
      </section>

      {/* 👇 FIXED — hardcoded text hata ke config.content use karo */}
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
            title={`${config.title} FAQs`}
            description={`${config.title} se jude common sawaal aur jawaab.`}
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