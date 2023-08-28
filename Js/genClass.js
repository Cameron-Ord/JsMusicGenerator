
export {MusicGenerator}

class MusicGenerator{
    constructor(){

        // Create a synth
        this.synth = new Tone.Synth().toDestination();
        this.scale = ["D3", "E3", "F3", "G3", "A3", "Bb3", "C#3"];
        this.currentSequence = null;
        this.noteDisplayElement = document.getElementById("note_display");
        this.sequenceDisplayElement = document.getElementById("sequence_display");

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
        console.log(sequence);
        this.sequenceDisplayElement.textContent = sequence;
        this.currentSequence = new Tone.Sequence((time, note) => {
                this.synth.triggerAttackRelease(note, "6n", time);
                this.noteDisplayElement.textContent = note;
                
            },sequence, "8n").start(0);
        
        Tone.Transport.start();

      }

    stopMusic(){
        if(this.currentSequence){
            this.currentSequence.stop();
        }
    }
}

