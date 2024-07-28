import {Component, OnInit} from '@angular/core';
import {WolfSnap} from "../models/wolf-snap";
import {AsyncPipe, LowerCasePipe, NgClass, NgIf, NgStyle, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {FaceWolvesService} from "../services/face-wolves.service";
import {ActivatedRoute, ActivatedRouteSnapshot, RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

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
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './single-face-wolf.component.html',
  styleUrl: './single-face-wolf.component.scss'
})
export class SingleFaceWolfComponent implements OnInit {

  wolfSnap$!: Observable<WolfSnap>

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
    this.wolfSnap$= this.faceWolvesService.getWolfSnapById(wolfsSnapId);
  }
  onSnap(wolfSnapId: number) {
      this.snapped = !this.snapped;
      this.wolfSnap$ = this.faceWolvesService.getWolfSnapById(wolfSnapId);
      this.snapped ? this.faceWolvesService.snapWolfSnapById(wolfSnapId, "snap").pipe(
        tap(()=>{
          this.wolfSnap$ = this.faceWolvesService.getWolfSnapById(wolfSnapId);
          this.snapButtonText ="Unsnap :("
        })
        ).subscribe() :
        this.faceWolvesService.snapWolfSnapById(wolfSnapId, "unsnap").pipe(
          tap(()=>{
            this.wolfSnap$ = this.faceWolvesService.getWolfSnapById(wolfSnapId);
            this.snapButtonText ="Oh snap !"
          })
        ).subscribe();

      this.snapped ? this.snapButtonText ="Unsnap :(" : this.snapButtonText ="Oh snap !"
  }
}
