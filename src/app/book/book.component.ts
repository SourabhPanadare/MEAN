import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  displayedColumns = ['isbn', 'title', 'author', 'info'];
  dataSource = new MatTableDataSource();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getBooks()
    .subscribe(res => {
      this.dataSource = res.bookresult;
    }, err => {
      console.log(err);
    });
  }
}
