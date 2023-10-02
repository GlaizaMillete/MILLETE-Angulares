import { Component, OnInit , Input} from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Injectable } from "@angular/core";
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  n= 0;
  listofPosts: Post[] = []
  
  constructor(private postService: PostService) { }


  ngOnInit(): void {
    this.listofPosts=this.postService.getPost();
  }
}

