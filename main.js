// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.transition = 'opacity 0.6s';
  loader.style.opacity = 0;
  setTimeout(() => loader.style.display = 'none', 600);
});

// Tema oscuro / claro persistente
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if(savedTheme) body.dataset.theme = savedTheme;
if(body.dataset.theme === 'light') themeToggle.textContent='☀️';

themeToggle.addEventListener('click', () => {
  if(body.dataset.theme==='dark'){
    body.dataset.theme='light';
    localStorage.setItem('theme','light');
    themeToggle.textContent='☀️';
  } else {
    body.dataset.theme='dark';
    localStorage.setItem('theme','dark');
    themeToggle.textContent='🌙';
  }
});

// Chatbot simple
function respond(){
  let input = document.getElementById('userInput');
  let text = input.value.toLowerCase();
  let output = '';

  if(text.includes('precio')){
      output='Los precios dependen del proyecto, escríbeme y te doy un presupuesto personalizado.';
  } else if(text.includes('servicio')){
      output='Ofrezco Producción, FPV/Drones, Edición y Color. Cada proyecto es único.';
  } else if(text.includes('tiempo')){
      output='El tiempo de entrega depende de la complejidad del proyecto, normalmente 1-4 semanas.';
  } else{
      output='Gracias por tu mensaje, te responderé pronto.';
  }

  document.getElementById('botResponse').innerText = output;
  input.value = '';
}

// GSAP Animaciones
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('section').forEach(sec => {
  gsap.from(sec,{
    y:30,
    opacity:0,
    duration:1.1,
    ease:'power3.out',
    scrollTrigger:{
      trigger:sec,
      start:'top 85%',
      toggleActions:'play none none reverse'
    }
  });
});
