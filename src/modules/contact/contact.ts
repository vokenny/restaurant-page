import './contact.style.css';

export default function ContactPage(): Node {
  const contactPage: HTMLElement = document.createElement('div');
  contactPage.classList.add('menu');

  const title: Node = document.createElement('h1');
  title.textContent = 'Contact';

  contactPage.append(title);

  return contactPage;
}
