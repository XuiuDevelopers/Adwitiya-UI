/* 
    PROJECT : ADWITIYA UI
    AUTHOR  : MEGH BADONIYA
    GITHUB  : XUIU DEVELOPERS
    DATE    : 29/03/2025
*/
class AdwButton extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({mode : "closed"})
        const button = document.createElement("button")
        const type = this.getAttribute("type")
        const text = this.getAttribute("text")
        const width = this.getAttribute("width")
        const onclick = this.getAttribute("onclick")

        button.textContent = text || "Button"

        const buttonStyles = {
            regular : {
                backgroundColor : "#e6e6e7",
                color : "black",
                border : "0",
                borderRadius : "8px",
                minWidth : width || "150px",
                padding : "8px",
                fontFamily : "Inter",
                fontSize : "0.9rem",
                fontWeight : 700,
            },
            flat : {
                backgroundColor : "white",
                color : "black",
                border : "0",
                borderRadius : "8px",
                minWidth : width || "150px",
                padding : "8px",
                fontFamily : "Inter",
                fontSize : "0.9rem",
                fontWeight : 700,
            },
            suggested : {
                backgroundColor : "#3584e4",
                color : "white",
                border : "0",
                borderRadius : "8px",
                minWidth : width || "150px",
                padding : "8px",
                fontFamily : "Inter",
                fontSize : "0.9rem",
                fontWeight : 700,
            },
            destructive : {
                backgroundColor : "#f2d5d5",
                color : "#c30101",
                border : "0",
                borderRadius : "8px",
                minWidth : width || "150px",
                padding : "8px",
                fontFamily : "Inter",
                fontSize : "0.9rem",
                fontWeight : 700,
            },
            circular : {
                backgroundColor : "#e6e6e7",
                color : "black",
                border : "0",
                borderRadius : "100px",
                height : "40px",
                width : "40px",
                fontFamily : "Inter",
                fontSize : "0.9rem",
                fontWeight : 700,
            },
            pill : {
                backgroundColor : "#e6e6e7",
                color : "black",
                border : "0",
                borderRadius : "100px",
                minWidth : width || "150px",
                padding : "14px",
                fontFamily : "Inter",
                fontSize : "0.9rem",
                fontWeight : 700,
            }
        }

        const selectedStyle = buttonStyles[type] || buttonStyles.regular
        
        Object.assign(button.style,selectedStyle)

        button.addEventListener(
            "click" , () => {
                Function(onclick)
            }
        )
        
        shadow.appendChild(button)
    }
}

customElements.define("adw-button",AdwButton)