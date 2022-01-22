function mostrar(){
  let mostrarRedes = document.querySelector('.sociais')
  let rotate = document.querySelector('.outline')
  mostrarRedes.classList.toggle('active')
  rotate.classList.toggle('active')
}
function trocarAnimal(filename, animalname){
  document.querySelector('.imagem').setAttribute('src', 'assets/' + filename)
  document.querySelector('.imagem').setAttribute('data-animal' + animalname)
  if(filename == 'Cachorro'){
    
  }
}
function trocarPorte(filename, animalporte){
  document.querySelector('.porte-animal').setAttribute('src', 'assets/' + filename)
  document.querySelector('porte-animal').setAttribute('data-porte' + animalporte)
}