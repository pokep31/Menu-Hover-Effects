// Separa cada letra del <a> en un <span>
let text = document.querySelectorAll('ul li a').forEach(text => {
  text.innerHTML = text.innerText.split('').map((letters,i) => `<span style="transition-delay:${i*40}ms;">${letters}</span>`).join('')
})


// Función para mover el cursor previamente creado
let cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
})