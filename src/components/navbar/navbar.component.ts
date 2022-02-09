import './navbar.style.css';
import Brand from '../brand/brand.component';
import NavbarController from './navbar.controller';
import { PAGE_LINKS } from '../../modules/page-routes';

export default function Navbar(): Node {
  const navbarCtrl = NavbarController();

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

    // Home is default active when Navbar is initially loaded
    if (content === 'Home') anchorElem.classList.add('active');

    linkElem.addEventListener('click', (evt) => navbarCtrl.renderNewPage(evt));

    return linkElem;
  }

  const linkElems: HTMLElement[] = PAGE_LINKS.map(createLinkElem);
  navLinkContainer.append(...linkElems);

  navElem.append(Brand());
  navElem.append(navLinkContainer);

  return navElem;
}
