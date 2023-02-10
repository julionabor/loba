
//Menu-Hamburguer (open/closed)
const menu= document.querySelector('.menu');
const NavMenu = document.querySelector('.tab-menu');
menu.addEventListener('click', ()=> {
  menu.classList.toggle('activo');
  NavMenu.classList.toggle('activo');
})
