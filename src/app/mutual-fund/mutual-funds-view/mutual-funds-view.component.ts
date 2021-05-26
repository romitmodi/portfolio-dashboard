import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mutual-funds-view',
  templateUrl: './mutual-funds-view.component.html',
  styleUrls: ['./mutual-funds-view.component.css']
})
export class MutualFundsViewComponent implements OnInit {

  @ViewChild('searchForm') searchForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.searchForm.value);
  }

}
