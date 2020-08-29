// add event listener for toggle menu button
document.getElementsByClassName("toggle_menu_button")[0].addEventListener('click',menu_button);

// toggle active state on click
function menu_button() {
	var x = document.getElementsByClassName('nav_link');
	x[0].classList.toggle('active');
	x[1].classList.toggle('active');
}