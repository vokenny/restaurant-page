import './hero-carousel.style.css';
import PizzaPrep from '../../assets/pizza-prep.jpg';
import PizzaReady from '../../assets/pizza-ready.jpg';
import PizzaServe from '../../assets/pizza-serve.jpg';

export default function HeroCarousel(): Node {
  'use strict';

  // TODO: Add other hero images in timed sliding carousel
  // TODO: Add overlay to carousel for short description text

  const HERO_IMAGES: any[] = [PizzaPrep, PizzaReady, PizzaServe];

  const heroCarouselElem: HTMLDivElement = document.createElement('div');
  heroCarouselElem.classList.add('hero-carousel');

  function createHeroImgElem(source: any, idx: number): HTMLDivElement {
    const heroImgContainer: HTMLDivElement = document.createElement('div');
    const heroImgElem = new Image();
    heroImgElem.src = source;
    heroImgElem.classList.add('hero');

    if (idx === 0) heroImgElem.classList.add('active');

    heroImgContainer.append(heroImgElem);

    return heroImgContainer;
  }

  const heroImgElems: HTMLDivElement[] = HERO_IMAGES.map(createHeroImgElem);

  heroCarouselElem.append(...heroImgElems);

  return heroCarouselElem;
}
