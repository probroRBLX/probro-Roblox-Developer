// ===== Nav scroll handlers =====
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const systems = document.getElementById("systems-btn");
const games = document.getElementById("games-btn");
const connect = document.getElementById("connect-btn");

const heroGamesBtn = document.getElementById("hero-games-btn");
const heroConnectBtn = document.getElementById("hero-connect-btn");

function scrollToId(id){
    const el = document.getElementById(id);
    if(el){
        el.scrollIntoView({ behavior: "smooth" });
    }
}

home.addEventListener("click", () => scrollToId("home"));
about.addEventListener("click", () => scrollToId("about"));
systems.addEventListener("click", () => scrollToId("systems"));
games.addEventListener("click", () => scrollToId("games"));
connect.addEventListener("click", () => scrollToId("connect"));

if(heroGamesBtn) heroGamesBtn.addEventListener("click", () => scrollToId("games"));
if(heroConnectBtn) heroConnectBtn.addEventListener("click", () => scrollToId("connect"));

// ===== Game cards =====
const pauseIt = document.getElementById("pauseIt");
const plantsBrainrots = document.getElementById("plantsBrainrots");
const fugaBattles = document.getElementById("fugaBattles");

pauseIt.addEventListener("click", () => {
    window.open("https://www.roblox.com/games/95619954389830/Pause-It", "_blank");
});

plantsBrainrots.addEventListener("click", () => {
    window.open("https://www.roblox.com/games/137577081523881/Plants-VS-Memes", "_blank");
});

fugaBattles.addEventListener("click", () => {
    window.open("https://www.roblox.com/games/137613731839680/Fuga-Battles", "_blank");
});

// ===== Footer year =====
const yearEl = document.getElementById("year");
if(yearEl) yearEl.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll(
".section, .game-card, .tile, .connect-btn, .hero-text > *, .avatar-frame"
).forEach(el=>{
    el.classList.add("reveal");
    observer.observe(el);
});