import React from 'react';
import { RecipeProps } from './props'

function onClick(index: number) {
    // alert('Item Clicked');
    console.log(index);
}

interface RecipeProps {
    title: string,
    description: string,
    steps: Array<string>,
    stepClick: (index: number) => void;
}

function Recipe({title, description, steps, stepClick}: RecipeProps) {
    const stepDisplay = 
        steps.map(
            (step, index) => 
                <li 
                key={index} 
                onClick={() => stepClick(index)}
                className={step.completed ? 'line-through' : '' }
                >
                    {step.text}
                </li>
        );
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