import logoImg from './logo.png';

const renderHome = () => {
  console.log('erer');
  const start = document.getElementsByTagName('body');

  console.log(start);
  const navContainer = document.createElement('div');
  navContainer.classList.add('nav-container');
  const navTop = document.createElement('nav');
  navTop.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'pr-2', 'navTop', 'flex-column', 'flex-sm-row');
  const div1 = document.createElement('div');
  div1.classList.add('d-flex')
  const img = document.createElement('img');
  img.setAttribute('src', logoImg);
  img.classList.add('h-100', 'p-2', 'ml-4', 'navLinks');
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
  a3.innerHTML = 'Contacts';
  a3.classList.add('navLinks');
  li3.classList.add('p-2');
  li3.appendChild(a3);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  div1.appendChild(ul);
  navTop.appendChild(img);
  navTop.appendChild(div1);
  navContainer.appendChild(navTop)
  start[0].appendChild(navContainer);
  const main = document.createElement('main');
  const bgDiv = document.createElement('div');
  main.classList.add('main-page');
  bgDiv.classList.add('bg-main');
  const divMainInfo = document.createElement('div');
  divMainInfo.classList.add('d-flex', 'flex-column', 'justify-content-between', 'vh-sm-80');
  const divMainTxt = document.createElement('h1');
  divMainTxt.classList.add('div-text');
  divMainTxt.innerHTML = 'Enjoy the taste of Brazilian cuisine by the sea.'
  const divBottomInfo = document.createElement('div');
  divBottomInfo.classList.add('d-flex', 'flex-column', 'justify-content-between', 'flex-sm-row', 'px-4');
  const divBottomInfo1 = document.createElement('div');
  const divBottomInfo2 = document.createElement('div');
  divBottomInfo1.classList.add('box-info', 'm-4', 'p-3');
  divBottomInfo2.classList.add('box-info', 'm-4', 'p-3');
  const divInfo1Img = document.createElement('div');
  const divInfo2Img = document.createElement('div');
  divBottomInfo1.innerHTML = '<i class="fa fa-clock-o" aria-hidden="true"></i> <span>Working Hours 10AM-3PM 6PM-11PM</span>'
  divBottomInfo2.innerHTML = 'Phone (99) 9999-9999 Contact Us'
  
  divBottomInfo.appendChild(divBottomInfo1);
  divBottomInfo.appendChild(divBottomInfo2);

  main.appendChild(bgDiv);
  divMainInfo.appendChild(divMainTxt);
  divMainInfo.appendChild(divBottomInfo);
  main.appendChild(divMainInfo);
  start[0].appendChild(main);

  const clean = () => {
    main.remove();
  };
  
  a2.addEventListener('click', () => {
    clean();
    contactlink();
  });
  
  a3.addEventListener('click', () => {
    clean();
    itemslaink();
  });
};


export default (renderHome);