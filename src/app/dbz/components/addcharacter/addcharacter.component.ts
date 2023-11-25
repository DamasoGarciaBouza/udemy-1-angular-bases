import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {
[x: string]: any; 

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter() {
    console.log(this.character);
  }

}
