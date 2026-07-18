  import AdUnit from "@/components/layout/AdUnit"
  import {
    MapPin,
    Flame,
    House,
    LayoutGrid,
    TrendingUp,
    PiggyBank,
    ChartNoAxesCombined,
    CreditCard,
    ChartSpline,
    File,
    Apple,
    Radical,
    Landmark,
    ShieldCheck,
    Zap,
    Smartphone,
    LockKeyholeOpen,
    FileText,
    Wallet,
    ReceiptText,
  } from "lucide-react"

  import Card from '@/components/ui/Card'
  import Faq from '@/components/ui/Faq' 




  export const metadata = {
    title: "PureToolsHub — Free Online Calculators",
    description: "Free online calculators for EMI, SIP, income tax, FD, PPF, GST, and more. Instant, accurate results — no signup, no login. 100% free financial and health tools.",
    keywords: ["EMI calculator", "SIP calculator", "income tax calculator India", "free online tools"],
    openGraph: {
      title: "PureToolHub — Free Online Calculators",
      description: "Free EMI, SIP, FD calculators",
      url: "https://puretoolshub.com",
      siteName: "PureToolHub",
    },
  }


  export default function Home() {

    const popularTools = [
      {
        id: 1,
        title: "Home Loan EMI Calculator",
        description: "Calculate your monthly EMI instantly",
        icon: House,
        icon_color: "#116f57",
        icon_bg: '#e1f5ee',
        url: "/finance/emi/home-loan"
      },
      {
        id: 2,
        title: "SIP Calculator",
        description: "Plan your mutual fund returns",
        icon: TrendingUp,
        icon_color: "#1e63a7",
        icon_bg: '#e6f1fb',
        url: "/finance/sip"
      },
      {
        id: 3,
        title: "Income Tax Calculator",
        description: "Compare old vs new tax regime",
        icon: FileText,
        icon_color: "#8c5817",
        icon_bg: '#faeeda',
        url: "/finance/income-tax/old-vs-new-regime"
      },
      {
        id: 4,
        title: "FD Calculator",
        description: "Estimate your fixed deposit maturity amount",
        icon: PiggyBank,
        icon_color: "#191292",
        icon_bg: '#eeedfe',
        url: "/finance/fd"
      },
      {
        id: 5,
        title: "PPF Calculator",
        description: "Calculate your PPF maturity value",
        icon: Landmark,
        icon_color: "#993c1d",
        icon_bg: '#faece7',
        url: "/finance/ppf"
      },
      {
        id: 6,
        title: "GST Calculator",
        description: "Calculate GST amount instantly",
        icon: ChartNoAxesCombined,
        icon_color: "#3b6d11",
        icon_bg: '#eaf3de',
        url: "/finance/gst"
      },
      {
        id: 7,
        title: "HRA Exemption Calculator",
        description: "Calculate your HRA tax exemption",
        icon: ReceiptText,
        icon_color: "#5b0303",
        icon_bg: '#f3dede',
        url: "/finance/hra/hra-exemption"
      },
      {
        id: 8,
        title: "Take Home Salary Calculator",
        description: "Calculate your in-hand monthly salary",
        icon: Wallet,
        icon_color: "#6d0463",
        icon_bg: '#f3def1',
        url: "/finance/salary/take-home-salary"
      },
    ];




    const allCategoryTools = [
      {
        id: 1,
        title: "Loan & EMI",
        description: "Calculate EMIs for home, car, and personal loans",
        icon: CreditCard,
        icon_color: "#116f57",
        icon_bg: '#e1f5ee',
        url: '/finance/emi'
      },
      {
        id: 2,
        title: "Investment",
        description: "Plan SIP, lumpsum, and step-up investment returns",
        icon: ChartSpline,
        icon_color: "#1e63a7",
        icon_bg: '#e6f1fb',
        url: ''
      },
      {
        id: 3,
        title: "Tax & Salary",
        description: "Estimate income tax, HRA, and take-home salary",
        icon: File,
        icon_color: "#8c5817",
        icon_bg: '#faeeda',
        url: ''
      },
      {
        id: 4,
        title: "Health",
        description: "Track BMI and other health metrics",
        icon: Apple,
        icon_color: "#191292",
        icon_bg: '#eeedfe',
        url: ''
      },
      {
        id: 5,
        title: "Math",
        description: "Quick calculators for everyday math",
        icon: Radical,
        icon_color: "#993c1d",
        icon_bg: '#faece7',
        url: ''
      },
      {
        id: 6,
        title: "Savings & FD",
        description: "Calculate FD, RD, and PPF returns",
        icon: Landmark,
        icon_color: "#3b6d11",
        icon_bg: '#eaf3de',
        url: '/finance/fd'
      },
    ];


    const faqData = [
      {
        question: "Are these tools completely free?",
        answer:
          "Yes. Every calculator on PureToolsHub is 100% free to use, with no hidden charges,no subscriptions, and no signup required."
      },
      {
        question: " How accurate is the EMI calculator?",
        answer:
          "Our EMI calculator uses the standard loan amortization formula, giving you results that match what banks and lenders typically calculate."
      },
      {
        question: "Does it work on mobile?",
        answer:
          "Yes. PureToolsHub is fully mobile-friendly and works smoothly on phones, tablets, and desktops alike."
      }
    ];





    return (
      <>
        {/* <AdUnit/> */}
        <section className="home_hero_section">
          <div className="full_width">
            <span className="pills_box"> <MapPin className="map_icon" />Trusted Worldwide · 100% Free</span>
            <h1>Calculate smarter,  <span>plan better</span></h1>
            <p>Free online calculators and tools for EMI, SIP, income tax, investments,<br /> health and more — no signup needed.</p>
          </div>
        </section>


        <section className="home_popular_tools">
          <div className="max-width">
            <h2 className="sub_heading"><Flame /> Popular tools</h2>
            <div className="responsive_card_div">
              {popularTools.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  icon_color={card.icon_color}
                  icon_bg={card.icon_bg}
                  url={card.url}
                />
              ))}
            </div>
          </div>
        </section>


      <section className="home_category_tools">
          <div className="max-width">
            <h2 className="sub_heading"><LayoutGrid /> All categories</h2>
            <div className="responsive_card_div">
              {allCategoryTools.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  icon_color={card.icon_color}
                  icon_bg={card.icon_bg}
                  url={card.url}
                />
              ))}
            </div>
          </div>
        </section> 


        <section className="home_why_choose">
          <div className="max-width">
            <h2 className="sub_heading"><ShieldCheck /> Why PureToolsHub?</h2>
            <div className="home_why_choose_grid">
              <div className="home_why_choose_grid_child">
                <Zap />
                <h4>Instant results</h4>
                <p>No waiting, no loading — get your result as you type.</p>
              </div>
              <div className="home_why_choose_grid_child">
                <LockKeyholeOpen />
                <h4>100% free</h4>
                <p>No hidden charges, no signup — completely free, forever.</p>
              </div>
              <div className="home_why_choose_grid_child">
                <Smartphone />
                <h4>Mobile friendly</h4>
                <p>Works perfectly on your phone — calculate anywhere, anytime.</p>
              </div>
            </div>
          </div>
        </section>



        <section className="home_faq">
          <div className="max-width">
            <h2 className="">Free, Accurate Online Calculators for Everyday Financial Decisions</h2>
            <p>PureToolsHub is a free online platform offering 50+ calculators and tools — including
              EMI calculators, SIP calculators, income tax calculators, FD calculators, PPF
              calculators, GST calculators, and more. Every tool is completely free to use, with
              no registration and no hidden charges.</p><br />
            <p>Our calculators are built to follow real-world financial rules and formulas, so you
              get accurate, dependable results every time — whether you're working out a home loan
              EMI, planning SIP returns, comparing tax regimes, or calculating fixed deposit
              maturity. Everything you need is in one place, ready to use instantly.</p>

            <h2 className="hpme_faq_h2">Frequently Asked Questions</h2>
            <Faq
              title="PDF Tool FAQs"
              description="Find answers to common PDF-related questions."
              faqs={faqData}
            />
          </div>
        </section>
      </>
    );
  }         