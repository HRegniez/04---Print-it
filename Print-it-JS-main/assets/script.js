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
var counter = 0;
var leftBtn = document.querySelector('.arrow_left');
var rightBtn = document.querySelector('.arrow_right');

leftBtn.addEventListener('click', () => {
	counter -= 1;
	if(counter<0) {
		counter = 3;
	}
	reload()
})
rightBtn.addEventListener('click', () => {
	counter += 1;
	if(counter>3) {
		counter = 0;
	}
	reload()
})

let reload = () => {
	let bannerImg = document.querySelector('#banner .banner-img');
	let bannerTagLine = document.querySelector('#banner p');
	bannerImg.innerHTML = `<img class="banner-img" src="./assets/images/slideshow/${slides[counter].image}" alt="Banner Print-it">`;
	bannerTagLine.innerHTML = slides[counter].tagLine;
} 
