const menu=document.getElementById('menu');
const menu_opciones=document.getElementById('menu_opciones');

const cilindro_menu=document.getElementById('cilindro_menu');




menu.addEventListener('click', ()=>{
     if(menu_opciones.classList.contains('visible')){
        menu_opciones.classList.remove('visible');
        cilindro_menu.src='Imagenes/menu.png';
     }else{
        menu_opciones.classList.add('visible');
        cilindro_menu.src='Imagenes/close.png';

     }
})


