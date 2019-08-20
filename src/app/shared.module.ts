import { NgModule } from '@angular/core';
import { FormFieldErrorComponent } from './_util/form-field-error/form-field-error.component';
import { FormFieldSuccessComponent } from './_util/form-field-success/form-field-success.component';
import { CommonModule } from '../../node_modules/@angular/common';
// import { YoutubePlayerModule } from 'ngx-youtube-player';
import { MailingListComponent } from './pages/home/components/mailing-list/mailing-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { DeferLoadModule } from '@trademe/ng-defer-load';
// import { PipesModule } from './pipes/pipes.module';
@NgModule({
  declarations: [
    FormFieldErrorComponent,
    FormFieldSuccessComponent,
    MailingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    FormFieldErrorComponent,
    FormFieldSuccessComponent,
    MailingListComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {

}
