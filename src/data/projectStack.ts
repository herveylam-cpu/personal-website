// Content for the standalone /project page's stacking card list — its
// own copy (richer, partly Chinese) distinct from both work.ts (the
// /work/[slug] case pages) and categories.ts (Home's shorter English
// accordion cards). All five link to the same case slugs as work.ts.
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
    title: "Monee生态系统及产品设计策略定义",
    subtitle:
      "基于high level业务发展策略，以系统性的视角定义Monee生态系统以及产品设计策略，使之与业务发展相向而行",
    buttonLabel: "查看",
    image: strategyImage,
    imageAlt: "Strategy",
  },
  {
    slug: "maribank-ai-native-brand",
    tag: "Tone",
    title: "maribank ai native brand creative&visual design system",
    subtitle:
      "基于high level业务发展策略，以系统性的视角定义Monee生态系统以及产品设计策略，使之与业务发展相向而行",
    buttonLabel: "查看",
    image: toneImage,
    imageAlt: "Tone",
  },
  {
    slug: "maribank-homepage-redesign",
    tag: "Design",
    title: "大道至简——Maribank首页redesign",
    subtitle: "聚焦具体的产品设计方法与设计决策。做出兼顾用户体验和业务目标的产品设计",
    buttonLabel: "查看",
    image: designImage,
    imageAlt: "Design",
  },
  {
    slug: "marinvest",
    tag: "Design",
    title: "Marinvest: 简单直接的理财产品设计",
    subtitle: "聚焦具体的产品设计方法与设计决策。做出兼顾用户体验和业务目标的产品设计",
    buttonLabel: "查看",
    imageAlt: "Marinvest",
  },
  {
    slug: "mari-credit-card",
    tag: "Design",
    title: "Mari Credit card: offering a no-frills and simple credit card experience",
    subtitle: "聚焦具体的产品设计方法与设计决策。做出兼顾用户体验和业务目标的产品设计",
    buttonLabel: "查看",
    imageAlt: "Mari Credit Card",
  },
];
