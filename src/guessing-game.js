class GuessingGame {
    constructor() {
        this.start = null;
        this.end = null;
        this.guessPosition = null;
    }

    setRange(min, max) {
        this.start = min;
        this.end = max;
    }

    guess() {
        if (this.start <= this.end){
            this.guessPosition = Math.round((this.start + this.end) / 2);
        }
        return this.guessPosition;
    }

    lower() {
        this.end = this.guessPosition;
    }

    greater() {
        this.start = this.guessPosition;
    }
}

module.exports = GuessingGame;
