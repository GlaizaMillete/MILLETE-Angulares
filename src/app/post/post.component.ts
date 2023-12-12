import { Component, OnInit, Input } from '@angular/core';
import{ Post } from '../post.model';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit{
  @Input() index: number = 0;
  @Input() post?: Post;
 
  newComment: string = '';

  // postIndex: number = 0; 
  commentIndex: number = 0; 

  userReaction: 'like' | 'heart' | 'laugh' | 'angry' | null = null;

  constructor(private postService: PostService, private router: Router, private actRoute: ActivatedRoute) { }

  deleteComment(commentIndex: number): void {
    if (this.post) {
      this.postService.deleteComment(this.index, commentIndex);
    }
  }

 

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.index);

  }

  
  delete(){
    this.postService.deletePost(this.index);
  }
  onEdit(){
    this.router.navigate(['/post-edit', this.index]);
  }
  onlike() {
    if (this.userReaction !== 'like') {
      this.postService.likePost(this.index);
      this.userReaction = 'like';
    }
  }
  onheart() {
    if (this.userReaction !== 'heart') {
      this.postService.heartPost(this.index);
      this.userReaction = 'heart';
    }
  }
  onlaugh() {
    if (this.userReaction !== 'laugh') {
      this.postService.laughPost(this.index);
      this.userReaction = 'laugh';
    }
  }
  onangry() {
    if (this.userReaction !== 'angry') {
      this.postService.angryPost(this.index);
      this.userReaction = 'angry';
    }
  }
  addComment(comment: string){
    this.postService.addComments(this.index, comment);
    this.newComment = '';
  }
  
}



