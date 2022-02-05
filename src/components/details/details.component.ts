import './details.style.css';

export default function Details(heading: string, content: Node): Node {
  const detailsElem: HTMLDivElement = document.createElement('div');
  const detailsClass: string = `${heading.replace(/\s/g, '-')}-details`;
  detailsElem.classList.add(detailsClass);

  const h2Elem: HTMLHeadingElement = document.createElement('h2');
  h2Elem.textContent = heading;

  detailsElem.append(h2Elem, content);

  return detailsElem;
}
