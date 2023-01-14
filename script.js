console.log("for Freedom! 24th DEY");

const pKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysOpacity = document.querySelector(".keys-checkbox input");

let allKeys = [];
let sound = new Audio(`tunes/a.wav`); // by Default

function playTune(key) {
    sound.src = `tunes/${key}.wav`;
    sound.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 200);
}

pKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

function pressedKey(e) {
    // if the pressed key is in the allKeys array, only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key);
    // console.log('key');
}

function hideKeys() {
    pKeys.forEach(key => key.classList.toggle("hide"));
}

function volSlider(e) {
    sound.volume = e.target.value;
}

volumeSlider.addEventListener("input", volSlider);
keysOpacity.addEventListener("click", hideKeys);
document.addEventListener("keydown", pressedKey);