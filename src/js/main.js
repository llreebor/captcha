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

// Price Toggle
const toggle = document.getElementById("toggle")
const monthlyLabel = document.getElementById("monthly-label")
const yearlyLabel = document.getElementById("yearly-label")

// Function to update label colors based on toggle state
function updateLabels() {
	if (toggle.checked) {
		// Yearly is active
		monthlyLabel.classList.remove("text-[#212321]")
		monthlyLabel.classList.add("text-[#848884]")
		yearlyLabel.classList.remove("text-[#848884]")
		yearlyLabel.classList.add("text-[#212321]")
	} else {
		// Monthly is active
		monthlyLabel.classList.remove("text-[#848884]")
		monthlyLabel.classList.add("text-[#212321]")
		yearlyLabel.classList.remove("text-[#212321]")
		yearlyLabel.classList.add("text-[#848884]")
	}
}

// Initial state
updateLabels()

// Add event listener for toggle changes
toggle.addEventListener("change", updateLabels)
