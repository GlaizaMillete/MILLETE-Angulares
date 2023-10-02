import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, Params ,Router } from '@angular/router'; 

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {
  index: number = 0;
  form!: FormGroup;
  editMode = false;
   constructor( private postService: PostService, private router: Router, private actRoute: ActivatedRoute ){ }

  ngOnInit(): void{

    let editTitle = '';
    let editImage = '';
    let editDescription = '';

    this.actRoute.params.subscribe((params: Params)) => {
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

    this.form = new FormGroup({
      title: new FormControl (null, [Validators.required]),
      image: new FormControl (null,  [Validators.required]),  
      description: new FormControl (null,  [Validators.required])
    })
  }

  onSubmit(){
    if(this.form.valid){
    const title = this.form.value.title;
    const image = this.form.value.image;
    const description = this.form.value.description;
   


    const post: Post = new Post(
      title, image, description, 'Glaiza', new Date()
    );

    if(this.editMode==false){
      this.postService.addPost(post)
    }
    else{
      this.postService.updatePost(this.index, post)
    }

    this.router.navigate(['post-list']);
  }

}
