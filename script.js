'use strict';

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'メニューを開く');
  mobileNav.hidden = true;
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const reservationDialog = document.querySelector('#reservation-dialog');
document.querySelectorAll('[data-reservation]').forEach(button => {
  button.addEventListener('click', () => reservationDialog.showModal());
});
reservationDialog.querySelectorAll('.dialog-close, .dialog-done').forEach(button => {
  button.addEventListener('click', () => reservationDialog.close());
});
reservationDialog.addEventListener('click', event => {
  const bounds = reservationDialog.getBoundingClientRect();
  if (event.target === reservationDialog &&
      (event.clientX < bounds.left || event.clientX > bounds.right ||
       event.clientY < bounds.top || event.clientY > bounds.bottom)) {
    reservationDialog.close();
  }
});
