import{h,v as a}from"./chunk-I6TYQSA3.js";var f=(()=>{let i=class i{constructor(){this.debugOn=!1,this._states={},this._events={}}debug(t,s){this.debugOn&&console.info("app.state: "+t,s)}toggle(t){this._states[t]?this._states[t]=!this._states[t]:this._states[t]=!0,this.emit(t,this._states[t])}emit(t,s){this.createState(t),this._states[t]=s,this._events[t]&&(this.debug("emitting to "+t,s),this._events[t].emit(s))}subscribe(t,s,r){this.debug("subscribing to "+t),this.createState(t,r)||this._states[t]&&s(this._states[t]),this._events[t].subscribe(s),r&&this.emit(t,r)}createState(t,s){return this._events[t]?!1:(this.debug("creating event "+t),this._events[t]=new a,this._states[t]=s,!0)}getEvents(){return this._events}getState(t){return this._states[t]}getStates(){return this._states}};i.\u0275fac=function(s){return new(s||i)},i.\u0275prov=h({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();export{f as a};