import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  covidForm = this.fb.group({
    regionName: [null, Validators.required],
    avgAge: [null, Validators.required],
    avgDailyIncomeInUSD: [null, Validators.required],
    avgDailyIncomePopulation: [null, Validators.required],
    periodType: [null, Validators.required],
    timeToElapse: [null, Validators.required],
    reportedCases: [null, Validators.required],
    population: [null, Validators.required],
    totalHospitalBeds: [null, Validators.required]
  });

  periods = [
    { name: 'Days', value: 'days' },
    { name: 'Weeks', value: 'weeks' },
    { name: 'Months', value: 'months' }
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
