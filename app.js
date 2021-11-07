const cargarPeliculas =  async() =>{
    //const url =  https://api.themoviedb.org/3/movie/550?api_key=e1ee3a585e3ff2efd9d0a990db15e813&language=es-MX
    const url = "https://api.themoviedb.org/3/movie/popular"
  try {
    const respuesta = await fetch (url + "?api_key=e1ee3a585e3ff2efd9d0a990db15e813&language=es-MX");

    //console.log(respuesta);
    //verifica codigo respuesta
    if(respuesta.status ===200){
      const datos = await respuesta.json();/*convertido a JSON*/
      console.log(datos);
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


function renderPokemon(data) {

  var main = document.getElementsByTagName("main")[0];/**Captura main contenedor */
  
  var card = document.createElement("div");
  main.appendChild(card);

  var image = document.createElement("img");
  image.src = data.sprites.front_default;
  card.appendChild(image);

  var h3 = document.createElement("h3");
  h3.textContent = data.name;
  card.appendChild(h3);
  
  /*console.log(element);
  card.innerHTML = `
  <img src="${data.sprites.front_default}" class="poke_card_image">
  <h3 class="poke_card_nombre" >${data.name}</h3>
  <p class="poke_card_description" >Lorem ipsun dolor set</p>
  `;*/
}

function getPokemon(url) {
  fetch(url)
    .then((response) => response.json()) //Respuesta a JSON
    .then((data) => {
      renderPokemon(data); //funcion que procesa la Rta
    })
    .catch((error) => console.log(error));
}

/*window.onload = function() {
  var cantPokemones = prompt("¿ Cuantos pokemones deseas mostrar ?");
  
  for (var i = 1; i <= cantPokemones; i++) {
    //https://pokeapi.co/api/v2/{endpoint}
    var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
     getPokemon(url);
  }
};*/

