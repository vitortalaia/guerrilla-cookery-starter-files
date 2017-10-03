import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <header className="header">
      <h1 className="header__title">Guerrilla Cookery</h1>

      <div className="header__search">
        <p className="header__instructions">
          Type the ingredients separated by comma on the box below
        </p>

        <input
          type="text"
          className="header__searchbar"
          onKeyPress={ this.props.onSearchRecipes } />
      </div>
    </header>
    )
  }
}

export default Header
