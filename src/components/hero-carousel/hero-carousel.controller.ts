import { HERO_IMAGES } from './hero-images';

export default function HeroCarouselController() {
  function calcNextId(currentId: string): string {
    const currId: number = parseInt(currentId);

    return currId === HERO_IMAGES.length - 1 ? '0' : `${currId + 1}`;
  }

  function showNextImage(evt: MouseEvent): void {
    const currImg: HTMLElement = evt.target as HTMLElement;

    if (!currImg.dataset.id)
      throw new Error(`data-id attr not found on clicked element: ${currImg}`);

    const nextId: string = calcNextId(currImg.dataset.id);
    const nextImg: HTMLElement = document.querySelector(
      `.hero[data-id="${nextId}"]`
    ) as HTMLElement;

    currImg.classList.remove('active');
    nextImg.classList.add('active');
  }

  return { showNextImage };
}
