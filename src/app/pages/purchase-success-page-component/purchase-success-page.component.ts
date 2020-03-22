import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { interval, Observable } from 'rxjs'
import { map, startWith, tap } from 'rxjs/operators'

@Component({
    selector: 'purchase-success-page',
    templateUrl: './purchase-success-page.component.html',
    styleUrls: ['./purchase-success-page.component.scss'],
})
export class PurchaseSuccessPageComponent implements OnInit {
    countDown$: Observable<number>
    countFrom: number = 5
    constructor(private router: Router) {}

    ngOnInit(): void {
        this.countDown$ = interval(1000).pipe(
            tap(count => {
                if (count === this.countFrom) {
                    return this.router.navigate(['/'])
                }
            }),
            map(count => this.countFrom - count)
        )
    }
}
