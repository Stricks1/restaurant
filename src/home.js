const renderHome = () => {
    console.log('erer');
    const start = document.getElementsByTagName('body');

    console.log(start);
    const navTop = document.createElement('nav');
    navTop.classList.add('d-flex', 'justify-content-end', 'mr-2');
    const div = document.createElement('div');
    div.innerHTML = 'Home';
    div.classList.add('p-2');
    navTop.appendChild(div);
    const div2 = document.createElement('div');
    div2.innerHTML = 'Menu';
    div2.classList.add('p-2');
    navTop.appendChild(div2);
    const div3 = document.createElement('div');
    div3.innerHTML = 'Contacts';
    div3.classList.add('p-2');
    navTop.appendChild(div3);
    start[0].appendChild(navTop);
    const main = document.createElement('main');
    main.classList.add('bg-main');

    start[0].appendChild(main);
    

};

export default (renderHome);