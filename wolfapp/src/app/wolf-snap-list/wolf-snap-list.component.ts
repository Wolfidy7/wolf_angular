import {Component, OnDestroy, OnInit} from '@angular/core';
import {WolfSnap} from "../models/wolf-snap";
import {FaceWolfComponent} from "../face-wolf/face-wolf.component";
import {FaceWolvesService} from "../services/face-wolves.service";
import {Subject} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-wolf-snap-list',
  standalone: true,
  imports: [
    FaceWolfComponent,
    AsyncPipe,
  ],
  templateUrl: './wolf-snap-list.component.html',
  styleUrl: './wolf-snap-list.component.scss'
})


export class WolfSnapListComponent implements OnInit, OnDestroy{

  snapList!: WolfSnap[];
  //private destroy$!: Subject<boolean>;
  //snapList$!: Observable<WolfSnap[]>;

  constructor(private faceWolvesService: FaceWolvesService) {
  }

  ngOnInit(): void {
    this.snapList = this.faceWolvesService.getSnapList()

    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(console.log),
    // ).subscribe();
  }

  ngOnDestroy() {
    //this.destroy$.next(true)
  }
}
