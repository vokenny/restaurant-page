import './image-card.style.css';

export default function ImageCard(
  imgSrc: any,
  title: string,
  content: Node
): Node {
  const imgCardElem: HTMLDivElement = document.createElement('div');
  const imgCardClass: string = `${title.replace(/\s/g, '-')}-card`;
  imgCardElem.classList.add('img-card', 'tile', 'shadow', imgCardClass);

  const imgElem: HTMLImageElement = new Image();
  imgElem.src = imgSrc;
  imgElem.classList.add('img');

  const imgTitle: HTMLHeadingElement = document.createElement('p');
  imgTitle.classList.add('caption');
  imgTitle.textContent = title;

  imgCardElem.append(imgElem, imgTitle, content);

  return imgCardElem;
}
