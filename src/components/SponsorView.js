import React from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { SPONSOR_TIERS } from "../data/siteContent";

export default function SponsorView({
  supportAmount,
  setSupportAmount,
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
  highContrast,
  pauseMotion,
}) {
  const cardSurface = highContrast
    ? "bg-zinc-950 border-2 border-white text-white"
    : "bg-white border border-[#E2DDD5] text-[#111827] shadow-sm";

  const comingSoonBadge = highContrast
    ? "bg-yellow-400 text-black font-bold"
    : "bg-[#FEF3C7] text-[#78350F] font-bold";

  const primaryBtn = highContrast
    ? "bg-yellow-400 text-black font-bold border-2 border-white hover:bg-yellow-300"
    : "bg-[#B8332A] text-white font-bold hover:bg-[#962820]";

  const motionClass = pauseMotion ? "" : "transition-colors duration-150";

  return (
    <div className="space-y-8 text-left">
      <div className="space-y-3 max-w-[65ch]">
        <span className={`inline-block px-3 py-1 rounded text-xs ${comingSoonBadge}`}>
          Commercial Sponsorship Invoice • Registered BC Non-Profit Society
        </span>
        <h1
          className={`font-display text-3xl font-extrabold ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Sponsor an Artist Booth or Free Public Event
        </h1>
        <p className="text-base max-w-[65ch]">
          Your sponsorship will keep artist booth fees low ($120 to $150) and fund free
          public art classes across Greater Vancouver.
        </p>
      </div>

      {/* PLAIN-LANGUAGE TAX NOTICE */}
      <div
        className={`p-5 rounded-xl text-sm leading-relaxed max-w-[65ch] ${
          highContrast
            ? "bg-zinc-900 border-2 border-yellow-400 text-white"
            : "bg-[#FEF3C7] border border-[#78350F]/30 text-[#78350F]"
        }`}
      >
        <strong>Important Tax Notice:</strong> We are a registered British Columbia
        non-profit society, not a federal charity. Sponsorship gifts do not provide
        charitable tax receipts. Businesses receive an official{" "}
        <strong>Commercial Sponsorship Invoice</strong> for their marketing and community
        records.
      </div>

      {/* 4 SELECTABLE SPONSORSHIP TIERS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SPONSOR_TIERS.map((tier) => {
          const isSelected = supportAmount === tier.amount;
          return (
            <button
              key={tier.amount}
              type="button"
              onClick={() => {
                setSupportAmount(tier.amount);
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
                <p
                  className={`font-display text-2xl font-extrabold tabular-nums ${
                    highContrast ? "text-yellow-300" : "text-[#0F2942]"
                  }`}
                >
                  ${tier.amount} CAD
                </p>
                <h2 className="font-display font-bold text-base">{tier.title}</h2>
                <p className="text-sm">{tier.desc}</p>
              </div>
              <span className="mt-4 inline-block text-xs font-bold underline">
                {isSelected ? "Selected Tier" : "Choose This Tier"}
              </span>
            </button>
          );
        })}
      </div>

      {/* SIMPLE INVOICE REQUEST FORM */}
      <div className={`rounded-2xl p-6 sm:p-8 max-w-2xl ${cardSurface}`}>
        <h2
          className={`font-display text-xl font-bold mb-4 tabular-nums ${
            highContrast ? "text-white" : "text-[#0F2942]"
          }`}
        >
          Request a Commercial Sponsorship Invoice (${supportAmount} CAD)
        </h2>

        {invoiceGenerated ? (
          <div
            role="status"
            className={`p-5 rounded-xl text-sm space-y-2 ${
              highContrast
                ? "bg-zinc-900 border-2 border-yellow-400 text-white"
                : "bg-[#CCFBF1] border border-[#115E59] text-[#111827]"
            }`}
          >
            <p className="font-display font-bold text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Commercial Sponsorship Invoice Request Saved (#INV-2026-01)</span>
            </p>
            <p className="max-w-[65ch]">
              Prepared for: <strong>{supporterBusinessName}</strong> ({supporterEmail}) —
              Amount: <strong className="tabular-nums">${supportAmount}.00 CAD</strong>
            </p>
            <button
              type="button"
              onClick={() => setInvoiceGenerated(false)}
              className="mt-2 px-4 py-2 rounded-lg bg-[#0F2942] text-white text-sm font-bold min-h-[42px]"
            >
              Request Another Invoice
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
                placeholder="e.g., Mount Pleasant Business Association or Jordan Lee"
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

            <button
              type="submit"
              className={`px-6 py-3 rounded-lg text-sm min-h-[42px] tabular-nums ${primaryBtn} ${motionClass}`}
            >
              Request ${supportAmount} CAD Sponsorship Invoice
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
