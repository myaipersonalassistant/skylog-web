import type { Metadata } from "next";
import Link from "next/link";
import { StatusCard } from "@/components/subscription/status-card";
import { SubscriptionPageShell } from "@/components/subscription/subscription-page-shell";
import { appLinks, supportEmail } from "@/lib/app-links";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Billing updated — ${brand.name}`,
  description:
    "Your subscription changes are saved. Return to the SkyLog app to continue.",
  robots: { index: false, follow: false },
};

export default function ProfileBillingReturnPage() {
  return (
    <SubscriptionPageShell accent="teal">
      <StatusCard
        eyebrow="Billing portal"
        title="Subscription updated"
        description="Any changes you made in Stripe are saved. Close this tab and return to SkyLog — your plan will refresh automatically."
        iconRingClass="bg-skylog-teal/20 ring-skylog-mint/30"
        icon={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-8 w-8 text-skylog-cyan"
            aria-hidden
          >
            <path
              d="M9 12.75 11.25 15 15 9.75M4.5 19.5h15a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5h-3.75M9 4.5V3.75A1.5 1.5 0 0 1 10.5 2.25h3A1.5 1.5 0 0 1 15 3.75V4.5"
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
          label: "Back to home",
          href: appLinks.home,
        }}
        footer={
          <div className="space-y-3 text-center text-sm text-skylog-text-muted">
            <p>
              Manage invoices, payment method, or cancel anytime from{" "}
              <span className="font-semibold text-white">Profile → Subscription</span>{" "}
              in the app.
            </p>
            <p>
              Questions?{" "}
              <Link
                href={`mailto:${supportEmail}`}
                className="font-medium text-skylog-cyan transition-colors hover:text-white"
              >
                {supportEmail}
              </Link>
            </p>
          </div>
        }
      />
    </SubscriptionPageShell>
  );
}
