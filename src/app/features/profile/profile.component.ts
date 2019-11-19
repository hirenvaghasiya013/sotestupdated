import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: any;
  userDetails: [];
  tagsDetails: [];
  questionDetails: [];

  constructor( 
    private ps: ProfileService,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getUserByIdsDetails(this.id);
    this.getTagsByUsersDetails(this.id);
    this.getQuestionofUsersDetails(this.id);
  }

  getUserByIdsDetails(id){
    this.ps.getUserByIds(id).subscribe((res) => {
      this.userDetails = res.items[0];
      console.log(this.userDetails);
      
    });
  }

  getTagsByUsersDetails(id){
    this.ps.getTagsByUsers(id).subscribe((res) => {
      let tagsList = res.items;
      this.tagsDetails = tagsList.filter(element => element['count'] > 5);
      console.log(this.tagsDetails);
    });
  }

  getQuestionofUsersDetails(id){
    this.ps.getQuestionofUsers(id).subscribe((res) => {
      this.questionDetails = res.items;
      console.log(this.questionDetails);
    });
  }
}
