/*

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
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
        equipo: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        equipo: 'Los vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        equipo: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        equipo: 'Los vengadores'
    }
};

function mostrarInfoSuperHerore(aka){

    console.log(``);
    console.log(`################## ${aka} ##################`);
    // Comprobar si el superheroe existe dentro del objeto
    if(aka in infoSuper){
    // Conseguir la info de ese superHeroe
    const informacion = infoSuper[aka];
    // Mostrar la info
    console.log(`Nombre real: ${informacion.nombreReal}`);
        // Para dar formato al imprimir del array, usamos un '.join', donde se pone el caracter que se coloca entre los elementos
    console.log(`Poderes: ${informacion.poderes.join(', ')}`);
    console.log(`Equipo: ${informacion.equipo}`);
    console.log(``)

    }else{
        console.log(`${aka} no existe en la base de datos`);
        console.log(``);
    }

}
    // Opcion 1 de declarar funciones
mostrarInfoSuperHerore("Spider-Man");
    // Opcion 2 de declarar funciones
const mostrarInformacionSuperHeroes = (akas) => {

    // Recorrer todos los nombres
    akas.forEach(nombre => {

        // Mostrar la info (usar funcion anterior)
        mostrarInfoSuperHerore(nombre);
        
    });
    
}

mostrarInformacionSuperHeroes(["Thor", "Hulk", "Joker", "Spider-Man"]);

/* La terminal devuelve: 
$ node .\ejercicio01.js

################## Spider-Man ##################
Nombre real: Peter Parker
Poderes: Balanceo, Telarañas pegajosas, Sentido aracnido
Equipo: Los vengadores


################## Thor ##################
Nombre real: Thor Odinson
Poderes: Mjolnir, Viento y trueno
Equipo: Los vengadores


################## Hulk ##################
Nombre real: Bruce Banner
Poderes: Fuerza sobrehumana, Invulnerabilidad
Equipo: Los vengadores


################## Joker ##################
Joker no existe en la base de datos


################## Spider-Man ##################
Nombre real: Peter Parker
Poderes: Balanceo, Telarañas pegajosas, Sentido aracnido
Equipo: Los vengadores

*/
