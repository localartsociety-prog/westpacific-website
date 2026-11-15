import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { SPONSOR_OPTIONS } from "../data/siteContent";

export default function SponsorView({
  selectedSponsorOption,
  setSelectedSponsorOption,
  supporterBusinessName,
  setSupporterBusinessName,
  supporterEmail,
  setSupporterEmail,
  taxAcknowledge,
  setTaxAcknowledge,
  invoiceGenerated,
  setInvoiceGenerated,
  sponsorError,
  onSubmitSponsor,
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

  const chosenOption =
    SPONSOR_OPTIONS.find((opt) => opt.id === selectedSponsorOption) ||
    SPONSOR_OPTIONS[0];

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Sponsor an Artist Booth or Free Public Event
        </h1>
        <p className="text-base max-w-[65ch]">
          Your sponsorship will help keep artist booth fees affordable and fund free public
          art classes in Greater Vancouver.
        </p>
      </div>

      {/* PLAIN-LANGUAGE TAX NOTICE */}
      <div
        className={`p-5 rounded-xl text-sm leading-relaxed max-w-[65ch] ${
          highContrast
            ? "bg-zinc-900 border-2 border-yellow-400 text-white"
            : "bg-[#F8F6F2] border border-[#E2DDD5] text-[#111827]"
        }`}
      >
        <strong>Important Tax Notice:</strong> We are a registered British Columbia
        non-profit society, not a federal charity. Sponsorship gifts do not provide
        charitable tax receipts. Businesses receive an official{" "}
        <strong>Commercial Sponsorship Invoice</strong> for their community records.
      </div>

      {/* 4 SELECTABLE SPONSORSHIP CARDS (NO DOLLAR AMOUNTS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SPONSOR_OPTIONS.map((option) => {
          const isSelected = selectedSponsorOption === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                setSelectedSponsorOption(option.id);
                setInvoiceGenerated(false);
              }}
              aria-pressed={isSelected}
              className={`text-left rounded-xl p-5 border-2 flex flex-col justify-between ${motionClass} ${
                isSelected
                  ? highContrast
                    ? "border-yellow-400 bg-zinc-900 text-white"
                    : "border-[#B8332A] bg-[#B8332A]/[0.05] text-[#111827]"
                  : highContrast
                  ? "border-white bg-zinc-950 text-white hover:bg-zinc-900"
                  : "border-[#E2DDD5] bg-white text-[#111827] hover:border-[#B8332A]/40"
              }`}
            >
              <div className="space-y-2">
                <h2
                  className={`font-display font-bold text-lg ${
                    highContrast ? "text-yellow-300" : "text-[#0F2942]"
                  }`}
                >
                  {option.title}
                </h2>
                <p className="text-sm">{option.desc}</p>
              </div>
              <span className="mt-4 inline-block text-xs font-bold underline">
                {isSelected ? "Selected Option" : "Choose This Option"}
              </span>
            </button>
          );
        })}
      </div>

      {/* SIMPLE INVOICE REQUEST FORM */}
      <div className={`rounded-2xl p-6 sm:p-8 max-w-2xl space-y-5 ${cardSurface}`}>
        <div className="space-y-1">
          <h2
            className={`font-display text-xl font-bold ${
              highContrast ? "text-white" : "text-[#0F2942]"
            }`}
          >
            Ask About Sponsorship: {chosenOption.title}
          </h2>
          <p className="text-sm max-w-[65ch]">
            We will share sponsorship details and prepare a Commercial Sponsorship Invoice when
            our season opens.
          </p>
        </div>

        {invoiceGenerated ? (
          <div
            role="status"
            className={`p-5 rounded-xl text-sm space-y-3 ${
              highContrast
                ? "bg-zinc-900 border-2 border-yellow-400 text-white"
                : "bg-[#F8F6F2] border border-[#0F2942]/30 text-[#111827]"
            }`}
          >
            <p className="font-display font-bold text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Commercial Sponsorship Request Saved</span>
            </p>
            <p className="max-w-[65ch]">
              Prepared for: <strong>{supporterBusinessName}</strong> ({supporterEmail}) —
              Focus: <strong>{chosenOption.title}</strong>
            </p>
            <button
              type="button"
              onClick={() => setInvoiceGenerated(false)}
              className="px-4 py-2 rounded-lg bg-[#0F2942] text-white text-sm font-bold min-h-[42px]"
            >
              Send Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmitSponsor} className="space-y-4 text-sm">
            {sponsorError && (
              <div
                role="alert"
                className="p-3.5 rounded-lg bg-rose-50 border border-rose-400 text-rose-900 text-sm flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{sponsorError}</span>
              </div>
            )}

            <div>
              <label htmlFor="sponsor-name" className="block font-bold mb-1.5">
                Business, Group, or Supporter Name *
              </label>
              <input
                id="sponsor-name"
                type="text"
                value={supporterBusinessName}
                onChange={(e) => setSupporterBusinessName(e.target.value)}
                placeholder="e.g., Mount Pleasant Business Group or Jordan Lee"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
              />
            </div>

            <div>
              <label htmlFor="sponsor-email" className="block font-bold mb-1.5">
                Email for Commercial Sponsorship Invoice *
              </label>
              <input
                id="sponsor-email"
                type="email"
                value={supporterEmail}
                onChange={(e) => setSupporterEmail(e.target.value)}
                placeholder="accounting@business.ca"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E2DDD5] bg-white text-[#111827] min-h-[42px]"
              />
            </div>

            <label className="flex items-start gap-2.5 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={taxAcknowledge}
                onChange={(e) => setTaxAcknowledge(e.target.checked)}
                className="mt-1 w-4 h-4 shrink-0"
              />
              <span>
                I understand this sponsorship provides an official Commercial Sponsorship
                Invoice, not a charitable tax receipt.
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg text-sm min-h-[42px] ${primaryBtn} ${motionClass}`}
              >
                Request Sponsorship Info
              </button>
              <a
                href="#newsletter-signup"
                onClick={onScrollToNewsletter}
                className={`px-4 py-2.5 rounded-lg text-sm min-h-[42px] inline-flex items-center ${newsletterLink} ${motionClass}`}
              >
                Want to know more? Join the newsletter
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
