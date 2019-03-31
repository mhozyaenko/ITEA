import { Observable, Observer } from './observer';
import Place from './place';

let observable = new Observable();
let addToCart = new Observer( ({cart, item}) => {
    cart.push( item );
});
observable.addObserver(addToCart);

const removeFromCart = (cart, item) => {
    let removed = cart.findIndex(elem=> (elem.row===item.row) && (elem.place===item.place));
    cart.splice(removed, 1);
};
const submitOrder = (cart) => {
    if (localStorage.getItem('ordered')) {
        console.log('local storage');
    } else {
        localStorage.setItem('ordered', JSON.stringify(cart));
    }
};

class CinemaHall{
    constructor(rows, places, priceList) {
        this.rows = rows;
        this.places = places;
        this.priceList = priceList;
        this.cart = [];
        this.ordered = [];
    }
    render() {
        if(localStorage.getItem('ordered')) this.ordered = JSON.parse(localStorage.getItem('ordered'));
        const root = document.getElementById('root');
        const nodeInDom = document.querySelector('.wrap');
        let node;
        if (nodeInDom===null) {
            node = document.createElement('div');
            node.className = 'wrap';
        } else {
            node = nodeInDom;
            node.innerHTML = '';
        }
        node.innerHTML += `
        <div class="hall">
        <div class="screen"></div>
        <div class="schema"></div>
</div>
        `;
        const schema = node.querySelector('.schema');
        for (let i=1; i<=this.rows; i++) {
            schema.innerHTML += `<ul class="row row-${i}"></ul>`;
            let row = schema.querySelector(`.row-${i}`);
            for (let j=1; j<=this.places; j++) {
                let place = new Place(i, j, row, true);
                place.checkIsActive([...this.ordered, ...this.cart]);
                place.setPrices(this.priceList);
                place.render();
            }
        }
        if (this.cart.length>0) {
            node.innerHTML += `<div class="cart"></div>`;
            let cartNode = document.querySelector('.cart');
            this.cart.forEach(item => {
                cartNode.innerHTML += `<div class="cartItem">
            <div class="cartItem-infoBlock">
                <strong>${item.row}</strong>
                <p>ряд</p>
            </div>
            <div class="cartItem-infoBlock">
                <strong>${item.place}</strong>
                <p>место</p>
            </div>
            <div class="cartItem-infoBlock priceBlock">
                <strong>${item.price} грн</strong>                
            </div>
            <button class="removeFromCart">X</button>
</div>`
            });
            cartNode.innerHTML += `<button class="buyBtn">Купить <strong>${this.cart.reduce((sum, item) => {
                return sum+item.price
            }, 0)} грн </strong></button>`
        }
        root.addEventListener('click', (e)=> {
            e.preventDefault();
            if (e.target.matches('.active')) {
                observable.sendMessage({
                    cart: this.cart,
                    item: {
                        row: Number(e.target.dataset.row),
                        place: Number(e.target.dataset.place),
                        price: Number(e.target.dataset.price)}} );
                this.render();
            }
            if (e.target.matches('.removeFromCart')) {
                removeFromCart(this.cart, {
                    row: Number(e.target.dataset.row),
                    place: Number(e.target.dataset.place),
                });
                this.render();
            }
            if (e.target.matches('.buyBtn')) {
                submitOrder(this.cart);
                alert('order submitted');
                this.cart = [];
                this.render();
            }
        }, {once: true});
        root.appendChild(node);
    }
}

export default CinemaHall;