import React from "react";
import { VOLUNTEER_ROLES } from "../data/siteContent";

export default function VolunteerView({ onNavigate, highContrast, pauseMotion }) {
  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const comingSoonBadge = highContrast
    ? "bg-yellow-400 text-black font-bold"
    : "bg-[#FEF3C7] text-[#78350F] font-bold";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <span className={`inline-block px-3 py-1 rounded text-xs ${comingSoonBadge}`}>
          Coming Soon • Community Support &amp; Press
        </span>
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Future Volunteer Roles &amp; Media Info
        </h1>
        <p className="text-base max-w-[65ch]">
          We will welcome community volunteers and local press partners when our first season
          opens in Greater Vancouver.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article className={`rounded-xl p-6 flex flex-col justify-between space-y-5 ${cardSurface}`}>
          <div className="space-y-4">
            <span className={`inline-block px-2.5 py-1 rounded text-xs ${comingSoonBadge}`}>
              Coming Soon
            </span>
            <h2
              className={`font-display text-xl font-bold ${
                highContrast ? "text-yellow-300" : "text-[#0F2942]"
              }`}
            >
              Future Volunteer Roles (Coming Soon)
            </h2>
            <p className="text-sm max-w-[65ch]">
              We will list clear physical needs for every shift so volunteers can choose roles
              that fit their comfort and energy.
            </p>
            <ul className="space-y-3 text-sm">
              {VOLUNTEER_ROLES.map((role) => (
                <li
                  key={role.title}
                  className={`p-3.5 rounded-lg ${
                    highContrast
                      ? "bg-zinc-900 border border-white"
                      : "bg-[#F8F6F2] border border-[#E2DDD5]"
                  }`}
                >
                  <p className="font-bold">{role.title}</p>
                  <p className="text-xs font-semibold opacity-80 mt-0.5">{role.demand}</p>
                  <p className="mt-1">{role.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("artists")}
            className={`px-5 py-2.5 rounded-lg text-sm min-h-[42px] self-start ${primaryBtn} ${motionClass}`}
          >
            Want to Volunteer? Contact Us →
          </button>
        </article>

        <article className={`rounded-xl p-6 flex flex-col justify-between space-y-5 ${cardSurface}`}>
          <div className="space-y-4">
            <span className={`inline-block px-2.5 py-1 rounded text-xs ${comingSoonBadge}`}>
              Coming Soon
            </span>
            <h2
              className={`font-display text-xl font-bold ${
                highContrast ? "text-yellow-300" : "text-[#0F2942]"
              }`}
            >
              Media &amp; Press Kit (Coming Soon)
            </h2>
            <p className="text-sm max-w-[65ch]">
              Local journalists, radio hosts, and community calendars will be able to download
              our official logo, fact sheet, and event photos without signing in.
            </p>
            <p className="text-sm max-w-[65ch]">
              We will share clear event dates, SkyTrain routes, and artist stories as soon as
              our first season opens.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("governance")}
            className={`px-5 py-2.5 rounded-lg text-sm min-h-[42px] self-start ${primaryBtn} ${motionClass}`}
          >
            Read About Our Society →
          </button>
        </article>
      </div>
    </div>
  );
}
