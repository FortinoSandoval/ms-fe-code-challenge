import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditLayoutComponent } from './edit-layout/edit-layout.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { SortableModule } from 'ngx-bootstrap';

@NgModule({
   declarations: [
      AppComponent,
      EditLayoutComponent,
      TweetsComponent,
      TweetCardComponent
   ],
   imports: [
      BrowserModule,
      SortableModule.forRoot(),
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
