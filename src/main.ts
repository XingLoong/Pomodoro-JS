const startButton = document.querySelector('#start') as HTMLButtonElement;
const pauseButton = document.querySelector('#pause') as HTMLButtonElement;
const resetButton = document.querySelector('#reset') as HTMLButtonElement;
const timer = document.querySelector('.timer') as HTMLParagraphElement;

let timeLeft: number = 1500;
let interval: number;

const updateTimer = () => {
	const minutes: number = Math.floor(timeLeft / 60);
	const seconds: number = timeLeft % 60;

	timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;
};

const startTimer = () => {
	interval = setInterval(() => {
		timeLeft--;
		updateTimer();

		if (timeLeft === 0) {
			clearInterval(interval);
			alert("Time's up!");
			timeLeft = 1500;
			updateTimer();
		}
	}, 1_000);
};

const pauseTimer = () => {
	clearInterval(interval);
};

const resetTimer = () => {
	clearInterval(interval);
	timeLeft = 1500;
	updateTimer();
};

startButton.addEventListener('click', startTimer);

pauseButton.addEventListener('click', pauseTimer);

resetButton.addEventListener('click', resetTimer);
