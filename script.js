document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('mobile-slideout').classList.toggle('show');
});

document.querySelectorAll('#mobile-slideout .nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-slideout').classList.remove('show');
  });
});
