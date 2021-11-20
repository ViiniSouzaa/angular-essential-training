import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  constructor(private http: HttpClient){}

  get(medium : string ) {
    const getOptions = {
      params: { medium }
    }
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        })
      );
  }

  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem);
  }

  delete(mediaItem) {
    return this.http.delete(`mediaItems/${mediaItem.id}`);
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
