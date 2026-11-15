import React from "react";
import WestPacificLogo from "./WestPacificLogo";

export default function Footer({ onNavigate, highContrast }) {
  return (
    <footer
      className={
        highContrast
          ? "bg-black border-t-2 border-white text-white mt-14"
          : "bg-[#0F2942] text-white mt-14"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <WestPacificLogo highContrast={highContrast} inverted={true} size={44} />
            <div>
              <p className="font-display font-extrabold text-base leading-none">LOCAL ART</p>
              <p className="text-xs text-slate-200 mt-1">
                Greater Vancouver, BC • WestPacific LOCAL ART Society
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-100 leading-relaxed max-w-[65ch]">
            <strong>Land Acknowledgement:</strong> We will operate on the unceded, ancestral,
            and traditional territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish),
            and səlilwətaɬ (Tsleil-Waututh) Nations.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm font-bold text-amber-300">
            <button
              type="button"
              onClick={() => onNavigate("governance")}
              className="inline-flex items-center hover:underline min-h-[42px]"
            >
              About Us &amp; Board
            </button>
            <button
              type="button"
              onClick={() => onNavigate("artists")}
              className="inline-flex items-center hover:underline min-h-[42px]"
            >
              Artist Opportunities
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-4 md:pl-8">
          <h2 className="font-display font-bold text-sm uppercase tracking-wider text-amber-300">
            Community, Sponsors &amp; Media
          </h2>
          <p className="text-sm text-slate-100 leading-relaxed max-w-[65ch]">
            Sponsorships will help keep artist booth fees affordable and fund free beginner
            workshops. Local businesses will receive an official Commercial Sponsorship
            Invoice.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm font-bold">
            <button
              type="button"
              onClick={() => onNavigate("support")}
              className="inline-flex items-center text-white hover:underline min-h-[42px]"
            >
              Sponsor a Booth
            </button>
            <button
              type="button"
              onClick={() => onNavigate("volunteer")}
              className="inline-flex items-center text-white hover:underline min-h-[42px]"
            >
              Volunteer &amp; Media List
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
