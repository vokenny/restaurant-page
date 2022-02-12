import HomePage from '../home/home-page.component';

export default function Main(): Node {
  const mainContent: HTMLElement = document.createElement('main');
  mainContent.classList.add('main');

  mainContent.append(HomePage());

  return mainContent;
}
