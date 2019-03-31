import CinemaHall from './cinemaHall';

const PriceList = [
    {
        type: 'econom',
        rows: [1, 2],
        price: 60
    },
    {
        type: 'standart',
        rows: [3, 4],
        price: 90
    },
    {
        type: 'vip',
        rows: [5],
        price: 115
    }
]

let cinema = new CinemaHall(5, 10, PriceList);
cinema.render();