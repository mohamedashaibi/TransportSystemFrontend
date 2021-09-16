import React from 'react'
import { Route, Switch, useRouteMatch, withRouter } from 'react-router'
import SideBar from './SideBar'
import Copyright from '../Copyright';
import CreateBranchForm from '../Branch/CreateBranchForm';
import GetBranchesForm from '../Branch/GetBranchesForm';
import DeleteBranchForm from '../Branch/DeleteBranchForm';
import UpdateBranchForm from '../Branch/UpdateBranchForm';
import GetBranch from '../Branch/GetBranchForm';
import GetCitiesForm from '../City/GetCitiesForm';
import GetCityForm from '../City/GetCityForm';
import UpdateCityForm from '../City/UpdateCityForm';
import CreateCityForm from '../City/CreateCityForm';

import CreateCompanyForm from '../Company/CreateCompanyForm';
import GetCompaniesForm from '../Company/GetCompaniesForm';
import DeleteCompanyForm from '../Company/DeleteCompanyForm';
import UpdateCompanyForm from '../Company/UpdateCompanyForm';
import GetCompany from '../Company/GetCompanyForm';

import CreateInvoiceForm from '../Invoice/CreateInvoiceForm';
import GetInvoicesForm from '../Invoice/GetInvoicesForm';
import DeleteInvoiceForm from '../Invoice/DeleteInvoiceForm';
import UpdateInvoiceForm from '../Invoice/UpdateInvoiceForm';
import GetInvoice from '../Invoice/GetInvoiceForm';

function Dashboard() {

    let { path, url } = useRouteMatch();

    return (
        <SideBar>

      <Switch>
        <Route exact path={path}>
        </Route>
        <Route exact path={`${path}/branch/create`}>
          <CreateBranchForm/>
        </Route>
        <Route exact path={`${path}/branch`}>
          <GetBranchesForm/>
        </Route>
        <Route exact path={`${path}/branch/:id`}>
          <GetBranch/>
        </Route>
        <Route exact path={`${path}/branch/delete/:id`}>
          <DeleteBranchForm/>
        </Route>
        <Route exact path={`${path}/branch/edit/:id`}>
          <UpdateBranchForm/>
        </Route>

        <Route exact path={`${path}/city`}>
          <GetCitiesForm/>
        </Route>
        <Route exact path={`${path}/city/create`}>
          <CreateCityForm/>
        </Route>
        <Route exact path={`${path}/city/:id`}>
          <GetCityForm/>
        </Route>
        <Route exact path={`${path}/city/edit/:id`}>
          <UpdateCityForm/>
        </Route>

        <Route exact path={`${path}/company/create`}>
          <CreateCompanyForm/>
        </Route>
        <Route exact path={`${path}/company`}>
          <GetCompaniesForm/>
        </Route>
        <Route exact path={`${path}/company/:id`}>
          <GetCompany/>
        </Route>
        <Route exact path={`${path}/company/delete/:id`}>
          <DeleteCompanyForm/>
        </Route>
        <Route exact path={`${path}/company/edit/:id`}>
          <UpdateCompanyForm/>
        </Route>
        
        <Route exact path={`${path}/invoice/create`}>
          <CreateInvoiceForm/>
        </Route>
        <Route exact path={`${path}/invoice`}>
          <GetInvoicesForm/>
        </Route>
        <Route exact path={`${path}/invoice/:id`}>
          <GetInvoice/>
        </Route>
        <Route exact path={`${path}/invoice/delete/:id`}>
          <DeleteInvoiceForm/>
        </Route>
        <Route exact path={`${path}/invoice/edit/:id`}>
          <UpdateInvoiceForm/>
        </Route>
        
      </Switch>

        <Copyright/>
        </SideBar>
    )
}

export default withRouter(Dashboard)