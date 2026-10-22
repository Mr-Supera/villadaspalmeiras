import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface Props {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

export function Lightbox({ images, index, onClose, onIndexChange }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onIndexChange]);

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-4 sm:p-10 animate-fade-soft"
      role="dialog"
      aria-modal="true"
      aria-label="Imagem ampliada"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Fechar"
        className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        <X className="size-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((index - 1 + images.length) % images.length);
        }}
        aria-label="Imagem anterior"
        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        <ChevronLeft className="size-6" />
      </button>

      <img loading="lazy" height={1067} width={1600} decoding="async"
        src={current.src}
        alt={current.alt}
        className="max-h-[85vh] max-w-full object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((index + 1) % images.length);
        }}
        aria-label="Imagem seguinte"
        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        <ChevronRight className="size-6" />
      </button>

      <div className="absolute bottom-6 inset-x-0 text-center text-white/70 text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
