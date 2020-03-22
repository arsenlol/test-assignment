import { Injectable } from '@angular/core'
import { Character } from '../models/character'
import { BehaviorSubject, Observable } from 'rxjs'
import { map, mergeMap, tap } from 'rxjs/operators'
import { LocalCacheService, StorageKeys } from './local-cache.service'
import { CartItem } from '../models/cart-item'

@Injectable()
export class CartService {
    private _cart$ = new BehaviorSubject<CartItem[]>([])
    cart$: Observable<CartItem[]> = this._cart$.asObservable()
    cartItemsCount$: Observable<number>
    cartPrice$: Observable<number>
    constructor(private localCacheService: LocalCacheService) {
        try {
            const cachedCart = localCacheService.getItem(StorageKeys.Cart)
            if (cachedCart)
                this._cart$.next(
                    cachedCart.map((cartItem: CartItem) => {
                        cartItem.item = new Character(cartItem.item)
                        return cartItem
                    })
                )
        } catch (e) {
            throw e
        }
        this.cart$ = this._cart$.asObservable()
        this.cartItemsCount$ = this.cart$.pipe(map(items => this.mapToCartItemsCount(items)))
        this.cartPrice$ = this.cart$.pipe(map(items => this.mapToPriceWithDiscount(items))
        )
    }

    addCharacterToCart(character: Character) {
        this.addOne({ item: character, count: 1 })
    }
    clearCart() {
        this.cartItems = []
    }
    addOne(itemToAdd: CartItem) {
        const existingCartItem = this.cartItems.find((cartItem: CartItem) => cartItem.item.id === itemToAdd.item.id)
        if (existingCartItem) {
            existingCartItem.count += 1
            this.cartItems = this.cartItems
            return
        }
        this.cartItems = [...this.cartItems, itemToAdd]
    }
    removeOne(itemToRemove: CartItem) {
        if (itemToRemove.count === 1) {
            this.deleteItem(itemToRemove)
            return
        }
        const existingCartItem = this.cartItems.find((cartItem: CartItem) => cartItem.item.id === itemToRemove.item.id)
        if (existingCartItem) {
            existingCartItem.count -= 1
            this.cartItems = this.cartItems
            return
        }
    }
    deleteItem(itemToRemove: CartItem) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.item.id !== itemToRemove.item.id)
    }

    countOfCharactersInCart(character: Character): number {
        const existingItem = this.cartItems.find(cartItem => cartItem.item.id === character.id)
        if (existingItem) return existingItem.count
        return 0
    }

    private get cartItems(): CartItem[] {
        return this._cart$.getValue()
    }

    private set cartItems(value: CartItem[]) {
        this._cart$.next(value)
        this.localCacheService.setItem(StorageKeys.Cart, value)
    }

    mapToPriceWithDiscount(items: CartItem[]): number {
        return items.reduce((pV, cV) => {
            return pV + cV.item.priceWithDiscount * cV.count
        }, 0)
    }

    mapToCartItemsCount(items: CartItem[]): number {
        return items.reduce((pV, cV) => {
            return pV + cV.count
        }, 0)
    }
}
