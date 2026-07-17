import { brand } from "./brand";

/** Marketing-site paths and CTAs for post-checkout flows. */
export const appLinks = {
  home: "/",
  download: "/download",
  pricing: "/pricing",
  pro: "/pricing",
  flights: "/flights",
  stays: "/stays",
  cars: "/cars",
  extras: "/flight-extras",
  trips: "/trips",
  signIn: "/sign-in",
  signUp: "/sign-up",
  about: "/about",
  careers: "/careers",
  help: "/help",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
  cookieSettings: "/cookies#settings",
  accessibility: "/accessibility",
  /** Primary CTA after Stripe — open app section until a deep link is configured. */
  returnToApp: "/#download",
} as const;

export const supportEmail = "hello@myskylog.com";

export function siteUrl(path = ""): string {
  const base = brand.domain.replace(/\/$/, "");
  return path ? `${base}${path.startsWith("/") ? path : `/${path}`}` : base;
}
