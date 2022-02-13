const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `<footer class="feather mb-8 mt-16 flex flex-justify-center flex-items-center px-8 text-center">
  <div>
    <p class="text-lg mt-2 text-gray-600"> All images used are solely for non-profit educational purpose.</p>
    <p class="text-lg mt-2 text-gray-600"> All artwork credits and copyrights belong to
    <a target="_blank" href="https://versum.xyz/user/tz1PHbjaz4X1JfacZNWpg3vLKVYFccWusySL" class="text-primary">UnlimitedDreamCo</a>
    </p>
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
