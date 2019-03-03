let wrap = document.getElementById('wrap');

fetch('http://www.json-generator.com/api/json/get/cevUqrvwPm?indent=2')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((item, i) => {
            if ((i+1)%3===0) {
                new Advertisment(item).render();
            } else {
                new Post(item).render();
            }
        });
    });

class Post {
    constructor({_id, title, picture, description, likes}) {
        this._id = _id;
        this.title = title;
        this.picture = picture;
        this.description = description;
        this.likes = likes;
        this.likesCount = this.likesCount.bind(this);
        this.propertyChange = this.propertyChange.bind(this);
    }
    render() {
        let nodeInDom = document.querySelector(`.post${this._id}`);
        let node = (nodeInDom===null) ? document.createElement('div') : nodeInDom;
        node.className = `post post${this._id}`;
        node.innerHTML = `            
                <div class="post__title">${this.title}</div>
                <div class="post__image">
                    <img src="${this.picture}"/>
                </div>
                <div class="post__description">${this.description}</div>
                <div class="post__footer">
                    <button class="post__like"><span><i class="fas fa-heart"></i>${this.likes}</span>Like!</button>
                </div>           
        `;
        if (nodeInDom===null) wrap.appendChild(node);

        let likeBtn = node.querySelector('.post__like');
        likeBtn.onclick = this.likesCount;
    }
    likesCount() {
        this.likes++;
        this.render();
    }
    propertyChange = (prop, newValue) => {
        Object.defineProperty(this, prop, {configurable: true});
        Object.defineProperty(this, prop, {value: newValue} );
    }
}
class Advertisment extends Post {
    constructor({_id, title, picture, description, likes}) {
        super ({_id, title, picture, description, likes});
        this.isBought = false;
        this.buyItem = this.buyItem.bind(this);
    }
    render() {
        let nodeInDom = document.querySelector(`.adv${this._id}`);
        let node = (nodeInDom===null) ? document.createElement('div') : nodeInDom;
        node.className = `post adv${this._id}`;
        node.innerHTML = `            
                <div class="post__title adv">${this.title}</div>
                <div class="post__image">
                    <img src="${this.picture}"/>
                </div>
                <div class="post__description">${this.description}</div>
                <div class="post__footer">
                    <button class="post__like"><span><i class="fas fa-heart"></i>${this.likes}</span>Like!</button>
                    <div class="adv__btn"></div>
                </div>           
        `;
        if (nodeInDom===null) wrap.appendChild(node);

        let likeBtn = node.querySelector('.post__like');
        likeBtn.onclick = this.likesCount;

        let advBtn = node.querySelector('.adv__btn');
        advBtn.innerHTML = (this.isBought) ? `<p>Congrats! it's yours</p>` : `<button class="adv__buy">Buy now!</button>`;

        let buyBtn = node.querySelector('.adv__buy');
        buyBtn.onclick = this.buyItem;
    }
    buyItem() {
        this.isBought = true;
        this.render();
    }

}

