import React from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";
import { WORKSHOPS_DATA, WORKSHOP_PARTNERS } from "../data/siteContent";

export default function WorkshopsView({
  selectedWorkshop,
  setSelectedWorkshop,
  bookingForm,
  setBookingForm,
  bookingConfirmed,
  setBookingConfirmed,
  bookingError,
  setBookingError,
  onSubmitWorkshop,
  highContrast,
  pauseMotion,
}) {
  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const partnerCardSurface = highContrast
    ? "bg-zinc-900 border-2 border-white text-white"
    : "bg-[#F8F6F2] border border-[#E2DDD5] text-[#111827]";

  const comingSoonBadge = highContrast
    ? "bg-yellow-400 text-black font-bold"
    : "bg-[#FEF3C7] text-[#78350F] font-bold";

  const beginnerBadge = highContrast
    ? "bg-white text-black font-bold"
    : "bg-[#CCFBF1] text-[#115E59] font-bold";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const navyBtn = highContrast
    ? "bg-white text-black font-bold border-2 border-yellow-400 hover:bg-zinc-200"
    : "bg-[#0F2942] text-white font-bold hover:bg-[#183C5F]";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  const openModalForWorkshop = (workshop, defaultRole) => {
    setSelectedWorkshop(workshop);
    setBookingError("");
    if (defaultRole) {
      setBookingForm((prev) => ({ ...prev, joinRole: defaultRole }));
    }
  };

  return (
    <div className="space-y-10 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <span className={`inline-block px-3 py-1 rounded text-xs ${comingSoonBadge}`}>
          Coming Soon • Free Supplies Included
        </span>
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Public Art Workshops
        </h1>
        <p className="text-base max-w-[65ch]">
          We will offer free beginner art classes across Greater Vancouver. Contact us to join
          a future class, teach a session, or host a workshop.
        </p>
      </div>

      {bookingConfirmed && (
        <div
          role="status"
          className={`p-5 rounded-xl flex flex-wrap items-center justify-between gap-4 ${
            highContrast
              ? "bg-zinc-900 border-2 border-yellow-400 text-white"
              : "bg-[#CCFBF1] border border-[#115E59] text-[#111827]"
          }`}
        >
          <div className="space-y-1 max-w-[65ch]">
            <p className="font-display font-bold text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Thank you, {bookingConfirmed.attendee}. We saved your message.</span>
            </p>
            <p className="text-sm">
              Topic: <strong>{bookingConfirmed.workshop.title}</strong> • Role:{" "}
              <strong>{bookingConfirmed.joinRole}</strong>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setBookingConfirmed(null)}
            className="px-4 py-2 rounded-lg bg-[#0F2942] text-white text-sm font-bold min-h-[42px]"
          >
            Dismiss Notice
          </button>
        </div>
      )}

      {/* 3 SIMPLIFIED WORKSHOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {WORKSHOPS_DATA.map((ws) => (
          <article
            key={ws.id}
            className={`rounded-xl p-6 flex flex-col justify-between text-left ${cardSurface}`}
          >
            <div className="space-y-3">
              {/* Level 1: Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-1 rounded text-xs ${beginnerBadge}`}>
                  {ws.skillLevel}
                </span>
                <span className={`px-2.5 py-1 rounded text-xs ${comingSoonBadge}`}>
                  {ws.statusBadge}
                </span>
              </div>

              {/* Level 2: Title */}
              <h2
                className={`font-display text-xl font-bold leading-snug ${
                  highContrast ? "text-white" : "text-[#0F2942]"
                }`}
              >
                {ws.title}
              </h2>

              {/* Level 3: Short Sentence + 1 Callout Box */}
              <p className="text-sm max-w-[65ch]">{ws.summary}</p>

              <div
                className={`p-3.5 rounded-lg text-sm font-semibold ${
                  highContrast
                    ? "bg-zinc-900 border border-yellow-400 text-yellow-300"
                    : "bg-[#F8F6F2] border border-[#E2DDD5] text-[#0F2942]"
                }`}
              >
                {ws.callout}
              </div>
            </div>

            {/* Level 4: Button */}
            <div className="pt-5 mt-5 border-t border-[#E2DDD5]">
              <button
                type="button"
                onClick={() => openModalForWorkshop(ws)}
                className={`w-full py-2.5 px-4 rounded-lg text-sm min-h-[42px] ${primaryBtn} ${motionClass}`}
              >
                Contact Us for This Workshop
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* DEDICATED PARTNER SECTION BELOW CARDS */}
      <section
        aria-label="Host, Lead, or Suggest an Art Workshop"
        className={`rounded-2xl p-6 sm:p-8 space-y-6 ${cardSurface}`}
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2 max-w-[65ch]">
            <h2
              className={`font-display text-2xl font-bold ${
                highContrast ? "text-white" : "text-[#0F2942]"
              }`}
            >
              Host, Lead, or Suggest an Art Workshop
            </h2>
            <p className="text-sm max-w-[65ch]">
              Local venues, artists, and neighbours can partner with us to bring free workshops
              to more communities.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              openModalForWorkshop(
                { id: "ws-partner", title: "Host, Lead, or Suggest an Art Workshop" },
                "I have a space to host (coffee shop, hotel, brewery, studio)"
              )
            }
            className={`px-5 py-2.5 rounded-lg text-sm min-h-[42px] whitespace-nowrap ${navyBtn} ${motionClass}`}
          >
            Propose a Space or Workshop Idea →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORKSHOP_PARTNERS.map((partner) => (
            <div
              key={partner.title}
              className={`rounded-xl p-5 space-y-2 text-left ${partnerCardSurface}`}
            >
              <h3
                className={`font-display text-base font-bold leading-snug ${
                  highContrast ? "text-yellow-300" : "text-[#0F2942]"
                }`}
              >
                {partner.title}
              </h3>
              <p className="text-sm max-w-[65ch]">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-FIELD WORKSHOP CONTACT MODAL */}
      {selectedWorkshop && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="workshop-modal-title"
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        >
          <div
            className={`rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl text-left ${
              highContrast
                ? "bg-black border-2 border-yellow-400 text-white"
                : "bg-white border border-[#E2DDD5] text-[#111827]"
            }`}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#E2DDD5] pb-3">
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded text-xs mb-1 ${comingSoonBadge}`}>
                  Coming Soon
                </span>
                <h2
                  id="workshop-modal-title"
                  className={`font-display text-lg font-bold ${
                    highContrast ? "text-white" : "text-[#0F2942]"
                  }`}
                >
                  {selectedWorkshop.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedWorkshop(null)}
                className="p-2 rounded-lg bg-[#F8F6F2] text-[#111827] border border-[#E2DDD5] hover:bg-[#E2DDD5] min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm max-w-[65ch]">
              Send us your contact details. We will follow up about hosting, teaching,
              sponsoring supplies, or attending.
            </p>

            {bookingError && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-rose-50 border border-rose-400 text-rose-900 text-sm flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{bookingError}</span>
              </div>
            )}

            <form onSubmit={onSubmitWorkshop} className="space-y-4 text-sm">
              <div>
                <label htmlFor="ws-name" className="block font-bold mb-1">
                  Your Name or Business Name *
                </label>
                <input
                  id="ws-name"
                  type="text"
                  value={bookingForm.fullName}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, fullName: e.target.value })
                  }
                  placeholder="e.g., Jordan Lee or Eastside Café"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                />
              </div>

              <div>
                <label htmlFor="ws-contact" className="block font-bold mb-1">
                  Your Email or Phone Number *
                </label>
                <input
                  id="ws-contact"
                  type="text"
                  value={bookingForm.contact}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, contact: e.target.value })
                  }
                  placeholder="e.g., jordan@example.com or 604-555-0199"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                />
              </div>

              <div>
                <label htmlFor="ws-role" className="block font-bold mb-1">
                  How would you like to help or join?
                </label>
                <select
                  id="ws-role"
                  value={bookingForm.joinRole}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, joinRole: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                >
                  <option value="I am an artist / teacher with a workshop idea">
                    I am an artist / teacher with a workshop idea
                  </option>
                  <option value="I have a space to host (coffee shop, hotel, brewery, studio)">
                    I have a space to host (coffee shop, hotel, brewery, studio)
                  </option>
                  <option value="I want to sponsor art supplies for a workshop">
                    I want to sponsor art supplies for a workshop
                  </option>
                  <option value="I want to attend this workshop when it opens">
                    I want to attend this workshop when it opens
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="ws-idea" className="block font-bold mb-1">
                  Tell us your idea or space location (Optional)
                </label>
                <input
                  id="ws-idea"
                  type="text"
                  value={bookingForm.ideaOrLocation}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, ideaOrLocation: e.target.value })
                  }
                  placeholder="e.g., Main St café patio or beginner collage class"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedWorkshop(null)}
                  className="px-4 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] font-bold text-sm min-h-[42px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-5 py-2.5 rounded-lg text-sm min-h-[42px] ${primaryBtn}`}
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
