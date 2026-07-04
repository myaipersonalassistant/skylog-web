import type { Metadata } from "next";
import { StatusCard } from "@/components/subscription/status-card";
import { SubscriptionPageShell } from "@/components/subscription/subscription-page-shell";
import { appLinks } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Checkout cancelled — ${brand.name}`,
  description:
    "No charge was made. You can start your SkyLog Pro trial anytime from the app.",
  robots: { index: false, follow: false },
};

export default function SubscriptionCancelPage() {
  return (
    <SubscriptionPageShell accent="amber">
      <StatusCard
        eyebrow="Checkout cancelled"
        title="No worries — you're still on track"
        description="We didn't charge your card. Your logbook is safe, and you can upgrade to Pro whenever you're ready from the app."
        iconRingClass="bg-skylog-amber/15 ring-skylog-amber/30"
        icon={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-8 w-8 text-skylog-amber"
            aria-hidden
          >
            <path
              d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        primaryAction={{
          label: "Return to SkyLog",
          href: appLinks.returnToApp,
        }}
        secondaryAction={{
          label: "See what's in Pro",
          href: appLinks.pro,
        }}
        footer={
          <p className="text-center text-sm text-skylog-text-muted">
            Tip: open SkyLog and tap{" "}
            <span className="font-semibold text-white">Upgrade to Pro</span> on
            your profile when you&apos;re ready for unlimited logs and journey
            maps.
          </p>
        }
      />
    </SubscriptionPageShell>
  );
}
