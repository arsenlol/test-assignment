import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CartItem } from '../../models/cart-item'
import { CartService } from '../../services/cart.service'

@Component({
    selector: 'cart-items-list',
    templateUrl: './cart-items-list.component.html',
    styleUrls: ['./cart-items-list.component.scss'],
})
export class CartItemsListComponent {
    @Input() cartItems: CartItem[]
    @Output() itemClick = new EventEmitter<CartItem>()

    constructor(private cartService: CartService) {}

    addOne(item: CartItem) {
        return this.cartService.addOne(item)
    }
    removeOne(item: CartItem) {
        return this.cartService.removeOne(item)
    }
    deleteItem(item: CartItem) {
        return this.cartService.deleteItem(item)
    }
}
