import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function NewsletterSection({
  newsletterForm,
  setNewsletterForm,
  newsletterError,
  newsletterSubmitted,
  setNewsletterSubmitted,
  onSubmitNewsletter,
  highContrast,
  pauseMotion,
}) {
  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <section
      id="newsletter-signup"
      aria-label="Future Newsletter Signup"
      className="max-w-7xl w-full mx-auto px-4 sm:px-6 pt-4"
    >
      <div className={`rounded-2xl p-6 sm:p-8 text-left space-y-6 ${cardSurface}`}>
        <div className="space-y-2 max-w-[65ch]">
          <h2
            className={`font-display text-2xl font-extrabold ${
              highContrast ? "text-white" : "text-[#0F2942]"
            }`}
          >
            Future Newsletter — Coming Soon
          </h2>
          <p className="text-base max-w-[65ch]">
            Want to know when we start our first free art markets, concerts, and workshops?
            Join our newsletter list below.
          </p>
        </div>

        {newsletterSubmitted ? (
          <div
            role="status"
            className={`p-5 rounded-xl space-y-3 max-w-2xl ${
              highContrast
                ? "bg-zinc-900 border-2 border-yellow-400 text-white"
                : "bg-[#F8F6F2] border border-[#0F2942]/30 text-[#111827]"
            }`}
          >
            <p className="font-display font-bold text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>
                Thank you, {newsletterForm.firstName}. We added your email to our future
                newsletter list.
              </span>
            </p>
            <p className="text-sm max-w-[65ch]">
              We will write to <strong>{newsletterForm.email}</strong> as a{" "}
              <strong>{newsletterForm.role}</strong> when our first events open.
            </p>
            <button
              type="button"
              onClick={() => setNewsletterSubmitted(false)}
              className="px-4 py-2 rounded-lg bg-[#0F2942] text-white text-sm font-bold min-h-[42px]"
            >
              Update Details
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmitNewsletter} className="space-y-4 text-sm max-w-4xl">
            {newsletterError && (
              <div
                role="alert"
                className="p-3.5 rounded-lg bg-rose-50 border border-rose-400 text-rose-900 text-sm flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{newsletterError}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.4fr] gap-4">
              <div>
                <label htmlFor="nl-first-name" className="block font-bold mb-1.5">
                  First Name *
                </label>
                <input
                  id="nl-first-name"
                  type="text"
                  value={newsletterForm.firstName}
                  onChange={(e) =>
                    setNewsletterForm({ ...newsletterForm, firstName: e.target.value })
                  }
                  placeholder="e.g., Jordan"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                />
              </div>

              <div>
                <label htmlFor="nl-email" className="block font-bold mb-1.5">
                  Email Address *
                </label>
                <input
                  id="nl-email"
                  type="email"
                  value={newsletterForm.email}
                  onChange={(e) =>
                    setNewsletterForm({ ...newsletterForm, email: e.target.value })
                  }
                  placeholder="jordan@example.ca"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                />
              </div>

              <div>
                <label htmlFor="nl-role" className="block font-bold mb-1.5">
                  I am joining as a...
                </label>
                <select
                  id="nl-role"
                  value={newsletterForm.role}
                  onChange={(e) =>
                    setNewsletterForm({ ...newsletterForm, role: e.target.value })
                  }
                  className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
                >
                  <option value="Visitor (Free Events & Workshops)">
                    Visitor (Free Events &amp; Workshops)
                  </option>
                  <option value="Local Artist or Musician">
                    Local Artist or Musician
                  </option>
                  <option value="Venue Host or Business Sponsor">
                    Venue Host or Business Sponsor
                  </option>
                </select>
              </div>
            </div>

            <label className="flex items-start gap-2.5 text-sm cursor-pointer max-w-[65ch]">
              <input
                type="checkbox"
                checked={newsletterForm.consent}
                onChange={(e) =>
                  setNewsletterForm({ ...newsletterForm, consent: e.target.checked })
                }
                className="mt-1 w-4 h-4 shrink-0"
              />
              <span>
                I agree to receive future email updates from LOCAL ART. You can unsubscribe at
                any time.
              </span>
            </label>

            <button
              type="submit"
              className={`px-6 py-3 rounded-lg text-sm min-h-[42px] ${primaryBtn} ${motionClass}`}
            >
              Sign Up for Future Newsletter
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
