/* ==========================================
   FOR MY PIKU ❤️
   script.js - Part 1
========================================== */

const startBtn = document.getElementById("startBtn");
const loveBtn = document.getElementById("loveBtn");
const music = document.getElementById("bgMusic");

const memories = document.querySelectorAll(".memory");
const heartContainer = document.getElementById("hearts");

/* ===========================
   START BUTTON
=========================== */

startBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    document.querySelector(".timeline").scrollIntoView({
        behavior: "smooth"
    });

});

/* ===========================
   HERO ANIMATION
=========================== */

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
    duration: 1.5,
    opacity: 0,
    y: -80,
    ease: "power3.out"
});

gsap.from(".hero p", {
    duration: 1.5,
    opacity: 0,
    y: 40,
    delay: .5,
    ease: "power3.out"
});

gsap.from("#startBtn", {
    duration: 1,
    opacity: 0,
    scale: .5,
    delay: 1.2
});

/* ===========================
   MEMORY SCROLL EFFECT
=========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.25
});

memories.forEach((memory) => {

    observer.observe(memory);

});

/* ===========================
   FLOATING HEARTS
=========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    heart.style.opacity = Math.random();

    heart.style.transform =
        `scale(${0.5 + Math.random()}) rotate(45deg)`;

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}

setInterval(createHeart, 450);

/* ===========================
   LOADING SCREEN
=========================== */

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    if (loading) {

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        }, 900);

    }

});
/* ==========================================
   IMAGE POPUP VIEWER
========================================== */

const images = document.querySelectorAll(".memory img");

images.forEach((img) => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");
        popup.className = "popup";

        const popupImg = document.createElement("img");
        popupImg.src = img.src;
        popupImg.alt = "Memory";

        popup.appendChild(popupImg);

        document.body.appendChild(popup);

        gsap.fromTo(
            popupImg,
            {
                scale: 0.6,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(1.7)"
            }
        );

        popup.addEventListener("click", () => {

            gsap.to(popup, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => popup.remove()
            });

        });

    });

});


/* ==========================================
   LOVE BUTTON
========================================== */

loveBtn.addEventListener("click", () => {

    createConfetti();

    gsap.to(loveBtn, {
        scale: 1.2,
        duration: .25,
        repeat: 1,
        yoyo: true
    });

    setTimeout(() => {

        alert("❤️ I Love You Forever, Piku ❤️");

    }, 500);

});


/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    for (let i = 0; i < 150; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.width = "10px";
        piece.style.height = "10px";
        piece.style.borderRadius = "2px";
        piece.style.background =
            `hsl(${Math.random()*360},100%,60%)`;

        piece.style.left = Math.random()*100 + "vw";
        piece.style.top = "-20px";
        piece.style.zIndex = "99999";

        document.body.appendChild(piece);

        gsap.to(piece, {

            y: window.innerHeight + 100,

            x: (Math.random()-0.5)*400,

            rotation: Math.random()*720,

            duration: 2 + Math.random()*2,

            ease: "power2.out",

            onComplete: () => piece.remove()

        });

    }

}


/* ==========================================
   SCROLL ANIMATION
========================================== */

gsap.utils.toArray(".memory").forEach((card)=>{

    gsap.from(card,{

        scrollTrigger:{

            trigger:card,

            start:"top 80%"

        },

        opacity:0,

        y:80,

        duration:1

    });

});


/* ==========================================
   LETTER ANIMATION
========================================== */

gsap.from(".paper",{

    scrollTrigger:{

        trigger:".paper",

        start:"top 80%"

    },

    opacity:0,

    y:120,

    duration:1.2,

    ease:"power3.out"

});
/* ==========================================
   FINAL PREMIUM EFFECTS
========================================== */

// Sakura / Petals
function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-30px";
    petal.style.fontSize = (16 + Math.random() * 18) + "px";
    petal.style.pointerEvents = "none";
    petal.style.zIndex = "9998";

    document.body.appendChild(petal);

    gsap.to(petal, {

        y: window.innerHeight + 50,

        x: (Math.random() - .5) * 250,

        rotation: Math.random() * 360,

        duration: 8 + Math.random() * 5,

        ease: "none",

        onComplete() {

            petal.remove();

        }

    });

}

setInterval(createPetal, 900);


/* ==========================================
   CURSOR SPARKLE
========================================== */

document.addEventListener("mousemove", (e) => {

    const dot = document.createElement("div");

    dot.style.position = "fixed";
    dot.style.width = "8px";
    dot.style.height = "8px";
    dot.style.borderRadius = "50%";
    dot.style.background = "#ff4b87";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.style.pointerEvents = "none";
    dot.style.zIndex = "99999";

    document.body.appendChild(dot);

    gsap.to(dot, {

        scale: 0,

        opacity: 0,

        duration: .8,

        onComplete() {

            dot.remove();

        }

    });

});


/* ==========================================
   LOVE MESSAGE
========================================== */

const ending = document.querySelector(".ending");

const surprise = document.createElement("h2");

surprise.innerHTML = "❤️ Forever & Always, Piku ❤️";

surprise.style.marginTop = "30px";
surprise.style.opacity = "0";
surprise.style.color = "#ff82b4";
surprise.style.fontFamily = "'Great Vibes', cursive";
surprise.style.fontSize = "48px";

ending.appendChild(surprise);

loveBtn.addEventListener("click", () => {

    gsap.to(surprise, {

        opacity: 1,

        y: -10,

        duration: 1

    });

});


/* ==========================================
   AUTO MUSIC ICON
========================================== */

const musicBtn = document.createElement("button");

musicBtn.innerHTML = "🎵";

musicBtn.style.position = "fixed";
musicBtn.style.right = "25px";
musicBtn.style.bottom = "25px";
musicBtn.style.width = "60px";
musicBtn.style.height = "60px";
musicBtn.style.borderRadius = "50%";
musicBtn.style.border = "none";
musicBtn.style.background = "#ff4b87";
musicBtn.style.color = "#fff";
musicBtn.style.fontSize = "24px";
musicBtn.style.cursor = "pointer";
musicBtn.style.zIndex = "99999";
musicBtn.style.boxShadow = "0 0 20px rgba(255,75,135,.5)";

document.body.appendChild(musicBtn);

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🎵";

    } else {

        music.pause();

        musicBtn.innerHTML = "🔇";

    }

});


/* ==========================================
   END MESSAGE
========================================== */

console.log("❤️ Made with Love for Piku ❤️");