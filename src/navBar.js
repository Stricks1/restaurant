import logoImg from './img/logo.png';
import renderHome from './home';
import renderContact from './contact';
import renderItems from './items';

const navBar = () => {
  const start = document.getElementsByTagName('body');
  const navContainer = document.createElement('div');
  navContainer.classList.add('nav-container');
  const navTop = document.createElement('nav');
  navTop.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'pr-sm-2', 'navTop', 'flex-column', 'flex-sm-row');
  const div0 = document.createElement('div');

  const div1 = document.createElement('div');
  div1.classList.add('d-flex');
  const img = document.createElement('img');
  img.setAttribute('src', logoImg);
  img.classList.add('h-100', 'p-2', 'ml-4', 'navLinks');

  const nameLogo = document.createElement('div');
  nameLogo.innerHTML = 'Canto do Macuco';
  nameLogo.classList.add('name-logo');
  div0.classList.add('h-100');
  div0.appendChild(nameLogo);
  div0.appendChild(img);

  const ul = document.createElement('ul');
  ul.classList.add('d-flex', 'list', 'flex-column', 'flex-sm-row');
  const li1 = document.createElement('li');
  const a1 = document.createElement('a');
  a1.classList.add('navLinks', 'selected');
  a1.innerHTML = 'Home';
  li1.classList.add('p-2');
  li1.appendChild(a1);
  const li2 = document.createElement('li');
  const a2 = document.createElement('a');
  a2.innerHTML = 'Menu';
  a2.classList.add('navLinks');
  li2.classList.add('p-2');
  li2.appendChild(a2);
  const li3 = document.createElement('li');
  const a3 = document.createElement('a');
  a3.innerHTML = 'Contact Us';
  a3.classList.add('navLinks');
  li3.classList.add('p-2');
  li3.appendChild(a3);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  div1.appendChild(ul);
  navTop.appendChild(div0);
  navTop.appendChild(div1);
  navContainer.appendChild(navTop);
  start[0].appendChild(navContainer);

  const main = document.createElement('main');
  main.setAttribute('id', 'mainInfo');
  main.classList.add('main-page');
  start[0].appendChild(main);

  const clean = () => {
    main.innerHTML = '';
  };

  img.addEventListener('click', () => {
    clean();
    renderHome();
  });

  a1.addEventListener('click', () => {
    clean();
    renderHome();
  });

  a2.addEventListener('click', () => {
    clean();
    renderItems();
  });

  a3.addEventListener('click', () => {
    clean();
    renderContact();
  });
};

export default (navBar);
