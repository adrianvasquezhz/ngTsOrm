import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit
{
  public text: string = "This is a footer's text!";

  constructor() { }

  ngOnInit(): void
  {

  }
}
