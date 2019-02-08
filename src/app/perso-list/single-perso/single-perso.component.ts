import { Component, OnInit } from '@angular/core';
import {Perso} from '../../models/Perso.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PersosService} from '../../services/perso.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-single-perso',
  templateUrl: './single-perso.component.html',
  styleUrls: ['./single-perso.component.css']
})
export class SinglePersoComponent implements OnInit {

  perso: Perso;

  constructor(private route: ActivatedRoute,
              private persosService: PersosService,
              private router: Router) { }

  ngOnInit() {
    this.perso = new Perso('', '', '', 1, '');
    const id = this.route.snapshot.params.id;
    this.persosService.getSinglePerso(+id).then(
      (perso: Perso) => {
        this.perso = perso;
      }
    );
  }

  onBack() {
    this.router.navigate(['/persos']);
  }

  onEdit() {
    const id: number = this.route.snapshot.params.id;
    this.router.navigate(['/persos', 'edit', id]);
  }

  isCreatedBy() {
    if ( firebase.auth().currentUser.email === this.perso.createdBy || firebase.auth().currentUser.email === 'dorian@marques.com') {
      return true;
    } else {
      return false;
    }
  }
}
