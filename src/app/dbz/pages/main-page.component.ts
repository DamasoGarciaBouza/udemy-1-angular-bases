import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';


@Component({
    selector: 'dbz-main-page',
    templateUrl: 'main-page.component.html',
})

export class MainPageComponent {

    public characters: Character[] = [
        { name: 'pepis', power: 200 },
        { name: 'papis', power: 222 },
        { name: 'popis', power: 333 }
    ];

    onNewCharacter(character: Character): void {
        this.characters = [...this.characters, character];
    }

    onDeleteCharacter(index:number){
        this.characters.splice(index,1);
    }

}
