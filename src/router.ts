import { Router } from 'express';
import { body, oneOf, validationResult } from 'express-validator';
import { handleInputErrors } from './modules/middleware';

const router = Router();

/* PRODUCT */

router.get('/product', (req, res) => {
  res.json({ message: 'doggo' })
})

router.get('/product/:id', (req, res) => {

})

router.post('/product', body('name').isString(), handleInputErrors ,(req, res) => {
  
})

router.put('/product/:id', body("name").isString(), handleInputErrors, (req, res) => {
  
})

router.delete('/product/:id', (req, res) => {

})

/* UPDATE */

router.get('/update', (req, res) => {

})

router.get('/update/:id', (req, res) => {

})

router.post('/update',
  body('title').exists().isString(),
  body('body').exists().isString(), (req, res) => {

})

router.put('/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional(),
  (req, res) => {
    //title, body, status, version, asset
})

router.delete('/update/:id', (req, res) => {

})

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