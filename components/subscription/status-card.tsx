import Link from "next/link";

type StatusCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconRingClass: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  footer?: React.ReactNode;
};

export function StatusCard({
  eyebrow,
  title,
  description,
  icon,
  iconRingClass,
  primaryAction,
  secondaryAction,
  footer,
}: StatusCardProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_28px_80px_rgba(42,112,126,0.14)] sm:p-10">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-skylog-mint/10 blur-2xl"
        aria-hidden
      />

      <div className="relative text-center">
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ${iconRingClass}`}
        >
          {icon}
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-skylog-mint">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-skylog-ink sm:text-3xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-slate-600">
          {description}
        </p>

        {(primaryAction || secondaryAction) && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {primaryAction && (
              <Link
                href={primaryAction.href}
                className="inline-flex items-center justify-center rounded-xl bg-skylog-teal px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-skylog-teal/20 transition-colors hover:bg-skylog-teal-deep"
              >
                {primaryAction.label}
              </Link>
            )}
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3.5 text-sm font-semibold text-skylog-ink transition-colors hover:border-skylog-mint hover:bg-skylog-scrim"
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        )}

        {footer && (
          <div className="mt-8 border-t border-slate-200 pt-6 text-left">{footer}</div>
        )}
      </div>
    </article>
  );
}
