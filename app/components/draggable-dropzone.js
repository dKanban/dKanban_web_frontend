import Ember from 'ember';
import ParseUtil from '../mixins/parse-util';

var { set } = Ember;

export default Ember.Component.extend(ParseUtil,{
  classNames        : [ 'draggableDropzone' ],
  classNameBindings : [ 'dragClass' ],
  dragClass         : 'deactivated',

  dragLeave(event) {
    event.preventDefault();

    set(this, 'dragClass', 'deactivated');
  },

  dragOver(event) {
    event.preventDefault();
//TODO: alterar cor da borda para vermelho se não for permitido
    set(this, 'dragClass', 'activated');
  },

  drop(event) {
    var data = event.dataTransfer.getData('text/data');
    var jsonData = JSON.parse(data);
    var currentStatusName = event['currentTarget'].getElementsByTagName("h4")[0]['outerText'];
    jsonData.newStatus = this.getStatus(currentStatusName);
    data = JSON.stringify(jsonData);
    this.sendAction('dropped', data);

    set(this, 'dragClass', 'deactivated');
  }
});
