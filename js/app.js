let images = [{
	url: "./image/img_slider1.jpg",
	link: "Rostov-on-Don, admiral",
	city: "Rostov-on-Don,<br> LCD admiral",
	area: "81 m<sup>2</sup>",
	time: "3.5 months",
}, {
	url: "./image/img_slider2.jpg",
	link: "Sochi Thieves",
	city: "Sochi<br> Thieves",
	area: "105 m<sup>2</sup>",
	time: "4 months",
}, {
	url: "./image/img_slider3.jpg",
	link: "Roctov-on-Don Patriotic",
	city: "Roctov-on-Don<br> Patriotic",
	area: "93 m<sup>2</sup>",
	time: "3 months",
}];

function initSlider() {
	if(!images || !images.length) return; 

	let sliderImages = document.querySelector(".slider-images");
	let sliderArrows = document.querySelector(".dots"); 
	let sliderDots = document.querySelector(".slider-dots");
	let sliderLinks = document.querySelector(".projects-list");

	initImages(); 
	initArrows();
	initDots();
	changeLinks();
	initItems();
	changeItems();

	function initImages() {
		images.forEach((image, index) => {
			let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;

			sliderImages.innerHTML += imageDiv;
		});
	}

	function initArrows() {
		sliderArrows.querySelectorAll(".slider-arrow").forEach(arrow => {
			arrow.addEventListener("click", function() {
				let currentNumber = +sliderImages.querySelector(".active").dataset.index;
				let nextNumber;

				if (arrow.classList.contains("left-arrow")) {
					nextNumber = currentNumber === 0 ? images.length - 1 : currentNumber - 1;
				} else {
					nextNumber = currentNumber === images.length - 1 ? 0 : currentNumber + 1;
				}
				moveSlider(nextNumber);
			});
		});
	}

	function initDots() {
		images.forEach((image, index) => {
			let dot = `<div class="slider-dots-item n${index} ${index === 0 ? "active" : ""}" data-index=${index}></div>`;
			sliderDots.innerHTML += dot;
		});
		sliderDots.querySelectorAll(".slider-dots-item").forEach(dot => {
			dot.addEventListener('click', function () {
				moveSlider(this.dataset.index);
			});
		});
	}

	function changeLinks() {
		images.forEach((image, index) => {
			let link = `<li class="projects-list__item"><a class="projects-list__link n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].link}</a></li>`;
			sliderLinks.innerHTML += link; 
		});

		sliderLinks.querySelectorAll(".projects-list__link").forEach(link => {
			link.addEventListener('click', function() {
				moveSlider(this.dataset.index);
			});
		});
	}

	function initItems() {
		let infoCity = document.querySelector(".info-city");
		let infoArea = document.querySelector(".info-area");
		let infoTime = document.querySelector(".info-time");

		let cityDiv = `<span class="projects__elem_text">${images[0].city}</span>`;
		let areaDiv = `<span class="projects__elem_text">${images[0].area}</span>`;
		let timeDiv = `<span class="projects__elem_text">${images[0].time}</span>`;

		infoCity.innerHTML = cityDiv;
		infoArea.innerHTML = areaDiv;
		infoTime.innerHTML = timeDiv;
	}

		function changeItems(index) {
		let city = document.querySelector(".info-city");
		city.innerHTML = `<span class="projects__elem_text">${images[index].city}</span>`;

		let area = document.querySelector(".info-area");
		area.innerHTML = `<span class="projects__elem_text">${images[index].area}</span>`;

		let time = document.querySelector(".info-time");
		time.innerHTML = `<span class="projects__elem_text">${images[index].time}</span>`;
	}

	function moveSlider(index) {
		sliderImages.querySelector(".active").classList.remove("active");
		sliderImages.querySelector(".n" + index).classList.add("active");

		sliderDots.querySelector(".active").classList.remove("active");
		sliderDots.querySelector(".n" + index).classList.add("active");

		sliderLinks.querySelector(".active").classList.remove("active");
		sliderLinks.querySelector(".n" + index).classList.add("active");

		changeItems(index);
	}
}

document.addEventListener("DOMContentLoaded", initSlider);
