import ContactPage from './contact/contact-page.component';
import HomePage from './home/home-page.component';
import MenuPage from './menu/menu-page.component';

export const PAGE_OBJECTS = {
  Home: HomePage,
  Menu: MenuPage,
  Contact: ContactPage,
};

export const PAGE_LINKS: string[] = Object.keys(PAGE_OBJECTS);
