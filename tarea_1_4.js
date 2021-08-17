// Ejercicio de variables y condiciones JS

// 4. Diseñe un algoritmo que determine si un número es o no es, par positivo.

const prompt = require('prompt');
    prompt.start();

    prompt.get (['numero'], function(error,userInput) {

        var numero = userInput.numero

        if (userInput.numero > 0 && userInput.numero % 2 == 0) {
            console.log('El número es par positivo')
        }  else {
            console.log('Una de las dos condiciones no se cumple')
          }
          
        })
