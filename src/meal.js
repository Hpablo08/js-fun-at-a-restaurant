function nameMenuItem(item) {
return `Delicious ${item}`
}

function createMenuItem(name, price, type){
  return{
  name: name,
  price: price,
  type: type,
}
}

function addIngredients(toppings, array) {
    array.push(toppings)
    
}







module.exports = {
  nameMenuItem,
   createMenuItem,
   addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
