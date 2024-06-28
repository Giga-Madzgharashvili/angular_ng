import { Component } from '@angular/core';
import { Student } from '../app.interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  student!: Student
  constructor() {
    this.student = {
      firstName: 'jone',
      secondName: 'doe',
      age: 22,
      gender: '',
      email: 'test@mail.com',
      favSubject: [],
      isInternational: true ? 'isInternational' : 'local student',
      enrolmentDate: new Date,
      img: 'jane.jpg'

    }
  }
  edit() {
    console.log(this.student.isInternational);
    
  }
}


