import { Routes } from '@angular/router';
import {WolfSnapListComponent} from "./wolf-snap-list/wolf-snap-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SingleFaceWolfComponent} from "./single-face-wolf/single-face-wolf.component";
import {NewWolfSnapComponent} from "./new-wolf-snap/new-wolf-snap.component";

export const routes: Routes = [
  {path: 'snapList/:id', component: SingleFaceWolfComponent},
  {path: 'snapList', component: WolfSnapListComponent},
  {path: '', component: LandingPageComponent},
  {path:'create', component: NewWolfSnapComponent},
];
