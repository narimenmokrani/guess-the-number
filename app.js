const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuess: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    },
    getGuess: function() {
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `)
        if (isNaN(guess) || guess < 1 || guess > 100) {
            renderError('please try again with a number from 1 to 100!')
            } 
let playerchoice = this.getGuess()
while (playerchoice !== this.secretNum) {
    this.prevGuess.push(playerchoice)
    this.render(playerchoice)
    this.getGuess
}
            },
            render: function(playerchoice) {
    if (this.playerchoice === this.secretNum) {
    alert(`congrat you guessed the number in ${this.prevGuess.length}!`)
    return
    }
    else if (this.playerchoice > this.secretNum) {
        alert(`your guess is to high, previous guesses: ${this.prevGuess.join(', ')}`)
        game.getGuess()
    }
    else if (this.playerchoice < this.secretNum) {
        alert(`your guess is low, previous guesses: ${this.prevGuess.join(', ')}`)
        game.getGuess()
    }
}
}

console.log(game.getGuess())














    
