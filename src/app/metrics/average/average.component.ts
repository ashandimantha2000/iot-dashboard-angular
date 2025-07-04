import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'em-average',
  standalone: true,
  imports: [],
  templateUrl: './average.component.html',
  styleUrl: '../metrics.component.scss',
})
export class AverageComponent implements OnInit, OnDestroy {
  temperature: number | string = 'Loading...';
  humidity: number | string = 'Loading...';
  productCount: number | string = 'Loading...';
  private intervalId: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMetrics();
    this.intervalId = setInterval(() => this.fetchMetrics(), 500);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  fetchMetrics(): void {
    // Fetch temperature
    this.http.get<number | string>('http://localhost:3000/metrics/temperature/average')
      .subscribe(data => this.temperature = data, error => this.temperature = 'Error fetching data');

    // Fetch humidity
    this.http.get<number | string>('http://localhost:3000/metrics/humidity/average')
      .subscribe(data => this.humidity = data, error => this.humidity = 'Error fetching data');

    // Fetch product count
    this.http.get<number | string>('http://localhost:3000/metrics/product-count/average')
      .subscribe(data => this.productCount = data, error => this.productCount = 'Error fetching data');
  }
}
