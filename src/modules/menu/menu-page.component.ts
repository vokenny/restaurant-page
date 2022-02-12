import './menu-page.style.css';
import Menu from '../../components/menu/menu.component';

export default function MenuPage(): Node {
  const menuPage: HTMLElement = document.createElement('div');
  menuPage.classList.add('menu');

  const menu: Node = Menu();
  menuPage.append(menu);

  return menuPage;
}
