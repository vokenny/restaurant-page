export default function NavbarController() {
  function renderNewPage(evt: any): void {
    const link = evt.target as HTMLElement;

    alert(`You clicked on ${link.textContent}`);
  }

  return { renderNewPage };
}
