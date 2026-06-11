const coinDisplay = ' 🔴'

const players = [
    {
        name: 'Player 1',
        coins: [coinDisplay, coinDisplay, coinDisplay],
        coinsSelector: '#playerOneCoins',
        buttonSelector: '#buttonOne',
        diceClass: 'diceBorderOrange',
        leftPlayerIndex: 1,
        rightPlayerIndex: 2
    },
    {
        name: 'Player 2',
        coins: [coinDisplay, coinDisplay, coinDisplay],
        coinsSelector: '#playerTwoCoins',
        buttonSelector: '#buttonTwo',
        diceClass: 'diceBorderBlue',
        leftPlayerIndex: 0,
        rightPlayerIndex: 2
    },
    {
        name: 'Player 3',
        coins: [coinDisplay, coinDisplay, coinDisplay],
        coinsSelector: '#playerThreeCoins',
        buttonSelector: '#buttonThree',
        diceClass: 'diceBorderGreen',
        leftPlayerIndex: 1,
        rightPlayerIndex: 0
    }
]

const coinCenter = {
    name: 'Coin Center',
    coins: []
}

const dice = {
    diceEmoji: '🎲',
    diceValues: ['L', 'R', 'C', '*', '*', '*']
}

const diceSelectors = ['#diceOne', '#diceTwo', '#diceThree']
const diceArea = document.querySelector('.dice')
let activePlayerIndex = 0

function renderCoins() {
    players.forEach((player) => {
        document.querySelector(player.coinsSelector).innerText = player.coins.join(', ')
    })

    document.querySelector('#coinCenter').innerText = coinCenter.coins.join(', ')
}

function renderDice(rolls = [dice.diceEmoji, dice.diceEmoji, dice.diceEmoji]) {
    diceSelectors.forEach((selector, index) => {
        document.querySelector(selector).innerText = rolls[index] || ''
    })
}

function setDiceTurnColor(player) {
    diceArea.classList.remove('diceBorderGreen', 'diceBorderBlue', 'diceBorderOrange')
    diceArea.classList.add(player.diceClass)
}

function getWinner() {
    const playersWithCoins = players.filter((player) => player.coins.length > 0)
    return playersWithCoins.length === 1 ? playersWithCoins[0] : null
}

function moveToNextAvailablePlayer() {
    for (let offset = 1; offset <= players.length; offset++) {
        const nextPlayerIndex = (activePlayerIndex + offset) % players.length

        if (players[nextPlayerIndex].coins.length > 0) {
            activePlayerIndex = nextPlayerIndex
            return
        }
    }
}

function updateButtons() {
    const winner = getWinner()

    players.forEach((player, index) => {
        const button = document.querySelector(player.buttonSelector)
        button.disabled = Boolean(winner) || index !== activePlayerIndex || player.coins.length === 0
    })

    if (!winner && players[activePlayerIndex].coins.length === 0) {
        moveToNextAvailablePlayer()
        updateButtons()
    }
}

function applyRoll(player, roll) {
    if (roll === '*') {
        return
    }

    player.coins.pop()

    if (roll === 'L') {
        players[player.leftPlayerIndex].coins.push(coinDisplay)
    }

    if (roll === 'R') {
        players[player.rightPlayerIndex].coins.push(coinDisplay)
    }

    if (roll === 'C') {
        coinCenter.coins.push(coinDisplay)
    }
}

function rollDiceForPlayer(player) {
    const diceCount = Math.min(player.coins.length, 3)
    const rolls = []

    for (let index = 0; index < diceCount; index++) {
        const roll = dice.diceValues[Math.floor(Math.random() * dice.diceValues.length)]
        rolls.push(roll)
        applyRoll(player, roll)
    }

    renderDice(rolls)
}

function finishTurn() {
    const winner = getWinner()

    if (winner) {
        renderCoins()
        updateButtons()
        alert(`${winner.name} Wins! Lets Play Again!`)
        window.location.reload()
        return
    }

    moveToNextAvailablePlayer()
    renderCoins()
    updateButtons()
}

function takeTurn(playerIndex) {
    if (playerIndex !== activePlayerIndex) {
        return
    }

    const player = players[playerIndex]

    if (player.coins.length === 0) {
        moveToNextAvailablePlayer()
        updateButtons()
        return
    }

    setDiceTurnColor(player)
    rollDiceForPlayer(player)
    finishTurn()
}

players.forEach((player, index) => {
    document.querySelector(player.buttonSelector).addEventListener('click', () => {
        takeTurn(index)
    })
})

renderDice()
renderCoins()
setDiceTurnColor(players[activePlayerIndex])
updateButtons()
