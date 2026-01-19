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
                            <li><a href="products.html">Products</a></li>
                            <li><a href="news.html">News</a></li>
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
                        <path d="M0,220 C200,120 400,320 600,220 C800,120 1000,320 1200,220 L1200,250 L0,250 Z" fill="#000000"></path>
                    </svg>
                </div>
                <div class="container footer-grid">
                    <div class="footer-col">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                            <img src="ideatech-icon.png" alt="IdeaTech Icon" style="height: 40px; width: auto; filter: invert(1); mix-blend-mode: screen;">
                            <h3 style="margin-bottom: 0;">IdeaTech.</h3>
                        </div>
                        <p style="font-size: 0.9rem; margin-top: 1rem; color: #a0a0a0; line-height: 1.5;">Ideally positioning itself as a premium software development company, Ideatech combines technical expertise with creative vision to deliver outstanding digital solutions.</p>
                        <div class="social-links">
                            <a href="https://www.youtube.com/@IdeaTechltd" aria-label="YouTube">
                                <svg class="social-icon" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/idea-tech-pvt-ltd/posts/?feedView=all" aria-label="LinkedIn">
                                <svg class="social-icon" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/share/16ZVALypqM/" aria-label="Facebook">
                                <svg class="social-icon" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
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
        // Ensure ARIA attributes and initial hidden state on small screens
        if (!nav.id) nav.id = 'site-main-nav';
        toggle.setAttribute('aria-controls', nav.id);

        const setHiddenState = (hidden) => {
            if (hidden) {
                nav.classList.remove('active');
                toggle.classList.remove('active');
                nav.setAttribute('aria-hidden', 'true');
                toggle.setAttribute('aria-expanded', 'false');
            } else {
                nav.classList.add('active');
                toggle.classList.add('active');
                nav.setAttribute('aria-hidden', 'false');
                toggle.setAttribute('aria-expanded', 'true');
            }
        };

        // Hide on load for mobile widths
        if (window.innerWidth <= 768) setHiddenState(true);

        toggle.addEventListener('click', (e) => {
            const isOpen = nav.classList.contains('active');
            // Toggle: if open, hide; if closed, show
            setHiddenState(isOpen);
            e.stopPropagation();
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.classList.contains('active')) return;
            const target = e.target;
            if (!nav.contains(target) && !toggle.contains(target)) {
                setHiddenState(true);
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                setHiddenState(true);
            }
        });

        // Ensure nav hides when resizing to mobile
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768 && nav.classList.contains('active')) {
                setHiddenState(true);
            }
        });
    }
}
