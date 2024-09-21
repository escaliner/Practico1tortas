/*
¡Gran Concurso de Tortas de Tres Arroyos! 🎂
Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar.
Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de `Sabor`,
`Presentación` y `Dificultad` para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje.
Y si hay empate? 🤔 En ese caso, 
informaremos que se produjo un empate (no es necesario indicar si fueron dos o mas empates ni 
entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).

Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta 
y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes,
 luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje 
 para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra.
*/
import * as uk from "readline-sync";
//creo la funcion concursoDeTortas para ingresar la cantidad de participantes
// que devuelva la cantidad de participantes
function concursoDeTortas():number {
    let cantParticipantes: number = uk.questionInt("ingrese la cantidad de participantes ")
    return cantParticipantes;
}
//recorro un for preguntando los puntajes para cada torta en la posicion "i"
function calcularPuntaje(cantParticipantes:number) {
    let i: number;
    let tortaGanadora: number = 1;
    let puntajeMax: number = 0;
    let empate: boolean = false;
    console.log(`Favor califique del 1 al 5 `);
    for (i = 1; i <= cantParticipantes; i++) {
        let sabor: number = validarNotas("sabor",i);
        let presentacion: number = validarNotas("presentacion",i);
        let dificultad: number = validarNotas("dificultad",i);
       
        //sumo  en puntajetorta los valores de las 3 notas
        let puntajeTorta: number = sabor + presentacion + dificultad;
        //comparo puntaje torta con puntaje maximo, si alguna torta es igual al puntaje maximo entonces ocurre un empate
        //si no, si el puntaje de la torta es mayor al puntaje maximo, entonces el puntaje maximo toma el valor de puntaje torta
        if (puntajeTorta == puntajeMax) {
            empate = true;
        } else if (puntajeTorta >= puntajeMax) {
            puntajeMax = puntajeTorta;
            tortaGanadora = i;
            empate == false;
        //retorna el valor de la torta ganadora en la variable "i" y convierte el empate en falso     
        }
        
    }   
    determinarGanador(empate, puntajeMax, tortaGanadora);
}

function validarNotas(tipoDenota:string, numeroDePart:number): number{
    let nota: number = 0;
    while (nota < 1 || nota > 5) {
        nota = uk.questionInt(`Ingrese la nota de ${tipoDenota} del participante Nro ${numeroDePart}:  `)
        if (nota< 1 || nota > 5) {
            console.log(`Nota invalida, Califique del 1 al 5 `)
        }
    }
    return nota;
}
function determinarGanador(empate:boolean, puntajeMax: number, tortaGanadora : number)  {
    if (empate) {
        console.log(`------------------------------------------`);
        console.log(`Hay una empate con ${puntajeMax} puntos!!!`);
        console.log(`------------------------------------------`);
    } else {
        console.log(`--------------------------------------------------------`);
        console.log(`el ganador fue el participante ${tortaGanadora } con ${puntajeMax} puntos`);
        console.log(`--------------------------------------------------------`);
    }

}
// creo una variable externa a la funcion para asignarle el valor que rotarna la func.
let cantidad:number = concursoDeTortas();
calcularPuntaje(cantidad);

// ts-node concursoTortas   