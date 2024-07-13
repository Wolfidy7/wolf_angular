import { Routes } from '@angular/router';
import {WolfSnapListComponent} from "./wolf-snap-list/wolf-snap-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SingleFaceWolfComponent} from "./single-face-wolf/single-face-wolf.component";

export const routes: Routes = [
  {path: 'snapList/:id', component: SingleFaceWolfComponent},
  {path: 'snapList', component: WolfSnapListComponent},
  {path: '', component: LandingPageComponent},
];
