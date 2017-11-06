import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { trigger,state,style,transition,animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('myAnimation', [
      state('small', style({
        transform: 'scale(0)',
      })),
      state('large', style({
        transform: 'scale(1)',
      })),

      transition('small <=> large', animate('500ms ease-in')),
    ]),
    trigger('myAnimationButton', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(0)',
      })),

      transition('small <=> large', animate('500ms ease-in')),
    ]),
    trigger('slideAnimation', [
      state('large', style({
        transform: 'translate3d(0, 71%, 0)',
      })),
      state('small', style({
        transform: 'translate3d(0, 0, 0)',
      })),

      transition('small <=> large', animate('300ms ease-in-out')),
    ]),
    trigger('footerAnimation', [
      state('large', style({
        transform: 'translate3d(0, 15.875rem, 0)',
      })),
      state('small', style({
        transform: 'translate3d(0, 0, 0)',
      })),

      transition('small <=> large', animate('300ms ease-in-out')),
    ]),
  ]
})
export class AboutMeComponent implements OnInit {
  state: string = 'small';
  showbikeDetails: boolean = false;
  showbookDetails: boolean = false;
  showhobbies: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  
  }

  animate(){
    this.state  = (this.state === 'small' ? 'large' : 'small');
  }

  carpentry():void{
    this._router.navigate(['/carpentry']);
  }

  gaming():void{
    this._router.navigate(['/games']);
  }

  parenting():void{
    this._router.navigate(['/parenting']);
  }

  showBikeDetails():void{
    this.showbikeDetails = this.showbikeDetails ? false : true;
  }
  showBookDetails():void{
    this.showbookDetails = this.showbookDetails ? false : true;
  }
  showHobbies():void{
    this.showhobbies = this.showhobbies ? false : true;
  }
}
