// script.js

document.addEventListener('DOMContentLoaded', () => {
    renderSite();
    setupMobileMenu();
});

function renderSite() {
    if (typeof siteConfig === 'undefined') {
        console.error('Config file not loaded!');
        return;
    }

    const c = siteConfig;

    // --- General Info ---
    updateText('nav-logo', c.businessName);
    updateText('footer-business-name', c.businessName);
    updateText('hero-title', c.businessName);
    updateText('hero-tagline', c.tagline);
    updateText('hero-description', c.description);
    updateText('year', new Date().getFullYear());

    // --- Services ---
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid && c.services) {
        servicesGrid.innerHTML = c.services.map(service => `
            <div class="card">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `).join('');
    }

    // --- Use Cases ---
    const useCasesGrid = document.getElementById('use-cases-grid');
    if (useCasesGrid && c.useCases) {
        useCasesGrid.innerHTML = c.useCases.map(item => `
            <div class="card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    // --- Testimonials ---
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer && c.testimonials) {
        testimonialsContainer.innerHTML = c.testimonials.map(t => `
            <div class="testimonial">
                <p class="quote">"${t.quote}"</p>
                <p class="author">— ${t.author}</p>
            </div>
        `).join('');
    }

    // --- Contact ---
    const contactContainer = document.getElementById('contact-info');
    if (contactContainer && c.contact) {
        let html = '';
        if (c.contact.email) {
            html += `<a href="mailto:${c.contact.email}" class="contact-link">Email Us</a>`;
        }
        if (c.contact.phone) {
            html += `<a href="tel:${c.contact.phone}" class="contact-link">Call ${c.contact.phone}</a>`;
        }
        contactContainer.innerHTML = html;
    }
}

function updateText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text || '';
}

function setupMobileMenu() {
    const btn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}
