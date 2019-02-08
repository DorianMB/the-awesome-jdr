import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Perso} from '../../models/Perso.model';
import {PersosService} from '../../services/perso.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-perso-form',
  templateUrl: './perso-form.component.html',
  styleUrls: ['./perso-form.component.css']
})
export class PersoFormComponent implements OnInit {

  persoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private persosService: PersosService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.persoForm = this.formBuilder.group({
      nom: ['', Validators.required],
      classe: ['', Validators.required],
      race: ['', Validators.required],
      level: ['', [Validators.required, Validators.pattern(/[1-99]/)]],
      historique: '',
      alignement: ''
    });
  }

  onSavePerso() {
    const nom = this.persoForm.get('nom').value;
    const classe = this.persoForm.get('classe').value;
    const race = this.persoForm.get('race').value;
    const level = this.persoForm.get('level').value;
    const historique = this.persoForm.get('historique').value;
    const alignement = this.persoForm.get('alignement').value;
    const createdBy = firebase.auth().currentUser.email;
    const newPerso = new Perso(nom, classe, race, level, createdBy);
    newPerso.historique = historique;
    newPerso.alignement = alignement;
    this.persosService.createNewPerso(newPerso);
    this.router.navigate(['/persos']);
  }
}
