import { brand } from "./brand";

/** Marketing-site paths and CTAs for post-checkout flows. */
export const appLinks = {
  home: "/",
  download: "/#download",
  pro: "/#pro",
  privacy: "/privacy",
  terms: "/terms",
  /** Primary CTA after Stripe — open app section until a deep link is configured. */
  returnToApp: "/#download",
} as const;

export const supportEmail = "hello@myskylog.com";

export function siteUrl(path = ""): string {
  const base = brand.domain.replace(/\/$/, "");
  return path ? `${base}${path.startsWith("/") ? path : `/${path}`}` : base;
}
