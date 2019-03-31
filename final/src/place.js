class Place {
    constructor(row, number, parentNode) {
        this.row = row;
        this.number = number;
        this.parentNode = parentNode;
    }
    render() {
        const place = document.createElement('li');
        place.innerHTML = `
        <a href="#" 
            class="place ${(this.isActive) ? 'active' : null}" 
            data-row="${this.row}" 
            data-place="${this.number}"
            data-type = "${this.type}"
            data-price = "${this.price}" >
           </a>`
        this.parentNode.appendChild(place);
    }
    checkIsActive(array) {
        if (!array.find(item => item.row===this.row && item.place===this.number)) this.isActive = true;
    }
    setPrices(priceList) {
        let priceItem = priceList.find(item => item.rows.indexOf(this.row) !==-1);
            this.price = priceItem.price;
            this.type = priceItem.type;
    }
}



export default Place;