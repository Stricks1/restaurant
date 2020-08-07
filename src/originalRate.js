const originalRate = (item) => {
  const itemContainers = document.getElementsByClassName('star-container');
  const changeStars = itemContainers[item].childNodes;
  for (let i = 0; i < changeStars.length; i += 1) {
    changeStars[i].classList.remove('fas', 'far');
    if (changeStars[i].classList.contains('orig-fas')) {
      changeStars[i].classList.add('fas');
    }
    if (changeStars[i].classList.contains('orig-far')) {
      changeStars[i].classList.add('far');
    }
  }
};

export default (originalRate);
