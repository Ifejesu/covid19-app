import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19-app';
  covidForm = this.fb.group({
    regionName: [null, Validators.required],
    avgAge: [null, Validators.required],
    avgDailyIncomeUSD: [null, Validators.required],
    avgDailyIncomePopulation: [null, Validators.required],
    periodType: ['days', Validators.required],
    timetoElapse: [null, Validators.required],
    reportedCases: [null, Validators.required],
    population: [null, Validators.required],
    totalHospitalBeds: [null, Validators.required]
  });

  period = [
    { name: 'Days', value: 'days' },
    { name: 'Weeks', value: 'weeks' },
    { name: 'Months', value: 'months' }
  ];

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    alert('Thanks!');
  }
}
