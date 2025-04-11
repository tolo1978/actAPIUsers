import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserViewComponent } from './pages/user-view/user-view.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: "home", component: HomeComponent},
    {path: 'user/:id', component: UserViewComponent},
    {path: "**", component: Error404Component}
];
