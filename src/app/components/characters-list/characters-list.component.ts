import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Character } from '../../models/character'

@Component({
    selector: 'characters-list',
    templateUrl: './characters-list.component.html',
    styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
    @Input() characters: Character[]
    @Output() characterClick = new EventEmitter<Character>()

    onCharacterClick(character: Character) {
        return this.characterClick.emit(character)
    }
}
