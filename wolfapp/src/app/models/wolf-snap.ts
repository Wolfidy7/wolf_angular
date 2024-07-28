export class WolfSnap{


  constructor(public id: number,
              public title: string,
              public description: string,
              public createdAt: Date,
              public imageUrl: String,
              public snaps: number,
              public location?: string,) {
  }

  addSnap(): void{
    this.snaps++;
  }
  removeSnap(): void{
    this.snaps--;
  }
}
