import { EventEmitter, Injectable } from "@angular/core";
import { Post } from './post.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostService{

    constructor(private http: HttpClient) {
        this.fetchData();
    }

    listChangedEvent: EventEmitter<Post[]> = new EventEmitter();

    listofPosts: Post[] = [];

    getPost() {
        return [...this.listofPosts];
    }

    deletePost(index: number){
        this.listofPosts.splice(index, 1);
        this.saveData();
    }

    addPost(post: Post){
        this.listofPosts.push(post);
        this.saveData();
    }

    updatePost(index: number, post: Post){
        this.listofPosts[index]=post;
        this.saveData();
    }

    getSpecPost(index: number) {
        return this.listofPosts[index];
    }

    likePost(index: number) {
        this.listofPosts[index].numberoflikes++;
        this.saveData(); // Save the updated posts to the database
    }

    addComments(index: number, comment: string){
        this.listofPosts[index].comments.push({text: comment, timestamp: new Date() });
        this.saveData();
    }

    setPosts(listofPosts: Post[]) {
        this.listofPosts = listofPosts;
        this.listChangedEvent.emit(listofPosts);
    }

    saveData() {
        this.http.put('https://angulares-5b06f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', this.listofPosts)
        .subscribe((res) => {
            console.log(res); 
        });
    }

    fetchData() {
        this.http.get<Post[]>('https://angulares-5b06f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
        .subscribe((listofPosts: Post[]) => {
            console.log(listofPosts)

            listofPosts.forEach(post => {
                if (!Array.isArray(post.comments)) {
                    post.comments = [];
                }
            });

            this.setPosts(listofPosts);
        });
    }
}