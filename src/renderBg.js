const renderBgImage = (classImage) => {
  const start = document.getElementsByTagName('body');
  const main = document.getElementById('mainInfo');

  const clean = () => {
    main.remove();
  };

  clean();
  const bgDiv = document.createElement('div');
  main.classList.add('main-page');
  bgDiv.classList.add(classImage, 'bg-opac');
  const divMainInfo = document.createElement('div');
  divMainInfo.classList.add('d-flex', 'flex-column');

  main.appendChild(bgDiv);
  main.appendChild(divMainInfo);
  start[0].appendChild(main);

  return {
    main,
    bgDiv,
    divMainInfo,
    start,
  };
};

export default (renderBgImage);
