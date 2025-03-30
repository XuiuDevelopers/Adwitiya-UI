class AdwText extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode : "closed"})
        const text = document.createElement("p")
        const type = this.getAttribute("type") || "default"
        const fontfamily = this.getAttribute("fontfamily")
        const fontsize = this.getAttribute("fontsize")
        const fontWeight = this.getAttribute("fontweight")
        const fontstyle = this.getAttribute("fontstyle")
        const style = {
            default : {
                margin : 0,
                fontFamily : fontfamily || "Inter",
                fontSize : fontsize || "0.9rem",
                fontWeight : fontWeight || "500",
                fontStyle : fontstyle || "normal"
            },
            title : {
                margin : 0,
                fontFamily : fontfamily || "Inter",
                fontSize : fontsize || "1.2rem",
                fontWeight : fontWeight || "500",
                fontStyle : fontstyle || "normal"
            }
        }

        text.textContent = this.textContent || "Sample Text"

        const selectedStyle = style[type]

        Object.assign(text.style,selectedStyle)

        shadow.appendChild(text)
    }
}

customElements.define("adw-text",AdwText)