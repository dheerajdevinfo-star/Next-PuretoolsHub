import { MetadataRoute } from 'next'

const baseUrl = 'https://puretoolshub.com/' // apna actual domain daalein

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
  ]

  const financeParents = [
    '/finance/compound-interest',
    '/finance/emi',
    '/finance/epf',
    '/finance/fd',
    '/finance/gratuity',
    '/finance/gst',
    '/finance/hra',
    '/finance/income-tax',
    '/finance/ppf',
    '/finance/salary',
    '/finance/sip',
  ]

  const financeChildren = [
    '/finance/compound-interest/simple-interest',
    '/finance/compound-interest/cagr',
    '/finance/compound-interest/inflation',
    '/finance/emi/home-loan',
    '/finance/emi/car-loan',
    '/finance/emi/personal-loan',
    '/finance/epf/epf-withdrawal',
    '/finance/epf/epf-balance-check',
    '/finance/epf/epf-interest-calculator',
    '/finance/epf/eps-calculator',
    '/finance/fd/tax-saver-fd',
    '/finance/fd/senior-citizen-fd',
    '/finance/fd/recurring-deposit',
    '/finance/gratuity/gratuity-eligibility',
    '/finance/gratuity/gratuity-tax-calculator',
    '/finance/gratuity/gratuity-formula',
    '/finance/gst/reverse-gst',
    '/finance/gst/gst-invoice',
    '/finance/gst/hsn-code',
    '/finance/hra/hra-exemption',
    '/finance/hra/rent-receipt',
    '/finance/hra/hra-tax-benefit',
    '/finance/income-tax/old-vs-new-regime',
    '/finance/income-tax/tds-calculator',
    '/finance/income-tax/advance-tax',
    '/finance/income-tax/tax-slab',
    '/finance/ppf/ppf-withdrawal',
    '/finance/ppf/ppf-interest-calculator',
    '/finance/ppf/ppf-vs-fd',
    '/finance/ppf/ppf-extension',
    '/finance/salary/ctc-to-inhand',
    '/finance/salary/salary-hike-calculator',
    '/finance/salary/take-home-salary',
    '/finance/salary/salary-slip',
    '/finance/sip/lumpsum',
    '/finance/sip/step-up',
    '/finance/sip/swp',
  ]

  const allUrls = [...staticPages, ...financeParents, ...financeChildren]

  return allUrls.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : path.split('/').length > 2 ? 0.7 : 0.9,
  }))
}