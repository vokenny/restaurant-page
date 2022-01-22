import './footer.style.css';
import Octocat from '../../assets/GitHub-Mark-Light-32px.png';

export default function Footer(): Node {
  const footerElem: HTMLElement = document.createElement('footer');
  footerElem.classList.add('footer');

  const githubLink: HTMLAnchorElement = document.createElement('a');
  githubLink.classList.add('link', 'github-link');
  githubLink.href = 'https://github.com/vokenny';
  githubLink.textContent = 'vokenny';

  const octocatIcon: HTMLImageElement = new Image();
  octocatIcon.src = Octocat;
  octocatIcon.classList.add('icon');

  footerElem.append(octocatIcon, githubLink);

  return footerElem;
}
