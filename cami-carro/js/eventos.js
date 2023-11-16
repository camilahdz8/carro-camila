var carro = document.querySelector('.auto')
var fondo = document.querySelector('.padre')
var llanta1 = document.querySelector('.wheels')
var llant2 = document.querySelector('.wheels2')
var humo = document.querySelector('.sprites')
var luz = document.querySelector('.luz')


carro.addEventListener('click', animaciones)

function animaciones(){
    fondo.classList.add('fondo_animado')
    llanta1.classList.add('llantas_animadas')
    llant2.classList.add('llantas_animadas')
    humo.classList.remove('oculto')
    luz.classList.remove('brillo')
}