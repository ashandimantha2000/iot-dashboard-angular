import { Component } from '@angular/core';
import employees from './data.json';

@Component({
  selector: 'em-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  name: string = 'iot-dashboard';
  employees: any[] = employees;

}
