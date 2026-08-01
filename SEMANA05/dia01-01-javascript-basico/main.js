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

// Igualdad estrica === (RECOMENDACIÓN: Usar siempre)

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