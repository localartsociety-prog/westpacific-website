"use client";

import React, { useState } from "react";
import {
  Calendar,
  Paintbrush,
  CheckCircle2,
  AlertCircle,
  Accessibility,
  Eye,
  X,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// ============================================================================
// INLINE VECTOR LOGO (Recolored from Uploaded BCLA.svg)
// Deep Pacific Navy (#0F2942) + Coastal Terracotta (#B8332A)
// ============================================================================
function WestPacificLogo({ highContrast = false, size = 48 }) {
  const strokeAndText = highContrast ? "#FFFFFF" : "#0F2942";
  const mountainColor = highContrast ? "#FFD700" : "#B8332A";
  const snowCapColor = highContrast ? "#000000" : "#F8F6F2";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="WestPacific LOCAL ART Logo"
      className="shrink-0"
    >
      <rect
        x="10"
        y="10"
        width="184"
        height="206"
        stroke={strokeAndText}
        strokeWidth="6"
      />
      <rect
        x="22"
        y="22"
        width="184"
        height="206"
        stroke={strokeAndText}
        strokeWidth="6"
      />
      <text
        x="26"
        y="112"
        fill={strokeAndText}
        fontFamily="Arial Black, Inter, sans-serif"
        fontWeight="900"
        fontSize="92"
        letterSpacing="-4"
      >
        BC
      </text>
      <text
        x="26"
        y="206"
        fill={strokeAndText}
        fontFamily="Arial Black, Inter, sans-serif"
        fontWeight="900"
        fontSize="94"
      >
        L
      </text>
      <polygon points="150,118 104,206 196,206" fill={mountainColor} />
      <polygon
        points="150,124 137,150 145,149 152,158 156,153 163,157"
        fill={snowCapColor}
      />
    </svg>
  );
}

export default function WestPacificApp() {
  const [activeTab, setActiveTab] = useState("home");

  // WCAG 2.2 AA / Dyslexia Accessibility Controls
  const [accessOpen, setAccessOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [wideSpacing, setWideSpacing] = useState(true);

  // Public Early Notification Form (Pre-Launch State)
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifySaved, setNotifySaved] = useState(false);

  // Artist Interest & Pre-Application Demo State ($120 Standard / $150 Full 10x10)
  const [boothTier, setBoothTier] = useState("standard_120");
  const [artistRole, setArtistRole] = useState(
    "Market Booth ($120 Standard / $150 Full 10x10)"
  );
  const [artistForm, setArtistForm] = useState({
    name: "",
    email: "",
    discipline: "Visual Art & Illustration",
    portfolioUrl: "",
    notes: "",
  });
  const [artistError, setArtistError] = useState("");
  const [artistSubmitted, setArtistSubmitted] = useState(false);

  // Sponsor a Booth State
  const [sponsorTier, setSponsorTier] = useState(120);
  const [sponsorOrg, setSponsorOrg] = useState("");
  const [sponsorEmail, setSponsorEmail] = useState("");
  const [taxConfirmed, setTaxConfirmed] = useState(false);
  const [sponsorDone, setSponsorDone] = useState(false);

  const handleArtistSubmit = (e) => {
    e.preventDefault();
    if (!artistForm.name.trim() || !artistForm.email.trim()) {
      setArtistError("Please enter your name and email address.");
      return;
    }
    setArtistError("");
    setArtistSubmitted(true);
  };

  // Theme tokens (WCAG 2.2 AA & Dyslexia Glare Reduction)
  const bgCanvas = highContrast
    ? "bg-black text-white"
    : "bg-[#F8F6F2] text-[#111827]";
  const bgCard = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";
  const btnNavy = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#0F2942] text-white font-semibold hover:bg-[#163A5C]";
  const btnTerracotta = highContrast
    ? "bg-white text-black font-bold border-2 border-yellow-400 hover:bg-gray-200"
    : "bg-[#B8332A] text-white font-semibold hover:bg-[#962820]";

  return (
    <div
      style={{
        fontSize: `${fontScale}%`,
        letterSpacing: wideSpacing ? "0.015em" : "normal",
        lineHeight: wideSpacing ? 1.65 : 1.5,
      }}
      className={`min-h-screen flex flex-col ${bgCanvas} antialiased`}
    >
      {/* 1. COMPACT ACCESSIBILITY & STATUS BAR */}
      <div
        className={
          highContrast
            ? "bg-zinc-900 border-b-2 border-white text-white text-xs"
            : "bg-[#0F2942] text-white text-xs"
        }
      >
        <div className="max-w-5xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>
              <strong>Pre-Launch Notice:</strong> No events are scheduled yet. Artist and public
              interest lists are now open.
            </span>
          </div>

          <button
            type="button"
            onClick={() => setAccessOpen(!accessOpen)}
            aria-expanded={accessOpen}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/15 hover:bg-white/25 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-300 min-h-[28px]"
          >
            <Accessibility className="w-3.5 h-3.5" />
            <span>Reading & Contrast Settings</span>
          </button>
        </div>
      </div>

      {/* ACCESSIBILITY DRAWER (WCAG 2.2 AA & 1.4.12 Text Spacing) */}
      {accessOpen && (
        <section
          aria-label="Reading and Accessibility Settings"
          className="bg-slate-900 text-white border-b-2 border-amber-400 p-4"
        >
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setHighContrast(!highContrast)}
                className={`px-3 py-2 rounded text-xs font-bold border flex items-center gap-1.5 min-h-[36px] ${
                  highContrast
                    ? "bg-yellow-400 text-black border-white"
                    : "bg-slate-800 text-white border-slate-600"
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>{highContrast ? "7:1 High Contrast: ON" : "7:1 High Contrast"}</span>
              </button>

              <button
                type="button"
                onClick={() => setWideSpacing(!wideSpacing)}
                className={`px-3 py-2 rounded text-xs font-bold border min-h-[36px] ${
                  wideSpacing
                    ? "bg-amber-400 text-black border-white"
                    : "bg-slate-800 text-white border-slate-600"
                }`}
              >
                {wideSpacing ? "Dyslexia Spacing: ON" : "Dyslexia Spacing: OFF"}
              </button>

              <div className="flex items-center gap-1">
                {[100, 115, 130].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFontScale(size)}
                    className={`px-2.5 py-1.5 rounded text-xs font-bold border min-h-[36px] ${
                      fontScale === size
                        ? "bg-amber-400 text-black border-white"
                        : "bg-slate-800 text-white border-slate-600"
                    }`}
                  >
                    {size}%
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setAccessOpen(false)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs border border-slate-600 min-h-[36px]"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>
          </div>
        </section>
      )}

      {/* 2. SIMPLIFIED HEADER (Hick's Law: 3 Links + 1 Primary Button) */}
      <header
        className={
          highContrast
            ? "bg-black border-b-2 border-white sticky top-0 z-30"
            : "bg-[#F8F6F2]/95 backdrop-blur border-b border-[#E2DDD5] sticky top-0 z-30"
        }
      >
        <div className="max-w-5xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setActiveTab("home")}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#B8332A] rounded p-1"
          >
            <WestPacificLogo highContrast={highContrast} size={46} />
            <div>
              <span className="block text-xl font-extrabold tracking-tight leading-none text-[#0F2942] dark:text-white">
                WestPacific LOCAL ART
              </span>
              <span
                className={`block text-xs font-medium mt-1 ${
                  highContrast ? "text-yellow-300" : "text-slate-600"
                }`}
              >
                Greater Vancouver, BC
              </span>
            </div>
          </button>

          <nav aria-label="Primary Navigation" className="flex flex-wrap items-center gap-2">
            {[
              { id: "home", label: "Overview" },
              { id: "artists", label: "Artist Demo ($120–$150)" },
              { id: "about", label: "About & Mandate" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold min-h-[42px] focus:outline-none focus:ring-2 focus:ring-[#B8332A] ${
                  activeTab === item.id
                    ? highContrast
                      ? "bg-white text-black"
                      : "bg-[#0F2942] text-white"
                    : highContrast
                    ? "text-white hover:bg-zinc-800"
                    : "text-[#0F2942] hover:bg-slate-200/70"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setActiveTab("sponsor")}
              className={`px-4 py-2 rounded-lg text-sm min-h-[42px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B8332A] ${btnTerracotta}`}
            >
              Sponsor a Booth
            </button>
          </nav>
        </div>
      </header>

      {/* 3. MAIN CONTENT */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 space-y-10">
        {activeTab === "home" && (
          <div className="space-y-10">
            {/* LEVEL 1: HERO & CORE VALUE PROPOSITION (Future Tense, Short Sentences) */}
            <section className={`rounded-2xl p-6 md:p-10 ${bgCard}`}>
              <div className="max-w-[65ch] space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#CCFBF1] text-[#115E59]">
                  Launching Soon in Greater Vancouver • $0 Public Entry
                </span>

                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F2942] leading-tight">
                  Connecting local artists and the public in Greater Vancouver.
                </h1>

                <p className="text-base md:text-lg text-slate-700">
                  <strong>WestPacific LOCAL ART</strong> will organize outdoor and indoor art
                  markets, exhibitions, and live concerts. Every event will be free for the public
                  to attend. Local artists will keep 100% of their sales. Public art workshops will
                  also launch in a future phase.
                </p>
              </div>

              {/* DUAL AUDIENCE ROUTING CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Card A: Artists & Musicians */}
                <div className="rounded-xl p-6 border-2 border-[#B8332A]/30 bg-[#B8332A]/[0.03] flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B8332A]">
                      <Paintbrush className="w-4 h-4" />
                      <span>For Local Artists & Musicians</span>
                    </span>

                    <h2 className="text-xl font-bold text-[#0F2942]">
                      Low Booth Fees ($120 – $150) & 0% Sales Commission
                    </h2>

                    <p className="text-sm text-slate-700">
                      We never charge application or jury fees, and we never take a cut of your art
                      sales. Musicians and workshop instructors receive paid honoraria.
                    </p>

                    <ul className="text-sm space-y-2 pt-1 text-slate-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#B8332A] shrink-0 mt-1" />
                        <span>
                          <strong>$120 CAD Standard Booth:</strong> Dedicated 6ft table space.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#B8332A] shrink-0 mt-1" />
                        <span>
                          <strong>$150 CAD Full 10x10 Booth:</strong> Dedicated tent space.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#B8332A] shrink-0 mt-1" />
                        <span>
                          <strong>$0 CAD Due Now:</strong> Join the artist interest list for our
                          first market.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTab("artists")}
                    className={`w-full py-3 px-5 rounded-lg text-sm ${btnTerracotta}`}
                  >
                    Join the Artist Interest List →
                  </button>
                </div>

                {/* Card B: Public Visitors */}
                <div className="rounded-xl p-6 border-2 border-[#0F2942]/20 bg-[#0F2942]/[0.02] flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#115E59]">
                      <Calendar className="w-4 h-4" />
                      <span>For Public Visitors</span>
                    </span>

                    <h2 className="text-xl font-bold text-[#0F2942]">
                      Upcoming Free Markets, Exhibitions & Concerts
                    </h2>

                    <p className="text-sm text-slate-700">
                      We are currently preparing our first season in Greater Vancouver. No events
                      are scheduled or planned yet.
                    </p>

                    <ul className="text-sm space-y-2 pt-1 text-slate-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#115E59] shrink-0 mt-1" />
                        <span>
                          <strong>$0 Admission:</strong> Every market and concert will be free to
                          enter.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#115E59] shrink-0 mt-1" />
                        <span>
                          <strong>Step-Free Access:</strong> All venues will sit near TransLink
                          SkyTrain and bus stops.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Pre-Launch Email Alert Box */}
                  {notifySaved ? (
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-600 text-emerald-950 text-xs font-semibold">
                      Thank you. We will email {notifyEmail} as soon as our first event date is
                      scheduled.
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (notifyEmail.trim()) setNotifySaved(true);
                      }}
                      className="flex flex-col sm:flex-row gap-2"
                    >
                      <input
                        type="email"
                        required
                        value={notifyEmail}
                        onChange={(e) => setNotifyEmail(e.target.value)}
                        placeholder="Enter your email for first event dates"
                        aria-label="Email address for future event updates"
                        className="flex-1 px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white min-h-[42px]"
                      />
                      <button
                        type="submit"
                        className={`px-4 py-2.5 rounded-lg text-sm shrink-0 min-h-[42px] ${btnNavy}`}
                      >
                        Notify Me
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>

            {/* LEVEL 2: CLEAR EMPTY SCHEDULE STATE (No Fake Dates) */}
            <section
              aria-label="Upcoming Event Schedule Status"
              className={`rounded-2xl p-6 md:p-8 ${bgCard}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-2xl font-bold text-[#0F2942]">
                    Upcoming Free Markets, Exhibitions & Concerts
                  </h2>
                  <p className="text-sm text-slate-600">
                    Current Schedule Status: No events are scheduled or planned yet.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 self-start md:self-center">
                  2026–2027 Dates TBA
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 text-sm">
                <div className="p-5 rounded-xl bg-[#F8F6F2] border border-[#E2DDD5] space-y-2">
                  <span className="text-xs font-bold uppercase text-[#B8332A]">
                    1. Art Markets (Future)
                  </span>
                  <h3 className="font-bold text-base text-[#0F2942]">
                    Outdoor & Indoor Local Art Markets
                  </h3>
                  <p className="text-slate-700 text-xs">
                    Local visual artists, ceramicists, and print creators will sell original works
                    directly to the public. No dates are scheduled yet.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F8F6F2] border border-[#E2DDD5] space-y-2">
                  <span className="text-xs font-bold uppercase text-[#0F2942]">
                    2. Exhibitions (Future)
                  </span>
                  <h3 className="font-bold text-base text-[#0F2942]">
                    Community Art Exhibitions
                  </h3>
                  <p className="text-slate-700 text-xs">
                    Free public exhibitions will showcase emerging Greater Vancouver artists with
                    paid CARFAC honoraria. No dates are scheduled yet.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#F8F6F2] border border-[#E2DDD5] space-y-2">
                  <span className="text-xs font-bold uppercase text-[#115E59]">
                    3. Live Music (Future)
                  </span>
                  <h3 className="font-bold text-base text-[#0F2942]">
                    Free Public Plaza Concerts
                  </h3>
                  <p className="text-slate-700 text-xs">
                    Local musicians will perform live acoustic sets with fair union-scale honoraria.
                    Public workshops will also follow in the future.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* TAB 2: SIMPLIFIED ARTIST / VENDOR DEMO ($120 - $150) */}
        {activeTab === "artists" && (
          <section className={`rounded-2xl p-6 md:p-8 space-y-6 ${bgCard}`}>
            <div className="max-w-[65ch] space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#B8332A]/15 text-[#B8332A]">
                Pre-Launch Artist Interest List • $0 Due Today
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#0F2942]">
                Low Booth Fees ($120 – $150) & 0% Sales Commission
              </h1>
              <p className="text-sm text-slate-700">
                We never charge application or jury fees, and we never take a cut of your art
                sales. Musicians and workshop instructors receive paid honoraria. Because no market
                dates are scheduled yet, this form registers your interest for our first call for
                artists.
              </p>
            </div>

            {/* 2 Clear Booth Tiers (No Shared Tables) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setBoothTier("standard_120")}
                className={`text-left rounded-xl p-5 border-2 transition-all ${
                  boothTier === "standard_120"
                    ? "border-[#0F2942] bg-[#0F2942]/[0.04]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#0F2942]">
                    Option 1 • Dedicated Space
                  </span>
                  <span className="text-2xl font-extrabold text-[#0F2942]">$120 CAD</span>
                </div>
                <h2 className="text-base font-bold mt-1 text-[#0F2942]">
                  Standard Booth (6ft Table Space)
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Individual 6ft table space. No shared tables. Includes 1 table, 2 chairs, and
                  100% of your sales.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setBoothTier("full_150")}
                className={`text-left rounded-xl p-5 border-2 transition-all ${
                  boothTier === "full_150"
                    ? "border-[#B8332A] bg-[#B8332A]/[0.04]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#B8332A]">
                    Option 2 • Full Tent Footprint
                  </span>
                  <span className="text-2xl font-extrabold text-[#B8332A]">$150 CAD</span>
                </div>
                <h2 className="text-base font-bold mt-1 text-[#0F2942]">
                  Full 10x10 Booth (Tent Space)
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Full 10ft x 10ft space for larger displays. No shared tables. You keep 100% of
                  your sales.
                </p>
              </button>
            </div>

            {artistSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border-2 border-emerald-600 text-emerald-950 space-y-2">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span>Interest Registered for {artistForm.name}</span>
                </h3>
                <p className="text-sm">
                  We saved your profile under <strong>{artistForm.email}</strong> for a{" "}
                  <strong>
                    {boothTier === "standard_120"
                      ? "$120 Standard Booth"
                      : "$150 Full 10x10 Booth"}
                  </strong>
                  . We will email you as soon as our first market date is scheduled.
                </p>
                <button
                  type="button"
                  onClick={() => setArtistSubmitted(false)}
                  className="px-4 py-2 rounded bg-emerald-800 text-white text-xs font-bold"
                >
                  Update Information
                </button>
              </div>
            ) : (
              <form onSubmit={handleArtistSubmit} className="space-y-4 text-sm pt-2">
                {artistError && (
                  <div className="p-3 rounded bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{artistError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1">1. How would you like to take part?</label>
                    <select
                      value={artistRole}
                      onChange={(e) => setArtistRole(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 min-h-[42px]"
                    >
                      <option>Market Booth ($120 Standard / $150 Full 10x10)</option>
                      <option>Art Exhibition (Paid CARFAC Honorarium)</option>
                      <option>Live Music Stage (Paid Honorarium)</option>
                      <option>Future Workshop Instructor (Paid Honorarium)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">2. Primary Art Discipline</label>
                    <select
                      value={artistForm.discipline}
                      onChange={(e) =>
                        setArtistForm({ ...artistForm, discipline: e.target.value })
                      }
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 min-h-[42px]"
                    >
                      <option>Visual Art & Illustration</option>
                      <option>Ceramics & Pottery</option>
                      <option>Printmaking & Photography</option>
                      <option>Textiles & Wearable Art</option>
                      <option>Live Music Performance</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1">3. Your Name or Studio Name *</label>
                    <input
                      type="text"
                      value={artistForm.name}
                      onChange={(e) => setArtistForm({ ...artistForm, name: e.target.value })}
                      placeholder="e.g., Pacific Clay Studio"
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 min-h-[42px]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1">4. Email Address *</label>
                    <input
                      type="email"
                      value={artistForm.email}
                      onChange={(e) => setArtistForm({ ...artistForm, email: e.target.value })}
                      placeholder="artist@example.ca"
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 min-h-[42px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1">
                      5. Instagram or Website Link (No PDF CV Needed)
                    </label>
                    <input
                      type="text"
                      value={artistForm.portfolioUrl}
                      onChange={(e) =>
                        setArtistForm({ ...artistForm, portfolioUrl: e.target.value })
                      }
                      placeholder="@yourstudio or https://yourart.ca"
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 min-h-[42px]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1">
                      6. Accessibility Needs (Optional)
                    </label>
                    <input
                      type="text"
                      value={artistForm.notes}
                      onChange={(e) => setArtistForm({ ...artistForm, notes: e.target.value })}
                      placeholder="e.g., Step-free unloading, quiet corner"
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-slate-900 min-h-[42px]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-600">
                    No payment is collected today. We will contact you when our first dates are
                    confirmed.
                  </span>
                  <button
                    type="submit"
                    className={`px-6 py-3 rounded-lg text-sm min-h-[44px] ${btnTerracotta}`}
                  >
                    Join Artist Interest List
                  </button>
                </div>
              </form>
            )}
          </section>
        )}

        {/* TAB 3: ABOUT & MANDATE (Short, Future Tense) */}
        {activeTab === "about" && (
          <section className={`rounded-2xl p-6 md:p-8 space-y-6 ${bgCard}`}>
            <div className="max-w-[65ch] space-y-2">
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#0F2942]">
                About WestPacific LOCAL ART
              </h1>
              <p className="text-sm text-slate-700">
                We are a registered British Columbia non-profit society in Greater Vancouver. We
                will organize free public art events and keep participation costs low for local
                artists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-5 rounded-xl bg-[#F8F6F2] border border-[#E2DDD5]">
                <h2 className="font-bold text-[#0F2942] mb-1">1. Promote Local Art</h2>
                <p className="text-slate-700 text-xs">
                  We will create outdoor and indoor markets, exhibitions, and concerts where local
                  artists sell their original work directly to the public.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#F8F6F2] border border-[#E2DDD5]">
                <h2 className="font-bold text-[#0F2942] mb-1">2. Keep Artist Fees Low</h2>
                <p className="text-slate-700 text-xs">
                  We will keep booth fees affordable ($120 standard / $150 full 10x10 booth) with
                  0% commission so artists of all income levels can take part.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#F8F6F2] border border-[#E2DDD5]">
                <h2 className="font-bold text-[#0F2942] mb-1">3. Free Access for Everyone</h2>
                <p className="text-slate-700 text-xs">
                  All markets, exhibitions, and concerts will be free for the public to attend with
                  no ticket required.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[#F8F6F2] border border-[#E2DDD5]">
                <h2 className="font-bold text-[#0F2942] mb-1">4. Founding Directors</h2>
                <p className="text-slate-700 text-xs">
                  Jeane Vinot, Valeriya Nyukalova, and François Forestier (Vancouver, BC).
                </p>
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: SPONSOR A BOOTH */}
        {activeTab === "sponsor" && (
          <section className={`rounded-2xl p-6 md:p-8 space-y-6 ${bgCard}`}>
            <div className="max-w-[65ch] space-y-2">
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#0F2942]">
                Sponsor a Local Artist Booth
              </h1>
              <p className="text-sm text-slate-700">
                Local businesses and community supporters can fund an artist booth for our upcoming
                first season.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-400 text-amber-950 text-xs">
              <strong>Tax Disclosure:</strong> WestPacific LOCAL ART Society is a registered BC
              non-profit society, not a registered charity. Contributions do not qualify for CRA
              charitable tax receipts. Businesses receive a Commercial Sponsorship Invoice.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  amount: 120,
                  title: "Sponsor 1 Standard Booth",
                  desc: "Covers one $120 Standard Booth for a local artist.",
                },
                {
                  amount: 150,
                  title: "Sponsor 1 Full 10x10 Booth",
                  desc: "Covers one $150 Full 10x10 Booth for a local artist.",
                },
                {
                  amount: 500,
                  title: "Sponsor a Live Music Set",
                  desc: "Funds fair honoraria for local musicians at a public plaza.",
                },
              ].map((item) => (
                <button
                  key={item.amount}
                  type="button"
                  onClick={() => setSponsorTier(item.amount)}
                  className={`text-left p-5 rounded-xl border-2 ${
                    sponsorTier === item.amount
                      ? "border-[#B8332A] bg-[#B8332A]/[0.04]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p className="text-2xl font-extrabold text-[#0F2942]">${item.amount} CAD</p>
                  <p className="font-bold text-sm mt-1">{item.title}</p>
                  <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                </button>
              ))}
            </div>

            {sponsorDone ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-600 text-emerald-950 text-sm">
                Thank you. Commercial Sponsorship Invoice for <strong>${sponsorTier} CAD</strong>{" "}
                has been sent to <strong>{sponsorEmail || "your email"}</strong>.
              </div>
            ) : (
              <div className="max-w-md space-y-3 text-sm">
                <div>
                  <label className="block font-bold mb-1">Business or Supporter Name</label>
                  <input
                    type="text"
                    value={sponsorOrg}
                    onChange={(e) => setSponsorOrg(e.target.value)}
                    placeholder="e.g., Main Street Coffee"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Email for Invoice</label>
                  <input
                    type="email"
                    value={sponsorEmail}
                    onChange={(e) => setSponsorEmail(e.target.value)}
                    placeholder="billing@business.ca"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-slate-900"
                  />
                </div>
                <label className="flex items-start gap-2 text-xs cursor-pointer">
                  <input
                    type="checkbox"
                    checked={taxConfirmed}
                    onChange={(e) => setTaxConfirmed(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    I understand this contribution receives a commercial invoice, not a charitable
                    tax receipt.
                  </span>
                </label>
                <button
                  type="button"
                  disabled={!taxConfirmed}
                  onClick={() => setSponsorDone(true)}
                  className={`px-5 py-2.5 rounded-lg text-xs ${
                    taxConfirmed
                      ? btnTerracotta
                      : "bg-slate-300 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  Request ${sponsorTier} CAD Sponsorship Invoice
                </button>
              </div>
            )}
          </section>
        )}
      </main>

      {/* 4. CLEAN 2-COLUMN FOOTER */}
      <footer
        className={
          highContrast
            ? "bg-black border-t-2 border-white text-white mt-12"
            : "bg-[#0F2942] text-white mt-12"
        }
      >
        <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
          <div className="space-y-2.5">
            <div className="flex items-center gap-3">
              <WestPacificLogo highContrast={true} size={40} />
              <div>
                <p className="font-extrabold text-sm">WestPacific LOCAL ART</p>
                <p className="text-slate-300">
                  WestPacific LOCAL ART Society • Registered BC Non-Profit Society
                </p>
              </div>
            </div>
            <p className="text-slate-200 leading-relaxed">
              We operate on the unceded traditional territories of the xʷməθkʷəy̓əm (Musqueam),
              Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations.
            </p>
          </div>

          <div className="space-y-2 md:pl-8">
            <p className="font-bold uppercase tracking-wider text-amber-300">Quick Links</p>
            <div className="flex flex-wrap gap-4 pt-1 font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab("artists")}
                className="hover:underline"
              >
                Artist Booths ($120 – $150)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("about")}
                className="hover:underline"
              >
                About & Mandate
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("sponsor")}
                className="hover:underline"
              >
                Sponsor a Booth
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
