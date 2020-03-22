import { Component } from '@angular/core'
import { CartService } from '../../services/cart.service'
import { Observable } from 'rxjs'
import { CartItem } from '../../models/cart-item'
import { Router } from '@angular/router'

@Component({
    selector: 'cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
    cart$: Observable<CartItem[]>
    cartPrice$: Observable<number>
    constructor(private cartService: CartService, private router: Router) {
        this.cart$ = this.cartService.cart$
        this.cartPrice$ = this.cartService.cartPrice$
    }

    submit() {
      this.cartService.clearCart()
      return this.router.navigate(['/', 'success'])
    }
}
