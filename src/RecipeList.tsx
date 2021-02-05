import React from 'react';

// function wibble(){
//     this.xxxxxx
// }                  ***an example of a different type of usage for "this"

function RecipeList() {
    const recipes = [
        'Chicken gumbo',
        'Pork stir fry',
        'Roast turkey',
        'Baby back ribs'
    ];

    const recipeDisplay = recipes.map(
        recipe => <li>{ recipe }</li>
    )

    return (
        <ul>
            { recipeDisplay }
        </ul>
    )
}

export default RecipeList;