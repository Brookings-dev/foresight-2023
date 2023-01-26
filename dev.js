(function() {
	'use strict';

/* -- Tools -- */

	function analytics(action, label='null') {
		window.dataLayer.push({
			'event': 'Interactive',
			'category': 'Interactive',
			'action': action,
			'label': label
		});
		// console.clear();
		// console.table(window.dataLayer);
	}

	// function throttle(callback, limit) {
	// 	var wait = false;
	// 	return function() {
	// 		if (wait) return;
	// 		callback.call();
	// 		wait = true;
	// 		setTimeout(function(){
	// 			wait = false;
	// 		}, limit);
	// 	}
	// }

/* -- Function -- */

/* -- Application -- */

	function app() {

		function mobile(){
			let mql = window.matchMedia('(max-width:1024px)'); 
			
			return mql.matches;
		}

		function slideOutMenu(){
			let button = document.getElementById("js--chapter"),
				menu = document.getElementById("fa22--nav__chapter-menu"),
				menuItems = document.querySelectorAll("#fa22--nav__chapter-menu .chapter__item");

			button.addEventListener("click", () => {
				analytics("dropdown_menu", "dropdown");
				menu.classList.contains("js--open") ? menu.classList.remove("js--open") : menu.classList.add("js--open");
			})


			for (let i = 0; i < menuItems.length; i++){
				menuItems[i].addEventListener("click", e => {
					analytics("dropdown_menu", `chapter_0${i + 1}`);
				})
			}
		}

		function toggleView(){
			let btns = document.querySelectorAll(".report__buttons button");

			btns.forEach(x => {
				x.addEventListener("click", e => {
					let parent = x.parentElement.parentElement,
						currentActiveBtn = parent.querySelector(".btn__active"),
						currentActiveView = parent.querySelector(".js--active-view"),
						targetView = x.classList.value.split("btn__")[1];

					e.target.blur();

					currentActiveBtn.classList.remove("btn__active");
					currentActiveView.classList.remove("js--active-view");

					x.classList.add("btn__active");
					parent.querySelector(`.${targetView}__container`).classList.add("js--active-view");
				})
			})
		}

		function expand(){
			let btn = document.getElementById("btn--expand");

			btn.addEventListener("click", () => {
				let collapsedEntries = document.querySelectorAll(".past__entry.js--hidden");
				event.target.blur();

				collapsedEntries.forEach(x => {
					x.classList.remove("js--hidden");
				})

				btn.style.display = "none";
			})
		}

		function loadImages(){
			if (!mobile()) {
				let images = document.querySelectorAll("img.js--imgDefer");

				images.forEach(x => {
					x.setAttribute("src", x.getAttribute("data-src"));
				})
			}
		}

		function mobileViewpointsExpand(){
			let expand = document.querySelectorAll(".viewpoint__expand button.js--expandable");

			expand.forEach(x => {
				x.addEventListener("click", e => {
					let parent = x.parentElement.parentElement,
						viewpoints = parent.querySelectorAll(".viewpoint__entry");

					e.target.blur();
					
					for (let i = 0; i < viewpoints.length; i++){
						viewpoints[i].style.display = null;
					}

					x.parentElement.style.display = "none";
				})
			})
		}

		function mobileViewpointInitialize(){
			if (mobile()) {
				let parents = document.querySelectorAll(".fa22--chapters");

				parents.forEach(x => {
					let viewpoints = x.querySelectorAll(".viewpoint__entry");

					if (viewpoints.length > 2) {
						for (let i = 2; i < viewpoints.length; i++) {
							viewpoints[i].style.display = "none";
						}
					} else {
						if (x.querySelector(".viewpoint__expand") != null) {
							x.querySelector(".viewpoint__expand").style.display = "none";
						}
					}
				}) 
			}
			
		}

		function eventTimer(){
			let eventDate = document.getElementById("fa22--event").getAttribute("data-start"),
				today = new Date(),
				now = new Date().getTime(),
				distance = Date.parse(eventDate) - now,
				endOfEvent = document.getElementById("fa22--event").getAttribute("data-end");

			var d1 = Date.parse(eventDate);
			var d2 = Date.parse(today);

			
			if (d1 < d2) {
				document.getElementById("fa22--event").style.display = "none";
			} else if (distance < 0 && now < endOfEvent) {
				console.log("currently");
			} else if (d1 > d2) {
				console.log("upcoming");
			}
		}

		function checkforAdminBar(){
			let html = document.querySelector("html").offsetTop,
				topNav = document.getElementById("fa22--nav");
			
			if (html > 0) {
				topNav.style.top = `80px`;
				// header.style.marginTop = `${topNav.offsetHeight + 80}px`;
			}
		}

		function scrollSticky(){
			let nav = document.getElementById("fa22--nav"),
				header = document.querySelector(".fa22--header-container"),
				menu = nav.querySelector("#fa22--nav__chapter-menu"),
				coord = header.getBoundingClientRect(),
				brookingsHeader = document.querySelector(".site-header.not-top");

			if (coord.bottom < 0) {
				nav.style.opacity = 1;
				brookingsHeader != null ? nav.style.top = ((brookingsHeader.clientHeight + brookingsHeader.offsetTop) + 5) + "px" : "";
			} else if (!menu.classList.contains("js--open")) {
				nav.style.opacity = null;
			}
		}

		function otherLinks(){
			let links = document.querySelectorAll("#fa22--nav__top-level li a"),
				menu = document.getElementById("fa22--nav__chapter-menu");

			links.forEach(x => {
				x.addEventListener("click", () => {
					if (menu.classList.contains("js--open")) {
						menu.classList.remove("js--open");
					}

					window.scrollBy(0, -150)
				})
			})
		}

		function hideViewpointHeaders(){
			let viewpoints = document.querySelectorAll(".fa22--chapters__viewpoints");

			viewpoints.forEach(view => {
				let header = view.querySelector("h3"),
					entries = view.querySelectorAll(".viewpoint__entry");

				if (entries.length == 0) {
					header.style.display = "none";
				} else if (entries.length > 0) {
					header.style = null;
				}
			});
		}

		function pageAnalytics(){
			let pdfBtn = document.getElementById("fa22--report-btn"),
				registerBtn = document.getElementById("event__register"),
				detailsBtn = document.getElementById("event__learn-more");


			pdfBtn.addEventListener("click", () => {
				analytics("download", "pdf")
			});

			registerBtn.addEventListener("click", () => {
				analytics("button_click", "event_register")
			});

			detailsBtn.addEventListener("click", () => {
				analytics("button_click", "event_more_details")
			});
		}

		slideOutMenu();
		toggleView();
		expand();
		loadImages();
		mobileViewpointsExpand();
		mobileViewpointInitialize();
		hideViewpointHeaders();
		eventTimer();
		checkforAdminBar();
		otherLinks();
		pageAnalytics();


		window.addEventListener("scroll", scrollSticky);
	}

	// Start the whole thing when the DOM is complete
	document.addEventListener('readystatechange', function() {
		document.readyState === 'interactive' && app();
	}, false);

// end of the interactive
})();
