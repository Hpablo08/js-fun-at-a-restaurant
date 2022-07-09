function createRestaurant(name) {
return{
  name: name,
  menus: {breakfast:[], lunch:[], dinner:[], },
}
}

function addMenuItem (restaurant, food){

restaurant.menus.lunch.push(food)

}























module.exports = {
  createRestaurant,
  addMenuItem,
  // removeMenuItem
}
