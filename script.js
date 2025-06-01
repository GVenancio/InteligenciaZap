// Script para ativar/desativar o acordeão das FAQs
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
      const openItem = document.querySelector('.accordion-item.active');

      if (openItem && openItem !== item) {
        openItem.classList.remove('active');
      }

      item.classList.toggle('active');
    });
  });
});

// Menu responsivo moderno
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('show');
      menuToggle.classList.toggle('active');
    });
    // Fecha o menu ao clicar em um link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        menuToggle.classList.remove('active');
      });
    });
  }
});