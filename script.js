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
let isTurnInProgress = false

function renderCoins() {
    players.forEach((player) => {
        document.querySelector(player.coinsSelector).innerText = player.coins.join(', ')
    })

    document.querySelector('#coinCenter').innerText = coinCenter.coins.join(', ')
}

function renderDice(rolls = [dice.diceEmoji, dice.diceEmoji, dice.diceEmoji]) {
    diceSelectors.forEach((selector, index) => {
        const die = document.querySelector(selector)
        const roll = rolls[index] || ''

        die.innerText = roll
        die.classList.toggle('diceFace', Boolean(roll))
        die.classList.remove('diceRoll')

        if (roll) {
            die.offsetHeight
            die.classList.add('diceRoll')
        }
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
        button.disabled = isTurnInProgress || Boolean(winner) || index !== activePlayerIndex || player.coins.length === 0
    })

    if (!winner && players[activePlayerIndex].coins.length === 0) {
        moveToNextAvailablePlayer()
        updateButtons()
    }
}

function getElementCenter(selector) {
    const element = document.querySelector(selector)
    const rect = element.getBoundingClientRect()

    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    }
}

function animateCoinMove(fromSelector, toSelector) {
    const from = getElementCenter(fromSelector)
    const to = getElementCenter(toSelector)
    const movingCoin = document.createElement('div')

    movingCoin.className = 'movingCoin'
    movingCoin.innerText = coinDisplay
    movingCoin.style.left = `${from.x}px`
    movingCoin.style.top = `${from.y}px`
    document.body.appendChild(movingCoin)

    const animation = movingCoin.animate([
        { transform: 'translate(-50%, -50%) scale(1)', left: `${from.x}px`, top: `${from.y}px` },
        { transform: 'translate(-50%, -50%) scale(1.25)', offset: 0.5 },
        { transform: 'translate(-50%, -50%) scale(1)', left: `${to.x}px`, top: `${to.y}px` }
    ], {
        duration: 650,
        easing: 'ease-in-out',
        fill: 'forwards'
    })

    return animation.finished.then(() => {
        movingCoin.remove()
    })
}

function applyRoll(player, roll) {
    if (roll === '*') {
        return null
    }

    player.coins.pop()

    if (roll === 'L') {
        const targetPlayer = players[player.leftPlayerIndex]
        targetPlayer.coins.push(coinDisplay)

        return {
            fromSelector: player.coinsSelector,
            toSelector: targetPlayer.coinsSelector
        }
    }

    if (roll === 'R') {
        const targetPlayer = players[player.rightPlayerIndex]
        targetPlayer.coins.push(coinDisplay)

        return {
            fromSelector: player.coinsSelector,
            toSelector: targetPlayer.coinsSelector
        }
    }

    if (roll === 'C') {
        coinCenter.coins.push(coinDisplay)

        return {
            fromSelector: player.coinsSelector,
            toSelector: '#coinCenter'
        }
    }
}

function rollDiceForPlayer(player) {
    const diceCount = Math.min(player.coins.length, 3)
    const rolls = []
    const coinMoves = []

    for (let index = 0; index < diceCount; index++) {
        const roll = dice.diceValues[Math.floor(Math.random() * dice.diceValues.length)]
        rolls.push(roll)
        const coinMove = applyRoll(player, roll)

        if (coinMove) {
            coinMoves.push(coinMove)
        }
    }

    renderDice(rolls)

    return coinMoves
}

async function animateCoinMoves(coinMoves) {
    for (const coinMove of coinMoves) {
        await animateCoinMove(coinMove.fromSelector, coinMove.toSelector)
    }
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

async function takeTurn(playerIndex) {
    if (playerIndex !== activePlayerIndex) {
        return
    }

    const player = players[playerIndex]

    if (player.coins.length === 0) {
        moveToNextAvailablePlayer()
        updateButtons()
        return
    }

    isTurnInProgress = true
    updateButtons()
    setDiceTurnColor(player)
    const coinMoves = rollDiceForPlayer(player)
    await animateCoinMoves(coinMoves)
    isTurnInProgress = false
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
