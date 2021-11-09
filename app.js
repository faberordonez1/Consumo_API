let pagina = 1;/**parametro URL API */
const contenedor = document.querySelector(".contenedor");/**Captura main contenedor */
const btnAnterior = document.querySelector("#btnAnterior");
const btnSiguiente = document.querySelector("#btnSiguiente");


/**Video URL https://youtu.be/a2cQ7YLyjzE  */

/**Paginador */
btnSiguiente.addEventListener('click', ()=>{
  if(pagina < 1000){/**La API retorna maximo */
    pagina +=1;
    cargarPeliculas();
    limpiarContenedor();
  }
});

btnAnterior.addEventListener('click',()=>{
  if(pagina>1){
    pagina-=1;
    cargarPeliculas();
    limpiarContenedor();
  }
})

const cargarPeliculas =  async() =>{
    //const url =  https://api.themoviedb.org/3/movie/550?api_key=e1ee3a585e3ff2efd9d0a990db15e813&language=es-MX
    const url = "https://api.themoviedb.org/3/movie/popular";
  try {
      const respuesta = await fetch (url + `?api_key=e1ee3a585e3ff2efd9d0a990db15e813&language=es-MX&page=${pagina}`);
      //console.log(respuesta);
      //verifica codigo respuesta
      if(respuesta.status === 200){
        const datos = await respuesta.json();/*convertido a JSON*/
        datos.results.forEach(item => {/**recorre la rta */
          renderMovies(item);
        });

        //console.log(datos);
      }else if (respuesta.status === 401){
        console.log ("Pusiste la llave mal")
      }else if(respuesta.status === 404){
        console.log("La pelicula no existe");
      }else{
        console.log("Error, no sabemos que pasó")
      }
    
  } catch (error) {
    console.log(error);
  }

}
cargarPeliculas();

function renderMovies(datos) {
  
  var card = document.createElement("div");
  card.setAttribute('class','pelicula');
  contenedor.appendChild(card);
  
  var image = document.createElement("img");
  image.setAttribute('class','poster');
  const urlBase ="https://image.tmdb.org/t/p/w500/";
  image.src = urlBase + datos.poster_path;
  card.appendChild(image);
  
  var h3 = document.createElement("h3");
  h3.setAttribute('class','title');
  h3.textContent = datos.title;
  card.appendChild(h3);
}

function limpiarContenedor(){
  var contenedor = document.querySelector(".contenedor");
  //const main = document.getElementsByClassName("pelicula");
  //contenedor.removeChild(main);

  for(let i = 0; i < 20;i++ ){
    var card = document.querySelector(".pelicula");
    contenedor.removeChild(card);
    //const main = document.getElementsByClassName("pelicula")[0];
    //contenedor.removeChild(main);
  }
}

/*window.onload = function() {
  var cantPokemones = prompt("¿ Cuantos pokemones deseas mostrar ?");
};*/

