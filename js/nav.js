// Find the navbar
const nav = document.getElementById("navbar");

// HTML for all pages
nav.innerHTML = `
<nav class="main-nav">
    <div class="container nav-wrapper">
        // Logo formatting
        <a href="index.html" class="logo">

            ZK

            <span class="orbit">
                <span class="orbit-dot"></span>
            </span>

        </a>

        // Hamburger mobile display
        <button class="hamburger" id="hamburger">
            ☰
        </button>

        // List of navigation pages
        <ul class="nav-links" id="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>

    </div>
</nav>
`;

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Hamburger functionality
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
