import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute ,Params, Router } from '@angular/router'; 

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {

    // posts = [
    //   { numberoflikes: 100 },
    //   { numberoflikes: NaN },
    //   { numberoflikes: 50 },
    //   { numberoflikes: NaN },
    //   { numberoflikes: 75 }
    // ];
  index: number = 0;
  form!: FormGroup;
  editMode = false;
  // editCommentMode = false;
  // commentIndex: number = -1;
   constructor( private postService: PostService, private router: Router, private actRoute: ActivatedRoute ){ }

//    enterEditCommentMode(commentIndex: number): void {
//     this.editCommentMode = true;
//     this.commentIndex = commentIndex;
//   }

//  updateComment(newText: string): void {
//     if (this.editMode && this.editCommentMode && this.commentIndex !== -1) {
//       this.postService.editComment(this.index, this.commentIndex, newText);
//       this.exitEditCommentMode();
//     }
//   }

//  exitEditCommentMode(): void {
//     this.editCommentMode = false;
//     this.commentIndex = -1;
  ngOnInit(): void{

    let editTitle = '';
    let editImage = '';
    let editDescription = '';

    this.actRoute.params.subscribe((params: Params) => {
      if (params['index']){
        console.log(params['index']);
        this.index = params['index'];

        const editPost = this.postService.getSpecPost(this.index);

        editTitle= editPost.title;
        editImage= editPost.image;
        editDescription= editPost.description;

        this.editMode= true;
      }
    }
    )

    this.form = new FormGroup({
      title: new FormControl (editTitle, [Validators.required]),
      image: new FormControl (editImage,  [Validators.required]),  
      description: new FormControl (editDescription,  [Validators.required])
    })
  }

  onSubmit(){
    if(this.form.valid){
    const title = this.form.value.title;
    const image = this.form.value.image;
    const description = this.form.value.description;
    const numberoflikess = this.form.value.numberoflikes;
    const numberofheartss = this.form.value.numberofhearts;
    const numberoflaughs = this.form.value.numberoflaugh;
    const numberofangryy = this.form.value.numberofangry;
    
    const post: Post = new Post(
      title, image, description, 'Glaiza', new Date(), numberoflikess, numberofheartss, numberoflaughs, numberofangryy, []
    );

  
  

    if(this.editMode==false){
      this.postService.addPost(post);
    }
    else{
      this.postService.updatePost(this.index, post);
    }

    this.router.navigate(['post-list']);

    } 
  }
}
