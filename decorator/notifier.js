class Notifier {
  send( msg, baseNode, block ){
    console.log('Mesasge was sended:', msg );
    const target = baseNode.querySelector(`.notifier__item[data-slug="${block}"]`);
    console.log('target', target);
    target.innerHTML += `<div>${msg}</div>`;
  }
}
class SmsNotifier extends Notifier {
  send( msg, baseNode, block = 'sms' ){
    super.send(msg, baseNode, block);
  }
}
class ViberNotifier extends Notifier {
  send( msg, baseNode, block = 'viber'){
    super.send(msg, baseNode, block);
  }
}
class GmailNotifier extends Notifier {
  send( msg, baseNode, block = 'mail' ){
   super.send(msg, baseNode, block);
  }
}
class TelegramNotifier extends Notifier {
  send( msg, baseNode, block = 'telegram' ){
    super.send(msg, baseNode, block);
  }
}
class SlackNotifier extends Notifier {
  send( msg, baseNode, block = 'slack' ){
   super.send(msg, baseNode, block);
  }
}
export class NotifierFactory {
  constructor(clients) {
    let obs = clients.map( item => {
      switch (item.name) {
        case 'sms': {
          return new SmsNotifier(item);
          break;
        }
        case 'viber': {
          return new ViberNotifier(item);
          break;
        }
        case 'mail': {
          return new GmailNotifier(item);
          break;
        }
        case 'telegram': {
          return new TelegramNotifier(item);
          break;
        }
        case 'slack': {
          return new SlackNotifier(item);
          break;
        }
        default: return;
      }
    });
    this.clients = obs;
  }
  sendMessage( msg, baseNode ){
    this.clients.map( ( obs ) => {
      obs.send(msg, baseNode);
    });
  }
  addNotifier( notifier ){
    this.clients.push( notifier );
  }
}
