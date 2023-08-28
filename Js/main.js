import { MusicGenerator } from "./genClass.js";
const choiceToScale = {
    "C#HarmonicMinor": ["C#3", "D#3", "E3", "F#3", "G#3", "A3", "C3"],
    "DHarmonicMinor": ["D3", "E3", "F3", "G3", "A3", "Bb3", "C#3"],
    "CHarmonicMinor": ["C3", "D3", "Eb3", "F3", "G3", "Ab3", "B3"],
    "BHarmonicMinor": ["B3", "C#3", "D3", "E3", "F#3", "G3", "A#3"],
    "A#HarmonicMinor": ["A#3", "C3", "C#3", "D#3", "F3", "F#3", "A3"],
    "AHarmonicMinor": ["A3", "B3", "C3", "D3", "E3", "F3", "G#3"],
    "D#HarmonicMinor": ["D#3", "F3", "F#3", "G#3", "A#3", "B3", "D3"],
    "EHarmonicMinor": ["E3", "F#3", "G3", "A3", "B3", "C3", "D#3"],
    "FHarmonicMinor": ["F3", "G3", "Ab3", "Bb3", "C3", "Db3", "E3"],
    "F#HarmonicMinor": ["F#3", "G#3", "A3", "B3", "C#3", "D3", "F3"],
    "GHarmonicMinor": ["G3", "A3", "Bb3", "C3", "D3", "Eb3", "F#3"],
    "G#HarmonicMinor": ["G#3", "A#3", "B3", "C#3", "D#3", "E3", "G3"],

};
const musicGenerator = new MusicGenerator();
const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const noteBtn = document.querySelector('#scale_choice');
musicGenerator.choiceToScale = choiceToScale;

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
        
        if(formatedText){
            musicGenerator.choice = formatedText;
            musicGenerator.chooseScale(); 
        }else{
            console.log("scale not found");
        }
    }
})