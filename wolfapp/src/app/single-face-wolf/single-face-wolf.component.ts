import {Component, OnInit} from '@angular/core';
import {WolfSnap} from "../models/wolf-snap";
import {LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {FaceWolvesService} from "../services/face-wolves.service";
import {ActivatedRoute, ActivatedRouteSnapshot, RouterLink} from "@angular/router";

@Component({
  selector: 'app-face-wolf',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    RouterLink,
  ],
  templateUrl: './single-face-wolf.component.html',
  styleUrl: './single-face-wolf.component.scss'
})
export class SingleFaceWolfComponent implements OnInit {

  wolfSnap!: WolfSnap;
  snapped!: boolean;
  snapButtonText!: string;

  constructor(private faceWolvesService: FaceWolvesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.snapped = false;
    this.snapButtonText = "Oh snap !"
    this.getWolfSnap()


  }

  private getWolfSnap(): void{
    const wolfsSnapId = this.route.snapshot.params['id'];
    this.wolfSnap= this.faceWolvesService.getWolfSnapById(wolfsSnapId);
  }
  onSnap() {
      this.snapped = !this.snapped;
      this.snapped ? this.faceWolvesService.snapWolfSnapById(this.wolfSnap.id, "snap") : this.faceWolvesService.snapWolfSnapById(this.wolfSnap.id, "unsnap");
      this.snapped ? this.snapButtonText ="Unsnap :(" : this.snapButtonText ="Oh snap !"
  }
}
