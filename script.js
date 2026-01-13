const reasons = [
  "Because you are you",
  "Because you make me feel calmer",
  "Because you listen to me",
  "Because you understand me even when I don’t explain well",
  "Because you are patient with me",
  "Because you stay",
  "Because you care in your own way",
  "Because you notice small things",
  "Because you support me",
  "Because you make bad days better",
  "Because you make good days even better",
  "Because you are honest with me",
  "Because you make me laugh",
  "Because you don’t judge me",
  "Because you try",
  "Because you believe in me",
  "Because you accept me as I am",
  "Because you make me feel safe",
  "Because you are kind",
  "Because you are real",
  "Because you make time for me",
  "Because you are thoughtful",
  "Because you understand my moods",
  "Because you don’t give up easily",
  "Because you make me feel appreciated",
  "Because you motivate me",
  "Because you care about my feelings",
  "Because you make me feel wanted",
  "Because you are patient when I’m difficult",
  "Because you know how to calm me down",
  "Because you remember things about me",
  "Because you are supportive when I doubt myself",
  "Because you make me smile without trying",
  "Because you accept my flaws",
  "Because you make me feel enough",
  "Because you choose me",
  "Because you make me feel understood",
  "Because you are gentle with me",
  "Because you respect me",
  "Because you are trustworthy",
  "Because you are there when I need you",
  "Because you make effort",
  "Because you don’t give up on us",
  "Because you make me feel lucky",
  "Because you bring warmth into my life",
  "Because you make things feel simpler",
  "Because you support my dreams",
  "Because you make me feel closer to myself",
  "Because you make me feel loved",
  "Because you are consistent",
  "Because you are comforting",
  "Because you care even when you’re tired",
  "Because you make me feel valued",
  "Because you are sincere",
  "Because you show love in your own way",
  "Because you make me feel chosen",
  "Because you are patient with my silence",
  "Because you make life softer",
  "Because you make me feel hopeful",
  "Because you stay true to yourself",
  "Because you make me feel seen",
  "Because you bring peace into my life",
  "Because you make me want to be better",
  "Because you are important to me",
  "Because you make me feel at home",
  "Because you are special to me",
  "Because I love you ❤️"
];

let i = 0;

function next() {
  i++;
  if (i < reasons.length) {
    document.getElementById("text").innerText = reasons[i];
    document.getElementById("counter").innerText = `${i + 1} / 67`;
  }
}
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  window.location.href = "reasons.html";
});
