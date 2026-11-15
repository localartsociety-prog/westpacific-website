import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { getBoothTierDetails } from "../lib/filters";

export default function ArtistsView({
  selectedBoothTier,
  setSelectedBoothTier,
  opportunityType,
  setOpportunityType,
  artistForm,
  updateArtistField,
  autoSaveTimestamp,
  artistSubmitted,
  setArtistSubmitted,
  artistFormError,
  onSubmitArtist,
  highContrast,
  pauseMotion,
}) {
  const tierInfo = getBoothTierDetails(selectedBoothTier);
  const isDirectoryOnly =
    opportunityType === "Get Listed in the Artist Directory (Free & Open Now)";

  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const comingSoonBadge = highContrast
    ? "bg-yellow-400 text-black font-bold"
    : "bg-[#FEF3C7] text-[#78350F] font-bold";

  const freeBadge = highContrast
    ? "bg-white text-black font-bold"
    : "bg-[#CCFBF1] text-[#115E59] font-bold";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <span className={`inline-block px-3 py-1 rounded text-xs ${freeBadge}`}>
          Directory Open Now • Future Markets ($120 – $150) • 0% Sales Commission
        </span>
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Artist Opportunities: Directory, Markets, Shows &amp; Classes
        </h1>
        <p className="text-base max-w-[65ch]">
          You can join our Local Artist Directory today for free. We also publish our future
          booth prices upfront with no shared tables and 0% commission.
        </p>
      </div>

      {/* 2 SELECTABLE BOOTH TIER CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          type="button"
          onClick={() => setSelectedBoothTier("standard_120")}
          aria-pressed={selectedBoothTier === "standard_120"}
          className={`text-left rounded-xl p-6 border-2 flex flex-col justify-between ${motionClass} ${
            selectedBoothTier === "standard_120"
              ? highContrast
                ? "border-yellow-400 bg-zinc-900 text-white"
                : "border-[#0F2942] bg-[#0F2942]/[0.04] text-[#111827]"
              : highContrast
              ? "border-white bg-zinc-950 text-white hover:bg-zinc-900"
              : "border-[#E2DDD5] bg-white text-[#111827] hover:border-[#0F2942]/40"
          }`}
        >
          <div className="space-y-2 w-full">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  highContrast ? "text-yellow-300" : "text-[#0F2942]"
                }`}
              >
                Option 1 • Individual Space
              </span>
              <span
                className={`font-display text-2xl font-extrabold tabular-nums ${
                  highContrast ? "text-yellow-300" : "text-[#0F2942]"
                }`}
              >
                $120 CAD
              </span>
            </div>
            <h2 className="font-display text-lg font-bold">
              $120 CAD Standard Booth (6ft Table Space)
            </h2>
            <p className="text-sm max-w-[65ch]">
              You will receive an individual 6ft table space with no shared tables. We will
              include 1 folding table, 2 chairs, and an Artist Directory profile. You will keep
              100% of your sales.
            </p>
          </div>
          <span className="mt-4 inline-block text-xs font-bold underline">
            {selectedBoothTier === "standard_120" ? "Selected Booth Size" : "Select $120 Booth"}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setSelectedBoothTier("full_150")}
          aria-pressed={selectedBoothTier === "full_150"}
          className={`text-left rounded-xl p-6 border-2 flex flex-col justify-between ${motionClass} ${
            selectedBoothTier === "full_150"
              ? highContrast
                ? "border-yellow-400 bg-zinc-900 text-white"
                : "border-[#B8332A] bg-[#B8332A]/[0.05] text-[#111827]"
              : highContrast
              ? "border-white bg-zinc-950 text-white hover:bg-zinc-900"
              : "border-[#E2DDD5] bg-white text-[#111827] hover:border-[#B8332A]/40"
          }`}
        >
          <div className="space-y-2 w-full">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  highContrast ? "text-yellow-300" : "text-[#B8332A]"
                }`}
              >
                Option 2 • Full Tent Space
              </span>
              <span
                className={`font-display text-2xl font-extrabold tabular-nums ${
                  highContrast ? "text-yellow-300" : "text-[#B8332A]"
                }`}
              >
                $150 CAD
              </span>
            </div>
            <h2 className="font-display text-lg font-bold">
              $150 CAD Full 10x10 Booth (Tent or Corner Space)
            </h2>
            <p className="text-sm max-w-[65ch]">
              You will receive an individual 10ft x 10ft space with no shared tables. We will
              include tent weights and an Artist Directory profile. You will keep 100% of your
              sales.
            </p>
          </div>
          <span className="mt-4 inline-block text-xs font-bold underline">
            {selectedBoothTier === "full_150" ? "Selected Booth Size" : "Select $150 Booth"}
          </span>
        </button>
      </div>

      {/* FAIR PAY & SAVE STATUS BANNER */}
      <div
        className={`p-4 rounded-xl text-sm flex flex-wrap items-center justify-between gap-3 ${
          highContrast
            ? "bg-zinc-900 border border-white text-white"
            : "bg-[#CCFBF1]/60 border border-[#115E59]/30 text-[#111827]"
        }`}
      >
        <p className="max-w-[65ch]">
          <strong>Applying as a Musician, Exhibitor, or Art Teacher?</strong> You will pay $0
          to join and will receive fair pay for your performance or class.
        </p>
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            highContrast
              ? "bg-yellow-400 text-black"
              : "bg-white text-[#0F2942] border border-[#115E59]/30"
          }`}
        >
          {autoSaveTimestamp}
        </span>
      </div>

      {/* SINGLE-PAGE FORM */}
      <div className={`rounded-2xl p-6 sm:p-8 ${cardSurface}`}>
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#E2DDD5]">
          <div className="space-y-1">
            <h2
              className={`font-display text-xl font-bold ${
                highContrast ? "text-white" : "text-[#0F2942]"
              }`}
            >
              Join Our Artist Directory or Future Event List
            </h2>
            <p className="text-sm max-w-[65ch]">
              Join the Local Artist Directory today, or sign up early for upcoming markets.
            </p>
          </div>
          <span className={`px-3 py-1.5 rounded text-xs tabular-nums ${comingSoonBadge}`}>
            Selected Booth: {tierInfo.label}
          </span>
        </div>

        {artistSubmitted ? (
          <div
            role="status"
            className={`p-6 rounded-xl space-y-3 ${
              highContrast
                ? "bg-zinc-900 border-2 border-yellow-400 text-white"
                : "bg-[#CCFBF1] border border-[#115E59] text-[#111827]"
            }`}
          >
            <h3 className="font-display text-lg font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>We saved {artistForm.artistName} to our artist list</span>
            </h3>
            <p className="text-sm max-w-[65ch]">
              {isDirectoryOnly ? (
                <>
                  We will email <strong>{artistForm.email}</strong> about adding your profile
                  {artistForm.customArtType?.trim()
                    ? ` (${artistForm.customArtType.trim()})`
                    : ""}{" "}
                  to the Local Artist Directory right away. Listing in the directory is free.
                </>
              ) : (
                <>
                  We will email <strong>{artistForm.email}</strong> when dates open. You will
                  only pay the ${tierInfo.fee} booth fee after we confirm your space.
                </>
              )}
            </p>
            <button
              type="button"
              onClick={() => setArtistSubmitted(false)}
              className="px-4 py-2.5 rounded-lg bg-[#0F2942] text-white text-sm font-bold min-h-[42px]"
            >
              Update or Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmitArtist} className="space-y-5 text-sm">
            {artistFormError && (
              <div
                role="alert"
                className="p-3.5 rounded-lg bg-rose-50 border border-rose-400 text-rose-900 text-sm flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{artistFormError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="artist-opportunity" className="block font-bold mb-1.5">
                  What would you like to do?
                </label>
                <select
                  id="artist-opportunity"
                  value={opportunityType}
                  onChange={(e) => setOpportunityType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                >
                  <option value="Get Listed in the Artist Directory (Free & Open Now)">
                    Get Listed in the Artist Directory (Free &amp; Open Now)
                  </option>
                  <option value="Future Market Booth ($120 Standard / $150 Full 10x10)">
                    Future Market Booth ($120 Standard / $150 Full 10x10)
                  </option>
                  <option value="Community Art Exhibition (Artists Receive Fair Pay)">
                    Community Art Exhibition (Artists Receive Fair Pay)
                  </option>
                  <option value="Live Music Stage (Musicians Receive Fair Pay)">
                    Live Music Stage (Musicians Receive Fair Pay)
                  </option>
                  <option value="Teach a Public Art Workshop (Paid Teacher Fee + Free Supplies)">
                    Teach a Public Art Workshop (Paid Teacher Fee + Free Supplies)
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="artist-discipline" className="block font-bold mb-1.5">
                  Your Main Art Type
                </label>
                <select
                  id="artist-discipline"
                  value={artistForm.discipline}
                  onChange={(e) => updateArtistField("discipline", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                >
                  <option value="Visual Art / Painting / Illustration">
                    Visual Art / Painting / Illustration
                  </option>
                  <option value="Ceramics / Pottery / Sculpture">
                    Ceramics / Pottery / Sculpture
                  </option>
                  <option value="Printmaking / Photography">Printmaking / Photography</option>
                  <option value="Textiles / Wearable Art">Textiles / Wearable Art</option>
                  <option value="Live Music / Acoustic Performance">
                    Live Music / Acoustic Performance
                  </option>
                  <option value="Other Art Type (Write below)">
                    Other Art Type (Write below)
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="artist-custom-type" className="block font-bold mb-1.5">
                If your art type is not listed above, write it here (We will add it now):
              </label>
              <input
                id="artist-custom-type"
                type="text"
                value={artistForm.customArtType || ""}
                onChange={(e) => updateArtistField("customArtType", e.target.value)}
                placeholder="e.g., Woodcarving, Stained Glass, Beadwork, Digital Illustration"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="artist-name" className="block font-bold mb-1.5">
                  Your Name or Studio Name *
                </label>
                <input
                  id="artist-name"
                  type="text"
                  value={artistForm.artistName}
                  onChange={(e) => updateArtistField("artistName", e.target.value)}
                  placeholder="e.g., Pacific Coast Studio"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                />
              </div>

              <div>
                <label htmlFor="artist-email" className="block font-bold mb-1.5">
                  Your Email Address *
                </label>
                <input
                  id="artist-email"
                  type="email"
                  value={artistForm.email}
                  onChange={(e) => updateArtistField("email", e.target.value)}
                  placeholder="artist@example.ca"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                />
              </div>

              <div>
                <label htmlFor="artist-phone" className="block font-bold mb-1.5">
                  Your Phone Number (Optional)
                </label>
                <input
                  id="artist-phone"
                  type="tel"
                  value={artistForm.phone}
                  onChange={(e) => updateArtistField("phone", e.target.value)}
                  placeholder="604-555-0144"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="artist-portfolio" className="block font-bold mb-1.5">
                  Instagram or Website Link (Optional)
                </label>
                <input
                  id="artist-portfolio"
                  type="text"
                  value={artistForm.portfolioLink}
                  onChange={(e) => updateArtistField("portfolioLink", e.target.value)}
                  placeholder="@yourstudio or https://yourwebsite.ca"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                />
              </div>

              <div>
                <label htmlFor="artist-photo" className="block font-bold mb-1.5">
                  Share a Photo of Your Art (Optional)
                </label>
                <input
                  id="artist-photo"
                  type="file"
                  accept="image/*,video/*,audio/*"
                  onChange={(e) =>
                    updateArtistField(
                      "photoName",
                      e.target.files?.[0]?.name || "artwork-sample.jpg"
                    )
                  }
                  className="w-full text-sm file:mr-3 file:py-2 file:px-3.5 file:rounded-lg file:border-0 file:bg-[#0F2942] file:text-white file:font-bold file:min-h-[40px]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="artist-access" className="block font-bold mb-1.5">
                Accessibility or Setup Needs (Optional)
              </label>
              <input
                id="artist-access"
                type="text"
                value={artistForm.accommodations}
                onChange={(e) => updateArtistField("accommodations", e.target.value)}
                placeholder="e.g., Close to accessible washroom, flat loading spot, sign language help"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm max-w-[65ch]">
                {isDirectoryOnly
                  ? "Getting listed in our Artist Directory is free and open now."
                  : `You will pay $0 today. We will only invoice your $${tierInfo.fee} booth fee after we confirm your market date.`}
              </p>
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg text-sm min-h-[42px] whitespace-nowrap ${primaryBtn} ${motionClass}`}
              >
                {isDirectoryOnly ? "Join Artist Directory" : "Join Future Artist List"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
