const recipes = require('../../recipes.json')
const myRecipes = [{ id: 0, title: 'Recipe 1', image: 'image', ingredients: ['ingredients'], instructions: 'instructions'}]
let id = 1

module.exports = {
  getMyRecipe: (req, res) => {
    res.status(200).send(recipes)
  },
  saveRecipe: (req, res) => {
    const { title, image, ingredients, instructions } = req.body

    const newRecipe = { id, title, image, ingredients, instructions }

    myRecipes.push(newRecipe)

    id++

    res.status(200).send(myRecipes)
  },
  editRecipeTitle: (req, res) => {
    const { recipes_id } = req.params
    const { newTitle } = req.body

    const index = recipes.findIndex((element) => element.id === +recipes_id)

    if (index === -1) {
      return res.status(404).send('Recipe not found')
    }

    myRecipes[index].title = newTitle

    res.status(200).send(myRecipes)
  },
  deleteRecipe: (req, res) => {
    const { recipes_id } = req.params

    const index = myRecipes.findIndex((element) => element.id === +recipes_id)

    if (index === -1) {
      return res.status(404).send('Recipe not found')
    }

    myRecipes.splice(index, 1)

    res.status(200).send(myRecipes)
  },
}