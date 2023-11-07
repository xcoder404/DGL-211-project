const links = document.querySelectorAll('.nav a');
const contentSections = document.querySelectorAll('.image-content');

function setActiveLink(event) {
  links.forEach(link => {
    link.classList.remove('active-link');
  });
  event.target.classList.add('active-link');
}


links.forEach(link => {
  link.addEventListener('click', setActiveLink);
});

function showContent(event) {
    event.preventDefault();
  
    // Remove 'active' class from all content sections
    contentSections.forEach(section => {
      section.classList.remove('active');
    });
  
    // Get the target section to display
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
  
    // Add 'active' class to the target section to display it
    targetSection.classList.add('active');
  }
  
  // Add a click event listener to each link
  links.forEach(link => {
    link.addEventListener('click', showContent);
  });

  contentSections[0].classList.add('active');