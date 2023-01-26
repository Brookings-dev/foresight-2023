function getViewpoints(){
	let views = document.querySelectorAll(".viewpoint__entry");
	const container = document.createElement("div");

	views.forEach(v => {
		let link = v.getAttribute("href"),
			title = v.querySelector(".viewpoint__title").innerText,
			authors = v.querySelector(".viewpoint__author").innerText;

		container.innerHTML += `<div class="viewpoints__individual">
						<div class="viewpoints__num">
							<p>&#x2023;</p>
						</div>
						<div class="viewpoints__meta">
							<a href="${link}" class="chapter__linkout">
								<span class="viewpoints__title">${title}</span>
								<p class="viewpoints__author">${authors}</p>
							</a>
						</div>
					</div>
					`
	})

	// container.innerHTML = ooptie; 

	document.body.appendChild(container);
}

getViewpoints();