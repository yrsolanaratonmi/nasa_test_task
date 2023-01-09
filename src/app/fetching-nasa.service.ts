import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FetchingNasaService {
    constructor(private http: HttpClient) { }

    public url = 'https://api.nasa.gov/mars-photos/api/v1/';

    public data$: any = new Subject();

    public loading = false;

    public fetchData(rover: any, camera: any, marsDay: any) {
        this.loading = true;

        const key = '9eUUay0QcUTHDXwfccsU8VqVzASU6EvXshPJgyig';

        const httpParams = new HttpParams()
            .set('sol', marsDay)
            .set('camera', camera)
            .set('api_key', key);

        const roverSearch = `rovers/${rover}/photos?`;

        const options = { params: httpParams };

        return this.http
            .get(this.url + roverSearch, options)
            .subscribe((result: any) => {
                console.log(result);
                console.log(result.photos);
                this.data$.next(result.photos);
                this.loading = false;
            });
    }
}
