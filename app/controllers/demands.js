import Ember from 'ember';

export default Ember.Controller.extend({
  selectedPriority: '',
  priorities: ["Urgente", "Alta", "Média", "Baixa"]
});
