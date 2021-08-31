function renderPokemon(data) {
  //var contenedor = document.getElementsByTagName("main");
  //contenedor.appendChild(element);

  var template = document.getElementById("element");
  var element = template.cloneNode(true);
  var main = document.getElementsByTagName("main")[0];
  main.appendChild(element);

  var image = document.createElement("img");
  image.src = data.sprites.front_default;
  element.appendChild(image);

  var h3 = document.createElement("h3");
  h3.textContent = data.name;
  element.appendChild(h3);
}

//https://pokeapi.co/api/v2/{endpoint}

function getPokemon(url) {
  fetch(url)
    .then((response) => response.json()) //Respuesta a JSON
    .then((data) => {
      renderPokemon(data); //funcion que procesa la Rta
      /*console.log(element);
    element.innerHTML = `
    <img src="${data.sprites.front_default}" class="poke_card_image">
    <h3 class="poke_card_nombre" >${data.name}</h3>
    <p class="poke_card_description" >Lorem ipsun dolor set</p>
    `;*/
    })
    .catch((error) => console.log(error));
}

var cantPokemones = prompt("¿ Cuantos pokemones deseas mostrar?");

for (var i = 1; i > cantPokemones; i++) {
  var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
  console.log(url);
  getPokemon(url);
}
