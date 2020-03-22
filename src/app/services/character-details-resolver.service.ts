import { Injectable } from '@angular/core'
import { RepositoryService } from './repository.service'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Character } from '../models/character'

@Injectable()
export class CharacterDetailsResolverService implements Resolve<Character> {
    constructor(private repository: RepositoryService) {}

    async resolve(route: ActivatedRouteSnapshot): Promise<Character> {
        const { id } = route.params;
        return this.repository.getCharactersDetails(id).toPromise()
    }
}
