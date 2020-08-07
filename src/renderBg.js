const renderBgImage = (classImage) => {
  const start = document.getElementsByTagName('body');
  const main = document.getElementById('mainInfo');

  const clean = () => {
    main.remove();
  };

  clean();

  main.classList.add('main-page');
  const bgDiv = document.createElement('div');
  if (classImage !== 'bg-items') {
    bgDiv.classList.add(classImage, 'bg-opac', 'min-w-370px');
    main.appendChild(bgDiv);
  }
  const divMainInfo = document.createElement('div');
  if (classImage === 'bg-items') {
    divMainInfo.classList.add('d-flex', 'flex-column', classImage, 'min-w-370px');
  } else {
    divMainInfo.classList.add('d-flex', 'flex-column', 'min-w-370px');
  }
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
