import React from "react";
import { Calendar, CheckCircle2, Paintbrush } from "lucide-react";
import { EVENTS_DATA, MANDATE_ITEMS } from "../data/siteContent";

export default function HomeView({ onNavigate, highContrast, pauseMotion }) {
  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const subCardVisitor = highContrast
    ? "bg-zinc-900 border-2 border-white text-white"
    : "bg-[#F8F6F2] border border-[#E2DDD5] text-[#111827]";

  const subCardArtist = highContrast
    ? "bg-zinc-900 border-2 border-yellow-400 text-white"
    : "bg-[#FDF8F7] border border-[#B8332A]/30 text-[#111827]";

  const comingSoonBadge = highContrast
    ? "bg-yellow-400 text-black font-bold"
    : "bg-[#FEF3C7] text-[#78350F] font-bold";

  const freeEntryBadge = highContrast
    ? "bg-white text-black font-bold"
    : "bg-[#CCFBF1] text-[#115E59] font-bold";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const navyBtn = highContrast
    ? "bg-white text-black font-bold border-2 border-yellow-400 hover:bg-zinc-200"
    : "bg-[#0F2942] text-white font-bold hover:bg-[#183C5F]";

  const secondaryBtn = highContrast
    ? "bg-zinc-900 text-white font-bold border-2 border-white hover:bg-zinc-800"
    : "bg-white text-[#0F2942] font-bold border border-[#0F2942]/30 hover:bg-[#F8F6F2]";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <div className="space-y-12">
      {/* HERO BOX */}
      <section
        aria-label="Welcome to LOCAL ART"
        className={`rounded-2xl p-6 sm:p-10 ${cardSurface}`}
      >
        <div className="max-w-3xl mb-8 text-left space-y-4">
          <span
            className={`inline-block px-3.5 py-1.5 rounded-md text-xs tracking-wide ${comingSoonBadge}`}
          >
            Coming Soon • Free Public Entry • $0 Jury Fees
          </span>

          <h1
            className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
              highContrast ? "text-white" : "text-[#0F2942]"
            }`}
          >
            We will connect local artists and the public in Greater Vancouver.
          </h1>

          <p
            className={`text-base sm:text-lg max-w-[65ch] ${
              highContrast ? "text-zinc-100" : "text-[#111827]"
            }`}
          >
            We will organize friendly art markets, exhibitions, concerts, and beginner
            workshops across Greater Vancouver. Every event will be free for visitors, and
            local artists will keep 100% of their sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* LEFT HERO CARD: VISITORS */}
          <div className={`rounded-xl p-6 flex flex-col justify-between ${subCardVisitor}`}>
            <div className="space-y-3 text-left">
              <div
                className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                  highContrast ? "text-yellow-300" : "text-[#115E59]"
                }`}
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>For Visitors &amp; Families (Coming Soon)</span>
              </div>

              <h2
                className={`font-display text-xl font-bold ${
                  highContrast ? "text-white" : "text-[#0F2942]"
                }`}
              >
                Free Art Markets, Concerts &amp; Beginner Classes
              </h2>

              <p className="text-sm max-w-[65ch]">
                You will walk in without a ticket. You will meet local visual artists, enjoy
                live music, and try hands-on workshops with free supplies.
              </p>

              <ul className="text-sm space-y-2 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className={`w-4 h-4 mt-1 shrink-0 ${
                      highContrast ? "text-yellow-300" : "text-[#115E59]"
                    }`}
                  />
                  <span>Free Entry — No ticket needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2
                    className={`w-4 h-4 mt-1 shrink-0 ${
                      highContrast ? "text-yellow-300" : "text-[#115E59]"
                    }`}
                  />
                  <span>Wheelchair friendly spaces near SkyTrain stations</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate("events")}
                className={`px-5 py-2.5 rounded-lg text-sm min-h-[42px] whitespace-nowrap ${navyBtn} ${motionClass}`}
              >
                See Future Events →
              </button>
              <button
                type="button"
                onClick={() => onNavigate("workshops")}
                className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] whitespace-nowrap ${secondaryBtn} ${motionClass}`}
              >
                See Future Classes
              </button>
            </div>
          </div>

          {/* RIGHT HERO CARD: ARTISTS */}
          <div className={`rounded-xl p-6 flex flex-col justify-between ${subCardArtist}`}>
            <div className="space-y-3 text-left">
              <div
                className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                  highContrast ? "text-yellow-300" : "text-[#B8332A]"
                }`}
              >
                <Paintbrush className="w-4 h-4 shrink-0" />
                <span>For Local Artists, Musicians &amp; Teachers</span>
              </div>

              <h2
                className={`font-display text-xl font-bold ${
                  highContrast ? "text-white" : "text-[#0F2942]"
                }`}
              >
                Low Booth Fees ($120 – $150) &amp; 0% Sales Commission
              </h2>

              <p className="text-sm max-w-[65ch]">
                We will never charge application or jury fees. We will never take a share of
                your art sales. Musicians and art teachers will receive fair pay.
              </p>

              <p
                className={`text-sm font-bold tabular-nums pt-1 ${
                  highContrast ? "text-yellow-300" : "text-[#0F2942]"
                }`}
              >
                $120 Standard Booth (6ft Table) • $150 Full 10x10 Booth
              </p>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => onNavigate("artists")}
                className={`px-5 py-2.5 rounded-lg text-sm min-h-[42px] whitespace-nowrap ${primaryBtn} ${motionClass}`}
              >
                Join Our Artist List →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING FREE MARKETS, EXHIBITIONS & CONCERTS (COMING SOON) */}
      <section aria-label="Upcoming Free Events Preview" className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="text-left space-y-1">
            <h2
              className={`font-display text-2xl font-bold ${
                highContrast ? "text-white" : "text-[#0F2942]"
              }`}
            >
              Upcoming Free Markets, Exhibitions &amp; Concerts (Coming Soon)
            </h2>
            <p className="text-sm max-w-[65ch]">
              We are planning our first season of free events across Greater Vancouver.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate("events")}
            className={`text-sm font-bold underline underline-offset-4 min-h-[42px] px-1 ${
              highContrast ? "text-yellow-300" : "text-[#B8332A]"
            }`}
          >
            See Future Events &amp; Access Standards →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS_DATA.map((evt) => (
            <article
              key={evt.id}
              className={`rounded-xl p-6 flex flex-col justify-between text-left ${cardSurface}`}
            >
              <div className="space-y-3">
                {/* Level 1: Status Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-1 rounded text-xs ${comingSoonBadge}`}>
                    Coming Soon
                  </span>
                  <span className={`px-2.5 py-1 rounded text-xs ${freeEntryBadge}`}>
                    Free Entry
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-bold ${
                      highContrast
                        ? "bg-zinc-800 text-white border border-white"
                        : "bg-[#0F2942] text-white"
                    }`}
                  >
                    {evt.category}
                  </span>
                </div>

                {/* Level 2: Bold Plain-English Title */}
                <h3
                  className={`font-display text-lg font-bold leading-snug ${
                    highContrast ? "text-white" : "text-[#0F2942]"
                  }`}
                >
                  {evt.title}
                </h3>

                {/* Level 3: Short Future-Tense Sentences */}
                <p className="text-sm max-w-[65ch]">{evt.summary}</p>
              </div>

              {/* Level 4: One Clear Action Button */}
              <div className="pt-5 mt-5 border-t border-[#E2DDD5]">
                <button
                  type="button"
                  onClick={() => onNavigate("artists")}
                  className={`w-full px-4 py-2.5 rounded-lg text-sm text-left min-h-[42px] ${secondaryBtn} ${motionClass}`}
                >
                  Want to take part as an artist? Contact us →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHAT WE WILL DO */}
      <section
        aria-label="What We Will Do"
        className={`rounded-2xl p-6 sm:p-8 text-left ${cardSurface}`}
      >
        <h2
          className={`font-display text-2xl font-bold mb-6 ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          What We Will Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MANDATE_ITEMS.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl p-5 flex flex-col justify-between text-left space-y-3 ${
                highContrast
                  ? "bg-zinc-900 border border-white text-white"
                  : "bg-[#F8F6F2] border border-[#E2DDD5] text-[#111827]"
              }`}
            >
              <div className="space-y-2">
                <span className={`inline-block px-2.5 py-0.5 rounded text-xs ${comingSoonBadge}`}>
                  Coming Soon
                </span>
                <h3
                  className={`font-display text-lg font-bold ${
                    highContrast ? "text-yellow-300" : "text-[#0F2942]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-sm max-w-[65ch]">{item.description}</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate("artists")}
                className={`text-sm font-bold underline underline-offset-4 text-left min-h-[42px] ${
                  highContrast ? "text-yellow-300" : "text-[#B8332A]"
                }`}
              >
                Join our list →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
