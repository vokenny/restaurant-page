import './menu.style.css';

export default function MenuPage(): Node {
  const menuPage: HTMLElement = document.createElement('div');
  menuPage.classList.add('menu');

  const title: Node = document.createElement('h1');
  title.textContent = 'Menu';

  menuPage.append(title);

  return menuPage;
}
