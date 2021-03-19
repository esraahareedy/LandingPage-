# Landing Page Project

- 👋 Hi, I’m @esraahareedy
- 👀 I’m interested in Front-End Development.
- 🌱 I’m currently learning Information System Mangement.
- 💞️ I'm looking to collaborate on udacity 
- 📫 How to reach me ...

<!---
esraahareedy/esraahareedy is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->


## Table of Contents

* [Instructions](#instructions)

## Instructions
To get started, open `js/app.js` and start building out the app's functionality

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.
Build Navigation Menu Dynamically With Javascript. Selection of all the sections via .Create a Document Fragment via to append created nav items to it for the sake of performance. Loop on the sections list created using a for.. Of loop or any other type of loop and create <li> elements with each iteration via document.createElement(‘li’); and append anchor <a> element as a child to it. Use the value of each section’s data-nav attribute to create the text inside each anchor <a> tag, and the value of each section id attribute to create the value of anchor’s href attribute in addition to symbol #
Append each nav item to the previously created Document Fragment via docFargment.appendChild(‘listItem’); . And after closing the loop append the filled Document Fragment to the unordered list <ul> element via list.appendChild(‘docFargment’);. Use a scroll event listener window.addEventListener(‘scroll’, toggleActiveState); Inside toggleActiveState function use intersection observer to detect the section inside the viewport (onscreen) while scrolling. Inside the observer, when the section is intersecting (onscreen) we should remove the active CSS classes (highlighting style classes for both sections and nav items) from all the sections, and all the links first by looping on all the sections and all the nav items and removing the classes from each one of them via section.classList.remove(‘your-active-class’); and navItem.classList.remove(‘item-active-class’); for the sections and nav items respectively. Then add the same active classes for the intersection section and its related nav item. Use a click event listener on the nav menu links navLink.addEventListener(‘click’, scrollToSection); Inside scrollToSection function:
1. Prevent default action of the clicking on a link (which is jumping right to the section) via event.preventDefault(); where event is an object comes with the event listener and should be added firstly as an argument to the scrollToSection function when declaring it like this function scrollToSection(event){}
2. Detect the selected section related to the clicked nav link. We can use the value of the nav link href to select it. Also inside scrollToSection function call scrollIntoView() method on the selected section above like this: selectedSection.scrollIntoView({behavior: “smooth”, block: “center”); Where the block is the vertical alignment of the section when scrolling. For a responsive nav menu as above images for smaller screens use CSS media query and inside it put the code for converting the nav menu from the horizontal one to the vertical one. The readme file is a file written in markdown language and is used to introduce, and explain a project, and give instruction on how to use it, etc. In our project we just have to explain what the project is about, and what we have used to create it.


To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.
