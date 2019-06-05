import { Component, OnInit } from '@angular/core';
import {EtudiantsService} from '../../services/etudiants/etudiants.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Etudiant} from '../../modeles/etudiant';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public etu: Etudiant;
  public qualite: string;
  private id: number;
  constructor(public etuService: EtudiantsService, private path: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.path.params.subscribe(param => {
      this.id = param.id;
      this.etu = this.etuService.listeEtudiants[this.id];
      this.qualite = this.etu.qualite.join(' ; ');
    });
  }

  submitChange(form) {
    this.etu.qualite = this.qualite.split(' ; ');
    this.etuService.listeEtudiants[this.id] = this.etu;
    this.route.navigate(['etudiants']);
  }

}
