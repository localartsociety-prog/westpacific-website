"use client";

import React, { useState, useEffect } from "react";
import TopBarAndNav from "../components/TopBarAndNav";
import HomeView from "../components/HomeView";
import EventsView from "../components/EventsView";
import WorkshopsView from "../components/WorkshopsView";
import ArtistsView from "../components/ArtistsView";
import DirectoryView from "../components/DirectoryView";
import SponsorView from "../components/SponsorView";
import GovernanceView from "../components/GovernanceView";
import VolunteerView from "../components/VolunteerView";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import {
  validateArtistContactForm,
  validateNewsletterForm,
  validateSponsorRequest,
} from "../lib/filters";

const INITIAL_ARTIST_FORM = {
  joinType: "Get Listed in the Local Artist Directory (Open Now)",
  artType: "Other Art (Write Yours Below)",
  customArtType: "",
  nameOrBusiness: "",
  email: "",
  websiteLink: "",
  messageOrSpace: "",
};

export default function LocalArtApp() {
  const [activePage, setActivePage] = useState("home");

  // Accessibility states (WCAG 2.2 AA)
  const [accessDrawerOpen, setAccessDrawerOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [pauseMotion, setPauseMotion] = useState(false);
  const [plainLanguageLang, setPlainLanguageLang] = useState("en");

  // Directory filter state
  const [dirDiscipline, setDirDiscipline] = useState("All");
  const [dirSearch, setDirSearch] = useState("");

  // Artist & Contact form state
  const [artistForm, setArtistForm] = useState(INITIAL_ARTIST_FORM);
  const [artistSubmitted, setArtistSubmitted] = useState(false);
  const [artistFormError, setArtistFormError] = useState("");

  // Sponsor a Booth state (no dollar amounts)
  const [selectedSponsorOption, setSelectedSponsorOption] = useState("booth");
  const [supporterBusinessName, setSupporterBusinessName] = useState("");
  const [supporterEmail, setSupporterEmail] = useState("");
  const [taxAcknowledge, setTaxAcknowledge] = useState(false);
  const [invoiceGenerated, setInvoiceGenerated] = useState(false);
  const [sponsorError, setSponsorError] = useState("");

  // Persistent Pre-Footer Newsletter state
  const [newsletterForm, setNewsletterForm] = useState({
    firstName: "",
    email: "",
    role: "Visitor (Free Events & Workshops)",
    consent: false,
  });
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Close drawer with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setAccessDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: pauseMotion ? "auto" : "smooth" });
    }
  };

  const scrollToNewsletter = (e) => {
    if (e) e.preventDefault();
    if (typeof document !== "undefined") {
      const target = document.getElementById("newsletter-signup");
      if (target) {
        target.scrollIntoView({ behavior: pauseMotion ? "auto" : "smooth" });
      }
    }
  };

  const updateArtistField = (field, value) => {
    setArtistForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleArtistSubmit = (e) => {
    e.preventDefault();
    const check = validateArtistContactForm(artistForm);
    if (!check.valid) {
      setArtistFormError(check.error);
      return;
    }
    setArtistFormError("");
    setArtistSubmitted(true);
  };

  const handleSponsorSubmit = (e) => {
    e.preventDefault();
    const check = validateSponsorRequest({
      businessName: supporterBusinessName,
      email: supporterEmail,
      taxAcknowledge,
    });
    if (!check.valid) {
      setSponsorError(check.error);
      return;
    }
    setSponsorError("");
    setInvoiceGenerated(true);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const check = validateNewsletterForm(newsletterForm);
    if (!check.valid) {
      setNewsletterError(check.error);
      return;
    }
    setNewsletterError("");
    setNewsletterSubmitted(true);
  };

  const handleSelectArtistFromDirectory = (artTypeValue) => {
    setArtistForm((prev) => ({
      ...prev,
      joinType: "Get Listed in the Local Artist Directory (Open Now)",
      artType: artTypeValue || "Other Art (Write Yours Below)",
    }));
    setArtistSubmitted(false);
    navigateTo("artists");
  };

  return (
    <div
      style={{ fontSize: `${fontScale}%` }}
      className={`min-h-screen flex flex-col font-sans ${
        highContrast
          ? "bg-black text-white"
          : "bg-[#F8F6F2] text-[#111827]"
      } ${pauseMotion ? "" : "transition-colors duration-150"}`}
    >
      <TopBarAndNav
        activePage={activePage}
        onNavigate={navigateTo}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        fontScale={fontScale}
        setFontScale={setFontScale}
        pauseMotion={pauseMotion}
        setPauseMotion={setPauseMotion}
        plainLanguageLang={plainLanguageLang}
        setPlainLanguageLang={setPlainLanguageLang}
        accessDrawerOpen={accessDrawerOpen}
        setAccessDrawerOpen={setAccessDrawerOpen}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {activePage === "home" && (
          <HomeView
            onNavigate={navigateTo}
            onScrollToNewsletter={scrollToNewsletter}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {activePage === "events" && (
          <EventsView
            onNavigate={navigateTo}
            onScrollToNewsletter={scrollToNewsletter}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {activePage === "workshops" && (
          <WorkshopsView
            onNavigate={navigateTo}
            onScrollToNewsletter={scrollToNewsletter}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {activePage === "artists" && (
          <ArtistsView
            artistForm={artistForm}
            updateArtistField={updateArtistField}
            artistSubmitted={artistSubmitted}
            setArtistSubmitted={setArtistSubmitted}
            artistFormError={artistFormError}
            onSubmitArtist={handleArtistSubmit}
            onScrollToNewsletter={scrollToNewsletter}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {activePage === "directory" && (
          <DirectoryView
            dirDiscipline={dirDiscipline}
            setDirDiscipline={setDirDiscipline}
            dirSearch={dirSearch}
            setDirSearch={setDirSearch}
            onSelectArtistContact={handleSelectArtistFromDirectory}
            onScrollToNewsletter={scrollToNewsletter}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {(activePage === "support" || activePage === "sponsor") && (
          <SponsorView
            selectedSponsorOption={selectedSponsorOption}
            setSelectedSponsorOption={setSelectedSponsorOption}
            supporterBusinessName={supporterBusinessName}
            setSupporterBusinessName={setSupporterBusinessName}
            supporterEmail={supporterEmail}
            setSupporterEmail={setSupporterEmail}
            taxAcknowledge={taxAcknowledge}
            setTaxAcknowledge={setTaxAcknowledge}
            invoiceGenerated={invoiceGenerated}
            setInvoiceGenerated={setInvoiceGenerated}
            sponsorError={sponsorError}
            onSubmitSponsor={handleSponsorSubmit}
            onScrollToNewsletter={scrollToNewsletter}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {activePage === "governance" && (
          <GovernanceView
            onNavigate={navigateTo}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {activePage === "volunteer" && (
          <VolunteerView
            onNavigate={navigateTo}
            onScrollToNewsletter={scrollToNewsletter}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}
      </main>

      <NewsletterSection
        newsletterForm={newsletterForm}
        setNewsletterForm={setNewsletterForm}
        newsletterError={newsletterError}
        newsletterSubmitted={newsletterSubmitted}
        setNewsletterSubmitted={setNewsletterSubmitted}
        onSubmitNewsletter={handleNewsletterSubmit}
        highContrast={highContrast}
        pauseMotion={pauseMotion}
      />

      <Footer onNavigate={navigateTo} highContrast={highContrast} />
    </div>
  );
}
