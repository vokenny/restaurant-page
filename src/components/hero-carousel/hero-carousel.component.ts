import './hero-carousel.style.css';
import PizzaPrep from '../../assets/pizza-prep.jpg';
import PizzaReady from '../../assets/pizza-ready.jpg';
import PizzaServe from '../../assets/pizza-serve.jpg';

export default function HeroCarousel(): Node {
  // TODO: Timed sliding carousel for hero images
  // TODO: Add overlay to carousel for short description text

  const HERO_IMAGES: any[] = [PizzaPrep, PizzaReady, PizzaServe];

  const heroCarouselElem: HTMLDivElement = document.createElement('div');
  heroCarouselElem.classList.add('hero-carousel');

  function createHeroImgElem(source: any, idx: number): HTMLDivElement {
    const heroImgElem: HTMLImageElement = new Image();
    heroImgElem.src = source;
    heroImgElem.classList.add('hero');
    heroImgElem.dataset.id = idx.toString();

    if (idx === 0) heroImgElem.classList.add('active');

    heroImgElem.addEventListener('click', (evt) => showNextImage(evt));

    return heroImgElem;
  }

  function calcNextId(currentId: string): string {
    const currId: number = parseInt(currentId);

    return currId === HERO_IMAGES.length - 1 ? '0' : `${currId + 1}`;
  }

  function showNextImage(evt: MouseEvent): void {
    const currImg: HTMLElement = evt.target as HTMLElement;

    if (!currImg.dataset.id)
      throw new Error('data-id attr not found on clicked element');

    const nextId: string = calcNextId(currImg.dataset.id);
    const nextImg: HTMLElement = document.querySelector(
      `.hero[data-id="${nextId}"]`
    ) as HTMLElement;

    currImg.classList.remove('active');
    nextImg.classList.add('active');
  }

  const heroImgElems: HTMLDivElement[] = HERO_IMAGES.map(createHeroImgElem);

  heroCarouselElem.append(...heroImgElems);

  return heroCarouselElem;
}
