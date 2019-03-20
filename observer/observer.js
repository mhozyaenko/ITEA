function Observable() {
  const observers = [];
  this.sendMessage = ( msg ) => {
    observers.map( ( obs ) => {
      obs.notify(msg);
    });
  };
  this.addObserver = function( observer ){
    observers.push( observer );
  };
}

function Observer (behavior) {
  this.notify = function( msg ){
    behavior( msg );
  };
}

export { Observable, Observer };
