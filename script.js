const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const text = document.getElementById("text");
const bgm = document.getElementById("bgm");

// Mulai musik saat interaksi pertama
document.body.addEventListener("click", () => {
  bgm.play().catch(() => {}); // Catch error kalau browser block
}, { once: true });

const kataKocak = [
  "Yakin? Aku nangis nih 😢",
  "Tega banget sama Dandy..",
  "Gak kasihan liat muka ini? 🥺",
  "Klik 'Iya' dapet pahala loh!",
  "Yah, kok gitu sih? 😔"
];

// Tombol "Tidak" yang lari-lari
noBtn.addEventListener("mouseover", moveButton); // Lari saat didekati mouse
noBtn.addEventListener("click", moveButton);    // Lari saat diklik

function moveButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
  
  noBtn.style.position = "fixed"; // Biar lari ke seluruh layar
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  
  text.innerHTML = kataKocak[Math.floor(Math.random() * kataKocak.length)];
}

// Tombol "Iya"
yesBtn.addEventListener("click", () => {
  document.querySelector(".card").innerHTML = `
    <div style="padding: 20px;">
      <h1 style="font-size: 50px;">🥳</h1>
      <h1 style="color:#FFD700">Yeay! Makasih Ya!</h1>
      <p style="color:white; font-size: 18px;">
        Dandy emang dimaafin, tapi THR jangan lupa ya? 😂<br><br>
        <b>Semoga harimu menyenangkan!</b>
      </p>
      <button onclick="location.reload()" style="background:white; color:black; margin-top:20px;">Main Lagi</button>
    </div>
  `;
  // Tambahkan efek konfeti sederhana jika ingin (opsional)
  document.body.style.background = "#1e3c72";
});
