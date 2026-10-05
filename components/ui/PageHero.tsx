import { Container } from "./Container";

/** Editorial page header: mono label, large tight headline, hairline underneath. No pills, no effects. */
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <header className="bg-[linear-gradient(to_bottom,transparent_35%,rgb(var(--bg)/0.8))] pt-32 pb-14 sm:pt-40 sm:pb-20">
      <Container>
        <p className="font-mono text-xs text-fg/70">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98]">
          {title}
        </h1>
        {description && <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-fg/70">{description}</p>}
      </Container>
    </header>
  );
}
