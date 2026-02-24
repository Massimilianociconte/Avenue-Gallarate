/**
 * Footer Component
 * Renders the shared footer across all pages.
 */

export const footer = {
    init() {
        const footerEl = document.querySelector('.site-footer');
        if (!footerEl) return;

        // Check if footer is already populated (optional, but good for main entry point)
        if (footerEl.querySelector('.footer-content')) return;

        const currentYear = new Date().getFullYear();

        // Define paths for payment icons - assuming absolute or relative to root
        // Note: The original HTML used full URLs for some and local for others?
        // Let's use the exact HTML from collection.html

        footerEl.innerHTML = `
        <div class="footer-content">
            <div class="footer-brand">Avenue M.</div>
            <p class="footer-tagline">Stile, eleganza e tendenza</p>
            <div class="footer-links">
                <a href="collection.html?gender=woman">Donna</a>
                <a href="collection.html?gender=man">Uomo</a>
                <a href="contacts.html">Contatti</a>
            </div>
            <div class="footer-payments">
                <p class="footer-payments-label">Metodi di pagamento</p>
                <div class="footer-payment-icons">
                    <img src="https://www.efarma.com/static/version1762243823/frontend/Interactiv4/efarmaHyva/it_IT/svg/footer/ico-mastercard.svg"
                        loading="lazy" width="68" height="48" alt="Mastercard">
                    <img src="https://www.efarma.com/static/version1762243823/frontend/Interactiv4/efarmaHyva/it_IT/svg/footer/ico-visa.svg"
                        loading="lazy" width="68" height="48" alt="Visa">
                    <img src="https://www.efarma.com/static/version1762243823/frontend/Interactiv4/efarmaHyva/it_IT/svg/footer/ico-amex.svg"
                        loading="lazy" width="68" height="48" alt="Amex">
                    <img src="https://www.efarma.com/static/version1762243823/frontend/Interactiv4/efarmaHyva/it_IT/svg/footer/ico-paypal.svg"
                        loading="lazy" width="68" height="48" alt="Paypal">
                    <img src="https://www.efarma.com/static/version1762243823/frontend/Interactiv4/efarmaHyva/it_IT/svg/footer/ico-gpay.svg"
                        loading="lazy" width="68" height="48" alt="G-pay">
                    <img src="https://www.efarma.com/media/wysiwyg/klarna.png" loading="lazy" width="68" height="48"
                        alt="Klarna" class="payment-icon-light">
                    <img src="https://www.efarma.com/static/version1762243823/frontend/Interactiv4/efarmaHyva/it_IT/svg/footer/ico-scalapay.svg"
                        loading="lazy" width="68" height="48" alt="Scalapay">
                    <img src="https://www.efarma.com/static/version1762243823/frontend/Interactiv4/efarmaHyva/it_IT/svg/footer/ico-satispay.svg"
                        loading="lazy" width="68" height="48" alt="Satispay">
                    <img src="https://www.efarma.com/static/version1762243823/frontend/Interactiv4/efarmaHyva/it_IT/svg/footer/ico-applepay.svg"
                        loading="lazy" width="68" height="48" alt="Apple Pay" class="payment-icon-light">
                </div>
            </div>
            <p class="footer-copy">© ${currentYear} Avenue M. Tutti i diritti riservati.</p>
            <p>Realizzato da <a href="https://webnovis.com">WebNovis</a> — 
Agenzia web a Rho, Milano</p>
<p>Vuoi un sito professionale? 
<a href="https://webnovis.com/contatti">Contattaci</a></p>
            <div class="webnovis-credit">
                <a href="https://www.webnovis.com" target="_blank" rel="noopener noreferrer">
                    <span class="credit-label">Creato da</span>
                    <span class="webnovis-name">Web Novis</span>
                </a>
            </div>
        </div>
        `;
    }
};

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
    footer.init();
});
