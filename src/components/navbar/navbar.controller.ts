import { PAGE_LINKS, PAGE_OBJECTS } from '../../modules/page-routes';

export default function NavbarController() {
  function renderNewPage(evt: any): void {
    const anchorElem: HTMLElement = evt.target as HTMLElement;

    // Do nothing if the nav link is already active
    if (anchorElem.classList.contains('active')) return;

    const allNavLinks = document.querySelectorAll('.nav-link > a');
    allNavLinks.forEach((link) => link.classList.remove('active'));
    anchorElem.classList.add('active');

    const requestedPage: string | undefined = PAGE_LINKS.find(
      (link) => link === anchorElem.textContent
    );

    if (!requestedPage)
      throw new Error(
        `Unable to determine the requested page. Received: ${anchorElem.textContent}`
      );

    const pageObj =
      requestedPage === 'Menu'
        ? PAGE_OBJECTS.Menu
        : requestedPage === 'Contact'
        ? PAGE_OBJECTS.Contact
        : PAGE_OBJECTS.Home;

    document.querySelector('.main')?.replaceChildren(pageObj());
  }

  return { renderNewPage };
}
