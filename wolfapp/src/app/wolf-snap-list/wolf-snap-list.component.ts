import {Component, OnInit} from '@angular/core';
import {WolfSnap} from "../models/wolf-snap";
import {FaceWolfComponent} from "../face-wolf/face-wolf.component";
import {FaceWolvesService} from "../services/face-wolves.service";

@Component({
  selector: 'app-wolf-snap-list',
  standalone: true,
  imports: [
    FaceWolfComponent,
  ],
  templateUrl: './wolf-snap-list.component.html',
  styleUrl: './wolf-snap-list.component.scss'
})
export class WolfSnapListComponent implements OnInit{
  snapList!: WolfSnap[];
  constructor(private faceWolvesService: FaceWolvesService) {
  }

  ngOnInit(): void {
    this.snapList = this.faceWolvesService.getSnapList();
  }
}
