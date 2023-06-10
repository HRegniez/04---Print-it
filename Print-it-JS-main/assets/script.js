const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let counter = 0;
const leftBtn = document.querySelector('.arrow_left');
const rightBtn = document.querySelector('.arrow_right');
const dotsArray = [];
const dots = document.querySelector('.dots');


for (const slide of slides) {
	const dot = document.createElement('div');
	dots.appendChild(dot);
	dot.className = 'dot';
	dotsArray.push(dot);
	// for (let i = 0; i < dotsArray.length; i++) {
	// 	const dot = dotsArray[i];
		
	// 	if (i === counter) {
	// 	  dot.classList.add("dot_selected");
	// 	} else {
	// 	  dot.classList.remove("dot_selected");
	// 	}
	// }
}
const dot =document.querySelectorAll('.dot')
dot[0].classList.add('dot_selected')

leftBtn.addEventListener('click', () => {
	counter--
	if(counter < 0) {
		counter = slides.length - 1
	}

	reload();
})
rightBtn.addEventListener('click', () => {
	counter++
	if(counter > slides.length - 1) {
		counter = 0
	}

	reload()
})

const reload = () => {
	const bannerImg = document.querySelector('#banner .banner-img')
	const bannerTagLine = document.querySelector('#banner p')
	bannerImg.src = `./assets/images/slideshow/${slides[counter].image}`
	bannerTagLine.innerHTML = slides[counter].tagLine
	for (let i = 0; i < dotsArray.length; i++) {
		const dot = dotsArray[i]
		
		if (i === counter) {
		  dot.classList.add("dot_selected")
		} else {
		  dot.classList.remove("dot_selected")
		}
	}
}

