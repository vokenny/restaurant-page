import './navbar.style.css';
import Brand from '../brand/brand.component';
import NavbarController from './navbar.controller';

export default function Navbar(): Node {
  const navbarCtrl = NavbarController();

  const LINKS: string[] = ['Home', 'Menu', 'Contact'];

  const navElem: HTMLElement = document.createElement('nav');
  navElem.classList.add('navbar');

  const navLinkContainer: HTMLUListElement = document.createElement('ul');
  navLinkContainer.classList.add('nav-links');

  function createLinkElem(content: string): HTMLElement {
    const linkElem: HTMLLIElement = document.createElement('li');
    const anchorElem: HTMLAnchorElement = document.createElement('a');

    linkElem.append(anchorElem);
    linkElem.classList.add('link', 'nav-link');
    anchorElem.textContent = content;
    anchorElem.classList.add('link');

    linkElem.addEventListener('click', (evt) => navbarCtrl.renderNewPage(evt));

    return linkElem;
  }

  const linkElems: HTMLElement[] = LINKS.map(createLinkElem);
  navLinkContainer.append(...linkElems);

  navElem.append(Brand());
  navElem.append(navLinkContainer);

  return navElem;
}
