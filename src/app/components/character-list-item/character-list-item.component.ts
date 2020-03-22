import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Character } from '../../models/character'

@Component({
    selector: 'character-list-item',
    templateUrl: './character-list-item.component.html',
    styleUrls: ['./character-list-item.component.scss'],
})
export class CharacterListItemComponent {
    @Input() character: Character
    @Output() characterClick = new EventEmitter()

    onCharacterClick() {
        return this.characterClick.emit(this.character)
    }
}
