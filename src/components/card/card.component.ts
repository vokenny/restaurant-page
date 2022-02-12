import './card.style.css';

export default function Card(heading: string, content: Node): Node {
  const cardElem: HTMLDivElement = document.createElement('div');
  const cardClass: string = `${heading.replace(/\s/g, '-')}-card`;
  cardElem.classList.add('card', 'tile', 'shadow', cardClass);

  const h2Elem: HTMLHeadingElement = document.createElement('h2');
  h2Elem.textContent = heading;

  cardElem.append(h2Elem, content);

  return cardElem;
}
