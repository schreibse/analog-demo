
 import {injectLoad} from "@analogjs/router";
 import { Component } from '@angular/core';
 import {toSignal} from "@angular/core/rxjs-interop";
 import {load} from "./index.server";



@Component({
  standalone: true,
  imports: [],
  template: `
     <h1>EG</h1>
     <p>EG index page works!!</p>

     <h2> Data </h2>
     <p> {{ data().loaded }} </p>
     <p> {{ data().time }} </p>
  `,
})
export default class IndexPage {
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
