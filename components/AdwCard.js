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
        const card = document.createElement("article");
        const slot = document.createElement('slot');

        const styles = {
            backgroundColor: "white",
            color: "black",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 1px 5px rgba(0, 0, 0, 0.2)"
        };

        Object.assign(card.style, styles);

        card.appendChild(slot);
        shadow.appendChild(card);
    }
}

customElements.define("adw-card", AdwCard);

