// ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

// La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

// El árbol está compuesto de triángulos de caracteres especiales.
// Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
// Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
// El árbol siempre debe tener la misma longitud por cada lado.
// Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
// Ejemplos:

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/

function createXmasTree(height, ornament) {
    /* Code here */
     if (height < 1 || height > 100) {
          throw new Error("La altura debe estar entre 1 y 100");
      }
  
      let tree = "";
  
      // Construir la parte superior del árbol
      for (let i = 0; i < height; i++) {
          const spaces = "_".repeat(height - i - 1);
          const decoration = ornament.repeat(2 * i + 1);
          tree += spaces + decoration + spaces + "\n";
      }
  
      // Construir el tronco
      const trunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
      tree += trunk + "\n" + trunk;
  
      return tree;
  }