import { Injectable } from '@angular/core'
import { CharactersResponse, RepositoryService } from './repository.service'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'

@Injectable()
export class CharactersResolverService implements Resolve<CharactersResponse> {
    constructor(private repository: RepositoryService) {}

    async resolve(route: ActivatedRouteSnapshot): Promise<CharactersResponse> {
        const { page } = route.queryParams;
        return this.repository.getCharacters(page).toPromise()
    }
}
