import {LitElement, html, css} from 'lit';

class MyElement extends LitElement {
  static properties = {
    img: {},
    link: {},
    name: {},
    description: {},
  };
  static styles = css`
    .body-top {
      position: relative;
      width: 75vw;
    }
    .container {
      position: absolute;
      max-width: 75vw;
      display: flex;
      background: #f2f2f2;
      padding-inline: 1.7rem;
      border-radius: 0.75rem;
      left: 0;
      right: 0;
      margin: auto;

    }
    .image {
      width: 2.5em;
    }
    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: black;
      padding-left: 1rem;
    }
    .button {
      font-family: 'Montserrat', sans-serif;
      font-size: 2px;
      border: 2px solid black;
      background-color: white;
      color: black;
      padding: 1rem 1rem;
      font-size: 16px;
      cursor: pointer;
      align-self: center;
      border-radius: 15px;
      margin-left: auto;
    }
    @media screen and (max-width: 500px) {
      .container {
        padding-block: 1em;
      }
      h1 {
        display: none;
        visibility: hidden;
      }
    }
  `;
  constructor() {
    super();
    this.img = "/src/tiktok.svg"
    this.name = 'Insert';
  }

  render() {
    return html`
    <div class="body-top">
      <div class="container">
        <img class="image" src="${this.img}">
        <h1>${this.name}</h1>
        <button class="button" onclick="location.href='${this.link}'">Follow me!</button>
      </div>
    </div>
    `;
  }
}
customElements.define('link-social', MyElement);
