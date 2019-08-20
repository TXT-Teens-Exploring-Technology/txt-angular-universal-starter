import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { SEOService } from './_services/seo.service';
import { MailingListComponent } from './pages/home/components/mailing-list/mailing-list.component';
import { TestimonialsComponent } from './pages/home/components/testimonials/testimonials.component';
import { VideoPopUpComponent } from './pages/home/components/video-pop-up.component.ts/video-pop-up.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestimonialsComponent,
    VideoPopUpComponent
  ],
  imports: [
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'txt-app' }),
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
        data: {
          title: 'TXT-Home',
          description: 'We serve young men of color between the 7th and 11th grade who are from low income communities. Since 2009, we’ve used the concept of developing strong teams as a way for our young men to learn about collaboration, ideation, and long-lasting life skills. In small teams our youths learn the process of taking an idea from concept to market.',
          ogUrl: 'https://exploringtech.org/home'
        }
      },
    ]),
    TransferHttpCacheModule,
  ],
  providers: [SEOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
