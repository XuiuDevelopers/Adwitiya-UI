class AdwImage extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode : "closed"})
        const image = document.createElement("img")
        const src = this.getAttribute("src")
        const width = this.getAttribute("width")
        const height = this.getAttribute("height")
        image.setAttribute("src",src)
        
        const style = {
            borderRadius : "8px",
            width : width || "300px",
            height : height || "200px",
            margin : "8px"
        }

        Object.assign(image.style,style)
        shadow.appendChild(image)
    }
}

customElements.define("adw-image",AdwImage)