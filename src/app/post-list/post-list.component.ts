import { Component, OnInit , Input} from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { BackEndService } from '../back-end.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  n= 0;
  listofPosts: Post[] = []
  
  constructor(private postService: PostService, private router: Router, private backEndService: BackEndService) { }


  ngOnInit(): void {
    // this.backEndService.fetchData();
    this.listofPosts=this.postService.getPost();
    this.postService.listChangedEvent.subscribe((posts: Post[]) => {
      this.listofPosts = posts;
    });
  }


}

