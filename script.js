const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const text = document.getElementById("text");
const bgm = document.getElementById("bgm");

// play lagu setelah klik (biar HP gak block)
document.body.addEventListener("click", () => {
  bgm.play();
});

const kataKocak = [
  "PLISSS 😭 jangan gitu dong",
  "aku udah berubah 😭",
  "aku janji gak ghosting 😭",
  "yaudah aku nangis 😔",
  "jahat banget sih 😭"
];

noBtn.addEventListener("click", () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  text.innerHTML = kataKocak[Math.floor(Math.random() * kataKocak.length)];
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:80px; color:white;">
      <h1>🥹 Makasih ya!</h1>
      <p>Kamu orang baik banget 😭</p>
      <p>Semoga THR kamu deras 💸🔥</p>
      <p>- Muhammad Dandy Nugraha -</p>
    </div>
  `;
});
