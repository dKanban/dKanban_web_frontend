import Ember from 'ember';

export default Ember.Mixin.create({

  getStatus: function(status){
    if(status === "Testando"){
      return "2";
    }else if(status === "Desenvolvendo"){
      return "1";
    }else if(status === "Homologando"){
      return "3"
    }else {
      return "4"
    }
  }

});
