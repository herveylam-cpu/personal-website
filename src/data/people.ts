// "About People" entries — team-leadership themes, each linking to its own
// detail page at /people/[slug]. Detail content arrives page-by-page; until
// then [slug].astro renders a "coming soon" placeholder.
export interface PeopleTopic {
  slug: string;
  title: string;
  description: string;
}

export const peopleTopics: PeopleTopic[] = [
  {
    slug: "consensus",
    title: "Consensus",
    description:
      "Building shared team consensus — a clear-goaled, high-morale, unified team.",
  },
  {
    slug: "ability",
    title: "Ability",
    description:
      "Defining the team's job scope and the capabilities it requires, with matching short- and long-term development plans.",
  },
  {
    slug: "platform",
    title: "Platform",
    description: "Design transformation in the age of AI.",
  },
];
