document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu-button');
const nav = document.querySelector('header nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menu');
}));
const toast = document.querySelector('.demo-toast');
let toastTimer;
document.querySelectorAll('[data-demo-action]').forEach(button => button.addEventListener('click', () => {
  toast.textContent = button.dataset.demoAction === 'mapa'
    ? 'Na versão final, este botão abre a localização do salão no mapa.'
    : 'Na versão final, este botão inicia uma conversa com o WhatsApp do salão.';
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 5000);
}));
