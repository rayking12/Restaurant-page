const createAboutSection = () => {
  const about = document.createElement('section');
  about.classList.add('section');

  const title = document.createElement('h2');
  title.classList.add('section-title');
  title.textContent = 'About us';

  about.appendChild(title);

  const para = document.createElement('p');
  para.classList.add('section-description');
  para.textContent = 'Tess Kitchen is all for you, we sell the most promising and enticing meals with the most affordable prices';

  about.appendChild(para);
  return about;
};

const setBtnActive = (id) => {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
};

const loadHome = () => {
  const content = document.getElementById('tab-content');
  content.classList.add('flex-lay');
  content.classList.remove('grid-lay');

  content.textContent = '';

  const aboutSection = createAboutSection();

  setBtnActive('home');

  content.appendChild(aboutSection);
};

export default loadHome;