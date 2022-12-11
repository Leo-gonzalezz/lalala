//const input = document.querySelector("input")
//console.log(input.value)
//manipulacion del dom primero defino la variable con const luego puedo ejecutar metodos 
//para modificar sus valores 
//h2.innerHTML = 'patito'
//h2.innerText = 'perrito' 
//agrego y elimino clases 
//h2.classList.add('verde');
//h2.classList.remove('rojo');

const h2 = document.querySelector('h2');
const img = document.createElement('img');
img.setAttribute('src','https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/36bdc5ea4443cd8e42f22ec7d3884cbb.jpe');
h2.appendChild(img);
//aca agregamos una imagen :) 

