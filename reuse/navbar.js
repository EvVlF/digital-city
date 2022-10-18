class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = '<nav class="navbar navbar-dark sticky-top navbar-expand-lg text-bg-primary" aria-label="Главное меню">\n' +
      '      <div class="container-fluid">\n' +
      '        <ul class="navbar-nav">\n' +
      '          <li class="nav-item">\n' +
      '            <a class="nav-link active" aria-current="page" href="#" aria-label="Главная страница">Главная страница</a>\n' +
      '          </li>\n' +
      '          <li class="nav-item dropdown">\n' +
      '            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-label="Сервисы">\n' +
      '              Сервисы\n' +
      '            </a>\n' +
      '            <ul class="dropdown-menu pe-5">\n' +
      '              <li><a class="dropdown-item" aria-valuetext="" aria-label="Телемедицина" href="#">\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stethoscope me-1" width="30"\n' +
      '                     height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"\n' +
      '                     stroke-linecap="round"\n' +
      '                     stroke-linejoin="round">\n' +
      '                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n' +
      '                  <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1"/>\n' +
      '                  <path d="M8 15a6 6 0 1 0 12 0v-3"/>\n' +
      '                  <path d="M11 3v2"/>\n' +
      '                  <path d="M6 3v2"/>\n' +
      '                  <circle cx="20" cy="10" r="2"/>\n' +
      '                </svg>\n' +
      '                Телемедицина</a></li>\n' +
      '              <li><a class="dropdown-item" aria-label="Загруженность дорог" href="#">\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-traffic-cone me-1"\n' +
      '                     width="30"\n' +
      '                     height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"\n' +
      '                     stroke-linecap="round"\n' +
      '                     stroke-linejoin="round">\n' +
      '                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n' +
      '                  <line x1="4" y1="20" x2="20" y2="20"/>\n' +
      '                  <line x1="9.4" y1="10" x2="14.6" y2="10"/>\n' +
      '                  <line x1="7.8" y1="15" x2="16.2" y2="15"/>\n' +
      '                  <path d="M6 20l5 -15h2l5 15"/>\n' +
      '                </svg>\n' +
      '                Загруженность дорог</a></li>\n' +
      '              <li><a class="dropdown-item" aria-label="Найти парковочное место" href="parking.html">\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-parking me-1" width="30"\n' +
      '                     height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"\n' +
      '                     stroke-linecap="round" stroke-linejoin="round">\n' +
      '                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n' +
      '                  <rect x="4" y="4" width="16" height="16" rx="2"/>\n' +
      '                  <path d="M9 16v-8h4a2 2 0 0 1 0 4h-4"/>\n' +
      '                </svg>\n' +
      '                Найти парковочное место</a></li>\n' +
      '              <li><a class="dropdown-item" aria-label="Карта общественного Wi-Fi" href="#">\n' +
      '                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wifi me-1" width="30"\n' +
      '                     height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"\n' +
      '                     stroke-linecap="round" stroke-linejoin="round">\n' +
      '                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n' +
      '                  <line x1="12" y1="18" x2="12.01" y2="18"/>\n' +
      '                  <path d="M9.172 15.172a4 4 0 0 1 5.656 0"/>\n' +
      '                  <path d="M6.343 12.343a8 8 0 0 1 11.314 0"/>\n' +
      '                  <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"/>\n' +
      '                </svg>\n' +
      '                Карта общественного Wi-Fi</a>\n' +
      '              </li>\n' +
      '            </ul>\n' +
      '          </li>\n' +
      '        </ul>\n' +
      '        <form class="d-flex" role="search">\n' +
      '          <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">\n' +
      '          <button class="btn btn-light" type="submit" aria-label="Найти">Найти</button>\n' +
      '        </form>\n' +
      '      </div>\n' +
      '    </nav>'
  }
}

customElements.define('navbar-ughdash-component', Navbar);
