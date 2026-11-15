import React from "react";
import { Accessibility, Eye, PauseCircle, X } from "lucide-react";
import WestPacificLogo from "./WestPacificLogo";
import { PLAIN_LANGUAGE_SUMMARIES } from "../data/siteContent";

const NAV_ITEMS = [
  { id: "events", label: "Free Events & Markets" },
  { id: "workshops", label: "Workshops" },
  { id: "artists", label: "Artist Opportunities" },
  { id: "directory", label: "Artist Directory" },
];

export default function TopBarAndNav({
  activePage,
  onNavigate,
  highContrast,
  setHighContrast,
  fontScale,
  setFontScale,
  pauseMotion,
  setPauseMotion,
  plainLanguageLang,
  setPlainLanguageLang,
  accessDrawerOpen,
  setAccessDrawerOpen,
}) {
  const focusRing = highContrast
    ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
    : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8332A]";

  return (
    <>
      {/* 1. TOP UTILITY BAR */}
      <div
        className={
          highContrast
            ? "bg-zinc-950 border-b-2 border-white text-white text-sm"
            : "bg-[#0F2942] text-white text-sm"
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs sm:text-sm font-medium leading-snug">
            Coming Soon: We are launching our first season in Greater Vancouver.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={() => setAccessDrawerOpen(!accessDrawerOpen)}
              aria-expanded={accessDrawerOpen}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs sm:text-sm font-semibold min-h-[36px] whitespace-nowrap shrink-0 ${
                highContrast
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-white/15 text-white hover:bg-white/25"
              } ${focusRing}`}
            >
              <Accessibility className="w-4 h-4 shrink-0" />
              <span>Accessibility &amp; Languages</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate("sponsor")}
              className={`px-2 py-1.5 rounded text-xs sm:text-sm font-medium hover:underline whitespace-nowrap shrink-0 min-h-[36px] ${focusRing}`}
            >
              Business Sponsors
            </button>

            <button
              type="button"
              onClick={() => onNavigate("governance")}
              className={`px-2 py-1.5 rounded text-xs sm:text-sm font-medium hover:underline whitespace-nowrap shrink-0 min-h-[36px] ${focusRing}`}
            >
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* PERSISTENT ACCESSIBILITY & LANGUAGES DRAWER */}
      {accessDrawerOpen && (
        <section
          aria-label="Accessibility and Language Controls"
          className={
            highContrast
              ? "bg-black border-b-4 border-yellow-400 px-4 sm:px-6 py-6 text-white"
              : "bg-[#0A1D30] text-white px-4 sm:px-6 py-6 border-b border-slate-700"
          }
        >
          <div className="max-w-7xl mx-auto space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700">
              <div className="flex items-center gap-2.5">
                <Accessibility className="w-6 h-6 text-amber-300 shrink-0" />
                <h2 className="font-display text-lg font-bold">
                  Accessibility, Display &amp; Simple Language Controls
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setAccessDrawerOpen(false)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-500 text-sm font-semibold min-h-[40px] whitespace-nowrap shrink-0 ${focusRing}`}
              >
                <X className="w-4 h-4" />
                <span>Close (Esc)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2.5">
                <p className="font-display font-bold text-amber-300 text-xs uppercase tracking-wider">
                  1. Contrast &amp; Motion
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setHighContrast(!highContrast)}
                    aria-pressed={highContrast}
                    className={`px-3.5 py-2 rounded-md text-sm font-semibold border inline-flex items-center gap-2 min-h-[42px] whitespace-nowrap ${
                      highContrast
                        ? "bg-yellow-400 text-black border-white"
                        : "bg-slate-800 text-white border-slate-600 hover:bg-slate-700"
                    } ${focusRing}`}
                  >
                    <Eye className="w-4 h-4 shrink-0" />
                    <span>
                      {highContrast ? "High Contrast: ON" : "High Contrast"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPauseMotion(!pauseMotion)}
                    aria-pressed={pauseMotion}
                    className={`px-3.5 py-2 rounded-md text-sm font-semibold border inline-flex items-center gap-2 min-h-[42px] whitespace-nowrap ${
                      pauseMotion
                        ? "bg-amber-300 text-black border-white"
                        : "bg-slate-800 text-white border-slate-600 hover:bg-slate-700"
                    } ${focusRing}`}
                  >
                    <PauseCircle className="w-4 h-4 shrink-0" />
                    <span>{pauseMotion ? "Motion Stopped" : "Stop Motion"}</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="font-display font-bold text-amber-300 text-xs uppercase tracking-wider">
                  2. Text Size
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {[100, 115, 130].map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      onClick={() => setFontScale(scale)}
                      aria-pressed={fontScale === scale}
                      className={`px-3.5 py-2 rounded-md text-sm font-bold border min-h-[42px] tabular-nums ${
                        fontScale === scale
                          ? "bg-amber-300 text-black border-white"
                          : "bg-slate-800 text-white border-slate-600 hover:bg-slate-700"
                      } ${focusRing}`}
                    >
                      {scale}%
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setHighContrast(false);
                      setFontScale(100);
                      setPauseMotion(false);
                    }}
                    className={`px-3.5 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-sm font-medium border border-slate-600 min-h-[42px] ${focusRing}`}
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="font-display font-bold text-amber-300 text-xs uppercase tracking-wider">
                  3. Simple Summary
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { code: "en", label: "English" },
                    { code: "fr", label: "Français" },
                    { code: "zh", label: "中文" },
                    { code: "pa", label: "ਪੰਜਾਬੀ" },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => setPlainLanguageLang(lang.code)}
                      aria-pressed={plainLanguageLang === lang.code}
                      className={`px-3 py-1.5 rounded-md text-xs font-bold border min-h-[36px] ${
                        plainLanguageLang === lang.code
                          ? "bg-amber-300 text-black border-white"
                          : "bg-slate-800 text-white border-slate-600 hover:bg-slate-700"
                      } ${focusRing}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-slate-100 leading-relaxed max-w-[65ch]">
                  {PLAIN_LANGUAGE_SUMMARIES[plainLanguageLang]}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. MAIN NAVIGATION BAR */}
      <header
        className={
          highContrast
            ? "md:sticky md:top-0 z-30 bg-black border-b-2 border-white text-white"
            : "md:sticky md:top-0 z-30 bg-[#F8F6F2]/95 backdrop-blur-sm border-b border-[#E2DDD5] text-[#0F2942]"
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className={`flex items-center gap-3 text-left rounded-lg p-1 shrink-0 ${focusRing}`}
          >
            <WestPacificLogo highContrast={highContrast} size={46} />
            <div>
              <span className="font-display block text-lg sm:text-xl font-extrabold tracking-tight leading-none whitespace-nowrap">
                LOCAL ART
              </span>
              <span
                className={`block text-xs font-semibold mt-1 whitespace-nowrap ${
                  highContrast ? "text-yellow-300" : "text-[#0F2942]/80"
                }`}
              >
                Greater Vancouver, BC
              </span>
            </div>
          </button>

          <nav
            aria-label="Main Navigation"
            className="flex flex-wrap items-center gap-1.5 sm:gap-2"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-2.5 sm:px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold min-h-[42px] whitespace-nowrap shrink-0 ${
                    pauseMotion ? "" : "transition-colors duration-150"
                  } ${
                    isActive
                      ? highContrast
                        ? "bg-white text-black"
                        : "bg-[#0F2942] text-white"
                      : highContrast
                      ? "text-white hover:bg-zinc-800"
                      : "text-[#0F2942] hover:bg-[#E2DDD5]/60"
                  } ${focusRing}`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => onNavigate("support")}
              className={`sm:ml-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold min-h-[42px] whitespace-nowrap shrink-0 shadow-sm ${
                pauseMotion ? "" : "transition-colors duration-150"
              } ${
                highContrast
                  ? "bg-yellow-400 text-black border-2 border-white hover:bg-yellow-300"
                  : "bg-[#B8332A] text-white hover:bg-[#962820]"
              } ${focusRing}`}
            >
              Sponsor a Booth
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
