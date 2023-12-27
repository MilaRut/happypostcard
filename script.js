const homeUrl = '/home.html';

function goHome() {
	window.location.href = homeUrl;
}

window.addEventListener('load', () => {
	document.getElementsByClassName('title')[0].addEventListener('click', goHome);
	document.getElementsByClassName('title')[0].classList.add('hand-mouse-cursor');
	document.getElementsByClassName('logo')[0].addEventListener('click', goHome);
	document.getElementsByClassName('logo')[0].classList.add('hand-mouse-cursor');
});