const time = new Date();
const year = document.querySelector("#currentYear");
year.innerHTML = time.getFullYear();
document.getElementById("lastModified").innerHTML = `Last modified: ${document.lastModified}`;

const hamburger = document.querySelector('#menu');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});