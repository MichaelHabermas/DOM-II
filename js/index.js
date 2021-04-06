// Your code goes here
let busImg = document.querySelector('.intro img');
busImg.style.transition = 'all 1s';

// zoom the bus image in and out

busImg.addEventListener('mouseover', e => {
	busImg.style.transform = 'scale(1.5)';
});

busImg.addEventListener('mouseout', e => {
	busImg.style.transform = 'scale(1)';
});

//spin the map image
let mapImg = document.querySelector('.img-content img');
mapImg.style.transition = 'all 1s';
let delta = 360;
mapImg.addEventListener('click', e => {
	mapImg.style.transform = `rotate(${delta}deg)`;
	delta += 360;
});

const welcomeMessage = document.querySelector('.intro h2');
welcomeMessage.addEventListener('dblclick', e => {
	if (welcomeMessage.textContent !== welcomeMessage.textContent.toUpperCase()) {
		welcomeMessage.textContent = welcomeMessage.textContent.toUpperCase();
	} else {
		console.log('Part B Working');
		welcomeMessage.textContent = welcomeMessage.textContent.toLowerCase();
	}
});

// prevent Default
let navLinks = Array.from(document.links).forEach(link => {
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
		divs.forEach(div => {
			div.style.backgroundColor = `white`;
		});
	}
});

// scroll
document.addEventListener('scroll', e => {
	divs.forEach(div => {
		div.style.backgroundColor = `#${Math.floor(Math.random() * 1000000)}`;
	});
});

// resize
window.addEventListener('resize', e => {
	divs.forEach(div => {
		div.style.backgroundColor = `#${Math.floor(Math.random() * 1000000)}`;
	});
});

// 9

// 10

console.log(7);
