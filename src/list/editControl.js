import {InlineViewStrategy} from 'aurelia-framework';
import toastr from 'toastr';


export class Edit {

  activate(list) {
    this.fieldDefinition = list.fieldDefinition;
    this.item = list.item;
  }

  getViewStrategy() {
    let fields = this.fieldDefinition;
    // Build a form
    let form = '<div class="col-sm-12">'
    fields.forEach( field => {
       form += this.getFieldInput(field);
    });

    return new InlineViewStrategy('<template><h2>${text}</h2>' +
       form
       + '</div>'
       + '</template>')
  }

  getFieldInput (field)  {
    let rc = '';
    switch(field.datatype) {
      //case "CHOICE":
      case "STRING":
        return '<div class="form-container col-sm-8 pad-t"><label>' + field.name + '</label>'
           + '<input class="form-control" value.bind="item.' + field.name + '"/></div>';
        break;
      case "DATE":
        return '<div class="form-container col-sm-8 pad-t"><label>' + field.name + '</label>'
           + '<input class="form-control" value.bind="item.' + field.name + '"/></div>';
        break;
      case "INTEGER":
        return '<div class="form-container col-sm-8" pad-t><label>' + field.name + '</label>'
           + '<input class="form-control" value.bind="item.' + field.name + '"/></div>';
        break;
      case "M-STRING":
        return '<div class="form-container col-sm-8" pad-t><label>' + field.name + '</label>'
           + '<textarea rows="' + (field.rows||3) + '" class="form-control" value.bind="item.' + field.name + '"></textarea></div>';
        break;
      case "CHOICE":
        let radio = '';
        let options = field.fieldoptions.split("\n");
        options.forEach( option =>   {
          radio += '<div class="col-sm-11 col-sm-offset-1"><label><input type="radio" value="' + option + '" checked.bind="item.' + field.name + '"/> ' + option + '</label></div>';
        });

        return '<div class="form-container col-sm-8" pad-t><label>' + field.name + '</label>'
            + radio
            + '</div>';
        break;
      default:
        return '<div class="col-sm-12">'+ (field.display || field.name) + ' Field data type not done['+field.datatype+'].</div>';
        break;
    }
  }


}
