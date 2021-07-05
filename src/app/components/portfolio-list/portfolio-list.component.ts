import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {Portfolio} from '../../models/portfolio';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  portfolios: Observable<Portfolio[]>;

  constructor(private store: Store<AppState>) {
    this.portfolios = store.select('portfolios');
  }

  ngOnInit(): void {
  }

}
