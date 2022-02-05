import HeroCarousel from '../../components/hero-carousel/hero-carousel.component';
import OpeningHours from '../../components/opening-hours/opening-hours.component';

export default function HomePage(): Node {
  // Parent main element
  const homePage: HTMLElement = document.createElement('main');
  homePage.classList.add('main');

  const heroCarousel = HeroCarousel();
  const openingHours = OpeningHours();

  homePage.append(heroCarousel, openingHours);

  return homePage;
}
