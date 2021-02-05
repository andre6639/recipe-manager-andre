import React, { useState } from 'react';
import RecipeList from './RecipeList';
import Recipe from './Recipe';

function App() {
    const mashedPotatoesRecipe = {
        title: 'Mashed Potatoes',
        description: 'Taters mashed into Carriers for Gravy',
        steps: [
            'Cut Taters',
            'Boil Taters',
            'Mash Taters'
        ]
    };

    const [recipe, setRecipe] = useState(mashedPotatoesRecipe)

    // Setting up state
    // Loading data

    return (
        // <RecipeList />
        <section>
            <Recipe {... recipe } />
        </section>
        // *** The above code shortens the code that follows. ***  <Recipe title={mashedPotatoesRecipe.title} description={mashedPotatoesRecipe.description} />
    )
}

export default App;