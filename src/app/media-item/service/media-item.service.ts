import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  constructor(private http: HttpClient){}

  get(medium : string ) {
    const getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        }),
        catchError(this.handleError)
      );
  }

  add(mediaItem: MediaItem) {
    return this.http.post('mediaitems', mediaItem)
    .pipe(catchError(this.handleError));
  }

  delete(mediaItem: MediaItem) {
    return this.http.delete(`mediaItems/${mediaItem.id}`)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    console.log(error.message);
    return throwError('A data error ocurred, please try again');
  }
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
