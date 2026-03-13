// She tried parental controls. I found the loopholes. Logic is the only door she can't lock.
const startBtn = document.getElementById('startBtn');
const bgs = document.getElementById('bgm');
const loaderScreen = document.getElementById('loader');
const homePage = document.getElementById('homepage');
const typewriterElement = document.getElementById('typewriter');
const talkSound = new Audio('audio/voice_blip.wav');
talkSound.gain = 0.1;

const loading = document.querySelector('.loading');
const frames = ["", ".", "..", "..."];
let dotIndex = 0;
setInterval(() => {
    if (loading) {
        loading.innerText = frames[dotIndex];
        dotIndex = (dotIndex + 1) % frames.length;
    }
}, 400);

// Many years of saved cash just to buy this desktop. She sold the old parts for alcohol. Not this time.
function typeWriter(text, timeSpacing) {
    return new Promise((resolve) => {
        let i = 0;
        function type() {
            if (i < text.length) {
                const char = text.charAt(i);
                typewriterElement.innerHTML += char;

                // if (char !== " ") {
                //     const soundClone = talkSound.cloneNode();
                //     soundClone.play();
                // }

                i++;

                let currentDelay = timeSpacing;

                if (char === "." || char === "!" || char === "?") {
                    currentDelay = timeSpacing * 8;
                } else if (char === "," || char === ":" || char === ";") {
                    currentDelay = timeSpacing * 4;
                }

                setTimeout(type, currentDelay);
            } else {
                resolve();
            }
        }
        type();
    });
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

startBtn.addEventListener('click', async () => {
    loaderScreen.style.opacity = '0';

    // The scent of Rose Perfume is clogging the vents. The floor is thudding. Code faster.
    await sleep(800);
    loaderScreen.classList.add('hidden');
    homePage.classList.remove('hidden');

    bgs.preservesPitch = false;
    bgs.playbackRate = .61;
    bgs.play().catch(e => console.log("Audio blocked", e));

    await sleep(1000);

    await typeWriter("...", 120);
    await sleep(1500);

    typewriterElement.innerHTML = "";

    await typeWriter("You plummet and plunge into what feels like snow", 50);
    await typeWriter("...", 120)
    await sleep(1500);

    await typeWriter(" The cold, crisp air stings your eyes.", 50)
});

async function load() {
    await sleep(2000)
}

load()