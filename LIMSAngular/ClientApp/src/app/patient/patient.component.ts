import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from './patient-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  private patientServiceService: PatientServiceService;
  constructor(patientServiceService: PatientServiceService) {
    this.patientServiceService = patientServiceService;
  }

  ngOnInit() {
    this.patientServiceService.getPatientList().subscribe(res => console.log(res))
  }

}
