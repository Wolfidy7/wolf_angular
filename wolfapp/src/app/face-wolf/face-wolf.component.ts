import {Component, Input, OnInit} from '@angular/core';
import {WolfSnap} from "../models/wolf-snap";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-face-wolf',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
  ],
  templateUrl: './face-wolf.component.html',
  styleUrl: './face-wolf.component.scss'
})
export class FaceWolfComponent implements OnInit {
  @Input() wolfSnap!: WolfSnap;

  snapped!: boolean
  snapButtonText!: string;

  ngOnInit(): void {
    this.snapped = false;
    this.snapButtonText = "Oh snap !"
  }

  onSnap() {
      this.snapped = !this.snapped;
      this.snapped ? this.wolfSnap.addSnap() : this.wolfSnap.removeSnap();
      this.snapped ? this.snapButtonText ="Unsnap :(" : this.snapButtonText ="Oh snap !"
  }
}
