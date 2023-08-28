import { MusicGenerator } from "./genClass.js";

const musicGenerator = new MusicGenerator();
const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const noteBtn = document.querySelector('#scale_choice');

playBtn.addEventListener('click', () => {
    musicGenerator.playMusic();
});

stopBtn.addEventListener('click', () => {
    musicGenerator.stopMusic();
});

noteBtn.addEventListener('click', (event) => {
    if (event.target.classList.contains("scale_choice_btn")){
        const buttonText = event.target.textContent;
        const formatedText = buttonText.replace(/\s/g, "");
        musicGenerator.choice = formatedText;
        musicGenerator.chooseScale();
    }
})