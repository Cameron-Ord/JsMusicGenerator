
export {MusicGenerator}

class MusicGenerator{
    constructor(){
        // Create a synth
        this.synth = new Tone.Synth().toDestination();
        this.scale = undefined;
        this.currentSequence = null;
        this.noteDisplayElement = document.getElementById("note_display");
        this.sequenceDisplayElement = document.getElementById("sequence_display");
        this.choice = undefined;
        this.choiceToScale = undefined;
    }

    chooseScale(){
        const chosenScale = this.choiceToScale[this.choice];
        console.log(chosenScale);

        if(chosenScale){
            this.scale = chosenScale;
        }
    }

    genMusic(length){
        const sequence = [];
        for (let i = 0; i < length; i++) {
            const randomNote = this.scale[Math.floor(Math.random() * this.scale.length)];
            const randomOctave = Math.floor(Math.random() * 2) + 3;
            sequence.push(randomNote + randomOctave);
        }
        return sequence;
    }
    
    playRandom(notesVar, modsVar){
        const randomScale = [];

        for(let i = 0; i<notesVar.length; i++){
            const randomNoteIndex = Math.floor(Math.random() * notesVar.length);
            const randomModifierIndex = Math.floor(Math.random() * modsVar.length);
            
            const randomNote=notesVar[randomNoteIndex];
            const randomMod=modsVar[randomModifierIndex];

            const combinedNote = randomNote + randomMod;
            randomScale.push(combinedNote);
        }
        console.log(randomScale.length)
        if(randomScale.length == 7){
            this.scale = randomScale;
        }

        if(Tone.context.state != "running"){
            Tone.Transport.bpm.value = 220;
            Tone.start();
        }
        const sequenceLength = 8;
        const sequence = this.genMusic(sequenceLength);
        this.sequenceDisplayElement.textContent = sequence;
        this.currentSequence = new Tone.Sequence((time, note) => {
                this.synth.triggerAttackRelease(note, "6n", time);
                this.noteDisplayElement.textContent = note;

            },sequence, "8n").start(0);

        Tone.Transport.start();
    }

    playMusic() {
        // Play a sequence of notes
        if(Tone.context.state != "running"){
            Tone.Transport.bpm.value = 220;
            Tone.start();
        }

        const sequenceLength = 8;
        const sequence = this.genMusic(sequenceLength);
        this.sequenceDisplayElement.textContent = sequence;
        this.currentSequence = new Tone.Sequence((time, note) => {
                this.synth.triggerAttackRelease(note, "6n", time);
                this.noteDisplayElement.textContent = note;

            },sequence, "8n").start(0);

        Tone.Transport.start();

      }

    stopMusic(){
        if(this.currentSequence){
            Tone.Transport.stop();
            this.currentSequence.stop();
        }
    }
}

