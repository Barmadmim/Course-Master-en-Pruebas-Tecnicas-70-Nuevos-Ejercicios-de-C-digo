/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 4:
Crea el juego del ahorcado.
El usuario tendrá que ir adivinando y descubriendo las letras de una palabra 
secreta, y tendrá 5 intentos (un intento por extremidad del cuerpo humano).
 
Utiliza el método de entrada de datos habitual de tu lenguaje,
en el caso de JS, usaremos la función prompt.
 
Ejemplo:
juegoDelAhorcado('victor');  
 
// Salida:
Adivina la letra: i
La palabra es: _i___
Te quedan 5 intentos
 
*/

function juegoDelAhorcado(palabraSecreta) {

  // Crear variable palbra oculta con guiones bajos
  let palabraOculta = "-".repeat(palabraSecreta.length);

  // Variable con numero de intentos
  let intentos = 5;

  // Bucle para pedir letra que se ejecutara si no se ha adivinado y si hay intentos
  while (intentos > 0 && palabraOculta !== palabraSecreta) {
    // Pedir letra
    let letra = prompt("Agrega la letra que crees que tiene la palabra");

    // Comprobar si la letra esta en la palabra para actualizar la variable palabraOculta
    if (palabraSecreta.includes(letra)) {
        
      // Actualizar la variable palabraOculta y meter la letra en pocision correcta
      for (
        let contadorLetras = 0;
        contadorLetras < palabraSecreta.length;
        contadorLetras++
      ) {
        if (letra === palabraSecreta[contadorLetras]) {
          console.log(contadorLetras, palabraSecreta[contadorLetras]);

          // Convertir la palabra oculta en un array

          let palabraOcultaArray = Array.from(palabraOculta);

          // Sellecionar indice y cambiar _ por la letra sellecionado

          palabraOcultaArray[contadorLetras] = letra;

          // Unir el array en un string de nuevo

          palabraOculta = palabraOcultaArray.join("");

          // Actualizar la variable palabraOculta
        }
      }
    } else {
      // Si no existe la letra en la palabra restar 1 intento

      intentos--;
    }

    // Mostrar el estado de la palabraOculta
    console.log(`La palabra es: ${palabraOculta}.`);

    // Mostra numero de intentos faltantes

    console.log(`Te quedan ${intentos} intentos.`);
  }

  // Cuando salga del bucle
  // Si se adivinaron las letra (Victori)

  if (palabraOculta === palabraSecreta) {
    console.log(`Has ganado!!!, La palabra secreta era: ${palabraSecreta}`);
  } else {
    // si intentos = 0 derrota

    console.log(
      `Lo siento, has perdido, La palabra secreta era: ${palabraSecreta}`
    );
  }
}

const lanzarJuego = document
  .querySelector("#lanzarJuego")
  .addEventListener("click", () => juegoDelAhorcado("victor"));
