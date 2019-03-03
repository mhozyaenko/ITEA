const Ingredients = [
    'Булка',
    'Огурчик',
    'Котлетка',
    'Бекон',
    'Рыбная котлета',
    'Соус карри',
    'Кисло-сладкий соус',
    'Помидорка',
    'Маслины',
    'Острый перец',
    'Капуста',
    'Кунжут',
    'Сыр Чеддер',
    'Сыр Виолла',
    'Сыр Гауда',
    'Майонез'
];
let OurMenu = [];
let OurOrders = [];

class Burger {
    constructor(name, ingredients, cookingTime) {
        this.name = name;
        this.ingredients = ingredients;
        this.cookingTime = cookingTime;
        this.showComposition = this.showComposition.bind(this);
    }
    showComposition = () => {
        if (this.ingredients.length !==0) {
            this.ingredients.map(item => console.log(`Burger ${this.name} consists of ${item}`));
        }
    }
}
class Order {
    constructor(name = '', keyword='', ingredient='') {
        this.name = name;
        this.id = Math.floor(Math.random()*10000);
        this.keyword = keyword;
        this.ingredient = ingredient;
        this.showOrderMessage = this.showOrderMessage.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.randomBurger = this.randomBurger.bind(this);
        this.getRandomBurger = this.getRandomBurger.bind(this);
    }
    createOrder =() => {
        if((this.name !== '') && (this.keyword ==='')) new Order1(this.name).getOrderBurger();
        if((this.name === '') && (this.keyword ==='has')) new Order2(this.ingredient).getOrderBurger();
        if((this.name==='')&& (this.keyword ==='except')) new Order3(this.ingredient).getOrderBurger();
    }

    showOrderMessage = (order, orderedBurger) => {
        (orderedBurger.length > 0) ?
            orderedBurger.forEach(item => console.log(`${order}. Бургер ${item.name}, будет готов через ${item.cookingTime} минут`)) :
            this.randomBurger();
    }
    randomBurger = () => {
        let confirmed = false;
        this.getRandomBurger();
        while (!confirmed) {
            confirmed = confirm('подходит ли такой вариант?');
            this.getRandomBurger();
        }
    }
    getRandomBurger = () => {
        let index = (Math.floor(Math.random()*(OurOrders.length)));
        let ordered = OurMenu[index];
        console.log(`К сожалению, такого бургера у нас нет, можете попробовать ${ordered.name}`);
    }
}
class Order1 extends Order{
    constructor(name) {
       super(name);
       this.getOrderBurger = this.getOrderBurger.bind(this);
    }
    getOrderBurger =() => {
        let orderedBurger = OurMenu.filter(item => item.name===this.name);
        this.showOrderMessage('Order1', orderedBurger);
    }
}
class Order2 extends Order{
    constructor(ingredient) {
        super (ingredient);
        this.ingredient = ingredient;
        this.getOrderBurger = this.getOrderBurger.bind(this);
    }
    getOrderBurger = () => {
        let orderedBurger = OurMenu.filter(item => item.ingredients.includes(this.ingredient));
        this.showOrderMessage('Order2', orderedBurger);
    }
}
class Order3 extends Order{
    constructor(ingredient) {
        super (ingredient);
        this.ingredient = ingredient;
        this.getOrderBurger = this.getOrderBurger.bind(this);
    }
    getOrderBurger = () => {
        let orderedBurger = OurMenu.filter(item => !item.ingredients.includes(this.ingredient));
        this.showOrderMessage('Order3', orderedBurger);
    }
}
OurMenu.push(new Burger ('Hamburger', ['Булка', 'Котлетка', 'Помидорка', 'Майонез'], 15));
OurMenu.push(new Burger ('Cheeseburger', ['Булка', 'Котлетка', 'Сыр Чеддер', 'Майонез', 'Огурчик',], 10));
OurMenu.push(new Burger ('Fishburger', ['Булка', 'Огурчик', 'Помидорка', 'Кунжут', 'Майонез'], 17));
OurMenu.push(new Burger ('VeganBurger', ['Кунжут', 'Котлетка', 'Помидорка', 'Капуста', 'Майонез'], 20));

console.log(OurMenu);
OurMenu[1].showComposition();

OurOrders.push(new Order('Hamburger'));
OurOrders.push(new Order('', 'has', 'Сыр Чеддер'));
OurOrders.push(new Order('', 'except', 'Булка'));
OurOrders.push(new Order('', 'has', 'Соус карри'));
console.log(OurOrders);
OurOrders.map(item => item.createOrder());
