import ContactPage from './contact/contact';
import HomePage from './home/home';
import MenuPage from './menu/menu';

export const PAGE_OBJECTS = {
  Home: HomePage,
  Menu: MenuPage,
  Contact: ContactPage,
};

export const PAGE_LINKS: string[] = Object.keys(PAGE_OBJECTS);
