    document.addEventListener('DOMContentLoaded', () => {
      const navButtons = document.querySelectorAll('.nav-btn');
      const sections = document.querySelectorAll('.section-content');

      navButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Aggiorna attivo
          navButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          // Mostra sezione corretta
          const target = button.getAttribute('data-section');
          sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === target) {
              section.classList.add('active');
            }
          });
        });
      });
    });