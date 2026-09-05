// "About People" topics — each links to its own detail page at
// /people/[slug]. Detail content arrives page-by-page; until then
// [slug].astro renders a "coming soon" placeholder.
export interface PeopleTopic {
  slug: string;
  title: string;
  /** Short line shown on the Home card at rest. */
  tagline: string;
  /** Fuller description — shown on hover on Home, and as the
   *  detail page's subtitle. */
  description: string;
}

export const peopleTopics: PeopleTopic[] = [
  {
    slug: "consensus",
    title: "Consensus",
    tagline: "Building a unified, high-morale team.",
    description:
      "Building shared team consensus — a clear-goaled, high-morale, unified team.",
  },
  {
    slug: "ability",
    title: "Ability",
    tagline: "Defining scope, capability, and growth.",
    description:
      "Defining the team's job scope and the capabilities it requires, with matching short- and long-term development plans.",
  },
  {
    slug: "platform",
    title: "Platform",
    tagline: "Building the platform for AI-native design.",
    description:
      "Building AI-native design assets and a shared design platform.",
  },
];
