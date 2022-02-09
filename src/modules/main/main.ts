import HomePage from '../home/home';

export default function Main(): Node {
  const mainContent: HTMLElement = document.createElement('main');
  mainContent.classList.add('main');

  mainContent.append(HomePage());

  return mainContent;
}
