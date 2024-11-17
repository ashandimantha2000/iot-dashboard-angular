import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { CurrentComponent } from './metrics/current/current.component';
import { AverageComponent } from './metrics/average/average.component';
import { MaxComponent } from './metrics/max/max.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'em-root',
  standalone: true,
  imports: [
    EmployeeComponent,
    CurrentComponent,
    AverageComponent,
    MaxComponent,
    NavComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'iot-dashboard';
}
