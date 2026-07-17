import { SubscriptionNavbar } from "./subscription-navbar";

type SubscriptionPageShellProps = {
  children: React.ReactNode;
  /** Optional accent glow behind the card */
  accent?: "cyan" | "amber" | "teal";
};

const accentGlow: Record<NonNullable<SubscriptionPageShellProps["accent"]>, string> =
  {
    cyan: "from-skylog-cyan/20 via-skylog-teal/10 to-transparent",
    amber: "from-skylog-amber/15 via-transparent to-skylog-teal/5",
    teal: "from-skylog-mint/15 via-skylog-teal/10 to-transparent",
  };

export function SubscriptionPageShell({
  children,
  accent = "teal",
}: SubscriptionPageShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(145deg,#f8fbfb_0%,#ffffff_48%,#edf8f6_100%)]">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-skylog-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-skylog-mint/15 blur-3xl" />
      <SubscriptionNavbar />

      <main className="relative flex min-h-screen items-center justify-center px-6 pb-16 pt-24">
        <div className="relative w-full max-w-lg">
          <div
            className={`pointer-events-none absolute -inset-8 rounded-[2rem] bg-gradient-to-br ${accentGlow[accent]} blur-3xl`}
            aria-hidden
          />
          {children}
        </div>
      </main>
    </div>
  );
}
