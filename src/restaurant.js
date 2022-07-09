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

// function addMenuItem(restaurant, food) {
//   if (food.type === 'lunch') {
//     restaurant.menus.lunch.push(food)
//   } else if (food.type === 'breakfast') {
//     restaurant.menus.breakfast.push(food)
//   } else if (food.type === 'dinner') {
//     restaurant.menus.dinner.push(food)
//   }
// }
function addMenuItem(restaurant, food){
  if (food.type === 'lunch' && !restaurant.menus.lunch.includes(food)){
  restaurant.menus.lunch.push(food)
} else if (food.type === 'dinner' && !restaurant.menus.dinner.includes(food)){
  restaurant.menus.dinner.push(food)
} else if (food.type === 'breakfast' && !restaurant.menus.breakfast.includes(food)){
  restaurant.menus.breakfast.push(food);
}
}
//for (var i = 0; i < restaurant.length; i++) {
// if (restaurant[i].type.includes(lunch)) {
// console.log(restaurant.menus.lunch.push(food))
//
//console.log(food.type) this will display lunch
//restaurant.menus.lunch.push(food)

// function removeMenuItem (typeOfFood, foodTime) {
// typeOfFood.menus.breakfast.slice(foodTime)
// } //slice?
// return 'No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!'
// }
// need to .slice out specific typeOfFood and foodTime
// function removeMenuItem(restaurant, typeOfFood, foodTime) {
//     if (restaurant.menus.foodTime.includes(typeOfFood)) {
//       return restaurant.menus.foodTime.pop(typeOfFood)
//     }
//   }

  // console.log(restaurant, `helll`)
  //   console.log(typeOfFood, `helll`)
  //   console.log(foodTime, `hellll`)

  function removeMenuItem(restaurant, typeOfFood, foodTime) {
  console.log(restaurant.menus[foodTime])
    if (restaurant.menus[foodTime] !== undefined){
      for (var i = 0; i < restaurant.menus[foodTime].length; i++){
        restaurant.menus[foodTime].splice(i, 1)
        return `No one is eating our ${typeOfFood} - it has been removed from the ${foodTime} menu!`
      }
    }
    if (!restaurant.menus[foodTime].includes(typeOfFood)){
        return `Sorry, we don't sell ${typeOfFood}, try adding a new recipe!`
      }
    }



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
