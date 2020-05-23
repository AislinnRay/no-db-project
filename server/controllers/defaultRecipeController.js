const recipes = require('../../recipes.json')
const axios = require('axios')

module.exports = {
  getThreeRandomFood: (req, res) => {
    const defaultRecipeArray = []
    const rand1 = Math.ceil(Math.random() * 8)
    const rand2 = Math.ceil(Math.random() * 8)
    const rand3 = Math.ceil(Math.random() * 8)


    axios.get(recipes.rand1).then((response1) => {
        defaultRecipeArray.push(response1.data)

      axios.get(recipes.rand2).then((response2) => {
        defaultRecipeArray.push(response2.data)

        axios.get(recipes.rand3).then((response3) => {
            defaultRecipeArray.push(response3.data)

          res.status(200).send(defaultRecipeArray)
        })
      })
    })
  },
}