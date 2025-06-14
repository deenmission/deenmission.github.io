const posts = [
  "Alhamdulillah! 300+ families received food packs this week. 💚",
  "Join our live Tafsir every Friday at 8 PM. 📖",
  "Never underestimate a sincere dua. 🤲",
  "Upcoming Halaqa: Youth & The Qur'an - Sunday 5 PM!",
  "Your zakat helps orphans. Sponsor now. 💝"
];

let current = 0;
const postEls = [document.getElementById("post1"), document.getElementById("post2")];

postEls[0].textContent = posts[0];
postEls[0].classList.add("show");

function showNextPost() {
  const currentEl = postEls[current % 2];
  const nextEl = postEls[(current + 1) % 2];

  current = (current + 1) % posts.length;

  nextEl.textContent = posts[current];
  currentEl.classList.remove("show");
  currentEl.classList.add("hide");
  nextEl.classList.remove("hide");
  nextEl.classList.add("show");
}

setInterval(showNextPost, 6000);
