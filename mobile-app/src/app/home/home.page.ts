import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private httpClient: HttpClient) {}

  toggle(event, bulbNumber: string) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    if (event.detail.checked) {
      console.log('localhost/' + bulbNumber + '/off');
      this.httpClient.get('http://localhost/' + bulbNumber + '/off').subscribe(_ => _);
    } else {
      console.log('localhost/' + bulbNumber + '/on');
      this.httpClient.get('http://localhost/' + bulbNumber + '/on' ).subscribe(_ => _);
    }
  }
}
