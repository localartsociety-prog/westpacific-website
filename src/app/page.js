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
import Footer from "../components/Footer";
import {
  validateArtistApplication,
  validateSponsorRequest,
  validateWorkshopContact,
} from "../lib/filters";

const INITIAL_ARTIST_FORM = {
  artistName: "",
  email: "",
  phone: "",
  discipline: "Visual Art / Painting / Illustration",
  customArtType: "",
  portfolioLink: "",
  accommodations: "",
  photoName: "",
};

export default function LocalArtApp() {
  const [activePage, setActivePage] = useState("home");

  // Accessibility states (WCAG 2.2 AA)
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

  // Workshop 4-Field Contact Modal state
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    fullName: "",
    contact: "",
    joinRole: "I am an artist / teacher with a workshop idea",
    ideaOrLocation: "",
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(null);
  const [bookingError, setBookingError] = useState("");

  // Artist Application & Booth Selector state ($120 Standard / $150 Full 10x10)
  const [selectedBoothTier, setSelectedBoothTier] = useState("standard_120");
  const [opportunityType, setOpportunityType] = useState(
    "Get Listed in the Artist Directory (Free & Open Now)"
  );
  const [artistForm, setArtistForm] = useState(INITIAL_ARTIST_FORM);
  const [autoSaveTimestamp, setAutoSaveTimestamp] = useState(
    "Form notes saved in this browser"
  );
  const [artistSubmitted, setArtistSubmitted] = useState(false);
  const [artistFormError, setArtistFormError] = useState("");

  // Sponsor a Booth state
  const [supportAmount, setSupportAmount] = useState(120);
  const [supporterBusinessName, setSupporterBusinessName] = useState("");
  const [supporterEmail, setSupporterEmail] = useState("");
  const [taxAcknowledge, setTaxAcknowledge] = useState(false);
  const [invoiceGenerated, setInvoiceGenerated] = useState(false);
  const [sponsorError, setSponsorError] = useState("");

  // Close drawer or modal with Escape key
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

  // Load saved artist form draft from localStorage if present
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("local_art_artist_draft");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          setArtistForm((prev) => ({ ...prev, ...parsed }));
        }
      }
    } catch {
      // Ignore storage read errors in restricted frames
    }
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: pauseMotion ? "auto" : "smooth" });
    }
  };

  const updateArtistField = (field, value) => {
    setArtistForm((prev) => {
      const next = { ...prev, [field]: value };
      try {
        window.localStorage.setItem("local_art_artist_draft", JSON.stringify(next));
      } catch {
        // Ignore storage write errors
      }
      return next;
    });
    const now = new Date();
    setAutoSaveTimestamp(
      `Form notes saved at ${now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`
    );
  };

  const handleWorkshopSubmit = (e) => {
    e.preventDefault();
    const check = validateWorkshopContact(bookingForm);
    if (!check.valid) {
      setBookingError(check.error);
      return;
    }
    setBookingError("");
    setBookingConfirmed({
      workshop: selectedWorkshop,
      attendee: bookingForm.fullName.trim(),
      contact: bookingForm.contact.trim(),
      joinRole: bookingForm.joinRole,
      ideaOrLocation: bookingForm.ideaOrLocation.trim(),
    });
    setBookingForm({
      fullName: "",
      contact: "",
      joinRole: "I am an artist / teacher with a workshop idea",
      ideaOrLocation: "",
    });
    setSelectedWorkshop(null);
  };

  const handleArtistSubmit = (e) => {
    e.preventDefault();
    const check = validateArtistApplication(artistForm);
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

  const handleSelectArtistFromDirectory = (artTypeOption) => {
    setOpportunityType("Get Listed in the Artist Directory (Free & Open Now)");
    updateArtistField(
      "discipline",
      artTypeOption || "Other Art Type (Write below)"
    );
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
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {activePage === "events" && (
          <EventsView
            eventCategory={eventCategory}
            setEventCategory={setEventCategory}
            eventSearch={eventSearch}
            setEventSearch={setEventSearch}
            onNavigate={navigateTo}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {activePage === "workshops" && (
          <WorkshopsView
            selectedWorkshop={selectedWorkshop}
            setSelectedWorkshop={setSelectedWorkshop}
            bookingForm={bookingForm}
            setBookingForm={setBookingForm}
            bookingConfirmed={bookingConfirmed}
            setBookingConfirmed={setBookingConfirmed}
            bookingError={bookingError}
            setBookingError={setBookingError}
            onSubmitWorkshop={handleWorkshopSubmit}
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {activePage === "artists" && (
          <ArtistsView
            selectedBoothTier={selectedBoothTier}
            setSelectedBoothTier={setSelectedBoothTier}
            opportunityType={opportunityType}
            setOpportunityType={setOpportunityType}
            artistForm={artistForm}
            updateArtistField={updateArtistField}
            autoSaveTimestamp={autoSaveTimestamp}
            artistSubmitted={artistSubmitted}
            setArtistSubmitted={setArtistSubmitted}
            artistFormError={artistFormError}
            onSubmitArtist={handleArtistSubmit}
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
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}

        {(activePage === "support" || activePage === "sponsor") && (
          <SponsorView
            supportAmount={supportAmount}
            setSupportAmount={setSupportAmount}
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
            highContrast={highContrast}
            pauseMotion={pauseMotion}
          />
        )}
      </main>

      <Footer onNavigate={navigateTo} highContrast={highContrast} />
    </div>
  );
}
