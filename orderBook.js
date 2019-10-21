function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []

  if (existingBook == undefined || existingBook.length == 0) {
    updatedBook = updatedBook.concat(incomingOrder)
    return updatedBook
  } 

  // i know, this part's hella ugly. i plan to refactor this whole block of code to utilize map, reduce and filter where appropriate
  for (var i = 0; i < existingBook.length; i++) {
    if (existingBook[i].price == incomingOrder.price && existingBook[i].quantity == incomingOrder.quantity) {
      if (existingBook[i].type != incomingOrder.type) { continue }
      else {
        incomingOrder.quantity = existingBook[i].quantity + incomingOrder.quantity
        updatedBook = updatedBook.concat(incomingOrder)
        continue
      }
    }
    else if (existingBook[i].price == incomingOrder.price && existingBook[i].quantity < incomingOrder.quantity) {
      if (existingBook[i].type != incomingOrder.type) {
        incomingOrder.quantity = incomingOrder.quantity - existingBook[i].quantity
        updatedBook = updatedBook.concat(incomingOrder)
      }
    }
    else if (existingBook[i].price == incomingOrder.price && existingBook[i].quantity > incomingOrder.quantity) {
      if (existingBook[i].type != incomingOrder.type) {
        incomingOrder.quantity = existingBook[i].quantity - incomingOrder.quantity
        incomingOrder.type = existingBook[i].type
        updatedBook = updatedBook.concat(incomingOrder)
      }
    }
    else { 
      updatedBook = updatedBook.concat(existingBook[i])
      updatedBook = updatedBook.concat(incomingOrder)
    }
  }
  console.log(updatedBook)
  return updatedBook
}

module.exports = reconcileOrder