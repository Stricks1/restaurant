import renderBgImage from './renderBg';
import selectTab from './selectTab';

const renderItems = () => {
  const {
    main,
    bgDiv,
    divMainInfo,
    start,
  } = renderBgImage('bg-items');

  selectTab(2);
};

export default (renderItems);
