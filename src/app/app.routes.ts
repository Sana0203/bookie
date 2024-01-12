import { Routes } from '@angular/router';
import { HomeComponent } from './+pages/public/home/home.component';
import { SigninComponent } from './+pages/public/signin/signin.component';
import { SignupComponent } from './+pages/public/signup/signup.component';
import { PageNotFoundComponent } from './+pages/public/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path:'home', component:HomeComponent }, //home page page
    { path:'signin', component:SigninComponent }, //Signin page
    { path:'signup', component:SignupComponent },  //Signup page
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
