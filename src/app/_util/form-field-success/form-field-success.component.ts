import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-field-success',
  templateUrl: './form-field-success.component.html',
  styleUrls: ['./form-field-success.component.scss']
})
export class FormFieldSuccessComponent {
  @Input() successMsg: string;
  @Input() displaySuccess: boolean;
}
