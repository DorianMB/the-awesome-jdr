import {Component, OnDestroy, OnInit} from '@angular/core';
import {Perso} from '../models/Perso.model';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {PersosService} from '../services/perso.service';

@Component({
  selector: 'app-perso-list',
  templateUrl: './perso-list.component.html',
  styleUrls: ['./perso-list.component.css']
})
export class PersoListComponent implements OnInit, OnDestroy {

  persos: Perso[];
  persosSubscription: Subscription;

  constructor(private persosService: PersosService,
              private router: Router) { }

  ngOnInit() {
    this.persosSubscription = this.persosService.persosSubject.subscribe(
      (persos: Perso[]) => {
        this.persos = persos;
      }
    );
    this.persosService.getPersos();
    this.persosService.emitPersos();
  }

  onNewPerso() {
    this.router.navigate(['/persos', 'new']);
  }

  onDeletePerso(perso: Perso) {
    this.persosService.removePerso(perso);
  }

  onViewPerso(id: number) {
    this.router.navigate(['/persos', 'view', id]);
  }

  ngOnDestroy(): void {
    this.persosSubscription.unsubscribe();
  }
}
