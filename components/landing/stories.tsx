import { stories } from "@/lib/brand";

export function Stories() {
  return (
    <section id="stories" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-skylog-teal">
            For frequent flyers
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-skylog-ink sm:text-4xl">
            Every mile tells a story
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <blockquote
              key={story.title}
              className="relative overflow-hidden rounded-2xl border border-[#B8D4D4]/40 bg-skylog-scrim p-6"
            >
              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{ backgroundColor: story.accent }}
              />
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-skylog-ink-muted">
                {story.eyebrow}
              </p>
              <p className="mt-3 text-xl font-bold leading-snug text-skylog-ink">
                {story.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-skylog-ink-muted">
                {story.subtitle}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
