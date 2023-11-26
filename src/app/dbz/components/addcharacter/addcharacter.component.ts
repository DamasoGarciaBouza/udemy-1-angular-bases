import { CommonModule } from '@angular/common';
import {  Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [
    CommonModule, FormsModule
  ],
  templateUrl: "./addcharacter.html",
  styleUrls: ['./addcharacter.component.css'],
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {

    //debugger;

    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name : '', power: 0};

  }

}
