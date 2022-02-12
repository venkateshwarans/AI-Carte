const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `<footer class="feather mb-8 mt-4 flex flex-justify-center flex-items-center px-8 text-center">
  <div>
    <p class="text-lg mt-2 text-gray-600"> All images used are solely for non-profit educational purpose.</p>
  </div>
</footer>`;
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = footerTemplate.innerHTML;
  }
}
customElements.define('footer-component', Footer);
