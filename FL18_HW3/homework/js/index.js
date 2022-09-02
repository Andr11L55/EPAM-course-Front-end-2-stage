'use strict';

class Pizza {

    constructor(size,type) {
        this.extraIngredient = []
        if (arguments.length < 2) {
            return new PizzaException(`Required two arguments, given: ${arguments.length}`)
        }
        if (!Pizza.allowedTypes.includes(type) || !Pizza.allowedSizes.includes(size)) {
            return new PizzaException('Invalid type')
        }
        this.type = type.type
        this.size = size.size
        this.price = type.price + size.price
    }

    addExtraIngredient(ingredient) {
        if (arguments.length > 1) {
            return new PizzaException('You can add only one ingredient per time')
        }
        if (!Pizza.allowedExtraIngredients.includes(ingredient)) {
            return new PizzaException('You cannot add that ingredient')
        }
        if (this.extraIngredient.includes(ingredient)) {
            return new PizzaException('You can add one ingredient only once')
        } else {
            this.extraIngredient.push(ingredient)
        }
    }

    removeExtraIngredient(ingredient) {
        if (arguments.length > 1) {
            return new PizzaException('You can remove only one ingredient per time')
        }
        if (!Pizza.allowedExtraIngredients.includes(ingredient)) {
            return new PizzaException('You cannot remove that ingredient')
        }
        if (this.extraIngredient.includes(ingredient)) {
            this.extraIngredient.splice(this.extraIngredient[ingredient], 1)
        } else {
            return new PizzaException('You cannot remove the ingredient that was not added')
        }
    }

    getSize() {
        return `Pizza size: ${this.size}`
    }

    getPrice() {
        return this.extraIngredient.length
            ? this.extraIngredient.reduce((a, b) => a + b.price, 0) + this.price + 'UAH'
            : this.price + 'UAH'
    }

    getPizzaInfo() {
        return `${this.getSize()}, type: ${this.type}; extra ingredients: ${this.extraIngredient
            .map(item => item.ingredient).join(',') || 'none'}; price: ${this.getPrice()}`
    }
}

Pizza.SIZE_S = {size: 'small', price: 50}
Pizza.SIZE_M = {size: 'medium', price: 75}
Pizza.SIZE_L = {size: 'large', price: 100}

Pizza.TYPE_VEGGIE = {type: 'veggie', price: 50}
Pizza.TYPE_MARGHERITA = {type: 'margherita', price: 60}
Pizza.TYPE_PEPPERONI = {type: 'pepperoni', price: 70}

Pizza.EXTRA_TOMATOES = {ingredient: 'tomatoes', price: 5}
Pizza.EXTRA_CHEESE = {ingredient: 'cheese', price: 7}
Pizza.EXTRA_MEAT = {ingredient: 'meat', price: 9}

Pizza.allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L]
Pizza.allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI]
Pizza.allowedExtraIngredients = [Pizza.EXTRA_TOMATOES, Pizza.EXTRA_CHEESE, Pizza.EXTRA_MEAT]

class PizzaException {
    constructor(log) {
        throw new Error(log)
    }
}

let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);

console.log(pizza.getPrice());


// // /* It should work */ 
// // // // small pizza, type: veggie
// // // let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// // // // add extra meat
// // // pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
// // // // check price
console.log(`Price: ${pizza.getPrice()} UAH`); //=> Price: 109 UAH
// // // // add extra corn
// // // pizza.addExtraIngredient(Pizza.EXTRA_CHEESE);
// // // // add extra corn
// // // pizza.addExtraIngredient(Pizza.EXTRA_TOMATOES);
// // // // check price
console.log(`Price with extra ingredients: ${pizza.getPrice()} UAH`); // Price: 121 UAH
// // // // check pizza size
console.log(`Is pizza large: ${pizza.getSize() === Pizza.SIZE_L}`); //=> Is pizza large: false
// // // // remove extra ingredient
// // // pizza.removeExtraIngredient(Pizza.EXTRA_CHEESE);
// console.log(`Extra ingredients: ${pizza.getExtraIngredients().length}`); //=> Extra ingredients: 2
console.log(pizza.getPizzaInfo()); //=> Size: SMALL, type: VEGGIE; extra ingredients: MEAT,TOMATOES; price: 114UAH.

// // // examples of errors
// let pizza1 = new Pizza(Pizza.SIZE_S); // => Required two arguments, given: 1

// let p1izza = new Pizza(Pizza.SIZE_S, Pizza.SIZE_S); // => Invalid type

// let pi1zza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// pizza.addExtraIngredients(Pizza.EXTRA_MEAT);
// pizza.addExtraIngredients(Pizza.EXTRA_MEAT); // => Duplicate ingredient

// // // let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
// pizza.addExtraIngredient(Pizza.EXTRA_MEAT); // => Invalid ingredient
