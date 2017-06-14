La programación imperativa tiene un nivel de abstracción bajo, lo que quiere
decir que se enfoca en describir, desde el punto de vista de la computadora,
cómo hacer lo que queremos. Nuestro código expresa de forma explícita el control
de flujo, usando bucles, declara variables para llevar la cuenta, ...

En el mundo real, en un lenguaje como JavaScript, vamos a encontrar
características de este paradigma, pero siempre en el contexto de otro paradigma
con un nivel de abtracción más alto y un mecanismo de reuso de código (cómo la
programación orientada a objetos o la prgramación funcional).

## Tarea

Se ha creado automáticamente un archivo llamado `imperative.js` en el directorio
actual. A este archivo se le ha añadido el _boilerplate_ (la plantilla sobre la
que hacer el ejercicio), que contiene un programa sin terminar. Este programa
debe **imprimir en la consola todos los números primos menores que `20`**.

El _boilerplate_ impementa sólo parte de la lógica. Por el momento imprime todos
los números enteros del `2` al `19`. Ahora tienes que añadir la lógica para
comprobar si un número es primo o no, y así sólo imprimir los primos.

## Boilerplate

```js
// Iteramos desde 2 (el primer número primo) hasta 19 (menor que 20)
for (var i = 2; i < 20; i++) {
  var isPrime = true;

  // Ahora debemos iterar desde `2` hasta `i / 2` usando una variable `j` como
  // contador.
  //
  // Para cada `j` comprueba si la división `i / j` deja un residuo.
  //
  // NOTA: No necesitamos probar números más allá de `i / 2` porque el
  // resultado de la división `i / j` siempre sería una fracción entre 2 y 1,
  // siempre dejando residuo.

  // TU CÓDIGO AQUÍ

  if (isPrime) {
    console.log(i);
  }
}
```

## Requisitos

* Debes implementar un bucle `for` anidado dentro del `for` ya existente.

## Pistas

* Si un número es divisible por cualquier entero mayor que `1` que no sea el
  número mismo, sabemos que NO es primo.
* Dentro del bucle `for` principal, para ver si un número es primo, vamos a
  tratar de demostrar que NO es primo, y si no podemos probar que no es primo,
  entonces podemos asumir que sí es primo.
* El operador `%` nos da el residuo de una división.
* Una vez que hemos probado que un número no es primo ya no necesitamos
  continuar dividiéndolo.

## Recursos

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

***

Puedes ejecutar el código del ejercicio con el siguiente comando:

`paradigms run imperative.js`

Una vez que estés lista, puedes verificar tu solución con el siguiente comando:

`paradigms verify imperative.js`
