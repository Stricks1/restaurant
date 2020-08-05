import renderBgImage from './renderBg';
import selectTab from './selectTab';
import logoBig from './img/logoBig.png';

const renderHome = () => {
  const {
    main,
    bgDiv,
    divMainInfo,
    start,
  } = renderBgImage('bg-main');

  selectTab(1);

  const divContainer = document.createElement('div');
  divContainer.classList.add('d-flex', 'justify-content-between');
  const img = document.createElement('img');
  img.setAttribute('src', logoBig);
  img.classList.add('logo-big');

  const divMainTxt = document.createElement('h1');
  divMainTxt.classList.add('div-text');
  divMainTxt.innerHTML = 'Enjoy the taste of Brazilian cuisine by the sea.';
  divContainer.appendChild(divMainTxt);
  divContainer.appendChild(img);

  const divBottomInfo = document.createElement('div');
  divBottomInfo.classList.add('d-flex', 'flex-column', 'justify-content-between', 'flex-sm-row', 'px-4');
  const divBottomInfo1 = document.createElement('div');
  const divBottomInfo2 = document.createElement('div');
  divBottomInfo1.classList.add('box-info', 'm-4', 'p-3', 'py-4');
  divBottomInfo2.classList.add('box-info', 'm-4', 'p-3', 'py-4');
  const divInfo1Img = document.createElement('div');
  const divInfo2Img = document.createElement('div');
  const clockImg = document.createElement('i');
  divInfo1Img.classList.add('d-flex', 'flex-column', 'justify-content-between');
  clockImg.classList.add('fa', 'fa-clock-o', 'align-self-center', 'box-image');
  clockImg.setAttribute('aria-hidden', 'true');
  divInfo1Img.appendChild(clockImg);
  const BoxTitle1 = document.createElement('h3');
  BoxTitle1.classList.add('text-center', 'align-self-center', 'my-4', 'font-weight-bold', 'title-box');
  BoxTitle1.innerHTML = 'Working Hours';
  divInfo1Img.appendChild(BoxTitle1);
  const BoxSpan1 = document.createElement('span');
  BoxSpan1.classList.add('font-weight-bold', 'align-self-center');
  BoxSpan1.innerHTML = '10AM-3PM / 6PM-11PM';
  divInfo1Img.appendChild(BoxSpan1);

  divInfo2Img.classList.add('d-flex', 'flex-column', 'justify-content-between');

  const phoneImg = document.createElement('i');
  phoneImg.classList.add('fas', 'fa-phone', 'align-self-center', 'box-image');
  divInfo2Img.appendChild(phoneImg);
  const BoxTitle2 = document.createElement('h3');
  BoxTitle2.classList.add('text-center', 'align-self-center', 'my-4', 'font-weight-bold', 'title-box');
  BoxTitle2.innerHTML = 'Contact Phone';
  divInfo2Img.appendChild(BoxTitle2);
  const BoxSpan2 = document.createElement('span');
  BoxSpan2.classList.add('font-weight-bold', 'align-self-center');
  BoxSpan2.innerHTML = '(99) 9999-9999';
  divInfo2Img.appendChild(BoxSpan2);

  divBottomInfo1.appendChild(divInfo1Img);
  divBottomInfo2.appendChild(divInfo2Img);
  divBottomInfo.appendChild(divBottomInfo1);
  divBottomInfo.appendChild(divBottomInfo2);

  divMainInfo.classList.add('justify-content-between', 'vh-sm-80');
  main.appendChild(bgDiv);
  divMainInfo.appendChild(divContainer);
  divMainInfo.appendChild(divBottomInfo);
  main.appendChild(divMainInfo);
  start[0].appendChild(main);
};

export default (renderHome);
