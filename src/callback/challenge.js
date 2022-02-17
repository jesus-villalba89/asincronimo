// importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// direccion de la API
let api = 'https://rickandmortyapi.com/api/character/';

// funcion principal

// funcion principal
function fetchData(url_api, callback){
  // instanciamos la conexion
  let xhttp = new XMLHttpRequest();
  // abrir una conexion con el metodo, la ruta y si es asincrono
  xhttp.open('GET', url_api, true);
  // validacion del llamado
  xhttp.onreadystatechange = (event) => {
    // el state 4 es el ultimo de la peticion
    //Tipo de estado  https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
    if(xhttp.readyState === 4){
      // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
      if(xhttp.status === 200){
        // el primer valor es el err, y el siguiente el resultado
        // ejecutamos el callback con el resultado
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        // si no es 200
        let error = new Error('Error: ' + url_api);
        // matamos el proceso con un error
        return callback(error, null);
      }
    }
  }
  // por ultimo enviamos la peticion
  xhttp.send();
}

fetchData(api, function(error1, data1) {
  if (error1) {
    return console.error(error1);
  }
  fetchData(
    (api + data1.results[0].id),
    function (error2, data2) {
      if (error2) {
        return console.error(error2);
      }
      // por ultimo la consulta a la api que contiene su dimension
      fetchData(
        data2.origin.url,
        (error3, data3) => {
          if (error3) {
            return console.error(error3);
          }
          // mostramos los resultados :)
          console.log(data1.info.count);
          console.log(data2.name);
          console.log(data3.dimension);

          // rutas de las peticiones en orden
          console.log(api);
          console.log(api + data1.results[0].id);
          console.log(data2.origin.url);
        }
      );
    }
  );
});
