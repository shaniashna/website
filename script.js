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
        servicesGrid.innerHTML = c.services.map(service => {
            let featuresHtml = '';
            if (service.features && service.features.length > 0) {
                featuresHtml = `<ul class="service-features">
                    ${service.features.map(f => `<li>${f}</li>`).join('')}
                </ul>`;
            }

            return `
            <div class="card">
                <h3>${service.title}</h3>
                <p class="service-description">${service.description}</p>
                ${featuresHtml}
            </div>
            `;
        }).join('');
    }

    // --- Services Disclaimer ---
    const disclaimerEl = document.getElementById('services-disclaimer');
    if (disclaimerEl && c.servicesDisclaimer) {
        disclaimerEl.innerText = c.servicesDisclaimer;
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
            // Clean phone number for WhatsApp URL: remove (0) and non-digits
            const waNumber = c.contact.phone.replace('(0)', '').replace(/[^0-9]/g, '');
            html += `<a href="https://wa.me/${waNumber}" class="contact-link" target="_blank">WhatsApp</a>`;
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
