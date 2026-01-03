document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});

function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header class="main-header">
                <div class="nav-container">
                    <div class="logo-wrapper">
                        <a href="index.html" class="logo">
                            <img src="logo.png" alt="Nutzy Craft Logo" class="logo-image">
                            <span class="logo-text">IdeaTech</span>
                        </a>
                    </div>
                    
                    <nav class="main-nav">
                        <ul class="nav-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </nav>
                    
                    <button class="mobile-menu-toggle" aria-label="Toggle Navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        `;
        highlightActiveLink();
        initMobileMenu();
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer class="main-footer">
                <div class="footer-wave-container">
                    <svg class="footer-wave-svg" viewBox="0 0 1200 250" preserveAspectRatio="none">
                        <!-- Front Wave -->
                        <path d="M0,220 C200,120 400,320 600,220 C800,120 1000,320 1200,220 L1200,250 L0,250 Z" fill="#cccccc"></path>
                    </svg>
                </div>
                <div class="container footer-grid">
                    <div class="footer-col">
                        <h3>IdeaTech.</h3>
                        <p>Innovation Driven.</p>
                        <div class="social-links">
                            <a href="#">YouTube</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Facebook</a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="board.html">Leadership</a></li>
                            <li><a href="careers.html">Careers</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="services.html#software">Software Dev</a></li>
                            <li><a href="services.html#web">Web Dev</a></li>
                            <li><a href="services.html#content">Content Creation</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Products</h4>
                        <ul>
                            <li><a href="products.html#roam">Roam Ceylon</a></li>
                            <li><a href="products.html#unicast">Unicast</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom container">
                    <p>&copy; 2026 Nutzy Craft. All Rights Reserved.</p>
                    <div class="legal-links">
                        <a href="faq.html">FAQ</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </footer>
        `;
    }
}

function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
}

function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
}
