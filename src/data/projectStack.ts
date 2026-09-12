// Content for the standalone /project page's stacking card list — its
// own copy, distinct from both work.ts (the /work/[slug] case pages)
// and categories.ts (Home's shorter accordion cards). All five link
// to the same case slugs as work.ts.
import type { ImageMetadata } from "astro";
import strategyImage from "../assets/work/strategy.png";
import toneImage from "../assets/work/tone.png";
import designImage from "../assets/work/design.png";

export interface ProjectStackCard {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  image?: ImageMetadata;
  imageAlt: string;
}

export const projectStackCards: ProjectStackCard[] = [
  {
    slug: "monee-ecosystem-strategy",
    tag: "Strategy",
    title: "Monee Ecosystem & Product Design Strategy Definition",
    subtitle:
      "Based on high-level business strategy, defining Monee's ecosystem and product design strategy from a systemic perspective, so it moves in lockstep with business growth.",
    buttonLabel: "View case",
    image: strategyImage,
    imageAlt: "Strategy",
  },
  {
    slug: "maribank-ai-native-brand",
    tag: "Tone",
    title: "Maribank AI-Native Brand Creative & Visual Design System",
    subtitle:
      "Based on high-level business strategy, defining Monee's ecosystem and product design strategy from a systemic perspective, so it moves in lockstep with business growth.",
    buttonLabel: "View case",
    image: toneImage,
    imageAlt: "Tone",
  },
  {
    slug: "maribank-homepage-redesign",
    tag: "Design",
    title: "Simplicity Is the Ultimate Sophistication — Maribank Homepage Redesign",
    subtitle:
      "Focused on concrete product design methods and decisions — design that balances user experience with business goals.",
    buttonLabel: "View case",
    image: designImage,
    imageAlt: "Design",
  },
  {
    slug: "marinvest",
    tag: "Design",
    title: "Marinvest: A Simple, Direct Approach to Investment Product Design",
    subtitle:
      "Focused on concrete product design methods and decisions — design that balances user experience with business goals.",
    buttonLabel: "View case",
    imageAlt: "Marinvest",
  },
  {
    slug: "mari-credit-card",
    tag: "Design",
    title: "Mari Credit Card: Offering a No-Frills, Simple Credit Card Experience",
    subtitle:
      "Focused on concrete product design methods and decisions — design that balances user experience with business goals.",
    buttonLabel: "View case",
    imageAlt: "Mari Credit Card",
  },
];
