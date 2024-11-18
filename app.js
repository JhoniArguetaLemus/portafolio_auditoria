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



//capitulo III


//carrousel

const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        // Función para mostrar un slide específico
        function showSlide(index) {
            items.forEach((item, i) => {
                item.classList.remove('active');
                if (i === index) {
                    item.classList.add('active');
                }
            });
        }

        // Control de los botones "Anterior" y "Siguiente"
        document.getElementById('prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        });

        document.getElementById('next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        });

        // Opcional: Auto-rotación del carrusel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        }, 5000);

//mostrar pdf

const button = document.getElementById('mostrar_pdf1');
const pdfContainer = document.getElementById('divFrame1');
      
      button.addEventListener('click', ()=>{
 
         mostrarPDF(pdfContainer)

      })


const button2 = document.getElementById('mostrar_pdf2');
const pdfContainer2 = document.getElementById('divFrame2');

button2.addEventListener('click', ()=>{
   mostrarPDF(pdfContainer2);
   
})

const button3 = document.getElementById('mostrar_pdf3');
const pdfContainer3 = document.getElementById('divFrame3');

button3.addEventListener('click', ()=>{
   mostrarPDF(pdfContainer3);
})

function mostrarPDF(pdfContenedor){
   
   if (pdfContenedor.style.display === 'none' || pdfContenedor.style.display === '') {
      pdfContenedor.style.display = 'flex'; // Muestra el contenedor
  } else {
     pdfContenedor.style.display = 'none'; // Oculta el contenedor
  }


}



//acordion

function toggleAccordion1(id) {
   const content = document.getElementById(id);
   const icon = document.getElementById(`icon-${id}`);

   content.classList.toggle('hidden');
   icon.classList.toggle('rotate-180');
}


function toggleAccordion2(id) {
   const content = document.getElementById(id);
   const icon = document.getElementById(`icon-${id}`);

   content.classList.toggle('hidden');
   icon.classList.toggle('rotate-180');
}