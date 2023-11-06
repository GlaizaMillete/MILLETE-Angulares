import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private postService: PostService, private http: HttpClient) { }

  saveData(){
    const listofPosts: Post[] = this.postService.getPost();
    this.http.put('https://angulares-5b06f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', listofPosts)
    .subscribe((res) => {
      console.log(res);
    })
  }

  fetchData(){
    return this.http.get<Post[]>('https://angulares-5b06f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    .pipe(tap((listofPosts: Post[])=> {
      console.log(listofPosts)
      this.postService.setPosts(listofPosts);
      // this.postService.listChangedEvent.emit(listofPosts);
    })).subscribe();
  }
}
