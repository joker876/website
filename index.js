let navbar;
window.onload = () => {
    navbar = document.getElementById('navbar')
}
function toggleNavlinks() {
    navbar.classList.toggle('open');
}