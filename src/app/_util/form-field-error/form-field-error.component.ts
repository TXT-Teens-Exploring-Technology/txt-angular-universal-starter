import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field-error',
  templateUrl: './form-field-error.component.html',
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent {
  @Input() errorMsg: string;
  @Input() displayError: boolean;
}
