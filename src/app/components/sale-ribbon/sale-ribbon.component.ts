import { Component, Input } from '@angular/core';

@Component({
  selector: 'sale-ribbon',
  templateUrl: './sale-ribbon.component.html',
  styleUrls: ['./sale-ribbon.component.scss']
})
export class SaleRibbonComponent {
  @Input() sale: number;
}
