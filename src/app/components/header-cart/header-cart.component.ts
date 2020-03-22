import { Component } from '@angular/core'
import { CartService } from '../../services/cart.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
    selector: 'header-cart',
    templateUrl: './header-cart.component.html',
    styleUrls: ['./header-cart.component.scss'],
})
export class HeaderCartComponent {
    cartItemsCount$ = this.cartService.cartItemsCount$
    cartPrice$ = this.cartService.cartPrice$
    constructor(private cartService: CartService) {}
}
