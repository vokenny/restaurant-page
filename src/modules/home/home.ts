import './home.style.css';

import Address from '../../components/address/address.component';
import HeroCarousel from '../../components/hero-carousel/hero-carousel.component';
import OpeningHours from '../../components/opening-hours/opening-hours.component';

export default function HomePage(): Node {
  // Parent main element
  const homePage: HTMLElement = document.createElement('main');
  homePage.classList.add('main');

  const heroCarousel: Node = HeroCarousel();

  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container');
  const openingHours: Node = OpeningHours();
  const address: Node = Address();

  detailsContainer.append(openingHours, address);
  homePage.append(heroCarousel, detailsContainer);

  return homePage;
}
