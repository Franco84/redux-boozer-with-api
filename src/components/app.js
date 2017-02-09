import React from 'react';
import NavBar from './nav_bar';
import CocktailsIndex from './cocktails_index';
import CocktailsShow from './cocktails_show';
import CreateCocktail from './create_cocktail';

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <CocktailsIndex />
            </div>
          <div className='col-6'>
            <CocktailsShow />
          </div>
          <div className='col'>
            <CreateCocktail />
          </div>
        </div>
      </div>
    </div>
    )
};
