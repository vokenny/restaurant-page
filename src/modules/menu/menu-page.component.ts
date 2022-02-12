import './menu-page.style.css';

export default function MenuPage(): Node {
  const menuPage: HTMLElement = document.createElement('div');
  menuPage.classList.add('menu');

  const title: Node = document.createElement('h1');
  title.textContent = 'Menu';

  // TODO: Add 12 or so pizzas with card tile components

  menuPage.append(title);

  return menuPage;
}
