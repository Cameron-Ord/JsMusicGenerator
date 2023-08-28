import { MusicGenerator } from "./genClass.js";
const choiceToScale = {
    "C#HarmonicMinor": ["C#", "D#", "E", "F#", "G#", "A", "C"],
    "DHarmonicMinor": ["D", "E", "F", "G", "A", "Bb", "C#"],
    "CHarmonicMinor": ["C", "D", "Eb", "F", "G", "Ab", "B"],
    "BHarmonicMinor": ["B", "C#", "D", "E", "F#", "G", "A#"],
    "A#HarmonicMinor": ["A#", "C", "C#", "D#", "F", "F#", "A"],
    "AHarmonicMinor": ["A", "B", "C", "D", "E", "F", "G#"],
    "D#HarmonicMinor": ["D#", "F", "F#", "G#", "A#", "B", "D"],
    "EHarmonicMinor": ["E", "F#", "G", "A", "B", "C", "D#"],
    "FHarmonicMinor": ["F", "G", "Ab", "Bb", "C", "Db", "E"],
    "F#HarmonicMinor": ["F#", "G#", "A", "B", "C#", "D", "F"],
    "GHarmonicMinor": ["G", "A", "Bb", "C", "D", "Eb", "F#"],
    "G#HarmonicMinor": ["G#", "A#", "B", "C#", "D#", "E", "G"],
};

const notes =["C", "D", "E", "F", "G", "A", "B"];
const modifiers = ["#","b", ""];

const musicGenerator = new MusicGenerator();
const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const noteBtn = document.querySelector('#scale_choice');
const randBtn = document.querySelector('.randBtn')
musicGenerator.choiceToScale = choiceToScale;

playBtn.addEventListener('click', () => {
    musicGenerator.playMusic();
});

stopBtn.addEventListener('click', () => {
    musicGenerator.stopMusic();
});

randBtn.addEventListener('click', () => {
    musicGenerator.playRandom(notes, modifiers);
});

noteBtn.addEventListener('click', (event) => {
    if (event.target.classList.contains("scale_choice_btn")){
        const buttonText = event.target.textContent;
        const formatedText = buttonText.replace(/\s/g, "");

        if(formatedText){
            musicGenerator.choice = formatedText;
            musicGenerator.chooseScale();
        }else{
            console.log("scale not found");
        }
    }
})