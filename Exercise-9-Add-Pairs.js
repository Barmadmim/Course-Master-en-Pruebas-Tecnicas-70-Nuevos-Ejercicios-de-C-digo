/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 9:
Crea una función que reciba un array de números y calcule
la suma de todos los números pares del array
 
Ejemplos:
sumarPares([2, 13, 6, 15]);  // Resultado: 8
 
*/

function sumarPares(numeros) {
  // Variable para acumular la suma
  let suma = 0;
  // Recorrer el array
  array.forEach((numeroActual) => {
    // En cada iteracion combrobar si el numero  que estoy  recorriendo es par
    if (numeroActual % 2 === 0) {
      // si es par lo sumo
      suma += numeroActual;
    }
  });

  // devolver resultado
  return suma;
}

console.log(sumarPares([2, 13, 6, 15]));