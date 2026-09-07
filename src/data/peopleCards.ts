// Home page "About people" cards — same accordion-hover module as
// "About Project" (categories.ts / CategoryCard.astro), just fed
// people.ts instead of work.ts.
import type { CategoryCardData } from "./card";
import type { ImageMetadata } from "astro";
import { peopleTopics } from "./people";
import consensusImage from "../assets/people/consensus.png";
import abilityImage from "../assets/people/ability.png";
import platformImage from "../assets/people/platform.png";

const images: Record<string, ImageMetadata> = {
  consensus: consensusImage,
  ability: abilityImage,
  platform: platformImage,
};

export const peopleCards: CategoryCardData[] = peopleTopics.map((topic) => ({
  label: topic.title,
  restDescription: topic.tagline,
  hoverTitle: topic.description,
  href: `/people/${topic.slug}`,
  buttonLabel: "Learn more",
  image: images[topic.slug],
  imageAlt: topic.title,
}));
