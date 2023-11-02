import { Component, OnInit } from '@angular/core';
import {Employee} from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{

  employees :Employee[] =[

    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: 1234567890,
      salary: 50000,
      department: 'HR'
    }
  ];

  constructor(){}

  ngOnInit(): void {

    this.employees.push()
    
  }

}
