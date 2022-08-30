$(document).ready(function () {

	// user stories slider
	$(".user-stories-wrapper").slick({
		variableWidth: true,
		centerMode: true,
		slidesToShow: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 10000,
				settings: "unslick",
			},
			{
				breakpoint: 740,
				settings: {
					prevArrow: '<button type="button" class="slick-prev"><img src="icons/icon-arrow-left.svg"></button>',
					nextArrow: '<button type="button" class="slick-next"><img src="icons/icon-arrow-right.svg"></button>',
				},
			},
		],
	});

	// counter under the wrapper
	var videoSliderBtns = document.querySelectorAll(".user-stories-wrapper .slick-dots button");
	console.log(videoSliderBtns);
	videoSliderBtns.forEach(function (videoSliderBtn) {
		var textContent = videoSliderBtn.textContent + " / " + videoSliderBtns.length;
		console.log(textContent);
		videoSliderBtn.textContent = textContent;
	});

	// slider with all checked pages
	$(".all-stories-block__wrapper").slick({
		variableWidth: true,
		centerMode: true,
		dots: false,
		responsive: [
			{
				breakpoint: 10000,
				settings: "unslick",
			},
			{
				breakpoint: 1290,
				settings: {
					slidesToShow: 3,
					prevArrow: '<button type="button" class="slick-prev"><img src="icons/icon-arrow-left.svg"></button>',
					nextArrow: '<button type="button" class="slick-next"><img src="icons/icon-arrow-right.svg"></button>',
				},
			},
			{
				breakpoint: 740,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	// articles slider
	$(".user-stories__articles-wrapper").slick({
		variableWidth: true,
		centerMode: true,
		slidesToShow: 1,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 10000,
				settings: "unslick",
			},
			{
				breakpoint: 1290,
				settings: {

				},
			},
		],
	});


});
