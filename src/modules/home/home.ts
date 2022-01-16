import HeroCarousel from '../../components/hero-carousel/hero-carousel.component';

export default function HomePage(): Node {
  'use strict';

  // Parent main element
  const homePage: HTMLElement = document.createElement('main');
  homePage.classList.add('main');

  const heroCarousel = HeroCarousel();

  homePage.append(heroCarousel);

  return homePage;
}
