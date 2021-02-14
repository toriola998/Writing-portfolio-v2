const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
const closeIcon = document.querySelector('.close-icon')

/**Toggle to menu hamburger */
menu.addEventListener('click', function(){
links.classList.toggle('show-links')
});

/*Close the side bar once the close icon gets clicked*/
closeIcon.addEventListener('click', function(){
    links.classList.remove('show-links')
});

/**Update the copyright year automatically*/
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();