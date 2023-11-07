import { PostService } from './../post.service';
import { BackEndService } from './../back-end.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private backEndService: BackEndService, private postService: PostService, private route: ActivatedRoute){ }

ngOnInit(): void {
    
}

onSave(){
  // this.backEndService.saveData();
}
onFetch() {
  this.backEndService.fetchData();
}


}
