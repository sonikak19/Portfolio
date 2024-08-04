function toggleNavbar() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}

document.getElementById('scrollButton').addEventListener('click', function() {
  document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
});

function downloadResume() {
  const link = document.createElement('a');
  link.href = 'Resume.pdf';
  link.download = 'Resume.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}