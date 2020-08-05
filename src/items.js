import renderBgImage from './renderBg';
import selectTab from './selectTab';
import churrasco from './img/churrasco.jpg';
import moqueca from './img/moqueca.jpg';
import feijoada from './img/feijoada.png';
import caipirinha from './img/caipirinha.jpg';
import vatapa from './img/vatapa.jpg';
import acai from './img/acai.jpg';
import rate from './rate';
import originalRate from './originalRate';

const renderItems = () => {
  const {
    main,
    divMainInfo,
    start,
  } = renderBgImage('bg-items');

  selectTab(2);

  const starFull = document.createElement('i');
  starFull.classList.add('fas', 'fa-star', 'av-star', 'orig-fas');
  const starEmpty = document.createElement('i');
  starEmpty.classList.add('far', 'fa-star', 'av-star', 'orig-far');

  const divContainer = document.createElement('div');
  divContainer.classList.add('d-flex', 'flex-column');

  const divTitleTxt = document.createElement('h1');
  divTitleTxt.classList.add('div-title', 'align-self-center', 'm-4', 'px-4');
  divTitleTxt.innerHTML = 'Explore our Menu';
  divContainer.appendChild(divTitleTxt);

  const divItems = document.createElement('div');
  divItems.classList.add('d-flex', 'flex-column', 'flex-sm-row', 'px-4', 'justify-content-center', 'flex-wrap');
  const divItemInfo1 = document.createElement('div');
  divItemInfo1.classList.add('box-info', 'm-4', 'p-3', 'py-4', 'd-flex');
  const divInfo1Img = document.createElement('div');
  const imgMenu1 = document.createElement('img');
  divInfo1Img.classList.add('d-flex', 'flex-column', 'justify-content-between');
  imgMenu1.classList.add('item-menu-img');
  imgMenu1.setAttribute('src', churrasco);
  divInfo1Img.appendChild(imgMenu1);
  const BoxTitle1 = document.createElement('h3');
  BoxTitle1.classList.add('text-center', 'align-self-center', 'my-4', 'font-weight-bold', 'title-box');
  BoxTitle1.innerHTML = 'Barbecue';
  divInfo1Img.appendChild(BoxTitle1);
  const divStarPriceContainer = document.createElement('div');
  divStarPriceContainer.classList.add('d-flex', 'justify-content-between');

  const divStarContainer = document.createElement('div');
  divStarContainer.classList.add('d-flex', 'star-container');

  const star11 = starFull.cloneNode();
  const star12 = starFull.cloneNode();
  const star13 = starFull.cloneNode();
  const star14 = starFull.cloneNode();
  const star15 = starEmpty.cloneNode();

  divStarContainer.appendChild(star11);
  divStarContainer.appendChild(star12);
  divStarContainer.appendChild(star13);
  divStarContainer.appendChild(star14);
  divStarContainer.appendChild(star15);
  divStarPriceContainer.appendChild(divStarContainer);

  const BoxSpan1 = document.createElement('span');
  BoxSpan1.classList.add('font-weight-bold', 'align-self-center');
  BoxSpan1.innerHTML = '$39';
  divStarPriceContainer.appendChild(BoxSpan1);
  divInfo1Img.appendChild(divStarPriceContainer);

  const divItemInfo2 = document.createElement('div');
  divItemInfo2.classList.add('box-info', 'm-4', 'p-3', 'py-4', 'd-flex');
  const divInfo2Img = document.createElement('div');
  const imgMenu2 = document.createElement('img');
  divInfo2Img.classList.add('d-flex', 'flex-column', 'justify-content-between');
  imgMenu2.classList.add('item-menu-img');
  imgMenu2.setAttribute('src', moqueca);
  divInfo2Img.appendChild(imgMenu2);
  const BoxTitle2 = document.createElement('h3');
  BoxTitle2.classList.add('text-center', 'align-self-center', 'my-4', 'font-weight-bold', 'title-box');
  BoxTitle2.innerHTML = 'Fish Stew';
  divInfo2Img.appendChild(BoxTitle2);
  const divStarPriceContainer2 = document.createElement('div');
  divStarPriceContainer2.classList.add('d-flex', 'justify-content-between');

  const divStarContainer2 = document.createElement('div');
  divStarContainer2.classList.add('d-flex', 'star-container');

  const star21 = starFull.cloneNode();
  const star22 = starFull.cloneNode();
  const star23 = starFull.cloneNode();
  const star24 = starFull.cloneNode();
  const star25 = starFull.cloneNode();

  divStarContainer2.appendChild(star21);
  divStarContainer2.appendChild(star22);
  divStarContainer2.appendChild(star23);
  divStarContainer2.appendChild(star24);
  divStarContainer2.appendChild(star25);
  divStarPriceContainer2.appendChild(divStarContainer2);

  const BoxSpan2 = document.createElement('span');
  BoxSpan2.classList.add('font-weight-bold', 'align-self-center');
  BoxSpan2.innerHTML = '$45';
  divStarPriceContainer2.appendChild(BoxSpan2);
  divInfo2Img.appendChild(divStarPriceContainer2);

  const divItemInfo3 = document.createElement('div');
  divItemInfo3.classList.add('box-info', 'm-4', 'p-3', 'py-4', 'd-flex');
  const divInfo3Img = document.createElement('div');
  const imgMenu3 = document.createElement('img');
  divInfo3Img.classList.add('d-flex', 'flex-column', 'justify-content-between');
  imgMenu3.classList.add('item-menu-img');
  imgMenu3.setAttribute('src', feijoada);
  divInfo3Img.appendChild(imgMenu3);
  const BoxTitle3 = document.createElement('h3');
  BoxTitle3.classList.add('text-center', 'align-self-center', 'my-4', 'font-weight-bold', 'title-box');
  BoxTitle3.innerHTML = 'Feijoada';
  divInfo3Img.appendChild(BoxTitle3);
  const divStarPriceContainer3 = document.createElement('div');
  divStarPriceContainer3.classList.add('d-flex', 'justify-content-between');

  const divStarContainer3 = document.createElement('div');
  divStarContainer3.classList.add('d-flex', 'star-container');

  const star31 = starFull.cloneNode();
  const star32 = starFull.cloneNode();
  const star33 = starFull.cloneNode();
  const star34 = starEmpty.cloneNode();
  const star35 = starEmpty.cloneNode();

  divStarContainer3.appendChild(star31);
  divStarContainer3.appendChild(star32);
  divStarContainer3.appendChild(star33);
  divStarContainer3.appendChild(star34);
  divStarContainer3.appendChild(star35);
  divStarPriceContainer3.appendChild(divStarContainer3);

  const BoxSpan3 = document.createElement('span');
  BoxSpan3.classList.add('font-weight-bold', 'align-self-center');
  BoxSpan3.innerHTML = '$27';
  divStarPriceContainer3.appendChild(BoxSpan3);
  divInfo3Img.appendChild(divStarPriceContainer3);

  const divItemInfo4 = document.createElement('div');
  divItemInfo4.classList.add('box-info', 'm-4', 'p-3', 'py-4', 'd-flex');
  const divInfo4Img = document.createElement('div');
  const imgMenu4 = document.createElement('img');
  divInfo4Img.classList.add('d-flex', 'flex-column', 'justify-content-between');
  imgMenu4.classList.add('item-menu-img');
  imgMenu4.setAttribute('src', caipirinha);
  divInfo4Img.appendChild(imgMenu4);
  const BoxTitle4 = document.createElement('h3');
  BoxTitle4.classList.add('text-center', 'align-self-center', 'my-4', 'font-weight-bold', 'title-box');
  BoxTitle4.innerHTML = 'Caipirinha';
  divInfo4Img.appendChild(BoxTitle4);
  const divStarPriceContainer4 = document.createElement('div');
  divStarPriceContainer4.classList.add('d-flex', 'justify-content-between');

  const divStarContainer4 = document.createElement('div');
  divStarContainer4.classList.add('d-flex', 'star-container');

  const star41 = starFull.cloneNode();
  const star42 = starFull.cloneNode();
  const star43 = starFull.cloneNode();
  const star44 = starFull.cloneNode();
  const star45 = starEmpty.cloneNode();

  divStarContainer4.appendChild(star41);
  divStarContainer4.appendChild(star42);
  divStarContainer4.appendChild(star43);
  divStarContainer4.appendChild(star44);
  divStarContainer4.appendChild(star45);
  divStarPriceContainer4.appendChild(divStarContainer4);

  const BoxSpan4 = document.createElement('span');
  BoxSpan4.classList.add('font-weight-bold', 'align-self-center');
  BoxSpan4.innerHTML = '$5';
  divStarPriceContainer4.appendChild(BoxSpan4);
  divInfo4Img.appendChild(divStarPriceContainer4);

  const divItemInfo5 = document.createElement('div');
  divItemInfo5.classList.add('box-info', 'm-4', 'p-3', 'py-4', 'd-flex');
  const divInfo5Img = document.createElement('div');
  const imgMenu5 = document.createElement('img');
  divInfo5Img.classList.add('d-flex', 'flex-column', 'justify-content-between');
  imgMenu5.classList.add('item-menu-img');
  imgMenu5.setAttribute('src', acai);
  divInfo5Img.appendChild(imgMenu5);
  const BoxTitle5 = document.createElement('h3');
  BoxTitle5.classList.add('text-center', 'align-self-center', 'my-4', 'font-weight-bold', 'title-box');
  BoxTitle5.innerHTML = 'Açaí';
  divInfo5Img.appendChild(BoxTitle5);
  const divStarPriceContainer5 = document.createElement('div');
  divStarPriceContainer5.classList.add('d-flex', 'justify-content-between');

  const divStarContainer5 = document.createElement('div');
  divStarContainer5.classList.add('d-flex', 'star-container');

  const star51 = starFull.cloneNode();
  const star52 = starFull.cloneNode();
  const star53 = starFull.cloneNode();
  const star54 = starFull.cloneNode();
  const star55 = starFull.cloneNode();

  divStarContainer5.appendChild(star51);
  divStarContainer5.appendChild(star52);
  divStarContainer5.appendChild(star53);
  divStarContainer5.appendChild(star54);
  divStarContainer5.appendChild(star55);
  divStarPriceContainer5.appendChild(divStarContainer5);

  const BoxSpan5 = document.createElement('span');
  BoxSpan5.classList.add('font-weight-bold', 'align-self-center');
  BoxSpan5.innerHTML = '$7';
  divStarPriceContainer5.appendChild(BoxSpan5);
  divInfo5Img.appendChild(divStarPriceContainer5);

  const divItemInfo6 = document.createElement('div');
  divItemInfo6.classList.add('box-info', 'm-4', 'p-3', 'py-4', 'd-flex');
  const divInfo6Img = document.createElement('div');
  const imgMenu6 = document.createElement('img');
  divInfo6Img.classList.add('d-flex', 'flex-column', 'justify-content-between');
  imgMenu6.classList.add('item-menu-img');
  imgMenu6.setAttribute('src', vatapa);
  divInfo6Img.appendChild(imgMenu6);
  const BoxTitle6 = document.createElement('h3');
  BoxTitle6.classList.add('text-center', 'align-self-center', 'my-4', 'font-weight-bold', 'title-box');
  BoxTitle6.innerHTML = 'Vatapá';
  divInfo6Img.appendChild(BoxTitle6);
  const divStarPriceContainer6 = document.createElement('div');
  divStarPriceContainer6.classList.add('d-flex', 'justify-content-between');

  const divStarContainer6 = document.createElement('div');
  divStarContainer6.classList.add('d-flex', 'star-container');

  const star61 = starFull.cloneNode();
  const star62 = starFull.cloneNode();
  const star63 = starFull.cloneNode();
  const star64 = starFull.cloneNode();
  const star65 = starFull.cloneNode();

  divStarContainer6.appendChild(star61);
  divStarContainer6.appendChild(star62);
  divStarContainer6.appendChild(star63);
  divStarContainer6.appendChild(star64);
  divStarContainer6.appendChild(star65);
  divStarPriceContainer6.appendChild(divStarContainer6);

  const BoxSpan6 = document.createElement('span');
  BoxSpan6.classList.add('font-weight-bold', 'align-self-center');
  BoxSpan6.innerHTML = '$27';
  divStarPriceContainer6.appendChild(BoxSpan6);
  divInfo6Img.appendChild(divStarPriceContainer6);

  divItemInfo1.appendChild(divInfo1Img);
  divItemInfo2.appendChild(divInfo2Img);
  divItemInfo3.appendChild(divInfo3Img);
  divItemInfo4.appendChild(divInfo4Img);
  divItemInfo5.appendChild(divInfo5Img);
  divItemInfo6.appendChild(divInfo6Img);

  divItems.appendChild(divItemInfo1);
  divItems.appendChild(divItemInfo2);
  divItems.appendChild(divItemInfo3);
  divItems.appendChild(divItemInfo4);
  divItems.appendChild(divItemInfo5);
  divItems.appendChild(divItemInfo6);

  divMainInfo.classList.add('justify-content-between', 'h-min-100');
  divContainer.appendChild(divItems);
  divMainInfo.appendChild(divContainer);
  main.appendChild(divMainInfo);
  start[0].appendChild(main);

  const starsRate = document.getElementsByClassName('av-star');
  for (let i = 0; i < starsRate.length; i += 1) {
    const itemNumber = Math.floor((i / 5));
    const starNumber = ((i % 5) + 1);
    starsRate[i].addEventListener('mouseover', () => {
      rate(itemNumber, starNumber);
    });
  }
  const ratingContainers = document.getElementsByClassName('star-container');
  for (let i = 0; i < ratingContainers.length; i += 1) {
    ratingContainers[i].addEventListener('mouseout', () => {
      originalRate(i);
    });
  }
};

export default (renderItems);
