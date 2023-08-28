import { MusicGenerator } from "./genClass.js";

const musicGenerator = new MusicGenerator();
const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');

playBtn.addEventListener('click', () => {
    musicGenerator.playMusic();
});

stopBtn.addEventListener('click', () => {
    musicGenerator.stopMusic();
});
