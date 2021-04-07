// Your code goes here
let busImg = document.querySelector('.intro img');
busImg.style.transition = 'all 1s';

// zoom the bus image in and out

// mouseover
busImg.addEventListener('mouseover', () => {
	busImg.style.transform = 'scale(1.5)';
});

// mouseout
busImg.addEventListener('mouseout', () => {
	busImg.style.transform = 'scale(1)';
});

//spin the map image
// click
let mapImg = document.querySelector('.img-content img');
mapImg.style.transition = 'all 1s';
let delta = 360;
mapImg.addEventListener('click', () => {
	mapImg.style.transform = `rotate(${delta}deg)`;
	delta += 360;
});

// double click
const welcomeMessage = document.querySelector('.intro h2');
const header = document.querySelector('.intro');

welcomeMessage.addEventListener('dblclick', e => {
	e.stopPropagation();
	if (welcomeMessage.textContent !== welcomeMessage.textContent.toUpperCase()) {
		welcomeMessage.textContent = welcomeMessage.textContent.toUpperCase();
	} else {
		welcomeMessage.textContent = welcomeMessage.textContent.toLowerCase();
	}
});

header.addEventListener('dblclick', () => {
	if (header.style.backgroundColor === '') {
		header.style.backgroundColor = 'blue';
	} else {
		header.style.backgroundColor = '';
	}
});

// prevent Default
Array.from(document.links).forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		console.log('is working');
	});
});

// keydown
const divs = document.querySelectorAll('div');
document.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		divs.forEach(div => {
			div.style.backgroundColor = `#${Math.floor(Math.random() * 1000000)}`;
		});
	}
});

// keyup
document.addEventListener('keyup', e => {
	if (e.key === 'Escape') {
		mapImg.style.transform = 'scale(1)';
		riverImg.style.transform = 'skew(0deg, 0deg)';
		divs.forEach(div => {
			div.style.backgroundColor = `white`;
		});
	}
});

// scroll
document.addEventListener('scroll', () => {
	divs.forEach(div => {
		div.style.backgroundColor = `#${Math.floor(Math.random() * 1000000)}`;
	});
});

// resize
window.addEventListener('resize', () => {
	divs.forEach(div => {
		div.style.backgroundColor = `#${Math.floor(Math.random() * 1000000)}`;
	});
});

// 9 animation end
mapImg.addEventListener('pointerleave', () => {
	mapImg.style.transform = 'scale(1.5)';
});

// 10 pointer out
let riverImg = document.querySelector('.img-fluid');
riverImg.style.transition = 'all 1s';
riverImg.addEventListener('pointerout', () => {
	console.log('Hi Im working');
	riverImg.style.transform = 'skew(30deg, 20deg)';
});
