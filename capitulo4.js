const menu=document.getElementById('menu');
const menu_opciones=document.getElementById('menu_opciones');

const cilindro_menu=document.getElementById('cilindro_menu');





//mostrar pdf

const button1 = document.getElementById('btn_riesgo1');
const pdfContainer1 = document.getElementById('frame_riesgo1');

button1.addEventListener('click', ()=>{
   mostrarPDF(pdfContainer1);

})

function mostrarPDF(pdfContenedor){
   
   if (pdfContenedor.style.display === 'none' || pdfContenedor.style.display === '') {
      pdfContenedor.style.display = 'flex'; // Muestra el contenedor
  } else {
     pdfContenedor.style.display = 'none'; // Oculta el contenedor
  }


}










menu.addEventListener('click', ()=>{
     if(menu_opciones.classList.contains('visible')){
        menu_opciones.classList.remove('visible');
        cilindro_menu.src='Imagenes/menu.png';
     }else{
        menu_opciones.classList.add('visible');
        cilindro_menu.src='Imagenes/close.png';

     }
})

function toggleAccordion1(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById(`icon-${id}`);
 
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
 }