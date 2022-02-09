import { PAGE_LINKS, PAGE_OBJECTS } from '../../modules/page-routes';

export default function NavbarController() {
  function renderNewPage(evt: any): void {
    const anchorElem: HTMLElement = evt.target as HTMLElement;

    // // Do nothing if the nav link is already active
    // if (anchorElem.classList.contains('active')) return;

    const requestedPage: string | undefined = PAGE_LINKS.find(
      (link) => link === anchorElem.textContent
    );

    if (!requestedPage)
      throw new Error(
        `Unable to determine the requested page. Received: ${anchorElem.textContent}`
      );

    switch (requestedPage) {
      case 'Menu':
        document.querySelector('.main')?.replaceChildren(PAGE_OBJECTS.Menu());
        break;
      case 'Contact':
        document
          .querySelector('.main')
          ?.replaceChildren(PAGE_OBJECTS.Contact());
        break;
      default:
        document.querySelector('.main')?.replaceChildren(PAGE_OBJECTS.Home());
        break;
    }
  }

  return { renderNewPage };
}
