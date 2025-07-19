/* import পরবর্তীতে শুধু function এর পূর্বে import লিখে দিলেই index.html এ একটি কোড দিয়েই সকল js লোড হবে*/

 function generateCards(cards, cardContainer) {
  if (!cardContainer || !cards) return;
  cards.forEach(data => {
    const div = document.createElement("div");
    div.className = "card fade-card";
    div.innerHTML = `
      <div class="card-title">${data.title}</div>
      <button class="read-btn" onclick="location.href='${data.link}'">Read</button>
    `;
    cardContainer.appendChild(div);
  });
}