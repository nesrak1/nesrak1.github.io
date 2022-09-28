//because some people don't like full bright green I guess
var textColors = ["#0c3", "#ccc", "#3df", "#fb4"];
var borderColors = ["#030", "#444", "#123", "#321"];
function cycleColor(storageName, cssName, colorArray) {
	if (!localStorage.getItem(storageName)) {
		localStorage.setItem(storageName, 0);
	}
	var textColor = parseInt(localStorage.getItem(storageName)) + 1;
	if (textColor > 3)
		textColor = 0;
	localStorage.setItem(storageName, textColor);
	document.documentElement.style.setProperty(cssName, colorArray[textColor]);
}

function cycleColors() {
	cycleColor("textcolor", "--textColor", textColors);
	cycleColor("bordercolor", "--borderColor", borderColors);
}

function loadColor(storageName, cssName, colorArray) {
	if (localStorage.getItem(storageName)) {
		var color = parseInt(localStorage.getItem(storageName));
		document.documentElement.style.setProperty(cssName, colorArray[color]);
	}
}

function loadColors() {
	loadColor("textcolor", "--textColor", textColors);
	loadColor("bordercolor", "--borderColor", borderColors);
}

loadColors();