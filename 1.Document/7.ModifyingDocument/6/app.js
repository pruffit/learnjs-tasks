let lis = document.getElementsByTagName('li');

for (let li of lis) {
	let descendantsCount = li.getElementsByTagName('li').length;
	if (!descendantsCount) continue;
	li.firstChild.data += ' [' + descendantsCount + ']';
}