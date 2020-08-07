import renderBgImage from './renderBg';
import selectTab from './selectTab';

const renderContact = () => {
  const {
    main,
    bgDiv,
    divMainInfo,
    start,
  } = renderBgImage('bg-contact');

  selectTab(3);

  const form = document.createElement('form');
  form.classList.add('form');

  const p1 = document.createElement('p');
  p1.classList.add('field', 'validate');
  const label1 = document.createElement('label');
  label1.classList.add('label');
  label1.innerHTML = 'Name';
  const inpu1 = document.createElement('input');
  inpu1.classList.add('txt-input');
  inpu1.setAttribute('id', 'name');
  inpu1.setAttribute('type', 'text');

  p1.appendChild(label1);
  p1.appendChild(inpu1);
  form.appendChild(p1);

  const p2 = document.createElement('p');
  p2.classList.add('field', 'validate', 'divided');
  const label2 = document.createElement('label');
  label2.classList.add('label');
  label2.innerHTML = 'E-mail';
  const inpu2 = document.createElement('input');
  inpu2.classList.add('txt-input');
  inpu2.setAttribute('id', 'email');
  inpu2.setAttribute('type', 'email');

  p2.appendChild(label2);
  p2.appendChild(inpu2);
  form.appendChild(p2);

  const p3 = document.createElement('p');
  p3.classList.add('field', 'divided');
  const label3 = document.createElement('label');
  label3.classList.add('label');
  label3.innerHTML = 'Phone';
  const inpu3 = document.createElement('input');
  inpu3.classList.add('txt-input');
  inpu3.setAttribute('id', 'phone');
  inpu3.setAttribute('type', 'tel');

  p3.appendChild(label3);
  p3.appendChild(inpu3);
  form.appendChild(p3);

  const p4 = document.createElement('p');
  p4.classList.add('field', 'validate');
  const label4 = document.createElement('label');
  label4.classList.add('label', 'validate');
  label4.innerHTML = 'Message';
  const inpu4 = document.createElement('textarea');
  inpu4.classList.add('textarea');
  inpu4.setAttribute('id', 'message');
  inpu4.setAttribute('type', 'text');

  p4.appendChild(label4);
  p4.appendChild(inpu4);
  form.appendChild(p4);

  const p5 = document.createElement('p');
  p5.classList.add('field', 'divided');
  const label5 = document.createElement('label');
  label5.classList.add('label');
  label5.innerHTML = 'Subject';
  const select1 = document.createElement('select');
  select1.classList.add('select');
  select1.setAttribute('id', 'select');
  const option1 = document.createElement('option');
  option1.innerHTML = 'Suggestion';
  const option2 = document.createElement('option');
  option2.innerHTML = 'Complaint';
  const option3 = document.createElement('option');
  option3.innerHTML = 'Information';
  const option4 = document.createElement('option');
  option4.innerHTML = 'Other';

  select1.appendChild(option4);
  select1.appendChild(option3);
  select1.appendChild(option2);
  select1.appendChild(option1);
  p5.appendChild(label5);
  p5.appendChild(select1);
  form.appendChild(p5);

  const p6 = document.createElement('p');
  p6.classList.add('field', 'divided');
  const button1 = document.createElement('input');
  button1.classList.add('button');
  button1.value = 'Submit';
  button1.setAttribute('type', 'submit');
  p6.appendChild(button1);
  form.appendChild(p6);

  divMainInfo.classList.add('justify-content-center', 'align-items-center', 'vh-sm-92');
  main.appendChild(bgDiv);
  divMainInfo.appendChild(form);
  main.appendChild(divMainInfo);
  start[0].appendChild(main);
};

export default (renderContact);
