

export class Recipe {
    public name: String;
    public description: String;
    public imagePath: String;

    constructor(name: String, desc: String, imagePath: String) {
        this.description = desc;
        this.imagePath = imagePath;
        this.name = name;
    }
}