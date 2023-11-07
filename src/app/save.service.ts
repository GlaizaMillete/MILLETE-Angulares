import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor(private http: HttpClient) { }

  saveData(listofPosts: Post[]){
    // const  = this.postService.getPost();
    this.http.put('https://angulares-5b06f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', listofPosts)
    .subscribe((res) => {
      console.log(res);
    })
  }
}
