import { html, css, LitElement } from "./lit-core.min.js";

class customElement extends LitElement {
	static properties = {};

	static styles = css``;

	constructor() {
		super();
	}

	submitForm(e) {
		e.preventDefault();
		console.log(this.renderRoot.querySelector("#username").value);
		console.log(this.renderRoot.querySelector("#password").value);
	}

	render() {
		return html`<form @submit="${this.submitForm}">
			<label for="username"></label>
			<input type="text" id="username" name="username" />
			<label for="password"></label>
			<input type="password" id="password" name="password" />
			<input type="submit" value="Submit"></input>
		</form>`;
	}
}

customElements.define("custom-element", customElement);
