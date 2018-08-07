import { Component, OnInit } from '@angular/core';
import { Tile } from './models/tile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	public tiles: Tile[][];

	constructor() { }

	ngOnInit() {
		this.initTiles();
	}

	private initTiles(): void {
		this.tiles = [[{
			title: 'Wordpress',
			path: 'wordpress-articles',
			icon: 'logo-wordpress',
			component: HomePage //WordpressListPage
		}, {
			title: 'Slides',
			path: 'slides',
			icon: 'swap',
			component: HomePage //SlideBoxPage
		}], [{
			title: 'Map',
			path: 'map',
			icon: 'map',
			component: HomePage //GoogleMapsPage
		}]];
	}
}
