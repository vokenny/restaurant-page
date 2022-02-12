import ImageCard from '../image-card/image-card.component';
import { PIZZAS } from './menu-item-images';
import { Pizza } from './pizza';
import './menu.style.css';

export default function Menu(): Node {
  const menuElem: HTMLElement = document.createElement('div');
  menuElem.classList.add('main-menu');

  const menuItems: Node[] = PIZZAS.map((pizza: Pizza): Node => {
    const priceElem: HTMLParagraphElement = document.createElement('p');
    priceElem.textContent = `£${pizza.price}`;

    return ImageCard(pizza.src, pizza.name, priceElem);
  });

  menuElem.append(...menuItems);

  return menuElem;
}
