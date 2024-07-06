export class WolfSnap{

  location?: string;
  constructor(public title: string,
              public description: string,
              public createdAt: Date,
              public imageUrl: String,
              public snaps: number,) {
  }

  addSnap(): void{
    this.snaps++;
  }
  removeSnap(): void{
    this.snaps--;
  }
  setLocation(location: string): void{
    this.location = location;
  }
}
