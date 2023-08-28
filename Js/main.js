import { MusicGenerator } from "./genClass.js";

const musicGenerator = new MusicGenerator();
const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const noteBtn = document.querySelector('.scale_choice_btn');

playBtn.addEventListener('click', () => {
    musicGenerator.playMusic();
});

stopBtn.addEventListener('click', () => {
    musicGenerator.stopMusic();
});

noteBtn.addEventListener('click', () => {
    const buttonText = noteBtn.textContent;
    const formatedText = buttonText.replace(/\s/g, "");
    musicGenerator.choice = formatedText;
    musicGenerator.chooseScale();
})