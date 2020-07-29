import { Ingredient } from '../shared/ingredient.model';


export class Recipe {
    public name: String;
    public description: String;
    public imagePath: String;
    public ingredients : Ingredient[];

    constructor(name: String, desc: String, imagePath: String, ingredients : Ingredient[]) {
        this.description = desc;
        this.imagePath = imagePath;
        this.name = name;
        this.ingredients = ingredients;
    }
}