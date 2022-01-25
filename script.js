// Menu de redes sociais 
function mostrar(){
  let mostrarRedes = document.querySelector('.sociais')
  let rotate = document.querySelector('.outline')
  mostrarRedes.classList.toggle('active')
  rotate.classList.toggle('active')
}

// Mostrar foto do cachorro ou gato
// Mostrar área para escolher o tamanho do animal

function cachorro(){
  let cachorro = document.querySelector('.animal-image')
  let mostrarCachorro = document.querySelector('.tamanho-cachorro')
  let tirarGato = document.querySelector('.tamanho-gato')
  mostrarCachorro.classList.add('box')
  tirarGato.classList.remove('box-2')
  cachorro.classList.add('cachorro')
  cachorro.classList.remove('gato')
}

function gato(){
  let gato = document.querySelector('.animal-image')
  let mostrarGato = document.querySelector('.tamanho-gato')
  let tirarCachorro = document.querySelector('.tamanho-cachorro')
  mostrarGato.classList.add('box-2')
  tirarCachorro.classList.remove('box')
  gato.classList.add('gato')
  gato.classList.remove('cachorro')
}

// Trocar tamanho do cachorro

function trocarCachorro(filename, tamanhocachorro){
  document.querySelector('.tamanhoCachorro').setAttribute('src', 'assets/' + filename)
  document.querySelector('.tamanhoCachorro').setAttribute('data-cachorro', tamanhocachorro)
}

// Trocar tamanho do gato
function trocarGato(filename, tamanhoGato){
  document.querySelector('.tamanhoGato').setAttribute('src', 'assets/' + filename)
  document.querySelector('.tamanhoGato').setAttribute('data-gato', tamanhoGato)
}

// Botão enviar
function enviar(){
  let apagar = document.querySelector('.form-box')
  let mensagem = document.querySelector('.mensagem')
  apagar.classList.add('clicado')
  mensagem.classList.add('clicado')
}