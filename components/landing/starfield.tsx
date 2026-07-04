const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: i % 5 === 0 ? 2 : 1,
  duration: `${2 + (i % 4)}s`,
  delay: `${(i % 10) * 0.3}s`,
}));

export function Starfield() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {STARS.map((star) => (
        <span
          key={star.id}
          className="star absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(125,211,252,0.12)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(42,112,126,0.15)_0%,transparent_50%)]" />
    </div>
  );
}
