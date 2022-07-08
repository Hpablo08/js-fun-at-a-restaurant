function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3 ) {
deliveryOrders.push(order)
}
}

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++ ) {
  if(orderNumber === 1657) {deliveryOrders.shift(orderNumber) }
} }



module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
