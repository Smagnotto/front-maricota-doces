import { Component, EventEmitter, Output, ViewChild, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, transition, animate, AnimationEvent } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit, OnDestroy {
  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  @ViewChild('topbarMenu') topbarMenu: ElementRef;

  activeMenuIndex: number;

  outsideClickListener: any;

  subscription: Subscription;

  logoMap = {
    'bootstrap4-light-blue': 'bootstrap4-light-blue.svg',
    'bootstrap4-light-purple': 'bootstrap4-light-purple.svg',
    'bootstrap4-dark-blue': 'bootstrap4-dark-blue.svg',
    'bootstrap4-dark-purple': 'bootstrap4-dark-purple.svg',
    'md-light-indigo': 'md-light-indigo.svg',
    'md-light-deeppurple': 'md-light-deeppurple.svg',
    'md-dark-indigo': 'md-dark-indigo.svg',
    'md-dark-deeppurple': 'md-dark-deeppurple.svg',
    'mdc-light-indigo': 'md-light-indigo.svg',
    'mdc-light-deeppurple': 'md-light-deeppurple.svg',
    'mdc-dark-indigo': 'md-dark-indigo.svg',
    'mdc-dark-deeppurple': 'md-dark-deeppurple.svg',
    'saga-blue': 'saga-blue.png',
    'saga-green': 'saga-green.png',
    'saga-orange': 'saga-orange.png',
    'saga-purple': 'saga-purple.png',
    'vela-blue': 'vela-blue.png',
    'vela-green': 'vela-green.png',
    'vela-orange': 'vela-orange.png',
    'vela-purple': 'vela-purple.png',
    'arya-blue': 'arya-blue.png',
    'arya-green': 'arya-green.png',
    'arya-orange': 'arya-orange.png',
    'arya-purple': 'arya-purple.png',
    nova: 'nova.png',
    'nova-alt': 'nova-alt.png',
    'nova-accent': 'nova-accent.png',
    'nova-vue': 'nova-vue.png',
    'luna-blue': 'luna-blue.png',
    'luna-green': 'luna-green.png',
    'luna-pink': 'luna-pink.png',
    'luna-amber': 'luna-amber.png',
    rhea: 'rhea.png',
    'fluent-light': 'fluent-light.png',
    'soho-light': 'soho-light.png',
    'soho-dark': 'soho-dark.png',
    'viva-light': 'viva-light.svg',
    'viva-dark': 'viva-dark.svg',
    mira: 'mira.jpg',
    nano: 'nano.jpg',
  };

  versions: any[];

  constructor(private router: Router) {}

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeMenuIndex = 0; //null
      }
    });
  }

  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }

  bindOutsideClickListener() {
    if (!this.outsideClickListener) {
      this.outsideClickListener = (event: any) => {
        if (this.isOutsideTopbarMenuClicked(event)) {
          this.activeMenuIndex = 0; //null
        }
      };

      document.addEventListener('click', this.outsideClickListener);
    }
  }

  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener('click', this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }

  toggleMenu(event: Event, index: number) {
    this.activeMenuIndex = this.activeMenuIndex === index ? 0 : index;
    event.preventDefault();
  }

  isOutsideTopbarMenuClicked(event: any): boolean {
    return !(
      this.topbarMenu.nativeElement.isSameNode(event.target) ||
      this.topbarMenu.nativeElement.contains(event.target)
    );
  }

  onOverlayMenuEnter(event: AnimationEvent) {
    switch (event.toState) {
      case 'visible':
        this.bindOutsideClickListener();
        break;

      case 'void':
        this.unbindOutsideClickListener();
        break;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
