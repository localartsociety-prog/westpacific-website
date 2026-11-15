import React from "react";
import { MANDATE_ITEMS } from "../data/siteContent";
import DualActionLinks from "./DualActionLinks";

export default function HomeView({
  onNavigate,
  onScrollToNewsletter,
  highContrast,
  pauseMotion,
}) {
  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const subCardSurface = highContrast
    ? "bg-zinc-900 border-2 border-white text-white"
    : "bg-[#F8F6F2] border border-[#E2DDD5] text-[#111827]";

  return (
    <div className="space-y-12">
      {/* HERO CARD */}
      <section
        aria-label="Welcome to LOCAL ART"
        className={`rounded-2xl p-6 sm:p-10 text-left space-y-6 ${cardSurface}`}
      >
        <div className="max-w-3xl space-y-4">
          <h1
            className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
              highContrast ? "text-white" : "text-[#0F2942]"
            }`}
          >
            Connecting local artists and the public in Greater Vancouver.
          </h1>

          <p
            className={`text-base sm:text-lg max-w-[65ch] ${
              highContrast ? "text-zinc-100" : "text-[#111827]"
            }`}
          >
            Our Local Artist Directory is open now for creators across Greater Vancouver. Free
            public art markets, concerts, and beginner workshops are coming soon.
          </p>
        </div>

        <DualActionLinks
          onContact={() => onNavigate("artists")}
          onNewsletter={onScrollToNewsletter}
          highContrast={highContrast}
          pauseMotion={pauseMotion}
        />

        {/* 2 SUMMARY CARDS SIDE-BY-SIDE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 items-stretch">
          {/* CARD 1: EVENTS */}
          <article
            className={`rounded-xl p-6 flex flex-col justify-between space-y-5 ${subCardSurface}`}
          >
            <div className="space-y-2.5 text-left">
              <p
                className={`text-sm font-bold ${
                  highContrast ? "text-yellow-300" : "text-[#B8332A]"
                }`}
              >
                Coming soon.
              </p>
              <h2
                className={`font-display text-xl font-bold ${
                  highContrast ? "text-white" : "text-[#0F2942]"
                }`}
              >
                Free Art Markets, Concerts &amp; Exhibitions
              </h2>
              <p className="text-sm max-w-[65ch]">
                Every future market, exhibition, and concert will be free for visitors. You
                will meet local artists and enjoy live music in welcoming spaces.
              </p>
            </div>

            <DualActionLinks
              onContact={() => onNavigate("artists")}
              onNewsletter={onScrollToNewsletter}
              highContrast={highContrast}
              pauseMotion={pauseMotion}
            />
          </article>

          {/* CARD 2: ARTIST OPPORTUNITIES */}
          <article
            className={`rounded-xl p-6 flex flex-col justify-between space-y-5 ${subCardSurface}`}
          >
            <div className="space-y-2.5 text-left">
              <p
                className={`text-sm font-bold ${
                  highContrast ? "text-yellow-300" : "text-[#0F2942]"
                }`}
              >
                Directory open now • Markets &amp; shows coming soon.
              </p>
              <h2
                className={`font-display text-xl font-bold ${
                  highContrast ? "text-white" : "text-[#0F2942]"
                }`}
              >
                Artist Opportunities
              </h2>
              <p className="text-sm max-w-[65ch]">
                Artists can join our free directory today. Future markets will keep booth fees
                affordable and let artists keep 100% of their sales.
              </p>
            </div>

            <DualActionLinks
              onContact={() => onNavigate("artists")}
              onNewsletter={onScrollToNewsletter}
              highContrast={highContrast}
              pauseMotion={pauseMotion}
            />
          </article>
        </div>
      </section>

      {/* WHAT WE WILL DO */}
      <section
        aria-label="What We Will Do"
        className={`rounded-2xl p-6 sm:p-8 text-left space-y-6 ${cardSurface}`}
      >
        <h2
          className={`font-display text-2xl font-bold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          What We Will Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MANDATE_ITEMS.map((item) => (
            <article
              key={item.title}
              className={`rounded-xl p-5 flex flex-col justify-between text-left space-y-4 ${subCardSurface}`}
            >
              <div className="space-y-2">
                <p
                  className={`text-xs font-bold uppercase tracking-wider ${
                    highContrast ? "text-yellow-300" : "text-[#B8332A]"
                  }`}
                >
                  Coming soon.
                </p>
                <h3
                  className={`font-display text-lg font-bold ${
                    highContrast ? "text-white" : "text-[#0F2942]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-sm max-w-[65ch]">{item.description}</p>
              </div>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => onNavigate("artists")}
                  className={`block text-sm font-bold underline underline-offset-4 text-left min-h-[42px] ${
                    highContrast ? "text-yellow-300" : "text-[#B8332A]"
                  }`}
                >
                  Want to join? Contact us →
                </button>
                <a
                  href="#newsletter-signup"
                  onClick={onScrollToNewsletter}
                  className={`inline-flex items-center text-sm font-bold underline underline-offset-4 text-left min-h-[42px] ${
                    highContrast ? "text-white" : "text-[#0F2942]"
                  }`}
                >
                  Want to know more? Join the newsletter
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
