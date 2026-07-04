export const brand = {
  name: "SkyLog",
  tagline: "Your sky, your story",
  description:
    "The most beautiful way to track every mile you've ever flown. Log flights, map your routes, earn milestones, and sync across devices.",
  domain: "https://myskylog.com",
} as const;

export const features = [
  {
    eyebrow: "Every mile counts",
    title: "Flight logbook",
    description:
      "Log every trip with airlines, airports, and dates. Search, filter, and keep your history offline.",
    icon: "logbook",
  },
  {
    eyebrow: "Your true map",
    title: "Journey maps",
    description:
      "Watch your routes light up on a world map. Lifetime stats for miles, time in air, and airports visited.",
    icon: "map",
  },
  {
    eyebrow: "Share the journey",
    title: "Milestones & badges",
    description:
      "Earn achievements like Jet Setter and Globetrotter. Share milestone cards with the world.",
    icon: "badge",
  },
  {
    eyebrow: "More than a ticket",
    title: "Boarding-pass UI",
    description:
      "Your latest flight as a stylized boarding pass. Trip photos attached to every leg.",
    icon: "boarding",
  },
  {
    eyebrow: "For frequent flyers",
    title: "Cloud sync",
    description:
      "Sign in to sync your logbook across devices. Start as a guest and upgrade when you're ready.",
    icon: "sync",
  },
  {
    eyebrow: "Stories from the sky",
    title: "Personalized insights",
    description:
      "Set your home base and travel frequency. Milestones tailored to how you fly.",
    icon: "insights",
  },
] as const;

export const stories = [
  {
    eyebrow: "Stories from the sky",
    title: "Your sky, your story",
    subtitle:
      "Turn your flights into a story worth sharing — every mile a chapter only you can tell.",
    accent: "#2A707E",
  },
  {
    eyebrow: "Share the journey",
    title: "Fly. Log. Flex",
    subtitle:
      "Log your flights and share travel achievements the whole world can see.",
    accent: "#FBBF24",
  },
  {
    eyebrow: "Every mile counts",
    title: "Flight diary, reimagined",
    subtitle:
      "The most beautiful way to track every mile you've ever flown.",
    accent: "#A78BFA",
  },
  {
    eyebrow: "For frequent flyers",
    title: "Built for the skies",
    subtitle:
      "For travelers who live in the air and want the data to prove it.",
    accent: "#34D399",
  },
  {
    eyebrow: "More than a ticket",
    title: "Beyond the boarding pass",
    subtitle:
      "SkyLog gives your flights a life long after you've landed.",
    accent: "#60A5FA",
  },
  {
    eyebrow: "Your true map",
    title: "Travel is your identity",
    subtitle:
      "The airports you've walked, the skies you've crossed — the truest map of who you are.",
    accent: "#2A707E",
  },
] as const;

export const proFeatures = [
  "Unlimited flight logs",
  "Journey maps & lifetime stats",
  "Milestone cards & sharing",
  "Cloud sync across devices",
] as const;
