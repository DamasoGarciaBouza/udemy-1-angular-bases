import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/hero/hero.module';
import { ListModule } from './heroes/list/list.module';
import { MainPageComponent } from './dbz/pages/main-page.component';
import { ListComponent } from "./dbz/components/list/list.component";
import { AddcharacterComponent } from "./dbz/components/addcharacter/addcharacter.component";

@NgModule({
    declarations: [
        AppComponent, MainPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CounterModule, HeroModule, ListModule,
        ListComponent,
        AddcharacterComponent
    ]
})
export class AppModule { }
