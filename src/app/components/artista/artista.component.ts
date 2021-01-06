import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  artista:any={};
  loadingArtist:boolean;
  topTracks: any[] = [];

  constructor(private router:ActivatedRoute, private spotify:SpotifyService) { 
    this.loadingArtist=true;
    this.router.params.subscribe(params =>{
      //console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  ngOnInit(): void {
  }

  getArtista( id:string ){
    this.loadingArtist = true;
    this.spotify.getArtista( id )
    .subscribe( artista => {
      //console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks( id:string){
    this.spotify.getTopTracks( id )
    .subscribe( resp => {
      console.log(resp);
      this.topTracks = resp;
    });
  }

}
