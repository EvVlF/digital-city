class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = '<div class="container">\n' +
      '    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top fixed-bottom">\n' +
      '      <ul class="nav col-md-4 justify-content-end">\n' +
      '        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted" aria-label="Главная страница">Главная\n' +
      '          страница</a></li>\n' +
      '        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted" aria-label="">Сервисы</a></li>\n' +
      '        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted" aria-label="Частые вопросы">Частые\n' +
      '          вопросы</a>\n' +
      '        </li>\n' +
      '        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">О нас</a></li>\n' +
      '      </ul>\n' +
      '      <p class="col-md-4 mb-0 text-muted">© 2022 Digital Izhevsk</p>\n' +
      '    </footer>\n' +
      '  </div>'
  }
}

customElements.define('footer-ughdash-component', Footer);
