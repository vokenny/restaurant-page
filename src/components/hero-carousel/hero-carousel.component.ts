import './hero-carousel.style.css';
import PizzaPrep from '../../assets/pizza-prep.jpg';
// import PizzaReady from '../../assets/pizza-ready.jpg';
// import PizzaServe from '../../assets/pizza-serve.jpg';

export default function HeroCarousel(): Node {
  'use strict';

  // TODO: Add other hero images in timed sliding carousel
  // TODO: Add overlay to carousel for short description text

  // const HERO_IMAGES: any[] = [PizzaPrep, PizzaReady, PizzaServe];

  const heroCarouselElem: HTMLDivElement = document.createElement('div');
  heroCarouselElem.classList.add('hero-carousel');

  const heroImgElem = new Image();
  heroImgElem.src = PizzaPrep;
  heroImgElem.classList.add('hero');

  heroCarouselElem.append(heroImgElem);

  return heroCarouselElem;
}
