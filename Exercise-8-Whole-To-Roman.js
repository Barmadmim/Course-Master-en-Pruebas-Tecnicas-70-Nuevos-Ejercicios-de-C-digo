/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 8:
Crea un algoritmo al cual le pase un número entero
y me lo convierta a número romano
 
Ejemplos:
enteroARomano(100)); // Resultado:  C
enteroARomano(345)); // Resultado: CCCXLV
 
*/

function enteroARomano(numero) {
  // Variable para guardar string final
  let resultado = "";

  // Listado a numeros romanos
  const caracteresRomanos = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  // Equivalente  en numeros decimales
  const valoresDecimales = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
  ];

  // Bucle para recorrer numeros  decimales
  for (let i = 0; i < valoresDecimales.length; i++)
    // Bucle para iterar mientras el numero sea mayor o igual l decimal
    while (numero >= valoresDecimales[i]) {
      // Añadir el caracter romano al resultado
      resultado += caracteresRomanos[i];
      // Actualizar numero para restar el valor decimal que ya he agregado de numero romanos
      numero -= valoresDecimales[i];
    }

  // Devolver resultado
  return resultado;
}

console.log(enteroARomano(100));
