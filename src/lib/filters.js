export function filterDirectoryCards(cards, discipline, searchQuery) {
  const normalizedQuery = (searchQuery || "").trim().toLowerCase();

  return cards
    .map((card) => {
      if (card.id === "dir-4") {
        if (discipline === "Music") {
          return { ...card, displayTitle: "Music Artist", artTypeValue: "Music" };
        }
        if (discipline === "Other Art") {
          return {
            ...card,
            displayTitle: "Other Art Artist",
            artTypeValue: "Other Art (Write Yours Below)",
          };
        }
      }
      return { ...card, displayTitle: card.title };
    })
    .filter((card) => {
      const matchesDiscipline =
        discipline === "All" ||
        card.category === discipline ||
        (card.id === "dir-4" && (discipline === "Music" || discipline === "Other Art"));

      if (!matchesDiscipline) return false;
      if (!normalizedQuery) return true;

      return (
        card.displayTitle.toLowerCase().includes(normalizedQuery) ||
        card.category.toLowerCase().includes(normalizedQuery) ||
        card.description.toLowerCase().includes(normalizedQuery)
      );
    });
}

export function validateArtistContactForm(form) {
  const name = (form?.nameOrBusiness || "").trim();
  const email = (form?.email || "").trim();
  if (!name || !email) {
    return {
      valid: false,
      error: "Please enter your name or business name and your email address.",
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

export function validateNewsletterForm({ firstName, email, consent }) {
  if (!(firstName || "").trim() || !(email || "").trim()) {
    return {
      valid: false,
      error: "Please enter your first name and email address.",
    };
  }
  if (!consent) {
    return {
      valid: false,
      error: "Please check the consent box so we can send future email updates.",
    };
  }
  return { valid: true, error: "" };
}
