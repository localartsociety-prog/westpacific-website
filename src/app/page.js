"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Sparkles,
  Accessibility,
  CheckCircle2,
  AlertCircle,
  Search,
  Filter,
  X,
  Download,
  ShieldCheck,
  Paintbrush,
  Train,
  Bike,
  Sun,
  Eye,
  RotateCcw,
  Database,
} from "lucide-react";

// ============================================================================
// INLINE VECTOR LOGO COMPONENT (Recolored from Uploaded BCLA.svg)
// Palette: Deep Pacific Navy (#0F2942) + Coastal Cedar Terracotta (#B8332A)
// ============================================================================
function WestPacificLogo({ highContrast = false, size = 50 }) {
  const strokeAndText = highContrast ? "#FFFFFF" : "#0F2942";
  const mountainColor = highContrast ? "#FFD700" : "#B8332A";
  const snowCapColor = highContrast ? "#000000" : "#FAF8F5";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="WestPacific LOCAL ART Society Logo"
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

// ============================================================================
// SAMPLE DATA (Greater Vancouver Events, Workshops, Artists)
// ============================================================================
const EVENTS_DATA = [
  {
    id: "evt-1",
    title: "Mount Pleasant Summer Art Market & Live Acoustic Stage",
    category: "Markets",
    date: "Saturday, June 20, 2026",
    time: "11:00 AM – 5:00 PM",
    venue: "šxʷƛ̓ənəq Xwtl'e7énḵ Square (Vancouver Art Gallery North Plaza)",
    weatherStatus: "Confirmed Outdoor — Rain or Shine (Covered Artist Tents)",
    admission: "$0 Admission — No Ticket Required",
    summary:
      "Browse 45+ local visual artists, ceramicists, and print creators alongside free acoustic sets by Vancouver musicians.",
    transit: {
      skytrain:
        "Vancouver City Centre Station (Canada Line) — 120m flat walk via elevator on West Georgia St.",
      bus: "TransLink Routes 2, 4, 7, 10, 14, 16, 19, 22, 50 stop within 1 block.",
      bike: "Mobi Bike Share Dock #0012 at Hornby St & Nelson St (60m away).",
    },
    accessSpecs: {
      surface: "100% paved flat concrete plaza. Zero grass or gravel transitions.",
      ramps:
        "Step-free curb cuts on Hornby St, Howe St, and West Georgia St (max slope 1:20 / 5%).",
      aisles:
        "Minimum 2.4-metre (8-foot) clear wheelchair turning aisles between all artist booths.",
      washrooms:
        "2 wheelchair-accessible single-stall washrooms on site (92cm door clearance).",
      sensory:
        "Dedicated low-sensory Quiet Tent at the northwest corner with ear defenders and seating.",
    },
  },
  {
    id: "evt-2",
    title: "Eastside Community Print & Ceramic Exhibition",
    category: "Exhibitions",
    date: "Sunday, July 12, 2026",
    time: "12:00 PM – 6:00 PM",
    venue: "Roundhouse Community Arts & Recreation Centre — Exhibition Hall",
    weatherStatus: "Indoor Climate-Controlled Venue",
    admission: "$0 Admission — No Ticket Required",
    summary:
      "A juried-free community exhibition featuring 30 emerging Greater Vancouver artists with live artist talks at 2:00 PM.",
    transit: {
      skytrain:
        "Yaletown-Roundhouse Station (Canada Line) — 150m step-free route along Pacific Blvd.",
      bus: "TransLink Route 23 (Main St Station / English Bay) stops directly outside on Davie St.",
      bike: "Mobi Bike Share Dock at Davie St & Pacific Blvd.",
    },
    accessSpecs: {
      surface: "Smooth indoor polished concrete floor.",
      ramps: "Automatic power-assisted entry doors (96cm wide) at level grade.",
      aisles:
        "3.0-metre gallery viewing corridors with rested bench seating every 10 metres.",
      washrooms:
        "4 accessible indoor washrooms with adult change table and grab bars.",
      sensory:
        "No amplified bass music; gallery lighting set to steady warm 3000K (zero strobe).",
    },
  },
  {
    id: "evt-3",
    title: "Sunset Jazz & Indie Folk Concert in the Plaza",
    category: "Concerts",
    date: "Saturday, August 8, 2026",
    time: "4:00 PM – 7:30 PM",
    venue: "Commercial Drive Grandview Park Pavilion",
    weatherStatus: "Outdoor Open-Air Stage — Rain or Shine",
    admission: "$0 Admission — No Ticket Required",
    summary:
      "Four local bands performing original sets. All performers receive fair CFM union-scale honoraria.",
    transit: {
      skytrain:
        "Commercial-Broadway Station (Expo & Millennium Lines) — 850m north or take Route 20 bus.",
      bus: "TransLink Route 20 stops at Commercial Dr & Charles St (30m from park entrance).",
      bike: "Mobi Bike Share Dock at Commercial Dr & Napier St.",
    },
    accessSpecs: {
      surface:
        "Paved perimeter pathways leading to front-of-stage wheelchair viewing deck.",
      ramps: "Level entry from Commercial Drive sidewalk onto paved park plaza.",
      aisles:
        "Reserved 6m x 4m step-free seating area with companion chairs at stage left.",
      washrooms: "Accessible fieldhouse washrooms open until 8:00 PM.",
      sensory:
        "Sound levels capped at 82 dBA at 15 metres in compliance with Vancouver Noise By-law.",
    },
  },
];

const WORKSHOPS_DATA = [
  {
    id: "ws-1",
    title: "Intro to Relief Block Printing on Cotton Tote Bags",
    instructor: "Maya Lin (CARFAC Paid Artist Instructor)",
    date: "Saturday, June 20, 2026",
    time: "1:00 PM – 2:30 PM",
    location: "Workshop Tent A — Vancouver Art Gallery North Plaza",
    skillLevel: "Beginners Welcome (Ages 12+)",
    seatsLeft: 6,
    totalSeats: 16,
    suppliesIncluded:
      "All linocut blocks, water-based inks, brayers, safety bench hooks, and 2 organic cotton tote bags.",
    safetyBadge: "BC Criminal Records Review Act (CRRA) Cleared Instructor",
  },
  {
    id: "ws-2",
    title: "Hand-Built Pinch Pot Ceramics with Local Clay",
    instructor: "Samuel Cho (Visual Artist & Ceramicist)",
    date: "Sunday, July 12, 2026",
    time: "2:00 PM – 3:30 PM",
    location: "Roundhouse Studio B — Yaletown",
    skillLevel: "Beginners Welcome (All Ages)",
    seatsLeft: 3,
    totalSeats: 14,
    suppliesIncluded:
      "2 lbs of stoneware clay, wooden sculpting ribs, slip, and kiln firing pickup voucher.",
    safetyBadge: "BC Criminal Records Review Act (CRRA) Cleared Instructor",
  },
  {
    id: "ws-3",
    title: "Botanical Watercolour Illustration from Pacific Flora",
    instructor: "Claire Moreau (Botanical Illustrator)",
    date: "Saturday, August 8, 2026",
    time: "2:30 PM – 4:00 PM",
    location: "Grandview Park Fieldhouse Studio",
    skillLevel: "Beginners Welcome (Adults & Youth)",
    seatsLeft: 9,
    totalSeats: 18,
    suppliesIncluded:
      "300gsm cold-press cotton paper, artist-grade pigment pans, round brushes, and take-home palette.",
    safetyBadge: "BC Criminal Records Review Act (CRRA) Cleared Instructor",
  },
];

const DIRECTORY_ARTISTS = [
  {
    id: "art-1",
    name: "Elena Rostova",
    discipline: "Ceramics & Stoneware",
    neighbourhood: "Mount Pleasant, Vancouver",
    bio: "Small-batch functional stoneware inspired by coastal tide pools and basalt rock formations.",
  },
  {
    id: "art-2",
    name: "Marcus Vance",
    discipline: "Linocut & Serigraph Print",
    neighbourhood: "East Vancouver",
    bio: "Hand-pulled relief prints documenting heritage storefronts and rain-soaked alleys in Greater Vancouver.",
  },
  {
    id: "art-3",
    name: "Sora Takahashi",
    discipline: "Textile & Natural Dye Art",
    neighbourhood: "Kitsilano, Vancouver",
    bio: "Indigo and alder-cone dyed linen wall hangings woven on a floor loom.",
  },
  {
    id: "art-4",
    name: "Devon K. Brass Trio",
    discipline: "Live Acoustic Jazz & Brass",
    neighbourhood: "New Westminster / Vancouver",
    bio: "Instrumental brass and upright bass trio performing at public plazas and community markets.",
  },
];

export default function WestPacificApp() {
  const [activePage, setActivePage] = useState("home");

  // Accessibility states (WCAG 2.2 AA/AAA)
  const [accessDrawerOpen, setAccessDrawerOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [pauseMotion, setPauseMotion] = useState(false);
  const [plainLanguageLang, setPlainLanguageLang] = useState("en");

  // Events filter state
  const [eventCategory, setEventCategory] = useState("All");
  const [eventSearch, setEventSearch] = useState("");

  // Directory filter state
  const [dirDiscipline, setDirDiscipline] = useState("All");
  const [dirSearch, setDirSearch] = useState("");

  // Workshop 3-Field Guest Checkout Modal state
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    contact: "",
    accommodations: "",
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(null);
  const [bookingError, setBookingError] = useState("");

  // Artist Application & Booth Calculator state ($120 Standard / $150 Full 10x10)
  const [selectedBoothTier, setSelectedBoothTier] = useState("standard_120");
  const [opportunityType, setOpportunityType] = useState(
    "Market Booth ($120 Standard / $150 Full 10x10)"
  );
  const [artistForm, setArtistForm] = useState({
    artistName: "",
    email: "",
    phone: "",
    discipline: "Visual Art / Painting / Illustration",
    portfolioLink: "",
    accommodations: "",
    photoName: "",
  });
  const [autoSaveTimestamp, setAutoSaveTimestamp] = useState("Draft auto-saved");
  const [artistSubmitted, setArtistSubmitted] = useState(false);
  const [artistFormError, setArtistFormError] = useState("");

  // Sponsor a Booth state
  const [supportAmount, setSupportAmount] = useState(120);
  const [supporterBusinessName, setSupporterBusinessName] = useState("");
  const [supporterEmail, setSupporterEmail] = useState("");
  const [taxAcknowledge, setTaxAcknowledge] = useState(false);
  const [invoiceGenerated, setInvoiceGenerated] = useState(false);

  // Close drawers/modals with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setAccessDrawerOpen(false);
        setSelectedWorkshop(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const updateArtistField = (field, value) => {
    setArtistForm((prev) => ({ ...prev, [field]: value }));
    const now = new Date();
    setAutoSaveTimestamp(
      `Draft auto-saved locally at ${now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`
    );
  };

  const filteredEvents = EVENTS_DATA.filter((evt) => {
    const matchesCat = eventCategory === "All" || evt.category === eventCategory;
    const matchesSearch =
      evt.title.toLowerCase().includes(eventSearch.toLowerCase()) ||
      evt.venue.toLowerCase().includes(eventSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredDirectory = DIRECTORY_ARTISTS.filter((artist) => {
    const matchesDisc =
      dirDiscipline === "All" || artist.discipline.includes(dirDiscipline);
    const matchesSearch =
      artist.name.toLowerCase().includes(dirSearch.toLowerCase()) ||
      artist.bio.toLowerCase().includes(dirSearch.toLowerCase());
    return matchesDisc && matchesSearch;
  });

  const handleWorkshopSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.fullName.trim() || !bookingForm.contact.trim()) {
      setBookingError(
        "Please enter both your name and an email or phone number so we can send your seat confirmation."
      );
      return;
    }
    setBookingError("");
    setBookingConfirmed({
      workshop: selectedWorkshop,
      attendee: bookingForm.fullName,
      contact: bookingForm.contact,
      code: `WP-${Math.floor(1000 + Math.random() * 9000)}`,
    });
    setSelectedWorkshop(null);
  };

  const handleArtistSubmit = (e) => {
    e.preventDefault();
    if (!artistForm.artistName.trim() || !artistForm.email.trim()) {
      setArtistFormError(
        "Please enter your Artist Name and Email Address before submitting your application."
      );
      return;
    }
    setArtistFormError("");
    setArtistSubmitted(true);
  };

  const bgMain = highContrast
    ? "bg-black text-white"
    : "bg-[#FAF8F5] text-[#111827]";
  const bgCard = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-slate-200 text-[#111827] shadow-sm";
  const bgHeader = highContrast
    ? "bg-black border-b-2 border-white text-white"
    : "bg-[#FAF8F5] border-b border-slate-200 text-[#0F2942]";
  const btnPrimary = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#0F2942] text-white font-semibold hover:bg-[#163a5c]";
  const btnAccent = highContrast
    ? "bg-white text-black font-bold border-2 border-yellow-400 hover:bg-gray-200"
    : "bg-[#B8332A] text-white font-semibold hover:bg-[#962820]";

  return (
    <div
      style={{ fontSize: `${fontScale}%` }}
      className={`min-h-screen flex flex-col ${bgMain} ${
        pauseMotion ? "" : "transition-colors duration-200"
      } font-sans`}
    >
      {/* 1. TOP UTILITY BAR */}
      <div
        className={
          highContrast
            ? "bg-zinc-900 border-b-2 border-white text-white text-sm"
            : "bg-[#0F2942] text-white text-sm"
        }
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
            <span>
              <strong>WestPacific LOCAL ART Society</strong> — Registered BC Non-Profit Society
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setAccessDrawerOpen(!accessDrawerOpen)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/15 hover:bg-white/25 font-medium focus:outline-none focus:ring-2 focus:ring-amber-300 min-h-[28px]"
              aria-expanded={accessDrawerOpen}
            >
              <Accessibility className="w-4 h-4" />
              <span>Accessibility & Languages</span>
            </button>

            <button
              type="button"
              onClick={() => setActivePage("sponsor")}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-amber-300 px-1 py-0.5 rounded"
            >
              BIA & Corporate Sponsors
            </button>

            <button
              type="button"
              onClick={() => setActivePage("governance")}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-amber-300 px-1 py-0.5 rounded"
            >
              About & Governance
            </button>

            <button
              type="button"
              onClick={() => setActivePage("architecture")}
              className="inline-flex items-center gap-1 text-amber-300 hover:underline focus:outline-none focus:ring-2 focus:ring-amber-300 px-1 py-0.5 rounded"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Supabase SQL</span>
            </button>
          </div>
        </div>
      </div>

      {/* PERSISTENT ACCESSIBILITY DRAWER */}
      {accessDrawerOpen && (
        <section
          aria-label="Accessibility and Language Controls"
          className={
            highContrast
              ? "bg-black border-b-4 border-yellow-400 p-6 text-white"
              : "bg-slate-900 text-white p-6 border-b border-slate-700"
          }
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <Accessibility className="w-6 h-6 text-amber-400" />
                <h2 className="text-lg font-bold">
                  Accessibility, Display & Plain-Language Controls (WCAG 2.2 Level AA/AAA)
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setAccessDrawerOpen(false)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 border border-slate-500 min-h-[32px]"
              >
                <X className="w-4 h-4" />
                <span>Close (Esc)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <p className="font-semibold text-amber-300 text-sm uppercase tracking-wider">
                  1. Contrast & Motion
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setHighContrast(!highContrast)}
                    className={`px-3 py-2 rounded font-medium border flex items-center gap-2 ${
                      highContrast
                        ? "bg-yellow-400 text-black border-white"
                        : "bg-slate-800 text-white border-slate-600"
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>
                      {highContrast ? "7:1 High-Contrast: ON" : "Enable 7:1 High-Contrast"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPauseMotion(!pauseMotion)}
                    className={`px-3 py-2 rounded font-medium border ${
                      pauseMotion
                        ? "bg-amber-400 text-black border-white"
                        : "bg-slate-800 text-white border-slate-600"
                    }`}
                  >
                    {pauseMotion ? "Animations Paused" : "Pause All Motion"}
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-amber-300 text-sm uppercase tracking-wider">
                  2. Text Size Scaling
                </p>
                <div className="flex items-center gap-2">
                  {[100, 115, 130].map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      onClick={() => setFontScale(scale)}
                      className={`px-3.5 py-2 rounded font-semibold border ${
                        fontScale === scale
                          ? "bg-amber-400 text-black border-white"
                          : "bg-slate-800 text-white border-slate-600"
                      }`}
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
                    className="px-3 py-2 rounded bg-slate-800 hover:bg-slate-700 text-xs border border-slate-600"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-amber-300 text-sm uppercase tracking-wider">
                  3. Plain-Language Summary
                </p>
                <div className="flex gap-2 mb-2">
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
                      className={`px-2.5 py-1 rounded text-xs font-semibold border ${
                        plainLanguageLang === lang.code
                          ? "bg-amber-400 text-black border-white"
                          : "bg-slate-800 text-white border-slate-600"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {plainLanguageLang === "en" &&
                    "We organize free public art markets, exhibitions, concerts, and workshops in Greater Vancouver. Local artists pay low booth fees ($120 to $150) and keep 100% of their sales."}
                  {plainLanguageLang === "fr" &&
                    "Nous organisons des marchés d'art, concerts et ateliers gratuits pour le public à Vancouver. Les artistes locaux bénéficient de tarifs réduits (120 $ à 150 $) et gardent 100 % de leurs ventes."}
                  {plainLanguageLang === "zh" &&
                    "我们在大温哥华地区举办免费公共艺术市集、音乐会与工作坊。本地艺术家仅需支付低廉展位费（$120至$150），并保留100%销售收入。"}
                  {plainLanguageLang === "pa" &&
                    "ਅਸੀਂ ਵੈਨਕੂਵਰ ਵਿੱਚ ਮੁਫ਼ਤ ਕਲਾ ਬਾਜ਼ਾਰ, ਸੰਗੀਤ ਅਤੇ ਵਰਕਸ਼ਾਪਾਂ ਦਾ ਆਯੋਜਨ ਕਰਦੇ ਹਾਂ। ਸਥਾਨਕ ਕਲਾਕਾਰ ਘੱਟ ਫੀਸ ($120–$150) ਦਿੰਦੇ ਹਨ ਅਤੇ ਆਪਣੀ ਵਿਕਰੀ ਦਾ 100% ਰੱਖਦੇ ਹਨ।"}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. MAIN NAVIGATION BAR */}
      <header className={`sticky top-0 z-30 ${bgHeader}`}>
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setActivePage("home")}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#B8332A] rounded p-1"
          >
            <WestPacificLogo highContrast={highContrast} size={50} />
            <div>
              <span className="block text-lg font-extrabold tracking-tight leading-none">
                WestPacific LOCAL ART
              </span>
              <span
                className={`block text-xs font-medium mt-1 ${
                  highContrast ? "text-yellow-300" : "text-slate-600"
                }`}
              >
                Society • Greater Vancouver, BC
              </span>
            </div>
          </button>

          <nav aria-label="Main Navigation" className="flex flex-wrap items-center gap-2">
            {[
              { id: "events", label: "Free Events & Markets" },
              { id: "workshops", label: "Workshops" },
              { id: "artists", label: "Artist Opportunities" },
              { id: "directory", label: "Artist Directory" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActivePage(item.id)}
                className={`px-3.5 py-2 rounded-md text-sm font-semibold min-h-[40px] focus:outline-none focus:ring-2 focus:ring-[#B8332A] ${
                  activePage === item.id
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
              onClick={() => setActivePage("support")}
              className={`ml-1 px-4 py-2 rounded-md text-sm min-h-[40px] shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B8332A] ${btnAccent}`}
            >
              Sponsor a Booth
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT ROUTER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 space-y-12">
        {activePage === "home" && (
          <div className="space-y-12">
            <section
              aria-label="Welcome to WestPacific LOCAL ART Society"
              className={`rounded-2xl p-6 md:p-10 ${bgCard}`}
            >
              <div className="max-w-3xl mb-8">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
                    highContrast
                      ? "bg-yellow-400 text-black"
                      : "bg-[#0B6E75]/15 text-[#0B6E75]"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  100% Free Public Entry • Zero Jury Fees for Artists
                </span>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                  Building bridges between local artists and the Greater Vancouver public.
                </h1>
                <p
                  className={`mt-3 text-base md:text-lg leading-relaxed ${
                    highContrast ? "text-gray-200" : "text-slate-700"
                  }`}
                >
                  We organize barrier-free outdoor and indoor art markets, exhibitions, live
                  concerts, and hands-on public workshops. Every event is free for the public to
                  attend, and local artists keep 100% of their sales.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={`rounded-xl p-6 flex flex-col justify-between border-2 ${
                    highContrast
                      ? "bg-zinc-900 border-white"
                      : "bg-[#0F2942]/[0.03] border-[#0F2942]/20"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B6E75]">
                      <Calendar className="w-4 h-4" />
                      <span>For Public Visitors & Families</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      Free Art Markets, Concerts & Beginner Workshops
                    </h2>
                    <p
                      className={`text-sm leading-relaxed ${
                        highContrast ? "text-gray-200" : "text-slate-600"
                      }`}
                    >
                      Drop in without a ticket. Explore original works by local visual artists,
                      listen to live acoustic stages, and join free hands-on art classes with all
                      supplies included.
                    </p>
                    <ul className="text-sm space-y-1.5 pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>$0 Admission — No ticket cart required</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Step-free plaza layouts & SkyTrain access guides</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActivePage("events")}
                      className={`px-5 py-3 rounded-lg text-sm ${btnPrimary}`}
                    >
                      Explore Free Markets & Concerts →
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePage("workshops")}
                      className="px-4 py-3 rounded-lg text-sm font-semibold border border-slate-300 hover:bg-slate-100 text-slate-800"
                    >
                      Book a Free Workshop
                    </button>
                  </div>
                </div>

                <div
                  className={`rounded-xl p-6 flex flex-col justify-between border-2 ${
                    highContrast
                      ? "bg-zinc-900 border-yellow-400"
                      : "bg-[#B8332A]/[0.04] border-[#B8332A]/30"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8332A]">
                      <Paintbrush className="w-4 h-4" />
                      <span>For Local Artists, Musicians & Instructors</span>
                    </div>
                    <h2 className="text-xl font-bold">
                      Low Booth Fees ($120 – $150) & 0% Sales Commission
                    </h2>
                    <p
                      className={`text-sm leading-relaxed ${
                        highContrast ? "text-gray-200" : "text-slate-600"
                      }`}
                    >
                      Apply in 5 minutes from your phone. We never charge application or jury fees,
                      and we never take a cut of your art sales. Musicians and workshop instructors
                      receive paid honoraria.
                    </p>
                    <ul className="text-sm space-y-1.5 pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#B8332A] shrink-0" />
                        <span>
                          $120 Standard Booth (6ft Table Space) • $150 Full 10x10 Booth
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#B8332A] shrink-0" />
                        <span>No PDF CV required — link your Instagram or portfolio</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => setActivePage("artists")}
                      className={`px-5 py-3 rounded-lg text-sm ${btnAccent}`}
                    >
                      Apply as a Local Artist — Low Fees →
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section aria-label="Upcoming Free Events" className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-bold">
                    Upcoming Free Markets, Exhibitions & Concerts
                  </h2>
                  <p className={highContrast ? "text-gray-300 text-sm" : "text-slate-600 text-sm"}>
                    All events are open to the public with $0 admission and full step-free access
                    specs.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePage("events")}
                  className="text-sm font-bold text-[#B8332A] hover:underline"
                >
                  View Full Calendar & Access Guides →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {EVENTS_DATA.map((evt) => (
                  <div
                    key={evt.id}
                    className={`rounded-xl p-5 flex flex-col justify-between ${bgCard}`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#0F2942] text-white">
                          {evt.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-900">
                          $0 Admission
                        </span>
                      </div>
                      <h3 className="text-lg font-bold leading-snug">{evt.title}</h3>
                      <p className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          {evt.date} • {evt.time}
                        </span>
                      </p>
                      <p className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{evt.venue}</span>
                      </p>
                      <p className="text-sm text-slate-700 pt-1">{evt.summary}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setActivePage("events")}
                        className="text-xs font-bold text-[#0F2942] hover:underline"
                      >
                        Read SkyTrain & Wheelchair Access Specs →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section aria-label="Our Constitutional Purposes" className={`rounded-2xl p-6 md:p-8 ${bgCard}`}>
              <h2 className="text-xl font-bold mb-4">
                Our Mandate Under the British Columbia Societies Act
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900">
                  <p className="font-bold text-[#0F2942] mb-1">Purpose 2(a): Local Markets</p>
                  <p>
                    Creating outdoor and indoor art markets, exhibitions, concerts, and workshops
                    where local artists share and sell original creations directly to the public.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900">
                  <p className="font-bold text-[#0F2942] mb-1">
                    Purpose 2(b): Artist Affordability
                  </p>
                  <p>
                    Keeping artist participation and booth fees low ($120 standard / $150 full
                    10x10 booth) with zero commission so artists of all income levels can take part.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900">
                  <p className="font-bold text-[#0F2942] mb-1">Purpose 2(c): Free Public Access</p>
                  <p>
                    Engaging accessibility for all through free public events open to everyone and
                    partnerships that foster equality in the arts.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900">
                  <p className="font-bold text-[#0F2942] mb-1">Purpose 2(d): Cultural Awareness</p>
                  <p>
                    Raising public awareness of local arts and culture across Greater Vancouver
                    through hands-on workshops and participatory activities.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activePage === "events" && (
          <div className="space-y-8" id="access">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900">
                $0 Public Admission • No Ticket Required
              </span>
              <h1 className="text-3xl font-extrabold">
                Free Art Markets, Concerts & Exhibitions
              </h1>
              <p className="text-slate-600 max-w-3xl">
                Every market, exhibition, and outdoor concert is free to enter. Expand any event
                card below for concrete wheelchair measurements, washroom counts, and TransLink
                SkyTrain routes.
              </p>
            </div>

            <div className={`p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 ${bgCard}`}>
              <div className="flex flex-wrap items-center gap-2">
                <Filter className="w-4 h-4 text-slate-500" />
                {["All", "Markets", "Exhibitions", "Concerts"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setEventCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                      eventCategory === cat
                        ? "bg-[#0F2942] text-white"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={eventSearch}
                    onChange={(e) => setEventSearch(e.target.value)}
                    placeholder="Search venue or title..."
                    aria-label="Search events by venue or title"
                    className="pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-sm text-slate-900"
                  />
                </div>

                {(eventCategory !== "All" || eventSearch !== "") && (
                  <button
                    type="button"
                    onClick={() => {
                      setEventCategory("All");
                      setEventSearch("");
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-100 text-rose-900 hover:bg-rose-200"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear All Filters</span>
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-6">
              {filteredEvents.map((evt) => (
                <article key={evt.id} className={`rounded-xl p-6 space-y-4 ${bgCard}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B6E75]">
                      <Sun className="w-4 h-4" />
                      <span>Live Status: {evt.weatherStatus}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900">
                      {evt.admission}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B8332A]">
                        {evt.category}
                      </span>
                      <h2 className="text-xl font-bold">{evt.title}</h2>
                      <p className="text-sm text-slate-600 flex items-center gap-2">
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span>
                          {evt.date} • {evt.time}
                        </span>
                      </p>
                      <p className="text-sm text-slate-600 flex items-center gap-2">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>{evt.venue}</span>
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        alert(`Downloaded .ics calendar file for: ${evt.title}`)
                      }
                      className={`px-4 py-2.5 rounded-lg text-xs inline-flex items-center gap-2 shrink-0 ${btnPrimary}`}
                    >
                      <Download className="w-4 h-4" />
                      <span>Add to Calendar (.ics)</span>
                    </button>
                  </div>

                  <p className="text-sm leading-relaxed">{evt.summary}</p>

                  <details className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-slate-900">
                    <summary className="font-bold text-sm cursor-pointer text-[#0F2942]">
                      View Venue Accessibility Measurements & TransLink Transit Directions
                    </summary>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
                      <div className="space-y-2">
                        <p className="font-bold uppercase text-[#0B6E75]">
                          Greater Vancouver Transit & Arrival
                        </p>
                        <p className="flex items-start gap-2">
                          <Train className="w-4 h-4 shrink-0 mt-0.5 text-[#0F2942]" />
                          <span>
                            <strong>SkyTrain:</strong> {evt.transit.skytrain}
                          </span>
                        </p>
                        <p className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#0F2942]" />
                          <span>
                            <strong>Bus Routes:</strong> {evt.transit.bus}
                          </span>
                        </p>
                        <p className="flex items-start gap-2">
                          <Bike className="w-4 h-4 shrink-0 mt-0.5 text-[#0F2942]" />
                          <span>
                            <strong>Mobi Bike Dock:</strong> {evt.transit.bike}
                          </span>
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <p className="font-bold uppercase text-[#B8332A]">
                          Physical & Sensory Measurements
                        </p>
                        <p>
                          <strong>Surface Terrain:</strong> {evt.accessSpecs.surface}
                        </p>
                        <p>
                          <strong>Ramp & Curb Gradients:</strong> {evt.accessSpecs.ramps}
                        </p>
                        <p>
                          <strong>Aisle Widths:</strong> {evt.accessSpecs.aisles}
                        </p>
                        <p>
                          <strong>Accessible Washrooms:</strong> {evt.accessSpecs.washrooms}
                        </p>
                        <p>
                          <strong>Sensory & Sound:</strong> {evt.accessSpecs.sensory}
                        </p>
                      </div>
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </div>
        )}

        {activePage === "workshops" && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0B6E75]/15 text-[#0B6E75]">
                All Art Supplies Included • No Account Required to Book
              </span>
              <h1 className="text-3xl font-extrabold">
                Participatory Public Art Workshops
              </h1>
              <p className="text-slate-600 max-w-3xl">
                Reserve a seat in 30 seconds without creating a password. All classes are taught by
                paid local artists cleared under the BC Criminal Records Review Act.
              </p>
            </div>

            {bookingConfirmed && (
              <div className="p-5 rounded-xl bg-emerald-50 border-2 border-emerald-600 text-emerald-950 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="font-bold text-base flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    <span>
                      Seat Reserved for {bookingConfirmed.attendee} (Confirmation #
                      {bookingConfirmed.code})
                    </span>
                  </p>
                  <p className="text-xs">
                    Workshop: <strong>{bookingConfirmed.workshop.title}</strong> on{" "}
                    {bookingConfirmed.workshop.date} ({bookingConfirmed.workshop.time})
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setBookingConfirmed(null)}
                  className="px-3 py-1.5 rounded bg-rose-700 text-white text-xs font-bold hover:bg-rose-800"
                >
                  Cancel My Spot (Release to Waitlist)
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WORKSHOPS_DATA.map((ws) => (
                <div
                  key={ws.id}
                  className={`rounded-xl p-6 flex flex-col justify-between ${bgCard}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-900">
                        {ws.skillLevel}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900">
                        {ws.seatsLeft} of {ws.totalSeats} seats left
                      </span>
                    </div>

                    <h2 className="text-lg font-bold">{ws.title}</h2>
                    <p className="text-xs font-semibold text-[#0F2942]">{ws.instructor}</p>
                    <p className="text-xs text-slate-600">
                      {ws.date} • {ws.time}
                    </p>
                    <p className="text-xs text-slate-600">Location: {ws.location}</p>

                    <div className="p-3 rounded bg-slate-50 border border-slate-200 text-xs text-slate-800 space-y-1">
                      <p className="font-bold text-[#0F2942]">Included Supplies:</p>
                      <p>{ws.suppliesIncluded}</p>
                    </div>

                    <p className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>{ws.safetyBadge}</span>
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedWorkshop(ws);
                        setBookingError("");
                      }}
                      className={`w-full py-2.5 px-4 rounded-lg text-sm ${btnPrimary}`}
                    >
                      Reserve Free Seat (3-Field Checkout)
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selectedWorkshop && (
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="workshop-modal-title"
                className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
              >
                <div className="bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl border border-slate-200">
                  <div className="flex items-start justify-between gap-2 border-b pb-3">
                    <div>
                      <span className="text-xs font-bold uppercase text-[#0B6E75]">
                        Guest Seat Reservation (No Password Needed)
                      </span>
                      <h2 id="workshop-modal-title" className="text-lg font-bold">
                        {selectedWorkshop.title}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedWorkshop(null)}
                      className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 min-w-[28px] min-h-[28px]"
                      aria-label="Close modal"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <p>
                      <strong>Date & Time:</strong> {selectedWorkshop.date} (
                      {selectedWorkshop.time})
                    </p>
                    <p>
                      <strong>Location:</strong> {selectedWorkshop.location}
                    </p>
                    <p>
                      <strong>Included Supplies:</strong> {selectedWorkshop.suppliesIncluded}
                    </p>
                  </div>

                  {bookingError && (
                    <div className="p-3 rounded bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{bookingError}</span>
                    </div>
                  )}

                  <form onSubmit={handleWorkshopSubmit} className="space-y-3 text-sm">
                    <div>
                      <label className="block font-bold mb-1">1. Your Full Name *</label>
                      <input
                        type="text"
                        value={bookingForm.fullName}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, fullName: e.target.value })
                        }
                        placeholder="e.g., Jordan Lee"
                        className="w-full px-3 py-2 rounded border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">
                        2. Email or SMS Phone Number (for 1-click cancellation link) *
                      </label>
                      <input
                        type="text"
                        value={bookingForm.contact}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, contact: e.target.value })
                        }
                        placeholder="e.g., jordan@example.com or 604-555-0199"
                        className="w-full px-3 py-2 rounded border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">
                        3. Accessibility or Seating Accommodations (Optional)
                      </label>
                      <input
                        type="text"
                        value={bookingForm.accommodations}
                        onChange={(e) =>
                          setBookingForm({
                            ...bookingForm,
                            accommodations: e.target.value,
                          })
                        }
                        placeholder="e.g., Wheelchair table clearance, left-handed scissors"
                        className="w-full px-3 py-2 rounded border border-slate-300"
                      />
                    </div>
                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedWorkshop(null)}
                        className="px-4 py-2 rounded border border-slate-300 font-semibold text-xs"
                      >
                        Cancel
                      </button>
                      <button type="submit" className={`px-5 py-2 rounded text-xs ${btnPrimary}`}>
                        Confirm Free Seat
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {activePage === "artists" && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#B8332A]/15 text-[#B8332A]">
                Zero Jury Fees • Artists Keep 100% of Sales
              </span>
              <h1 className="text-3xl font-extrabold">
                Artist Opportunities: Markets, Exhibitions, Concerts & Workshops
              </h1>
              <p className="text-slate-600 max-w-3xl">
                Consistent with Purpose 2(b) of our Constitution, we publish our exact booth fees
                upfront before you start the form. There are no shared tables, no application fees,
                and zero sales commissions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                onClick={() => setSelectedBoothTier("standard_120")}
                className={`cursor-pointer rounded-xl p-6 border-2 transition-all ${
                  selectedBoothTier === "standard_120"
                    ? "border-[#0F2942] bg-[#0F2942]/[0.04]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0F2942]">
                    Option 1 • Dedicated Individual Space
                  </span>
                  <span className="text-2xl font-extrabold text-[#0F2942]">$120 CAD</span>
                </div>
                <h2 className="text-lg font-bold mt-1">Standard Booth (6ft Table Space)</h2>
                <p className="text-xs text-slate-600 mt-1">
                  Dedicated individual 6ft table space (no shared tables). Includes 1 folding
                  table, 2 chairs, and listing in the public Artist Directory. You keep 100% of
                  your sales.
                </p>
              </div>

              <div
                onClick={() => setSelectedBoothTier("full_150")}
                className={`cursor-pointer rounded-xl p-6 border-2 transition-all ${
                  selectedBoothTier === "full_150"
                    ? "border-[#B8332A] bg-[#B8332A]/[0.04]"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8332A]">
                    Option 2 • Maximum Display Space
                  </span>
                  <span className="text-2xl font-extrabold text-[#B8332A]">$150 CAD</span>
                </div>
                <h2 className="text-lg font-bold mt-1">
                  Full 10x10 Booth (Tent Space or Corner Placement)
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Full 10ft x 10ft dedicated footprint for visual artists, ceramicists, or
                  sculptural displays. Includes 20-lb canopy safety weights and directory profile.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 flex flex-wrap items-center justify-between gap-2">
              <span>
                <strong>Applying as a Musician, Exhibitor, or Workshop Facilitator?</strong> You pay
                $0 and receive CARFAC or CFM union-scale honoraria.
              </span>
              <span className="font-bold text-emerald-800">{autoSaveTimestamp}</span>
            </div>

            <div className={`rounded-2xl p-6 md:p-8 ${bgCard}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-200">
                <div>
                  <h2 className="text-xl font-bold">Single-Page Artist Application</h2>
                  <p className="text-xs text-slate-600">
                    No PDF resume or artist CV required. Smartphone photos are compressed
                    automatically in your browser.
                  </p>
                </div>
                <span className="px-3 py-1 rounded bg-emerald-100 text-emerald-900 text-xs font-bold">
                  Selected Booth:{" "}
                  {selectedBoothTier === "standard_120"
                    ? "$120 Standard Booth"
                    : "$150 Full 10x10 Booth"}
                </span>
              </div>

              {artistSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-500 text-emerald-950 space-y-2">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    <span>Application Received for {artistForm.artistName}</span>
                  </h3>
                  <p className="text-sm">
                    We sent a copy to <strong>{artistForm.email}</strong>. You only pay the{" "}
                    {selectedBoothTier === "standard_120" ? "$120" : "$150"} booth fee after your
                    date is confirmed.
                  </p>
                  <button
                    type="button"
                    onClick={() => setArtistSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded bg-emerald-800 text-white text-xs font-bold"
                  >
                    Edit or Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleArtistSubmit} className="space-y-5 text-sm">
                  {artistFormError && (
                    <div className="p-3 rounded bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{artistFormError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-1">1. Opportunity Type</label>
                      <select
                        value={opportunityType}
                        onChange={(e) => setOpportunityType(e.target.value)}
                        className="w-full px-3 py-2.5 rounded border border-slate-300 bg-white text-slate-900"
                      >
                        <option>Market Booth ($120 Standard / $150 Full 10x10)</option>
                        <option>Community Art Exhibition (CARFAC Honorarium Paid)</option>
                        <option>Live Music Stage (CFM Scale Honorarium Paid)</option>
                        <option>Lead a Public Workshop (Paid Instructor Fee + Supplies)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold mb-1">2. Primary Art Discipline</label>
                      <select
                        value={artistForm.discipline}
                        onChange={(e) => updateArtistField("discipline", e.target.value)}
                        className="w-full px-3 py-2.5 rounded border border-slate-300 bg-white text-slate-900"
                      >
                        <option>Visual Art / Painting / Illustration</option>
                        <option>Ceramics / Pottery / Sculpture</option>
                        <option>Printmaking / Photography</option>
                        <option>Textiles / Wearable Art</option>
                        <option>Live Music / Acoustic Performance</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold mb-1">3. Artist or Collective Name *</label>
                      <input
                        type="text"
                        value={artistForm.artistName}
                        onChange={(e) => updateArtistField("artistName", e.target.value)}
                        placeholder="e.g., Atelier Coast"
                        className="w-full px-3 py-2 rounded border border-slate-300 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">4. Email Address *</label>
                      <input
                        type="email"
                        value={artistForm.email}
                        onChange={(e) => updateArtistField("email", e.target.value)}
                        placeholder="artist@example.ca"
                        className="w-full px-3 py-2 rounded border border-slate-300 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">5. Phone Number (SMS Updates)</label>
                      <input
                        type="tel"
                        value={artistForm.phone}
                        onChange={(e) => updateArtistField("phone", e.target.value)}
                        placeholder="604-555-0144"
                        className="w-full px-3 py-2 rounded border border-slate-300 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-1">
                        6. Instagram Handle or Website Link (Instead of PDF Resume)
                      </label>
                      <input
                        type="text"
                        value={artistForm.portfolioLink}
                        onChange={(e) => updateArtistField("portfolioLink", e.target.value)}
                        placeholder="@yourartstudio or https://yourwebsite.ca"
                        className="w-full px-3 py-2 rounded border border-slate-300 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-1">
                        7. Smartphone Photo of Your Artwork (Auto-Compressed)
                      </label>
                      <input
                        type="file"
                        accept="image/*,video/*,audio/*"
                        onChange={(e) =>
                          updateArtistField(
                            "photoName",
                            e.target.files?.[0]?.name || "artwork-sample.jpg"
                          )
                        }
                        className="w-full text-xs file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:bg-[#0F2942] file:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">
                      8. Physical, Sensory, or Setup Accommodations (Optional)
                    </label>
                    <input
                      type="text"
                      value={artistForm.accommodations}
                      onChange={(e) => updateArtistField("accommodations", e.target.value)}
                      placeholder="e.g., Close to accessible washroom, step-free unloading zone, ASL interpreter"
                      className="w-full px-3 py-2 rounded border border-slate-300 text-slate-900"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-slate-600">
                      $0 due today. Booth fee (
                      {selectedBoothTier === "standard_120" ? "$120" : "$150"}) is invoiced only
                      after your spot is confirmed.
                    </span>
                    <button type="submit" className={`px-6 py-3 rounded-lg text-sm ${btnAccent}`}>
                      Submit Artist Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {activePage === "directory" && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold">Participating Local Artist Directory</h1>
              <p className="text-slate-600 max-w-3xl">
                Discover Greater Vancouver visual artists, ceramicists, print creators, and
                musicians participating in WestPacific LOCAL ART Society markets and stages.
              </p>
            </div>

            <div className={`p-4 rounded-xl flex flex-wrap items-center justify-between gap-4 ${bgCard}`}>
              <div className="flex flex-wrap gap-2">
                {["All", "Ceramics", "Print", "Textile", "Jazz"].map((disc) => (
                  <button
                    key={disc}
                    type="button"
                    onClick={() => setDirDiscipline(disc)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                      dirDiscipline === disc
                        ? "bg-[#0F2942] text-white"
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                    }`}
                  >
                    {disc}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={dirSearch}
                  onChange={(e) => setDirSearch(e.target.value)}
                  placeholder="Search artist name..."
                  className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm text-slate-900"
                />
                {(dirDiscipline !== "All" || dirSearch !== "") && (
                  <button
                    type="button"
                    onClick={() => {
                      setDirDiscipline("All");
                      setDirSearch("");
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-100 text-rose-900"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDirectory.map((artist) => (
                <div key={artist.id} className={`rounded-xl p-6 space-y-2 ${bgCard}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-[#B8332A]">
                      {artist.discipline}
                    </span>
                    <span className="text-xs text-slate-500">{artist.neighbourhood}</span>
                  </div>
                  <h2 className="text-lg font-bold">{artist.name}</h2>
                  <p className="text-sm text-slate-600">{artist.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activePage === "support" || activePage === "sponsor") && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                Commercial Sponsorship Invoice Provided • Non-Charitable BC Society Disclosure
              </span>
              <h1 className="text-3xl font-extrabold">
                Sponsor an Artist Booth or Activate a Public Plaza Market
              </h1>
              <p className="text-slate-600 max-w-3xl">
                Help keep booth fees affordable ($120 – $150) and fund free public workshops across
                Greater Vancouver.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border-2 border-amber-500 text-amber-950 text-xs leading-relaxed">
              <strong>Statutory Tax Status Disclosure:</strong> WestPacific LOCAL ART Society is a
              registered British Columbia non-profit society under the BC Societies Act, not a
              CRA-registered federal charity. Contributions do not qualify for charitable tax
              receipts. Local businesses and BIAs receive an automated{" "}
              <strong>Commercial Sponsorship Invoice</strong> for marketing and community outreach
              expense accounting.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  amount: 120,
                  title: "Sponsor 1 Standard Booth",
                  desc: "Covers 100% of a $120 Standard Booth for an emerging local artist.",
                },
                {
                  amount: 150,
                  title: "Sponsor 1 Full 10x10 Booth",
                  desc: "Covers a full 10x10 tent footprint for a local creator.",
                },
                {
                  amount: 500,
                  title: "Fund a Free Public Workshop",
                  desc: "Pays artist instructor CARFAC fees and free art supplies for 16 learners.",
                },
                {
                  amount: 2500,
                  title: "BIA Plaza Stage Activation",
                  desc: "Sponsors a full afternoon of free live acoustic concerts and artist booths.",
                },
              ].map((tier) => (
                <div
                  key={tier.amount}
                  onClick={() => setSupportAmount(tier.amount)}
                  className={`cursor-pointer rounded-xl p-5 border-2 ${
                    supportAmount === tier.amount
                      ? "border-[#B8332A] bg-[#B8332A]/[0.05]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p className="text-2xl font-extrabold text-[#0F2942]">${tier.amount} CAD</p>
                  <h2 className="font-bold text-sm mt-1">{tier.title}</h2>
                  <p className="text-xs text-slate-600 mt-1">{tier.desc}</p>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl p-6 max-w-2xl ${bgCard}`}>
              <h2 className="text-lg font-bold mb-4">
                Generate Instant Commercial Sponsorship Invoice (${supportAmount} CAD)
              </h2>

              {invoiceGenerated ? (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-500 text-emerald-950 text-sm space-y-2">
                  <p className="font-bold">
                    Commercial Sponsorship Invoice #INV-2026-884 Generated
                  </p>
                  <p className="text-xs">
                    Billed to: <strong>{supporterBusinessName || "Community Supporter"}</strong> (
                    {supporterEmail || "on file"}) — Amount: <strong>${supportAmount}.00 CAD</strong>
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-sm">
                  <div>
                    <label className="block font-bold mb-1">
                      Business, BIA, or Supporter Name
                    </label>
                    <input
                      type="text"
                      value={supporterBusinessName}
                      onChange={(e) => setSupporterBusinessName(e.target.value)}
                      placeholder="e.g., Mount Pleasant BIA or Jane Doe"
                      className="w-full px-3 py-2 rounded border border-slate-300 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Email for Invoice Receipt</label>
                    <input
                      type="email"
                      value={supporterEmail}
                      onChange={(e) => setSupporterEmail(e.target.value)}
                      placeholder="accounting@organization.ca"
                      className="w-full px-3 py-2 rounded border border-slate-300 text-slate-900"
                    />
                  </div>
                  <label className="flex items-start gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={taxAcknowledge}
                      onChange={(e) => setTaxAcknowledge(e.target.checked)}
                      className="mt-0.5"
                    />
                    <span>
                      I understand that WestPacific LOCAL ART Society is a BC non-profit society and
                      this contribution generates a commercial sponsorship invoice, not a CRA
                      charitable tax receipt.
                    </span>
                  </label>
                  <button
                    type="button"
                    disabled={!taxAcknowledge}
                    onClick={() => setInvoiceGenerated(true)}
                    className={`px-5 py-2.5 rounded-lg text-xs ${
                      taxAcknowledge
                        ? btnAccent
                        : "bg-slate-300 text-slate-500 cursor-not-allowed"
                    }`}
                  >
                    Complete ${supportAmount} CAD Sponsorship
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activePage === "governance" && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0F2942] text-white">
                BC Societies Act Transparency & Grantor Verification
              </span>
              <h1 className="text-3xl font-extrabold">
                Governance, Board of Directors & Public Mandate
              </h1>
              <p className="text-slate-600 max-w-3xl">
                Both event attendance and artist applications are open to the general public across
                Greater Vancouver, not restricted to private society members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`rounded-xl p-6 space-y-2 ${bgCard}`}>
                <h2 className="font-bold text-base text-[#0F2942]">Founding Board of Directors</h2>
                <ul className="text-sm space-y-2 pt-1">
                  <li>
                    <strong>Jeane Vinot</strong> — Founding Director (Vancouver, BC)
                  </li>
                  <li>
                    <strong>Valeriya Nyukalova</strong> — Founding Director (Vancouver, BC)
                  </li>
                  <li>
                    <strong>François Forestier</strong> — Founding Director & Systems Architect
                    (Vancouver, BC)
                  </li>
                </ul>
              </div>

              <div className={`rounded-xl p-6 space-y-2 ${bgCard}`}>
                <h2 className="font-bold text-base text-[#0F2942]">
                  Sections 56 & 62 Conflict Policy
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Under Sections 56 and 62 of the BC Societies Act, any director or senior manager
                  with a direct or indirect material interest in a contract, artist booth, or
                  service agreement must disclose the interest, abstain from voting, and leave the
                  meeting during deliberation.
                </p>
              </div>

              <div className={`rounded-xl p-6 space-y-2 ${bgCard}`}>
                <h2 className="font-bold text-base text-[#0F2942]">
                  Section 28 Financial Statements
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  100% of booth fees ($120 – $150) and community sponsorships are reinvested into
                  venue permits, $2M Commercial General Liability insurance, artist honoraria, and
                  free public workshop supplies.
                </p>
              </div>
            </div>
          </div>
        )}

        {activePage === "volunteer" && (
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold">Volunteer Shifts & Media Press Kit</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`rounded-xl p-6 space-y-3 ${bgCard}`}>
                <h2 className="text-lg font-bold">
                  Categorized Volunteer Shifts (By Physical & Sensory Demand)
                </h2>
                <ul className="text-sm space-y-2">
                  <li>
                    <strong>Seated Welcome Desk & Workshop Check-In:</strong> 100% seated role in
                    shade tent, low physical demand, no heavy lifting.
                  </li>
                  <li>
                    <strong>Site Setup & Canopy Weight Crew:</strong> Active role involving lifting
                    20-lb tent weights and folding tables before market opening.
                  </li>
                </ul>
              </div>

              <div className={`rounded-xl p-6 space-y-3 ${bgCard}`}>
                <h2 className="text-lg font-bold">Ungated 300-DPI Media & Press Kit</h2>
                <p className="text-sm text-slate-600">
                  Journalists and community calendars can download our official vector logo, fact
                  sheet, and high-resolution event photography without an email gate.
                </p>
              </div>
            </div>
          </div>
        )}

        {activePage === "architecture" && (
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold">
              Supabase PostgreSQL Schema (ca-central-1 Montreal)
            </h1>
            <p className="text-sm text-slate-600">
              Copy and run this SQL in your Supabase SQL Editor to create the tables for Events,
              Workshops, and Artist Applications ($120 Standard / $150 Full 10x10 Booth).
            </p>
            <pre className="p-5 rounded-xl bg-slate-900 text-emerald-300 text-xs overflow-x-auto leading-relaxed">
{`-- WestPacific LOCAL ART Society - Supabase PostgreSQL Schema
create table public.artist_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  artist_name text not null,
  email text not null,
  phone text,
  discipline text not null,
  opportunity_type text not null,
  booth_tier text check (booth_tier in ('standard_120', 'full_150')),
  booth_fee_cad integer check (booth_fee_cad in (120, 150)),
  portfolio_url text,
  accommodations text,
  status text default 'pending'
);

create table public.workshop_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  workshop_id text not null,
  full_name text not null,
  contact_info text not null,
  accommodations text,
  status text default 'confirmed'
);`}
            </pre>
          </div>
        )}
      </main>

      {/* 3. STREAMLINED 2-COLUMN FOOTER */}
      <footer
        className={
          highContrast
            ? "bg-black border-t-2 border-white text-white mt-16"
            : "bg-[#0F2942] text-white mt-16"
        }
      >
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <WestPacificLogo highContrast={true} size={44} />
              <div>
                <p className="font-extrabold text-base">WestPacific LOCAL ART Society</p>
                <p className="text-xs text-slate-300">
                  Registered British Columbia Non-Profit Society • Greater Vancouver, BC
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed max-w-xl">
              <strong>Territorial Acknowledgement:</strong> WestPacific LOCAL ART Society operates
              on the unceded, ancestral, and traditional territories of the xʷməθkʷəy̓əm (Musqueam),
              Sḵwx̱wú7mesh (Squamish), and səlilwətaɬ (Tsleil-Waututh) Nations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-amber-300">
              <button
                type="button"
                onClick={() => setActivePage("governance")}
                className="hover:underline"
              >
                Governance, Bylaws & Financials
              </button>
              <button
                type="button"
                onClick={() => setActivePage("artists")}
                className="hover:underline"
              >
                Artist Booth Fees ($120 – $150)
              </button>
            </div>
          </div>

          <div className="space-y-3 md:pl-8">
            <h3 className="font-bold text-sm uppercase tracking-wider text-amber-300">
              Community, Sponsors & Media
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed">
              Contributions support affordable artist booths and free public workshops. Commercial
              sponsorship invoices are issued automatically for local businesses and BIAs.
            </p>
            <div className="flex flex-wrap gap-4 pt-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActivePage("support")}
                className="text-white hover:underline"
              >
                Sponsor an Artist Booth ($120 / $150)
              </button>
              <button
                type="button"
                onClick={() => setActivePage("volunteer")}
                className="text-white hover:underline"
              >
                Volunteer Shifts & 300-DPI Press Kit
              </button>
              <button
                type="button"
                onClick={() => setActivePage("architecture")}
                className="text-amber-300 hover:underline"
              >
                Supabase SQL Schema
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
