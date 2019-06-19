//object to represent your pet

var pet = {
    name: "Riley",
    species: "boxer",
    nicknames: ["destroyer", "pup", "pretty girl", "stinker", "boxer"],
    age: 4
};

//fast food ordering exercise

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
        console.log(meal)
    },
    placeOrderAll: function (meal, meal2, meal1) {
        this.orders.push(meal, meal1, meal2)
        console.log(meal, meal1, meal2)
    }
}


let chickenComboMeal = {
        sandwichType: "Chicken Sandwhich",
        fries: true,
        drinkSize: "regular"
    }
let fishComboMeal = {
        sandwichType: "Fish Sandwhich",
        fries: false,
        drinkSize: "regular"
    }
let burgerComboMeal = {
        sandwichType: "Hamburger",
        fries: true,
        drinkSize: "regular"
    }

// Place an order
restaurant.placeOrder(chickenComboMeal)

// Invoke the function to return the list of all orders

restaurant.placeOrderAll(chickenComboMeal, fishComboMeal, burgerComboMeal)

// Output all orders to the console using console.table()
console.table(restaurant.orders)