(function() {
  'use strict';
  angular.module('meatNBooze', [])
    .controller('meatController', meatController)

  function meatController() {
    var meatCtrl = this
    meatCtrl.order = function(plate){
      plate.ordered = !plate.ordered
    }






    //--------------------Drinks-------------------\\
    function Drink(name, description, price, ingredients) {
      this.name = name
      this.description = description
      this.price = price
      this.ingredients = ingredients

    }
    Drink.prototype.stringify = function() {

      return (this.name.toUpperCase() + ' is a ' + this.description + '.\nPrice: $' + this.price + '\nIngredients: ' + this.ingredients)
    }
    //Drink
    meatCtrl.oldFashioned = new Drink('Old Fashioned', 'classic cocktail', 8, 'Whiskey, sugar, bitters')


    //--------------Start Food Items-------------\\
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
      //Food
    meatCtrl.salad = new FoodItem('Salad', 200, true, true, false)
    meatCtrl.steak = new FoodItem('Steak', 700, false, true, true)
    meatCtrl.brownie = new FoodItem('Brownie', 1500, false, false, true)






    //--------------------Plates-------------------\\
    function Plate(name, description, price, ingredients) {
      this.name = name
      this.description = description
      this.price = price
      this.ingredients = ingredients
      this.ordered = false
    }
    Plate.prototype.stringify = function() {
      var stringArray = []
      for (var i = 0; i < this.ingredients.length; i++) {
        stringArray.push(this.ingredients[i].name)
      }
      var foodItemsNames = stringArray.join(', ')
      return (this.name.toUpperCase() + ' is ' + this.description + '.\nPrice: $' + this.price + '\nIngredients: ' + foodItemsNames)
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
      //Plates
    meatCtrl.plate1 = new Plate('MWF Special!', 'Fresh salad with chocolatey dessert', 11, [meatCtrl.salad, meatCtrl.brownie])
    meatCtrl.plate2 = new Plate('T/TH Special!', 'Fresh salad and steak', 13, [meatCtrl.salad, meatCtrl.steak])
    meatCtrl.plate3 = new Plate('Brownie', 'Hot brownie with ice cream', 8, [meatCtrl.brownie])
    meatCtrl.plate4 = new Plate('Salad', 'Fresh salad', 3, [meatCtrl.salad])
    meatCtrl.plate5 = new Plate('Steak', 'Filet mignon', 10, [meatCtrl.steak])
    meatCtrl.plate6 = new Plate('Weekend Special!', 'Drinking time', 8, [meatCtrl.oldFashioned])
    meatCtrl.platesArray = [meatCtrl.plate1, meatCtrl.plate2, meatCtrl.plate3, meatCtrl.plate4, meatCtrl.plate5, meatCtrl.plate6]
    console.log(meatCtrl.plate1)
    console.log(meatCtrl.plate2)
    console.log(meatCtrl.plate3)
    console.log(meatCtrl.plate4)
    console.log(meatCtrl.plate5)
    console.log(meatCtrl.plate6)



    //---------------------Order---------------------\\
    function Order(plates) {
      this.plates = plates
    }
    Order.prototype.stringify = function() {
      for (var i = 0; i < this.plates.length; i++) {
        console.log(this.plates[i].stringify())
      }
    }
    meatCtrl.order1 = new Order(meatCtrl.platesArray)
      // console.log("Calling order1.stringify()")
      // order1.stringify()



    //---------------------Menu---------------------\\
    function Menu(plates) {
      this.plates = plates
    }
    Menu.prototype.stringify = function() {
      for (var i = 0; i < this.plates.length; i++) {
        console.log(this.plates[i].stringify())
      }
    }
    meatCtrl.menu1 = new Menu(meatCtrl.platesArray)
      // console.log("Calling menu1.stringify()")
      // menu1.stringify()



    //------------------Restaurant------------------\\
    function Restaurant(name, description, menu) {
      this.name = name
      this.description = description
      this.menu = menu
    }
    Restaurant.prototype.stringify = function() {
      console.log(this.name.toUpperCase() + ': ' + this.description + '.')
      for (var i = 0; i < this.menu.plates.length; i++) {
        console.log(this.menu.plates[i].stringify())
      }
    }
    meatCtrl.meatNBooze = new Restaurant("Meat n' Booze", 'The name says it all', meatCtrl.menu1)
      // console.log("Calling RestauranteFantastico.stringify()")
      // RestauranteFantastico.stringify()



    //------------------Customer------------------\\
    function Customer(dietaryPreference) {
      this.dietaryPreference = dietaryPreference
    }
  }

}());
