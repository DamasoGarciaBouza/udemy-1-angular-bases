import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent{

    constructor() { }

    public characters: Character[] = [
        {name: 'pepis', power: 200},
        {name: 'papis', power: 222},
        {name: 'popis', power: 333}
    ];
    
}