const navBtn = document.getElementById('navbar-button');
const navbar = document.getElementById('navbar');

navBtn.addEventListener('click', function() {
    if(navbar.firstElementChild.classList.contains('hidden')) {
        // Shows navbar
        navbar.children[0].classList.remove('hidden');
        navbar.children[1].classList.remove('hidden');

        navbar.classList.remove('nav-hidden');
        navbar.classList.add('nav-normal-size');

        navBtnTurnLeft();
    }
    else {
        // Hide navbar
        navbar.children[0].classList.add('hidden');
        navbar.children[1].classList.add('hidden');

        navbar.classList.remove('nav-normal-size');
        navbar.classList.add('nav-hidden');

        navBtnTurnRight();
    }
    
});


function navBtnTurnRight() {
    navbar.children[2].classList.remove('fa-rotate-270');
    navbar.children[2].classList.add('fa-rotate-90');
}
function navBtnTurnLeft() {
    navbar.children[2].classList.remove('fa-rotate-90');
    navbar.children[2].classList.add('fa-rotate-270');
}