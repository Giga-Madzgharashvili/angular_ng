import { AfterContentChecked, AfterContentInit, AfterViewChecked,  AfterViewInit,  Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { laptop } from '../app.interface';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from "../student-card/student-card.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, StudentCardComponent]
})
export class HomeComponent{
  title: string = 'ეს არის ჩემი პირველი ანგულარ აპლიკაცია';
  date: Date = new Date();
  version: number = 1;
  myLeptop!: laptop;

  constructor() {
    (this.title = `ეს არის ჩემი პირველი ანგულარ აპლიკაცია ${this.version}`),
      (this.myLeptop = {
        brand: 'Lenovo',
        year: 2024,
        hasFrontCamera: true,
        keyBoardType: 'short',
      });
  }
// ngOnChanges(changes: SimpleChanges): void {
//   console.log(changes);
  
// }

// ngOnInit(): void {
//   console.log('my app inicialized');
//   this.version = 5;
//   this.myLeptop.brand = 'acer'
  
// }

// ngDoCheck(): void {
//   console.log("do chack");
  
// }

// ngAfterContentChecked(): void {
//   console.log('after contetn check');
  
// }

// ngAfterContentInit(): void {
//   console.log('after content init');
  
// }

// ngAfterViewChecked(): void {
//   console.log('after viewed chck');


  
// }
 
// ngAfterViewInit(): void {
//   console.log('after viewd init');
  
// }

// ngOnDestroy(): void {
//   console.log('on distriy');
  
// }
//   increment(ev: Event) {
//     // console.log(Event);
//     this.version++;
//   }
}
// implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy

