// Content for the standalone /team page's stacking card list — mirrors
// projectStack.ts's shape and presentation, fed from people.ts instead
// of work.ts. Links to the /people/[slug] detail pages.
import type { ImageMetadata } from "astro";
import { peopleTopics } from "./people";
import consensusImage from "../assets/people/consensus.png";
import abilityImage from "../assets/people/ability.png";
import platformImage from "../assets/people/platform.png";

export interface TeamStackCard {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  image?: ImageMetadata;
  imageAlt: string;
}

const images: Record<string, ImageMetadata> = {
  consensus: consensusImage,
  ability: abilityImage,
  platform: platformImage,
};

export const teamStackCards: TeamStackCard[] = peopleTopics.map((topic) => ({
  slug: topic.slug,
  tag: "Team",
  title: topic.title,
  subtitle: topic.description,
  buttonLabel: "Learn more",
  image: images[topic.slug],
  imageAlt: topic.title,
}));
