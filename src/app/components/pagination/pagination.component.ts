import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
    maxShownPagesNumber = 7
    _currentPage: number
    @Input() pagesCount: number
    @Input() set currentPage(page: number) {
        this._currentPage = Number(page)
    }
    @Output() pageClick = new EventEmitter<number>()

    get currentPage(): number {
        return this._currentPage
    }

    get shownPages() {
        const allPages = Array(this.pagesCount)
            .fill(0)
            .map((v, index) => index + 1)
        const pagesToShow = allPages.reduce((pV, cV) => {
            const diff = Math.abs(this.currentPage - cV)
            if (diff > Math.floor(this.maxShownPagesNumber / 2)) {
                return pV
            }
            return [...pV, cV]
        }, [])
        return pagesToShow
    }

    isPageActive(page: number) {
        return page === this.currentPage
    }

    navigateToPage(page: number) {
        if (page === this.currentPage) {
            return
        }
        return this.pageClick.emit(page)
    }

    get isPreviousActive() {
        return this.currentPage > 1
    }

    get isNextActive() {
        return this.currentPage < this.pagesCount
    }

    get isStartActive() {
        return this.currentPage > 1
    }

    get isEndActive() {
        return this.currentPage < this.pagesCount
    }
}

// << < (1) 2 3 4 5 6 7 > >>
// << < 1 (2) 3 4 5 6 7 > >>
// << < 1 2 (3) 4 5 6 7 > >>
// << < 1 2 3 (4) 5 6 7 > >>
// << < 2 3 4 (5) 6 7 8 > >>
