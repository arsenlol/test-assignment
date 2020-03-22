import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Character } from '../models/character'
import { map } from 'rxjs/operators'

export interface CharactersResponse {
    info: {
        count: number
        pages: number
        next: string
        prev: string
    }
    results: Character[]
}

@Injectable()
export class RepositoryService {
    constructor(private httpClient: HttpClient) {}

    getCharacters(page: number | string): Observable<CharactersResponse> {
        return this.httpClient.get(`https://rickandmortyapi.com/api/character/?page=${page ? page : 1}`).pipe(
            map((res: CharactersResponse) => {
                res.results = res.results.map(char => new Character(char))
                return res
            })
        )
    }

    getCharactersDetails(id: number): Observable<Character> {
        return this.httpClient
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .pipe(map(char => new Character(char as Character)))
    }
}
