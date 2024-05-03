// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import branchesReducer from './reducers/branchesSlice';
import donationReducer from './reducers/donationSlice';
// Ajoutez d'autres réducteurs pour les catégories supplémentaires

const rootReducer = combineReducers({
  auth: authReducer,
  branches: branchesReducer,
  donation: donationReducer,
  // Ajoutez d'autres catégories ici
});

export default rootReducer;
