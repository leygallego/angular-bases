import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index:number): void{
  //   console.log({index});
  //   this.onDelete.emit ( index )

  // }

  onDeleteCharacter(id?:string): void{
    console.log({id});
    if ( !id) return;
    this.onDelete.emit ( id )

  }

  // deletingCharacterById (id:string) void{
  //   this.onDelete.emit //cómo borro aquí por uuid?
  // }

}
