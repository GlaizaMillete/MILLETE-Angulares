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

    likePost(index: number, email: string) {
        if (!this.listofPosts[index].reactedUsers.includes(email)) {
            this.listofPosts[index].numberoflikes++;
            this.listofPosts[index].reactedUsers.push(email);
            this.saveData();
        }
    }
    
    heartPost(index: number, email: string) {
        if (!this.listofPosts[index].reactedUsers.includes(email)) {
            this.listofPosts[index].numberofhearts++;
            this.listofPosts[index].reactedUsers.push(email);
            this.saveData();
        }
    }
    
    laughPost(index: number, email: string) {
        if (!this.listofPosts[index].reactedUsers.includes(email)) {
            this.listofPosts[index].numberoflaugh++;
            this.listofPosts[index].reactedUsers.push(email);
            this.saveData();
        }
    }
    
    angryPost(index: number, email: string) {
        if (!this.listofPosts[index].reactedUsers.includes(email)) {
            this.listofPosts[index].numberofangry++;
            this.listofPosts[index].reactedUsers.push(email);
            this.saveData();
        }
    }

    addComments(index: number, comment: string){
        this.listofPosts[index].comments.push({text: comment, timestamp: new Date() });
        this.saveData();
    }

    deleteComment( postIndex: number, commentIndex: number) {
        if (this.listofPosts[postIndex] && this.listofPosts[postIndex].comments[commentIndex]) {
            this.listofPosts[postIndex].comments.splice(commentIndex, 1);
            this.saveData();
        }
    }

    setPosts(listofPosts: Post[]) {
        this.listofPosts = listofPosts;
        this.listChangedEvent.emit(listofPosts);
    }

    saveData() {
        this.http.put('https://millete-d9059-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', this.listofPosts)
        .subscribe((res) => {
            console.log(res); 
        });
    }

    fetchData() {
        this.http.get<Post[]>('https://millete-d9059-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
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