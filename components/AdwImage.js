class AdwImage extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode : "closed"})
        const image = document.createElement("img")
        const src = this.getAttribute("src")
        image.setAttribute("src",src)
        image.style.borderRadius = "8px"
        shadow.appendChild(image)
    }
}

customElements.define("adw-image",AdwImage)