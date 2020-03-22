import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CartItem } from '../../models/cart-item'
import { Character } from '../../models/character'

@Component({
    selector: 'cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
    @Input() cartItem: CartItem
    @Output() addOne = new EventEmitter()
    @Output() removeOne = new EventEmitter()
    @Output() delete = new EventEmitter()

    onAddOne() {
        return this.addOne.emit(this.cartItem)
    }
    onRemoveOne() {
        return this.removeOne.emit(this.cartItem)
    }
    onDelete() {
        return this.delete.emit(this.cartItem)
    }

    get character(): Character {
        return this.cartItem.item
    }

    get price(): number {
        return this.character.price
    }

    get finalPrice(): number {
        return this.character.priceWithDiscount
    }

    get sale(): number {
        return this.character.sale
    }

    get sum(): number {
      return this.finalPrice * this.cartItem.count
    }

}
