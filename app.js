//--------------Start Food Items-------------\\
function FoodItem(name, calories, vegan, glutenFree, citrusFree) {
  this.name = name
  this.calories = calories
  this.vegan = vegan
  this.glutenFree = glutenFree
  this.citrusFree = citrusFree
}
FoodItem.prototype.stringify = function() {
    return (this.name.toUpperCase() + ' has ' + this.calories + ' calories.\n' + 'Vegan: ' + this.vegan + '\nGluten free: ' + this.glutenFree + '\nCitrus Free: ' + this.citrusFree)
  }
//Food
var salad   = new FoodItem('Salad', 200, true, true, false)
var steak   = new FoodItem('Steak', 700, false, true, true)
var brownie = new FoodItem('Brownie', 1500, false, false, true)



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
var oldFashioned = new Drink('Old Fashioned', 'classic cocktail', 8, 'Whiskey, sugar, bitters')



//--------------------Plates-------------------\\
function Plate(name, description, price, ingredients) {
  this.name = name
  this.description = description
  this.price = price
  this.ingredients = ingredients
}
Plate.prototype.stringify = function() {
  return (this.name.toUpperCase() + ' is ' + this.description + '.\nPrice: $' + this.price + '\nIngredients: ' + this.ingredients)
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
var plate1 = new Plate('Daily speacial',  'fresh salad with chocolatey dessert', 13, [salad, brownie])
var plate2 = new Plate('Daily speacial2', 'fresh salad', 14, [salad])
var plate3 = new Plate('Daily speacial3', 'steak and dessert', 15, [steak, brownie])
var platesArray = [plate1, plate2, plate3]



//---------------------Order---------------------\\
function Order(plates) {
  this.plates = plates
}
Order.prototype.stringify = function() {
  for (var i = 0; i < this.plates.length; i++) {
    console.log(this.plates[i].stringify())
  }
}
var order1 = new Order(platesArray)
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
var menu1 = new Menu(platesArray)
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
var RestauranteFantastico = new Restaurant('El Fantastico Restaurante', 'Fantastic Food, Fantatasitic Prices', menu1)
  // console.log("Calling RestauranteFantastico.stringify()")
  // RestauranteFantastico.stringify()



//------------------Customer------------------\\
function Customer(dietaryPreference) {
  this.dietaryPreference = dietaryPreference
}









//
