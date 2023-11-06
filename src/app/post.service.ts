import { EventEmitter, Injectable } from "@angular/core";
import { Post } from './post.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class PostService{

    listChangedEvent: EventEmitter<Post[]> = new EventEmitter();

    listofPosts: Post[] = [
        // new Post("Tech Crunch", "https://www.hostinger.ph/tutorials/wp-content/uploads/sites/2/2021/12/techcrunch-website-homepage.png", "TechCrunch is a blog that provides technology and startup news, from the latest developments in Silicon Valley to venture capital funding.", "Glaiza", new Date(), 9, []),
    
        // new Post ("The Verge", "https://www.hostinger.ph/tutorials/wp-content/uploads/sites/2/2021/12/the-verge-website-homepage.png", "The Verge is a blog focused on examining how technology will change the future", "Glaiza", new Date(), 9, [])
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
    getSpecPost(index: number) {
        return this.listofPosts[index];
    }
    likePost(index: number) {
        this.listofPosts[index].numberoflikes++;
    }
    addComments(index: number, comment: string){
        this.listofPosts[index].comments.push({text: comment, timestamp: new Date() });
    }
    setPosts(listofPosts: Post[]){
        this.listofPosts = listofPosts;
        this.listChangedEvent.emit(listofPosts);
    }
    
    
 
}