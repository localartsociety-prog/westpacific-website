import React from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";
import { WORKSHOPS_DATA } from "../data/siteContent";

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

  const comingSoonBadge = highContrast
    ? "bg-yellow-400 text-black font-bold"
    : "bg-[#FEF3C7] text-[#78350F] font-bold";

  const beginnerBadge = highContrast
    ? "bg-white text-black font-bold"
    : "bg-[#CCFBF1] text-[#115E59] font-bold";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <span className={`inline-block px-3 py-1 rounded text-xs ${beginnerBadge}`}>
          Coming Soon • All Supplies Included Free
        </span>
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Future Public Art Workshops
        </h1>
        <p className="text-base max-w-[65ch]">
          We will offer free beginner art classes in Greater Vancouver. Join our interest list
          below, or tell us if you are an artist who wants to teach a class.
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
              <span>Thank you, {bookingConfirmed.attendee}. We saved your request.</span>
            </p>
            <p className="text-sm">
              Class: <strong>{bookingConfirmed.workshop.title}</strong> • Role:{" "}
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {WORKSHOPS_DATA.map((ws) => (
          <article
            key={ws.id}
            className={`rounded-xl p-6 flex flex-col justify-between text-left ${cardSurface}`}
          >
            <div className="space-y-3">
              {/* Level 1: Status Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-1 rounded text-xs ${beginnerBadge}`}>
                  {ws.skillLevel}
                </span>
                <span className={`px-2.5 py-1 rounded text-xs ${comingSoonBadge}`}>
                  {ws.statusBadge}
                </span>
              </div>

              {/* Level 2: Bold Plain-English Title */}
              <h2
                className={`font-display text-xl font-bold leading-snug ${
                  highContrast ? "text-white" : "text-[#0F2942]"
                }`}
              >
                {ws.title}
              </h2>

              {/* Level 3: Short Future-Tense Sentences */}
              <div className="space-y-2.5 max-w-[65ch]">
                <p className="text-sm">{ws.summary}</p>
                <p
                  className={`text-sm font-bold ${
                    highContrast ? "text-yellow-300" : "text-[#B8332A]"
                  }`}
                >
                  {ws.teacherNotice}
                </p>
                <p className="text-sm">
                  <strong>Free Supplies:</strong> {ws.suppliesIncluded}
                </p>
                <p className="text-xs opacity-80">{ws.plannedFormat}</p>
              </div>
            </div>

            {/* Level 4: Action Button */}
            <div className="pt-5 mt-5 border-t border-[#E2DDD5]">
              <button
                type="button"
                onClick={() => {
                  setSelectedWorkshop(ws);
                  setBookingError("");
                }}
                className={`w-full py-2.5 px-4 rounded-lg text-sm min-h-[42px] ${primaryBtn} ${motionClass}`}
              >
                Coming Soon — Contact Us for This Class
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* 3-FIELD CONTACT MODAL */}
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
              Leave your contact info below. We will email or text you when class dates open, or
              follow up about teaching.
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
                  Your Name *
                </label>
                <input
                  id="ws-name"
                  type="text"
                  value={bookingForm.fullName}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, fullName: e.target.value })
                  }
                  placeholder="e.g., Jordan Lee"
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
                  How would you like to join?
                </label>
                <select
                  id="ws-role"
                  value={bookingForm.joinRole}
                  onChange={(e) =>
                    setBookingForm({ ...bookingForm, joinRole: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                >
                  <option value="I want to take this class when it opens">
                    I want to take this class when it opens
                  </option>
                  <option value="I am an artist and I want to teach a class">
                    I am an artist and I want to teach a class
                  </option>
                </select>
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
