function renderPokemon(data) {

  var main = document.getElementsByTagName("main")[0];
  
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

var cantPokemones = prompt("¿ Cuantos pokemones deseas mostrar ?");

for (var i = 1; i <= cantPokemones; i++) {
  //https://pokeapi.co/api/v2/{endpoint}
  var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
   getPokemon(url);

}


