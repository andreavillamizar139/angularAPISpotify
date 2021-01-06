import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 
    console.log('Spotify Service listo');
  }

  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQA4TJW2g7NyCo5EENiaaaldSV0rs83RRjeBAofH8QDrgkjIxsvxTct3IovjHuiju7NlN6-0ayEEZzmguUg'
    });
    return this.http.get(url,{headers});
  }

  getNewReleases(){

    // const headers = new HttpHeaders({
    //   'Authorization' : 'Bearer BQDguZXibKX4GCmDwyu63blWmO9sEdZTg6XVRT2SpiaL3vmHDsCmpbN6Yz-Z32VfTud9KK4zvsMU8JNaPvA'
    // });
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    // .pipe(map( data => {
    //   return data['albums'].items;
    // }));

    return this.getQuery('browse/new-releases')
    .pipe(map(data => data ['albums'].items));
  }

  getArtistas(termino:string){

    // const headers = new HttpHeaders({
    //   'Authorization' : 'Bearer BQDguZXibKX4GCmDwyu63blWmO9sEdZTg6XVRT2SpiaL3vmHDsCmpbN6Yz-Z32VfTud9KK4zvsMU8JNaPvA'
    // });
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
    // .pipe(map(data => data['artists'].items));
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data => data['artists'].items));
  }

  getArtista(id:string){
    return this.getQuery(`artists/${ id }`);
    //.pipe(map(data => data['artists'].items));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
    .pipe(map(data => data['tracks']));
  }
}
