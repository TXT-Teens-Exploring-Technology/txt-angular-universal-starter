import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public url = url;

  constructor(private router: Router, public http: HttpClient) { 
  }

  submitVolunteerForm(data) {
    return this.http.post(this.url + '/exploringtech/recordWebsiteFormVolunteer', data)
  }

  submitMentorForm(data) {
    return this.http.post(this.url + '/exploringtech/recordWebsiteFormMentor', data)
  }

  submitFellowsForm(data) {
    return this.http.post(this.url + '/exploringtech/recordWebsiteFormFellows', data)
  }

  submitContactForm(data) {

    return this.http.post(this.url + '/exploringtech/recordWebsiteFormContact', data)
  }

  submitMailingListForm(data) {
    return this.http.post(this.url + '/exploringtech/newsletterMember', data)
  }

  getAllPodcasts() {
    return this.http.get(this.url + '/exploringtech/get-all-podcasts');
  }

  getSinglePodcast(id) {
    const query = this.url + '/exploringtech/get-single-podcast?id=' + id;
    return this.http.get(query);
  }
}
