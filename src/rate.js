const rate = (item, star) => {
  const itemContainers = document.getElementsByClassName('star-container');
  const changeStars = itemContainers[item].childNodes;
  for (let i = 0; i < changeStars.length; i += 1) {
    if (star <= i) {
      changeStars[i].classList.remove('fas');
      changeStars[i].classList.add('far');
    } else {
      changeStars[i].classList.remove('far');
      changeStars[i].classList.add('fas');
    }
  }
};

export default (rate);
