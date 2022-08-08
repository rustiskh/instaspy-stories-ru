// слайдеры
$(document).ready(function () {
	$(".features-wrapper").slick({
		responsive: [
			{
				breakpoint: 10000,
				settings: "unslick",
			},
			{
				breakpoint: 1190,
				settings: {
					variableWidth: true,
					centerMode: true,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					autoplay: true,
					autoplaySpeed: 2000,
				},
			},
		],
	});

	$(".opinion-wrapper").slick({
		variableWidth: true,
		centerMode: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$(".blog-wrapper").slick({
		responsive: [
			{
				breakpoint: 10000,
				settings: "unslick",
			},
			{
				breakpoint: 1190,
				settings: {
					variableWidth: true,
					centerMode: true,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					autoplay: true,
					autoplaySpeed: 2000,
				},
			},
		],
	});
});
