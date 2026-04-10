import { Component } from '@angular/core';
import { Istd } from '../../models/students';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.scss',
 
})
export class Students {
  stdArr:Array<Istd> = [
    {
      fname : 'Jhon',
      lname : 'Doe',
      email : 'jhon@gmail.com',
      contact : 8978675649,
      stdId : '123'
    },
    {
      fname : 'June',
      lname : 'Doe',
      email : 'june@gmail.com',
      contact : 8978675649,
      stdId : '124'
    },
    {
      fname : 'Nancy',
      lname : 'Wheeler',
      email : 'nanacy@gmail.com',
      contact : 9874567897,
      stdId : '125'
    },
    {
      fname : 'May',
      lname : 'Doe',
      email : 'may@gmail.com',
      contact : 7689747873,
      stdId : '126'
    }
  ]
}
