try {
  const URLPokemon = "https://pokeapi.co/api/v2/pokemon/1";
  const randomIMG = document.querySelector(".random-image");
  const listaIMG = [];

  const fetchData = async () => {
    //URL de cada pokemon mediante bucle for
    for (let index = 1; index < 152; index++) {
      const largoURL = URLPokemon.length;
      const URLSinNumero = URLPokemon.slice(0, largoURL - 1);
      const nuevaURLPokemon = URLSinNumero + index;

      const res = await fetch(nuevaURLPokemon);
      const pokemon = await res.json();

      const URLNoNulas = Object.values(pokemon.sprites).filter(url => typeof url === 'string' && url !== null);
      const urlAleatoria = URLNoNulas[Math.floor(Math.random() * URLNoNulas.length)];

      listaIMG.push(urlAleatoria)
    }

    let urlAleatoria = listaIMG[Math.floor(Math.random() * listaIMG.length)];
    randomIMG.src = urlAleatoria
  };

  fetchData();
} catch (error) {
  console.error("Error al obtener el POKEMON:", error);
}