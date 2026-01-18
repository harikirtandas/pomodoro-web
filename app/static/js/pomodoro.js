// =======================
// CONFIGURACIÓN
// =======================
const STUDY_DURATION = 25 * 60; // 25 minutos
const BREAK_DURATION = 5 * 60; // 5 minutos

// =======================
// ESTADO DE LA APP
// =======================
let state = "stopped"; // stopped | running | paused
let mode = "study"; // study | break
let timeRemaining = STUDY_DURATION;
let timerId = null;

// =======================
// AUDIO
// =======================
const bellAudio = new Audio("/static/audio/bell.mp3");
const popAudio = new Audio("/static/audio/pop.mp3");

bellAudio.preload = "auto";
popAudio.preload = "auto";

function playBell() {
  bellAudio.currentTime = 0;
  bellAudio.play().catch(() => {
    console.log("🔇 Bell bloqueado hasta interacción del usuario");
  });
}

function playPop() {
  popAudio.currentTime = 0;
  popAudio.play().catch(() => {
    console.log("🔇 Pop bloqueado hasta interacción del usuario");
  });
}

// =======================
// RENDER
// =======================
function renderTime() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const formatted =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

  const timerEl = document.getElementById("timer");
  if (timerEl) {
    timerEl.textContent = formatted;
  }
}

function renderPhrase() {
  if (!window.PHRASES || window.PHRASES.length === 0) return;

  const phraseEl = document.getElementById("phrase");
  if (!phraseEl) return;

  const index = Math.floor(Math.random() * window.PHRASES.length);
  phraseEl.textContent = window.PHRASES[index];
}

// =======================
// STATE MACHINE
// =======================
function handleEvent(event) {
  console.log("📍 Evento:", event);

  switch (event) {
    case "start_study":
      if (state === "stopped") {
        mode = "study";
        timeRemaining = STUDY_DURATION;
        state = "running";
        startTimer();
        playBell();
        renderPhrase();
      }

      if (state === "paused") {
        state = "running";
        startTimer();
      }
      break;

    case "pause":
      if (state === "running") {
        state = "paused";
        playPop();
      }
      break;

    case "reset":
      stopTimer();
      state = "stopped";
      mode = "study";
      timeRemaining = STUDY_DURATION;
      renderTime();
      playPop();
      renderPhrase();
      break;

    case "stop":
      stopTimer();
      state = "stopped";
      mode = null;
      timeRemaining = 0;
      renderTime();
      playPop();
      break;

    case "time_up":
      if (mode === "study") {
        mode = "break";
        timeRemaining = BREAK_DURATION;
        playPop();
      } else {
        mode = "study";
        timeRemaining = STUDY_DURATION;
      }

      state = "running";
      startTimer();
      renderPhrase();
      if (mode === "study") {
        playBell();
      }
      break;
  }
}

// =======================
// TIMER
// =======================
function startTimer() {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    if (state !== "running") return;

    timeRemaining--;
    renderTime();

    if (timeRemaining <= 0) {
      stopTimer();
      handleEvent("time_up");
    }
  }, 1000);
}

function stopTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

// =======================
// INIT
// =======================
renderTime();
renderPhrase();
