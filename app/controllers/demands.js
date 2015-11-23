import Ember from 'ember';

export default Ember.Controller.extend({
  selectedPriority: 'Urgente',
  priorities: ["Urgente", "Alta", "Média", "Baixa"]
});
