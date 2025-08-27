
// Minimal JS for mobile nav toggle only
const toggle = document.querySelector('.nav-toggle');
const list = document.querySelector('.nav-list');
if (toggle && list) {
  toggle.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
