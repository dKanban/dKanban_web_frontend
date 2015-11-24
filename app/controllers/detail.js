import Ember from 'ember';
import ParseUtil from '../mixins/parse-util'
export default Ember.Controller.extend(ParseUtil,{

  selectedStatus: '',
  status: function(){
    var currentStatus = this.get('model.status');
    if(currentStatus === "0"){
      return ['Mude o status','Desenvolvendo'];
    }else if( currentStatus === "1") {
      return ['Mude o status','Testando'];
    }else if (currentStatus === "2"){
      return ['Mude o status','Desenvolvendo', 'Homologando']
    }else{
      return ['Mude o status',"Desenvolvendo", "Aprovado"]
    }
  }.property('model'),

  developer: function(){
    return this.store.find('user',this.get('model.developer_owner_id'));
  }.property('model'),

  priority: function(){
    var text = this.get('model.priority');
    console.log(this.get('model.priority'));
    if(text === "0"){
      return "Urgente";
    }else if(text === "1"){
      return "Normal";
    }
  }.property('model'),

  changeStatus: function(){
    var newStatus = this.getStatus(this.get('selectedStatus'));
    console.log(newStatus);
    this.get('model').set('status',newStatus);
    this.get('model').save();
    // this.transitionToRoute('dashboard');
  }.observes('selectedStatus'),


});
