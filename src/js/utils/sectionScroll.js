export function scrollToNewsSection(section) {
    const newsSection = document.getElementById(section);
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: "smooth" });
    }
  }