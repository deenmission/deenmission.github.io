// ==================== 🔹 DOM References ====================
const dynamicText = document.getElementById("dynamicText");
const ayahText = document.getElementById("ayahText");
const ayahRef = document.getElementById("ayahRef");
const searchInput = document.getElementById("searchInput");
const cardContainer = document.getElementById("cardContainer");
const menuIcon = document.querySelector('.menu-icon');
const menu = document.getElementById('mainMenu');
const closeBtn = document.getElementById('closeMenuBtn');
const noResultsCard = document.getElementById("noResultsCard");

// ==================== 🔹 Data Constants ====================
const ayahs = [
  { text: "বল,তিনিই আল্লাহ,এক ও অদ্বিতীয়।", ref: "Qur'an ১১২:১" },
  { text: "নিশ্চয়ই কষ্টের সাথে রয়েছে স্বস্তি।", ref: "Qur'an ৯৪:৬" },
  { text: "মিথ্যারোপকারীদের জন্য সেদিনের দুর্ভোগ।", ref: "Qur'an ৭৭:১৫" },
  { text: "অতএব তুমি মহান রবের নামে তাসবীহ পাঠ করো।", ref: "Qur'an ৬৯:৫২" },
  { text: "আর তোমার রবের প্রতি আকৃষ্ট হও।", ref: "Qur'an ৯৪:৮" },
  { text: "সে মনে করে তার সম্পদ তাকে চিরজীবী করবে।", ref: "Qur'an ১০৪:৩" }
];

const cards = [
  { title: "সালাতের গুরুত্ব", details: "সালাত বা নামাজ ...", link: "pages/salat.html" },
  { title: "রমজানের গুরুত্ব", details: "রমজান মাসের গুরুত্ব ...", link: "pages/siam.html" } ];

// ==================== 🔹 Random Ayah ====================
function showRandomAyah() {
  if (!ayahText || !ayahRef) return;

  const ayah = ayahs[Math.floor(Math.random() * ayahs.length)];

  ayahText.style.opacity = "0";
  ayahText.style.transform = "translateY(20px)";
  void ayahText.offsetWidth;

  ayahText.textContent = ayah.text;
  ayahRef.textContent = ayah.ref;

  ayahText.style.animation = "ayahAnimate 1s ease-in-out forwards";
}

showRandomAyah();
setInterval(showRandomAyah, 6000);

// ==================== 🔹 Generate Cards ====================
function generateCards() {
  if (!cardContainer) return;

  for (let i = 0; i < 2; i++) {
    const data = cards[i % cards.length];
    const div = document.createElement("div");
    div.className = "card fade-card";
    div.innerHTML = `
      <div class="card-title">${data.title}</div>
      <button class="read-btn" onclick="location.href='${data.link}'">Read</button>
    `;
    cardContainer.appendChild(div);
  }
}
generateCards();

// ==================== 🔹 Intersection Observer ====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-card").forEach(card => observer.observe(card));

// ==================== 🔹 Card Search Filter ====================
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const cardsEls = Array.from(document.querySelectorAll(".fade-card"));
    let matched = [];

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

    if (keyword && matched.length === 0 && noResultsCard) {
      noResultsCard.style.display = "block";
      noResultsCard.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (noResultsCard) {
      noResultsCard.style.display = "none";
    }

    if (matched.length > 0) {
      matched[0].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

// ==================== 🔹 Menu Toggle ====================
if (menuIcon && menu) {
  menuIcon.addEventListener('click', function () {
    menu.classList.toggle('show');
  });
}

if (closeBtn && menu) {
  closeBtn.addEventListener('click', function () {
    menu.classList.remove('show');
  });
}

// ==================== 🔹 Swipe to Close Menu (Mobile) ====================
let touchStartX = 0;

if (menu) {
  menu.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  });

  menu.addEventListener('touchend', function (e) {
    let touchEndX = e.changedTouches[0].clientX;
    let swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 50) {
      menu.classList.remove('show');
    }
  });
}