import React, { useState } from 'react';
import RecipeList from './RecipeList';
import Recipe from './Recipe';
// import { title } from 'process';
import { RecipeInfo, REcipeINfo, RecipeProps } from './props';

// interface Recipe {
//     title: string;
//     description: string;
//     steps: Array<string>;
// }


function App() {
    const mashedPotatoesRecipe: RecipeInfo = {
        title: 'Stateful mashed taters',
        description: 'They are taters that are mashed',
        steps: [
            { text: 'Cut taters', completed: false},
            { text: 'Boil taters', completed: false},
            { text: 'Mash taters', completed: false}
        ]
    };

    // TODO: Figure out why the generic isn't working
    const [recipe, setRecipe] = useState<Recipe>(mashedPotatoesRecipe);


    function toggleStepCompletion(index: number) {
        const tempRecipe = {...recipe};
        tempRecipe.steps[index].completed = !tempRecipe.steps[index].completed;
        setRecipe(tempRecipe);
        console.log(`Step ${index}  from ./App.tsx`);
    }

    function updateRecipe() {
        console.log('clicked');
        setRecipe({...mashedPotatoesRecipe});
    }


    // Setting up state
    // Loading data

    return (
        // <RecipeList />
        <section>
            <Recipe {...recipe} stepClick={toggleStepCompletion} />
            <button onClick={updateRecipe}>ClickMe!!!</button>
        </section>
    )
}

export default App;