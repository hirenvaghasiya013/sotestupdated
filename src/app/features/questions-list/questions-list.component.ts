import { Component, OnInit } from '@angular/core';
import { QuestionsListService } from './questions-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  questionList = [];
  months: any = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor(
    private ql: QuestionsListService,
    private router: Router) { }

  ngOnInit() {
    this.getAllQueList();
  }

  getAllQueList() {
    this.ql.getAllQuesionList().subscribe((res) => {
      this.questionList = res.items;
      this.questionList.forEach(element => {
        element.creation_date = this.getDate(element.creation_date);
      });
      console.log(this.questionList);
    });
  }

  getDate(date) {
    let newDate = new Date(date*1000); 
    let month = newDate.getMonth();
    let day = newDate.getDate();
    let time = newDate.getHours() + ':' + newDate.getMinutes();
    return `${this.months[month]} ${day} at ${time}`;
  }

  goToProfile(id){
    this.router.navigate(['dashboard/profile', id]);
  }

}
