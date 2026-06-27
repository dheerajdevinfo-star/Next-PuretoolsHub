// import type { EmiTypeConfig } from "@/lib/emiData"

// export function generateEmiSchema(config: EmiTypeConfig, url: string) {
//   const webAppSchema = {
//     "@context": "https://schema.org",
//     "@type": "WebApplication",
//     name: config.title,
//     url: url,
//     applicationCategory: "FinanceApplication",
//     operatingSystem: "All",
//     offers: {
//       "@type": "Offer",
//       price: "0",
//       priceCurrency: "INR",
//     },
//     description: config.metaDescription,
//   }

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: config.faqs.map((f) => ({
//       "@type": "Question",
//       name: f.q,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: f.a,
//       },
//     })),
//   }

//   return [webAppSchema, faqSchema]
// }




interface SchemaCalculatorConfig {
  title: string
  metaDescription: string
  faqs: { q: string; a: string }[]
}

export function generateCalculatorSchema(config: SchemaCalculatorConfig, url: string) {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: config.title,
    url: url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    description: config.metaDescription,
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  }

  return [webAppSchema, faqSchema]
}

export const generateEmiSchema = generateCalculatorSchema
export const generateCiSchema = generateCalculatorSchema