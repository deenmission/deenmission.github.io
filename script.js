document.addEventListener("DOMContentLoaded", function () {
  const dynamicText = document.getElementById("dynamicText");
  const cardText = document.getElementById("ayahText");
  const readMoreBtn = document.getElementById("readMoreBtn");
  const exitBtn = document.getElementById("exitBtn");
  const textContent = document.querySelector(".text-content");
  const extraText = document.querySelector(".extra-text");

  const dhikr = ["Allahu Akbar", "Subhanallah", "Alhamdulillah", "La ilaha illallah", "Astaghfirullah"];
  const ayahs = [
    "Indeed, Allah is with those who fear Him. (Qur'an 16:128)",
    "Verily, in the remembrance of Allah do hearts find rest. (Qur'an 13:28)",
    "And whoever puts their trust in Allah, then He will suffice him. (Qur'an 65:3)",
    "Allah does not burden a soul beyond that it can bear. (Qur'an 2:286)",
    "So remember Me; I will remember you. (Qur'an 2:152)",
    "Indeed, with hardship [will be] ease. (Qur'an 94:6)"
  ];

  let dhikrIndex = 0;
  setInterval(() => {
    dynamicText.textContent = dhikr[dhikrIndex];
    dynamicText.style.animation = 'none';
    void dynamicText.offsetWidth;
    dynamicText.style.animation = 'fadeSlide 1s ease-in-out';
    dhikrIndex = (dhikrIndex + 1) % dhikr.length;
  }, 3000);

  cardText.textContent = "ALLAH IS ONE";
  setTimeout(() => {
    setInterval(() => {
      const randomAyah = ayahs[Math.floor(Math.random() * ayahs.length)];
      cardText.textContent = randomAyah;
    }, 5000);
  }, 3000);

  readMoreBtn.addEventListener("click", () => {
    textContent.classList.remove("fade");
    extraText.style.display = "inline";
    readMoreBtn.style.display = "none";
    exitBtn.style.display = "inline-block";
  });

  exitBtn.addEventListener("click", () => {
    textContent.classList.add("fade");
    extraText.style.display = "none";
    readMoreBtn.style.display = "inline-block";
    exitBtn.style.display = "none";
  });
});
