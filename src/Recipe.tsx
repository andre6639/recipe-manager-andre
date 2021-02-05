import React from 'react';

interface RecipeProps {
    title: string,
    description: string,
    steps: Array<string>,
}

function Recipe({title, description, steps}: RecipeProps) {
    const stepDisplay = 
        steps.map(step => {
            return <li>{step}</li>;
        });
    return (
        <section>
            <h2>{ title }</h2>
            <div>{ description }</div>
            <ol>{ stepDisplay }</ol>
        </section> 
    )
}

//  *** another possibility ***
// function Recipe(props: RecipeProps) {
//     return(
//         <h2>{ props.title }</h2> 
//     )
// }

export default Recipe;