import { Component, OnInit } from '@angular/core';
import {EtudiantsService} from '../services/etudiants/etudiants.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {

  constructor(public etuService: EtudiantsService) { }

  ngOnInit() {
  }

}
