import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Character } from '../../models/character'
import { CartService } from '../../services/cart.service'

@Component({
    selector: 'character-details-page',
    templateUrl: './character-details-page.component.html',
    styleUrls: ['./character-details-page.component.scss'],
})
export class CharacterDetailsPageComponent {
    character: Character
    constructor(private route: ActivatedRoute, private cartService: CartService) {
        this.character = this.route.snapshot.data.character
    }

    addToCart() {
      return this.cartService.addCharacterToCart(this.character)
    }

    get countInCart(): number {
      return this.cartService.countOfCharactersInCart(this.character)
    }

    get isAddedToCart(): boolean {
      return this.countInCart > 0
    }
}
