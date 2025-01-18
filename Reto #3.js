
// tiene las propiedades:

// name: el nombre del juguete (string).
// quantity: la cantidad disponible de ese juguete (entero).
// category: la categoría a la que pertenece el juguete (string).
// Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

// Las claves del objeto serán las categorías de juguetes.
// Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
// Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
// Si el array está vacío, la función debe devolver un objeto vacío {}.
// const inventory = [
//   { name: 'doll', quantity: 5, category: 'toys' },
//   { name: 'car', quantity: 3, category: 'toys' },
//   { name: 'ball', quantity: 2, category: 'sports' },
//   { name: 'car', quantity: 2, category: 'toys' },
//   { name: 'racket', quantity: 4, category: 'sports' }
// ]

// organizeInventory(inventory)

// // Resultado esperado:
// // {
// //   toys: {
// //     doll: 5,
// //     car: 5
// //   },
// //   sports: {
// //     ball: 2,
// //     racket: 4
// //   }

// const inventory2 = [
//   { name: 'book', quantity: 10, category: 'education' },
//   { name: 'book', quantity: 5, category: 'education' },
//   { name: 'paint', quantity: 3, category: 'art' }
// ]

// organizeInventory(inventory2)

// // Resultado esperado:
// // {
// //   education: {
// //     book: 15
// //   },
// //   art: {
// //     paint: 3
// //   }
// // }

function organizeInventory(inventory) {
    // Code here
    if(inventory.length === 0);
  
    const organizar = {};
  
    for(const objeto of inventory){
      const {name,quantity,category} = objeto;
  
      if(!organizar[category]){
        organizar[category]={
  
        };
      }
  
      if(organizar[category][name]){
        organizar[category][name] += quantity;
      }else{
        organizar[category][name] = quantity;
      }
  
    }
  
    return organizar;
  }