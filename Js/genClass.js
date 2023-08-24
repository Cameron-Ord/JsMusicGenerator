
// MusicGenerator.js

class MusicGenerator{
    constructor(){
        console.log()
    }

    generateNote() {
        // Generate a musical note
        console.log("Note generated");
      }

    playMusic() {
        // Play a sequence of notes
        this.generateNote();
        console.log("Music playing");
      }
}

module.exports = {
    MusicGenerator,
}

