import HeroCarouselController from './hero-carousel.controller';
import './hero-carousel.style.css';
import { HERO_IMAGES } from './hero-images';

export default function HeroCarousel(): Node {
  // TODO: Timed sliding carousel for hero images
  // TODO: Add overlay to carousel for short description text

  const heroCtrl = HeroCarouselController();

  const heroCarouselElem: HTMLDivElement = document.createElement('div');
  heroCarouselElem.classList.add('hero-carousel');

  function createHeroImgElem(source: any, idx: number): HTMLDivElement {
    const heroImgElem: HTMLImageElement = new Image();
    heroImgElem.src = source;
    heroImgElem.classList.add('hero');
    heroImgElem.dataset.id = idx.toString();

    if (idx === 0) heroImgElem.classList.add('active');

    heroImgElem.addEventListener('click', (evt) => heroCtrl.showNextImage(evt));

    return heroImgElem;
  }

  const heroImgElems: HTMLDivElement[] = HERO_IMAGES.map(createHeroImgElem);

  heroCarouselElem.append(...heroImgElems);

  return heroCarouselElem;
}
