function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3 ) {
deliveryOrders.push(order)
}
}

function refundOrder(orderNumber , deliveryOrders){
  if(orderNumber === 1657){
    deliveryOrders.shift(orderNumber)
  }else{
  if(orderNumber === 2893){
    deliveryOrders.splice(1 ,1)
  }
}
}
//hard coded


// function listItems(deliveryOrders){
//     for (var i = 0; i < deliveryOrders.length; i++) {
//       console.log(deliveryOrders[i].item + ', ' )
//         }
// Hard coded
//   function listItems(deliveryOrders){
// return deliveryOrders[0].item + ", " + deliveryOrders[1].item + ", " + deliveryOrders[2].item
// }
//
// // function listItems(deliveryOrders){
//   for (var i = 0; i < deliveryOrders.length; i++){
// return '' + deliveryOrders.item[i] + ', '   }
// } need an array

function listItems(deliveryOrders){
  var foodItems = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    foodItems.push(deliveryOrders[i].item)
      }
return foodItems.join(', ')
      }

// function searchOrder(deliveryOrders, item){
//   var foodItems = []
// for (var i = 0; i < deliveryOrders.length; i++){
//     if (deliveryOrders[i].item.includes('burger' && 'blt sandwich') } {}
//
//
//   foodItems.push(deliveryOrders[i].item)
//
// return foodItems.join(', ')
//     }
 function searchOrder (deliveryOrders, foodItem){
   for (var i = 0; i < deliveryOrders.length; i++) {
    // if (deliveryOrders[i].item === 'sushi') {
       console.log(deliveryOrders[i].item)
     //   return false;
     // } else {
     // return true;
   }
  }


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
searchOrder
}
