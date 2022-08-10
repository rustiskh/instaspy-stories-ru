// Menu
window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu"),
		menuItem = document.querySelectorAll(".menu__link"),
		hamburger = document.querySelector(".header-menu"),
		menuClose = document.querySelector(".menu__close");

	hamburger.addEventListener("click", () => {
		menu.classList.toggle("menu_active");
	});

	menuClose.addEventListener("click", () => {
		menu.classList.toggle("menu_active");
	});

	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			menu.classList.toggle("menu_active");
		});
	});
});

// // Блок FAQ
document.addEventListener("DOMContentLoaded", function () {
	var faqItems = document.querySelectorAll(".faq-card");

	faqItems.forEach((faqItem) => {
		faqItem.addEventListener("click", function () {
			faqItems.forEach((item) => {
				if (item !== faqItem) {
					item.classList.remove("faq-card_active");
				}
			});

			faqItem.classList.toggle("faq-card_active");
		});
	});
});

// pageUp

document.addEventListener("DOMContentLoaded", function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$(".pageup").fadeIn();
		} else {
			$(".pageup").fadeOut();
		}
	});
});
