// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
	const confetti = new JSConfetti();

	let hornSelect = document.getElementById("horn-select");
	let hornImg = document.querySelector("#expose > img");
	let volumeControl = document.querySelector("#volume");
	let volumeIcon = document.querySelector("#volume-controls > img");
	let playSound = document.querySelector("#expose > button");
	let audioSource = document.querySelector("audio");

	const syncVolume = () => {
		let v = volumeControl.value;
		let volumeLevel = v == 0 ? 0 :
			v < 33 ? 1 :
			v < 66 ? 2 : 3;

		audioSource.volume = v / 100;

		volumeIcon.src = `./assets/icons/volume-level-${volumeLevel}.svg`;
		volumeIcon.alt = `Volume level ${volumeLevel}`
	};

	const syncSFX = () => {
		let h = hornSelect.value;
		if (h === "select") return;
		hornImg.src = `./assets/images/${h}.svg`;
		audioSource.src = `./assets/audio/${h}.mp3`;
	};

	playSound.addEventListener("click", () => {
		audioSource.currentTime = 0;
		audioSource.play();
		if (hornSelect.value === "party-horn") confetti.addConfetti();
	});

	volumeControl.addEventListener("input", syncVolume);
	hornSelect.addEventListener("change", syncSFX);

	syncSFX();
	syncVolume();
}