import React from "react";
import { RotateCcw, Search } from "lucide-react";
import { DIRECTORY_ARTISTS } from "../data/siteContent";
import { filterDirectoryArtists } from "../lib/filters";

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
  highContrast,
  pauseMotion,
}) {
  const filteredDirectory = filterDirectoryArtists(
    DIRECTORY_ARTISTS,
    dirDiscipline,
    dirSearch
  );

  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const openNowBadge = highContrast
    ? "bg-yellow-400 text-black font-bold"
    : "bg-[#CCFBF1] text-[#115E59] font-bold";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <span className={`inline-block px-3 py-1 rounded text-xs ${openNowBadge}`}>
          Open Now • Greater Vancouver Artist Directory
        </span>
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Local Artist Directory
        </h1>
        <p className="text-base max-w-[65ch]">
          Our directory is open now to all Greater Vancouver artists. Want to be listed here?
          Contact us. If what you do is not listed yet, we will add your category right now.
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
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-bold bg-[#CCFBF1] text-[#115E59] border border-[#115E59]/30 hover:bg-teal-100 min-h-[42px]"
            >
              <RotateCcw className="w-4 h-4 shrink-0" />
              <span>Show All</span>
            </button>
          )}
        </div>
      </div>

      {/* DIRECTORY CARDS (OPEN NOW) */}
      {filteredDirectory.length === 0 ? (
        <article className={`rounded-xl p-6 flex flex-col justify-between text-left max-w-2xl ${cardSurface}`}>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className={`px-2.5 py-1 rounded text-xs ${openNowBadge}`}>
                Open Now • Greater Vancouver
              </span>
              <span
                className={`px-2.5 py-1 rounded text-xs font-bold ${
                  highContrast ? "bg-zinc-800 text-white" : "bg-[#0F2942] text-white"
                }`}
              >
                {dirDiscipline === "Other Art" ? "Other Art" : "Custom Art Category"}
              </span>
            </div>

            <h2
              className={`font-display text-xl font-bold ${
                highContrast ? "text-white" : "text-[#0F2942]"
              }`}
            >
              Artist
            </h2>

            <p className="text-sm max-w-[65ch]">
              Want to be listed here? Contact us. If your art type is not listed yet, we will
              add it now.
            </p>
          </div>

          <div className="pt-5 mt-5 border-t border-[#E2DDD5] flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onSelectArtistContact("")}
              className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] ${primaryBtn} ${motionClass}`}
            >
              Want to Be Listed Here? Contact Us →
            </button>
          </div>
        </article>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDirectory.map((artist) => (
            <article
              key={artist.id}
              className={`rounded-xl p-6 flex flex-col justify-between text-left ${cardSurface}`}
            >
              <div className="space-y-3">
                {/* Level 1: Top Status Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`px-2.5 py-1 rounded text-xs ${openNowBadge}`}>
                    {artist.statusBadge}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-bold ${
                      highContrast ? "bg-zinc-800 text-white" : "bg-[#0F2942] text-white"
                    }`}
                  >
                    {artist.discipline}
                  </span>
                </div>

                {/* Level 2: Title */}
                <h2
                  className={`font-display text-xl font-bold ${
                    highContrast ? "text-white" : "text-[#0F2942]"
                  }`}
                >
                  {artist.name}
                </h2>

                {/* Level 3: Short Clear Text */}
                <p className="text-sm max-w-[65ch]">{artist.description}</p>
              </div>

              {/* Level 4: Action Button */}
              <div className="pt-5 mt-5 border-t border-[#E2DDD5]">
                <button
                  type="button"
                  onClick={() => onSelectArtistContact(artist.artTypeOption)}
                  className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] ${primaryBtn} ${motionClass}`}
                >
                  Want to Be Listed Here? Contact Us →
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
