import './opening-hours.style.css';

import Card from '../card/card.component';

export default function OpeningHours(): Node {
  const OPENING_HOURS = {
    Mon: 'Closed',
    Tue: 'Closed',
    Wed: '11am - 11pm',
    Thu: '11am - 11pm',
    Fri: '11am - 11pm',
    Sat: '11am - 11pm',
    Sun: '11am - 11pm',
  };

  const contentElem: HTMLUListElement = document.createElement('ul');
  contentElem.classList.add('opening-hours');

  const listElems: HTMLLIElement[] = Object.entries(OPENING_HOURS).map(
    ([day, hours]: [string, string]): HTMLLIElement => {
      const listElem: HTMLLIElement = document.createElement('li');
      listElem.classList.add('hours');
      listElem.textContent = `${day}: ${hours}`;

      return listElem;
    }
  );

  contentElem.append(...listElems);

  return Card('Opening hours', contentElem);
}
