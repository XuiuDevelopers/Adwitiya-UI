class AdwButton extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode : "closed"})
        const button = document.createElement("button")
        const type = this.getAttribute("type")
        const buttonStyles = {
            default : {

            },
            primary : {

            },
            suggestion : {
                
            },
            error : {

            }
        }
    }
}

customElements.define("adw-button",AdwButton)