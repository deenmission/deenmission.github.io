 function initSearch(searchInput, cardContainer, noResultsCard) {
  if (!searchInput) return;
  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const cardsEls = [...document.querySelectorAll(".fade-card")];
    const matched = [];

    cardsEls.forEach(card => {
      const titleEl = card.querySelector(".card-title");
      titleEl.innerHTML = titleEl.textContent;
      card.classList.remove("highlight-card");

      if (keyword && titleEl.textContent.toLowerCase().includes(keyword)) {
        titleEl.innerHTML = titleEl.textContent.replace(
          new RegExp(`(${keyword})`, "gi"),
          `<span class="highlight">$1</span>`
        );
        card.classList.add("highlight-card");
        matched.push(card);
      }
    });

    matched.reverse().forEach(card => cardContainer.prepend(card));

    if (keyword && matched.length === 0) {
      noResultsCard.style.display = "block";
      noResultsCard.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      noResultsCard.style.display = "none";
    }

    if (matched.length > 0) {
      matched[0].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}