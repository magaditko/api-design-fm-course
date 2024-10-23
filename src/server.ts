import express from 'express'
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
  // console.log('hello expres')
  // res.status(200);
  // res.json({message: 'hello'}) 

  // if we pass something to next it is treated like an error
  // we have to handle async errors and tell Express 
  setTimeout(() => {
    next(new Error('some error message' ))
  }, 10)
})

app.use('/api', protect, router)

app.post('/user', createNewUser);
app.post('/signin', signin)

app.use((err, req, res, next) => {
  console.log(err);
  res.json({message: 'oops! there was an error!'})

})

export default app;