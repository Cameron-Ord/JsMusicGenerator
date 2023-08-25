import { MusicGenerator } from "./genClass.js";

const musicGenerator = new MusicGenerator();
const playBtn = document.querySelector('.playBtn');

playBtn.addEventListener('click', () => {
    musicGenerator.playMusic();
});

