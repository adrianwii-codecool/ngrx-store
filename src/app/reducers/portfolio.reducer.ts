import {Portfolio} from '../models/portfolio';
import {Actions, ADD_PORTFOLIO, DELETE_PORTFOLIO} from '../actions/portfolio.actions';

export const portfolioFeatureKey = 'portfolio';

export const initialState: Portfolio = {
  title: 'SECURE ERP',
  url: 'http://github.com/codecoolGlobal/secure-erp-angular-adrianwii-codecool',
  primaryLanguage: 'TypeScript',
  author: 'Adrian W',
};

export function portfolioReducer(state: Portfolio[] = [initialState], action: Actions): Portfolio[] {
  switch (action.type) {
    case ADD_PORTFOLIO:
      return [...state, action.payload];
    case DELETE_PORTFOLIO:
      return state.filter(s => s !== action.payload);
    default: {
      console.log(state);
      return state;
    }
  }
}




