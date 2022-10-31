class animals {
    constructor (animal) {
        const animalSounds = {
            'lion': "roar",
            'tiger': "grrr",
        };

        this.animalSound = animalSounds[animal];
    }

    speak(text) {
        let animalText = text.split(" ");
        let soundText = "";

        for(let word in animalText) {
            // if it's the last word...
            if(word == Object.keys(animalText).length - 1) {
                soundText += animalText[word] + " " + this.animalSound;
            } else {
                soundText += animalText[word] + " " + this.animalSound + " ";
            }
        }

        return soundText;
    }
}

const lion = new animals("lion");
console.log(lion.speak("I'm a lion"));

const tiger = new animals("tiger");
console.log(tiger.speak("Lions suck"));