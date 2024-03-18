import { Users } from './users.js';
import { Products } from './Products.js';
import { Orders } from './Orders.js';

let users = new Users();
let products = new Products();
let orders = new Orders();

export {
    users,
    products,
    orders
};