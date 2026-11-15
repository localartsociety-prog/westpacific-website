import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function ArtistsView({
  artistForm,
  updateArtistField,
  artistSubmitted,
  setArtistSubmitted,
  artistFormError,
  onSubmitArtist,
  onScrollToNewsletter,
  highContrast,
  pauseMotion,
}) {
  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const newsletterLink = highContrast
    ? "bg-zinc-900 text-yellow-300 font-bold border-2 border-white hover:bg-zinc-800"
    : "bg-[#F8F6F2] text-[#0F2942] font-bold border border-[#0F2942]/30 hover:bg-[#E2DDD5]/60";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Artist Opportunities
        </h1>
        <p className="text-base max-w-[65ch]">
          Our Local Artist Directory is open now. Use the form below to join the directory,
          ask about future markets, or propose a workshop.
        </p>
      </div>

      {/* 1 TOP CARD ONLY (NO PRICE CARDS) */}
      <article className={`rounded-2xl p-6 sm:p-8 space-y-4 ${cardSurface}`}>
        <h2
          className={`font-display text-2xl font-bold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Markets, Exhibitions, Live Music &amp; Workshops — Coming Soon
        </h2>
        <p className="text-base max-w-[65ch]">
          We will keep booth fees affordable so artists of all income levels can take part. We
          never charge application or jury fees, and we never take a cut of your art sales.
          Musicians and workshop teachers receive paid honoraria.
        </p>
        <div className="pt-1">
          <a
            href="#newsletter-signup"
            onClick={onScrollToNewsletter}
            className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] inline-flex items-center ${newsletterLink} ${motionClass}`}
          >
            Want to know more? Join the newsletter
          </a>
        </div>
      </article>

      {/* CONTACT US TO JOIN FORM */}
      <div className={`rounded-2xl p-6 sm:p-8 ${cardSurface}`}>
        <div className="pb-4 mb-6 border-b border-[#E2DDD5] space-y-1">
          <h2
            className={`font-display text-xl font-bold ${
              highContrast ? "text-white" : "text-[#0F2942]"
            }`}
          >
            Contact Us to Join
          </h2>
          <p className="text-sm max-w-[65ch]">
            Tell us who you are and how you would like to take part in Greater Vancouver.
          </p>
        </div>

        {artistSubmitted ? (
          <div
            role="status"
            className={`p-6 rounded-xl space-y-3 ${
              highContrast
                ? "bg-zinc-900 border-2 border-yellow-400 text-white"
                : "bg-[#F8F6F2] border border-[#0F2942]/30 text-[#111827]"
            }`}
          >
            <h3 className="font-display text-lg font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Thank you, {artistForm.nameOrBusiness}. We received your message.</span>
            </h3>
            <p className="text-sm max-w-[65ch]">
              We will email <strong>{artistForm.email}</strong> about{" "}
              <strong>{artistForm.joinType}</strong>
              {artistForm.customArtType?.trim()
                ? ` (${artistForm.customArtType.trim()})`
                : ` (${artistForm.artType})`}
              .
            </p>
            <button
              type="button"
              onClick={() => setArtistSubmitted(false)}
              className="px-4 py-2.5 rounded-lg bg-[#0F2942] text-white text-sm font-bold min-h-[42px]"
            >
              Send Another Message
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
                <label htmlFor="artist-join-type" className="block font-bold mb-1.5">
                  How would you like to join?
                </label>
                <select
                  id="artist-join-type"
                  value={artistForm.joinType}
                  onChange={(e) => updateArtistField("joinType", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                >
                  <option value="Get Listed in the Local Artist Directory (Open Now)">
                    Get Listed in the Local Artist Directory (Open Now)
                  </option>
                  <option value="Join Future Markets, Exhibitions or Concerts">
                    Join Future Markets, Exhibitions or Concerts
                  </option>
                  <option value="Teach or Host a Public Art Workshop">
                    Teach or Host a Public Art Workshop
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="artist-art-type" className="block font-bold mb-1.5">
                  Your Art Type
                </label>
                <select
                  id="artist-art-type"
                  value={artistForm.artType}
                  onChange={(e) => updateArtistField("artType", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                >
                  <option value="Other Art (Write Yours Below)">
                    Other Art (Write Yours Below)
                  </option>
                  <option value="Ceramics">Ceramics</option>
                  <option value="Print">Print</option>
                  <option value="Textile">Textile</option>
                  <option value="Music">Music</option>
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
                value={artistForm.customArtType}
                onChange={(e) => updateArtistField("customArtType", e.target.value)}
                placeholder="e.g., Woodcarving, Stained Glass, Painting, Beadwork"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="artist-name" className="block font-bold mb-1.5">
                  Name/Business Name *
                </label>
                <input
                  id="artist-name"
                  type="text"
                  value={artistForm.nameOrBusiness}
                  onChange={(e) => updateArtistField("nameOrBusiness", e.target.value)}
                  placeholder="e.g., Pacific Coast Studio"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                />
              </div>

              <div>
                <label htmlFor="artist-email" className="block font-bold mb-1.5">
                  Email Address *
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
            </div>

            <div>
              <label htmlFor="artist-website" className="block font-bold mb-1.5">
                Website/Social Link (Optional)
              </label>
              <input
                id="artist-website"
                type="text"
                value={artistForm.websiteLink}
                onChange={(e) => updateArtistField("websiteLink", e.target.value)}
                placeholder="@yourstudio or https://yourwebsite.ca"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
              />
            </div>

            <div>
              <label htmlFor="artist-message" className="block font-bold mb-1.5">
                Message/Workshop Space Idea (Optional)
              </label>
              <textarea
                id="artist-message"
                rows={3}
                value={artistForm.messageOrSpace}
                onChange={(e) => updateArtistField("messageOrSpace", e.target.value)}
                placeholder="Share a short note about your art, workshop idea, or venue space."
                className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827]"
              />
            </div>

            <button
              type="submit"
              className={`px-6 py-3 rounded-lg text-sm min-h-[42px] ${primaryBtn} ${motionClass}`}
            >
              Send Contact Form
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
