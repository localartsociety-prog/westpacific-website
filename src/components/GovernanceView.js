import React from "react";
import { BOARD_MEMBERS } from "../data/siteContent";

export default function GovernanceView({ onNavigate, highContrast, pauseMotion }) {
  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          About Us &amp; Board of Directors
        </h1>
        <p className="text-base max-w-[65ch]">
          We are a registered British Columbia non-profit society. Every public event and
          artist opportunity will stay open to everyone in Greater Vancouver.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className={`rounded-xl p-6 flex flex-col justify-between space-y-5 ${cardSurface}`}>
          <div className="space-y-3">
            <h2
              className={`font-display text-xl font-bold ${
                highContrast ? "text-yellow-300" : "text-[#0F2942]"
              }`}
            >
              Board of Directors
            </h2>
            <ul className="text-sm space-y-2.5">
              {BOARD_MEMBERS.map((member) => (
                <li key={member.name}>
                  <strong>{member.name}</strong> — {member.role}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("volunteer")}
            className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] text-left ${primaryBtn} ${motionClass}`}
          >
            Volunteer &amp; Media List →
          </button>
        </article>

        <article className={`rounded-xl p-6 flex flex-col justify-between space-y-5 ${cardSurface}`}>
          <div className="space-y-3">
            <h2
              className={`font-display text-xl font-bold ${
                highContrast ? "text-yellow-300" : "text-[#0F2942]"
              }`}
            >
              Fairness &amp; Ethics Rule
            </h2>
            <p className="text-sm max-w-[65ch]">
              Our directors will always disclose any personal interest in a contract, vendor,
              or artist booth. A director with a conflict will step out and will not vote on
              that decision.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("artists")}
            className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] text-left ${primaryBtn} ${motionClass}`}
          >
            Want to join? Contact us →
          </button>
        </article>

        <article className={`rounded-xl p-6 flex flex-col justify-between space-y-5 ${cardSurface}`}>
          <div className="space-y-3">
            <h2
              className={`font-display text-xl font-bold ${
                highContrast ? "text-yellow-300" : "text-[#0F2942]"
              }`}
            >
              How We Will Use Funds
            </h2>
            <p className="text-sm max-w-[65ch]">
              We will put 100% of booth fees and sponsorships directly into venue permits,
              event insurance, fair pay for artists and teachers, and free art supplies.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("sponsor")}
            className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] text-left ${primaryBtn} ${motionClass}`}
          >
            Sponsor a Booth →
          </button>
        </article>
      </div>
    </div>
  );
}
