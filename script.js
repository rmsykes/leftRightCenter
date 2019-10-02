
// Below code is an event listener and function that rolls each of the 3 dice and returns a ramdom value of L, R, C, or *(x3) and 
// replaces the first in the display to the randomized dice value.
document.querySelector('button').addEventListener('click', (e) => {
    let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
    document.querySelector('#diceOne').innerHTML = randomDiceOneValue
    if (randomDiceOneValue === '*') {
        console.log('keep coin one!')
    }
    if (randomDiceOneValue === 'L') {
        console.log('pass coin one left!')
        
    }
    if (randomDiceOneValue === 'R') {
        console.log('pass coin one right!')

    }
    if (randomDiceOneValue === 'C') {
        console.log('pass coin one center!')

    }


    let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
    document.querySelector('#diceTwo').innerHTML = randomDiceTwoValue

    let diceThreeValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceThreeValue = diceThreeValues[Math.floor(Math.random() * diceThreeValues.length)]
    document.querySelector('#diceThree').innerHTML = randomDiceThreeValue
})


let playerOne = {
    name: 'Player 1',
    coins: [' X', ' X', ' X']
}


let playerTwo = {
    name: 'Player 2',
    coins: [' X', ' X', ' X']
}


let playerThree = {
    name: 'Player 3',
    coins: ['X', 'X', 'X']
}


// assings my array of coins to playerOneCoins div 
document.querySelector('#playerOneCoins').innerText = playerOne.coins

// assigns my array of coins to playerTwoCoins div
document.querySelector('#playerTwoCoins').innerText = playerOne.coins


// assigns my array of coins to playerThreeCoins div
document.querySelector('#playerThreeCoins').innerText = playerOne.coins


