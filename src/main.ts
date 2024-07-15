import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sing-up.component';
import { LogInComponent } from './log-in/log-in.component';
const routes : Routes = [
    { path: 'home' , component: HomeComponent},
    { path: 'sign-up' , component: SignUpComponent},
    { path: 'log-in' , component: LogInComponent},
];
bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
});
