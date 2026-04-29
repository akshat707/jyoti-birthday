// 🎯 Typing Effect
const text = "This is something special made with love 💖";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 50);
  }
}
typingEffect();

// ❤️ Floating Hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 25) + "px";
  heart.style.animationDuration = (3 + Math.random() * 5) + "s";

  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// 🎉 Confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function confettiBurst() {
  for (let i = 0; i < 120; i++) {
    ctx.fillStyle = "hsl(" + Math.random() * 360 + ",100%,50%)";
    ctx.fillRect(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      5,
      5
    );
  }
}

// 🎵 MUSIC CONTROL
const music = document.getElementById("bgMusic");

// Smooth fade in
function fadeInMusic() {
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.3) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

// Smooth fade out
function fadeOutMusic() {
  let vol = music.volume;
  const fade = setInterval(() => {
    if (vol > 0.05) {
      vol -= 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
      music.pause();
    }
  }, 200);
}

// 🎥 VIDEO LIST
const videos = [
  "videos/vid1.mp4",
  "videos/vid2.mp4",
  "videos/vid3.mp4",
  "videos/vid4.mp4",
  "videos/vid5.mp4",
  "videos/vid6.mp4"
];

let current = 0;

// ▶️ Play sequence
function playVideo(index) {
  const player = document.getElementById("mainVideo");

  player.src = videos[index];
  player.play();

  player.onended = () => {
    current++;
    if (current < videos.length) {
      playVideo(current);
    } else {
      fadeOutMusic(); // end music when videos finish
    }
  };
}

// 🎁 Start Surprise
function startSurprise() {
  document.getElementById("videoSection").classList.remove("hidden");

  document.getElementById("videoSection").scrollIntoView({
    behavior: "smooth"
  });

  fadeInMusic();   // 🔥 smooth start
  confettiBurst();

  playVideo(current);
}
