import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-page',
  templateUrl: './bootstrap-page.component.html',
  styleUrls: ['./bootstrap-page.component.css']
})
export class BootstrapPageComponent implements OnInit {

  displayEmoji = false;

  constructor() { }

  ngOnInit(): void {
  }

  funButton() {
    console.log("button click!");
    this.displayEmoji = !this.displayEmoji;
  }

}
