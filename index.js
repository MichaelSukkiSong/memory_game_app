let img_src = [];
let score = 0;
let attmpts = 0;

document.querySelector(".box").addEventListener("click", (e) => {
  if (e.target.matches(".unopened")) {
    // 1) show image
    e.target.firstElementChild.style.visibility = "visible";
    // 2) save image source in array
    img_src.push(e.target.firstElementChild.src);
    // console.log(img_src.length);
    // 3) check match
    if (img_src.length === 2) {
      checkMatch(img_src[0], img_src[1]);
    }
  }
});

const checkMatch = (source_1, source_2) => {
  if (source_1 === source_2) {
    // display text
    window.setTimeout(window.alert, 1000, "You got a match!");
    const score = countAndReturnScore();
    displayScore(score);
    resetArr();
  } else {
    window.setTimeout(window.alert, 1000, "Wrong match!");
    const attempts = countAndReturnAttempts();
    displayFailedAttempts(attempts);
    resetArr();
  }
};

const resetArr = () => {
  img_src = [];
};

const countAndReturnScore = () => {
  score += 1;
  return score;
};

const displayScore = (score) => {
  document.querySelector(".score").innerHTML = `<h2 class="score">Score:</h2>`;
  document.querySelector(".score").insertAdjacentText("beforeend", `${score}`);
};

const countAndReturnAttempts = () => {
  attmpts += 1;
  return attmpts;
};

const displayFailedAttempts = (attempts) => {
  document.querySelector(
    ".attempts"
  ).innerHTML = `<h2 class="attempts">Failed Attempts:</h2>`;
  document
    .querySelector(".attempts")
    .insertAdjacentText("beforeend", `${attempts}`);
};
