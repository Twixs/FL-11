class Cart {
  constructor(orderTotalPrice, weekendDiscount, nightDiscount) {
    this.orderTotalPrice = function () {
      return orderTotalPrice;
    };
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
  }

  addItem(price = 0) {
    let total = this.orderTotalPrice();
    this.orderTotalPrice = function () {
      return total + price;
    };
  };
  makeOrder() {
    return `Price after discount and including bonuses is ${this.orderTotalPrice()}`;
  }
}

const getDiscount = function (userCart) {
  let userOrderTotalPrice = userCart.orderTotalPrice();
  let userWeekendDiscount = userCart.weekendDiscount;
  let userNightDiscount = userCart.nightDiscount;
  let today = new Date();
  let hour = today.getHours();
  let dayOfWeek = today.getDay();

  if (hour >= 23 || hour <= 6) {
    userCart.orderTotalPrice = function () { return userOrderTotalPrice - userNightDiscount };
  } else if (dayOfWeek === 6 || dayOfWeek === 0) {
    userCart.orderTotalPrice = function () { return userOrderTotalPrice - userWeekendDiscount };
  } else if (hour > 23 || hour < 6 && dayOfWeek === 6 || dayOfWeek === 7) {
    userCart.orderTotalPrice = function () { return userOrderTotalPrice - (userNightDiscount + userWeekendDiscount) };
  } else {
    userCart.orderTotalPrice = function () { return userOrderTotalPrice };
  }
};

const setBonus = function (userCart) {
  let orderTotalPrice = userCart.orderTotalPrice();

  if (orderTotalPrice > 100) {
    let bonus = parseInt(orderTotalPrice / 100);
    bonus *= 5;
    userCart.orderTotalPrice = function () {
      return orderTotalPrice - bonus;
    };
  }
};

cart = new Cart(0, 10, 5);
cart.addItem(100);
cart.addItem(200);
cart.makeOrder();

setBonus(cart);
getDiscount(cart);

cart.makeOrder();