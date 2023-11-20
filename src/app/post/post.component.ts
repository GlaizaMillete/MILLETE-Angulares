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
  // newTextForComment: string = '';

  postIndex: number = 0; // Replace with the desired post index
  commentIndex: number = 0; // Replace with the desired comment index

  constructor(private postService: PostService, private router: Router, private actRoute: ActivatedRoute) { }

  deleteComment(commentIndex: number): void {
    if (this.post) {
      this.postService.deleteComment(this.index, commentIndex);
    }
  }

  // editComment(postIndex: number, commentIndex: number, newText: string): void {
  //   this.postService.editComment(postIndex, commentIndex, newText);
  // }
  // editComment(): void {
  //   this.postService.editComment(this.postIndex, this.commentIndex, this.newTextForComment);
  //   this.newTextForComment = ''; // Clear the input field after editing
  // }
  
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



