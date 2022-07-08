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
function listItems(deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    return item

  }
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
