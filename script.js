document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');

  function showSection(id) {
    sections.forEach(section => {
      section.classList.toggle('active', section.id === id);
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  }

  // On load
  const initial = location.hash.slice(1) || 'home';
  showSection(initial);

  // On click
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      history.pushState(null, '', `#${id}`);
      showSection(id);
    });
  });

  // Handle back/forward buttons
  window.addEventListener('popstate', () => {
    const id = location.hash.slice(1) || 'home';
    showSection(id);
  });
});
