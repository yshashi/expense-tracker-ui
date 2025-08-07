import { Component } from '@angular/core';
import { Hero } from './components/hero';
import { Cta } from './components/cta';
import { Features } from './components/features';

@Component({
  selector: 'app-landing',
  imports: [Hero, Cta, Features],
  template: `
    <app-hero />
    <app-features />
    <app-cta />
  `,
})
export class Landing {}
