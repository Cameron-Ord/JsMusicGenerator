
export {MusicGenerator}

class MusicGenerator{
    constructor(){
        // Create a synth
        const limiter = new Tone.Limiter(-50);
        const freeverb = new Tone.Freeverb();
        freeverb.dampening = 800;
        const dist = new Tone.Distortion(0.75);
        const lowPassFilter = new Tone.Filter(12000, "lowpass");

        this.synth = new Tone.MonoSynth({
            oscillator: {
                type: "sawtooth"
            },
            envelope: {
                attack: 0.25
            }
        });
        this.synth.connect(dist);
        dist.connect(lowPassFilter);
        lowPassFilter.connect(freeverb);
        freeverb.connect(limiter);
        limiter.toDestination();

        this.synth.volume.value = -20; 
        this.scale = undefined;
        this.currentSequence = null;
        this.noteDisplayElement = document.getElementById("note_display");
        this.sequenceDisplayElement = document.getElementById("sequence_display");
        this.chosenDisplayElement = document.getElementById("chosenScale");
        this.choice = undefined;
        this.choiceToScale = undefined;
        this.init();
    }

    init(){
        if(this.sequenceDisplayElement.textContent === ""){
            this.sequenceDisplayElement.style.display = "none";
        }else{
            this.sequenceDisplayElement.style.display = "grid";

        }

        if(this.noteDisplayElement.textContent === ""){
            this.noteDisplayElement.style.display = "none";
        }else{
            this.noteDisplayElement.style.display = "grid";

        }
    }

    chooseScale(){
        const chosenScale = this.choiceToScale[this.choice];

        if(chosenScale){
            this.scale = chosenScale;
        }
        const formatedChoice = this.choice
        .replace(/([A-Z])/g, ' $1');
        this.chosenDisplayElement.textContent = formatedChoice;


    }

    genMusic(length){
        const sequence = [];
        if(this.scale !== undefined){
        for (let i = 0; i < length; i++) {
            const randomNote = this.scale[Math.floor(Math.random() * this.scale.length)];
            const randomOctave = Math.floor(Math.random() * 3) + 3;
            sequence.push(randomNote + randomOctave);
        }
            return sequence;
        } else {
            console.log("scale not chosen");
        }
    }

    playRandom(notesVar, modsVar){
        this.stopMusic();
        const randomScale = [];

        for(let i = 0; i<notesVar.length; i++){
            const randomNoteIndex = Math.floor(Math.random() * notesVar.length);
            const randomModifierIndex = Math.floor(Math.random() * modsVar.length);

            const randomNote=notesVar[randomNoteIndex];
            const randomMod=modsVar[randomModifierIndex];

            const combinedNote = randomNote + randomMod;
            randomScale.push(combinedNote);
        }
        if(randomScale.length == 7){
            this.scale = randomScale;
        }

        if(Tone.context.state != "running"){
            Tone.Transport.bpm.value = 180;
            Tone.start();
        }
        const sequenceLength = 12;
        const sequence = this.genMusic(sequenceLength);
        const formattedSequence = sequence.join('\n');
        const holder = formattedSequence.toString();

        this.sequenceDisplayElement.textContent = holder;
        if(this.sequenceDisplayElement.textContent){
            this.sequenceDisplayElement.style.display = "grid";
        }
        this.currentSequence = new Tone.Sequence((time, note) => {
                this.synth.triggerAttackRelease(note, "6n", time);
                this.noteDisplayElement.textContent = note;
                if(this.noteDisplayElement.textContent){
                    this.noteDisplayElement.style.display = "grid";
                }
            },sequence, "8n").start();

        Tone.Transport.start();
    }

    playMusic() {

        this.stopMusic();
        // Play a sequence of notes
        if(Tone.context.state != "running"){
            Tone.Transport.bpm.value = 200;
            Tone.start();
        }

        const sequenceLength = 12;
        const sequence = this.genMusic(sequenceLength);
        const formattedSequence = sequence.join('\n');
        const holder = formattedSequence.toString();

        this.sequenceDisplayElement.textContent = holder;

        if(this.sequenceDisplayElement.textContent){
            this.sequenceDisplayElement.style.display = "grid";
        }
        this.currentSequence = new Tone.Sequence((time, note) => {
                this.synth.triggerAttackRelease(note, "6n", time);
                this.noteDisplayElement.textContent = note;
                if(this.noteDisplayElement.textContent){
                    this.noteDisplayElement.style.display = "grid";
                }

            },sequence, "8n").start();

        Tone.Transport.start();

      }

    stopMusic(){
        if(this.currentSequence){
            this.currentSequence.stop();
            this.currentSequence.clear();
        }
    }
}

