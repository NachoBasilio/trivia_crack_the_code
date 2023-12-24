const cuestionario = [
    {
      pregunta: "¿Quién es el protagonista de 'Las chicas superpoderosas'?",
      opciones: [
        { letra: "a", texto: "Bombón", correcta: false },
        { letra: "b", texto: "Burbuja", correcta: false },
        { letra: "c", texto: "Bellota", correcta: true }
      ],
      img: "https://resizer.glanacion.com/resizer/v2/un-fan-de-las-chicas-superpoderosas-le-pidio-a-la-U3G2NM44URHSTBFWIYKFNCGRXM.png?auth=56388c4365447fd6b0857ebf9944bbc1b01810f2725fc600200cea2d8b9c9ba2&width=880&height=586&quality=70&smart=true" // Opción c es la correcta (Bellota)
    },
    {
      pregunta: "¿Cuál es el nombre del niño aventurero en 'Un show más'?",
      opciones: [
        { letra: "a", texto: "Mordecai", correcta: true },
        { letra: "b", texto: "Rigby", correcta: false },
        { letra: "c", texto: "Gumball", correcta: false }
      ],
      img: "https://heraldodemexico.com.mx/u/fotografias/m/2021/9/22/f1280x720-423160_554835_5050.jpg" // Opción a es la correcta (Mordecai)
    },
    {
      pregunta: "¿Cómo se llama el perro parlante en 'Las maravillosas desventuras de Flapjack'?",
      opciones: [
        { letra: "a", texto: "Jake", correcta: false },
        { letra: "b", texto: "Rex", correcta: false },
        { letra: "c", texto: "Capitán", correcta: true }
      ],
      img: "https://1.bp.blogspot.com/-cwJEbTaoXCA/YOhkDoVxZYI/AAAAAAAAA48/354jPZEJJi4LX4ogmcajHD0z8xNJtI0ZwCLcBGAsYHQ/s1280/flapjack-latino-online.jpg" // Opción c es la correcta (Capitán)
    },
    {
      pregunta: "¿Qué animal es 'Coraje, el perro cobarde'?",
      opciones: [
        { letra: "a", texto: "Un perro", correcta: true },
        { letra: "b", texto: "Un gato", correcta: false },
        { letra: "c", texto: "Un conejo", correcta: false }
      ],
      img: "https://www.clarin.com/2022/01/06/tj49ZwaCn_2000x1500__1.jpg" // Opción a es la correcta (Un perro)
    },
    {
      pregunta: "¿Quién es el hermano de Dee Dee en 'El laboratorio de Dexter'?",
      opciones: [
        { letra: "a", texto: "Mandark", correcta: false },
        { letra: "b", texto: "Dexter", correcta: true },
        { letra: "c", texto: "No tiene hermanos", correcta: false }
      ],
      img: "https://resizer.glanacion.com/resizer/v2/el-laboratorio-de-dexter-fue-una-de-las-series-3DI2N3K62ZF33MRY6LEKYLJEUM.jpg?auth=dba64bf882cea14fa07d6b89ba33ad8fe732f93140a3107b5379478ede3231e9&width=768&quality=70&smart=false" // Opción b es la correcta (Dexter)
    },
    {
      pregunta: "¿Cuál es el nombre del pez en 'El increíble mundo de Gumball'?",
      opciones: [
        { letra: "a", texto: "Darwin", correcta: true },
        { letra: "b", texto: "Goldie", correcta: false },
        { letra: "c", texto: "Burbuja", correcta: false }
      ],
      img: "https://yt3.googleusercontent.com/ytc/AIf8zZRyZpWSKwIkKVTe9BL18zOQ8IfnSOF7zeW7gFXIXw=s900-c-k-c0x00ffffff-no-rj" // Opción a es la correcta (Darwin)
    },
    {
      pregunta: "¿Cómo se llama el osito de 'Escandalosos'?",
      opciones: [
        { letra: "a", texto: "Grizzly", correcta: false },
        { letra: "b", texto: "Pardo", correcta: true },
        { letra: "c", texto: "Panda", correcta: false }
      ],
      img: "https://www.nacionflix.com/__export/1625697621462/sites/debate/img/2021/07/07/escandalosos-cartoon-network_crop1625697541634.jpg_242310155.jpg" // Opción b es la correcta (Pardo)
    },
    {
      pregunta: "¿Quién es el protagonista de 'Ben 10'?",
      opciones: [
        { letra: "a", texto: "Kevin", correcta: false },
        { letra: "b", texto: "Ben", correcta: true },
        { letra: "c", texto: "Gwen", correcta: false }
      ],
      img: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYJjYUCmXJvmLkirQQTEbDpZTyKVaWPm_xkAmi2k-WNXgbOSUytlt6FRFqKEjIjysLJvMAu1OgvzixtBvzoXXkd3scZmXQsnfPlW.jpg?r=332" // Opción b es la correcta (Ben)
    },
    {
      pregunta: "¿Cuál es el nombre completo de 'Johnny Bravo'?",
      opciones: [
        { letra: "a", texto: "Johnny Papito Bravo", correcta: false },
        { letra: "b", texto: "Johnny Jeff Bravo", correcta: false },
        { letra: "c", texto: "Johnny Bravo", correcta: true }
      ],
      img: "https://www.themoviedb.org/t/p/original/vv2FQBvol6JgL9AO8mwi8jaoaNv.jpg" // Opción c es la correcta (Johnny Bravo)
    },
    {
      pregunta: "¿Quién es el enemigo principal de 'Las sombrías aventuras de Billy y Mandy'?",
      opciones: [
        { letra: "a", texto: "Hoss Delgado", correcta: false },
        { letra: "b", texto: "Puro Hueso", correcta: true },
        { letra: "c", texto: "Irwin", correcta: false }
      ],
      img: "https://static.wikia.nocookie.net/lasombrias-aventuras-de-billy-y-mandy/images/0/00/BillyAndMandy_Logo_qjpreviewth.jpg/revision/latest?cb=20130206031036&path-prefix=es" // Opción b es la correcta (Puro Hueso)
    }
  ];

  let puntaje = 0;
  const puntajeHTML = document.getElementById("puntaje");
  puntajeHTML.innerText = puntaje;
  const app = document.getElementById("app");
  
  // Función para mostrar el cuestionario
  const mostrarCuestionario = (preguntas) => {
      const contenedor = document.createElement("div");
    
      preguntas.forEach((pregunta) => {
          const preguntaElemento = crearElementoPregunta(pregunta);
          contenedor.appendChild(preguntaElemento);
      });
  
      app.appendChild(contenedor);
  };
  
  // Función para crear el elemento de una pregunta
  const crearElementoPregunta = (pregunta) => {
      const contenedorGeneral = document.createElement("div");
      const contenedorDeRespuesta = document.createElement("div");
      const contenedorDePregunta = document.createElement("p");
      const img = document.createElement("img")
      img.src = pregunta.img
      contenedorDePregunta.innerText = pregunta.pregunta;
      contenedorDePregunta.classList.add("Titulo")
      contenedorDeRespuesta.classList.add("Respuestas")


      pregunta.opciones.forEach((opcion) => {
          const respuestaUnica = crearElementoRespuesta(opcion);
          contenedorDeRespuesta.appendChild(respuestaUnica);
      });
  
      contenedorGeneral.appendChild(contenedorDePregunta);
     
      contenedorGeneral.appendChild(contenedorDeRespuesta);

      contenedorGeneral.appendChild(img);
      contenedorGeneral.classList = "Contenedor-Respuestas";
  
      return contenedorGeneral;
  };
  
  // Función para crear el elemento de una respuesta
  const crearElementoRespuesta = (opcion) => {
      const contenedorRespuestaUnica = document.createElement("div");
      contenedorRespuestaUnica.classList = "Contenedor-Preguntas";
  
      const respuesta = document.createElement("p");
      respuesta.innerText = opcion.texto;
  
      respuesta.addEventListener("click", (e) => {
          if (opcion.correcta) {
            e.target.parentElement.parentElement.parentElement.classList.add("correcto")
              setTimeout(()=>{
                e.target.parentElement.parentElement.parentElement.remove();
                puntaje++;
                puntajeHTML.innerText = puntaje;
              },300)
          } else {
            e.target.parentElement.parentElement.parentElement.classList.add("incorrecto")
            setTimeout(()=>{
                e.target.parentElement.parentElement.parentElement.remove();
              },300)
          }
      });
  
      const numero = document.createElement("p");
      numero.innerText = opcion.letra;
  
      contenedorRespuestaUnica.appendChild(numero);
      contenedorRespuestaUnica.appendChild(respuesta);
      contenedorRespuestaUnica.classList = "Contenedor-RespuestaUnica";
  
      return contenedorRespuestaUnica;
  };
  
  // Llamada a la función para mostrar el cuestionario
  mostrarCuestionario(cuestionario);