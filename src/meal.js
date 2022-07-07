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

function addIngredients() {

ingredients.unshift('cheese')

}







module.exports = {
  nameMenuItem,
   createMenuItem,
   addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
