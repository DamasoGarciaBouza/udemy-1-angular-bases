import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./list.component.html",
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { 

@Input()
 public characterList: Character[] = [
    {name: 'epis', power: 2}
];


@Output()
public onDelete: EventEmitter<number> = new EventEmitter();
//public onDelete =  new EventEmitter<number>;

onDeleteCharacter(index: number):void{

  this.onDelete.emit(index);
  console.log(index);
  

}

}
