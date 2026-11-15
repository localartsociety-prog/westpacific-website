import React from "react";
import DualActionLinks from "./DualActionLinks";

export default function VolunteerView({
  onNavigate,
  onScrollToNewsletter,
  highContrast,
  pauseMotion,
}) {
  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Volunteer &amp; Media List
        </h1>
        <p className="text-base max-w-[65ch]">
          We will welcome community volunteers and local journalists when our first events
          launch in Greater Vancouver.
        </p>
      </div>

      {/* 1 CLEAN CARD */}
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
            Volunteer &amp; Media List — Coming Soon
          </h2>

          <p className="text-base max-w-[65ch]">
            We will share clear volunteer roles with seated welcome desks and setup shifts.
            Local press and community calendars will receive our logo, fact sheet, and event
            updates.
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
    </div>
  );
}
