"use strict"

import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'isomorphic-fetch';
import {InlineViewStrategy} from 'aurelia-framework';
import {activationStrategy} from 'aurelia-router';


@inject(HttpClient)
export class Lists {
   heading = 'List View';
   items = [];
   page = 0;
   pagesize = 50;

   constructor(http) {
      http.configure(config => {
         config
            //.useStandardConfiguration()
            .withBaseUrl('http://localhost:3000/');
      });

      this.http = http;
   }

   activate(act) {
      return this.getData().then( x => {return true;});
   }

   getData(page, pagesize) {

      return this.http.fetch('lists/')
         .then(response => {
            return response.json()
         })
         .then(_items => {
            this.items = _items

            return true;
         });
   }

}
