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

  postEls[0].textContent = posts[0];
  postEls[0].classList.add("show");

  function showNextPost() {
    const currentEl = postEls[current % 2];
    const nextEl = postEls[(current + 1) % 2];

    // এলোমেলোভাবে (random) আয়াত দেখানোর জন্য নিচের ৩ লাইন যোগ করো
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * posts.length);
    } while (nextIndex === current);
    current = nextIndex;

    nextEl.textContent = posts[current];
    currentEl.classList.remove("show");
    currentEl.classList.add("hide");
    nextEl.classList.remove("hide");
    nextEl.classList.add("show");
  }

  setInterval(showNextPost, 6000);
});
