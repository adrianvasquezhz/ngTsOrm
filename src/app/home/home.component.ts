import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public lista: Array<Pet> = [];
  public lista2: Array<IPet> = [];
  public placeholderText = "Nombre"
  public variable = "Test variable from xyz.component.ts";

  @Input() msgFromApp!: string;
  @Output() msgToApp: EventEmitter<CustomEventObj> = new EventEmitter<CustomEventObj>();

  constructor() { }

  ngOnInit(): void {
    
    this.lista = [
      new Pet(
        "Dog",
        "https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg"
      ),
      new Pet(
        "Cat",
        "https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg"
      )
    ];
    
    this.lista2 = [
      {
        name: "Dog",
        url: "https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg"
      }
    ];
  }

  items(arr: number[]): Number[] {
    return arr.map((el) => el)
  }

  handleClick(value: string): void {
    console.log(value);
  }

  handleInput(e: any, elTarget: HTMLParagraphElement): void {
    console.log(e)
    elTarget.innerHTML = e.target.value;
    this.msgToApp.emit(new CustomEventObj("Message to App"));     
  }
}

class Pet {
  name: string;
  url: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url
  }
}

interface IPet {
  name: string;
  url: string;
}

export class CustomEventObj
{
  test1?: string = undefined; // seems optional value
  test2!: string; // !: non-null assertion operator
  message: string;

  constructor(msg: string) {
    this.message = msg;
  }
}