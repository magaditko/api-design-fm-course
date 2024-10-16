import { Router } from 'express';
import { body, oneOf, validationResult } from 'express-validator';
import { handleInputErrors } from './modules/middleware';
import { createNewProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product';
import { createNewUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';

const router = Router();

/* PRODUCT */

router.get('/product', getProducts)

router.get('/product/:id', getOneProduct)

router.post('/product', body('name').isString(), handleInputErrors, createNewProduct)

router.put('/product/:id', body("name").isString(), handleInputErrors, updateProduct)

router.delete('/product/:id', deleteProduct)

/* UPDATE */

router.get('/update', getUpdates)

router.get('/update/:id', getOneUpdate)

router.post('/update',
  body('title').exists().isString(),
  body('body').exists().isString(),
  body('productId').exists().isString(),
  createNewUpdate)

router.put('/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
  body('version').optional(),
  updateUpdate)

router.delete('/update/:id', deleteUpdate)

/* UPDATE POINT */

router.get('/updatepoint', (req, res) => {

})

router.get('/updatepoint/:id', (req, res) => {

})

router.post('/updatepoint',
  body('name').exists(),
  body('description').exists(),
  body('updateId').exists().isString(),
  (req, res) => {

})

router.put('/updatepoint/:id',
  body('name').exists().isString(),
  body('description').exists().isString(),
  (req, res) => {

})

router.delete('/updatepoint/:id', (req, res) => {

})

export default router;