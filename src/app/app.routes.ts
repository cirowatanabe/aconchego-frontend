import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { LoginComponent } from './features/components/login/login.component';
import { AdocaoComponent } from './features/components/adocao/adocao.component';
import { LarTemporarioComponent } from './features/components/lar-temporario/lar-temporario.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'adocao', component: AdocaoComponent
  },
  {
    path: 'lar-temporario', component: LarTemporarioComponent
  }
];
