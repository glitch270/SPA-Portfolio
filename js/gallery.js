/* ==========================================================================
   SPA-Portfolio: Lightbox Gallery Modal
   (js/gallery.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Create modal elements dynamically if not already in DOM
    let modal = document.querySelector('.modal-overlay');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-container">
                <button class="modal-close" aria-label="Close modal">&times;</button>
                <div class="modal-img-wrap">
                    <img src="" alt="Featured student artwork preview" id="modalImg" loading="lazy" />
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const modalImg = modal.querySelector('#modalImg');
    const closeBtn = modal.querySelector('.modal-close');

    // Attach click events to all cards with .work-thumb-card or .lightbox-trigger
    const triggers = document.querySelectorAll('.work-thumb-card, .lightbox-trigger');
    triggers.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const img = card.querySelector('img');
            
            if (img) {
                modalImg.src = img.src;
                modalImg.alt = img.alt || 'Artwork Preview';
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (modalImg) modalImg.src = '';
        }, 200);
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

