import './menu-page.style.css';

export default function MenuPage(): Node {
  const menuPage: HTMLElement = document.createElement('div');
  menuPage.classList.add('menu');

  // TODO: Add 12 or so pizzas with card tile components

  return menuPage;
}
