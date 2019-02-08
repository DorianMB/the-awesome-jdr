import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Perso} from '../../models/Perso.model';
import {PersosService} from '../../services/perso.service';

@Component({
  selector: 'app-perso-edit',
  templateUrl: './perso-edit.component.html',
  styleUrls: ['./perso-edit.component.css']
})
export class PersoEditComponent implements OnInit {

  persoEdit: FormGroup;
  perso: Perso;

  constructor(private formBuilder: FormBuilder,
              private persosService: PersosService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.perso = new Perso('', '', '',1, '');
    const id = this.route.snapshot.params.id;
    this.persosService.getSinglePerso(+id).then(
      (perso: Perso) => {
        this.perso = perso;
      }
    );
    this.initForm();
  }

  initForm() {
    this.persoEdit = this.formBuilder.group({
      nom: this.perso.nom,
      classe: this.perso.classe,
      race: this.perso.race,
      level: this.perso.level,
      historique: this.perso.historique ? this.perso.historique : '',
      alignement: this.perso.alignement ? this.perso.alignement : '',
      force: this.perso.force ? this.perso.force : '',
      dex: this.perso.dex ? this.perso.dex : '',
      constitution: this.perso.constitution ? this.perso.constitution : '',
      intelligence: this.perso.intelligence ? this.perso.intelligence : '',
      sagesse: this.perso.sagesse ? this.perso.sagesse : '',
      charisme: this.perso.charisme ? this.perso.charisme : '',
      inspiration: this.perso.inspiration ? this.perso.inspiration : '',
      bonusMaitrise: this.perso.bonusMaitrise ? this.perso.bonusMaitrise : '',
    });
    this.persosService.getPersos();
  }

  onSavePerso() {
    const nom = this.persoEdit.get('nom').value ? this.persoEdit.get('nom').value : this.perso.nom;
    const classe = this.persoEdit.get('classe').value ? this.persoEdit.get('classe').value : this.perso.classe;
    const race = this.persoEdit.get('race').value ? this.persoEdit.get('race').value : this.perso.race;
    let level: number;
    if (this.persoEdit.get('level').value !== 1) {
      level = this.persoEdit.get('level').value;
    } else {
      level = this.perso.level;
    }
    const createdBy = this.perso.createdBy;
    const newPerso = new Perso(nom, classe, race, level, createdBy);
    newPerso.historique = this.persoEdit.get('historique').value ? this.persoEdit.get('historique').value : this.perso.historique;
    newPerso.alignement = this.persoEdit.get('alignement').value ? this.persoEdit.get('alignement').value : this.perso.alignement;
    if (this.persoEdit.get('force').value !== '') {
      newPerso.force = +this.persoEdit.get('force').value;
    } else {
      newPerso.force = +this.perso.force;
    }
    if (this.persoEdit.get('dex').value !== '') {
      newPerso.dex = +this.persoEdit.get('dex').value;
    } else {
      newPerso.dex = +this.perso.dex;
    }
    if (this.persoEdit.get('constitution').value !== '') {
      newPerso.constitution = +this.persoEdit.get('constitution').value;
    } else {
      newPerso.constitution = +this.perso.constitution;
    }
    if (this.persoEdit.get('intelligence').value !== '') {
      newPerso.intelligence = +this.persoEdit.get('intelligence').value;
    } else {
      newPerso.intelligence = +this.perso.intelligence;
    }
    if (this.persoEdit.get('sagesse').value !== '') {
      newPerso.sagesse = +this.persoEdit.get('sagesse').value;
    } else {
      newPerso.sagesse = +this.perso.sagesse;
    }
    if (this.persoEdit.get('charisme').value !== '') {
      newPerso.charisme = +this.persoEdit.get('charisme').value;
    } else {
      newPerso.charisme = +this.perso.charisme;
    }
    if (this.persoEdit.get('inspiration').value !== '') {
      newPerso.inspiration = +this.persoEdit.get('inspiration').value;
    } else {
      newPerso.inspiration = +this.perso.inspiration;
    }
    if (this.persoEdit.get('bonusMaitrise').value !== '') {
      newPerso.bonusMaitrise = +this.persoEdit.get('bonusMaitrise').value;
    } else {
      newPerso.bonusMaitrise = +this.perso.bonusMaitrise;
    }
    this.persosService.updateEditPerso(this.route.snapshot.params.id, newPerso);
    this.router.navigate(['/persos']);
  }
}
