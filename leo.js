/*//const input = document.querySelector("input")
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
*/
/*const input1= document.querySelector('#calculate1')
const input2= document.querySelector('#calculate2')
const boton1= document.querySelector('#btnCalculate')
const resultConcatenation = document.querySelector('#result')
const formAction = document.querySelector('#formId')
formAction.addEventListener('submit', sumarInputValues);

function sumarInputValues (event) {
    event.preventDefault();
   const sumaInputs = input1.value + input2.value;
    resultConcatenation.innerText = "resultado =" + sumaInputs;
}
*/
const buton1 = document.querySelector('#button1')
const input1 = document.querySelector('#userName')

buton1.addEventListener('onClick',userNameresult)

function userNameresult(){
    return console.log('fuck')
}