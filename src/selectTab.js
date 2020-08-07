const selectTab = (nTab) => {
  const tabs = document.getElementsByClassName('navLinks');
  for (let i = 0; i < tabs.length; i += 1) {
    tabs[i].classList.remove('selected');
    if (i === nTab) {
      tabs[i].classList.add('selected');
    }
  }
};

export default (selectTab);
