// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
	const voiceSelect = document.getElementById("voice-select");
	const talkBtn = document.querySelector("#explore > button");
	const face = document.querySelector("#explore > img");
	const tts = document.getElementById("text-to-speak");

	let voices = speechSynthesis.getVoices();
	for (let voice of voices) {
		let opt = document.createElement("option");
		opt.value = voice.name;
		opt.textContent = voice.name;
		voiceSelect.appendChild(opt);
	}
	
	talkBtn.addEventListener("click", () => {
		let utter = new SpeechSynthesisUtterance(tts.value);
		utter.voice = voices.find(x=>x.name === voiceSelect.value);
		speechSynthesis.speak(utter);
	});

	const makeTalk = () => {
		face.src = `./assets/images/smiling${speechSynthesis.speaking ? "-open" : "" }.png`;
		requestAnimationFrame(makeTalk);
	}
	makeTalk();
}