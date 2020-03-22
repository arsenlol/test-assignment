import { Component, Input, OnInit } from '@angular/core'
import { Character } from '../../models/character'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'character-details',
    templateUrl: './character-details.component.html',
    styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
    @Input() character: Character

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        const { character } = this.route.snapshot.data
        this.character = character
    }
}
