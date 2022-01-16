import './navbar.style.css';
import BrandComponent from '../brand/brand.component';

export default function NavbarComponent(): Node {
  'use strict';

  const LINKS: string[] = ['Home', 'Menu', 'Contact'];

  const navElem: HTMLElement = document.createElement('nav');
  navElem.classList.add('navbar');

  const navLinkContainer: HTMLElement = document.createElement('div');
  navLinkContainer.classList.add('nav-links');

  function createLinkElem(content: string): HTMLElement {
    const linkElem: HTMLDivElement = document.createElement('div');
    const anchorElem: HTMLAnchorElement = document.createElement('a');

    linkElem.append(anchorElem);
    linkElem.classList.add('nav-link');
    anchorElem.textContent = content;
    anchorElem.classList.add('link');

    return linkElem;
  }

  const linkElems: HTMLElement[] = LINKS.map(createLinkElem);
  navLinkContainer.append(...linkElems);

  navElem.append(BrandComponent());
  navElem.append(navLinkContainer);

  return navElem;
}
