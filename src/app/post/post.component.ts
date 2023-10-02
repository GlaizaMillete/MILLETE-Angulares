import { Component, OnInit, Input } from '@angular/core';
import{ Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  @Input() index: number = 0;
  @Input() post?: Post;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.post);
    console.log(this.index);
  }
  delete(){
    this.postService.deletePost(this.index);
  }
  onEdit(){
    this.router.navigate(['/post.edit', this.index]);
  }
}


