import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { RepositoryService } from './services'
import { FlexLayoutModule } from '@angular/flex-layout'
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component'
import { UrlSanitizerPipe } from './pipes/url-sanitizer.pipe'
import { CharactersResolverService } from './services/characters-resolver.service'
import { CharactersListComponent } from './components/characters-list/characters-list.component'
import { CharacterDetailsComponent } from './components/character-details/character-details.component'
import { CharacterListItemComponent } from './components/character-list-item/character-list-item.component'
import { CharacterDetailsResolverService } from './services/character-details-resolver.service'
import { SaleRibbonComponent } from './components/sale-ribbon/sale-ribbon.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component'
import { CharacterDetailsPageComponent } from './pages/characters-details-page/character-details-page.component'
import { CartService } from './services/cart.service'
import { HeaderCartComponent } from './components/header-cart/header-cart.component'
import { LocalCacheService } from './services/local-cache.service'
import { CartPageComponent } from './pages/cart-page-component/cart-page.component'
import { CartItemsListComponent } from './components/cart-items-list/cart-items-list.component'
import { CartItemComponent } from './components/cart-page-item/cart-item.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PaymentFormComponent } from './components/payment-form/payment-form.component'
import { MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material'
import { NumbersOnlyInputDirective } from './directives/number-only-input'
import { PurchaseSuccessPageComponent } from './pages/purchase-success-page-component/purchase-success-page.component'

@NgModule({
    declarations: [
        AppComponent,
        NavigationMenuComponent,
        CharactersListComponent,
        CharacterListItemComponent,
        CharacterDetailsComponent,
        UrlSanitizerPipe,
        SaleRibbonComponent,
        PaginationComponent,
        CharactersListPageComponent,
        CharacterDetailsPageComponent,
        HeaderCartComponent,
        CartPageComponent,
        CartItemsListComponent,
        CartItemComponent,
        PaymentFormComponent,
        NumbersOnlyInputDirective,
        PurchaseSuccessPageComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
    ],
    providers: [
        RepositoryService,
        CharactersResolverService,
        CharacterDetailsResolverService,
        CartService,
        LocalCacheService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
