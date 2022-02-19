const algoSucedera = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
      return;
    }
    const error = new Error('No se cumplio');
    reject(error);
  });
}

const algoSucedera2 = () => {
  // Parametros resolver o rechazar
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(
        () => {
          resolve('true!'),
          2000
        }
      );
    } else {
      const error = new Error('No se cumplio');
      reject(error);
    }
  });
}

algoSucedera()
  .then(response => console.log(response))
  .catch(error => console.error(error));

algoSucedera2()
  .then(response => console.log(response))
  .catch(error => console.error(error));

//Ejecutar varias promesas.
Promise.all([algoSucedera(), algoSucedera2()])
  .then(response => {
    console.log('Array de resultados', response);
  })
  .catch(error => {
    console.log(error);
  })