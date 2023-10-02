import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {

  form!: FormGroup;
   constructor( private postService: PostService, private router: Router ){ }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl (null, [Validators.required]),
      image: new FormControl (null,  [Validators.required]),  
      description: new FormControl (null,  [Validators.required])
    })
  }

  onSubmit(){
    const title = this.form.value.title;
    const image = this.form.value.image;
    const description = this.form.value.description;
   


    const post: Post = new Post(
      title, image, description, 'Glaiza', new Date()
    );

    this.postService.addPost(post);

    this.router.navigate(['post-list'])
  }

}
