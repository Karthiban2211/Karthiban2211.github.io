// Smooth Scroll for navigation links
document.querySelectorAll('nav a, button').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Modal Popup for project details
document.querySelectorAll('.project-item a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Create modal structure
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3>${this.closest('.project-item').querySelector('h3').textContent}</h3>
                <p>Here you can add more detailed information about the project. Customize this text as needed for each project.</p>
            </div>
        `;
        document.body.appendChild(modal);

        // Close the modal when clicking the close button or outside the content
        const closeModal = () => {
            modal.remove();
        };
        modal.querySelector('.close').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    });
});
