import {combineReducers} from 'redux';
import { AuthReducer } from './AuthReducer';
import {BranchReducer} from "./BranchReducer";
import { CityReducer } from './CityReducer';
import { CompanyReducer } from './CompanyReducer';
import { InvoiceReducer } from './InvoiceReducer';

export default combineReducers({
    AuthReducer, BranchReducer, CityReducer, CompanyReducer, InvoiceReducer
})