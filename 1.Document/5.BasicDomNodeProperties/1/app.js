for (let li of document.querySelectorAll('li')) {
	let title = li.firstChild.data;
	// переменная title содержит текст элемента <li>
	title = title.trim();
	let count = li.getElementsByTagName('li').length;
	alert(title + ': ' + count);
}