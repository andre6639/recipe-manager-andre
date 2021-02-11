export interface Step {
    text: string;
    completed?: boolean;
}

export interface RecipeInfo {
    title: string;
    description: string;
    steps: Array<string>;
}


export interface RecipeProps extends RecipeInfo {
    title: string;
    description: string;
    steps: Array<string>;
    stepClick: (index: number) => void;
}