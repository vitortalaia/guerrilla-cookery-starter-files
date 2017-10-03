import React, { Component } from 'react'
import Header from '../components/header'
import Loader from '../components/loader'
import RecipesList from '../components/recipes-list'

import API from '../api'

const ENTER_CHAR_CODE = 13

class App extends Component {
  constructor () {
    super()

    this.state = {
      isFetching: false,
      recipes: []
    }

    this.fetchRecipes = this.fetchRecipes.bind(this)
    this.onSearchRecipes = this.onSearchRecipes.bind(this)
  }


  fetchRecipes (ingredientList) {
    this.setState({ isFetching: true })

    const params = { i: ingredientList }

    API.get('/', { params })
      .then(this.onFetchRecipesSucess)
      .catch(this.onFetchRecipesFailure)
      .then(() => {
        this.setState({ isFetching: false })
      })
  }

  onFetchRecipesSucess (response) {
    this.setState({
      recipes: response.data.results
    })
  }

  onFetchRecipesFailure (err) {
    console.error(err.message, err)
    alert('An error occurred while trying to fetch recipes. Look at the console for more details.')
  }


  onSearchRecipes (event) {
    if (event.charCode !== ENTER_CHAR_CODE) {
      return
    }

    this.fetchRecipes(event.target.value)
  }

  render () {
    return (
      <div className="container">
        <Header onSearchRecipes={this.onSearchRecipes} />

        { this.state.isFetching && <Loader /> }

        {
          !this.state.isFetching &&
          <RecipesList recipes={ this.state.recipes } />
        }
      </div>
    )
  }
}

export default App
