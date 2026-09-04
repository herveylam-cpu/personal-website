// "About Project" entries — Home page case cards, each linking to its own
// detail page at /work/[slug]. Detail content arrives page-by-page; until
// then [slug].astro renders a "coming soon" placeholder.
export type WorkCategory = "Strategy" | "Tone" | "Design";

export interface WorkCase {
  slug: string;
  category: WorkCategory;
  categoryNote: string;
  title: string;
  subtitle?: string;
}

export const workCases: WorkCase[] = [
  {
    slug: "monee-ecosystem-strategy",
    category: "Strategy",
    categoryNote:
      "Defining the Monee ecosystem and product design strategy from a systemic view, so design moves in lockstep with high-level business direction.",
    title: "Monee Ecosystem & Product Design Strategy",
  },
  {
    slug: "maribank-ai-native-brand",
    category: "Tone",
    categoryNote:
      "Defining brand tone and product personality — trustworthy visual design aligned with business positioning, and an AI-native brand visual system.",
    title: "Maribank End-to-End AI-Native Brand, Creative & Visual Design System",
  },
  {
    slug: "maribank-homepage-redesign",
    category: "Design",
    categoryNote:
      "Concrete product design methods and decisions, balancing user experience with business goals.",
    title: "Maribank Homepage Redesign",
    subtitle: "Simplicity is the ultimate sophistication",
  },
  {
    slug: "marinvest",
    category: "Design",
    categoryNote:
      "Concrete product design methods and decisions, balancing user experience with business goals.",
    title: "Marinvest",
    subtitle: "A simple, direct approach to investment product design",
  },
  {
    slug: "mari-credit-card",
    category: "Design",
    categoryNote:
      "Concrete product design methods and decisions, balancing user experience with business goals.",
    title: "Mari Credit Card",
    subtitle: "A no-frills, simple credit card experience",
  },
];
