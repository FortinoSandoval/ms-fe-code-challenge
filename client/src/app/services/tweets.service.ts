import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTweets(data) {
    return this.http.get(`${this.baseUrl}statuses/user_timeline.json?count=${data.count}&screen_name=${data.userName}`);
  }

}
