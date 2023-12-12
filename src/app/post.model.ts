export class Post{
    reactedUsers: string[] = [];
    title: string;
    image: string;
    description: string;
    author: string;
    dateCreated: Date;
    numberoflikes: number;
    numberofhearts: number;
    numberoflaugh: number;
    numberofangry : number;
    comments: {text: string, timestamp: Date}[] = [];
    

    constructor(title: string, image: string, description: string, author: string, dateCreated: Date, numberoflikes: number = 0, numberofhearts: number = 0, numberoflaugh: number = 0, numberofangry: number = 0, comments: {text: string, timestamp: Date}[] = [])     
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.dateCreated = dateCreated;
        this.numberoflikes = numberoflikes;
        this.numberofhearts = numberofhearts;
        this.numberoflaugh = numberoflaugh;
        this.numberofangry = numberofangry;
        this.comments = comments;
    }
}