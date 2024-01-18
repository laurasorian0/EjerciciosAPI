// Importar API Personajes.
const personajesGOT = async () => {
  try {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const personajes = await res.json();
    console.log(personajes)

    //Seleccionar el DIV donde van a estar metidos los personajes y las imagenes
    const listaPersonajes = document.getElementById("character-list");
    const imagenPersonaje = document.querySelector(".character-image");
    console.log(imagenPersonaje)

    //crear un option para cada uno de los personajes con su nombre y añadirle un atributo con la url de la imagen
    for (const personaje of personajes) {
      const optionSelect = document.createElement("option")
      optionSelect.innerText = personaje.fullName
      optionSelect.setAttribute("url-img", personaje.imageUrl);
      listaPersonajes.appendChild(optionSelect)
    }
    //Coger con un evento de escucha el personaje del select y pintar su imagen.
    listaPersonajes.addEventListener("change", (evento) => {
      const selectedOption = evento.target.selectedOptions[0];
      const urlImagen = selectedOption.getAttribute("url-img");
      console.log(urlImagen);
      imagenPersonaje.src = urlImagen;
      console.log(imagenPersonaje.src)


    })

  } catch (error) {
    console.error("Error al obtener personajes:", error);
  }
}


//Mediante una función, coger con un evento de escucha el personaje del select y pintar su imagen.


personajesGOT();
