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
  onlike(){
    this.postService.likePost(this.index);
  }
  onheart(){
    this.postService.heartPost(this.index);
  }
  onlaugh(){
    this.postService.laughPost(this.index);
  }
  onangry(){
    this.postService.angryPost(this.index);
  }
  addComment(comment: string){
    this.postService.addComments(this.index, comment);
    this.newComment = '';
  }
  
}



