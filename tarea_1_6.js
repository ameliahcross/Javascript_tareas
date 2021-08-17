// Ejercicio de variables y condiciones JS

//6. Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) y a través de condicionales if realice las siguientes operaciones:


//a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”.
//  Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”.
//  Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
//b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4
//pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”


const prompt = require('prompt');
prompt.start();

var rueda = ['diametro', 'grosor']

prompt.get(rueda, function(error,userInput) {
    userInput.diametro = +userInput.diametro
    userInput.grosor = +userInput.grosor

    if (userInput.diametro > 1.4) {
        console.log('La rueda es para un vehículo grande.')

    } else if (userInput.diametro <= 1.4 && userInput.diametro > 0.8) {
        console.log('La rueda es para un vehículo mediano.')
       }
       else if (userInput.diametro > 1.4 && userInput.grosor < 0.4) {
        console.log('El grosor para esta rueda es inferior al recomendado.')
        }
        else if (userInput.diametro <= 1.4 && userInput.diametro > 0.8 && userInput.grosor < 0.25) {
            console.log('El grosor para esta rueda es inferior al recomendado.')
            }
        else {
        console.log('La rueda es para un vehículo pequeño')  
        }
})




