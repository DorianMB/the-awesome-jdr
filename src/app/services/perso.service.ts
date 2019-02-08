import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Perso} from '../models/Perso.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PersosService {

  persos: Perso[] = [];
  persosSubject = new Subject<Perso[]>();

  constructor() { }

  emitPersos() {
    this.persosSubject.next(this.persos.slice());
  }

  savePersos() {
    firebase.database().ref('/persos').set(this.persos);
  }

  getPersos() {
    firebase.database().ref('/persos')
      .on('value', (data) => {
        this.persos = data.val() ? data.val() : [];
        this.emitPersos();
      });
  }

  getSinglePerso(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/persos/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPerso(newPerso: Perso) {
    this.persos.push(newPerso);
    this.savePersos();
    this.emitPersos();
  }

  removePerso(perso: Perso) {
    const persoIndexToRemove = this.persos.findIndex(
      (persoEl) => {
        if (persoEl === perso) {
          return true;
        }
      }
    );
    this.persos.splice(persoIndexToRemove, 1);
    this.savePersos();
    this.emitPersos();
  }

  updateEditPerso(id: number, newPerso: Perso) {
    this.persos[id] = newPerso;
    this.savePersos();
    this.emitPersos();
  }
}
