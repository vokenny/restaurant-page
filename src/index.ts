import './style.css';
import Navbar from './components/navbar/navbar.component';
import HomePage from './modules/home/home';
import Footer from './components/footer/footer.component';

// TODO: Style things better once everything's in place

document.body.append(Navbar(), HomePage(), Footer());
