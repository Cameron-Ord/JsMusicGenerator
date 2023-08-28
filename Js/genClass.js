
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
    }

    chooseScale(){

        if(this.choice == "DHarmonicMinor"){
            this.scale = ["D3", "E3", "F3", "G3", "A3", "Bb3", "C#3"];
        }else if(this.choice == "C#HarmonicMinor"){
            this.scale = ["C#3", "D#3", "E3", "F#3", "G#3", "A3", "C3"];
        }

    }

    genMusic(length){
        const sequence = [];
        for (let i = 0; i < length; i++) {
            const randomNote = this.scale[Math.floor(Math.random() * this.scale.length)];
            sequence.push(randomNote);
        }
        return sequence;
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

