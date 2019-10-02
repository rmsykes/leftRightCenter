
// Below is click event for player one button ////////////////////////////////////
document.querySelector('#buttonOne').addEventListener('click', (e) => {

    // Dice One
    let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
    document.querySelector('#diceOne').innerHTML = randomDiceOneValue
    if (randomDiceOneValue === '*') {
        console.log('keep coin one!')
    }
    if (randomDiceOneValue === 'L') {
        console.log('pass coin one left!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerTwoArray = playerTwo.coins
        playerTwoArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceOneValue === 'R') {
        console.log('pass coin one right!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerThreeArray = playerThree.coins
        playerThreeArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
    }
    if (randomDiceOneValue === 'C') {
        console.log('pass coin one center!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }

    // Dice Two
    let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
    document.querySelector('#diceTwo').innerHTML = randomDiceTwoValue
    if (randomDiceTwoValue === '*') {
        console.log('keep coin two!')
    }
    if (randomDiceTwoValue === 'L') {
        console.log('pass coin two left!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerTwoArray = playerTwo.coins
        playerTwoArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceTwoValue === 'R') {
        console.log('pass coin two right!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerThreeArray = playerThree.coins
        playerThreeArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
    }
    if (randomDiceTwoValue === 'C') {
        console.log('pass coin two center!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }

    // Dice Three
    let diceThreeValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceThreeValue = diceThreeValues[Math.floor(Math.random() * diceThreeValues.length)]
    document.querySelector('#diceThree').innerHTML = randomDiceThreeValue
    if (randomDiceThreeValue === '*') {
        console.log('keep coin three!')
    }
    if (randomDiceThreeValue === 'L') {
        console.log('pass coin three left!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerTwoArray = playerTwo.coins
        playerTwoArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceThreeValue === 'R') {
        console.log('pass coin three right!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerThreeArray = playerThree.coins
        playerThreeArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
    }
    if (randomDiceThreeValue === 'C') {
        console.log('pass coin three center!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }
})



// Below is click event for player two button ////////////////////////////////////

document.querySelector('#buttonTwo').addEventListener('click', (e) => {

    // Dice One
    let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
    document.querySelector('#diceOne').innerHTML = randomDiceOneValue
    if (randomDiceOneValue === '*') {
        console.log('keep coin one!')
    }
    if (randomDiceOneValue === 'L') {
        console.log('pass coin one left!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let playerOneArray = playerOne.coins
        playerOneArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceOneValue === 'R') {
        console.log('pass coin one right!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let playerThreeArray = playerThree.coins
        playerThreeArray.push(' X')
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
    }
    if (randomDiceOneValue === 'C') {
        console.log('pass coin one center!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }


    // Dice Two
    let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
    document.querySelector('#diceTwo').innerHTML = randomDiceTwoValue
    if (randomDiceTwoValue === '*') {
        console.log('keep coin two!')
    }
    


})








// Objects Below ////////////////////////////////////////////////////////////

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
    coins: [' X', ' X', ' X']
}


let coinCenter = {
    name: 'Coin Center',
    coins: []
}
//////////////////////////////////////////////////////////////////////////////



// assings my array of coins to playerOneCoins div 
document.querySelector('#playerOneCoins').innerText = playerOne.coins

// assigns my array of coins to playerTwoCoins div
document.querySelector('#playerTwoCoins').innerText = playerOne.coins


// assigns my array of coins to playerThreeCoins div
document.querySelector('#playerThreeCoins').innerText = playerOne.coins