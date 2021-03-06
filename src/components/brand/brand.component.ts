import './brand.style.css';

export default function Brand(): Node {
  const brandElem: HTMLDivElement = document.createElement('div');
  brandElem.classList.add('brand');

  const titleElem: HTMLHeadingElement = document.createElement('h1');
  titleElem.textContent = 'Papa Domino Hut Express';

  brandElem.append(titleElem);

  return brandElem;
}
