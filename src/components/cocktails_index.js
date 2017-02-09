import React from 'react';
import {connect} from 'react-redux';
import {updateCurrentCocktail} from '../actions/index'

class CocktailsIndex extends React.Component {
  constructor(){
    super()
    this.renderCocktails = this.renderCocktails.bind(this)
  }

  onClickHandler(event) {
     this.props.showCocktail(event.target.id)
  }

  renderCocktails (cocktail) {
    return (<li key={cocktail.id}>
      <a id={cocktail.id} onClick={this.onClickHandler.bind(this)} >
      {cocktail.name}
      </a>
      </li>)
    }

    render() { return (
  <div>
    <div className='col-md-4'>
      <ul>
        {this.props.cocktails.map(this.renderCocktails)}
      </ul>
    </div>
    <div className='col-md-8'>
      {this.props.children}
    </div>
  </div>
)}
};

function mapDispatchToProps(dispatch){
  return {
    showCocktail: function(id) {
      let action = updateCurrentCocktail(id)
      dispatch(action)
    }
  }
}

function mapStateToProps(state){
  return {
    cocktails: state.cocktails
  }
}


const componentCreator = connect(mapStateToProps,mapDispatchToProps)
export default componentCreator(CocktailsIndex);
