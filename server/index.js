const express = require('express')
const app = express()
const recipes = require('../recipes.json')
const defaultCtrl = require('./controllers/defaultRecipeController')
const myCtrl = require('./controllers/myRecipeController')
app.use(express.json())

app.listen(3333, () => console.log(`Server is listening on port ${3333}`))

//Default recipe endpoints
app.get('/api/default-recipe', defaultCtrl.getThreeRandomFood)

//My recipe endpoints
app.get('/api/recipe', myCtrl.getMyRecipe)
app.post('/api/recipe', myCtrl.saveRecipe)
app.put('/api/recipe/:recipe_id', myCtrl.editRecipeTitle)
app.delete('/api/recipe/:recipe_id', myCtrl.deleteRecipe)
