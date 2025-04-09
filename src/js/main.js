// Mobile Menu
function toggleMobileMenu() {
	const menu = document.querySelector("#mobile-menu")
	const burger = document.querySelector("#burger")
	const body = document.querySelector("body")

	burger.addEventListener("click", () => {
		burger.classList.toggle("active")
		menu.classList.toggle("open")
		body.classList.toggle("overflow-hidden")
	})

	menu.addEventListener("click", (e) => {
		if (e.target.classList.contains("mobile-menu")) {
			menu.classList.remove("open")
			burger.classList.remove("active")
			body.classList.remove("overflow-hidden")
		}
	})

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove("open")
			burger.classList.remove("active")
			body.classList.remove("overflow-hidden")
		}
	})
}
toggleMobileMenu()

function toggleAccordion() {
	const items = document.querySelectorAll(".accordion-item")
	const triggers = document.querySelectorAll(".accordion-trigger")
	const contents = document.querySelectorAll(".accordion-content")
	triggers.forEach((trigger) => {
		if (items[0].classList.contains("active")) {
			contents[0].classList.add("active")
		}
		trigger.addEventListener("click", () => {
			const parent = trigger.parentNode
			if (!parent.classList.contains("active")) {
				// If you want only one to be open at a time, and others to close - UNCOMMENT the code below.
				// items.forEach((item, i) => {
				// 	if (i !== idx && item.classList.contains('active')) {
				// 		item.classList.remove('active')
				// 	}
				// })
				// Open the current accordion item
				parent.classList.add("active")
			} else {
				// Close the current accordion item
				parent.classList.remove("active")
			}
		})
	})
}
toggleAccordion()
