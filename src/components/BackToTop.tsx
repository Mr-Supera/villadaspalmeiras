import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 left-6 z-40 grid size-12 place-items-center rounded-full bg-[color:var(--forest)] text-white shadow-luxe transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-3"
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
