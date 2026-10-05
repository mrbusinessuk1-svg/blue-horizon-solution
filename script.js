const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  // IMPORTANT: Replace YOUR_EMAIL@example.com in index.html first.
  const form = new FormData(this);
  const email = 'YOUR_EMAIL@example.com';
  const subject = encodeURIComponent('Blue Horizon Solution Inquiry - ' + form.get('service'));
  const body = encodeURIComponent(
    'Name: ' + form.get('name') + '\n' +
    'Email: ' + form.get('email') + '\n' +
    'Service: ' + form.get('service') + '\n\n' +
    'Message:\n' + form.get('message')
  );

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
