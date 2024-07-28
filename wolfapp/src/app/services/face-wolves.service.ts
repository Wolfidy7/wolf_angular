import {Injectable} from "@angular/core";
import {WolfSnap} from "../models/wolf-snap";
import {SnapType} from "../models/snap-type.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class FaceWolvesService {

  constructor(private httpClient: HttpClient) {
  }
  private SnapList: WolfSnap[] = []

  getSnapList(): Observable<WolfSnap[]>{
    return this.httpClient.get<WolfSnap[]>('http://localhost:3000/wolfsnaps');
  }

  getWolfSnapById(id: number): Observable<WolfSnap>{
    return this.httpClient.get<WolfSnap>(`http://localhost:3000/wolfsnaps/${id}`);
  }
  snapWolfSnapById(wolfSnapId: number, snapType : SnapType ):Observable<WolfSnap>{

  return this.getWolfSnapById(wolfSnapId).pipe(
    map(wolfSnap => ({
    ...wolfSnap,
    snaps: wolfSnap.snaps + (snapType==='snap' ? 1 : -1)
    })),
    switchMap(updatedWolfSnap => this.httpClient.put<WolfSnap>(`http://localhost:3000/wolfsnaps/${wolfSnapId}`, updatedWolfSnap))
    );
  }

  addWolfSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void{
    const wolfSnap = new WolfSnap(
      170,
      formValue.title,
      formValue.description,
      new Date(),
      formValue.imageUrl,
      0,
      formValue.location,
    )
    this.SnapList.push(wolfSnap);
  }
}
