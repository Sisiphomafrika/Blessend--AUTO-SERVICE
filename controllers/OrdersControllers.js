import express from 'express';
import bodyParser from 'body-parser';
import { orders } from '../model/index.js';
const orderRouter = express.Router();
orderRouter.get('/', (req, res) => {
  try {
    orders.fetchOrders(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to retrieve orders',
    });
  }
});
orderRouter.get('/:id', (req, res) => {
  try {
    orders.fetchOrder(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to retrieve a order',
    });
  }
});
orderRouter.post('/addOrder', bodyParser.json(), (req, res) => {
  try {
    orders.addOrder(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to add a new order',
    });
  }
});
orderRouter.patch('/update/:id', bodyParser.json(), (req, res) => {
  try {
    orders.updateOrder(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to update a order',
    });
  }
});
orderRouter.delete('/delete/:id', (req, res) => {
  try {
    orders.deleteOrder(req, res);
  } catch (e) {
    res.json({
      status: res.statusCode,
      msg: 'Failed to delete a Order',
    });
  }
});
export { orderRouter };