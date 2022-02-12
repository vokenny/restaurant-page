import Card from '../card/card.component';

export default function Address(): Node {
  const ADDRESS: string = `123 Mozzarrella Street
  Campania
  Italy`;

  const contentElem: HTMLDivElement = document.createElement('div');

  const pElems: HTMLParagraphElement[] = ADDRESS.split('\n').map((addrLine) => {
    const pElem: HTMLParagraphElement = document.createElement('p');
    pElem.textContent = addrLine;

    return pElem;
  });

  contentElem.append(...pElems);

  return Card('Where to find us', contentElem);
}
