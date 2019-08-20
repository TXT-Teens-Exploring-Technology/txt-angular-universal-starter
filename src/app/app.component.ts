import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SEOService } from './_services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public activatedRoute;
  public dropdownMenu = [false, false, false, false];
  public activeNavMenu = false;

  constructor(public router: Router, public route:ActivatedRoute, public _seoService: SEOService) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this._seoService.updateTitle(this.route.root.firstChild.snapshot.data['title']);
      this._seoService.updateOgUrl(this.route.root.firstChild.snapshot.data['ogUrl']);
      this._seoService.updateDescription(this.route.root.firstChild.snapshot.data['description']);
    })
  }

  toggleNavMenu() {
    this.activeNavMenu = !this.activeNavMenu;
  }

  toggleDropdown(index) {
    this.dropdownMenu[index] = !this.dropdownMenu[index];
  }


  navigate(id) {
    console.log('navigate');
    this.router.navigate(['get-involved', id])
  }


}
