import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Character } from '../../models/character'
import { Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'

@Component({
    selector: 'characters-list-page',
    templateUrl: './characters-list-page.component.html',
    styleUrls: ['./characters-list-page.component.scss'],
})
export class CharactersListPageComponent implements OnInit {
    data$ = this.route.data.pipe(map(data => data.characters))
    characters$: Observable<Character[]>
    pagesCount$: Observable<number>
    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.characters$ = this.data$.pipe(map(data => data.results))
        this.pagesCount$ = this.data$.pipe(map(data => Number(data.info.pages)))
    }

    onCharacterClick(character: Character) {
        return this.navigateToDetailsById(character.id)
    }

    onPageChange(page: number) {
        return this.navigateToPage(page)
    }

    navigateToDetailsById(id: number) {
        return this.router.navigate(['characters', id])
    }

    navigateToPage(page: number) {
        return this.router.navigate(['characters'], { queryParams: { page } })
    }

    get currentPage() {
        const { page } = this.route.snapshot.queryParams
        return page ? page : 1
    }
}
