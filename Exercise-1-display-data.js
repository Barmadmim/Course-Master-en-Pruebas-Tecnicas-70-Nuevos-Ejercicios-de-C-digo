/*
Advertencias:
- En español por fines didacticos, en la vida real usa nombres en ingles.
- Test en cada ejercicio, lo veremos al final del curso para ir al grano.
- Ejercicios genéricos, puedes usar cualquier lenguaje.
- Ejercicios nuevos y diferentes a los del Master en Lógica de Programación
- Siempre mostrar el resultado en la consola / terminal (salvo excepciones).
- Hay muchas soluciones validas para un mismo ejercicio.

Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.

Y añade una capacidad de buscar la información de varios superhéroes a la vez.

Ejemplo:
mostrarInformacionSuperheroe('Iron Man');

Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores

Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]);

Salida:
Muestra la información de todos los superheroes

*/

// 1º Crear array de objetos
const infoSuper = {
  "Iron Man": {
    nombreReal: "Tony Stark",
    poderes: ["Tecnologia avanzada", "Movilidad aérea"],
    equipo: "Los vengadores",
  },
  "Capitán América": {
    nombreReal: "Steve Rogers",
    poderes: ["Fuerza sobrehumana", "Agilidad y reflejos sobresalientes"],
    equipo: "Los vengadores",
  },
  "Thor": {
    nombreReal: "Thor Odinson",
    poderes: ["Mjolnir", "Viento y trueno"],
    equipo: "Los vengadores",
  },
  "Spider-Man": {
    nombreReal: "Peter Parker",
    poderes: ["Balanceo", "Telarañas pegajosas", "Sentido aracnido"],
    equipo: "Los vengadores",
  },
  "Hulk": {
    nombreReal: "Bruce Banner",
    poderes: ["Fuerza sobrehumana", "Invulnerabilidad"],
    equipo: "Los vengadores",
  },
};

function mostrarInfoSuperheroe(nombre) {
  if (nombre in infoSuper) {
    const informacion = infoSuper[nombre];
    console.log(`Nombre real: ${informacion.nombreReal}`);
    console.log(`Poderes: ${informacion.poderes.join(", ")}`);
    console.log(`Equipo: ${informacion.equipo}`);
  } else {
    console.log(`${nombre} no existe en la base de datos`);
  }
}

mostrarInfoSuperheroe("Hulk");

/*

mostrarInfoSuperheroe("Hulk");

Nombre real: Bruce Banner
Poderes: Fuerza sobrehumana, Invulnerabilidad
Equipo: Los vengadores

*/
    // Opcion 2 de declarar funciones
    const mostrarInformacionSuperHeroes = (akas) => {

        // Recorrer todos los nombres
        akas.forEach(nombre => {
    
            // Mostrar la info (usar funcion anterior)
            mostrarInfoSuperHeroe(nombre);
            
        });
        
    }
    
    mostrarInformacionSuperHeroes(["Thor", "Hulk", "Joker", "Spider-Man"]);



/*
function mostrarInfoSuperheroes(nombres) {
    if (nombres in infoSuper) {
      const informacion = infoSuper[nombres];
      console.log(`Nombre real: ${informacion.nombreReal}`);
      console.log(`Poderes: ${informacion.poderes.join(", ")}`);
      console.log(`Equipo: ${informacion.equipo}`);
    } else {
      console.log(`${nombres} no existe en la base de datos`);
    }
  }
  
  mostrarInfoSuperheroes(["Thor", "Hulk", "Joker", "Spider-Man"]);


*/
