function runOnKeys(func, ...codes) {
	let pressed = new Set();

	document.addEventListener('keydown', function(event) {
		pressed.add(event.code);

		for (let code of codes) { 
			if (!pressed.has(code)) {
				return;
			}
		}
		pressed.clear();

		func();
	});

	document.addEventListener('keyup', function(event) {
		pressed.delete(event.code);
	});

}

runOnKeys(
	() => alert("Привет!"),
	"KeyQ",
	"KeyW"
);