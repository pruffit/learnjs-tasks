for (let li of tree.querySelectorAll('li')) {
	let span = document.createElement('span');
	li.prepend(span);
	span.append(span.nextSibling);
}

tree.onclick = function(event) {

	if (event.target.tagName != 'SPAN') {
		return;
	}

	let childrenContainer = event.target.parentNode.querySelector('ul');
	if (!childrenContainer) return;

	childrenContainer.hidden = !childrenContainer.hidden;
}