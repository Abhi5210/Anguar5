import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 App';

  technologies:string[]=['Main frames','Java','Angular'];

  headings : string[] = ["Animals","Stationaries","Electronic items"];

  childdata : string[][] =[
    ["Lion","tiger","elephant","dog"],
    ["pen","pencil","eriser","book"],
    ["hard disk","RAM","Mother board"]
  ];
  receive(data,childcount){
    this.childdata[childcount].push(data);
  }
}
