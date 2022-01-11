import './navbar.style.css';

export const NavbarComponent = function () {
  'use strict';

  function hello() {
    const heading = document.createElement('h1');
    heading.textContent = 'Omg I did it!';
    heading.classList.add('hello');

    return heading;
  }

  document.body.appendChild(hello());
};
