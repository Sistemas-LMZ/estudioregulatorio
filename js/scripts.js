function showSection() {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById('sectionSelect').value;
    if (selectedSection) {
        document.getElementById(selectedSection).style.display = 'block';
    }
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase(); // Convertir el filtro a mayúsculas para hacer la búsqueda insensible a mayúsculas
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Recorremos todas las filas, comenzando desde 1 para omitir el encabezado
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      var matchFound = false; // Indicador para saber si se encuentra una coincidencia en la fila
  
      // Recorremos todas las celdas de la fila
      for (var j = 0; j < td.length; j++) {
        if (td[j]) {
          txtValue = td[j].textContent || td[j].innerText; // Obtenemos el texto de la celda
  
          // Convertimos el texto de la celda en un array de palabras (separa por espacios y saltos de línea)
          var words = txtValue.split(/\s+/); // Expresión regular que separa por espacios en blanco y saltos de línea
  
          // Recorremos todas las palabras de la celda
          for (var k = 0; k < words.length; k++) {
            if (words[k].toUpperCase().indexOf(filter) > -1) { // Si alguna palabra coincide con el filtro
              matchFound = true;
              break; // Si encontramos una coincidencia, salimos del ciclo de palabras
            }
          }
        }
        if (matchFound) {
          break; // Si encontramos una coincidencia, salimos del ciclo de celdas
        }
      }
  
      // Mostramos u ocultamos la fila según si encontramos una coincidencia
      if (matchFound) {
        tr[i].style.display = ""; // Mostrar la fila
      } else {
        tr[i].style.display = "none"; // Ocultar la fila
      }
    }
  }

  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const containerLogin = document.getElementById('container-login'); // Corregido
  
  signUpButton.addEventListener('click', () => {
    containerLogin.classList.add("right-panel-active");
  });
  
  signInButton.addEventListener('click', () => {
    containerLogin.classList.remove("right-panel-active");
  });

  /* tab defensa-regulatorio */
  function openNewCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("new-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("new-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" new-active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " new-active";
  }