import * as dotenv from 'dotenv';
import config from './config'
dotenv.config()

import app from './server'

app.listen(config.port, () => {
  console.log(`app listen on localhost:${config.port}`)
})