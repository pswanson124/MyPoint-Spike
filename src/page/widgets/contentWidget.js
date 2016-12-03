import { inject } from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class ContentWidget {
   constructor(eventaAggregator) {
      this.ea = eventaAggregator
   }

   activate(content) {
      this.content = content;
      this.content.content = this.content.content || "";
      this.content.chrome = this.content.chrome || 'border';
      this.isEditable=false;
   }

   toggleEdit()   {
      //ea.onEdit
      this.isEditable = !this.isEditable;
   }
}
