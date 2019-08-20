import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormService } from '../../../../_services/form.service';

interface ServerResponse {
    status: boolean;
    message: string;
}
@Component({
    selector: 'app-mailing-list',
    templateUrl: './mailing-list.component.html',
    styleUrls: ['./mailing-list.component.scss']
})
export class MailingListComponent implements OnInit {
    public form: FormGroup;
    public submitted = false;
    public serverSuccessResponse: ServerResponse;
    public serverErrorResponse: ServerResponse;
    constructor(
        public sanitizer: DomSanitizer,
        public fb: FormBuilder,
        public _formsService: FormService
    ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        // form for adding new password
        this.form = this.fb.group({
            email: ['', [Validators.required]]
        });
    }

    onSubmit() {
        if (this.form.valid) {
            this.saveData();
        }else {
            this.validateAllFormFields(this.form);
        }

    }

    // save data
    saveData() {
        this.submitted = true;
        this.clearServerResponse();
        this._formsService.submitMailingListForm(this.form.value)
            .subscribe(
                res => {
                    this.submitted = false;
                    this.handleResponse(res)
                },
                err => {
                    this.submitted = false;
                    this.handleServerError();
                }
            )
    }
    // clear the server responses
    clearServerResponse() {
        this.serverErrorResponse = {
            status: false,
            message: ''
        }
        this.serverSuccessResponse = {
            status: false,
            message: ''
        }
    }
    // handle response from server
    handleResponse(res) {
        console.log(res)
        if (res.status === 400) {
            this.serverErrorResponse = {
                status: true,
                message: 'You are already subscribed to our newsletter.'
            }
        } else {
            this.form.reset();
            this.serverSuccessResponse = {
                status: true,
                message: 'Thank you for subscribing.'
            }
        }
    }

    // handle server errors
    handleServerError() {
        this.serverErrorResponse = {
            status: true,
            message: 'Server error. Please try again.'
        }
    }


    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    get email() { return this.form.get('email'); }


}
