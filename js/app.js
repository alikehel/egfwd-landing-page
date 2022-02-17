/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

let sections = document.querySelectorAll('main section');
let navbar__list = document.querySelector('#navbar__list');
let menu__links;

/**
 * End Global Variables
 *
 */

/**
 * Begin Main Functions
 *
 */

// build the nav

sections.forEach((section) => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.classList.add('menu__link');
  li.appendChild(a);
  a.appendChild(document.createTextNode(section.getAttribute('data-nav')));
  a.setAttribute('href', '#' + section.getAttribute('id'));
  navbar__list.appendChild(li);
});

menu__links = document.querySelectorAll('.menu__link');

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', (e) => {
  // console.log(window.pageYOffset + ' ' + sections[0].getBoundingClientRect().bottom);
  sections.forEach((section) => {
    if (section.getBoundingClientRect().bottom > 250 && section.getBoundingClientRect().top < 200) {
      section.classList.add('your-active-class');
      let link = document.querySelectorAll("a[href='#" + section.getAttribute('id') + "']");
      menu__links.forEach((link) => {
        link.style.backgroundColor = '';
        link.style.color = 'white';
      });
      link[0].style.backgroundColor = 'white';
      link[0].style.color = 'black';
    } else {
      section.classList.remove('your-active-class');
    }
  });
});

// Scroll to anchor ID using scrollTO event

menu__links.forEach((section) => {
  section.addEventListener('click', (e) => {
    e.preventDefault();
    let targetID = section.getAttribute('href');
    let tergetElement = document.querySelector(targetID);
    console.log(tergetElement.getBoundingClientRect().top);
    window.scrollTo({
      top: tergetElement.getBoundingClientRect().top + window.pageYOffset - 80,
      behavior: 'smooth',
    });
  });
});

/**
 * End Main Functions
 *
 */
