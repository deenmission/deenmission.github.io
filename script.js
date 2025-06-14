document.addEventListener("DOMContentLoaded", function () {
  const posts = [
    "Say, He is Allah, the One.",
    "So which of the favors of your Lord will you both deny?",
    "Indeed, the Hour is coming - no doubt about it - but most of the people do not believe.",
    "On that Day you will be brought together, and no secret of yours will be hidden.",
    "And be steadfast in your Lord."
  ];

  let current = 0;
  const postEls = [document.getElementById("post1"), document.getElementById("post2")];

  // প্রথম আয়াত দেখাও
  postEls[0].textContent = posts[current];
  postEls[0].classList.add("show");

  function showNextPost() {
    const currentEl = postEls[current % 2];
    const nextEl = postEls[(current + 1) % 2];

    // Random index তৈরি করো যাতে আগেরটা না আসে
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * posts.length);
    } while (nextIndex === current);
    current = nextIndex;

    // নতুন আয়াত সেট করো
    nextEl.textContent = posts[current];

    // অ্যানিমেশন class পরিবর্তন
    currentEl.classList.remove("show");
    currentEl.classList.add("hide");
    nextEl.classList.remove("hide");
    nextEl.classList.add("show");
  }

  // প্রতি ৬ সেকেন্ডে আয়াত পরিবর্তন
  setInterval(showNextPost, 6000);
});
