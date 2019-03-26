import { NotifierFactory } from './notifier';

const Messengers = [
  {name: 'sms', image: 'img/sms.svg', type: 'mts'},
  {name: 'mail', image: 'img/gmail.svg'},
  {name: 'telegram', image: 'img/telegram.svg'},
  {name: 'viber', image: 'img/viber.svg'},
  {name: 'slack', image: 'img/slack.svg'},
];

class Application {
    constructor(...args) {
      this.notifierTargets = Messengers.filter(item => args.indexOf(item.name)!=-1);
      this.notifier = new NotifierFactory(this.notifierTargets);
      this.createInterface = this.createInterface.bind(this);
      this.node = null;
    }
    createInterface(){
      const root = document.getElementById('root');
      const AppNode = document.createElement('section');

      AppNode.className = 'notifer_app';
      console.log( this.notifierTargets);
      AppNode.innerHTML =
        `
      <div class="notifer_app--container">
        <header>
          <input class="notifier__messanger" type="text"/>
          <button class="notifier__send">Send Message</button>
        </header>
        <div class="notifier__container">
        ${
          this.notifierTargets.map( item =>
            `
            <div class="notifier__item" data-slug="${item.name}">
              <header class="notifier__header">
                <img width="25" src="${item.image}"/>
                <span>${item.name}</span>
              </header>
              <div class="notifier__messages"></div>
            </div>
            `).join('')
          }
        </div>
      </div>
    `;
      const container = AppNode.querySelector('.notifier__container');
      const btn = AppNode.querySelector('.notifier__send');
      const input = AppNode.querySelector('.notifier__messanger');
      btn.addEventListener('click', () => {
        let value = input.value;
        this.notifier.sendMessage(value, this.node);
      });

      this.node = AppNode;
      root.appendChild(AppNode);
    }
  }

export default Application;
