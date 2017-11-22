import { AuthguardService } from './services/authguard.service';
import { CallbackComponent } from './components/callback/callback.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthguardService] },
    { path: 'callback', component: CallbackComponent },
    //Otherwise redirect to login 
    { path: '**', redirectTo: '' }
]