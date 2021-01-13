module.exports = {
    getNumberOfItems(cart) {
      let n = 0;
      for (const item of cart) {
        n += item.quantity;
      }
  
      return n;
    },
  
    add(cart, item) {
      for (const ci of cart) {
        if (ci.id === item.id) {
          ci.quantity += item.quantity;
          return;
        }
      }
      cart.push(item);
    },
  
    remove(cart, id) {
      for ( let  i = cart.length - 1; i >= 0; i--) {
        if (id === cart[i].id) {
          cart.splice(i, 1);
          return;
        }
      }
    }
  };