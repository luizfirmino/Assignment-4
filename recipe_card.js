/*
The Recipe Card (15 points)
Create an object to hold information on your favorite recipe. It should have properties for title (a string),
servings (a number), and ingredients (an array of strings). Your object should have a publically available
method that when called, will log out the recipe within the console so that the recipe information looks
like this:
Guacamole
Serves: 4
Ingredients:
- 3 Avocados
- 1 Lime
- 1 Teaspoon Salt
- 1/2 Cup Onion
- 3 Tablespoons Cilantro
- 2 Diced Tomatoes
- 1 Teaspoon Garlic
- 1 Pinch Ground Pepper
*/

var Recipes = function(){
    
    var _title = "Guacamole";
    var _serves = 4;
    var ingredients = [""];
    ingredients[0] = "- 3 Avocados";
    ingredients[1] = "- 1 Lime";
    ingredients[2] = "- 1 Teaspoon Salt";
    ingredients[3] = "- 1/2 Cup Onion";
    ingredients[4] = "- 3 Tablespoons Cilantro";
    ingredients[5] = "- 2 Diced Tomatoes";
    ingredients[6] = "- 1 Teaspoon Garlic";
    ingredients[7] = "- 1 Pinch Ground Pepper";
    
    this.displayRecipe = function(){
            
        window.console.log(_title + "\n");
        window.console.log("Serves: " + _serves + "\n");
        window.console.log("Ingredients:\n");
        for (var i in ingredients){
            window.console.log(ingredients[i] + "\n");
        }
        
    }
    
}

var Guacamole = new Recipes();
Guacamole.displayRecipe();
