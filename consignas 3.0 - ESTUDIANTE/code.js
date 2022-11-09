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
  do {
    datosPersona.nombre = prompt('Ingrese su nombre:')
  } while (datosPersona.nombre === null || datosPersona.nombre === '' || datosPersona.nombre.length < 3 || !isNaN(datosPersona.nombre));
  do { datosPersona.edad = 2022 - (prompt('Ingrese el año en que nacio: ')); }
  while (datosPersona.edad === null || datosPersona.edad === '' || !Number(datosPersona.edad));
  do {
    datosPersona.ciudad = prompt('Ingrese la ciudad donde vive: ')
  } while (datosPersona.ciudad === null || datosPersona.ciudad === '' || datosPersona.ciudad.length < 3 || !isNaN(datosPersona.ciudad));

  datosPersona.interesPorJs = (confirm('Le interesa JavaScript?')) ? 'Si' : 'No';

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let spanNombre = document.querySelector('#nombre');
  spanNombre.innerText = datosPersona.nombre;
  let spanEdad = document.querySelector('#edad');
  spanEdad.innerText = datosPersona.edad;
  let spanCiudad = document.querySelector('#ciudad');
  spanCiudad.innerText = datosPersona.ciudad;
  let spanJs = document.querySelector('#javascript');
  spanJs.innerText = datosPersona.interesPorJs;

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila")

  if (document.querySelector('.caja')) return
  let html = '';
  listado.forEach(tarjetas => {
    html +=
      `<div class="caja">
       <img src= "${tarjetas.imgUrl}" alt=${tarjetas.lenguajes}">
       <p> Lenguajes:  ${tarjetas.lenguajes} </p>
       <p> Bimestre:  ${tarjetas.bimestre} </p>
  </div>`

  });
  fila.innerHTML = html;
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
sitio.classList.toggle('dark');
  
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let visualizar = document.querySelector("#sobre-mi")
document.addEventListener('keydown',(e) =>{
  let tecla = e.key;
  if(tecla.toUpperCase() == 'F'){
    visualizar.classList.toggle('oculto')
  }
})

