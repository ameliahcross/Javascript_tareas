 // Ejercicio de variables y condiciones JS

// 2. Pide una nota (número). Muestra la calificación según la nota:

    // 0-3: Muy deficiente
    // 3-5: Insuficiente
    // 5-6: Suficiente
    // 6-7: Bien
    // 7-9: Notable
    // 9-10: Sobresaliente

    const prompt = require('prompt');
    prompt.start();
    
    prompt.get(['nota'], function (err, userInput) {

        if (userInput.nota > 0 && userInput.nota <= 3) {
          console.log('Muy deficiente')  
          
        } else if (userInput.nota >= 3 && userInput.nota <= 5) {
          console.log('Insuficiente')
        }
          else if (userInput.nota >= 5 && userInput.nota <= 6) {
            console.log('Suficiente')
        }
          else if (userInput.nota >= 6 && userInput.nota <= 7) {
            console.log('Bien')
        }
          else if (userInput.nota >= 7 && userInput.nota <= 9) {
            console.log('Notable')
        }
          else if (userInput.nota >= 9 && userInput.nota <= 10) {
            console.log('Sobresaliente')
        }
    })