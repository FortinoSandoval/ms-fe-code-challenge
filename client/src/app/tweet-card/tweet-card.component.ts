import { Tweet } from './../_models/tweet';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.less']
})
export class TweetCardComponent implements OnInit {
  @Input() tweet: Tweet;

  constructor() { }

  ngOnInit() {
  }

  getUrl(tweet: Tweet) {
    return `https://twitter.com/i/web/status/${tweet.id_str}`;
  }

}
