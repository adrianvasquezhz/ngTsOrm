import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Sequelize } from 'sequelize';
// import * as ddbb from "db";
// import {  } from "db";
// import {  } from "db:2";
import {  } from '../../utils/db';
import {  } from 'http-proxy'; // namespace 

// const bvn = new asd();


@Component({
  selector: 'app-xyz',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public lista: Array<Pet> = [];
  public lista2: Array<IPet> = [];
  public placeholderText: string = "Nombre"
  public variable = "Test variable from xyz.component.ts";
  // public typee: Abc = "1"

  @Input() msgFromApp!: string;
  @Output() msgToApp: EventEmitter<CustomEventObj> = new EventEmitter<CustomEventObj>();

  constructor() { }

  ngOnInit(): void
  {
    console.log(Say())
    // ==
    // console.log(hostApi);
    // console.log(word);
    // console.log(Say());
    // console.log(this.typee);
    // ==
    this.msgToApp.subscribe()
    
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
        url: "https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg",
        say() {
          return "abc"
        }
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

// basicamente lo que hace "?:" es indicar que puede ser undefined, y no hay problema. Seria como si fuese "some type" | undefined

interface IPet {
  name: string;
  url: string;
  tag?: string;
  say(x: number, y: number, z: number): string;
  walk?: (x: number, y: number, z: number) => void
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

declare type Datas = {

}

type CallBack = () => void; // representa una function que no devuelve nada. No puede usarse function() en lugar de arrow function xq no tiene
                            // que usarse curly brackets "{ }"



let variable: CallBack;
variable = function() { };


interface IPerson {
  a: number;
  b: number;
}

class Person implements IPerson
{
  a!: number;
  b!: number;
}


let variable2: IPerson;

variable2 = new Person();


type Dice = [number, number]

let var1: Dice = [1, 2]

let var2: Dice = [1, 2]

interface ICar {
  color: string;
}

interface ICar {
  seguro: boolean
}

class Car implements ICar {
  color!: string;
  seguro!: boolean;
}





interface Type1 {
  a: string;
  b: string;
};

interface Alternative {
  x: string;
  y: string
}

interface Type2 {
  c: string;
};

type Union = (Type1 | Alternative) & Type2;

let unionVar: Union;
// unionVar = {  };





type Works<T> = {
  [K in keyof T]: T[K];
}

interface NotWorks<T> {
  a: T
}


type Numero1<T> = {
  a: T;
  b: number;
}

type Numero2 = {
  a: number;
  b: number;
}

class Numeros implements Works<Numero2>
{
  a!: number;
  b!: number;
}


type Arrayish = {
  [n: number]: boolean;
  a: boolean;
} 

type A = keyof Arrayish;

let a: A = "a";

// ----------------------

type Test = {
  a: number;
  b: number
}