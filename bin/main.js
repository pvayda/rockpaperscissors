#!/usr/bin/env node
const yargs = require('yargs')
const options = yargs
  .usage("Usage: -m <move>")
 .option("m", { alias: "move", describe: "Player move", type: "string", demandOption: true })
 .argv;
const playerMove = options.move;
console.log('~Welcome to Roshambo vs the Computer~')
console.log('Can you beat the machines??')
//multiple games
class PlayGame {
  constructor(playerChoice){
      this.playRound = new PlayRound();
      this.playerChoice = playerChoice
  }
  compare(){
      this.playRound.play();
      var compPlay = this.playRound.compChoice;
      if(this.playerChoice === 'paper'){
        //playpaper()
        if(compPlay === 'rock'){
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('User wins!!')
        } else if(compPlay === 'scissors'){
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('User Loses :(')
        } else if(compPlay === 'paper') {
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('Round is a tie, Play again!')
        } else {
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('Something went wrong...')
        }
      } else if(this.playerChoice === 'scissors'){
        //playscissors()
        if(compPlay === 'rock'){
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('User Loses :(')
        } else if(compPlay === 'scissors'){
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('Round is a tie, Play again!')
        } else if(compPlay === 'paper') {
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('User wins!!')
        } else {
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('Something went wrong...')
        }
      } else if(this.playerChoice === 'rock'){
        //playrock()
        if(compPlay === 'rock'){
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('Round is a tie, Play again!')
        } else if(compPlay === 'scissors'){
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('User wins!!')
        } else if(compPlay === 'paper') {
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('User Loses :(')
        } else {
            console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
            console.log('Something went wrong...')
        }
      } else {
        console.log(`compPlay: ${compPlay}, user: ${this.playerChoice}`)
      }
  }

}
class PlayRound {
    constructor(){
        this.moves = ['rock', 'paper', 'scissors']
        this.compChoice = '';
    }
    randomIndex(){
        return Math.floor(Math.random() * 3);
    }
    play(){
        this.compChoice = this.moves[this.randomIndex()];
    }
    
}
var game = new PlayGame(playerMove)
game.compare()
