A la hora de construir aplicaciones nos vemos obligados a pensar en cómo
"modelar" o representar en código cosas del mundo real o conceptos útiles para
un ser humano (un usuario, un documento, ...).

En la programación orientada a objetos (OOP), nos concentramos en describir
objetos, que tienen una data (un estado) asociado y una serie de operaciones
que pueden realizar.

Por ejemplo, imaginemos que estamos construyendo una aplicación de "notas",
donde el usuario puede añadir notas con un texto. Antes de empezar a implementar
tratamos de imaginarnos los objetos que participan de este proceso. Lo primero
que se nos viene a la mente es que vamos a necesitar objetos de tipo "nota".

En JavaScript, previo a ES2015, no hay clases, pero tenemos herencia prototipal
y constructores.

## Tarea

Implementa los métodos `add()` y `toString` al prototipo de `Notes` para que
el siguiente ejemplo funcione correctamente:

```js
const note1 = new Note('hola');
const note2 = new Note('mundo');

const notes = new Notes();

notes.add(note1);
notes.add(note2);

console.log(notes.toString());

// [ ] | Mon Jun 12 2017 | mundo
// [ ] | Mon Jun 12 2017 | hola

notes.data[0].completed = true;

console.log(notes.toString());

// [X] | Mon Jun 12 2017 | mundo
// [ ] | Mon Jun 12 2017 | hola
```

## Boilerplate

```js
function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

// Convierte note en un string con este formato:
// [X] | Mon Jun 12 2017 | mundo
Note.prototype.toString = function () {
  let str = '[' + (this.completed ? 'X' : ' ') + ']';
  str += ' | ' + this.createdAt.toDateString();
  str += ' | ' + this.text;
  return str;
};


function Notes() {
  this.data = [];
}

// Si `note` no es una instancia de `Note` debe botar error
// Añade la nota el principio de `this.data`.
Notes.prototype.add = function (note) {
  //...
};

// Crea un string vacío donde almacenar el resultado
// para cada elemento de `this.data` invoca su método `toString()` y concatena
// el resultado al resultado.
// retorna el resultado
Notes.prototype.toString = function () {
  //...
};
```
