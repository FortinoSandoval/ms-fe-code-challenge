import { ConfigService } from './../services/config.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-layout',
  templateUrl: './edit-layout.component.html',
  styleUrls: ['./edit-layout.component.less']
})
export class EditLayoutComponent implements OnInit {
  config: any;
  users: any;
  selectedUser: any;
  userPriority: any;
  @Output()
  reloadTweets = new EventEmitter<any>();


  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig();
    this.users = this.configService.config.users;
    this.userPriority = this.configService.config.order;
  }

  changeColor(color) {
    this.configService.changeColor(color);
  }

  updateTweetsOrder() {
    this.reloadTweets.emit({action: 'reload'});
  }

  change() {
    console.log(this.selectedUser);
  }

  setTweets(tweetsNumber) {
    this.reloadTweets.emit({action: 'reload', tweetsNumber});
  }

  orderChange(newEl) {
    const orders = {
      local: newEl.reduce((a, b) => {
        return a + b;
      }),
      storage: this.configService.config.order.reduce((a, b) => {
        return a + b;
      })
    };
    if (orders.local !== orders.storage) {
      this.configService.changeOrder(newEl);
      this.updateTweetsOrder();
    }
  }

  reset() {
    this.configService.resetConfig();
    this.ngOnInit();
  }

}
