import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {AddPortfolio} from '../../actions/portfolio.actions';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss']
})
export class PortfolioFormComponent implements OnInit {

  form: FormGroup;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      url: new FormControl(''),
      primaryLanguage: new FormControl(''),
      author: new FormControl(''),
    });
  }

  addPortfolio(): void {
    if (this.form.valid) {
      this.store.dispatch(new AddPortfolio(this.form.value));
    }
  }
}
