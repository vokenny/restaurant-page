import './style.css';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import Main from './modules/main/main';

document.body.append(Navbar(), Main(), Footer());
