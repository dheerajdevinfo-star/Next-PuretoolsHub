// components/finance/CategoryPage.tsx
// Shared UI for every finance category listing page (/finance/emi, /finance/sip, etc.)
// Each parent page.tsx is ~10 lines: it just passes its own slug to this component.

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
import { getCategoryBySlug } from "@/lib/finance-data";

// Map icon names from the data file to actual lucide components.
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

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategoryBySlug(slug);

  // Defensive: should never happen if page.tsx and data file stay in sync,
  // but avoids a silent blank page if a slug typo slips in.
  if (!category) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          Category not found
        </h1>
        <p className="mt-2 text-slate-500">
          The calculator category you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#116f57] hover:underline"
        >
          Back to home <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
    );
  }

  const Icon = iconMap[category.icon] ?? Calculator;

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Breadcrumb — helps both users and Google understand page hierarchy */}
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-700">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/finance" className="hover:text-slate-700">
          Finance
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-slate-700">{category.shortLabel}</span>
      </nav>

      {/* Header */}
      <div className="mb-10 flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e1f5ee]">
          <Icon className="h-7 w-7 text-[#116f57]" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {category.title}
          </h1>
          <p className="mt-2 max-w-2xl text-slate-500">{category.description}</p>
        </div>
      </div>

      {/* Tool cards grid */}
      <section aria-label={`${category.title} tools`}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/finance/${category.slug}/${tool.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#116f57]/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#116f57]"
            >
              <h2 className="font-semibold text-slate-900 group-hover:text-[#116f57]">
                {tool.title}
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">{tool.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#116f57] opacity-0 transition group-hover:opacity-100">
                Open calculator <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Lightweight SEO content block — real, unique text per category (not boilerplate) */}
      <section className="mt-14 border-t border-slate-100 pt-10">
        <h2 className="text-xl font-semibold text-slate-900">
          About {category.title}
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
          {category.metaDescription} All calculators on this page are free to
          use, require no signup, and give instant results as you type.
        </p>
      </section>
    </main>
  );
}