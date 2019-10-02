


//////////////////////////////////// Click event for Player1 to Roll Dice  ////////////////////////////////
document.querySelector('#buttonOne').addEventListener('click', (e) => {

    /////////////////////////////// Player1 Dice1 Roll //////////////////////////////////
    let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
    document.querySelector('#diceOne').innerHTML = randomDiceOneValue
    if (randomDiceOneValue === '*') {
        console.log('Keep a coin!')
    }
    if (randomDiceOneValue === 'L') {
        console.log('Pass a coin left!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerTwoArray = playerTwo.coins
        playerTwoArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceOneValue === 'R') {
        console.log('Pass a coin right!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerThreeArray = playerThree.coins
        playerThreeArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
    }
    if (randomDiceOneValue === 'C') {
        console.log('Pass a coin to the center!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }

    /////////////////////////////// Player1 Dice2 Roll //////////////////////////////////
    let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
    document.querySelector('#diceTwo').innerHTML = randomDiceTwoValue
    if (randomDiceTwoValue === '*') {
        console.log('Keep a coin!')
    }
    if (randomDiceTwoValue === 'L') {
        console.log('Pass a coin left!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerTwoArray = playerTwo.coins
        playerTwoArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceTwoValue === 'R') {
        console.log('Pass a coin right!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerThreeArray = playerThree.coins
        playerThreeArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
    }
    if (randomDiceTwoValue === 'C') {
        console.log('Pass a coin to the center!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }

    /////////////////////////////// Player1 Dice3 Roll //////////////////////////////////
    let diceThreeValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceThreeValue = diceThreeValues[Math.floor(Math.random() * diceThreeValues.length)]
    document.querySelector('#diceThree').innerHTML = randomDiceThreeValue
    if (randomDiceThreeValue === '*') {
        console.log('Keep a coin!')
    }
    if (randomDiceThreeValue === 'L') {
        console.log('Pass a coin left!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerTwoArray = playerTwo.coins
        playerTwoArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceThreeValue === 'R') {
        console.log('Pass a coin right!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let playerThreeArray = playerThree.coins
        playerThreeArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
    }
    if (randomDiceThreeValue === 'C') {
        console.log('Pass a coin to the center!')
        let playerOneArray = playerOne.coins
        playerOneArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }
})



//////////////////////////////////// Click event for Player2 to Roll Dice  ////////////////////////////////

document.querySelector('#buttonTwo').addEventListener('click', (e) => {

    /////////////////////////////// Player2 Dice1 Roll //////////////////////////////////
    let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
    document.querySelector('#diceOne').innerHTML = randomDiceOneValue
    if (randomDiceOneValue === '*') {
        console.log('Keep a coin!')
    }
    if (randomDiceOneValue === 'L') {
        console.log('Pass a coin left!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let playerOneArray = playerOne.coins
        playerOneArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceOneValue === 'R') {
        console.log('Pass a coin right!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let playerThreeArray = playerThree.coins
        playerThreeArray.push(' X')
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
    }
    if (randomDiceOneValue === 'C') {
        console.log('Pass a coin to the center!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }


    /////////////////////////////// Player2 Dice2 Roll //////////////////////////////////
    let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
    document.querySelector('#diceTwo').innerHTML = randomDiceTwoValue
    if (randomDiceTwoValue === '*') {
        console.log('Keep a coin!')
    }
    if (randomDiceTwoValue === 'L') {
        console.log('Pass a coin left!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let playerOneArray = playerOne.coins
        playerOneArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceTwoValue === 'R') {
        console.log('Pass a coin right!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let playerThreeArray = playerThree.coins
        playerThreeArray.push(' X')
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
    }
    if (randomDiceTwoValue === 'C') {
        console.log('Pass a coin to the center!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }


    /////////////////////////////// Player2 Dice3 Roll //////////////////////////////////
    let diceThreeValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceThreeValue = diceThreeValues[Math.floor(Math.random() * diceThreeValues.length)]
    document.querySelector('#diceThree').innerHTML = randomDiceThreeValue
    if (randomDiceThreeValue === '*') {
        console.log('Keep a coin!')
    }
    if (randomDiceThreeValue === 'L') {
        console.log('Pass a coin left!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let playerOneArray = playerOne.coins
        playerOneArray.push(' X')
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceThreeValue === 'R') {
        console.log('Pass a coin right!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let playerThreeArray = playerThree.coins
        playerThreeArray.push(' X')
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
    }
    if (randomDiceThreeValue === 'C') {
        console.log('Pass a coin to the center!')
        let playerTwoArray = playerTwo.coins
        playerTwoArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }
})



//////////////////////////////////// Click event for Player3 to Roll Dice  ////////////////////////////////
document.querySelector('#buttonThree').addEventListener('click', (e) => {

    /////////////////////////////// Player3 Dice1 Roll //////////////////////////////////
    let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
    document.querySelector('#diceOne').innerHTML = randomDiceOneValue
    if (randomDiceOneValue === '*') {
        console.log('Keep a coin!')
    }
    if (randomDiceOneValue === 'L') {
        console.log('Pass a coin left!')
        let playerThreeArray = playerThree.coins
        playerThreeArray.pop()
        let playerTwoArray = playerTwo.coins
        playerTwoArray.push(' X')
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceOneValue === 'R') {
        console.log('Pass a coin right!')
        let playerThreeArray = playerThree.coins
        playerThreeArray.pop()
        let playerOneArray = playerOne.coins
        playerOneArray.push(' X')
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
    }
    if (randomDiceOneValue === 'C') {
        console.log('Pass a coin to the center!')
        let playerThreeArray = playerThree.coins
        playerThreeArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }

    /////////////////////////////// Player3 Dice2 Roll //////////////////////////////////
    let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
    document.querySelector('#diceTwo').innerHTML = randomDiceTwoValue
    if (randomDiceTwoValue === '*') {
        console.log('Keep a coin!')
    }
    if (randomDiceTwoValue === 'L') {
        console.log('Pass a coin left!')
        let playerThreeArray = playerThree.coins
        playerThreeArray.pop()
        let playerTwoArray = playerTwo.coins
        playerTwoArray.push(' X')
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceTwoValue === 'R') {
        console.log('Pass a coin right!')
        let playerThreeArray = playerThree.coins
        playerThreeArray.pop()
        let playerOneArray = playerOne.coins
        playerOneArray.push(' X')
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
    }
    if (randomDiceTwoValue === 'C') {
        console.log('Pass a coin to the center!')
        let playerThreeArray = playerThree.coins
        playerThreeArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
    }

    /////////////////////////////// Player3 Dice2 Roll //////////////////////////////////
    let diceThreeValues = ['L', 'R', 'C', '*', '*', '*']
    let randomDiceThreeValue = diceThreeValues[Math.floor(Math.random() * diceThreeValues.length)]
    document.querySelector('#diceThree').innerHTML = randomDiceThreeValue
    if (randomDiceThreeValue === '*') {
        console.log('Keep a coin!')
    }
    if (randomDiceThreeValue === 'L') {
        console.log('Pass a coin left!')
        let playerThreeArray = playerThree.coins
        playerThreeArray.pop()
        let playerTwoArray = playerTwo.coins
        playerTwoArray.push(' X')
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
    }
    if (randomDiceThreeValue === 'R') {
        console.log('Pass a coin right!')
        let playerThreeArray = playerThree.coins
        playerThreeArray.pop()
        let playerOneArray = playerOne.coins
        playerOneArray.push(' X')
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        document.querySelector('#playerOneCoins').innerText = playerOne.coins
    }
    if (randomDiceThreeValue === 'C') {
        console.log('Pass a coin to the center!')
        let playerThreeArray = playerThree.coins
        playerThreeArray.pop()
        let coinCenterArray = coinCenter.coins
        coinCenterArray.push(' X')
        document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        document.querySelector('#coinCenter').innerText = coinCenter.coins
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