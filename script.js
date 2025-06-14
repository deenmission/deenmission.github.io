const posts = [
"Say, He is Allah, the One.
                        (112:01)"
"So which of the favors of your Lord will you both deny?
                                                (55:13)"
"Indeed, the Hour is coming - no doubt about it - but most of the people do not believe.
                                                                                (40:59)"
"On that Day you will be brought together, and no secret of yours will be hidden.
                                                                          (69:18)"
"And be steadfast in your Lord.”
                           (94:08)"
  
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
