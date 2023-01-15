console.log("for Freedom! 24th DEY");

const pKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysOpacity = document.querySelector(".keys-checkbox input");
const container = document.querySelector(".container");
const ftr = document.querySelector("#ftr");
const alertph = document.querySelector(".anotherclass");
// const alertPhone = document.getElementById("aphone");
// const alPhoneBg = document.getElementsByClassName("background-dark");



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
    if (allKeys.includes(e.key)) playTune(e.key);
    // console.log('key');
}

function hideKeys() {
    pKeys.forEach(key => key.classList.toggle("hide"));
}

function volSlider(e) {
    sound.volume = e.target.value;
}

screen.addEventListener("orientationchange", () => {
    console.log(`The orientation of the screen is: ${screen.orientation}`);
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // $('body').css({
    //     "-webkit-transform": "rotate(90deg)"
    // }); 

    // if(window.innerHeight > window.innerWidth){
    //     alert("Please use Landscape!");
    // }

    if (window.innerHeight > window.innerWidth) {
        // alert("You are in portrait mode");
        container.style.display = "none";
        ftr.style.display = "none";
        // para.appendChild(node);

        // const element = document.getElementById("div1");
        // element.appendChild(para);
    }

    if (window.innerHeight < window.innerWidth) {
        // alert("You are in landscape mode");

        // container.style.display = "none";
        // ftr.style.display = "none";
        // alertph.classList.add("anotherclass");

        alertph.classList.add("none");
        setTimeout( ()=> {
            ftr.style.opacity = 0;
        }, 10000);

    }

}

// screen.orientation.lock('landscape').then(res=>console.log(res)).catch(err=>console.log(err))

volumeSlider.addEventListener("input", volSlider);
keysOpacity.addEventListener("click", hideKeys);
document.addEventListener("keydown", pressedKey);