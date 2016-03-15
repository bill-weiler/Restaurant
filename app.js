(function() {
  'use strict';
  angular.module('meatNBooze', [])
    .controller('meatController', meatController)

  function meatController() {
    // DELCARE THIS VARIABLE POINTING TO CONTROLLER
    var meatCtrl = this
    // CREATE FOOD OBJECTS
    meatCtrl.salad = new FoodItem('Salad', 200, true, true, false)
    meatCtrl.steak = new FoodItem('Steak', 700, false, true, true)
    meatCtrl.brownie = new FoodItem('Brownie', 1500, false, false, true)
    // CREATE DRINK OBJECTS
    meatCtrl.oldFashioned = new Drink('Old Fashioned', 'classic cocktail', 8, 'Whiskey, sugar, bitters')

    // CREATE PLATE OBJECTS
    meatCtrl.plate1 = new Plate('Salad', 'Fresh salad', 3, [meatCtrl.salad])
    meatCtrl.plate2 = new Plate('Steak', 'Filet mignon', 10, [meatCtrl.steak])
    meatCtrl.plate3 = new Plate('Brownie', 'Hot brownie with ice cream', 8, [meatCtrl.brownie])
    meatCtrl.plate4 = new Plate('MWF Special!', 'Fresh salad with chocolatey dessert', 11, [meatCtrl.salad, meatCtrl.brownie])
    meatCtrl.plate5 = new Plate('T/TH Special!', 'Fresh salad and steak', 13, [meatCtrl.salad, meatCtrl.steak])
    meatCtrl.plate6 = new Plate('Weekend Special!', 'Drinking time', 8, [meatCtrl.oldFashioned])
    //
    meatCtrl.menu = [meatCtrl.plate1, meatCtrl.plate2, meatCtrl.plate3, meatCtrl.plate4, meatCtrl.plate5, meatCtrl.plate6]
    meatCtrl.customerOrder = []
    meatCtrl.mainMenu = new Menu(meatCtrl.menu)
    meatCtrl.meatNBooze = new Restaurant("Meat n' Booze", 'The name says it all', meatCtrl.mainMenu)
    // meatCtrl.diet
    // meatCtrl.order1 = new Order(meatCtrl.customerOrder)
    //CONTROLLER METHODS
    //adding to order and add quantity
    meatCtrl.addToOrder = function(plate) {
      if (meatCtrl.customerOrder.indexOf(plate) == -1) {
        plate.quantity++
          meatCtrl.customerOrder.push(plate)
      } else {
        plate.quantity++
      }
      var finalPrice = 0
      for (var i = 0; i < meatCtrl.customerOrder.length; i++) {
        finalPrice += meatCtrl.customerOrder[i].price * meatCtrl.customerOrder[i].quantity
      }
      meatCtrl.finalPrice = finalPrice
    }

    //remove from order and reduce quantity
    meatCtrl.removeFromOrder = function(plate) {
      if (plate.quantity > 1) {
        plate.quantity--
      } else if (plate.quantity == 1) {
        plate.quantity--
          meatCtrl.customerOrder.splice(meatCtrl.customerOrder.indexOf(plate), 1)
      }
      var finalPrice = 0
      for (var i = 0; i < meatCtrl.customerOrder.length; i++) {
        finalPrice += meatCtrl.customerOrder[i].price
      }
      meatCtrl.finalPrice = finalPrice
    }

    meatCtrl.dietFilter = function(plate) {
        if (meatCtrl.diet == 1) {
          return plate.isVegan()
        } else if (meatCtrl.diet == 2) {
          return plate.isGlutenFree()
        } else if (meatCtrl.diet == 3) {
          return plate.isCitrusFree()
        } else {
          return true
        }
      }
      //--------------------Drink CONSTRUCTOR-------------------\\
      //---------------------------------------------------------\\
    function Drink(name, description, price, ingredients) {
      this.name = name
      this.description = description
      this.price = price
      this.ingredients = ingredients

    }
    //--------------------FOOD CONSTRUCTOR-------------------\\
    //---------------------------------------------------------\\
    function FoodItem(name, calories, vegan, glutenFree, citrusFree) {
      this.name = name
      this.calories = calories
      this.vegan = vegan
      this.glutenFree = glutenFree
      this.citrusFree = citrusFree
    }
    FoodItem.prototype.stringify = function() {
      return this.name.toUpperCase() + ' has ' + this.calories + ' calories.\n' + 'Vegan: ' + this.vegan + '\nGluten free: ' + this.glutenFree + '\nCitrus Free: ' + this.citrusFree
    }
    //---------------------------------------------------------\\
    //---------------------------------------------------------\\
    //--------------------PLATE CONSTRUCTOR-------------------\\
    function Plate(name, description, price, ingredients, diet) {
      this.name = name
      this.description = description
      this.price = price
      this.ingredients = ingredients
      this.quantity = 0
      this.diet = diet
    }
    Plate.prototype.isVegan = function() {
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].vegan == false) {
          return false
        }
      }
      return true
    }
    Plate.prototype.isGlutenFree = function() {
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].glutenFree == false) {
          return false
        }
      }
      return true
    }
    Plate.prototype.isCitrusFree = function() {
      for (var i = 0; i < this.ingredients.length; i++) {
        if (this.ingredients[i].citrusFree == false) {
          return false
        }
      }
      return true
    }
    //---------------------------------------------------------\\
    //--------------------ORDER CONSTRUCTOR-------------------\\
    function Order(plates) {
      this.plates = plates
    }
    //---------------------------------------------------------\\
    //--------------------MENU CONSTRUCTOR-------------------\\
    function Menu(plates) {
      this.plates = plates
    }
    Menu.prototype.stringify = function() {
      for (var i = 0; i < this.plates.length; i++) {
        console.log(this.plates[i].stringify())
      }
    }
    //---------------------------------------------------------\\
    //--------------------RESTAURANT CONSTRUCTOR-------------------\\
    function Restaurant(name, description, menu) {
      this.name = name
      this.description = description
      this.menu = menu
    }
  }//END OF CONTROLLER

}());
