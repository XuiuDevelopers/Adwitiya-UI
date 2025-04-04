/* 
    PROJECT : ADWITIYA UI
    FILE    : AdwButton.js
    AUTHOR  : MEGH BADONIYA
    GITHUB  : XUIU DEVELOPERS
    DATE    : 29/03/2025
*/

class AdwButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "closed" });
    const button = document.createElement("button");

    const type = this.getAttribute("type");
    const width = this.getAttribute("width");
    const onclick = this.getAttribute("onclick");

    const buttonStyles = {
      regular: {
        backgroundColor: "#e6e6e7",
        color: "black",
        border: "0",
        borderRadius: "8px",
        minWidth: width || "150px",
        padding: "8px",
        margin: "4px",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: "0.9rem",
        hover: {
          backgroundColor: "#d0d0d1",
        },
      },
      flat: {
        backgroundColor: "white",
        color: "black",
        border: "0",
        borderRadius: "8px",
        minWidth: width || "150px",
        padding: "8px",
        margin: "4px",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: "0.9rem",
        hover: {
          backgroundColor: "#f0f0f0",
        },
      },
      suggested: {
        backgroundColor: "#3584e4",
        color: "white",
        border: "0",
        borderRadius: "8px",
        minWidth: width || "150px",
        padding: "8px",
        margin: "4px",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: "0.9rem",
        hover: {
          backgroundColor: "#2a6bbf",
        },
      },
      destructive: {
        backgroundColor: "#f2d5d5",
        color: "#c30101",
        border: "0",
        borderRadius: "8px",
        minWidth: width || "150px",
        padding: "8px",
        margin: "4px",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: "0.9rem",
        hover: {
          backgroundColor: "#e0b2b2",
        },
      },
      circular: {
        backgroundColor: "#e6e6e7",
        color: "black",
        border: "0",
        borderRadius: "100px",
        height: "40px",
        margin: "4px",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: "0.9rem",
        hover: {
          backgroundColor: "#d0d0d1",
        },
      },
      pill: {
        backgroundColor: "#e6e6e7",
        color: "black",
        border: "0",
        borderRadius: "100px",
        minWidth: width || "150px",
        padding: "14px",
        margin: "4px",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: "0.9rem",
        hover: {
          backgroundColor: "#d0d0d1",
        },
      },
    };

    const selectedStyle = buttonStyles[type] || buttonStyles.regular;

    Object.assign(button.style, selectedStyle);

    button.innerHTML = this.innerHTML;

    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = selectedStyle.hover.backgroundColor;
    });

    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = selectedStyle.backgroundColor;
    });

    button.addEventListener("click", () => {
      Function(onclick);
    });

    shadow.appendChild(button);
  }
}

customElements.define("adw-button", AdwButton);
