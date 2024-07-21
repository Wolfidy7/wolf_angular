import {Component, Input} from '@angular/core';
import {WolfSnap} from "../models/wolf-snap";
import {TitleCasePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-face-wolf',
  standalone: true,
  imports: [
    TitleCasePipe,
  ],
  templateUrl: './face-wolf.component.html',
  styleUrl: './face-wolf.component.scss'
})
export class FaceWolfComponent {
  @Input() wolfSnap!: WolfSnap;

  constructor(private router: Router) {}

  onViewWolfSnap() {
    this.router.navigateByUrl(`snapList/${this.wolfSnap.id}`);
  }
}
