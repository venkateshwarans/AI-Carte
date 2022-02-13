const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<header class="feather mt-8 flex px-8">
    <div class="flex flex-items-center flex-grow-1">
      <div class="flex-grow-1">
        <a href="/" class="logo text-3xl font-black flex flex-items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#45c04e" viewBox="0 0 101 101" width="60" height="60" xml:space="preserve" x="100" y="100" fill="#000" stroke-linejoin="round" stroke-miterlimit="2">
          <path fill="#000"
            d="M34.675,92.229l0,-7.639c0,-1.648 -1.336,-2.984 -2.984,-2.984l-4.655,-0c0,-0 0,-1.671 0,-1.671c0,-0 9.311,-0 9.311,-0c-0,4.446 -0,12.294 -0,12.294c-0,1.648 1.336,2.984 2.984,2.984l7.639,0c1.648,0 2.984,-1.336 2.984,-2.984l0,-22.918c0,-1.648 -1.336,-2.984 -2.984,-2.984l-12.295,0c0,0 0,-9.31 0,-9.31c0,-0 1.672,-0 1.672,-0c-0,-0 -0,4.655 -0,4.655c-0,1.648 1.336,2.984 2.984,2.984l7.639,0c1.648,0 2.984,-1.336 2.984,-2.984l0,-22.918c0,-1.648 -1.336,-2.984 -2.984,-2.984l-7.639,0c-1.648,0 -2.984,1.336 -2.984,2.984l-0,4.656c-4.447,-0 -12.295,-0 -12.295,-0c-1.648,-0 -2.984,1.336 -2.984,2.984l0,19.933c0,0 -1.671,0 -1.671,0c-0,0 -0,-24.444 -0,-24.444c-0,-0 12.329,-0.145 12.329,-0.145c1.635,-0.019 2.949,-1.349 2.949,-2.984l0,-12.294c0,-0 1.672,-0 1.672,-0c-0,-0 -0,4.655 -0,4.655c-0,1.648 1.336,2.984 2.984,2.984l7.639,0c1.648,0 2.984,-1.336 2.984,-2.984l0,-22.918c0,-1.648 -1.336,-2.984 -2.984,-2.984l-7.639,0c-1.648,0 -2.984,1.336 -2.984,2.984l-0,4.655c-0,0 -12.295,0 -12.295,0c-1.648,0 -2.984,1.337 -2.984,2.985l0,12.294c0,0 -4.655,0 -4.655,0c-1.647,0 -2.984,1.337 -2.984,2.984c-0,1.647 1.337,2.984 2.984,2.984l7.639,0c1.648,0 2.984,-1.336 2.984,-2.984l0,-12.294c4.447,-0 12.295,-0 12.295,-0c1.648,-0 2.984,-1.336 2.984,-2.984l-0,-4.656c-0,0 1.671,0 1.671,0c-0,0 -0,16.95 -0,16.95c-0,0 -1.671,0 -1.671,0c-0,0 -0,-4.655 -0,-4.655c-0,-1.648 -1.336,-2.984 -2.984,-2.984l-7.64,-0c-1.648,-0 -2.984,1.336 -2.984,2.984l0,12.329c0,0 -12.329,0.144 -12.329,0.144c-1.634,0.02 -2.949,1.35 -2.949,2.984l-0,30.378c-0,1.648 1.336,2.984 2.984,2.984l7.639,0c1.648,0 2.984,-1.336 2.984,-2.984l0,-19.933c0,-0 12.295,-0 12.295,-0c1.648,-0 2.984,-1.336 2.984,-2.984l-0,-4.656c-0,0 1.671,0 1.671,0c-0,0 -0,16.95 -0,16.95c-0,0 -1.671,0 -1.671,0c-0,0 -0,-4.655 -0,-4.655c-0,-1.648 -1.336,-2.984 -2.984,-2.984l-7.64,-0c-1.648,-0 -2.984,1.336 -2.984,2.984l0,15.278c0,1.648 1.336,2.984 2.984,2.984l12.295,0c-0,0 -0,16.95 -0,16.95c-0,0 -1.671,0 -1.671,0c-0,0 -0,-12.294 -0,-12.294c-0,-1.648 -1.336,-2.984 -2.984,-2.984l-15.279,-0c-1.648,-0 -2.984,1.336 -2.984,2.984l0,7.639c0,1.648 1.336,2.984 2.984,2.984l4.655,-0c0,-0 0,4.655 0,4.655c0,1.647 1.337,2.984 2.984,2.984c1.647,0 2.984,-1.337 2.984,-2.984Z">
          </path>
          <path
            d="M72.872,92.229l-0,-4.655c-0,-0 4.655,-0 4.655,-0c1.648,-0 2.984,-1.336 2.984,-2.984l0,-7.639c0,-1.648 -1.336,-2.984 -2.984,-2.984l-15.279,-0c-1.648,-0 -2.984,1.336 -2.984,2.984l0,12.294c0,0 -1.671,0 -1.671,0c0,-4.394 0,-12.556 0,-16.95c4.447,0 12.295,0 12.295,0c1.648,0 2.984,-1.336 2.984,-2.984l-0,-15.278c-0,-1.648 -1.336,-2.984 -2.984,-2.984l-7.64,-0c-1.648,-0 -2.984,1.336 -2.984,2.984l0,4.655c0,0 -1.671,0 -1.671,0c0,-4.394 0,-12.556 0,-16.95c0,0 1.671,0 1.671,0c0,0 0,4.656 0,4.656c0,1.648 1.336,2.984 2.984,2.984l12.295,-0c-0,-0 -0,19.933 -0,19.933c-0,1.648 1.336,2.984 2.984,2.984l7.639,0c1.648,0 2.984,-1.336 2.984,-2.984l0,-30.378c0,-1.634 -1.315,-2.964 -2.949,-2.984l-12.329,-0.144c-0,0 -0,-12.329 -0,-12.329c-0,-1.648 -1.336,-2.984 -2.984,-2.984l-7.64,-0c-1.648,-0 -2.984,1.336 -2.984,2.984l0,4.655c0,0 -1.671,0 -1.671,0c0,-4.394 0,-12.556 0,-16.95c0,0 1.671,0 1.671,0c0,0 0,4.656 0,4.656c0,1.648 1.336,2.984 2.984,2.984l12.295,-0c-0,-0 -0,12.294 -0,12.294c-0,1.648 1.336,2.984 2.984,2.984l7.639,0c1.647,0 2.984,-1.337 2.984,-2.984c0,-1.647 -1.337,-2.984 -2.984,-2.984l-4.655,0c0,0 0,-12.294 0,-12.294c0,-1.648 -1.336,-2.985 -2.984,-2.985l-12.294,0c-0,0 -0,-4.655 -0,-4.655c-0,-1.648 -1.336,-2.984 -2.985,-2.984l-7.639,0c-1.648,0 -2.984,1.336 -2.984,2.984l0,22.918c0,1.648 1.336,2.984 2.984,2.984l7.639,0c1.649,0 2.985,-1.336 2.985,-2.984l-0,-4.655c-0,-0 1.671,-0 1.671,-0c-0,-0 -0,12.294 -0,12.294c-0,1.635 1.314,2.965 2.949,2.984l12.329,0.145c0,-0 0,17.338 0,24.444c0,0 -1.671,0 -1.671,0c0,0 0,-19.933 0,-19.933c0,-1.648 -1.336,-2.984 -2.984,-2.984l-12.294,-0c-0,-0 -0,-4.656 -0,-4.656c-0,-1.648 -1.336,-2.984 -2.985,-2.984l-7.639,0c-1.648,0 -2.984,1.336 -2.984,2.984l0,22.918c0,1.648 1.336,2.984 2.984,2.984l7.639,0c1.649,0 2.985,-1.336 2.985,-2.984l-0,-4.655c-0,-0 1.671,-0 1.671,-0c-0,-0 -0,9.31 -0,9.31c-0,0 -12.295,0 -12.295,0c-1.648,0 -2.984,1.336 -2.984,2.984l0,22.918c0,1.648 1.336,2.984 2.984,2.984l7.639,0c1.649,0 2.985,-1.336 2.985,-2.984l-0,-12.294c-0,-0 9.31,-0 9.31,-0c-0,-0 -0,1.671 -0,1.671c-0,-0 -4.655,-0 -4.655,-0c-1.648,-0 -2.984,1.336 -2.984,2.984l-0,7.639c-0,1.647 1.337,2.984 2.984,2.984c1.647,0 2.984,-1.337 2.984,-2.984Z">
          </path>
          </svg>
          <span>ÀI</span> kärt</a>
      </div>
      <nav class="flex-grow-1">
        <ul class="inline-flex">
          <li class="text-xl font-bold"><a href="/pages/explore.html">Explore</a></li>
          <li class="text-xl font-bold"><a href="">Collections</a></li>
          <li class="text-xl font-bold"><a href="">Creators</a></li>
        </ul>
      </nav>
      <div class="ml-auto flex-grow-1 flex flex-gap-2">
        <div class="input-group flex flex-column flex-gap-1">
          <div class="input-group-prepend flex flex-items-center rounded-tr-none rounded-br-none">
            <span class="px-6 py-4 rounded">
              <i class="fas fa-search"></i>
            </span>
            <input type="text" class="form-input rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full py-6 px-8 basis-full" placeholder="Search">
          </div>
        </div>
        <div class="flex flex-items-center">
          <a href="#" class="meta-nav-link text-primary font-bold text-xl">
            <i class="fas fa-shopping-cart"></i>
            Cart
          </a>
        </div>
        <div class="flex flex-items-center">
          <a href="/pages/signin.html" class="meta-nav-link text-primary font-bold text-xl">
          <i class="fas fa-lock"></i>
            Login
          </a>
        </div>
      </div>
    </div>
</header>`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = headerTemplate.innerHTML;
  }
}

customElements.define('header-component', Header);
