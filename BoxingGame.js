'use strict'

class Boxer {
	constructor(name, age, speed, power, defense) {
		this.name = name;
		this.age = age;
		this.speed = speed;
		this.power = power;
		this.defense = defense;
	}
}

const createRandomNumber = (floor, ceiling) => {
	return Math.floor((Math.random() * ceiling) + floor)
}


const createRandomBoxer = () => {
	let newBoxer = new Boxer("John Doe", createRandomNumber(18, 40), createRandomNumber(0, 10), createRandomNumber(0, 10),
		createRandomNumber(0, 10))

	return newBoxer

}

class Round {
	constructor() {
		this.scorecard = [0, 0];
	}
}

const initFight = (boxer1, boxer2) => {
	boxer1.health = 100
	boxer2.health = 100

}

const endFight = (winner) => {
	return `The winner is ${winner}`
}

const createRoundsArray = (numRounds) => {
	let roundsArray = []
	for (i = 0; i < numRounds; i++) {
		roundsArray.push(new Round())

		return roundsArray


	}
}

const runFightSim = (boxer1, boxer2, numRounds) => {
	let roundsArray = createRoundsArray(numRounds)
	initFight(boxer1, boxer2)
	let winner
	return endFight(winner)
}

const runApp = () => {
	let generatedBoxer1 = createRandomBoxer()

	let generatedBoxer2 = createRandomBoxer()

	runFightSim(generatedBoxer1, generatedBoxer2, userPickedNumRounds)

}

runApp()