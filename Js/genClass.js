
export {MusicGenerator}

class MusicGenerator{
    constructor(){

        // Create a synth
        this.synth = new Tone.Synth().toDestination();
        this.scale = ["D3", "E3", "F3", "G3", "A3", "Bb3", "C#3"];
        this.currentSequence = null;

    }

    genMusic(length){
        console.log('works');
        const sequence = [];
        for (let i = 0; i < length; i++) {
            const randomNote = this.scale[Math.floor(Math.random() * this.scale.length)];
            sequence.push(randomNote);
        }
        console.log(sequence);
        return sequence;
    }

    playMusic() {
        console.log('works');
        // Play a sequence of notes
        if(Tone.context.state != "running"){
            Tone.start();
        }
        const sequenceLength = 8;
        const sequence = this.genMusic(sequenceLength);
        console.log(sequence);
        
        this.currentSequence = new Tone.Sequence((time, note) => {
                this.synth.triggerAttackRelease(note, "6n", time);
            },sequence, "16n").start(0);

        Tone.Transport.start();
        console.log(this.currentSequence);

      }
}

