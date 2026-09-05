// Home page "About people" cards — same accordion-hover module as
// "About Project" (categories.ts / CategoryCard.astro), just fed
// people.ts instead of work.ts. No photos supplied yet, so `image` is
// left unset and CategoryCard falls back to a placeholder frame.
import type { CategoryCardData } from "./card";
import { peopleTopics } from "./people";

export const peopleCards: CategoryCardData[] = peopleTopics.map((topic) => ({
  label: topic.title,
  restDescription: topic.tagline,
  hoverTitle: topic.description,
  href: `/people/${topic.slug}`,
  buttonLabel: "Learn more",
  imageAlt: topic.title,
}));
