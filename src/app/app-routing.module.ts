import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./modules/general/general.module').then(
        (m) => m.GeneralModule
      ),
  },
  {
    path: 'employe',
    loadChildren: () =>
      import('./modules/employe/employe.module').then(
        (m) => m.EmployeModule
      ),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./modules/manager/manager.module').then(
        (m) => m.ManagerModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: '**',
    redirectTo: 'public',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
