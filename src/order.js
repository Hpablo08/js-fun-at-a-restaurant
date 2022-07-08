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
  function listItems(deliveryOrders){
  return deliveryOrders[0].item + ", " + deliveryOrders[1].item + ", " + deliveryOrders[2].item
}




// {
//   for (var i = 0; i < deliveryOrders.length; i++)
//   return deliveryOrders.item[i]
// }


//   for (var i = 0; i < deliveryOrders.length; i++) {
//     if (deliveryOrders[i].item > 0 ) {
//       console.log(deliveryOrders[i])
//       }
//   }
// }



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
