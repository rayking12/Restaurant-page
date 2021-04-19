const setBtnActive = (id) => {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
};

const createFood = (src, text, price, alt) => {
  const food = document.createElement('div');
  food.classList.add('food');
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  const description = document.createElement('div');
  description.classList.add('description');

  const foodName = document.createElement('h3');
  foodName.textContent = text;

  const foodPrice = document.createElement('h2');
  foodPrice.textContent = price;

  description.appendChild(foodName);
  description.appendChild(foodPrice);

  food.appendChild(img);
  food.appendChild(description);
  return food;
};

const loadMenu = () => {
  const content = document.getElementById('tab-content');
  content.classList.add('grid-lay');
  content.classList.remove('flex-lay');

  content.textContent = '';
  setBtnActive('menu');

  const foods = [
    createFood(
      'https://gbc-cdn-public-media.azureedge.net/img82551.768x512.jpg',
      'Jollof Rice',
      'NGN 1000',
      'Jollof Rice',
    ),
    createFood(
      'https://gbc-cdn-public-media.azureedge.net/img68802.768x512.jpg',
      'Akara',
      'NGN5000',
      'Akara',
    ),
    createFood(
      'https://gbc-cdn-public-media.azureedge.net/img58635.768x512.jpg',
      'Spaghetti',
      'NGN 2000',
      'Spaghetti',
    ),
    createFood(
      'https://gbc-cdn-public-media.azureedge.net/img24397.1426x713.jpg',
      'Chicken',
      'NGN 2000',
      'Chicken',
    ),

  ];

  foods.forEach((food) => {
    content.appendChild(food);
  });
};

export default loadMenu;