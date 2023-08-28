import { MusicGenerator } from "./genClass.js";
const choiceToScale = {
    "DHarmonicMinor": ["D3", "E3", "F3", "G3", "A3", "Bb3", "C#3"],
    "C#HarmonicMinor": ["C#3", "D#3", "E3", "F#3", "G#3", "A3", "C3"],
    "CHarmonicMinor": ["C3", "D3", "Eb3", "F3", "G3", "Ab3", "B3"]
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