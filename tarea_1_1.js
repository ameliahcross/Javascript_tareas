
 // Ejercicio de variables y condiciones JS

    // 1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.

    const prompt = require('prompt');
    prompt.start();

    prompt.get (['age'], function(error,userInput) {

        var edad = userInput.age

        if (userInput.age >= 18) {
            console.log('Ya puedes conducir')
        }  else {
            console.log('No puedes conducir')
        }
         
        })