/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre = '';
  let edad = 0;
  let ciudad='';
  let interesPorJs='';
  do{
    nombre = prompt('Ingresa tu nombre:');
    edad = 2022 - parseInt(prompt('Ingresa el año en que naciste: '));
    ciudad = prompt("En que ciudad vivis: ");
    interesPorJs = (confirm('te interesa javascript?')) ? 'Si' : 'No';

  }while( nombre === null || nombre === '' || nombre.length < 3 ||  !isNaN(nombre) );
        (edad === null || edad==='' || edad.length<3 || Number.isInteger(edad));
        ( ciudad === null || ciudad === '' || ciudad.length < 3 ||  !isNaN(ciudad) );

  
 datosPersona = {nombre, edad, ciudad, interesPorJs}


}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let usuarioNombre = document.querySelector('#nombre');
  usuarioNombre.innerText = datosPersona.nombre;
  let usuarioEdad = document.querySelector('#edad');
  usuarioEdad.innerText = datosPersona.edad;
  let usuarioCiudad = document.querySelector('#ciudad');
  usuarioCiudad.innerText = datosPersona.ciudad;
  let usuarioJs = document.querySelector('#javascript');
  usuarioJs.innerText = datosPersona.interesPorJs;  


}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
 let html = '';
 listado.forEach(tarjetas => {
  html +=
  `<div class="caja">
       <img src= "${tarjetas.imgUrl}" alt=${tarjetas.lenguajes}">
       <p> Lenguajes:  ${tarjetas.lenguajes} </p>
       <p> Bimestre:  ${tarjetas.bimestre} </p>
  </div>`
  
 }); 
 let fila = document.querySelector("#fila")
  fila.innerHTML = html;



}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

