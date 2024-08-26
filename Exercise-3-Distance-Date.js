/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal.
- Hay muchas soluciones validas para un mismo ejercicio.
 
Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/

function diferenciaDeDias(fecha1, fecha2){

// Comprobar que ambas fechas tengan  un formato correcto con intanceof si es de tipo date
// Dar formato correcto a las fechas con new date(fecha#)

fecha1 = fecha1 instanceof Date ? fecha1 : new Date(fecha1);
fecha2 = fecha2 instanceof Date ? fecha2 : new Date(fecha2);

// Obtener la diferencia en milisegundos entre las dos fechas

const diferenciaEnMilisegundos = Math.abs(fecha1.getTime() - fecha2.getTime());

// Dividir la diferencia en milisegundos entre el numero de milisegundos que tiene un dia y redondearla para sacar dias

const dias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 *60 * 24));

if(isNaN(dias)){
    return "Formato Incorrecto de Fecha.";
}


return "La diferecia Son de:", dias, "dias.";
}

console.log(diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023'));
console.log(diferenciaDeDias('2006/11/29', '2024/08/26'));