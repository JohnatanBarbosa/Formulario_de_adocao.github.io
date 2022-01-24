// Menu de redes sociais 
function mostrar(){
  let mostrarRedes = document.querySelector('.sociais')
  let rotate = document.querySelector('.outline')
  mostrarRedes.classList.toggle('active')
  rotate.classList.toggle('active')
}

// Mostrar foto do cachorro ou gato

function cachorro(){
  let cachorro = document.querySelector('.animal-image')
  cachorro.classList.add('cachorro')
  cachorro.classList.remove('gato')
}

function gato(){
  let gato = document.querySelector('.animal-image')
  gato.classList.add('gato')
  gato.classList.remove('cachorro')
}