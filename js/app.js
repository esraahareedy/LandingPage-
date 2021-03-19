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
const sections = document.querySelectorAll('section');
const nav_ul = document.querySelector("#navbar__list");
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

sections.forEach( (element)=>{

    const sec_datanav = element.getAttribute('data-nav');
    const new_li = document.createElement('li'); // build the nav
    const new_link = document.createElement('a');
    const text_node = document.createTextNode(sec_datanav);

    new_link.addEventListener( 'click', ()=> {
        element.scrollIntoView({behavior: "smooth"});
    })

    new_link.appendChild(text_node);
    new_li.appendChild(new_link);
    fragment.appendChild(new_li);
    new_link.setAttribute("class", "menu__link");
});

nav_ul.appendChild(fragment);



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Scroll to section on link click


// Add class 'active' to section when near top of viewport
const offset = (element) =>{
    return Math.floor(element.getBoundingClientRect().top);  
}
const removeActive = (element) =>{
    element.classList.remove('your-active-class');
    secId = element.id.slice(7,8)-1;
    nav_ul.childNodes[secId].style.cssText = "background-color : transparent;";
}

// Set sections as active
const addActive = (statement,element) =>{
    if(statement){
        element.classList.add('your-active-class');
        secId = element.id.slice(7,8)-1;
        nav_ul.childNodes[secId].style.cssText = "background-color : #173F5F;";
    };
    console.log(addActive)
};

// Scroll to anchor ID using scrollTO event
window.addEventListener('scroll',() =>{
    sections.forEach(element =>{
        const eleOffset = offset(element);
        inViewPort = () => eleOffset < 150 && eleOffset >= -300 ;
        removeActive(element);
        addActive(inViewPort(),element);
    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

/*start scroll top button */
var scrollTop = document.querySelector('.scroll_top');

window.onscroll = function () {

    if (window.pageYOffset >= 400) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
};

scrollTop.onclick = function () {
    'use strict';
    window.scrollTo(0, 0);
};

/*End scroll top button */
/*start responsive nav menu ( mobile menu ) */
const toggleMenu = document.getElementsByClassName('toggle')[0]; // Build menu 
const navMenu = document.getElementsByClassName('navbar__menu')[0];

toggleMenu.addEventListener('click', () =>{
    navMenu.classList.toggle('active')
})

/*end responsive nav menu ( mobile menu ) */



