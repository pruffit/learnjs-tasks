function getCoords(elem) {
	let box = elem.getBoundingClientRect();

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};
}

function showNote(anchor, position, html) {

	let note = document.createElement('div');
	note.className = "note";
	note.innerHTML = html;
	document.body.append(note);

	positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {

	let anchorCoords = getCoords(anchor);

	switch (position) {
		case "top-out":
			elem.style.left = anchorCoords.left + "px";
			elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
			break;

		case "right-out":
			elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
			elem.style.top = anchorCoords.top + "px";
			break;

		case "bottom-out":
			elem.style.left = anchorCoords.left + "px";
			elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
			break;

		case "top-in":
			elem.style.left = anchorCoords.left + "px";
			elem.style.top = anchorCoords.top + "px";
			break;

		case "right-in":
			elem.style.width = '150px';
			elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
			elem.style.top = anchorCoords.top + "px";
			break;

		case "bottom-in":
			elem.style.left = anchorCoords.left + "px";
			elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
			break;
	}

}


let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");