
export {MusicGenerator}

class MusicGenerator{
    constructor(){
    
        // Create a synth
        this.synth = new Tone.Synth().toDestination();
        console.log(Tone.context.state)
        console.log(this.synth)
    }

    playMusic() {

        // Play a sequence of notes
        if(Tone.context.state != "running"){
            Tone.start();
        }
        this.synth.triggerAttackRelease("C3", "8n");

      }
}

