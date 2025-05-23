import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/teamprofile',
        pathMatch: 'full'
    },
    {
        path: 'teamprofile',
        loadComponent: () => AppComponent,
    }
];
