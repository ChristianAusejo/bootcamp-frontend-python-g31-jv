// La siguiente línea imprime en la consola del navegador del texto !Hola Javascript!

console.log('¡Hola Javascript!')

// 1. COMENTARIOS, Javascript ignora estas líneas y sirve para explicar el código.

// Esto es un comentario de una línea

/*
Esto es un comentario
de 
varias
líneas
*/

// 2. TIPOS DE DATOS

// Primitivos básicos:

// 2.1 Number (números)

// Ejemplos: 123, 34.89, -67, 0

console.log(20)
console.log(typeof 20)
console.log(123)
console.log(typeof 123)
console.log(34.89)
console.log(typeof 34.89)
console.log(-67)
console.log(typeof -67)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// 2.2. String (texto)

console.log("Christian")
console.log(typeof "Christian") // string --> cadena de texto
console.log('Ausejo')
console.log(typeof 'Ausejo')  // string

// 2.3. Boolean (verdadero o falso)

console.log(true)
console.log(false)

// 2.4. undefined, no tiene valor aún

let x // Estoy declarando una variable
console.log(x)

// 2.5. null, intencionalmente está vacío

let nombre = null
console.log(nombre)

// Ejercicio, verificar que tipo de datos devuelven las siguientes líneas

console.log(typeof 10)              // number
console.log(typeof "hola")          // string
console.log(typeof true)            // boolean
console.log(typeof undefined)       // undefined
console.log(typeof null)            // object   <- Este es un error (bug) de JS

// 3. Variables ( Guardar datos )

// const (valores que no cambian durante la ejecución)

const pi = 3.141599

console.log(pi)

// pi = 4.98888 // No se pueden cambiar los valores  <-  Uncaught TypeError: Assignment to constant variable.

// let ( pueden cambiar los valores durante la ejecución del programa)

let edad = 20

console.log (edad) 

edad = 25 

console.log(edad)

// 4. Operadores matemáticos

console.log(1 + 3)
console.log(6 - 5)
console.log(2 * 8)
console.log(2 / 8)
console.log(10 / 2)
console.log(7 % 2)  // Residuo
console.log(3 ** 2)  // Potencia o Exponente
console.log(Math.pow(3, 2))  // Exponente

// = --> Es el operador de asignación

let a = 10
let b = 3

let respuesta = a % b

console.log(respuesta)

// 5. Comparaciones 

// Igualdad débil ==

console.log(1 == "1") // true (solo compara sus valores)

// Igualdad estricta === (RECOMENDACIÓN: Usar siempre)

console.log(1 === "1") // false (compara el valor y el tipo de dato)

// 6. Operadores lógicos (AND (&&), OR (||), NEGACIÓN (! antes del dato))

console.log(true && false) // false
console.log(true || false) // true
console.log(!true) // fale (negar su valor)

// EJERCICIOS

// 1. Definir las variables para hallar el área de un triángulo. Base = 10, Altura = 5. Imprimir el resultado en la consola.

const base = 10
const altura = 5

const área = (base * altura) / 2

console.log(área)  // Resultado = 25

// 7. Concatenación (unir textos)

let nombre2 = "Christian"
let edad2 = 29

console.log("Hola" + nombre2)  // HolaChristian
console.log("Hola " + nombre2)  // Hola Christian
console.log("Hola " + nombre2 + ", tienes " + edad2 + " años.") // Hola Christian, tienes 29 años.
// Mejor forma de concatenar (template strings) - backtick (alt gr + })

console.log(`Hola ${nombre2}, tienes ${edad2} años.`) // Hola Christian, tienes 29 años.

// 8. Condicionales (if)

let numero = 4

if (numero % 2 === 0) {
    console.log('Es par')  // Solo se va a ejecutar wl bloque entre las llaves si es verdadera la condición
}

let nota = 18

if (nota >= 13) {
    console.log('Aprobado')
} else {                           
    console.log('Desaprobado')
}                                   // else = además

let heroe = 'Spiderman'

if(heroe === 'Batman') {
    console.log('Hola soy Bruce')
} else if(heroe === 'Spiderman') {
    console.log('Hole soy Peter')
} else if(heroe === 'Ironman') {
    console.log('Hola soy Tony')
} else {
    console.log('No soy un heroe')
}

// 9. ESTRUCTURAS REPETITIVAS (FOR, WHILE, DO WHILE)

// for (Sirve para repetir una o varias instrucciones)

// Ejercicio: Imprimir en consola los números del 0 al 9

for (let i = 0; i < 10; i++) {
    console.log(i)
}
// i++ --> al final de cada repetición suma 1 al valor de i. El ++ es el indicador.

// while 

let j = 0

while (j < 10) {
    console.log('while', j)

    j++         // Adecuado
}

// EJERCICIOS

// 2. Dado un número, mostrar "par y mayor a 10", "par y menor o igual a 10", "Impar"

// 3. Dado un número entero, escribe un programa que:
// - Muestre "fizzbuzz" si el número es divisible entre 3 y 5.
// - Muestre "fizz" si el número es divisible solo entre 3.
// - Muestre "buzz" si el número es divisible solo entre 5.
// - En cualquier otro caso, debe mostrar el mismo número.

let num = 16

if (num % 2 === 0 && num > 10) {
    console.log("par y mayor a 10");
} else if (num % 2 === 0 && num <= 10) {
    console.log("par y menor o igual a 10");
} else {
    console.log("Impar");
}

let c = 15; 

if (c % 3 === 0 && c % 5 === 0) {
    console.log("fizzbuzz");
} else if (c % 3 === 0) {
    console.log("fizz");
} else if (c % 5 === 0) {
    console.log("buzz");
} else {
    console.log(c);
}

// 10. Función

// Una función es un bloque de código reutilizable que hace una tarea

// ENTRADA -> [LÓGICA] -> SALIDA CON EL RESULTADO

//Función básica

function saludar() {
    console.log('Hola funciones!')
}

saludar() // Ejecutar la función establecida

// Funciones con párametros

function saludoConNombre(nombre) {
    console.log('Hola ' + nombre)
}

saludoConNombre('Christian')
saludoConNombre()

// Funciones que retornan valores

function sumar(a, b) {
    const suma = a + b

    return suma // Devuelve solo el resultado de lo que se opere
}

console.log(sumar(2, 3))

// Ejercicios

function esPar(numero) {
    return numero % 2 === 0  // Boolean
}

console.log(esPar(4))  // true
console.log(esPar(7))  // false

// Ejercicios

// 1. Crear una función que reciba un número y devuelva el doble de ese número por consola

// 2. Crear una función que reciba dos números y devuelva el mayor por consola

// 3. Reutilizar el ejercicio de fizzBuzz usando funciones de tal forma que puedan llamarlo de la siguiente manera. Ej. fizzBuzz(15) -> fizzbuzz

function duplicarnumero(numero) {
    return numero * 2
}

console.log(duplicarnumero(10))


function numeroMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1
    }
    return numero2
}

console.log(numeroMayor(15, 14))


function FizzBuzz(c) {
    if (c %3 === 0 && c % 5 ===0) {
        return "FizzBuzz"
    } else if (c % 3 === 0) {
        return "Fizz"
    } else if (c % 5 === 0) {
        return "Buzz"
    } else {
        return c
    }
}

console.log(FizzBuzz(18))

// 11. Cadena de texto

// Propiedad .length

console.log("Hola".length)  // 4

// Acceder a caracteres, cada letra tiene una posición (empieza con 0)

let miNombre = 'Christian'

console.log(miNombre[0])  // C
console.log(miNombre[1])  // H
console.log(miNombre[2])  // R

// Métodos importantes de las cadenas de texto

console.log(miNombre.toLowerCase()) // christian
console.log(miNombre.toUpperCase()) // CHRISTIAN
console.log(miNombre.includes('hr')) // true

// EJERCICIOS:

// 1. Dado un string, crear una función llamada evaluarTexto que devuelva: "Largo" si tiene más de 10 caracteres y "Corto" si tiene 10 o menos.

// 2. Dado un string, crear una función llamada invertirTexto que devuelve el texto invertido. Ej. hola -> aloh

function evaluarTexto (texto) {
    if (texto.length > 10) {
        return "Largo"
    } else {
        return "Corto"
    }
}

console.log(evaluarTexto("Computadora"))

function invertirTexto(texto) {
    return texto.split('').reverse().join('')
}

console.log(invertirTexto("Christian"))