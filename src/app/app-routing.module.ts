import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './containers/main/main.component'
import { CharactersResolverService } from './services/characters-resolver.service'
import { CharacterDetailsResolverService } from './services/character-details-resolver.service'
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component'
import { CharacterDetailsPageComponent } from './pages/characters-details-page/character-details-page.component'
import { CartPageComponent } from './pages/cart-page-component/cart-page.component'
import { PurchaseSuccessPageComponent } from './pages/purchase-success-page-component/purchase-success-page.component'

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'characters',
                pathMatch: 'full',
            },
            {
                path: 'characters',
                component: CharactersListPageComponent,
                resolve: {
                    characters: CharactersResolverService,
                },
                runGuardsAndResolvers: 'paramsOrQueryParamsChange',
            },
            {
                path: 'characters/:id',
                component: CharacterDetailsPageComponent,
                resolve: {
                    character: CharacterDetailsResolverService,
                },
            },
            {
                path: 'cart',
                component: CartPageComponent,
            },
            {
                path: 'success',
                component: PurchaseSuccessPageComponent,
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
