window.onscroll = function() { stickContent() };

var navbar = document.getElementById("sticky-nav-bar");
var sticky = navbar.offsetTop;

function stickContent() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("stuck")
    } else {
        navbar.classList.remove("stuck");
    }
}