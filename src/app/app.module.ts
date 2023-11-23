import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/hero/hero.module';
import { ListModule } from './heroes/list/list.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    CounterModule, HeroModule, ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
