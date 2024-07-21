import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {WolfSnap} from "../models/wolf-snap";
import {map} from "rxjs/operators";
import {AsyncPipe, DatePipe, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {FaceWolvesService} from "../services/face-wolves.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-wolf-snap',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    UpperCasePipe,
    DatePipe,
    NgIf,
    TitleCasePipe
  ],
  templateUrl: './new-wolf-snap.component.html',
  styleUrl: './new-wolf-snap.component.scss'
})
export class NewWolfSnapComponent implements OnInit{

  snapForm!: FormGroup;
  wolfSnapPreview$!: Observable<WolfSnap>;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private wolfService: FaceWolvesService,
              private router: Router) {
  }
  ngOnInit() {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null],
    });

    this.wolfSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date(),
        id: 0,
        snaps: 0
      })),
    );
  }
  onSubmitForm(){
    console.log(this.snapForm.value);
    this.wolfService.addWolfSnap(this.snapForm.value);
    this.router.navigateByUrl("/snapList");
  }

}
