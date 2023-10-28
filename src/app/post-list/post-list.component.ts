import { Component, OnInit , Input} from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Injectable } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  n= 0;
  listofPosts: Post[] = []
  
  constructor(private postService: PostService, private actRoute: ActivatedRoute, private http: HttpClient) { }


  ngOnInit(): void {
    this.listofPosts=this.postService.getPost();
    this.fetchPosts();

    // this.actRoute.params.subscribe(params => {
    //   this.postService +params['listofPosts']; // Get the post ID from the route parameter

    //   this.postService.getPostContent(this.).subscribe((data) => {
    //     this.postService = data;
    //   });
    // });
  }

  fetchPosts(){
    this.http.get('https://angulares-5b06f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json').subscribe ((data: any) => this.getPost = data;
});
}

