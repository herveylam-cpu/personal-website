// Shared shape for the accordion hover cards used by both "About
// Project" and "About People" on the Home page (CategoryCard.astro
// renders either one — same module, same interaction, different data).
import type { ImageMetadata } from "astro";

export interface CategoryCardData {
  label: string;
  restDescription: string;
  hoverTitle: string;
  href: string;
  buttonLabel: string;
  /** Omit until a real photo is supplied — the component falls back
   *  to a placeholder frame. */
  image?: ImageMetadata;
  imageAlt: string;
}
