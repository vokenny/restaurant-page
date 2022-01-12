import './brand.style.css';

export default function BrandComponent(): Node {
  'use strict';

  const brandElem = document.createElement('div');
  brandElem.classList.add('brand');

  const titleElem = document.createElement('h1');
  titleElem.textContent = 'Papa Domino Hut Express';

  brandElem.append(titleElem);

  return brandElem;
}
