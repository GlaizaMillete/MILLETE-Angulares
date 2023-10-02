export class Post{
    constructor(
        public title: string,
        public image: string,
        public description: string,
        public author: string,
        public dateCreated: Date)
    { }
}