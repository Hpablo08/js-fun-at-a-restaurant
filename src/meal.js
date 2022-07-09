function nameMenuItem(item) {
  return `Delicious ${item}`

}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
}

function addIngredients(toppings, food) {
  if (!food.includes(toppings)) {
    return food.push(toppings)

  }
}

//method or for loop


function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  var sale = price * .10
  var total = price - sale
  return total
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type,
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
