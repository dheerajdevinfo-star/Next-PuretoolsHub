import AdUnit from "@/components/layout/AdUnit"
import {
  MapPin,
  Flame,
  House,
  LayoutGrid,
  TrendingUp,
  BadgePercent,
  PiggyBank,
  Car,
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
  PersonStanding,
  Calculator,
} from "lucide-react"

import Card from '@/components/ui/Card'
import Faq from '@/components/ui/Faq'
import Footer from "@/components/layout/Footer";




export const metadata = {
  title: "PureToolsHub — Free Online Calculators for India",
  description: "Free EMI, SIP, Income Tax, FD calculators for India. No signup needed. Instant results.",
  keywords: ["EMI calculator", "SIP calculator", "income tax calculator India", "free online tools"],
  openGraph: {
    title: "PureToolHub — Free Online Calculators for India",
    description: "Free EMI, SIP, FD calculators — built for India",
    url: "https://puretoolshub.com",
    siteName: "PureToolHub",
  },
}


export default function Home() {

  const popularTools = [
    {
      id: 1,
      title: "Home Loan EMI",
      description: "Monthly EMI instant calculate karein",
      icon: House,
      icon_color: "#116f57",
      icon_bg: '#e1f5ee',
      url:"/finance/emi/home-loan"
    },
    {
      id: 2,
      title: "SIP Calculator",
      description: "Mutual fund returns plan karein",
      icon: TrendingUp,
      icon_color: "#1e63a7",
      icon_bg: '#e6f1fb',
      url:"/finance/sip"
    },
    {
      id: 3,
      title: "Compound Interest",
      description: "Old vs new regime comparison",
      icon: BadgePercent,
      icon_color: "#8c5817",
      icon_bg: '#faeeda',
      url:"/finance/compound-interest"
    },
    {
      id: 4,
      title: "FD Calculator",
      description: "Fixed deposit maturity amount",
      icon: PiggyBank,
      icon_color: "#191292",
      icon_bg: '#eeedfe',
      url:"/finance/fd"
    },
    {
      id: 5,
      title: "Car Loan EMI",
      description: "Car loan monthly EMI nikaalein",
      icon: Car,
      icon_color: "#993c1d",
      icon_bg: '#faece7',
      url:"/finance/emi/car-loan"
    },
    {
      id: 6,
      title: "GST Calculator",
      description: "Public provident fund returns",
      icon: ChartNoAxesCombined,
      icon_color: "#3b6d11",
      icon_bg: '#eaf3de',
      url:"/finance/gst"
    },

    {
      id: 7,
      title: "Presonal Loan Emi",
      description: "Public provident fund returns",
      icon: PersonStanding,
      icon_color: "#5b0303",
      icon_bg: '#f3dede',
      url:"/finance/emi/personal-loan"
    },
     {
      id: 8,
      title: "EMI Calculator",
      description: "Calculate your emi",
      icon: Calculator,
      icon_color: "#6d0463",
      icon_bg: '#f3def1',
      url:"/finance/emi"
    },
  ];




  const allCategoryTools = [
    {
      id: 1,
      title: "Loan & EMI",
      description: "1 Tool",
      icon: CreditCard,
      icon_color: "#116f57",
      icon_bg: '#e1f5ee',
      url:'/finance/emi'
    },
    {
      id: 2,
      title: "Investment",
      description: "1 Tool",
      icon: ChartSpline,
      icon_color: "#1e63a7",
      icon_bg: '#e6f1fb',
      url:''
    },
    {
      id: 3,
      title: "Tax & Salary",
      description: "1 Tool",
      icon: File,
      icon_color: "#8c5817",
      icon_bg: '#faeeda',
      url:''
    },
    {
      id: 4,
      title: "Health",
      description: "1 Tool",
      icon: Apple,
      icon_color: "#191292",
      icon_bg: '#eeedfe',
      url:''
    },
    {
      id: 5,
      title: "Math",
      description: "1 Tool",
      icon: Radical,
      icon_color: "#993c1d",
      icon_bg: '#faece7',
      url:''
    },
    {
      id: 6,
      title: "Savings & FD",
      description: "1 Tool",
      icon: Landmark,
      icon_color: "#3b6d11",
      icon_bg: '#eaf3de',
      url:'/finance/fd'
    },
  ];


  const faqData = [
    {
      question: "Kya ye tools bilkul free hain?",
      answer:
        "Haan, PureToolsHub ke sab tools 100% free hain. Koi hidden charges, koi subscription, aur koi signup required nahi hai."
    },
    {
      question: "EMI calculator kitna accurate hai?",
      answer:
        "Hamare EMI calculator standard reducing balance method use karte hain jo banks bhi use karte hain — results bilkul accurate hote hain."
    },
    {
      question: "Kya mobile pe bhi kaam karta hai?",
      answer:
        "Haan, PureToolHub fully responsive hai — Android aur iPhone dono pe perfectly kaam karta hai."
    }
  ];





  return (
    <>
      {/* <AdUnit/> */}
      <section className="home_hero_section">
        <div className="full_width">
          <span className="pills_box"> <MapPin className="map_icon" />Built for India · 100% free</span>
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
              <p>Koi wait nahi, koi loading nahi — result type karte hi milta hai</p>
            </div>
            <div className="home_why_choose_grid_child">
              <LockKeyholeOpen />
              <h4>100% free</h4>
              <p>Koi hidden charges nahi, koi signup nahi — bilkul free</p>
            </div>
            <div className="home_why_choose_grid_child">
              <Smartphone />
              <h4>Mobile friendly</h4>
              <p>Phone pe bhi perfectly kaam karta hai — kahi bhi use karo</p>
            </div>
          </div>
        </div>
      </section>



      <section className="home_faq">
        <div className="max-width">
          <h2 className="">India ke sabse accurate free online calculators</h2>
          <p>PureToolsHub India ka ek free online tool platform hai jahan aapko EMI calculator, SIP calculator, income tax calculator, FD calculator, PPF calculator aur 50+ aur tools milenge — bilkul free, koi registration nahi.</p>
          <p>Hamare tools specifically India ke banking aur financial system ke liye banaye gaye hain — RBI ke niyamon ke hisaab se accurate results dete hain. Chahe home loan ka EMI nikalna ho, SIP returns plan karni ho, ya income tax compare karna ho — sab kuch ek jagah milega.</p>

          <h2 className="hpme_faq_h2">Aksar puchhe jaane wale sawaal</h2>
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