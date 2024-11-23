document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
fetch('http://localhost:5000/files/data.json')
    .then(response => response.json())
    .then(data => {
        console.log('JSON Data:', data);
    })
    .catch(error => console.error('Error fetching JSON file:', error));