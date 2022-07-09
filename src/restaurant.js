function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
}

function addMenuItem(restaurant, food) {
if(food.type === 'lunch') {
  restaurant.menus.lunch.push(food)
} else if (food.type === 'breakfast') {
  restaurant.menus.breakfast.push(food)
} else if(food.type === 'dinner') {
  restaurant.menus.dinner.push(food)
}
}
//for (var i = 0; i < restaurant.length; i++) {
// if (restaurant[i].type.includes(lunch)) {
// console.log(restaurant.menus.lunch.push(food))
// }
//console.log(food.type) this will display lunch
//restaurant.menus.lunch.push(food)

function removeMenuItem (restaurant, food){
restaurant.menus.breakfast.pop(food)
return 'No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!'
}
























module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
