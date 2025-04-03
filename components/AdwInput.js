class AdwInput extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const input = document.createElement('input');
        const type = this.getAttribute("type") || "text";
        const placeholder = this.getAttribute("placeholder") || "Enter";

        input.setAttribute("type", type);
        input.setAttribute("placeholder", placeholder);

        const style = {
            backgroundColor: "#e6e6e7",
            border: "2px solid #e6e6e7",
            borderRadius: "8px",
            padding: "8px",
            margin: "8px",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "0.9rem",
            outline: "none"
        };
        Object.assign(input.style, style);

        input.addEventListener("focusin", () => {
            input.style.border = "2px solid #3584e4";
        });

        input.addEventListener("focusout", () => {
            input.style.border = "2px solid #e6e6e7";
        });

        shadow.appendChild(input);
    }
}

customElements.define("adw-input", AdwInput);
