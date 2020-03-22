import {Component, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms'

@Component({
    selector: 'payment-form',
    templateUrl: './payment-form.component.html',
    styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent {
    @Output() onSubmit = new EventEmitter()
    paymentForm: FormGroup
    months: number[]
    years: number[]
    constructor(private fb: FormBuilder) {
        this.months = this.getMonths()
        this.years = this.getYears()
        const initialMonth = new Date().getMonth() + 1
        const initialYear = new Date().getFullYear()
        this.paymentForm = this.fb.group({
            cardHolderName: ['', [Validators.required]],
            cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
            expiresMonth: [initialMonth],
            expiresYear: [initialYear],
            cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
        })
    }

    getMonths() {
        return Array(12)
            .fill(0)
            .map((v, i) => i + 1)
    }

    getYears() {
        const date = new Date()
        const currentYear = date.getFullYear()
        return Array(20)
            .fill(0)
            .map((v, i) => currentYear + i)
    }

    submit() {
        this.paymentForm.markAllAsTouched()
        this.onSubmit.emit()
    }

    get cardHolderName() {
        return this.paymentForm.get('cardHolderName')
    }

    get cardNumber() {
        return this.paymentForm.get('cardNumber')
    }

    get expiresMonth() {
        return this.paymentForm.get('expiresMonth')
    }

    get expiresYear() {
        return this.paymentForm.get('expiresYear')
    }

    get cvv() {
        return this.paymentForm.get('cvv')
    }
}
