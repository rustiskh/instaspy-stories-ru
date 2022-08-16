// Menu
window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".menu"),
		menuItem = document.querySelectorAll(".menu__link"),
		hamburger = document.querySelector(".header-menu"),
		menuClose = document.querySelector(".menu__close"),
		bodyScroll = document.querySelector("body"),
		htmlScroll = document.querySelector("html");

	hamburger.addEventListener("click", () => {
		menu.classList.toggle("menu_active");
		bodyScroll.style.overflow = "hidden";
		htmlScroll.style.overflow = "hidden";
		// bodyScroll.classList.toggle("lock-scroll");
	});

	menuClose.addEventListener("click", () => {
		menu.classList.toggle("menu_active");
		bodyScroll.style.overflow = "";
		htmlScroll.style.overflow = "";
		// bodyScroll.classList.toggle("lock-scroll");
	});

	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			menu.classList.toggle("menu_active");
			bodyScroll.style.overflow = "hidden";
			htmlScroll.style.overflow = "hidden";
			// bodyScroll.classList.toggle("lock-scroll");
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
