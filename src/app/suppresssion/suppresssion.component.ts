import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppresssion',
  templateUrl: './suppresssion.component.html',
  styleUrls: ['./suppresssion.component.css']
})
export class SuppresssionComponent implements OnInit {

  title = 'my-first-task';
  collection = [];
  games=[];
  page;
  searchText = '';

  constructor() {
    // for (let i = 1; i <= 100; i++) {
    //   this.collection.push(`item ${i}`);
    // }
     this.games = [{
            AlreadyContacted  : "Already Contacted",
            ModifiedDate: " 28-Apr-2020- 12:39 PM",
            ModifiedBy : "Chris Jericho",
            Record : 0
        },
        {
          AlreadyContacted  : "Marketo Leads",
          ModifiedDate: " 25-Apr-2020- 12:39 PM",
          ModifiedBy : "Mark Hendry",
          Record : 7800
        },
        {
          AlreadyContacted  : "Do Not Disturb",
          ModifiedDate: " 23-Apr-2020- 12:39 PM",
          ModifiedBy : "Jhone Nick",
          Record : 3500
        },
        {
          AlreadyContacted  : "Mark Hendry",
          ModifiedDate: " 21-Apr-2020- 12:39 PM",
          ModifiedBy : "Dwen Samuel",
          Record : 3200
        },
        {
          AlreadyContacted  : "Do Not Disturb",
          ModifiedDate: " 28-Apr-2020- 12:39 PM",
          ModifiedBy : "Christoper",
          Record : 4000
        },
        {
          AlreadyContacted  : "Marketo Leads",
          ModifiedDate: " 28-Apr-2020- 12:39 PM",
          ModifiedBy : "Jhone Ali",
          Record : 2600
        },
        {
          AlreadyContacted  : "Already Contacted",
          ModifiedDate: " 28-Apr-2020- 12:39 PM",
          ModifiedBy : "Ashok",
          Record : 5200
        },
        {
          AlreadyContacted  : "Mark Hendry",
          ModifiedDate: " 20-Apr-2020- 12:39 PM",
          ModifiedBy : "Bargav",
          Record : 2200
        },
        {
          AlreadyContacted  : "Do Not Disturb",
          ModifiedDate: " 28-Apr-2020- 12:39 PM",
          ModifiedBy : "Raja",
          Record : 3000
        },
        {
          AlreadyContacted  : "Already Contacted",
          ModifiedDate: " 28-Apr-2020- 12:39 PM",
          ModifiedBy : "pavan",
          Record : 200
        },
        {
          AlreadyContacted  : "Marketo Leads",
          ModifiedDate: " 15-Apr-2020- 12:39 PM",
          ModifiedBy : "swathi",
          Record : 650
        },
        {
          AlreadyContacted  : "Already Contacted",
          ModifiedDate: " 10-Apr-2020- 12:39 PM",
          ModifiedBy : "kiran",
          Record : 1200
        },
        {
          AlreadyContacted  : "Do Not Disturb",
          ModifiedDate: " 12-Apr-2020- 12:39 PM",
          ModifiedBy : "sumanth",
          Record : 1400
        },
        {
          AlreadyContacted  : "Already Contacted",
          ModifiedDate: " 22-Apr-2020- 12:39 PM",
          ModifiedBy : "pawan",
          Record : 290
        },
        {
          AlreadyContacted  : "Do Not Disturb",
          ModifiedDate: " 24-Apr-2020- 12:39 PM",
          ModifiedBy : "Prashanth",
          Record : 200
        },
        {
          AlreadyContacted  : "Already Contacted",
          ModifiedDate: " 26-Apr-2020- 12:39 PM",
          ModifiedBy : "Ajith",
          Record : 200
        },
        {
          AlreadyContacted  : "Marketo Leads",
          ModifiedDate: " 25-Apr-2020- 12:39 PM",
          ModifiedBy : "Manoj",
          Record : 300
        },
        {
          AlreadyContacted  : "Do Not Disturb",
          ModifiedDate: " 22-Apr-2020- 12:39 PM",
          ModifiedBy : "Gokul",
          Record : 400
        },
        {
          AlreadyContacted  : "Marketo Leads",
          ModifiedDate: " 21-Apr-2020- 12:39 PM",
          ModifiedBy : "Bargav",
          Record : 1200
        },
        {
          AlreadyContacted : "Do Not Disturb",
          ModifiedDate: " 15-Apr-2020- 12:39 PM",
          ModifiedBy : "Ashok",
          Record : 7000
        }];
  
  }
  ngOnInit(){
    // throw new Error('Method not implemented.');
  }

  edit(){

  }

  delete(i){
    this.games.splice(i);
  }

}
