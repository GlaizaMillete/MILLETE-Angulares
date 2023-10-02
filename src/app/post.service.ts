import { Injectable } from "@angular/core";
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })

export class PostService{
    listofPosts: Post[] = [
        new Post("Tech Crunch", "https://www.hostinger.ph/tutorials/wp-content/uploads/sites/2/2021/12/techcrunch-website-homepage.png", "TechCrunch is a blog that provides technology and startup news, from the latest developments in Silicon Valley to venture capital funding.", "Glaiza", new Date()),
    
        new Post ("The Verge", "https://www.hostinger.ph/tutorials/wp-content/uploads/sites/2/2021/12/the-verge-website-homepage.png", "The Verge is a blog focused on examining how technology will change the future", "Glaiza", new Date()),
    ];
    
    getPost(){
        return this.listofPosts;
    }
    deletePost(index: number){
        this.listofPosts.splice(index, 1);
    }
    addPost(post: Post){
        this.listofPosts.push(post);
    }
    updatePost(index: number, post: Post){
        this.listofPosts[index]=post;
    }
    
}