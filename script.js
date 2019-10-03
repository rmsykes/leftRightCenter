


//////////////////////////////////// CLICK EVENT - Player1 to Roll Dice  /////////////////////////////////////////////
document.querySelector('#buttonOne').addEventListener('click', (e) => {




    //////// IF STATEMENT - if the Player 2 & Player 3 are out of coins, Player 1 wins! ////////////////////
    if (playerTwo.coins.length === 0 && playerThree.coins.length === 0) {
        alert('Player 1 Wins!')
    }




    //////// IF STATEMENT - if the object playerOne, Key-coins, array length is 3, roll 3 dice ////////////////////
    if (playerOne.coins.length >= 3) {

        /////////////////////////////////// Player1 Dice1 Roll ////////////////////////////////////////////////
        let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
        document.querySelector('#diceOne').innerText = randomDiceOneValue
        if (randomDiceOneValue === '*') {
            console.log('Player 1 keep a coin!')
        }
        if (randomDiceOneValue === 'L') {
            console.log('Player 1 pass a coin left!')
            playerOne.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceOneValue === 'R') {
            console.log('Player 1 pass a coin right!')
            playerOne.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceOneValue === 'C') {
            console.log('Player 1 pass a coin to the center!')
            playerOne.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
        /////////////////////////////// Player1 Dice2 Roll //////////////////////////////////////////////////
        let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
        document.querySelector('#diceTwo').innerText = randomDiceTwoValue
        if (randomDiceTwoValue === '*') {
            console.log('Player 1 keep a coin!')
        }
        if (randomDiceTwoValue === 'L') {
            console.log('Player 1 pass a coin left!')
            playerOne.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceTwoValue === 'R') {
            console.log('Player 1 pass a coin right!')
            playerOne.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceTwoValue === 'C') {
            console.log('Player 1 pass a coin to the center!')
            playerOne.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
        /////////////////////////////// Player1 Dice3 Roll //////////////////////////////////////////////////
        let diceThreeValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceThreeValue = diceThreeValues[Math.floor(Math.random() * diceThreeValues.length)]
        document.querySelector('#diceThree').innerText = randomDiceThreeValue
        if (randomDiceThreeValue === '*') {
            console.log('Player 1 keep a coin!')
        }
        if (randomDiceThreeValue === 'L') {
            console.log('Player 1 pass a coin left!')
            playerOne.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceThreeValue === 'R') {
            console.log('Player 1 pass a coin right!')
            playerOne.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceThreeValue === 'C') {
            console.log('Player 1 pass a coin to the center!')
            playerOne.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
    }




    //////// ELSE IF STATEMENT - if the object playerOne, Key-coins, array length is 2, roll 2 dice //////////////
    else if (playerOne.coins.length === 2) {

        /////////////////////////////////// Player1 Dice1 Roll ////////////////////////////////////////////////
        let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
        document.querySelector('#diceOne').innerText = randomDiceOneValue
        if (randomDiceOneValue === '*') {
            console.log('Player 1 keep a coin!')
        }
        if (randomDiceOneValue === 'L') {
            console.log('Player 1 pass a coin left!')
            playerOne.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceOneValue === 'R') {
            console.log('Player 1 pass a coin right!')
            playerOne.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceOneValue === 'C') {
            console.log('Player 1 pass a coin to the center!')
            playerOne.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
        /////////////////////////////// Player1 Dice2 Roll //////////////////////////////////////////////////
        let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
        document.querySelector('#diceTwo').innerText = randomDiceTwoValue
        if (randomDiceTwoValue === '*') {
            console.log('Player 1 keep a coin!')
        }
        if (randomDiceTwoValue === 'L') {
            console.log('Player 1 pass a coin left!')
            playerOne.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceTwoValue === 'R') {
            console.log('Player 1 pass a coin right!')
            playerOne.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceTwoValue === 'C') {
            console.log('Pass a coin to the center!')
            playerOne.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
    }




    //////// ELSE IF STATEMENT - if the object playerOne, Key-coins, array length is 1, roll 1 dice ///////////////
    else if (playerOne.coins.length === 1) {
        /////////////////////////////////// Player1 Dice1 Roll ////////////////////////////////////////////////
        let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
        document.querySelector('#diceOne').innerText = randomDiceOneValue
        playerOne.coins.pop()
        playerOne.coins.pop()
        if (randomDiceOneValue === '*') {
            console.log('Player 1 keep a coin!')
        }
        if (randomDiceOneValue === 'L') {
            console.log('Player 1 pass a coin left!')
            playerOne.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceOneValue === 'R') {
            console.log('Player 1 pass a coin right!')
            playerOne.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceOneValue === 'C') {
            console.log('Player 1 pass a coin to the center!')
            playerOne.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }

    }




    ////// ELSE IF STATEMENT - if the object playerOne, Key-coins, array length is 0, roll 0 dice and an alert ///
    else if (playerOne.coins.length === 0) {
        alert('You\'re out of coins. It\'s Player 2\'s turn!')
    }

})
//-------------------------------------------- End of Player1 Click Event for Dice Roll -------------------------------------------------------------------------------













////////////////////////////////////////////// CLICK EVENT - Player2 Roll Dice  ////////////////////////////////////////////
document.querySelector('#buttonTwo').addEventListener('click', (e) => {




    //////// IF STATEMENT - if the Player 1 & Player 3 are out of coins, Player 2 wins! ////////////////////
    if (playerOne.coins.length === 0 && playerThree.coins.length === 0) {
        alert('Player 2 Wins!')
    }




    //////// IF STATEMENT - if the object playerTwo, Key-coins, array.length is 3, roll 3 dice ////////////////////
    if (playerTwo.coins.length >= 3) {

        /////////////////////////////// Player2 Dice1 Roll ////////////////////////////////////////////////
        let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
        document.querySelector('#diceOne').innerText = randomDiceOneValue
        if (randomDiceOneValue === '*') {
            console.log('Player 2 keep a coin!')
        }
        if (randomDiceOneValue === 'L') {
            console.log('Player 2 pass a coin left!')
            playerTwo.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceOneValue === 'R') {
            console.log('Player 2 pass a coin right!')
            playerTwo.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceOneValue === 'C') {
            console.log('Player 2 pass a coin to the center!')
            playerTwo.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
        /////////////////////////////// Player2 Dice2 Roll //////////////////////////////////
        let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
        document.querySelector('#diceTwo').innerText = randomDiceTwoValue
        if (randomDiceTwoValue === '*') {
            console.log('Player 2 keep a coin!')
        }
        if (randomDiceTwoValue === 'L') {
            console.log('Player 2 pass a coin left!')
            playerTwo.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceTwoValue === 'R') {
            console.log('Player 2 pass a coin right!')
            playerTwo.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceTwoValue === 'C') {
            console.log('Player 2 pass a coin to the center!')
            playerTwo.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
        /////////////////////////////// Player2 Dice3 Roll //////////////////////////////////
        let diceThreeValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceThreeValue = diceThreeValues[Math.floor(Math.random() * diceThreeValues.length)]
        document.querySelector('#diceThree').innerText = randomDiceThreeValue
        if (randomDiceThreeValue === '*') {
            console.log('Player 2 keep a coin!')
        }
        if (randomDiceThreeValue === 'L') {
            console.log('Player 2 pass a coin left!')
            playerTwo.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceThreeValue === 'R') {
            console.log('Player 2 pass a coin right!')
            playerTwo.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceThreeValue === 'C') {
            console.log('Player 2 pass a coin to the center!')
            playerTwo.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
    }




    //////// ELSE IF STATEMENT - if the object playerTwo, Key-coins, array length is 2, roll 2 dice ////////////////////
    else if (playerTwo.coins.length === 2) {
        /////////////////////////////// Player2 Dice1 Roll ////////////////////////////////////////////////
        let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
        document.querySelector('#diceOne').innerText = randomDiceOneValue
        if (randomDiceOneValue === '*') {
            console.log('Player 2 keep a coin!')
        }
        if (randomDiceOneValue === 'L') {
            console.log('Player 2 pass a coin left!')
            playerTwo.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceOneValue === 'R') {
            console.log('Player 2 pass a coin right!')
            playerTwo.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceOneValue === 'C') {
            console.log('Player 2 pass a coin to the center!')
            playerTwo.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
        /////////////////////////////// Player2 Dice2 Roll //////////////////////////////////
        let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
        document.querySelector('#diceTwo').innerText = randomDiceTwoValue
        if (randomDiceTwoValue === '*') {
            console.log('Player 2 keep a coin!')
        }
        if (randomDiceTwoValue === 'L') {
            console.log('Player 2 pass a coin left!')
            playerTwo.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceTwoValue === 'R') {
            console.log('Player 2 pass a coin right!')
            playerTwo.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceTwoValue === 'C') {
            console.log('Player 2 pass a coin to the center!')
            playerTwo.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
    }




    //////// ELSE IF STATEMENT - if the object playerTwo, Key-coins, array length is 1, roll 1 dice ////////////////////
    else if (playerTwo.coins.length === 1) {
        /////////////////////////////// Player2 Dice1 Roll ////////////////////////////////////////////////
        let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
        document.querySelector('#diceOne').innerText = randomDiceOneValue
        if (randomDiceOneValue === '*') {
            console.log('Player 2 keep a coin!')
        }
        if (randomDiceOneValue === 'L') {
            console.log('Player 2 pass a coin left!')
            playerTwo.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceOneValue === 'R') {
            console.log('Player 2 pass a coin right!')
            playerTwo.coins.pop()
            let playerThreeArray = playerThree.coins
            playerThreeArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
        }
        if (randomDiceOneValue === 'C') {
            console.log('Player 2 pass a coin to the center!')
            playerTwo.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
    }




    //////// ELSE IF STATEMENT - if the object playerTwo, Key-coins, array length is 0, roll 0 dice and an alert////////////////////
    else if (playerTwo.coins.length === 0) {
        alert('You\'re out of coins. It\'s Player 3\'s turn!')

    }


})
//-------------------------------------------- End of Player2 Click Event for Dice Roll -------------------------------------------------------------------------------













//////////////////////////////////// CLICK EVENT - Player3 to Roll Dice //////////////////////////////////////
document.querySelector('#buttonThree').addEventListener('click', (e) => {




    //////// IF STATEMENT - if the Player 1 & Player 3 are out of coins, Player 2 wins! ////////////////////
    if (playerOne.coins.length === 0 && playerTwo.coins.length === 0) {
        alert('Player 3 Wins!')
    }




    //////// IF STATEMENT - if the object playerThree, Key-coins, array.length is 3, roll 3 dice ////////////////////
    if (playerThree.coins.length >= 3) {

        /////////////////////////////// Player3 Dice1 Roll //////////////////////////////////
        let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
        document.querySelector('#diceOne').innerText = randomDiceOneValue
        if (randomDiceOneValue === '*') {
            console.log('Player 3 keep a coin!')
        }
        if (randomDiceOneValue === 'L') {
            console.log('Player 3 pass a coin left!')
            playerThree.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceOneValue === 'R') {
            console.log('Player 3 pass a coin right!')
            playerThree.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
        }
        if (randomDiceOneValue === 'C') {
            console.log('Player 3 pass a coin to the center!')
            playerThree.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
        /////////////////////////////// Player3 Dice2 Roll //////////////////////////////////
        let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
        document.querySelector('#diceTwo').innerText = randomDiceTwoValue
        if (randomDiceTwoValue === '*') {
            console.log('Player 3 keep a coin!')
        }
        if (randomDiceTwoValue === 'L') {
            console.log('Player 3 pass a coin left!')
            playerThree.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceTwoValue === 'R') {
            console.log('Player 3 pass a coin right!')
            playerThree.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
        }
        if (randomDiceTwoValue === 'C') {
            console.log('Player 3 pass a coin to the center!')
            playerThree.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }

        /////////////////////////////// Player3 Dice3 Roll //////////////////////////////////
        let diceThreeValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceThreeValue = diceThreeValues[Math.floor(Math.random() * diceThreeValues.length)]
        document.querySelector('#diceThree').innerText = randomDiceThreeValue
        if (randomDiceThreeValue === '*') {
            console.log('Player 3 keep a coin!')
        }
        if (randomDiceThreeValue === 'L') {
            console.log('Player 3 pass a coin left!')
            playerThree.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceThreeValue === 'R') {
            console.log('Player 3 pass a coin right!')
            playerThree.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
        }
        if (randomDiceThreeValue === 'C') {
            console.log('Player 3 pass a coin to the center!')
            playerThree.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
    }




    //////// ELSE IF STATEMENT - if the object playerThree, Key-coins, array length is 2, roll 2 dice ////////////////////
    else if (playerThree.coins.length === 2) {
        /////////////////////////////// Player3 Dice1 Roll //////////////////////////////////
        let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
        document.querySelector('#diceOne').innerText = randomDiceOneValue
        if (randomDiceOneValue === '*') {
            console.log('Player 3 keep a coin!')
        }
        if (randomDiceOneValue === 'L') {
            console.log('Player 3 pass a coin left!')
            playerThree.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceOneValue === 'R') {
            console.log('Player 3 pass a coin right!')
            playerThree.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
        }
        if (randomDiceOneValue === 'C') {
            console.log('Player 3 pass a coin to the center!')
            playerThree.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
        /////////////////////////////// Player3 Dice2 Roll //////////////////////////////////
        let diceTwoValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceTwoValue = diceTwoValues[Math.floor(Math.random() * diceTwoValues.length)]
        document.querySelector('#diceTwo').innerText = randomDiceTwoValue
        if (randomDiceTwoValue === '*') {
            console.log('Player 3 keep a coin!')
        }
        if (randomDiceTwoValue === 'L') {
            console.log('Player 3 pass a coin left!')
            playerThree.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceTwoValue === 'R') {
            console.log('Player 3 pass a coin right!')
            playerThree.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
        }
        if (randomDiceTwoValue === 'C') {
            console.log('Player 3 pass a coin to the center!')
            playerThree.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
    }




    //////// ELSE IF STATEMENT - if the object playerThree, Key-coins, array length is 1, roll 1 dice ////////////////////
    else if (playerThree.coins.length === 1) {
        /////////////////////////////// Player3 Dice1 Roll //////////////////////////////////
        let diceOneValues = ['L', 'R', 'C', '*', '*', '*']
        let randomDiceOneValue = diceOneValues[Math.floor(Math.random() * diceOneValues.length)]
        document.querySelector('#diceOne').innerText = randomDiceOneValue
        if (randomDiceOneValue === '*') {
            console.log('Player 3 keep a coin!')
        }
        if (randomDiceOneValue === 'L') {
            console.log('Player 3 pass a coin left!')
            playerThree.coins.pop()
            let playerTwoArray = playerTwo.coins
            playerTwoArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerTwoCoins').innerText = playerTwo.coins
        }
        if (randomDiceOneValue === 'R') {
            console.log('Player 3 pass a coin right!')
            playerThree.coins.pop()
            let playerOneArray = playerOne.coins
            playerOneArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#playerOneCoins').innerText = playerOne.coins
        }
        if (randomDiceOneValue === 'C') {
            console.log('Player 3 pass a coin to the center!')
            playerThree.coins.pop()
            let coinCenterArray = coinCenter.coins
            coinCenterArray.push(' 🔴')
            document.querySelector('#playerThreeCoins').innerText = playerThree.coins
            document.querySelector('#coinCenter').innerText = coinCenter.coins
        }
    }




    //////// ELSE IF STATEMENT - if the object playerThree, Key-coins, array length is 0, roll 0 dice and an alert////////////////////
    else if (playerThree.coins.length === 0) {
        alert('You\'re out of coins. It\'s Player 1\'s turn!')
    }


})
//-------------------------------------------- End of Player3 Click Event for Dice Roll -------------------------------------------------------------------------------












/////////////////////////////////////////////////// OBJECTS ////////////////////////////////////////////////////////////

let playerOne = {
    name: 'Player 1',
    coins: [' 🔴', ' 🔴', ' 🔴']
}


let playerTwo = {
    name: 'Player 2',
    coins: [' 🔴', ' 🔴', ' 🔴']
}


let playerThree = {
    name: 'Player 3',
    coins: [' 🔴', ' 🔴', ' 🔴']
}


let coinCenter = {
    name: 'Coin Center',
    coins: []
}


let dice = {
    diceEmoji: '🎲',
    diceOneValues: ['L', 'R', 'C', '*', '*', '*'],
    diceTwoValues: ['L', 'R', 'C', '*', '*', '*'],
    diceThreeValues: ['L', 'R', 'C', '*', '*', '*']
}
// End of Objects ----------------------------------------------------------------------------------------------------












////////////////////////////////////////// Assigning JS object values to render in HTML ////////////////////////////////




//////////////////////// Assigns dice-object, diceEmoji-key, to starting screen of game ///////////////////////

// Assigns diceOne-Object, Key-diceEmoji, to div-diceOne in HTML
document.querySelector('#diceOne').innerText = dice.diceEmoji

// Assigns diceTwo-Object, Key-diceEmoji, to div-diceTwo in HTML
document.querySelector('#diceTwo').innerText = dice.diceEmoji

// Assigns diceThree-Object, Key-diceEmoji, to div-diceThree in HTML
document.querySelector('#diceThree').innerText = dice.diceEmoji

//------------------------------------------------------------------------------------------------------------




////////////////////////// Assigns playerOne-object coins-key, to the game ////////////////////////////////////

// Assings playerOne-Object, Key-Coins, to div-playerOneCoins in HTML //////////// 
document.querySelector('#playerOneCoins').innerText = playerOne.coins

// Assigns my array of coins to playerTwoCoins div ////////////////////////////////
document.querySelector('#playerTwoCoins').innerText = playerTwo.coins


// Assigns my array of coins to playerThreeCoins div //////////////////////////////
document.querySelector('#playerThreeCoins').innerText = playerThree.coins

//--------------------------------------------------------------------------------------------------------------