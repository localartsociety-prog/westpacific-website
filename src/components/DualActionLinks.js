import React from "react";

export default function DualActionLinks({
  onContact,
  onNewsletter,
  highContrast,
  pauseMotion,
  showContact = true,
}) {
  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  const contactClass = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const newsletterClass = highContrast
    ? "bg-zinc-900 text-yellow-300 font-bold border-2 border-white hover:bg-zinc-800"
    : "bg-[#F8F6F2] text-[#0F2942] font-bold border border-[#0F2942]/30 hover:bg-[#E2DDD5]/60";

  return (
    <div className="flex flex-wrap items-center gap-3">
      {showContact && (
        <button
          type="button"
          onClick={onContact}
          className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] inline-flex items-center ${contactClass} ${motionClass}`}
        >
          Want to join? Contact us →
        </button>
      )}
      <a
        href="#newsletter-signup"
        onClick={onNewsletter}
        className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] inline-flex items-center ${newsletterClass} ${motionClass}`}
      >
        Want to know more? Join the newsletter
      </a>
    </div>
  );
}
