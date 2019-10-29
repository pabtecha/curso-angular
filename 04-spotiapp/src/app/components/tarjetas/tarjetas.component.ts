import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private  router: Router) { }

  ngOnInit() {
  }

  verArtista(item: any ) {

    const artistaId = item.type === 'artist' ? item.id : item.artists[0].id;
    this.router.navigate(['/artist', artistaId]);
  }
}
