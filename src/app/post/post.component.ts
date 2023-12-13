import { Component, OnInit, Input } from '@angular/core';
import{ Post } from '../post.model';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit{
  @Input() index: number = 0;
  newCommentText: string[] = [];
  @Input() post?: Post;
 
  newComment: string = '';

  // postIndex: number = 0; 
  commentIndex: number = 0; 
  email: string = ''; 
  isEditing: boolean[] = [];
  

  constructor(private postService: PostService, private router: Router, private actRoute: ActivatedRoute, private authService: AuthService) {
    this.authService.emailUpdated.subscribe((email: string) => {
      this.email = email;
      localStorage.setItem('email', email);
    });
   }

  deleteComment(commentIndex: number): void {
    if (this.post) {
      this.postService.deleteComment(this.index, commentIndex);
    }
  }
  
  toggleEdit(index: number) {
    this.isEditing[index] = !this.isEditing[index];
    if (this.isEditing[index] && this.post && this.post.comments[index]) {
      this.newCommentText[index] = this.post.comments[index].text;
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
    this.postService.likePost(this.index, this.email);
  }

  onheart(){
      this.postService.heartPost(this.index, this.email);
  }

  onlaugh(){
      this.postService.laughPost(this.index, this.email);
  }

  onangry(){
      this.postService.angryPost(this.index, this.email);
  }
  addComment(comment: string){
    this.postService.addComments(this.index, comment);
    this.newComment = '';
  }
  editComment(commentIndex: number, newText: string) {
    this.postService.editComment(this.index, commentIndex, newText);
    this.isEditing[commentIndex] = false;
  }
}



