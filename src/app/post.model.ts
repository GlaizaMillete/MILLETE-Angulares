export class Post{
    title: string;
    image: string;
    description: string;
    author: string;
    dateCreated: Date;
    numberoflikes: number;
    comments: {text: string, timestamp: Date}[] = [];

    constructor(title: string, image: string, description: string, author: string, dateCreated: Date, numberoflikes: number, comments: {text: string, timestamp: Date}[] = [])     
    {this.title = title;
     this.image = image;
     this.description = description;
     this.author = author;
     this.dateCreated = dateCreated;
     this.numberoflikes = numberoflikes;
     this.comments = comments;
    }

}