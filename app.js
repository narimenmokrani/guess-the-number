const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
  
    getGuess: function () {
      let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      let parsedNumber = parseInt(guess)
      return parsedNumber
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      let playerAnswer
      console.log(this.secretNum)
      console.log(playerAnswer)
      while( playerAnswer !== this.secretNum){
        playerAnswer = this.getGuess()
        this.prevGuesses.push(playerAnswer)  
        this.render(playerAnswer)
      }
    },
    render : function (playerAnswer)   { 
      if(playerAnswer >= 0 && playerAnswer <= 100){
        if (playerAnswer === this.secretNum) {
          alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
        } 
        else if (playerAnswer > this.secretNum){
          alert(`Your guess is too high Previous guesses: ${this.prevGuesses.join(`, `)}`)
        } 
        else if (playerAnswer < this.secretNum){
          alert(`Your guess is too low Previous guesses: ${this.prevGuesses.join(`, `)}`)
        }
      }
    }
  }
  
  game.play()



    
