import React from "react";
import { Bike, Filter, MapPin, RotateCcw, Search, Sun, Train } from "lucide-react";
import { EVENTS_DATA } from "../data/siteContent";
import { filterEvents } from "../lib/filters";

export default function EventsView({
  eventCategory,
  setEventCategory,
  eventSearch,
  setEventSearch,
  onNavigate,
  highContrast,
  pauseMotion,
}) {
  const filteredEvents = filterEvents(EVENTS_DATA, eventCategory, eventSearch);

  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const comingSoonBadge = highContrast
    ? "bg-yellow-400 text-black font-bold"
    : "bg-[#FEF3C7] text-[#78350F] font-bold";

  const freeEntryBadge = highContrast
    ? "bg-white text-black font-bold"
    : "bg-[#CCFBF1] text-[#115E59] font-bold";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <span className={`inline-block px-3 py-1 rounded text-xs ${freeEntryBadge}`}>
          Coming Soon • Free Public Entry
        </span>
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Free Art Markets, Concerts &amp; Exhibitions
        </h1>
        <p className="text-base max-w-[65ch]">
          Every future market, exhibition, and concert will be free to enter. Open any
          event card below to read our wheelchair and transit access standards.
        </p>
      </div>

      {/* FILTER BAR */}
      <div
        className={`p-4 sm:p-5 rounded-xl flex flex-wrap items-center justify-between gap-4 ${cardSurface}`}
      >
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Event category filter">
          <Filter className="w-4 h-4 shrink-0 opacity-70" aria-hidden="true" />
          {["All", "Markets", "Exhibitions", "Concerts"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setEventCategory(cat)}
              aria-pressed={eventCategory === cat}
              className={`px-3.5 py-2 rounded-lg text-sm font-bold min-h-[42px] whitespace-nowrap ${motionClass} ${
                eventCategory === cat
                  ? highContrast
                    ? "bg-yellow-400 text-black border-2 border-white"
                    : "bg-[#0F2942] text-white"
                  : highContrast
                  ? "bg-zinc-900 text-white border border-white hover:bg-zinc-800"
                  : "bg-[#F8F6F2] text-[#0F2942] border border-[#E2DDD5] hover:bg-[#E2DDD5]/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <label htmlFor="event-search-input" className="sr-only">
              Search future events
            </label>
            <Search
              className="w-4 h-4 text-slate-500 absolute left-3 top-3.5 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="event-search-input"
              type="text"
              value={eventSearch}
              onChange={(e) => setEventSearch(e.target.value)}
              placeholder="Search events or area..."
              className="pl-9 pr-3 py-2 rounded-lg border border-[#E2DDD5] text-sm text-[#111827] bg-white min-h-[42px]"
            />
          </div>

          {(eventCategory !== "All" || eventSearch !== "") && (
            <button
              type="button"
              onClick={() => {
                setEventCategory("All");
                setEventSearch("");
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-bold bg-[#FEF3C7] text-[#78350F] border border-[#78350F]/30 hover:bg-amber-200 min-h-[42px]"
            >
              <RotateCcw className="w-4 h-4 shrink-0" />
              <span>Show All</span>
            </button>
          )}
        </div>
      </div>

      {/* EVENT CARDS */}
      {filteredEvents.length === 0 ? (
        <div className={`rounded-xl p-8 text-left space-y-4 ${cardSurface}`}>
          <h2 className="font-display text-xl font-bold">No matching future events found</h2>
          <p className="text-sm max-w-[65ch]">
            Try another search word or press Show All to view all three planned event types.
          </p>
          <button
            type="button"
            onClick={() => {
              setEventCategory("All");
              setEventSearch("");
            }}
            className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] ${primaryBtn}`}
          >
            Show All
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredEvents.map((evt) => (
            <article key={evt.id} className={`rounded-xl p-6 space-y-4 ${cardSurface}`}>
              {/* Level 1: Top Status Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E2DDD5]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-3 py-1 rounded text-xs ${comingSoonBadge}`}>
                    {evt.dateStatus}
                  </span>
                  <span className={`px-3 py-1 rounded text-xs ${freeEntryBadge}`}>
                    {evt.admissionStatus}
                  </span>
                </div>
                <span
                  className={`px-2.5 py-1 rounded text-xs font-bold ${
                    highContrast ? "bg-zinc-800 text-white" : "bg-[#0F2942] text-white"
                  }`}
                >
                  {evt.category}
                </span>
              </div>

              {/* Level 2 & 3: Title, Location Plan & Future-Tense Summary */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                <div className="space-y-2.5 max-w-[65ch]">
                  <h2
                    className={`font-display text-xl sm:text-2xl font-bold ${
                      highContrast ? "text-white" : "text-[#0F2942]"
                    }`}
                  >
                    {evt.title}
                  </h2>

                  <p className="text-sm flex items-center gap-2 font-medium">
                    <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Planned Location: {evt.plannedArea}</span>
                  </p>

                  <p className="text-sm flex items-center gap-2 font-medium">
                    <Sun className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{evt.weatherPlan}</span>
                  </p>

                  <p className="text-sm sm:text-base pt-1">{evt.summary}</p>
                </div>

                {/* Level 4: Clear Action Button */}
                <button
                  type="button"
                  onClick={() => onNavigate("artists")}
                  className={`px-5 py-2.5 rounded-lg text-sm min-h-[42px] whitespace-nowrap shrink-0 ${primaryBtn} ${motionClass}`}
                >
                  Want to Join This Event? Contact Us
                </button>
              </div>

              {/* Expandable Wheelchair & Transit Standards Accordion */}
              <details
                className={`rounded-lg p-4 ${
                  highContrast
                    ? "bg-zinc-900 border border-white text-white"
                    : "bg-[#F8F6F2] border border-[#E2DDD5] text-[#111827]"
                }`}
              >
                <summary
                  className={`font-display font-bold text-sm cursor-pointer min-h-[32px] flex items-center ${
                    highContrast ? "text-yellow-300" : "text-[#0F2942]"
                  }`}
                >
                  See Our Future Wheelchair &amp; Transit Standards
                </summary>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
                  <div className="space-y-2">
                    <p
                      className={`font-display font-bold text-xs uppercase tracking-wider ${
                        highContrast ? "text-yellow-300" : "text-[#115E59]"
                      }`}
                    >
                      Public Transit &amp; Bike Access
                    </p>
                    <p className="flex items-start gap-2">
                      <Train className="w-4 h-4 shrink-0 mt-1" aria-hidden="true" />
                      <span>
                        <strong>SkyTrain:</strong> {evt.transit.skytrain}
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-1" aria-hidden="true" />
                      <span>
                        <strong>Bus:</strong> {evt.transit.bus}
                      </span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Bike className="w-4 h-4 shrink-0 mt-1" aria-hidden="true" />
                      <span>
                        <strong>Bike:</strong> {evt.transit.bike}
                      </span>
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <p
                      className={`font-display font-bold text-xs uppercase tracking-wider ${
                        highContrast ? "text-yellow-300" : "text-[#B8332A]"
                      }`}
                    >
                      Wheelchair &amp; Sensory Standards
                    </p>
                    <p>
                      <strong>Ground Surface:</strong> {evt.accessSpecs.surface}
                    </p>
                    <p>
                      <strong>Step-Free Entry:</strong> {evt.accessSpecs.ramps}
                    </p>
                    <p>
                      <strong>Wide Paths:</strong> {evt.accessSpecs.aisles}
                    </p>
                    <p>
                      <strong>Washrooms:</strong> {evt.accessSpecs.washrooms}
                    </p>
                    <p>
                      <strong>Quiet Space:</strong> {evt.accessSpecs.sensory}
                    </p>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
