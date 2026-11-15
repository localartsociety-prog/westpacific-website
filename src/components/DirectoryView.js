import React from "react";
import { RotateCcw, Search } from "lucide-react";
import { DIRECTORY_CARDS } from "../data/siteContent";
import { filterDirectoryCards } from "../lib/filters";
import DualActionLinks from "./DualActionLinks";

const DISCIPLINE_FILTERS = [
  "All",
  "Ceramics",
  "Print",
  "Textile",
  "Music",
  "Other Art",
];

export default function DirectoryView({
  dirDiscipline,
  setDirDiscipline,
  dirSearch,
  setDirSearch,
  onSelectArtistContact,
  onScrollToNewsletter,
  highContrast,
  pauseMotion,
}) {
  const filteredCards = filterDirectoryCards(
    DIRECTORY_CARDS,
    dirDiscipline,
    dirSearch
  );

  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Local Artist Directory
        </h1>
        <p className="text-base max-w-[65ch]">
          Our directory is open now to all Greater Vancouver artists. Want to be listed here?
          Contact us. If what you do is not listed yet, we will add it now.
        </p>
      </div>

      {/* FILTER BAR */}
      <div
        className={`p-4 sm:p-5 rounded-xl flex flex-wrap items-center justify-between gap-4 ${cardSurface}`}
      >
        <div className="flex flex-wrap gap-2" role="group" aria-label="Art type filter">
          {DISCIPLINE_FILTERS.map((disc) => (
            <button
              key={disc}
              type="button"
              onClick={() => setDirDiscipline(disc)}
              aria-pressed={dirDiscipline === disc}
              className={`px-3.5 py-2 rounded-lg text-sm font-bold min-h-[42px] whitespace-nowrap ${motionClass} ${
                dirDiscipline === disc
                  ? highContrast
                    ? "bg-yellow-400 text-black border-2 border-white"
                    : "bg-[#0F2942] text-white"
                  : highContrast
                  ? "bg-zinc-900 text-white border border-white hover:bg-zinc-800"
                  : "bg-[#F8F6F2] text-[#0F2942] border border-[#E2DDD5] hover:bg-[#E2DDD5]/60"
              }`}
            >
              {disc}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <label htmlFor="directory-search-input" className="sr-only">
              Search art type
            </label>
            <Search
              className="w-4 h-4 text-slate-500 absolute left-3 top-3.5 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="directory-search-input"
              type="text"
              value={dirSearch}
              onChange={(e) => setDirSearch(e.target.value)}
              placeholder="Search art type..."
              className="pl-9 pr-3 py-2 rounded-lg border border-[#E2DDD5] text-sm text-[#111827] bg-white min-h-[42px]"
            />
          </div>

          {(dirDiscipline !== "All" || dirSearch !== "") && (
            <button
              type="button"
              onClick={() => {
                setDirDiscipline("All");
                setDirSearch("");
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-bold bg-[#F8F6F2] text-[#0F2942] border border-[#E2DDD5] hover:bg-[#E2DDD5] min-h-[42px]"
            >
              <RotateCcw className="w-4 h-4 shrink-0" />
              <span>Show All</span>
            </button>
          )}
        </div>
      </div>

      {/* 4 PILL-FREE DIRECTORY CARDS */}
      {filteredCards.length === 0 ? (
        <article className={`rounded-xl p-6 max-w-2xl space-y-5 ${cardSurface}`}>
          <div className="space-y-2">
            <h2
              className={`font-display text-xl font-bold ${
                highContrast ? "text-white" : "text-[#0F2942]"
              }`}
            >
              Other Art Artist
            </h2>
            <p className="text-sm max-w-[65ch]">
              Want to be listed here? Contact us. If what you do is not listed yet, we will
              add it now.
            </p>
          </div>
          <DualActionLinks
            onContact={() => onSelectArtistContact("Other Art (Write Yours Below)")}
            onNewsletter={onScrollToNewsletter}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        </article>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCards.map((card) => (
            <article
              key={card.id}
              className={`rounded-xl p-6 flex flex-col justify-between text-left space-y-5 ${cardSurface}`}
            >
              <div className="space-y-2">
                <p
                  className={`text-xs font-bold uppercase tracking-wider ${
                    highContrast ? "text-yellow-300" : "text-[#B8332A]"
                  }`}
                >
                  Open now • Greater Vancouver
                </p>

                <h2
                  className={`font-display text-xl font-bold ${
                    highContrast ? "text-white" : "text-[#0F2942]"
                  }`}
                >
                  {card.displayTitle}
                </h2>

                <p className="text-sm max-w-[65ch]">{card.description}</p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD5]">
                <DualActionLinks
                  onContact={() => onSelectArtistContact(card.artTypeValue)}
                  onNewsletter={onScrollToNewsletter}
                  highContrast={highContrast}
                  pauseMotion={pauseMotion}
                />
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
