// Mensaje inicial en la consola para indicar que el script se ha cargado correctamente.
console.log('Banco digital')

// Selección del elemento donde se mostrará el mensaje de respuesta.
const cartelRespuesta = document.querySelector('h5')

// Crear el objeto de cliente con la información inicial.
// Cambia los valores según el caso que desees simular.
const cliente = {
  estadoCuenta: "inactiva", // Cambiar a "activa" para simular cuenta activa.
  nombre: 'Jane Doe',
  fondos: 50 
};
// Aumentar este valor para simular diferentes escenarios.
//caso1
cliente.estadoCuenta = 'activa';
cliente.fondos = 120;
console.log(cliente);

//caso2
// cliente.estadoCuenta = 'activa';
// cliente.fondos = 50;
// console.log(cliente);

//caso3
// cliente.estadoCuenta = 'inactiva';
// cliente.fondos = 120;
// console.log(cliente);


// Simulación de la promesa para consultar la cuenta del cliente.
const consultarCuenta = new Promise((resolve, reject) => {
  // Mostramos el mensaje inicial de carga.
  cartelRespuesta.innerHTML = 'Consultando datos del cliente...'

  // Simulación de la consulta con un retraso de 3 segundos.
  setTimeout(() => {

    // Condición para rechazar la promesa si la cuenta está inactiva.
    if (cliente.estadoCuenta === "inactiva") {
      reject(({ mensaje: 'Su cuenta no está activa', status: '215' }))
    } else if (cliente.fondos < 100) {
      reject(({ mensaje: 'Fondos insuficientes', status: '240' }))
    } else {
      resolve({
        mensaje: 'Pago realizado con éxito',
        fondos: cliente.fondos,
        status: '200'
      })
    }
  }, 3000)
});

consultarCuenta
  .then((data) => {
    cartelRespuesta.innerHTML = data.mensaje
    cartelRespuesta.style.border = '3px solid green'
  })
  .catch((error) => {
    cartelRespuesta.innerHTML = error.mensaje
    cartelRespuesta.style.border = '3px solid red'
  })
  .finally(() => {
    console.log('Consulta finalizada.')
  })

// Manejo de la promesa.
// ejecutar estas lineas si la promesa se resuelve exitosamente.
// data contiene el objeto pasado en el método resolve().
// Mostrar el mensaje de éxito y actualizar el estilo del borde.
// cartelRespuesta.innerHTML = data.mensaje
// cartelRespuesta.style.border = '3px solid green'

// ejecutar estas lineas si la promesa es rechazada.
// err contiene el objeto pasado en el método reject().
// Mostrar el mensaje de error y actualizar el estilo del borde.
// cartelRespuesta.innerHTML = err.mensaje
// cartelRespuesta.style.border = '3px solid red'

// ejecutar estas lineas siempre, ya sea con éxito o error.
// Es útil para realizar alguna acción final, como limpiar o deshabilitar elementos.
// console.log('Consulta finalizada.')
