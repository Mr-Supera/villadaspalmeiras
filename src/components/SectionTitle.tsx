import type { ReactNode } from "react";

interface Props {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({ kicker, title, description, align = "center", light }: Props) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {kicker && <span className="kicker">{kicker}</span>}
      <h2
        className={`heading-serif mt-4 text-3xl sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-[color:var(--forest)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? "text-white/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 ${align === "center" ? "mx-auto" : ""} bg-[color:var(--gold)]`}
        aria-hidden
      />
    </div>
  );
}
