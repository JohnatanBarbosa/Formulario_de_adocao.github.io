function ativarMenu(){
  let btnMenu = document.querySelector('.btn-menu')
  let menu = document.querySelector('.box-menu')
  let mostrarRedes = document.querySelector('.sociais')
  let rotate = document.querySelector('.outline')
  let opacity = document.querySelector('ul li')
  opacity.classList.toggle('active')
  rotate.classList.remove('active')
  mostrarRedes.classList.remove('active')
  menu.classList.toggle('active')
  btnMenu.classList.toggle('active')
}