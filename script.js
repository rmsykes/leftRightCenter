
// Below code is an event listener and function that rolls each of the 3 dice and returns a ramdom value of L, R, C, or *(x3) and 
// replaces the first in the display to the randomized dice value.
document.querySelector('button').addEventListener('click', (e) => {
    let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
    document.querySelector('#diceOne').innerHTML = randomDiceOneValue

    let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
    document.querySelector('#diceTwo').innerHTML = randomDiceTwoValue

    let diceThreeValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceThreeValue = diceThreeValues[Math.floor(Math.random() * diceThreeValues.length)]
    document.querySelector('#diceThree').innerHTML = randomDiceThreeValue

})

