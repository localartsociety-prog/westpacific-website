export function filterEvents(events, category, searchQuery) {
  const normalizedQuery = (searchQuery || "").trim().toLowerCase();
  return events.filter((evt) => {
    const matchesCategory = category === "All" || evt.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      evt.title.toLowerCase().includes(normalizedQuery) ||
      evt.plannedArea.toLowerCase().includes(normalizedQuery) ||
      evt.summary.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function filterDirectoryArtists(artists, discipline, searchQuery) {
  const normalizedQuery = (searchQuery || "").trim().toLowerCase();
  if (discipline === "Other Art") {
    return [];
  }
  return artists.filter((artist) => {
    const matchesDiscipline =
      discipline === "All" || artist.discipline === discipline;
    if (!matchesDiscipline) return false;
    if (!normalizedQuery) return true;
    return (
      artist.name.toLowerCase().includes(normalizedQuery) ||
      artist.discipline.toLowerCase().includes(normalizedQuery) ||
      artist.artTypeOption.toLowerCase().includes(normalizedQuery) ||
      artist.description.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function getBoothTierDetails(tier) {
  if (tier === "full_150") {
    return {
      id: "full_150",
      fee: 150,
      label: "$150 Full 10x10 Booth",
    };
  }
  return {
    id: "standard_120",
    fee: 120,
    label: "$120 Standard Booth",
  };
}

export function validateWorkshopContact(form) {
  const name = (form?.fullName || "").trim();
  const contact = (form?.contact || "").trim();
  if (!name || !contact) {
    return {
      valid: false,
      error: "Please enter your name or business name and your email or phone number.",
    };
  }
  return { valid: true, error: "" };
}

export function validateArtistApplication(form) {
  const artistName = (form?.artistName || "").trim();
  const email = (form?.email || "").trim();
  if (!artistName || !email) {
    return {
      valid: false,
      error: "Please enter your name or studio name and your email address.",
    };
  }
  return { valid: true, error: "" };
}

export function validateSponsorRequest({ businessName, email, taxAcknowledge }) {
  if (!taxAcknowledge) {
    return {
      valid: false,
      error: "Please check the box to confirm the non-profit invoice notice.",
    };
  }
  if (!(businessName || "").trim() || !(email || "").trim()) {
    return {
      valid: false,
      error: "Please enter your business or supporter name and email address.",
    };
  }
  return { valid: true, error: "" };
}
