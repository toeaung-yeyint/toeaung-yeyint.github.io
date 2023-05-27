/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.i;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.i=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(i,t,s)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,h=l.trustedTypes,d=h?h.emptyScript:"",c=l.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u},m="finalized";class f extends HTMLElement{constructor(){super(),this.o=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this.l=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.v)&&void 0!==e?e:this.v=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this.p(s,e);void 0!==i&&(this.m.set(i,s),t.push(i))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.v&&(this.v=[...t.v]),this.elementProperties=new Map(t.elementProperties),this.m=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static p(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this.g(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this.S)&&void 0!==e?e:this.S=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this.S)||void 0===e||e.splice(this.S.indexOf(t)>>>0,1)}g(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.o.set(e,this[e]),delete this[e])}))}createRenderRoot(){var s;const i=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return r=i,n=this.constructor.elementStyles,e?r.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const s=document.createElement("style"),i=t.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})),i;var r,n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.S)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.S)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}$(t,e,s=v){var i;const r=this.constructor.p(t,s);if(void 0!==r&&!0===s.reflect){const n=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:p).toAttribute(e,s.type);this.l=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.l=null}}_$AK(t,e){var s;const i=this.constructor,r=i.m.get(t);if(void 0!==r&&this.l!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:p;this.l=r,this[r]=n.fromAttribute(e,t.type),this.l=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this.l!==t&&(void 0===this.C&&(this.C=new Map),this.C.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._=this.T())}async T(){this.isUpdatePending=!0;try{await this._}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.o&&(this.o.forEach(((t,e)=>this[e]=t)),this.o=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this.S)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this.P()}catch(t){throw e=!1,this.P(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this.S)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}P(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._}shouldUpdate(t){return!0}update(t){void 0!==this.C&&(this.C.forEach(((t,e)=>this.$(e,this[e],t))),this.C=void 0),this.P()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var g;f[m]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:f}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.1");const y=window,A=y.trustedTypes,$=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,b="?"+_,S=`<${b}>`,w=document,C=()=>w.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,U=t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),P="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,O=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,k=/"/g,L=/^(?:script|style|textarea|title)$/i,I=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),z=I(1),V=(I(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),B=new WeakMap,D=w.createTreeWalker(w,129,null,!1),q=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=T;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,d=0;for(;d<s.length&&(o.lastIndex=d,l=o.exec(s),null!==l);)d=o.lastIndex,o===T?"!--"===l[1]?o=H:void 0!==l[1]?o=R:void 0!==l[2]?(L.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=O):void 0!==l[3]&&(o=O):o===O?">"===l[0]?(o=null!=r?r:T,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?O:'"'===l[3]?k:M):o===k||o===M?o=O:o===H||o===R?o=T:(o=O,r=void 0);const c=o===O&&t[e+1].startsWith("/>")?" ":"";n+=o===T?s+S:h>=0?(i.push(a),s.slice(0,h)+x+s.slice(h)+_+c):s+_+(-2===h?(i.push(void 0),e):c)}const a=n+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(a):a,i]};class W{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,h]=q(t,e);if(this.el=W.createElement(l,s),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=D.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(x)||e.startsWith(_)){const s=h[n++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+x).split(_),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?X:"@"===e[1]?Y:F})}else a.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(L.test(i.tagName)){const t=i.textContent.split(_),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],C()),D.nextNode(),a.push({type:2,index:++r});i.append(t[e],C())}}}else if(8===i.nodeType)if(i.data===b)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(_,t+1));)a.push({type:7,index:r}),t+=_.length-1}r++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function J(t,e,s=t,i){var r,n,o,a;if(e===V)return e;let l=void 0!==i?null===(r=s.A)||void 0===r?void 0:r[i]:s.k;const h=N(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,i)),void 0!==i?(null!==(o=(a=s).A)&&void 0!==o?o:a.A=[])[i]=l:s.k=l),void 0!==l&&(e=J(t,l._$AS(t,e.values),l,i)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}M(t){var e;const{el:{content:s},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(s,!0);D.currentNode=r;let n=D.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new Z(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new tt(n,this,t)),this._$AV.push(e),l=i[++a]}o!==(null==l?void 0:l.index)&&(n=D.nextNode(),o++)}return r}U(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Z{constructor(t,e,s,i){var r;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.N=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this.N}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),N(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==V&&this.R(t):void 0!==t._$litType$?this.O(t):void 0!==t.nodeType?this.V(t):U(t)?this.j(t):this.R(t)}L(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}V(t){this._$AH!==t&&(this._$AR(),this._$AH=this.L(t))}R(t){this._$AH!==j&&N(this._$AH)?this._$AA.nextSibling.data=t:this.V(w.createTextNode(t)),this._$AH=t}O(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=W.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.U(s);else{const t=new K(r,this),e=t.M(this.options);t.U(s),this.V(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new W(t)),e}j(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new Z(this.L(C()),this.L(C()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this.N=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,s,i,r){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=J(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=J(this,i[s+o],e,o),a===V&&(a=this._$AH[o]),n||(n=!N(a)||a!==this._$AH[o]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.I(t)}I(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends F{constructor(){super(...arguments),this.type=3}I(t){this.element[this.name]=t===j?void 0:t}}const Q=A?A.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}I(t){t&&t!==j?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class Y extends F{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=J(this,t,e,0))&&void 0!==s?s:j)===V)return;const i=this._$AH,r=t===j&&i!==j||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==j&&(i===j||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const et=y.litHtmlPolyfillSupport;null==et||et(W,Z),(null!==(g=y.litHtmlVersions)&&void 0!==g?g:y.litHtmlVersions=[]).push("2.7.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st,it;class rt extends f{constructor(){super(...arguments),this.renderOptions={host:this},this.st=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.st=((t,e,s)=>{var i,r;const n=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new Z(e.insertBefore(C(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.st)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.st)||void 0===t||t.setConnected(!1)}render(){return V}}rt.finalized=!0,rt._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:rt});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:rt});(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.2");class ot extends rt{static properties={inputs:{type:Object}};static styles=n`
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
	`;constructor(){super()}render(){return z` <a href="${this.inputs.link}">
			<div class="featurebox">
				<div class="featureboxImageContainer">
					<img
						class="featureboxImage"
						src="${this.inputs.src?this.inputs.src:"https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"}"
						alt="${this.inputs.alt?this.inputs.alt:"placeholder"}"
					/>
				</div>
				<h3 class="featureboxTitle">
					${this.inputs.title?this.inputs.title:"placeholder"}
				</h3>
			</div>
		</a>`}}class at extends rt{static properties={name:{type:String}};static styles=n`
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: Roboto Condensed, sans-serif;
		}
		.myName {
			font-size: 38px;
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
	`;constructor(){super()}render(){const t=document.createElement("h1");t.innerText=`${this.name}`,t.classList.add("myName"),this.renderRoot.append(t);const e=this.renderRoot.querySelector(".myName"),s=this.renderRoot.querySelector(".myName").textContent.split("");e.innerText="",s.forEach((e=>{const s=document.createElement("span");s.classList.add("letter"),s.style.display="inline-block"," "===e?(s.innerText="-",s.style.visibility="hidden"):s.innerText=e,t.append(s)}))}}customElements.define("feature-box",ot),customElements.define("my-name",at);const lt=document.querySelector(".showMore"),ht=document.querySelectorAll(".paragraphToHide");lt.addEventListener("click",(()=>{"Show more ..."===lt.textContent?lt.textContent="Show less":lt.textContent="Show more ...",ht.forEach((t=>{t.classList.toggle("hidden")}))}));
//# sourceMappingURL=index.26bb10bc.js.map
