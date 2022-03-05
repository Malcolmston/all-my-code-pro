const equation = document.getElementById("equation");

const startBtn = document.getElementById("button");

//const startBtn = document.createElement("button");

startBtn.innerHTML = "Start listening";

const result = document.createElement("div");
const processing = document.createElement("p");

document.body.append(startBtn);

document.body.append(result);
document.body.append(processing);

const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

if (typeof SpeechRecognition === "undefined") {
	startBtn.remove();
	equation.textContent =
		"Browser does not support Speech API. Please download latest chrome";
}

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

function process(speech_text) {
	return "....";
}

recognition.onresult = (event) => {
	const last = event.results.length - 1;
	const res = event.results[last];
	const text = res[0].transcript;
	if (res.isFinal) {
		equation.textContent = "processing ....";
		const response = process(text);

		const p = document.createElement("p");
		equation.textContent = ` ${text}  ${response}`;
		processing.innerHTML = "";
		result.appendChild(p);

		// add text to speech later
	} else {
		processing.innerHTML = `listening: ${text}`;
	}
};

let listening = false;
toggleBtn = () => {
	if (listening) {
		recognition.stop();
		startBtn.textContent = "Start listening";
	} else {
		recognition.start();
		startBtn.textContent = "Stop listening";
	}
	listening = !listening;
};
startBtn.addEventListener("click", toggleBtn);

function process(rawText) {
	// remove space and lowercase text
	var text = rawText.replace(/\s/g, "");
	text = text.toLowerCase();
	let response = null;

	switch (text) {
		case "hello":
			response = "hi, how are you doing?";
			break;

			break;

		case "stop" || "end":
			response = "Bye!!";
			toggleBtn();
		// stop listening
	}
	equation.textContent = response;

	return "";
}
