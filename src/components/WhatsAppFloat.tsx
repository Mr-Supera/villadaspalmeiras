import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar connosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-transform duration-300"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
      />
      <MessageCircle className="size-7 relative" />
    </a>
  );
}
