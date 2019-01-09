import { ConfigService } from './../services/config.service';
import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../services/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.less']
})
export class TweetsComponent implements OnInit {
  users: any = [
    {
      userName: 'MakeSchool',
      count: 30,
      tweets: []
    },
    {
      userName: 'newsycombinator',
      count: 30,
      tweets: []
    },
    {
      userName: 'ycombinator',
      count: 30,
      tweets: []
    }
  ];
  loaded = false;
  order: any;

  constructor(private tweetsService: TweetsService, private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig();
    this.order = this.configService.config.order;
    this.getTweets();
  }

  getTweets() {
    for (let index = 0; index < this.users.length; index++) {
      this.tweetsService.getTweets(this.users[index]).subscribe(res => {
        this.users.find(user => user.userName === this.order[index]).tweets = res;
      }, err => {
        console.error(err);
      }, () => {
        this.loaded = true;
      });
    }
  }

  emitEvent(event) {
    if (event.tweetsNumber) {
      this.users.forEach(user => {
        user.count = event.tweetsNumber;
      });
      this.ngOnInit();
      return;
    }
    this.ngOnInit();
  }

}
