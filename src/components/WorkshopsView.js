import React from "react";
import { WORKSHOP_PARTNERS } from "../data/siteContent";
import DualActionLinks from "./DualActionLinks";

export default function WorkshopsView({
  onNavigate,
  onScrollToNewsletter,
  highContrast,
  pauseMotion,
}) {
  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const partnerCardSurface = highContrast
    ? "bg-zinc-900 border-2 border-white text-white"
    : "bg-[#F8F6F2] border border-[#E2DDD5] text-[#111827]";

  return (
    <div className="space-y-10 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Public Art Workshops
        </h1>
        <p className="text-base max-w-[65ch]">
          We will offer free beginner art classes across Greater Vancouver.
        </p>
      </div>

      {/* 1 MAIN COMING SOON CARD */}
      <article className={`rounded-2xl p-6 sm:p-8 max-w-3xl space-y-5 ${cardSurface}`}>
        <div className="space-y-3">
          <p
            className={`text-sm font-bold ${
              highContrast ? "text-yellow-300" : "text-[#B8332A]"
            }`}
          >
            Coming soon.
          </p>

          <h2
            className={`font-display text-2xl font-bold ${
              highContrast ? "text-white" : "text-[#0F2942]"
            }`}
          >
            Public Art Workshops — Coming Soon
          </h2>

          <p className="text-base max-w-[65ch]">
            We will offer free beginner art classes with all supplies included. Artists who
            teach a class will receive fair pay.
          </p>
        </div>

        <div className="pt-2">
          <DualActionLinks
            onContact={() => onNavigate("artists")}
            onNewsletter={onScrollToNewsletter}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        </div>
      </article>

      {/* PARTNER SECTION BELOW */}
      <section
        aria-label="Host, Lead, or Suggest an Art Workshop"
        className={`rounded-2xl p-6 sm:p-8 space-y-6 ${cardSurface}`}
      >
        <div className="space-y-2 max-w-[65ch]">
          <h2
            className={`font-display text-2xl font-bold ${
              highContrast ? "text-white" : "text-[#0F2942]"
            }`}
          >
            Host, Lead, or Suggest an Art Workshop
          </h2>
          <p className="text-sm max-w-[65ch]">
            Local venues, artists, and neighbours can partner with us to bring free workshops
            to more communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORKSHOP_PARTNERS.map((partner) => (
            <div
              key={partner.title}
              className={`rounded-xl p-5 space-y-2 text-left ${partnerCardSurface}`}
            >
              <h3
                className={`font-display text-base font-bold leading-snug ${
                  highContrast ? "text-yellow-300" : "text-[#0F2942]"
                }`}
              >
                {partner.title}
              </h3>
              <p className="text-sm max-w-[65ch]">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <DualActionLinks
            onContact={() => onNavigate("artists")}
            onNewsletter={onScrollToNewsletter}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        </div>
      </section>
    </div>
  );
}
