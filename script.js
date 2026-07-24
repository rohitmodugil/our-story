/* ===========================
   FOR MY PIKU ❤️
=========================== */

const loader = document.getElementById("loader");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

const cards = document.querySelectorAll(".memory-card");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const loveBtn = document.getElementById("loveBtn");
const finalMessage = document.getElementById("finalMessage");

const heartContainer = document.getElementById("heartContainer");

let current = 0;

/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},800);

},1200);

});

/* ===========================
   START JOURNEY
=========================== */

startBtn.addEventListener("click",()=>{

music.play().catch(()=>{});

document.getElementById("gallery").scrollIntoView({

behavior:"smooth"

});

});

/* ===========================
   SHOW MEMORY
=========================== */

function showCard(index){

cards.forEach(card=>{

card.classList.remove("active");

});

cards[index].classList.add("active");

}

/* ===========================
   NEXT
=========================== */

nextBtn.addEventListener("click",()=>{

current++;

if(current>=cards.length){

current=0;

}

showCard(current);

});

/* ===========================
   PREVIOUS
=========================== */

prevBtn.addEventListener("click",()=>{

current--;

if(current<0){

current=cards.length-1;

}

showCard(current);

});
/* ===========================
   AUTO SLIDESHOW
=========================== */

setInterval(() => {

    current++;

    if (current >= cards.length) {
        current = 0;
    }

    showCard(current);

}, 6000);

/* ===========================
   FLOATING HEARTS
=========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.opacity = Math.random();

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 400);

/* ===========================
   LOVE BUTTON
=========================== */

loveBtn.addEventListener("click", () => {

    finalMessage.style.display = "block";

    finalMessage.animate([

        {
            opacity: 0,
            transform: "translateY(40px)"
        },

        {
            opacity: 1,
            transform: "translateY(0)"
        }

    ], {

        duration: 1000,
        fill: "forwards"

    });

    createConfetti();

});

/* ===========================
   CONFETTI
=========================== */

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";
        piece.style.width = "10px";
        piece.style.height = "10px";
        piece.style.background =
            `hsl(${Math.random()*360},100%,60%)`;

        piece.style.borderRadius = "50%";

        piece.style.zIndex = "9999";

        document.body.appendChild(piece);

        piece.animate([

            {
                transform: "translateY(0) rotate(0deg)"
            },

            {
                transform:
                    `translate(${(Math.random()-0.5)*300}px,${window.innerHeight+100}px) rotate(720deg)`
            }

        ], {

            duration: 2500 + Math.random() * 1500,

            easing: "ease-out"

        });

        setTimeout(() => {

            piece.remove();

        }, 4000);

    }

}

/* ===========================
   MUSIC BUTTON
=========================== */

const musicBtn = document.createElement("button");

musicBtn.innerHTML = "🎵";

musicBtn.style.position = "fixed";
musicBtn.style.right = "20px";
musicBtn.style.bottom = "20px";
musicBtn.style.width = "60px";
musicBtn.style.height = "60px";
musicBtn.style.borderRadius = "50%";
musicBtn.style.border = "none";
musicBtn.style.background = "#ff4b87";
musicBtn.style.color = "#fff";
musicBtn.style.fontSize = "26px";
musicBtn.style.cursor = "pointer";
musicBtn.style.boxShadow =
"0 0 20px rgba(255,75,135,.5)";
musicBtn.style.zIndex = "99999";

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

/* ===========================
   START FIRST MEMORY
=========================== */

showCard(current);

console.log("❤️ Made with love for Piku ❤️");

