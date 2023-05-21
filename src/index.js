import { html, css, LitElement } from "./lit-core.min.js";

class customElement extends LitElement {
	static properties = {
		inputs: { type: Object },
	};

	static styles = css``;

	constructor() {
		super();
	}

	submitForm(e) {
		e.preventDefault();
		console.log(this.renderRoot.querySelector("#username").value);
		console.log(typeof this.renderRoot.querySelector("#username").value);
	}

	checkUser() {
		if (this.inputs.name) {
			return `Welcome to the app: ${this.inputs.name.toUpperCase()}`;
		} else {
			return `Please login in.`;
		}
	}

	listSkills() {
		const skills = this.inputs.skills.filter((skill) => {
			if (skill !== "Typescript" && skill !== "React") {
				return true;
			}
		});
		return skills.map((skill) => html`<li>${skill}</li>`);
	}

	render() {
		console.log(this.inputs);
		console.log(this.renderRoot.querySelector("p"));
		return html` <p>${this.checkUser()}</p>
			<ul class="list">
				${this.listSkills()}
			</ul>`;
	}
}

customElements.define("custom-element", customElement);
