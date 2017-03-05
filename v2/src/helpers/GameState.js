import Q from 'q';

export default {
  CURRENT_STATE : null,

  StateHandlers : {},

  callStateHandlers : function(state, subState, params, clearHandlers){
    if(!this.StateHandlers[state]) return;

    this.StateHandlers[state].forEach(function(evt){
        if(evt.subState == subState)
          evt.handler(params);
    });

    if(clearHandlers)
      this.clearStateHandlers(state, subState);
  },

  addStateHandler : function(state, handler, permanent, subState){
      if(!this.StateHandlers[state])
        this.StateHandlers[state] = [];

      this.StateHandlers[state].push({
        handler,
        permanent,
        subState
      });
  },

  clearStateHandlers : function(state , subState) {
    this.StateHandlers[state] = this.StateHandlers[state].filter(x => x.permanent || x.subState != subState);
  },

  toStateExpect: function(state, expectedState){
    var me = this;

    this.toState(state);

    return Q.Promise(function(resolve, reject){
      me.addStateHanderStart(expectedState, resolve, false);
    });
  },

  toState: function(state, params){
    this.callStateHandlers(this.CURRENT_STATE, "end", params, true);
    this.CURRENT_STATE = state;
    this.callStateHandlers(state, "start", params, true);
  },

  addStateHanderStart(state, handler, permanent){
      this.addStateHandler(state, handler, permanent, "start");
  },

  addStateHandlerEnd(state, handler, permanent){
    this.addStateHandler(state, handler, permanent, "end");
  },

  addTempStateHandler: function(state, startHandler, endHandler){
    if(startHandler)
      this.addStateHanderStart(state, startHandler, false);
    if(endHandler)
      this.addStateHandlerEnd(state, endHandler, false);
  },

  addPermStateHandler: function(state, startHandler, endHandler){
    if(startHandler)
      this.addStateHanderStart(state, startHandler, true);
    if(endHandler)
      this.addStateHandlerEnd(state, endHandler, true);
  }
};
