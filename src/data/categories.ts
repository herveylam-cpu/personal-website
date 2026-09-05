// Home page "About project" cards — one per work category. Each links
// to a single representative case in `work.ts` (Design has 3 cases;
// this card fronts the one that best matches its hover copy — the
// other two Design cases still have real pages at /work/[slug], just
// no direct link from Home yet).
import { workCases } from "./work";

function caseBySlug(slug: string) {
  const found = workCases.find((work) => work.slug === slug);
  if (!found) throw new Error(`No work case with slug "${slug}"`);
  return found;
}

export interface CategoryCard {
  label: string;
  restDescription: string;
  hoverTitle: string;
  href: string;
  buttonLabel: string;
}

export const categoryCards: CategoryCard[] = [
  {
    label: "Strategy",
    restDescription:
      "Defining Monee's product design strategy from a systemic perspective.",
    hoverTitle: caseBySlug("monee-ecosystem-strategy").title,
    href: `/work/${caseBySlug("monee-ecosystem-strategy").slug}`,
    buttonLabel: "View case",
  },
  {
    label: "Tone",
    restDescription: "Defining brand tone and product personality.",
    hoverTitle: caseBySlug("maribank-ai-native-brand").title,
    href: `/work/${caseBySlug("maribank-ai-native-brand").slug}`,
    buttonLabel: "View case",
  },
  {
    label: "Design",
    restDescription:
      "Focused on concrete product design methods and decisions.",
    hoverTitle:
      "How to design a simple, easy-to-understand Digital Bank experience",
    href: `/work/${caseBySlug("maribank-homepage-redesign").slug}`,
    buttonLabel: "View case",
  },
];
