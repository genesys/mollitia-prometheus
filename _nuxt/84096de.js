(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,n){"use strict";var o={};n.r(o),n.d(o,"PrometheusAddon",(function(){return fe})),n.d(o,"circuits",(function(){return ce})),n.d(o,"metrics",(function(){return pe})),n.d(o,"modules",(function(){return he})),n.d(o,"scrap",(function(){return de}));var r=n(126),l=(n(29),n(36),n(39),n(41),n(179),n(25),n(116),n(30),n(89),n(223),n(21),n(224),n(228),n(51),n(230),n(10),n(38),n(31),n(40),n(45),n(15)),c=function(e,b){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(e[p]=b[p])})(e,b)};function h(e,b){function t(){this.constructor=e}c(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}function d(e,t,n,o){return new(n||(n=Promise))((function(r,l){function c(e){try{d(o.next(e))}catch(e){l(e)}}function h(e){try{d(o.throw(e))}catch(e){l(e)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,h)}d((o=o.apply(e,t||[])).next())}))}function f(e,body){var t,n,o,g,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return g={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function l(l){return function(c){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,n=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(o=r.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){r=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(6===l[0]&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=body.call(e,r)}catch(e){l=[6,e],n=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}function m(){for(var s=0,i=0,e=arguments.length;i<e;i++)s+=arguments[i].length;var t=Array(s),n=0;for(i=0;i<e;i++)for(var a=arguments[i],o=0,r=a.length;o<r;o++,n++)t[n]=a[o];return t}var v=function(){function e(e,t,n){this.listeners=e,this.eventName=t,this.index=n}return e.prototype.dispose=function(){this.listeners[this.eventName].splice(this.index,1)},e}(),y=function(){function e(){this.listeners={}}return e.prototype.on=function(e,t){this.listeners[e]=this.listeners[e]||[];var n=this.listeners[e].push(t);return new v(this.listeners,e,n-1)},e.prototype.off=function(e,t){var n=this.listeners[e];if(n)for(var i=n.length;i>0;i--)if(n[i]===t){n.splice(i,1);break}},e.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=this.listeners[e];return!!o&&(o.forEach((function(e){e.apply(void 0,t)})),!0)},e.prototype.dispose=function(){this.listeners={}},e}(),x=[],C=function(e){function t(){var n=e.call(this,"Circuit has no function set")||this;return Object.setPrototypeOf(n,t.prototype),n}return h(t,e),t}(Error),w=function(){return d(void 0,void 0,void 0,(function(){return f(this,(function(e){return[2,new Promise((function(e,t){t(new C)}))]}))}))},O=[],_=function(e){function t(t){var n,o=e.call(this)||this;o.name=(null==t?void 0:t.name)?t.name:"Circuit"+O.length;for(var r=0,l=x;r<l.length;r++){var c=l[r];c.onCircuitCreate&&c.onCircuitCreate(o,null==t?void 0:t.options)}return o.func=(null==t?void 0:t.func)?t.func:w,o.modules=(null===(n=null==t?void 0:t.options)||void 0===n?void 0:n.modules)||[],O.push(o),o}return h(t,e),Object.defineProperty(t.prototype,"activeModules",{get:function(){return this.modules.filter((function(e){return e.active}))},enumerable:!1,configurable:!0}),t.prototype.fn=function(e){return this.func=e,this},t.prototype.execute=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return d(this,void 0,void 0,(function(){var t,n,i,o,r;return f(this,(function(l){if(this.activeModules.length)if(this.activeModules.length>1){for(n=[],i=2;i<this.activeModules.length;i++)n.push(this,this.activeModules[i].execute.bind(this.activeModules[i]));n.push.apply(n,m([this,this.func],e)),t=(o=this.activeModules[0]).execute.apply(o,m([this,this.activeModules[1].execute.bind(this.activeModules[1])],n))}else t=(r=this.activeModules[0]).execute.apply(r,m([this,this.func],e));else t=this.func.apply(this,e);return this.emit("execute",this,t),[2,t]}))}))},t.prototype.dispose=function(){e.prototype.dispose.call(this),this.modules&&this.modules.forEach((function(e){return e.dispose()}))},t}(y),S=function(){},T=[],I=function(e){function t(t){var n=e.call(this)||this;n.active=void 0===(null==t?void 0:t.active)||t.active,n.name=void 0!==(null==t?void 0:t.name)?t.name:"Module"+T.length;for(var o=0,r=x;o<r.length;o++){var l=r[o];l.onModuleCreate&&l.onModuleCreate(n,t)}return n.logger=null==t?void 0:t.logger,T.push(n),n}return h(t,e),t.prototype.execute=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];var r=t.apply(void 0,n);return this.emit("execute",e,r),r},t.prototype.getExecParams=function(e,t){var n=this,o=e.modules.findIndex((function(e){return e===n})),r=t.length-2*(e.modules.length-1-o);return t.filter((function(p,i){return t.length-i<=r}))},t}(y),E=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}h(t,e)}(S),function(e){function t(){var n=e.call(this,"Timed out")||this;return Object.setPrototypeOf(n,t.prototype),n}return h(t,e),t}(Error)),k=function(e){function t(t){var n=e.call(this,t)||this;return n.delay=void 0!==(null==t?void 0:t.delay)?t.delay:6e4,n}return h(t,e),t.prototype.execute=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return d(this,void 0,void 0,(function(){var o;return f(this,(function(r){return o=this._promiseTimeout.apply(this,m([e,this.delay,t],n)),this.emit("execute",e,o),[2,o]}))}))},t.prototype._promiseTimeout=function(e,time,t){for(var n=[],o=3;o<arguments.length;o++)n[o-3]=arguments[o];return d(this,void 0,void 0,(function(){var o,r=this;return f(this,(function(l){return 0!==time&&time!==1/0?[2,Promise.race([t.apply(void 0,n),new Promise((function(t,n){o=setTimeout((function(){r.emitTimeout(e),n(new E)}),time)}))]).then((function(e){return clearTimeout(o),e})).catch((function(e){return clearTimeout(o),Promise.reject(e)}))]:[2,t.apply(void 0,n)]}))}))},t.prototype.emitTimeout=function(e){var t;null===(t=this.logger)||void 0===t||t.debug(e.name+"/"+this.name+" - Has timed out"),this.emit("timeout",e)},t}(I);function P(e){return void 0===e&&(e=1),d(this,void 0,void 0,(function(){return f(this,(function(t){return[2,new Promise((function(t){setTimeout((function(){t()}),e)}))]}))}))}!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}h(t,e)}(S);var R,D=function(e){function t(t){var n=e.call(this,t)||this;return n.attempts=void 0!==(null==t?void 0:t.attempts)?t.attempts:2,n.interval=void 0!==(null==t?void 0:t.interval)?t.interval:0,n.onRejection=(null==t?void 0:t.onRejection)||function(){return!0},n}return h(t,e),t.prototype.execute=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return d(this,void 0,void 0,(function(){var o;return f(this,(function(r){return o=this._promiseRetry.apply(this,m([e,this.attempts+1,t],n)),this.emit("execute",e,o),[2,o]}))}))},t.prototype._promiseRetry=function(e,t,n){for(var o,r,l=[],c=3;c<arguments.length;c++)l[c-3]=arguments[c];return d(this,void 0,void 0,(function(){var c=this;return f(this,(function(h){return t-1==0?(this.emit("retry",e,this.attempts),null===(o=this.logger)||void 0===o||o.debug(e.name+"/"+this.name+" - Retry: ("+this.attempts+"/"+this.attempts+")"),[2,n.apply(void 0,l)]):(t!==this.attempts+1&&(this.emit("retry",e,this.attempts-t+1),null===(r=this.logger)||void 0===r||r.debug(e.name+"/"+this.name+" - Retry: ("+(this.attempts-t+1)+"/"+this.attempts+")")),[2,n.apply(void 0,l).catch((function(o){return d(c,void 0,void 0,(function(){var r,c;return f(this,(function(h){switch(h.label){case 0:return r=this.onRejection(o),c="number"==typeof r?r:this.interval,!1!==r?[3,1]:[2,Promise.reject(o)];case 1:return[4,P(c)];case 2:return h.sent(),[2,this._promiseRetry.apply(this,m([e,t-1,n],l))]}}))}))}))])}))}))},t}(I),M=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}h(t,e)}(S),function(e){function t(n){var o=e.call(this,"Ratelimited")||this;return o.remainingTimeInRatelimit=n,Object.setPrototypeOf(o,t.prototype),o}return h(t,e),t}(Error)),F=function(e){function t(t){var n=e.call(this,t)||this;return n.limitPeriod=void 0!==(null==t?void 0:t.limitPeriod)?t.limitPeriod:0,n.limitForPeriod=void 0!==(null==t?void 0:t.limitForPeriod)?t.limitForPeriod:1/0,n.requestsTime=[],n}return h(t,e),t.prototype.execute=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return d(this,void 0,void 0,(function(){var o;return f(this,(function(r){return o=this._promiseRatelimit.apply(this,m([e,t],n)),this.emit("execute",e,o),[2,o]}))}))},t.prototype._promiseRatelimit=function(e,t){for(var n,o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];return d(this,void 0,void 0,(function(){var r,l;return f(this,(function(c){return this.limitPeriod?(r=(new Date).getTime(),this.requestsTime.length<this.limitForPeriod?(this.requestsTime.push(r),[2,t.apply(void 0,o)]):(l=r-this.requestsTime[0])>this.limitPeriod?(this.requestsTime.shift(),this.requestsTime.push(r),[2,t.apply(void 0,o)]):(null===(n=this.logger)||void 0===n||n.debug(e.name+"/"+this.name+" - Ratelimited"),this.emit("ratelimit",e),[2,Promise.reject(new M(this.limitPeriod-l))])):[2,t.apply(void 0,o)]}))}))},t}(I),H=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.callback=function(e){return e},t}h(t,e)}(S),function(e){function t(t){var n=e.call(this,t)||this;return n.callback=(null==t?void 0:t.callback)||function(e){return e},n}return h(t,e),t.prototype.execute=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return d(this,void 0,void 0,(function(){var o;return f(this,(function(r){return o=this._promiseFallback.apply(this,m([e,t],n)),this.emit("execute",e,o),[2,o]}))}))},t.prototype._promiseFallback=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return d(this,void 0,void 0,(function(){var e=this;return f(this,(function(o){return[2,new Promise((function(o,r){t.apply(void 0,n).then((function(e){o(e)})).catch((function(t){r(e.callback(t))}))}))]}))}))},t}(I)),j=function(e){function t(){var n=e.call(this,"Circuit is opened")||this;return Object.setPrototypeOf(n,t.prototype),n}return h(t,e),t}(Error),z=function(e){function t(){var t=e.call(this,"Max allowed requests reached")||this;return Object.setPrototypeOf(t,j.prototype),t}return h(t,e),t}(Error);!function(e){e.CLOSED="closed",e.HALF_OPENED="half-opened",e.OPENED="opened"}(R||(R={}));var N,L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return h(t,e),t}(S);!function(e){e[e.SUCCESS=0]="SUCCESS",e[e.FAILURE=1]="FAILURE",e[e.TIMEOUT=2]="TIMEOUT"}(N||(N={}));var B,A=function(e){function t(t){var n=e.call(this,t)||this;return n.halfOpenMaxDelayTimeout=0,n.openTimeout=0,n.state=void 0!==(null==t?void 0:t.state)?t.state:R.CLOSED,n.openStateDelay=void 0!==(null==t?void 0:t.openStateDelay)?t.openStateDelay:6e4,n.halfOpenStateMaxDelay=void 0!==(null==t?void 0:t.halfOpenStateMaxDelay)?t.halfOpenStateMaxDelay:0,n.state===R.OPENED?n.setHalfDelay():n.state===R.HALF_OPENED&&n.setOpenDelay(),n.slidingWindowSize=void 0!==(null==t?void 0:t.slidingWindowSize)?t.slidingWindowSize:10,n.minimumNumberOfCalls=void 0!==(null==t?void 0:t.minimumNumberOfCalls)?t.minimumNumberOfCalls:10,n.failureRateThreshold=void 0!==(null==t?void 0:t.failureRateThreshold)?t.failureRateThreshold:50,n.slowCallDurationThreshold=void 0!==(null==t?void 0:t.slowCallDurationThreshold)?t.slowCallDurationThreshold:6e4,n.slowCallRateThreshold=void 0!==(null==t?void 0:t.slowCallRateThreshold)?null==t?void 0:t.slowCallRateThreshold:100,n.permittedNumberOfCallsInHalfOpenState=void 0!==(null==t?void 0:t.permittedNumberOfCallsInHalfOpenState)?t.permittedNumberOfCallsInHalfOpenState:2,n.nbCallsInHalfOpenedState=0,n.callsInHalfOpenedState=[],n.callsInClosedState=[],n.onError=(null==t?void 0:t.onError)||function(){return!0},n}return h(t,e),t.prototype.reinitializeCounters=function(){this.nbCallsInHalfOpenedState=0,this.callsInClosedState=[],this.callsInHalfOpenedState=[]},t.prototype.onOpened=function(){this.reinitializeCounters()},t.prototype.onClosed=function(){this.reinitializeCounters()},t.prototype.onHalfOpened=function(){this.reinitializeCounters()},t.prototype.execute=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return d(this,void 0,void 0,(function(){var o;return f(this,(function(r){return o=this._promiseBreaker.apply(this,m([e,t],n)),this.emit("execute",e,o),[2,o]}))}))},t.prototype._promiseBreaker=function(e,t){for(var n,o=[],r=2;r<arguments.length;r++)o[r-2]=arguments[r];return d(this,void 0,void 0,(function(){return f(this,(function(r){switch(r.label){case 0:switch(this.state){case R.OPENED:return[3,1];case R.HALF_OPENED:return[3,2];case R.CLOSED:return[3,4]}return[3,6];case 1:return null===(n=this.logger)||void 0===n||n.debug(e.name+"/"+this.name+" - Circuit is opened"),[2,Promise.reject(new j)];case 2:return[4,this.executeInHalfOpened.apply(this,m([t],o))];case 3:return[2,r.sent()];case 4:return[4,this.executeInClosed.apply(this,m([t],o))];case 5:return[2,r.sent()];case 6:return[2]}}))}))},t.prototype.adjustedRequestResult=function(e,t){return t||e!==N.FAILURE?e:N.SUCCESS},t.prototype.executeInHalfOpened=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return d(this,void 0,void 0,(function(){var n,o,r,l;return f(this,(function(c){switch(c.label){case 0:return this.nbCallsInHalfOpenedState<this.permittedNumberOfCallsInHalfOpenState?(this.nbCallsInHalfOpenedState++,[4,this.executePromise.apply(this,m([e],t))]):[3,2];case 1:return n=c.sent(),o=n.requestResult,r=n.response,l=n.shouldReportFailure,this.callsInHalfOpenedState.push(this.adjustedRequestResult(o,l)),this.callsInHalfOpenedState.length==this.permittedNumberOfCallsInHalfOpenState&&this.checkCallRatesHalfOpen(this.open.bind(this),this.close.bind(this)),o===N.FAILURE?[2,Promise.reject(r)]:[2,Promise.resolve(r)];case 2:return[2,Promise.reject(new z)];case 3:return[2]}}))}))},t.prototype.executePromise=function(e){for(var t=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=(new Date).getTime();return e.apply(void 0,n).then((function(e){var n=(new Date).getTime(),o=N.SUCCESS;return 0!==t.slowCallDurationThreshold&&t.slowCallDurationThreshold!==1/0&&n-r>t.slowCallDurationThreshold&&(o=N.TIMEOUT),{requestResult:o,response:e,shouldReportFailure:!1}})).catch((function(e){return{requestResult:N.FAILURE,response:e,shouldReportFailure:t.onError(e)}}))},t.prototype.checkCallRatesHalfOpen=function(e,t){var n=this.callsInHalfOpenedState.reduce(this.getNbSlowAndFailure,{nbSlow:0,nbFailure:0}),o=n.nbSlow,r=n.nbFailure;this.checkResult(o,r,this.callsInHalfOpenedState.length,e,t)},t.prototype.checkResult=function(e,t,n,o,r){this.slowCallRateThreshold<100&&e/n*100>=this.slowCallRateThreshold||this.failureRateThreshold<100&&t/n*100>=this.failureRateThreshold?o():r&&r()},t.prototype.getNbSlowAndFailure=function(e,t){switch(t){case N.FAILURE:e.nbFailure++;break;case N.TIMEOUT:e.nbSlow++}return e},t.prototype._open=function(e){var t;this.state!==R.OPENED&&(null===(t=this.logger)||void 0===t||t.debug(e.name+"/"+this.name+" - Breaker: Open"),this.open())},t.prototype._close=function(e){var t;this.state!==R.CLOSED&&(null===(t=this.logger)||void 0===t||t.debug(e.name+"/"+this.name+" - Breaker: Close"),this.close())},t.prototype.open=function(){this.state!==R.OPENED&&(this.clearHalfOpenTimeout(),this.state=R.OPENED,this.setHalfDelay(),this.onOpened(),this.emit("state-changed",this.state))},t.prototype.halfOpen=function(){this.state!==R.HALF_OPENED&&(this.clearHalfOpenTimeout(),this.state=R.HALF_OPENED,this.setOpenDelay(),this.onHalfOpened(),this.emit("state-changed",this.state))},t.prototype.close=function(){this.state!==R.CLOSED&&(this.clearHalfOpenTimeout(),this.state=R.CLOSED,this.onClosed(),this.emit("state-changed",this.state))},t.prototype.setHalfDelay=function(){var e=this;this.openTimeout=setTimeout((function(){var t;null===(t=e.logger)||void 0===t||t.debug(e.name+" - Breaker: Half Open"),e.halfOpen()}),this.openStateDelay)},t.prototype.setOpenDelay=function(){var e=this;this.halfOpenStateMaxDelay&&(this.halfOpenMaxDelayTimeout=setTimeout((function(){e.halfOpenMaxDelayTimeout=0,e.open()}),this.halfOpenStateMaxDelay))},t.prototype.clearHalfOpenTimeout=function(){this.halfOpenMaxDelayTimeout&&(clearTimeout(this.halfOpenMaxDelayTimeout),this.halfOpenMaxDelayTimeout=0)},t.prototype.dispose=function(){e.prototype.dispose.call(this),this.clearHalfOpenTimeout(),this.openTimeout&&(clearTimeout(this.openTimeout),this.openTimeout=0)},t}(I),U=function(e,t){this.ttl=e,this.res=t},W=function(){function e(){this.map=new Map}return e.prototype.set=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this._setLoopMap.apply(this,m([this.map,e],t))},e.prototype.get=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getLoopMap.apply(this,m([this.map],e))},e.prototype.clear=function(){return this._clearLoopMap(this.map)},e.prototype._setLoopMap=function(map,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(2===t.length){var o={map:new Map,cache:new U(Date.now()+e,t[1])};map.set(t[0],o)}else if(map.get(t[0])){var param=t.splice(0,1)[0];this._setLoopMap.apply(this,m([map.get(param).map,e],t))}else{var r=new Map;map.set(t[0],{map:r}),t.splice(0,1),this._setLoopMap.apply(this,m([r,e],t))}},e.prototype._getLoopMap=function(map){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(map){if(1===e.length)return map.get(e[0])&&map.get(e[0]).cache;var param=e.splice(0,1)[0];return map.get(param)?this._getLoopMap.apply(this,m([map.get(param).map],e)):null}return null},e.prototype._clearLoopMap=function(map){var e=this,t=!1;return map.forEach((function(n){n.map&&(!0===e._clearLoopMap(n.map)&&(t=!0));n.cache&&Date.now()>n.cache.ttl&&(delete n.cache,t=!0)})),t},e}(),V=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}h(t,e)}(S),function(e){function t(t){var n=e.call(this,t)||this;return n.ttl=void 0!==(null==t?void 0:t.ttl)?t.ttl:6e3,n.getInformationFromCache=void 0!==(null==t?void 0:t.getInformationFromCache)&&t.getInformationFromCache,n._cacheInterval=null,n._cacheClearInterval=0,n.cacheClearInterval=void 0!==(null==t?void 0:t.cacheClearInterval)?t.cacheClearInterval:9e5,n.cache=new W,n}return h(t,e),Object.defineProperty(t.prototype,"cacheClearInterval",{get:function(){return this._cacheClearInterval},set:function(e){this._cacheClearInterval=e,this._initializeInterval()},enumerable:!1,configurable:!0}),t.prototype.execute=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return d(this,void 0,void 0,(function(){var o;return f(this,(function(r){return o=this._promiseCache.apply(this,m([e,t],n)),this.emit("execute",e,o),[2,o]}))}))},t.prototype.dispose=function(){e.prototype.dispose.call(this),this._cacheInterval&&(clearTimeout(this._cacheInterval),this._cacheInterval=null)},t.prototype._promiseCache=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return d(this,void 0,void 0,(function(){var o=this;return f(this,(function(r){return[2,new Promise((function(r,c){var h,d,f=(h=o.cache).get.apply(h,m([t],n));if(f){"object"===Object(l.a)(f.res)&&o.getInformationFromCache&&(f.res._mollitiaIsFromCache=!0);var v=Date.now();o.ttl!==1/0&&f.ttl<v?t.apply(void 0,n).then((function(e){var c;o.ttl>0&&(c=o.cache).set.apply(c,m([o.ttl,t],n,[e])),"object"===Object(l.a)(e)&&o.getInformationFromCache&&(e._mollitiaIsFromCache=!1),r(e)})).catch((function(){var t;null===(t=o.logger)||void 0===t||t.debug(e.name+"/"+o.name+" - Cache: Hit [Old]"),r(f.res)})):(null===(d=o.logger)||void 0===d||d.debug(e.name+"/"+o.name+" - Cache: Hit"),r(f.res))}else t.apply(void 0,n).then((function(e){var c;o.ttl>0&&(c=o.cache).set.apply(c,m([o.ttl,t],n,[e])),"object"===Object(l.a)(e)&&o.getInformationFromCache&&(e._mollitiaIsFromCache=!1),r(e)})).catch((function(e){c(e)}))}))]}))}))},t.prototype._initializeInterval=function(){var e=this;this._cacheInterval&&(clearTimeout(this._cacheInterval),this._cacheInterval=null),0!==this.cacheClearInterval&&this.cacheClearInterval!==1/0&&(this._cacheInterval=setTimeout((function(){var t;e.cache.clear()&&(null===(t=e.logger)||void 0===t||t.debug(e.name+" - Cache: Clear")),e._initializeInterval()}),this.cacheClearInterval))},t}(I)),G=function(e){function t(t){var n=e.call(this,t)||this;return n.slidingWindowSize=void 0!==(null==t?void 0:t.slidingWindowSize)?t.slidingWindowSize:10,n.slidingWindowSize<n.minimumNumberOfCalls&&(n.slidingWindowSize=n.minimumNumberOfCalls),n}return h(t,e),t.prototype.executeInClosed=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return d(this,void 0,void 0,(function(){var n,o,r,l,c;return f(this,(function(h){switch(h.label){case 0:return[4,this.executePromise.apply(this,m([e],t))];case 1:return n=h.sent(),o=n.requestResult,r=n.response,l=n.shouldReportFailure,this.callsInClosedState.push(this.adjustedRequestResult(o,l)),(c=this.callsInClosedState.length)>=this.minimumNumberOfCalls&&(c>this.slidingWindowSize&&this.callsInClosedState.splice(0,c-this.slidingWindowSize),this.checkCallRatesClosed(this.open.bind(this))),o===N.FAILURE?[2,Promise.reject(r)]:[2,Promise.resolve(r)]}}))}))},t.prototype.checkCallRatesClosed=function(e){var t=this.callsInClosedState.reduce(this.getNbSlowAndFailure,{nbSlow:0,nbFailure:0}),n=t.nbSlow,o=t.nbFailure;this.checkResult(n,o,this.callsInClosedState.length,e)},t}(A),Q=function(e){function t(t){var n=e.call(this,t)||this;return n.slidingWindowSize=void 0!==(null==t?void 0:t.slidingWindowSize)?t.slidingWindowSize:60,n.maxSize=1e3,n}return h(t,e),t.prototype.filterCalls=function(){var e=this.callsInClosedState.length;e>=this.maxSize&&(this.callsInClosedState.shift,e--);for(var t=!0,n=(new Date).getTime(),i=0;i<e&&t;i++)n-this.callsInClosedState[0].timestamp>this.slidingWindowSize?this.callsInClosedState.shift():t=!1},t.prototype.executeInClosed=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return d(this,void 0,void 0,(function(){var n,o,r,l;return f(this,(function(c){switch(c.label){case 0:return[4,this.executePromise.apply(this,m([e],t))];case 1:return n=c.sent(),o=n.requestResult,r=n.response,l=n.shouldReportFailure,this.filterCalls(),this.callsInClosedState.push({result:this.adjustedRequestResult(o,l),timestamp:(new Date).getTime()}),this.callsInClosedState.length>=this.minimumNumberOfCalls&&this.checkCallRatesClosed(this.open.bind(this)),o===N.FAILURE?[2,Promise.reject(r)]:[2,Promise.resolve(r)]}}))}))},t.prototype.checkCallRatesClosed=function(e){var t=this.callsInClosedState.reduce(this.getNbSlowAndFailureTimeElem,{nbSlow:0,nbFailure:0}),n=t.nbSlow,o=t.nbFailure;this.checkResult(n,o,this.callsInClosedState.length,e)},t.prototype.getNbSlowAndFailureTimeElem=function(e,t){switch(t.result){case N.FAILURE:e.nbFailure++;break;case N.TIMEOUT:e.nbSlow++}return e},t}(A),J=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}h(t,e)}(S),function(e){function t(){var n=e.call(this,"Circuit is overloaded")||this;return Object.setPrototypeOf(n,t.prototype),n}return h(t,e),t}(Error)),Y=function(e){function t(){var n=e.call(this,"Waiting for too long in queue")||this;return Object.setPrototypeOf(n,t.prototype),n}return h(t,e),t}(Error),X=function(e){function t(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var r=e.call(this)||this;return r.promise=t,r.params=n,r}return h(t,e),t.prototype.execute=function(){return d(this,void 0,void 0,(function(){var e=this;return f(this,(function(t){return[2,new Promise((function(t,n){e.emit("execute"),e.promise.apply(e,e.params).then((function(n){e.emit("resolve",n),t(n)})).catch((function(t){e.emit("reject",t),n(t)}))}))]}))}))},t}(y),$=function(e){function t(t){var n=e.call(this,t)||this;return n.concurrentSize=void 0!==(null==t?void 0:t.concurrentSize)?t.concurrentSize:10,n.queueSize=void 0!==(null==t?void 0:t.queueSize)?t.queueSize:10,n.maxQueueWait=void 0!==(null==t?void 0:t.maxQueueWait)?t.maxQueueWait:6e4,n.concurrentBuffer=[],n.queueBuffer=[],n}return h(t,e),t.prototype.execute=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return d(this,void 0,void 0,(function(){var o;return f(this,(function(r){return o=this._promiseBulkhead.apply(this,m([e,t],n)),this.emit("execute",e,o),[2,o]}))}))},t.prototype._promiseBulkhead=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return d(this,void 0,void 0,(function(){var e=this;return f(this,(function(o){return[2,new Promise((function(o,r){var l=new(X.bind.apply(X,m([void 0,t],n)));if(e.concurrentBuffer.length<e.concurrentSize)l.execute().then((function(e){o(e)})).catch((function(e){r(e)})).finally((function(){e.concurrentBuffer.splice(e.concurrentBuffer.indexOf(l),1),e._addBufferedPromise()})),e.concurrentBuffer.push(l);else if(e.queueBuffer.length<e.queueSize){e.queueBuffer.push(l);var c=setTimeout((function(){e.queueBuffer.splice(e.queueBuffer.indexOf(l),1),d.dispose(),f.dispose(),r(new Y)}),e.maxQueueWait),h=l.on("execute",(function(){h.dispose(),clearTimeout(c)})),d=l.on("resolve",(function(t){clearTimeout(c),e.concurrentBuffer.splice(e.concurrentBuffer.indexOf(l),1),d.dispose(),f.dispose(),e._addBufferedPromise(),o(t)})),f=l.on("reject",(function(t){clearTimeout(c),e.concurrentBuffer.splice(e.concurrentBuffer.indexOf(l),1),d.dispose(),f.dispose(),e._addBufferedPromise(),r(t)}))}else r(new J)}))]}))}))},t.prototype._addBufferedPromise=function(){if(this.queueBuffer.length>0){var e=this.queueBuffer.splice(0,1)[0];e.execute().catch((function(){})),this.concurrentBuffer.push(e)}},t}(I),K=function(){return(K=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e}).apply(this,arguments)};!function(e){e.COUNTER="counter",e.GAUGE="gauge"}(B||(B={}));var Z=function(){function e(e,t){this.key=e,this.type=B.COUNTER,this.labels=(null==t?void 0:t.labels)||{},this.values={},(null==t?void 0:t.description)&&(this.description=null==t?void 0:t.description)}return e.prototype.inc=function(e,t){return void 0===e&&(e=1),this.values[t]=this.values[t]||0,this.values[t]+=e,this.values[t]},e.prototype.scrap=function(){var e="";return Object.keys(this.values).length&&(e=this.scrapHelp(),e+=this.scrapValues()),e},e.prototype.scrapHelp=function(){var e="# HELP "+this.key+" "+this.description+"\n";return e+="# TYPE "+this.key+" "+this.type+"\n"},e.prototype.scrapValues=function(){var e="";if(Object.keys(this.values).length)for(var t in this.values){var n='circuit="'+t+'"';for(var label in this.labels)n+=", "+label+'="'+this.labels[label]+'"';e+=this.key+"{"+n+"} "+this.values[t]+"\n"}return e},e}(),ee=function(){function e(e,t){this.key=e,this.type=B.GAUGE,this.labels=(null==t?void 0:t.labels)||{},this.values={},(null==t?void 0:t.description)&&(this.description=null==t?void 0:t.description)}return e.prototype.inc=function(e,t){return void 0===e&&(e=1),this.values[t]=this.values[t]||0,this.values[t]+=e,this.values[t]},e.prototype.get=function(e){return this.values[e]},e.prototype.set=function(e,t){return this.values[t]=e,this.values[t]},e.prototype.scrap=function(){var e="";return Object.keys(this.values).length&&(e=this.scrapHelp(),e+=this.scrapValues()),e},e.prototype.scrapHelp=function(){var e="# HELP "+this.key+" "+this.description+"\n";return e+="# TYPE "+this.key+" "+this.type+"\n"},e.prototype.scrapValues=function(){var e="";if(Object.keys(this.values).length)for(var t in this.values){var n='circuit="'+t+'"';for(var label in this.labels)n+=", "+label+'="'+this.labels[label]+'"';var o=this.values[t]%1?this.values[t].toFixed(2):this.values[t];e+=this.key+"{"+n+"} "+o+"\n"}return this.values={},e},e}(),te=function(e,t){var n,o,r,l,c,h,d,f,m,v,y,x,C,w,O,S,T=null===(n=t.prometheus)||void 0===n?void 0:n.labels;e.constructor.name!==_.name&&(T=K(K({},T),{module:(null===(o=t.prometheus)||void 0===o?void 0:o.name)||""}));var I=new Z(((null===(r=t.prometheus)||void 0===r?void 0:r.prefix)?(null===(l=t.prometheus)||void 0===l?void 0:l.prefix)+"_":"")+"total_executions",{description:"Total Executions",labels:T}),E=new Z(((null===(c=t.prometheus)||void 0===c?void 0:c.prefix)?(null===(h=t.prometheus)||void 0===h?void 0:h.prefix)+"_":"")+"total_success",{description:"Total Success",labels:T}),k=new Z(((null===(d=t.prometheus)||void 0===d?void 0:d.prefix)?(null===(f=t.prometheus)||void 0===f?void 0:f.prefix)+"_":"")+"total_failures",{description:"Total Failures",labels:T}),P={},R=new ee(((null===(m=t.prometheus)||void 0===m?void 0:m.prefix)?(null===(v=t.prometheus)||void 0===v?void 0:v.prefix)+"_":"")+"duration",{description:"Maximum Duration of Circuit Execution",labels:K(K({},T),{metricType:"MAX"})}),D=new ee(((null===(y=t.prometheus)||void 0===y?void 0:y.prefix)?(null===(x=t.prometheus)||void 0===x?void 0:x.prefix)+"_":"")+"duration",{description:"Average Duration of Circuit Execution",labels:K(K({},T),{metricType:"AVG"})}),M=new ee(((null===(C=t.prometheus)||void 0===C?void 0:C.prefix)?(null===(w=t.prometheus)||void 0===w?void 0:w.prefix)+"_":"")+"duration",{description:"Minimum Duration of Circuit Execution",labels:K(K({},T),{metricType:"MIN"})}),F=new ee(((null===(O=t.prometheus)||void 0===O?void 0:O.prefix)?(null===(S=t.prometheus)||void 0===S?void 0:S.prefix)+"_":"")+"duration",{description:"Count of Circuit Execution",labels:K(K({},T),{metricType:"COUNT"})});return e.on("execute",(function(e,t){var n="";n=e.constructor.name===_.name&&e.prometheus.perMethod?e.prometheus.name+"_"+e.prometheus.funcName:e.prometheus.name,P[n]=P[n]||0;var o=Date.now();I.inc(1,n),t.then((function(){var e=F.inc(1,n);1===e&&(P[n]=0);var t=Date.now()-o;P[n]+=t;var r=M.get(n);(!r||r>t)&&M.set(t,n);var l=R.get(n);(!l||l<t)&&R.set(t,n),D.set(P[n]/e,n)})).catch((function(){k.inc(1,n)}))})),{total_executions:I,total_success:E,total_failures:k,duration_max:R,duration_ave:D,duration_min:M,duration_count:F}},ie=function(e,t){return te(e,t)},ne=function(e,t){var n,o,r,l,c=te(e,t),h=K(K({},null===(n=t.prometheus)||void 0===n?void 0:n.labels),{module:(null===(o=t.prometheus)||void 0===o?void 0:o.name)||""}),d=new Z(((null===(r=t.prometheus)||void 0===r?void 0:r.prefix)?(null===(l=t.prometheus)||void 0===l?void 0:l.prefix)+"_":"")+"total_failures_timeout",{description:"Total Timeout Failures",labels:h});return e.on("timeout",(function(){d.inc(1,e.prometheus.name)})),K(K({},c),{total_failures_timeout:d})},oe=function(e,t){return te(e,t)},re=function(e,t){return te(e,t)},ae=function(e,t){return te(e,t)},se=function(e,t){return te(e,t)},ue=function(e,t){return te(e,t)},le=function(e,t){return te(e,t)},ce=[],he=[],pe=function(){for(var e,t,n={},o=0,r=ce;o<r.length;o++){var l=r[o],c=l.prometheus.name;for(var h in l.prometheus.metrics)n[h]?n[h].circuits[c]=l.prometheus.metrics[h].values[c]:n[h]={circuits:(e={},e[c]=l.prometheus.metrics[h].values[c]||0,e),modules:{}}}for(var d=0,f=he;d<f.length;d++){var m=f[d],v=m.prometheus.name;for(var h in m.prometheus.metrics)Object.keys(m.prometheus.metrics[h].values).length&&(n[h]?n[h].modules[v]=m.prometheus.metrics[h].values:n[h]={circuits:{},modules:(t={},t[v]=m.prometheus.metrics[h].values,t)})}return n},de=function(){for(var e={},t=0,n=ce;t<n.length;t++){var o=n[t];for(var r in o.prometheus.metrics)e[r]?e[r].value+=o.prometheus.metrics[r].scrapValues():e[r]={help:o.prometheus.metrics[r].scrapHelp(),value:o.prometheus.metrics[r].scrapValues()}}for(var l=0,c=he;l<c.length;l++){var h=c[l];for(var r in h.prometheus.metrics)e[r]?e[r].value+=h.prometheus.metrics[r].scrapValues():e[r]={help:h.prometheus.metrics[r].scrapHelp(),value:h.prometheus.metrics[r].scrapValues()}}var d="";for(var r in e)d+=""+e[r].help+e[r].value+"\n";return d},fe=function(){function e(){}return e.prototype.onCircuitCreate=function(e,t){if(t.prometheus){e.prometheus={name:t.prometheus.name,perMethod:!!t.prometheus.perMethod&&t.prometheus.perMethod,labels:t.prometheus.labels||{},metrics:ie(e,t),scrap:function(){var t="";for(var n in e.prometheus.metrics)t+=e.prometheus.metrics[n].scrap();return t}};var n=e.fn.bind(e);e.fn=function(t,o){return e.prometheus.funcName=o||t.name,n(t)},ce.push(e)}},e.prototype.onModuleCreate=function(e,t){if(t.prometheus){var n=void 0;switch(e.constructor.name){case k.name:n=ne;break;case D.name:n=oe;break;case $.name:n=re;break;case V.name:n=ae;break;case F.name:n=se;break;case H.name:n=ue;break;case L.name:case G.name:case Q.name:n=le;break;default:n=function(){return{}}}e.prometheus={name:t.prometheus.name,labels:t.prometheus.labels||{},metrics:n(e,t),scrap:function(){var t="";for(var n in e.prometheus.metrics)t+=e.prometheus.metrics[n].scrap();return t}},he.push(e)}},e}();r.use(new fe);t.a=function(e,t){t("mollitia",r),t("mollitiaPrometheus",o)}},175:function(e,t,n){"use strict";n(214);var o=n(43),component=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},180:function(e,t,n){n(181),e.exports=n(182)},214:function(e,t,n){"use strict";var o=n(83);n.n(o).a},215:function(e,t,n){(t=n(64)(!1)).push([e.i,':root{--madoc-white:#fff;--madoc-black:#000;--madoc-light-orange:#ff4f1f;--madoc-dark-orange:#e36209;--madoc-grey-1:#111;--madoc-grey-2:#222;--madoc-grey-3:#333;--madoc-grey-4:#444;--madoc-grey-5:#555;--madoc-grey-9:#999;--madoc-light-primary:#aaa;--madoc-dark-primary:#444;--madoc-github-blue-link:#0366d6;--madoc-github-red-code:#af6161;--madoc-github-code-back:rgba(27,31,35,0.05);--madoc-github-underline:#eaecef;--madoc-github-grey-1:#eaeeef;--madoc-github-grey-2:#6a737d;--madoc-github-grey-3:#dfe2e5;--madoc-github-grey-4:#e1e4e8;--madoc-github-grey-5:#c6cbd1;--madoc-github-grey-6:#24292e;--madoc-github-grey-7:#d6d3d5;--madoc-github-grey-8:#d6d8da;--madoc-github-grey-9:#9da5b4;--madoc-github-grey-10:#181a1f;--madoc-github-grey-11:#1b1d23;--madoc-github-grey-12:#f6f8fa;--madoc-white-opacity-50:hsla(0,0%,100%,0.5);--madoc-black-opacity-25:rgba(0,0,0,0.25);--madoc-black-opacity-50:rgba(0,0,0,0.5);--madoc-grey-blue-1:#dce5ed;--madoc-grey-blue-2:#8da9c4;--madoc-grey-blue-3:#778da9;--madoc-blue-1:#00a6ed;--mollitia-error-color:#ea4f6b;--mollitia-warning-color:#f8a740;--mollitia-success-color:#4ac764;--mollitia-info-color:#2e69db;--mollitia-event-color:#ff8fdd}a{color:var(--madoc-anchor-link-color);text-decoration:none}a:hover{text-decoration:underline}h1{font-size:2em}h1,h2{padding-bottom:.3em;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}h2{font-size:1.5em}h3{font-size:1.25em}h4{font-size:1em}h5{font-size:.875em}h6{font-size:.85em}b,strong{font-weight:600}blockquote{padding:0 1em;border-left:.25em solid #181a1f;border-left:.25em solid var(--madoc-github-grey-10)}hr{height:.25em;padding:0;margin:24px 0;background-color:#181a1f;background-color:var(--madoc-github-grey-10);border:0}p>code,table code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;padding:.2em .4em;margin:0;font-size:85%;background-color:#1b1d23;background-color:var(--madoc-github-grey-11);color:#af6161;color:var(--madoc-github-red-code);border-radius:3px}table{width:100%;border-spacing:0;border-collapse:collapse}table tr{background-color:#222;background-color:var(--madoc-grey-2);border-top:1px solid #181a1f;border-top:1px solid var(--madoc-github-grey-10)}table tr:nth-child(2n){background-color:var(--madoc-vscode-grey-3)}table tr>td,table tr>th{padding:6px 13px;border:1px solid #181a1f;border:1px solid var(--madoc-github-grey-10)}html{font-family:"Roboto";background-color:#24292e;background-color:var(--madoc-github-grey-6);color:#fff;color:var(--madoc-white);overflow-x:hidden}body,html{height:100%}body{margin:0}body>div#__nuxt,body>div#__nuxt>div#__layout,body>div#__nuxt>div#__layout>div#app{height:100%}body>div#__nuxt>div#__layout>div#app>div.madoc-page{display:flex;flex-direction:column;height:100%}body>div#__nuxt>div#__layout>div#app>div.madoc-page>div.madoc-container{flex-grow:1;display:flex;flex-direction:row;overflow:hidden}body>div#__nuxt>div#__layout>div#app>div.madoc-page>div.madoc-container>div.madoc-wrapper{flex-grow:1;overflow:auto}body>div#__nuxt>div#__layout>div#app>div.madoc-page>div.madoc-container>div.madoc-wrapper>div.madoc-content{margin:0 auto 50px;max-width:60%;min-width:800px}',""]),e.exports=t},83:function(e,t,n){var content=n(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(65).default)("5c346d62",content,!0,{sourceMap:!1})}},[[180,3,1,4]]]);