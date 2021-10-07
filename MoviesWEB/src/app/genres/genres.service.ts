import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { genre } from './genres.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class GenresService {
	constructor(private http: HttpClient) {}

	apiURL = environment.apiURL;

	getAllGenres(): Observable<genre[]> {
		return this.http.get<genre[]>(this.apiURL + '/genres');
	}
}
