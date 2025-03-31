/* 
    PROJECT : ADWITIYA UI
    FILE    : AdwCard.js
    AUTHOR  : MEGH BADONIYA
    GITHUB  : XUIU DEVELOPERS
    DATE    : 30/03/2025
*/

class AdwCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        const card = document.createElement("div");
        const slot = document.createElement('slot');
        const height = this.getAttribute("height");
        const width = this.getAttribute("width");
        const minheight = this.getAttribute("minheight");
        const minwidth = this.getAttribute("minwidth");
        const maxheight = this.getAttribute("maxheight");
        const maxwidth = this.getAttribute("maxwidth");

        const styles = {
            backgroundColor: "white",
            color: "black",
            borderRadius: "8px",
            margin : "8px",
            boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
            maxHeight: maxheight,
            maxWidth: maxwidth,
            width: width,
            height: height,
            minWidth: minwidth || "16em",
            minHeight: minheight || "8em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding : "16px"
        };

        Object.assign(card.style, styles);

        card.appendChild(slot);
        shadow.appendChild(card);
    }
}

customElements.define("adw-card", AdwCard);
