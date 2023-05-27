import { html, css, LitElement } from "./lit-core.min.js";

class FeatureBox extends LitElement {
	static properties = {
		inputs: { type: Object },
	};
	static styles = css`
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: Roboto Condensed, sans-serif;
		}
		a {
			text-decoration: none;
		}
		a .featurebox {
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
			padding: 0;
			overflow: hidden;
			height: 100%;
		}
		a .featurebox:hover .featureboxTitle::after {
			opacity: 1;
		}
		a .featurebox:hover .featureboxImage {
			transform: scale(1.1);
		}
		a .featurebox .featureboxImageContainer {
			width: 100%;
			height: 220px;
			max-height: 220px;
			overflow: hidden;
		}
		a .featurebox .featureboxImageContainer .featureboxImage {
			width: 100%;
			height: 100%;
			transition: transform 600ms ease;
			object-fit: cover;
		}
		a .featurebox .featureboxTitle {
			color: #006dae;
			font-size: 1.2rem;
			position: relative;
			margin: 0;
			padding: 15px;
			text-align: center;
			font-weight: bold;
		}
		a .featurebox .featureboxTitle::after {
			content: "";
			width: 100%;
			height: 5px;
			background: linear-gradient(transparent, #007aff, transparent);
			position: absolute;
			top: -2.5px;
			left: 0;
			opacity: 0;
			transition: opacity 600ms ease;
			z-index: 1000;
		}
	`;
	constructor() {
		super();
	}
	render() {
		return html` <a href="${this.inputs.link}">
			<div class="featurebox">
				<div class="featureboxImageContainer">
					<img
						class="featureboxImage"
						src="${this.inputs.src
							? this.inputs.src
							: "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"}"
						alt="${this.inputs.alt ? this.inputs.alt : "placeholder"}"
					/>
				</div>
				<h3 class="featureboxTitle">
					${this.inputs.title ? this.inputs.title : "placeholder"}
				</h3>
			</div>
		</a>`;
	}
}

class MyName extends LitElement {
	static properties = {
		name: { type: String },
	};
	static styles = css`
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: Roboto Condensed, sans-serif;
		}
		.myName {
			font-size: 40px;
			text-align: center;
			margin-bottom: 30px;
		}
		.myName .letter {
			display: inline-block;
			transition: transform 600ms ease;
		}
		.myName:hover .letter:nth-child(1) {
			transform: translate(-20px, -20px) rotate(-20deg);
		}
		.myName:hover .letter:nth-child(2) {
			transform: translate(-10px, 20px) rotate(10deg);
		}
		.myName:hover .letter:nth-child(3) {
			transform: translate(-10px, -20px) rotate(-10deg);
		}
		.myName:hover .letter:nth-child(4) {
			transform: translate(0px, 10px) rotate(20deg);
		}
		.myName:hover .letter:nth-child(5) {
			transform: translate(-10px, -40px) rotate(-20deg);
		}
		.myName:hover .letter:nth-child(6) {
			transform: translate(-10px, 10px) rotate(10deg);
		}
		.myName:hover .letter:nth-child(7) {
			transform: translate(-10px, -20px) rotate(-10deg);
		}
		.myName:hover .letter:nth-child(8) {
			transform: translate(0, 20px) rotate(10deg);
		}
		.myName:hover .letter:nth-child(9) {
			transform: translate(0, -30px) rotate(-20deg);
		}
		.myName:hover .letter:nth-child(10) {
			transform: translate(0, 10px) rotate(10deg);
		}
		.myName:hover .letter:nth-child(11) {
			transform: translate(10px, -20px) rotate(-10deg);
		}
		.myName:hover .letter:nth-child(12) {
			transform: translate(10px, 10px) rotate(20deg);
		}
		.myName:hover .letter:nth-child(13) {
			transform: translate(20px, -10px) rotate(-10deg);
		}
		.myName:hover .letter:nth-child(14) {
			transform: translate(20px, 20px) rotate(20deg);
		}
		.myName:hover .letter:nth-child(15) {
			transform: translate(20px, -30px) rotate(-10deg);
		}
		.myName:hover .letter:nth-child(16) {
			transform: translate(25px, 10px) rotate(10deg);
		}
	`;

	constructor() {
		super();
	}

	render() {
		const element = document.createElement("h1");
		element.innerText = `${this.name}`;
		element.classList.add("myName");
		this.renderRoot.append(element);
		const myNameElement = this.renderRoot.querySelector(".myName");
		const splitedLetters = this.renderRoot
			.querySelector(".myName")
			.textContent.split("");
		myNameElement.innerText = "";
		splitedLetters.forEach((letter) => {
			const span = document.createElement("span");
			span.classList.add("letter");
			span.style.display = "inline-block";
			if (letter === " ") {
				span.innerText = "-";
				span.style.visibility = "hidden";
			} else {
				span.innerText = letter;
			}
			element.append(span);
		});
	}
}

customElements.define("feature-box", FeatureBox);
customElements.define("my-name", MyName);

const showMore = document.querySelector(".showMore");
const paragraphs = document.querySelectorAll(".paragraphToHide");
showMore.addEventListener("click", () => {
	if (showMore.textContent === "Show more ...") {
		showMore.textContent = "Show less";
	} else {
		showMore.textContent = "Show more ...";
	}
	paragraphs.forEach((paragraph) => {
		paragraph.classList.toggle("hidden");
	});
});
