import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';
import { genre } from '../genres.model';

@Component({
	selector: 'app-index-genres',
	templateUrl: './index-genres.component.html',
	styleUrls: ['./index-genres.component.css'],
})
export class IndexGenresComponent implements OnInit {
	constructor(private genresService: GenresService) {}

	genres: genre[];
	ngOnInit(): void {
		this.genresService.getAllGenres().subscribe((genres: genre[]) => {
			this.genres = genres;
			console.log(this.genres);
		});
	}
}
