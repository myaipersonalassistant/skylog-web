import type { Metadata } from "next";
import { ProFeatureList } from "@/components/subscription/pro-feature-list";
import { StatusCard } from "@/components/subscription/status-card";
import { SubscriptionPageShell } from "@/components/subscription/subscription-page-shell";
import { appLinks } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Payment successful — ${brand.name} Pro`,
  description:
    "Your SkyLog Pro subscription is active. Return to the app to sync your account.",
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function SubscriptionSuccessPage({ searchParams }: PageProps) {
  const { session_id: sessionId } = await searchParams;

  return (
    <SubscriptionPageShell accent="cyan">
      <StatusCard
        eyebrow="Payment confirmed"
        title="Welcome to SkyLog Pro"
        description="Your trial has started. Switch back to the SkyLog app — your Pro access will appear within a few seconds as we sync your account."
        iconRingClass="bg-emerald-500/15 ring-emerald-400/30"
        icon={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-8 w-8 text-emerald-400"
            aria-hidden
          >
            <path
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
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
          label: "Explore Pro features",
          href: appLinks.pro,
        }}
        footer={
          <div className="space-y-4">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-skylog-text-muted">
              What&apos;s included
            </p>
            <ProFeatureList />
            {sessionId && (
              <p className="pt-2 text-center text-[11px] text-skylog-text-muted/70">
                Reference: {sessionId.slice(0, 20)}…
              </p>
            )}
          </div>
        }
      />
    </SubscriptionPageShell>
  );
}
