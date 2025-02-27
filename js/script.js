// Efeito de escrita ---------------------------
function typeWriter(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML='';
  textoArray.forEach((letra, i) => {
    setTimeout(() =>  elemento.innerHTML += letra, 100 * i);

});
}

const apresentacao = document.querySelector('.apresentacao-1')
typeWriter(apresentacao);
typeWriter(document.querySelector('.curiosidade-titulo'));
// Final de Efeito de escrita ---------------------------


// Botão saiba Mais ---------------------------

const readMoreBtn = document.querySelector('.btn-saiba-mais');
const text = document.querySelector('.saiba-mais-caixa');
const icon = readMoreBtn.querySelector('i'); 
const btnText = readMoreBtn.querySelector('.btn-text');

readMoreBtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more'); 

    if (icon.classList.contains('bx-down-arrow-alt')) {
      icon.classList.remove('bx-down-arrow-alt');
      icon.classList.add('bx-up-arrow-alt');
      btnText.textContent = 'Mostrar menos';
  } else {
      icon.classList.remove('bx-up-arrow-alt');
      icon.classList.add('bx-down-arrow-alt');
      btnText.textContent = 'Mostrar mais';
  }
});
// Final do botão saiba Mais ---------------------------


// Link Contato ---------------------------

function enviarWhats(event) {
  event.preventDefault()

  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá! Me chamo ${nome}, ${mensagem}`
  const msgFormatada = encodeURIComponent(texto)

  const url = `https://wa.me/5534996999306?text=${msgFormatada}`

  window.open(url, '_blank')
}
// Final do Link Contato ---------------------------

// Botão Dark mode e Light mode ---------------------------
let lightmode = localStorage.getItem('lightmode')
const themeSwitch = document.getElementById('theme-switch')

const enableLightmode = () => {
  document.body.classList.add('lightmode')
  localStorage.setItem('lightmode', 'active')
}

const disableLightmode = () => {
  document.body.classList.remove('lightmode')
  localStorage.setItem('lightmode', null)
}

if(lightmode === "active") enableLightmode()


themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem('lightmode')
  lightmode !== "active" ? enableLightmode() : disableLightmode()
})

const menuIcon = document.querySelector('#menu-icon');
const taskbar = document.querySelector('.taskbar');

menuIcon.addEventListener('click', () => {
    taskbar.classList.toggle('active'); 
});
