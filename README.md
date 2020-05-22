# Recipe Displaying and Making App

## Application Concept and Wireframe
### Application Concept
- This is a recipe displaying and creating app
- We will be utilizing an array of objects with recipes. Later edamamAPI may be used for recipe data.
- Full CRUD
    - GET: get all recipes
    - POST: retrieved recipes will be posted to our array 
    - PUT: Give the recipe a new title or make a new one.
    - DELETE: remove recipes that we do not want
### Functionality
- We want a header at the top of the page to display the name of our app
- When the app loads, three images of food will be loaded on the screen
    - when the food is clicked, we will reveal a recipe
- Once we select a recipe, we will push that recipe to our Cookbook
- The Cookbook will show the new selected recipe
- The Cookbook will show the name of the selected recipe
- The Cookbook will have a button to delete the recipe
- The Cookbook will update when the recipe is deleted

### Endpoints
- GET - fetch 3 random recipes from an array. 
- GET - fetch our Cookbook
- POST - push retrieved recipes to Cookbook
- PUT - change recipe name
- DELETE - delete our recipe from our Cookbook

### Component  Architecture
- App.js (stateful: hold our retrieved recipes information, this.state.retrievedRecipes)
    - Header.js (functional)
    - Finder.js (stateful: axios request to fetch three recipes)
        - Food.js (stateful: this.state.foodClicked)
    -Cookbook.js (functional)
        -Recipe.js (stateful: this.state.name, this.state.editing)

### Wireframe
<img src="./myRecipesWireframe/PNG">
<img src="./myRecipesOutline2/PNG">

