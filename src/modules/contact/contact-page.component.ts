import Card from '../../components/card/card.component';
import { Contact } from './contact';
import './contact-page.style.css';

export default function ContactPage(): Node {
  const CONTACTS: Contact[] = [
    {
      name: 'Charles Boyle',
      role: 'Chef',
      mobile: '01234 567890',
      email: 'charles@pdhe.co.uk',
    },
    {
      name: 'Leslie Knope',
      role: 'Taste Tester',
      mobile: '01234 567891',
      email: 'leslie@pdhe.co.uk',
    },
    {
      name: 'Britta Perry',
      role: 'Taste Tester',
      mobile: '01234 567892',
      email: 'britta@pdhe.co.uk',
    },
  ];

  const contactPage: HTMLElement = document.createElement('div');
  contactPage.classList.add('contacts');

  const contactsContainer: HTMLDivElement = document.createElement('div');
  contactsContainer.classList.add('contacts-container');

  const contactCardElems: Node[] = CONTACTS.map((contact: Contact): Node => {
    const cardContent: HTMLDivElement = document.createElement('div');

    const pElems: HTMLParagraphElement[] = Object.entries(contact)
      .filter(([key, _]): boolean => key !== 'name')
      .map(([_, value]): HTMLParagraphElement => {
        const pElem: HTMLParagraphElement = document.createElement('p');
        pElem.textContent = value;

        return pElem;
      });

    cardContent.append(...pElems);

    return Card(contact.name, cardContent);
  });

  contactsContainer.append(...contactCardElems);
  contactPage.append(contactsContainer);

  return contactPage;
}
