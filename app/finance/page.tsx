// app/finance/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  TrendingUp,
  PiggyBank,
  Landmark,
  Building2,
  Receipt,
  Home,
  FileText,
  Wallet,
  Award,
  Percent,
  ArrowRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { financeCategories } from "@/lib/finance-data";

const iconMap: Record<string, LucideIcon> = {
  Calculator,
  TrendingUp,
  PiggyBank,
  Landmark,
  Building2,
  Receipt,
  Home,
  FileText,
  Wallet,
  Award,
  Percent,
};

const PAGE_URL = "https://puretoolshub.com/finance";
const PAGE_DESCRIPTION =
  "Explore all free finance calculators on PureToolsHub — EMI, SIP, FD, PPF, EPF, GST, HRA, income tax, salary, gratuity, and compound interest tools. No signup, instant results.";

export function generateMetadata(): Metadata {
  return {
    title: "Finance Calculators – EMI, SIP, Tax, FD, PPF & More | PureToolsHub",
    description: PAGE_DESCRIPTION,
    keywords: [
      "finance calculators",
      "EMI calculator",
      "SIP calculator",
      "income tax calculator",
      "FD calculator",
      "PPF calculator",
      "GST calculator",
      "HRA calculator",
      "salary calculator",
      "gratuity calculator",
    ],
    alternates: { canonical: PAGE_URL },
    openGraph: {
      title: "Finance Calculators | PureToolsHub",
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: "Finance Calculators | PureToolsHub",
      description: PAGE_DESCRIPTION,
    },
  };
}

export default function FinancePage() {
  // Total tool count is derived, not hardcoded — stays accurate as categories grow.
  const totalTools = financeCategories.reduce(
    (sum, cat) => sum + cat.tools.length,
    0
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-4">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex items-center gap-1.5 text-sm text-slate-500"
      >
        <Link href="/" className="hover:text-slate-700">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-slate-700">Finance</span>
      </nav>

      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Finance Calculators
        </h1>
        <p className="mt-3 text-slate-500">
          {totalTools}+ free calculators to plan loans, investments, taxes,
          and savings — accurate results, no signup required.
        </p>
      </div>

      {/* Category grid */}
      <section aria-label="All finance categories">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {financeCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? Calculator;
            return (
              <Link
                key={category.slug}
                href={`/finance/${category.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#116f57]/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#116f57]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e1f5ee]">
                  <Icon className="h-5.5 w-5.5 text-[#116f57]" strokeWidth={2} />
                </div>
                <h2 className="font-semibold text-slate-900 group-hover:text-[#116f57]">
                  {category.title}
                </h2>
                <p className="mt-1.5 text-sm text-slate-500">
                  {category.description}
                </p>
                <span className="mt-3 block text-xs font-medium text-slate-400">
                  {category.tools.length} tool
                  {category.tools.length > 1 ? "s" : ""}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#116f57] opacity-0 transition group-hover:opacity-100">
                  View calculators <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SEO content block */}
      <section className="mt-14 border-t border-slate-100 pt-10">
        <h2 className="text-xl font-semibold text-slate-900">
          Free Financial Calculators for Every Need
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          PureToolsHub brings together {totalTools}+ finance calculators in
          one place — covering loans, investments, savings, taxes, and
          salary. Every calculator follows standard financial formulas to
          give you accurate, dependable results instantly, with no signup
          and no hidden charges.
        </p>
      </section>
    </main>
  );
}