import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./addcharacter.html",
  styleUrls: ['./addcharacter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddcharacterComponent { }
