$(document).ready(function () {
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
					centerPadding: "30px",
					prevArrow:
						'<button type="button" class="slick-prev"><img src="icons/icon-arrow-left.svg"></button>',
					nextArrow:
						'<button type="button" class="slick-next"><img src="icons/icon-arrow-right.svg"></button>',
				},
			},
		],
	});

	var videoSliderBtns = document.querySelectorAll(
		".user-stories-wrapper .slick-dots button"
	);
	console.log(videoSliderBtns);
	videoSliderBtns.forEach(function (videoSliderBtn) {
		var textContent =
			videoSliderBtn.textContent + " / " + videoSliderBtns.length;
		console.log(textContent);
		videoSliderBtn.textContent = textContent;
	});

	// modal wrapper script

	$(".modal-wrapper").slick({
		variableWidth: true,
		centerMode: true,
		slidesToShow: 1,
		dots: true,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="icons/icon-arrow-left.svg"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="icons/icon-arrow-right.svg"></button>',
	});

	var videoModalSliderBtns = document.querySelectorAll(
		".modal-wrapper .slick-dots button"
	);
	console.log(videoSliderBtns);
	videoModalSliderBtns.forEach(function (videoModalSliderBtn) {
		var textContent =
			videoModalSliderBtn.textContent +
			" / " +
			videoModalSliderBtns.length;
		console.log(textContent);
		videoModalSliderBtn.textContent = textContent;
	});

	// open-close modal

	$(".modal-body__close").on("click", function () {
		$(".modal-stories-view").fadeOut("fast");
	});

	$(".stories-card .stories-card__video").each(function (i) {
		$(this).on("click", function () {
			$(".modal-stories-view").fadeIn("fast");
		});
	});
});
