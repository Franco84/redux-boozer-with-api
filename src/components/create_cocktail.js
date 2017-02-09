import React from 'react';
import {connect} from 'react-redux';
import {createCocktail} from '../actions/index'


class CreateCocktail extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    event.preventDefault()

    //let cocktailForm = event.target
    //debugger

    let newDrink = {
      name: event.target.name.value,
      description: event.target.description.value,
      instructions: event.target.instructions.value,
      source: event.target.source.value
    }

    this.props.newCocktail(newDrink)
  }

  render(){
    return(
      <form onSubmit={this.handleClick}>
        <h1>New Cocktail</h1>
        <div>
          <h2>Name: </h2>
          <input id='name' />
        </div>

        <div>
          <h2>Description: </h2>
          <textarea id='description' />
        </div>

        <div>
          <h2>Instructions: </h2>
          <textarea id='instructions' />
        </div>

        <div>
          <h2>Source: </h2>
          <input id='source' />
        </div>

        <div>
          <br />
          <button className="btn" type="submit">CLICK ME!</button>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    newCocktail: function(cocktail){
      let action = createCocktail(cocktail)
      dispatch(action)
      //console.log('Might create new ')
    }
  }
}

function mapStateToProps(){
  return {}
}

const componentCreator = connect(mapStateToProps,mapDispatchToProps)
export default componentCreator(CreateCocktail)
