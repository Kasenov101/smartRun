document.addEventListener("DOMContentLoaded", () => {
	

	const toggleDetails = () => {
		const descrs = document.getElementsByClassName("catalog__item-more");
		const back = document.getElementsByClassName("catalog__item-back");
		for(const el of descrs) {
			el.addEventListener("click", (e) => {
				e.preventDefault();
				const item = el.parentElement;
				const items = item.parentElement.children;
				item.lastElementChild.classList.add("catalog__item-descr-active");
			})
		}

		for (const el of back) {
			el.addEventListener("click", (e) => {
				e.preventDefault();
				el.parentElement.parentElement.classList.remove("catalog__item-descr-active");
			})
		}
	}

	const getItemsInCurrentTab = () => {
		const tabs = document.getElementsByClassName("catalog__tab");
		const items = document.getElementsByClassName("catalog__item");
		for (const item of items) {
			if (item.getAttribute("data-attr") !== "for_fitnes") {
				item.classList.add("catalog__item-hidden");
			}
		}
		for (const tab of tabs) {
			tab.addEventListener("click", () => {
				for (const oldActivTab of tabs) oldActivTab.classList.remove("catalog__tab-active");
				tab.classList.add("catalog__tab-active");
				for (const item of items) {
					if (tab.getAttribute("data-attr") !== item.getAttribute("data-attr")) {
						item.classList.add("catalog__item-hidden");
					} else {
						item.classList.remove("catalog__item-hidden");
					}
				}
			})
		}
	}
	getItemsInCurrentTab();
	toggleDetails();
  });